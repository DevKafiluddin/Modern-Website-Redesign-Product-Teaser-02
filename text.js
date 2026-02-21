(function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        o(c);
    new MutationObserver(c => {
        for (const f of c)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && o(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity),
        c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function o(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const f = r(c);
        fetch(c.href, f)
    }
}
)();
function gy(u) {
    return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u
}
function py(u) {
    if (Object.prototype.hasOwnProperty.call(u, "__esModule"))
        return u;
    var a = u.default;
    if (typeof a == "function") {
        var r = function o() {
            var c = !1;
            try {
                c = this instanceof o
            } catch {}
            return c ? Reflect.construct(a, arguments, this.constructor) : a.apply(this, arguments)
        };
        r.prototype = a.prototype
    } else
        r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.keys(u).forEach(function(o) {
        var c = Object.getOwnPropertyDescriptor(u, o);
        Object.defineProperty(r, o, c.get ? c : {
            enumerable: !0,
            get: function() {
                return u[o]
            }
        })
    }),
    r
}
var no = {
    exports: {}
}
  , Ha = {};
var Zh;
function yy() {
    if (Zh)
        return Ha;
    Zh = 1;
    var u = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.fragment");
    function r(o, c, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f),
        c.key !== void 0 && (d = "" + c.key),
        "key"in c) {
            f = {};
            for (var m in c)
                m !== "key" && (f[m] = c[m])
        } else
            f = c;
        return c = f.ref,
        {
            $$typeof: u,
            type: o,
            key: d,
            ref: c !== void 0 ? c : null,
            props: f
        }
    }
    return Ha.Fragment = a,
    Ha.jsx = r,
    Ha.jsxs = r,
    Ha
}
var Kh;
function vy() {
    return Kh || (Kh = 1,
    no.exports = yy()),
    no.exports
}
var R = vy()
  , lo = {
    exports: {}
}
  , ie = {};
var kh;
function by() {
    if (kh)
        return ie;
    kh = 1;
    var u = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , m = Symbol.for("react.forward_ref")
      , g = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , b = Symbol.for("react.lazy")
      , v = Symbol.for("react.activity")
      , S = Symbol.iterator;
    function x(C) {
        return C === null || typeof C != "object" ? null : (C = S && C[S] || C["@@iterator"],
        typeof C == "function" ? C : null)
    }
    var E = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , O = Object.assign
      , _ = {};
    function L(C, q, K) {
        this.props = C,
        this.context = q,
        this.refs = _,
        this.updater = K || E
    }
    L.prototype.isReactComponent = {},
    L.prototype.setState = function(C, q) {
        if (typeof C != "object" && typeof C != "function" && C != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, q, "setState")
    }
    ,
    L.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate")
    }
    ;
    function U() {}
    U.prototype = L.prototype;
    function V(C, q, K) {
        this.props = C,
        this.context = q,
        this.refs = _,
        this.updater = K || E
    }
    var J = V.prototype = new U;
    J.constructor = V,
    O(J, L.prototype),
    J.isPureReactComponent = !0;
    var W = Array.isArray;
    function oe() {}
    var I = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , pe = Object.prototype.hasOwnProperty;
    function Ee(C, q, K) {
        var $ = K.ref;
        return {
            $$typeof: u,
            type: C,
            key: q,
            ref: $ !== void 0 ? $ : null,
            props: K
        }
    }
    function Q(C, q) {
        return Ee(C.type, q, C.props)
    }
    function Z(C) {
        return typeof C == "object" && C !== null && C.$$typeof === u
    }
    function k(C) {
        var q = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + C.replace(/[=:]/g, function(K) {
            return q[K]
        })
    }
    var le = /\/+/g;
    function ce(C, q) {
        return typeof C == "object" && C !== null && C.key != null ? k("" + C.key) : q.toString(36)
    }
    function Ce(C) {
        switch (C.status) {
        case "fulfilled":
            return C.value;
        case "rejected":
            throw C.reason;
        default:
            switch (typeof C.status == "string" ? C.then(oe, oe) : (C.status = "pending",
            C.then(function(q) {
                C.status === "pending" && (C.status = "fulfilled",
                C.value = q)
            }, function(q) {
                C.status === "pending" && (C.status = "rejected",
                C.reason = q)
            })),
            C.status) {
            case "fulfilled":
                return C.value;
            case "rejected":
                throw C.reason
            }
        }
        throw C
    }
    function j(C, q, K, $, ue) {
        var fe = typeof C;
        (fe === "undefined" || fe === "boolean") && (C = null);
        var _e = !1;
        if (C === null)
            _e = !0;
        else
            switch (fe) {
            case "bigint":
            case "string":
            case "number":
                _e = !0;
                break;
            case "object":
                switch (C.$$typeof) {
                case u:
                case a:
                    _e = !0;
                    break;
                case b:
                    return _e = C._init,
                    j(_e(C._payload), q, K, $, ue)
                }
            }
        if (_e)
            return ue = ue(C),
            _e = $ === "" ? "." + ce(C, 0) : $,
            W(ue) ? (K = "",
            _e != null && (K = _e.replace(le, "$&/") + "/"),
            j(ue, q, K, "", function(Zl) {
                return Zl
            })) : ue != null && (Z(ue) && (ue = Q(ue, K + (ue.key == null || C && C.key === ue.key ? "" : ("" + ue.key).replace(le, "$&/") + "/") + _e)),
            q.push(ue)),
            1;
        _e = 0;
        var nt = $ === "" ? "." : $ + ":";
        if (W(C))
            for (var Be = 0; Be < C.length; Be++)
                $ = C[Be],
                fe = nt + ce($, Be),
                _e += j($, q, K, fe, ue);
        else if (Be = x(C),
        typeof Be == "function")
            for (C = Be.call(C),
            Be = 0; !($ = C.next()).done; )
                $ = $.value,
                fe = nt + ce($, Be++),
                _e += j($, q, K, fe, ue);
        else if (fe === "object") {
            if (typeof C.then == "function")
                return j(Ce(C), q, K, $, ue);
            throw q = String(C),
            Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.")
        }
        return _e
    }
    function X(C, q, K) {
        if (C == null)
            return C;
        var $ = []
          , ue = 0;
        return j(C, $, "", "", function(fe) {
            return q.call(K, fe, ue++)
        }),
        $
    }
    function te(C) {
        if (C._status === -1) {
            var q = C._result;
            q = q(),
            q.then(function(K) {
                (C._status === 0 || C._status === -1) && (C._status = 1,
                C._result = K)
            }, function(K) {
                (C._status === 0 || C._status === -1) && (C._status = 2,
                C._result = K)
            }),
            C._status === -1 && (C._status = 0,
            C._result = q)
        }
        if (C._status === 1)
            return C._result.default;
        throw C._result
    }
    var ve = typeof reportError == "function" ? reportError : function(C) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var q = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
                error: C
            });
            if (!window.dispatchEvent(q))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", C);
            return
        }
        console.error(C)
    }
      , we = {
        map: X,
        forEach: function(C, q, K) {
            X(C, function() {
                q.apply(this, arguments)
            }, K)
        },
        count: function(C) {
            var q = 0;
            return X(C, function() {
                q++
            }),
            q
        },
        toArray: function(C) {
            return X(C, function(q) {
                return q
            }) || []
        },
        only: function(C) {
            if (!Z(C))
                throw Error("React.Children.only expected to receive a single React element child.");
            return C
        }
    };
    return ie.Activity = v,
    ie.Children = we,
    ie.Component = L,
    ie.Fragment = r,
    ie.Profiler = c,
    ie.PureComponent = V,
    ie.StrictMode = o,
    ie.Suspense = g,
    ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I,
    ie.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(C) {
            return I.H.useMemoCache(C)
        }
    },
    ie.cache = function(C) {
        return function() {
            return C.apply(null, arguments)
        }
    }
    ,
    ie.cacheSignal = function() {
        return null
    }
    ,
    ie.cloneElement = function(C, q, K) {
        if (C == null)
            throw Error("The argument must be a React element, but you passed " + C + ".");
        var $ = O({}, C.props)
          , ue = C.key;
        if (q != null)
            for (fe in q.key !== void 0 && (ue = "" + q.key),
            q)
                !pe.call(q, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && q.ref === void 0 || ($[fe] = q[fe]);
        var fe = arguments.length - 2;
        if (fe === 1)
            $.children = K;
        else if (1 < fe) {
            for (var _e = Array(fe), nt = 0; nt < fe; nt++)
                _e[nt] = arguments[nt + 2];
            $.children = _e
        }
        return Ee(C.type, ue, $)
    }
    ,
    ie.createContext = function(C) {
        return C = {
            $$typeof: d,
            _currentValue: C,
            _currentValue2: C,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        C.Provider = C,
        C.Consumer = {
            $$typeof: f,
            _context: C
        },
        C
    }
    ,
    ie.createElement = function(C, q, K) {
        var $, ue = {}, fe = null;
        if (q != null)
            for ($ in q.key !== void 0 && (fe = "" + q.key),
            q)
                pe.call(q, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (ue[$] = q[$]);
        var _e = arguments.length - 2;
        if (_e === 1)
            ue.children = K;
        else if (1 < _e) {
            for (var nt = Array(_e), Be = 0; Be < _e; Be++)
                nt[Be] = arguments[Be + 2];
            ue.children = nt
        }
        if (C && C.defaultProps)
            for ($ in _e = C.defaultProps,
            _e)
                ue[$] === void 0 && (ue[$] = _e[$]);
        return Ee(C, fe, ue)
    }
    ,
    ie.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ie.forwardRef = function(C) {
        return {
            $$typeof: m,
            render: C
        }
    }
    ,
    ie.isValidElement = Z,
    ie.lazy = function(C) {
        return {
            $$typeof: b,
            _payload: {
                _status: -1,
                _result: C
            },
            _init: te
        }
    }
    ,
    ie.memo = function(C, q) {
        return {
            $$typeof: p,
            type: C,
            compare: q === void 0 ? null : q
        }
    }
    ,
    ie.startTransition = function(C) {
        var q = I.T
          , K = {};
        I.T = K;
        try {
            var $ = C()
              , ue = I.S;
            ue !== null && ue(K, $),
            typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(oe, ve)
        } catch (fe) {
            ve(fe)
        } finally {
            q !== null && K.types !== null && (q.types = K.types),
            I.T = q
        }
    }
    ,
    ie.unstable_useCacheRefresh = function() {
        return I.H.useCacheRefresh()
    }
    ,
    ie.use = function(C) {
        return I.H.use(C)
    }
    ,
    ie.useActionState = function(C, q, K) {
        return I.H.useActionState(C, q, K)
    }
    ,
    ie.useCallback = function(C, q) {
        return I.H.useCallback(C, q)
    }
    ,
    ie.useContext = function(C) {
        return I.H.useContext(C)
    }
    ,
    ie.useDebugValue = function() {}
    ,
    ie.useDeferredValue = function(C, q) {
        return I.H.useDeferredValue(C, q)
    }
    ,
    ie.useEffect = function(C, q) {
        return I.H.useEffect(C, q)
    }
    ,
    ie.useEffectEvent = function(C) {
        return I.H.useEffectEvent(C)
    }
    ,
    ie.useId = function() {
        return I.H.useId()
    }
    ,
    ie.useImperativeHandle = function(C, q, K) {
        return I.H.useImperativeHandle(C, q, K)
    }
    ,
    ie.useInsertionEffect = function(C, q) {
        return I.H.useInsertionEffect(C, q)
    }
    ,
    ie.useLayoutEffect = function(C, q) {
        return I.H.useLayoutEffect(C, q)
    }
    ,
    ie.useMemo = function(C, q) {
        return I.H.useMemo(C, q)
    }
    ,
    ie.useOptimistic = function(C, q) {
        return I.H.useOptimistic(C, q)
    }
    ,
    ie.useReducer = function(C, q, K) {
        return I.H.useReducer(C, q, K)
    }
    ,
    ie.useRef = function(C) {
        return I.H.useRef(C)
    }
    ,
    ie.useState = function(C) {
        return I.H.useState(C)
    }
    ,
    ie.useSyncExternalStore = function(C, q, K) {
        return I.H.useSyncExternalStore(C, q, K)
    }
    ,
    ie.useTransition = function() {
        return I.H.useTransition()
    }
    ,
    ie.version = "19.2.4",
    ie
}
var Jh;
function Do() {
    return Jh || (Jh = 1,
    lo.exports = by()),
    lo.exports
}
var B = Do();
const $h = gy(B)
  , ae = u => typeof u == "string"
  , qa = () => {
    let u, a;
    const r = new Promise( (o, c) => {
        u = o,
        a = c
    }
    );
    return r.resolve = u,
    r.reject = a,
    r
}
  , Fh = u => u == null ? "" : "" + u
  , xy = (u, a, r) => {
    u.forEach(o => {
        a[o] && (r[o] = a[o])
    }
    )
}
  , Sy = /###/g
  , Wh = u => u && u.indexOf("###") > -1 ? u.replace(Sy, ".") : u
  , Ih = u => !u || ae(u)
  , ka = (u, a, r) => {
    const o = ae(a) ? a.split(".") : a;
    let c = 0;
    for (; c < o.length - 1; ) {
        if (Ih(u))
            return {};
        const f = Wh(o[c]);
        !u[f] && r && (u[f] = new r),
        Object.prototype.hasOwnProperty.call(u, f) ? u = u[f] : u = {},
        ++c
    }
    return Ih(u) ? {} : {
        obj: u,
        k: Wh(o[c])
    }
}
  , Ph = (u, a, r) => {
    const {obj: o, k: c} = ka(u, a, Object);
    if (o !== void 0 || a.length === 1) {
        o[c] = r;
        return
    }
    let f = a[a.length - 1]
      , d = a.slice(0, a.length - 1)
      , m = ka(u, d, Object);
    for (; m.obj === void 0 && d.length; )
        f = `${d[d.length - 1]}.${f}`,
        d = d.slice(0, d.length - 1),
        m = ka(u, d, Object),
        m?.obj && typeof m.obj[`${m.k}.${f}`] < "u" && (m.obj = void 0);
    m.obj[`${m.k}.${f}`] = r
}
  , Ey = (u, a, r, o) => {
    const {obj: c, k: f} = ka(u, a, Object);
    c[f] = c[f] || [],
    c[f].push(r)
}
  , Tu = (u, a) => {
    const {obj: r, k: o} = ka(u, a);
    if (r && Object.prototype.hasOwnProperty.call(r, o))
        return r[o]
}
  , wy = (u, a, r) => {
    const o = Tu(u, r);
    return o !== void 0 ? o : Tu(a, r)
}
  , tg = (u, a, r) => {
    for (const o in a)
        o !== "__proto__" && o !== "constructor" && (o in u ? ae(u[o]) || u[o]instanceof String || ae(a[o]) || a[o]instanceof String ? r && (u[o] = a[o]) : tg(u[o], a[o], r) : u[o] = a[o]);
    return u
}
  , Gl = u => u.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _y = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const Cy = u => ae(u) ? u.replace(/[&<>"'\/]/g, a => _y[a]) : u;
class Ay {
    constructor(a) {
        this.capacity = a,
        this.regExpMap = new Map,
        this.regExpQueue = []
    }
    getRegExp(a) {
        const r = this.regExpMap.get(a);
        if (r !== void 0)
            return r;
        const o = new RegExp(a);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
        this.regExpMap.set(a, o),
        this.regExpQueue.push(a),
        o
    }
}
const Oy = [" ", ",", "?", "!", ";"]
  , Ty = new Ay(20)
  , Ry = (u, a, r) => {
    a = a || "",
    r = r || "";
    const o = Oy.filter(d => a.indexOf(d) < 0 && r.indexOf(d) < 0);
    if (o.length === 0)
        return !0;
    const c = Ty.getRegExp(`(${o.map(d => d === "?" ? "\\?" : d).join("|")})`);
    let f = !c.test(u);
    if (!f) {
        const d = u.indexOf(r);
        d > 0 && !c.test(u.substring(0, d)) && (f = !0)
    }
    return f
}
  , Ro = (u, a, r=".") => {
    if (!u)
        return;
    if (u[a])
        return Object.prototype.hasOwnProperty.call(u, a) ? u[a] : void 0;
    const o = a.split(r);
    let c = u;
    for (let f = 0; f < o.length; ) {
        if (!c || typeof c != "object")
            return;
        let d, m = "";
        for (let g = f; g < o.length; ++g)
            if (g !== f && (m += r),
            m += o[g],
            d = c[m],
            d !== void 0) {
                if (["string", "number", "boolean"].indexOf(typeof d) > -1 && g < o.length - 1)
                    continue;
                f += g - f + 1;
                break
            }
        c = d
    }
    return c
}
  , Ja = u => u?.replace("_", "-")
  , Ny = {
    type: "logger",
    log(u) {
        this.output("log", u)
    },
    warn(u) {
        this.output("warn", u)
    },
    error(u) {
        this.output("error", u)
    },
    output(u, a) {
        console?.[u]?.apply?.(console, a)
    }
};
class Ru {
    constructor(a, r={}) {
        this.init(a, r)
    }
    init(a, r={}) {
        this.prefix = r.prefix || "i18next:",
        this.logger = a || Ny,
        this.options = r,
        this.debug = r.debug
    }
    log(...a) {
        return this.forward(a, "log", "", !0)
    }
    warn(...a) {
        return this.forward(a, "warn", "", !0)
    }
    error(...a) {
        return this.forward(a, "error", "")
    }
    deprecate(...a) {
        return this.forward(a, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(a, r, o, c) {
        return c && !this.debug ? null : (ae(a[0]) && (a[0] = `${o}${this.prefix} ${a[0]}`),
        this.logger[r](a))
    }
    create(a) {
        return new Ru(this.logger,{
            prefix: `${this.prefix}:${a}:`,
            ...this.options
        })
    }
    clone(a) {
        return a = a || this.options,
        a.prefix = a.prefix || this.prefix,
        new Ru(this.logger,a)
    }
}
var Yt = new Ru;
class Lu {
    constructor() {
        this.observers = {}
    }
    on(a, r) {
        return a.split(" ").forEach(o => {
            this.observers[o] || (this.observers[o] = new Map);
            const c = this.observers[o].get(r) || 0;
            this.observers[o].set(r, c + 1)
        }
        ),
        this
    }
    off(a, r) {
        if (this.observers[a]) {
            if (!r) {
                delete this.observers[a];
                return
            }
            this.observers[a].delete(r)
        }
    }
    emit(a, ...r) {
        this.observers[a] && Array.from(this.observers[a].entries()).forEach( ([c,f]) => {
            for (let d = 0; d < f; d++)
                c(...r)
        }
        ),
        this.observers["*"] && Array.from(this.observers["*"].entries()).forEach( ([c,f]) => {
            for (let d = 0; d < f; d++)
                c.apply(c, [a, ...r])
        }
        )
    }
}
class em extends Lu {
    constructor(a, r={
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(),
        this.data = a || {},
        this.options = r,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(a) {
        this.options.ns.indexOf(a) < 0 && this.options.ns.push(a)
    }
    removeNamespaces(a) {
        const r = this.options.ns.indexOf(a);
        r > -1 && this.options.ns.splice(r, 1)
    }
    getResource(a, r, o, c={}) {
        const f = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator
          , d = c.ignoreJSONStructure !== void 0 ? c.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let m;
        a.indexOf(".") > -1 ? m = a.split(".") : (m = [a, r],
        o && (Array.isArray(o) ? m.push(...o) : ae(o) && f ? m.push(...o.split(f)) : m.push(o)));
        const g = Tu(this.data, m);
        return !g && !r && !o && a.indexOf(".") > -1 && (a = m[0],
        r = m[1],
        o = m.slice(2).join(".")),
        g || !d || !ae(o) ? g : Ro(this.data?.[a]?.[r], o, f)
    }
    addResource(a, r, o, c, f={
        silent: !1
    }) {
        const d = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
        let m = [a, r];
        o && (m = m.concat(d ? o.split(d) : o)),
        a.indexOf(".") > -1 && (m = a.split("."),
        c = r,
        r = m[1]),
        this.addNamespaces(r),
        Ph(this.data, m, c),
        f.silent || this.emit("added", a, r, o, c)
    }
    addResources(a, r, o, c={
        silent: !1
    }) {
        for (const f in o)
            (ae(o[f]) || Array.isArray(o[f])) && this.addResource(a, r, f, o[f], {
                silent: !0
            });
        c.silent || this.emit("added", a, r, o)
    }
    addResourceBundle(a, r, o, c, f, d={
        silent: !1,
        skipCopy: !1
    }) {
        let m = [a, r];
        a.indexOf(".") > -1 && (m = a.split("."),
        c = o,
        o = r,
        r = m[1]),
        this.addNamespaces(r);
        let g = Tu(this.data, m) || {};
        d.skipCopy || (o = JSON.parse(JSON.stringify(o))),
        c ? tg(g, o, f) : g = {
            ...g,
            ...o
        },
        Ph(this.data, m, g),
        d.silent || this.emit("added", a, r, o)
    }
    removeResourceBundle(a, r) {
        this.hasResourceBundle(a, r) && delete this.data[a][r],
        this.removeNamespaces(r),
        this.emit("removed", a, r)
    }
    hasResourceBundle(a, r) {
        return this.getResource(a, r) !== void 0
    }
    getResourceBundle(a, r) {
        return r || (r = this.options.defaultNS),
        this.getResource(a, r)
    }
    getDataByLanguage(a) {
        return this.data[a]
    }
    hasLanguageSomeTranslations(a) {
        const r = this.getDataByLanguage(a);
        return !!(r && Object.keys(r) || []).find(c => r[c] && Object.keys(r[c]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var ng = {
    processors: {},
    addPostProcessor(u) {
        this.processors[u.name] = u
    },
    handle(u, a, r, o, c) {
        return u.forEach(f => {
            a = this.processors[f]?.process(a, r, o, c) ?? a
        }
        ),
        a
    }
};
const lg = Symbol("i18next/PATH_KEY");
function My() {
    const u = []
      , a = Object.create(null);
    let r;
    return a.get = (o, c) => (r?.revoke?.(),
    c === lg ? u : (u.push(c),
    r = Proxy.revocable(o, a),
    r.proxy)),
    Proxy.revocable(Object.create(null), a).proxy
}
function No(u, a) {
    const {[lg]: r} = u(My());
    return r.join(a?.keySeparator ?? ".")
}
const tm = {}
  , nm = u => !ae(u) && typeof u != "boolean" && typeof u != "number";
class Nu extends Lu {
    constructor(a, r={}) {
        super(),
        xy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], a, this),
        this.options = r,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.logger = Yt.create("translator")
    }
    changeLanguage(a) {
        a && (this.language = a)
    }
    exists(a, r={
        interpolation: {}
    }) {
        const o = {
            ...r
        };
        return a == null ? !1 : this.resolve(a, o)?.res !== void 0
    }
    extractFromKey(a, r) {
        let o = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
        o === void 0 && (o = ":");
        const c = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
        let f = r.ns || this.options.defaultNS || [];
        const d = o && a.indexOf(o) > -1
          , m = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !Ry(a, o, c);
        if (d && !m) {
            const g = a.match(this.interpolator.nestingRegexp);
            if (g && g.length > 0)
                return {
                    key: a,
                    namespaces: ae(f) ? [f] : f
                };
            const p = a.split(o);
            (o !== c || o === c && this.options.ns.indexOf(p[0]) > -1) && (f = p.shift()),
            a = p.join(c)
        }
        return {
            key: a,
            namespaces: ae(f) ? [f] : f
        }
    }
    translate(a, r, o) {
        let c = typeof r == "object" ? {
            ...r
        } : r;
        if (typeof c != "object" && this.options.overloadTranslationOptionHandler && (c = this.options.overloadTranslationOptionHandler(arguments)),
        typeof options == "object" && (c = {
            ...c
        }),
        c || (c = {}),
        a == null)
            return "";
        typeof a == "function" && (a = No(a, c)),
        Array.isArray(a) || (a = [String(a)]);
        const f = c.returnDetails !== void 0 ? c.returnDetails : this.options.returnDetails
          , d = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator
          , {key: m, namespaces: g} = this.extractFromKey(a[a.length - 1], c)
          , p = g[g.length - 1];
        let b = c.nsSeparator !== void 0 ? c.nsSeparator : this.options.nsSeparator;
        b === void 0 && (b = ":");
        const v = c.lng || this.language
          , S = c.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (v?.toLowerCase() === "cimode")
            return S ? f ? {
                res: `${p}${b}${m}`,
                usedKey: m,
                exactUsedKey: m,
                usedLng: v,
                usedNS: p,
                usedParams: this.getUsedParamsDetails(c)
            } : `${p}${b}${m}` : f ? {
                res: m,
                usedKey: m,
                exactUsedKey: m,
                usedLng: v,
                usedNS: p,
                usedParams: this.getUsedParamsDetails(c)
            } : m;
        const x = this.resolve(a, c);
        let E = x?.res;
        const O = x?.usedKey || m
          , _ = x?.exactUsedKey || m
          , L = ["[object Number]", "[object Function]", "[object RegExp]"]
          , U = c.joinArrays !== void 0 ? c.joinArrays : this.options.joinArrays
          , V = !this.i18nFormat || this.i18nFormat.handleAsObject
          , J = c.count !== void 0 && !ae(c.count)
          , W = Nu.hasDefaultValue(c)
          , oe = J ? this.pluralResolver.getSuffix(v, c.count, c) : ""
          , I = c.ordinal && J ? this.pluralResolver.getSuffix(v, c.count, {
            ordinal: !1
        }) : ""
          , pe = J && !c.ordinal && c.count === 0
          , Ee = pe && c[`defaultValue${this.options.pluralSeparator}zero`] || c[`defaultValue${oe}`] || c[`defaultValue${I}`] || c.defaultValue;
        let Q = E;
        V && !E && W && (Q = Ee);
        const Z = nm(Q)
          , k = Object.prototype.toString.apply(Q);
        if (V && Q && Z && L.indexOf(k) < 0 && !(ae(U) && Array.isArray(Q))) {
            if (!c.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const le = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(O, Q, {
                    ...c,
                    ns: g
                }) : `key '${m} (${this.language})' returned an object instead of string.`;
                return f ? (x.res = le,
                x.usedParams = this.getUsedParamsDetails(c),
                x) : le
            }
            if (d) {
                const le = Array.isArray(Q)
                  , ce = le ? [] : {}
                  , Ce = le ? _ : O;
                for (const j in Q)
                    if (Object.prototype.hasOwnProperty.call(Q, j)) {
                        const X = `${Ce}${d}${j}`;
                        W && !E ? ce[j] = this.translate(X, {
                            ...c,
                            defaultValue: nm(Ee) ? Ee[j] : void 0,
                            joinArrays: !1,
                            ns: g
                        }) : ce[j] = this.translate(X, {
                            ...c,
                            joinArrays: !1,
                            ns: g
                        }),
                        ce[j] === X && (ce[j] = Q[j])
                    }
                E = ce
            }
        } else if (V && ae(U) && Array.isArray(E))
            E = E.join(U),
            E && (E = this.extendTranslation(E, a, c, o));
        else {
            let le = !1
              , ce = !1;
            !this.isValidLookup(E) && W && (le = !0,
            E = Ee),
            this.isValidLookup(E) || (ce = !0,
            E = m);
            const j = (c.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && ce ? void 0 : E
              , X = W && Ee !== E && this.options.updateMissing;
            if (ce || le || X) {
                if (this.logger.log(X ? "updateKey" : "missingKey", v, p, m, X ? Ee : E),
                d) {
                    const C = this.resolve(m, {
                        ...c,
                        keySeparator: !1
                    });
                    C && C.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let te = [];
                const ve = this.languageUtils.getFallbackCodes(this.options.fallbackLng, c.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && ve && ve[0])
                    for (let C = 0; C < ve.length; C++)
                        te.push(ve[C]);
                else
                    this.options.saveMissingTo === "all" ? te = this.languageUtils.toResolveHierarchy(c.lng || this.language) : te.push(c.lng || this.language);
                const we = (C, q, K) => {
                    const $ = W && K !== E ? K : j;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(C, p, q, $, X, c) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(C, p, q, $, X, c),
                    this.emit("missingKey", C, p, q, E)
                }
                ;
                this.options.saveMissing && (this.options.saveMissingPlurals && J ? te.forEach(C => {
                    const q = this.pluralResolver.getSuffixes(C, c);
                    pe && c[`defaultValue${this.options.pluralSeparator}zero`] && q.indexOf(`${this.options.pluralSeparator}zero`) < 0 && q.push(`${this.options.pluralSeparator}zero`),
                    q.forEach(K => {
                        we([C], m + K, c[`defaultValue${K}`] || Ee)
                    }
                    )
                }
                ) : we(te, m, Ee))
            }
            E = this.extendTranslation(E, a, c, x, o),
            ce && E === m && this.options.appendNamespaceToMissingKey && (E = `${p}${b}${m}`),
            (ce || le) && this.options.parseMissingKeyHandler && (E = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${p}${b}${m}` : m, le ? E : void 0, c))
        }
        return f ? (x.res = E,
        x.usedParams = this.getUsedParamsDetails(c),
        x) : E
    }
    extendTranslation(a, r, o, c, f) {
        if (this.i18nFormat?.parse)
            a = this.i18nFormat.parse(a, {
                ...this.options.interpolation.defaultVariables,
                ...o
            }, o.lng || this.language || c.usedLng, c.usedNS, c.usedKey, {
                resolved: c
            });
        else if (!o.skipInterpolation) {
            o.interpolation && this.interpolator.init({
                ...o,
                interpolation: {
                    ...this.options.interpolation,
                    ...o.interpolation
                }
            });
            const g = ae(a) && (o?.interpolation?.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let p;
            if (g) {
                const v = a.match(this.interpolator.nestingRegexp);
                p = v && v.length
            }
            let b = o.replace && !ae(o.replace) ? o.replace : o;
            if (this.options.interpolation.defaultVariables && (b = {
                ...this.options.interpolation.defaultVariables,
                ...b
            }),
            a = this.interpolator.interpolate(a, b, o.lng || this.language || c.usedLng, o),
            g) {
                const v = a.match(this.interpolator.nestingRegexp)
                  , S = v && v.length;
                p < S && (o.nest = !1)
            }
            !o.lng && c && c.res && (o.lng = this.language || c.usedLng),
            o.nest !== !1 && (a = this.interpolator.nest(a, (...v) => f?.[0] === v[0] && !o.context ? (this.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${r[0]}`),
            null) : this.translate(...v, r), o)),
            o.interpolation && this.interpolator.reset()
        }
        const d = o.postProcess || this.options.postProcess
          , m = ae(d) ? [d] : d;
        return a != null && m?.length && o.applyPostProcessor !== !1 && (a = ng.handle(m, a, r, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...c,
                usedParams: this.getUsedParamsDetails(o)
            },
            ...o
        } : o, this)),
        a
    }
    resolve(a, r={}) {
        let o, c, f, d, m;
        return ae(a) && (a = [a]),
        a.forEach(g => {
            if (this.isValidLookup(o))
                return;
            const p = this.extractFromKey(g, r)
              , b = p.key;
            c = b;
            let v = p.namespaces;
            this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
            const S = r.count !== void 0 && !ae(r.count)
              , x = S && !r.ordinal && r.count === 0
              , E = r.context !== void 0 && (ae(r.context) || typeof r.context == "number") && r.context !== ""
              , O = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
            v.forEach(_ => {
                this.isValidLookup(o) || (m = _,
                !tm[`${O[0]}-${_}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(m) && (tm[`${O[0]}-${_}`] = !0,
                this.logger.warn(`key "${c}" for languages "${O.join(", ")}" won't get resolved as namespace "${m}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                O.forEach(L => {
                    if (this.isValidLookup(o))
                        return;
                    d = L;
                    const U = [b];
                    if (this.i18nFormat?.addLookupKeys)
                        this.i18nFormat.addLookupKeys(U, b, L, _, r);
                    else {
                        let J;
                        S && (J = this.pluralResolver.getSuffix(L, r.count, r));
                        const W = `${this.options.pluralSeparator}zero`
                          , oe = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (S && (r.ordinal && J.indexOf(oe) === 0 && U.push(b + J.replace(oe, this.options.pluralSeparator)),
                        U.push(b + J),
                        x && U.push(b + W)),
                        E) {
                            const I = `${b}${this.options.contextSeparator || "_"}${r.context}`;
                            U.push(I),
                            S && (r.ordinal && J.indexOf(oe) === 0 && U.push(I + J.replace(oe, this.options.pluralSeparator)),
                            U.push(I + J),
                            x && U.push(I + W))
                        }
                    }
                    let V;
                    for (; V = U.pop(); )
                        this.isValidLookup(o) || (f = V,
                        o = this.getResource(L, _, V, r))
                }
                ))
            }
            )
        }
        ),
        {
            res: o,
            usedKey: c,
            exactUsedKey: f,
            usedLng: d,
            usedNS: m
        }
    }
    isValidLookup(a) {
        return a !== void 0 && !(!this.options.returnNull && a === null) && !(!this.options.returnEmptyString && a === "")
    }
    getResource(a, r, o, c={}) {
        return this.i18nFormat?.getResource ? this.i18nFormat.getResource(a, r, o, c) : this.resourceStore.getResource(a, r, o, c)
    }
    getUsedParamsDetails(a={}) {
        const r = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
          , o = a.replace && !ae(a.replace);
        let c = o ? a.replace : a;
        if (o && typeof a.count < "u" && (c.count = a.count),
        this.options.interpolation.defaultVariables && (c = {
            ...this.options.interpolation.defaultVariables,
            ...c
        }),
        !o) {
            c = {
                ...c
            };
            for (const f of r)
                delete c[f]
        }
        return c
    }
    static hasDefaultValue(a) {
        const r = "defaultValue";
        for (const o in a)
            if (Object.prototype.hasOwnProperty.call(a, o) && r === o.substring(0, r.length) && a[o] !== void 0)
                return !0;
        return !1
    }
}
class lm {
    constructor(a) {
        this.options = a,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = Yt.create("languageUtils")
    }
    getScriptPartFromCode(a) {
        if (a = Ja(a),
        !a || a.indexOf("-") < 0)
            return null;
        const r = a.split("-");
        return r.length === 2 || (r.pop(),
        r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"))
    }
    getLanguagePartFromCode(a) {
        if (a = Ja(a),
        !a || a.indexOf("-") < 0)
            return a;
        const r = a.split("-");
        return this.formatLanguageCode(r[0])
    }
    formatLanguageCode(a) {
        if (ae(a) && a.indexOf("-") > -1) {
            let r;
            try {
                r = Intl.getCanonicalLocales(a)[0]
            } catch {}
            return r && this.options.lowerCaseLng && (r = r.toLowerCase()),
            r || (this.options.lowerCaseLng ? a.toLowerCase() : a)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? a.toLowerCase() : a
    }
    isSupportedCode(a) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (a = this.getLanguagePartFromCode(a)),
        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(a) > -1
    }
    getBestMatchFromCodes(a) {
        if (!a)
            return null;
        let r;
        return a.forEach(o => {
            if (r)
                return;
            const c = this.formatLanguageCode(o);
            (!this.options.supportedLngs || this.isSupportedCode(c)) && (r = c)
        }
        ),
        !r && this.options.supportedLngs && a.forEach(o => {
            if (r)
                return;
            const c = this.getScriptPartFromCode(o);
            if (this.isSupportedCode(c))
                return r = c;
            const f = this.getLanguagePartFromCode(o);
            if (this.isSupportedCode(f))
                return r = f;
            r = this.options.supportedLngs.find(d => {
                if (d === f)
                    return d;
                if (!(d.indexOf("-") < 0 && f.indexOf("-") < 0) && (d.indexOf("-") > 0 && f.indexOf("-") < 0 && d.substring(0, d.indexOf("-")) === f || d.indexOf(f) === 0 && f.length > 1))
                    return d
            }
            )
        }
        ),
        r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]),
        r
    }
    getFallbackCodes(a, r) {
        if (!a)
            return [];
        if (typeof a == "function" && (a = a(r)),
        ae(a) && (a = [a]),
        Array.isArray(a))
            return a;
        if (!r)
            return a.default || [];
        let o = a[r];
        return o || (o = a[this.getScriptPartFromCode(r)]),
        o || (o = a[this.formatLanguageCode(r)]),
        o || (o = a[this.getLanguagePartFromCode(r)]),
        o || (o = a.default),
        o || []
    }
    toResolveHierarchy(a, r) {
        const o = this.getFallbackCodes((r === !1 ? [] : r) || this.options.fallbackLng || [], a)
          , c = []
          , f = d => {
            d && (this.isSupportedCode(d) ? c.push(d) : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))
        }
        ;
        return ae(a) && (a.indexOf("-") > -1 || a.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && f(this.formatLanguageCode(a)),
        this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && f(this.getScriptPartFromCode(a)),
        this.options.load !== "currentOnly" && f(this.getLanguagePartFromCode(a))) : ae(a) && f(this.formatLanguageCode(a)),
        o.forEach(d => {
            c.indexOf(d) < 0 && f(this.formatLanguageCode(d))
        }
        ),
        c
    }
}
const am = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
}
  , im = {
    select: u => u === 1 ? "one" : "other",
    resolvedOptions: () => ({
        pluralCategories: ["one", "other"]
    })
};
class zy {
    constructor(a, r={}) {
        this.languageUtils = a,
        this.options = r,
        this.logger = Yt.create("pluralResolver"),
        this.pluralRulesCache = {}
    }
    addRule(a, r) {
        this.rules[a] = r
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(a, r={}) {
        const o = Ja(a === "dev" ? "en" : a)
          , c = r.ordinal ? "ordinal" : "cardinal"
          , f = JSON.stringify({
            cleanedCode: o,
            type: c
        });
        if (f in this.pluralRulesCache)
            return this.pluralRulesCache[f];
        let d;
        try {
            d = new Intl.PluralRules(o,{
                type: c
            })
        } catch {
            if (!Intl)
                return this.logger.error("No Intl support, please use an Intl polyfill!"),
                im;
            if (!a.match(/-|_/))
                return im;
            const g = this.languageUtils.getLanguagePartFromCode(a);
            d = this.getRule(g, r)
        }
        return this.pluralRulesCache[f] = d,
        d
    }
    needsPlural(a, r={}) {
        let o = this.getRule(a, r);
        return o || (o = this.getRule("dev", r)),
        o?.resolvedOptions().pluralCategories.length > 1
    }
    getPluralFormsOfKey(a, r, o={}) {
        return this.getSuffixes(a, o).map(c => `${r}${c}`)
    }
    getSuffixes(a, r={}) {
        let o = this.getRule(a, r);
        return o || (o = this.getRule("dev", r)),
        o ? o.resolvedOptions().pluralCategories.sort( (c, f) => am[c] - am[f]).map(c => `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${c}`) : []
    }
    getSuffix(a, r, o={}) {
        const c = this.getRule(a, o);
        return c ? `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${c.select(r)}` : (this.logger.warn(`no plural rule found for: ${a}`),
        this.getSuffix("dev", r, o))
    }
}
const um = (u, a, r, o=".", c=!0) => {
    let f = wy(u, a, r);
    return !f && c && ae(r) && (f = Ro(u, r, o),
    f === void 0 && (f = Ro(a, r, o))),
    f
}
  , ao = u => u.replace(/\$/g, "$$$$");
class Ly {
    constructor(a={}) {
        this.logger = Yt.create("interpolator"),
        this.options = a,
        this.format = a?.interpolation?.format || (r => r),
        this.init(a)
    }
    init(a={}) {
        a.interpolation || (a.interpolation = {
            escapeValue: !0
        });
        const {escape: r, escapeValue: o, useRawValueToEscape: c, prefix: f, prefixEscaped: d, suffix: m, suffixEscaped: g, formatSeparator: p, unescapeSuffix: b, unescapePrefix: v, nestingPrefix: S, nestingPrefixEscaped: x, nestingSuffix: E, nestingSuffixEscaped: O, nestingOptionsSeparator: _, maxReplaces: L, alwaysFormat: U} = a.interpolation;
        this.escape = r !== void 0 ? r : Cy,
        this.escapeValue = o !== void 0 ? o : !0,
        this.useRawValueToEscape = c !== void 0 ? c : !1,
        this.prefix = f ? Gl(f) : d || "{{",
        this.suffix = m ? Gl(m) : g || "}}",
        this.formatSeparator = p || ",",
        this.unescapePrefix = b ? "" : v || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : b || "",
        this.nestingPrefix = S ? Gl(S) : x || Gl("$t("),
        this.nestingSuffix = E ? Gl(E) : O || Gl(")"),
        this.nestingOptionsSeparator = _ || ",",
        this.maxReplaces = L || 1e3,
        this.alwaysFormat = U !== void 0 ? U : !1,
        this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const a = (r, o) => r?.source === o ? (r.lastIndex = 0,
        r) : new RegExp(o,"g");
        this.regexp = a(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
        this.regexpUnescape = a(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
        this.nestingRegexp = a(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)
    }
    interpolate(a, r, o, c) {
        let f, d, m;
        const g = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}
          , p = x => {
            if (x.indexOf(this.formatSeparator) < 0) {
                const L = um(r, g, x, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(L, void 0, o, {
                    ...c,
                    ...r,
                    interpolationkey: x
                }) : L
            }
            const E = x.split(this.formatSeparator)
              , O = E.shift().trim()
              , _ = E.join(this.formatSeparator).trim();
            return this.format(um(r, g, O, this.options.keySeparator, this.options.ignoreJSONStructure), _, o, {
                ...c,
                ...r,
                interpolationkey: O
            })
        }
        ;
        this.resetRegExp();
        const b = c?.missingInterpolationHandler || this.options.missingInterpolationHandler
          , v = c?.interpolation?.skipOnVariables !== void 0 ? c.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: x => ao(x)
        }, {
            regex: this.regexp,
            safeValue: x => this.escapeValue ? ao(this.escape(x)) : ao(x)
        }].forEach(x => {
            for (m = 0; f = x.regex.exec(a); ) {
                const E = f[1].trim();
                if (d = p(E),
                d === void 0)
                    if (typeof b == "function") {
                        const _ = b(a, f, c);
                        d = ae(_) ? _ : ""
                    } else if (c && Object.prototype.hasOwnProperty.call(c, E))
                        d = "";
                    else if (v) {
                        d = f[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${E} for interpolating ${a}`),
                        d = "";
                else
                    !ae(d) && !this.useRawValueToEscape && (d = Fh(d));
                const O = x.safeValue(d);
                if (a = a.replace(f[0], O),
                v ? (x.regex.lastIndex += d.length,
                x.regex.lastIndex -= f[0].length) : x.regex.lastIndex = 0,
                m++,
                m >= this.maxReplaces)
                    break
            }
        }
        ),
        a
    }
    nest(a, r, o={}) {
        let c, f, d;
        const m = (g, p) => {
            const b = this.nestingOptionsSeparator;
            if (g.indexOf(b) < 0)
                return g;
            const v = g.split(new RegExp(`${b}[ ]*{`));
            let S = `{${v[1]}`;
            g = v[0],
            S = this.interpolate(S, d);
            const x = S.match(/'/g)
              , E = S.match(/"/g);
            ((x?.length ?? 0) % 2 === 0 && !E || E.length % 2 !== 0) && (S = S.replace(/'/g, '"'));
            try {
                d = JSON.parse(S),
                p && (d = {
                    ...p,
                    ...d
                })
            } catch (O) {
                return this.logger.warn(`failed parsing options string in nesting for key ${g}`, O),
                `${g}${b}${S}`
            }
            return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue,
            g
        }
        ;
        for (; c = this.nestingRegexp.exec(a); ) {
            let g = [];
            d = {
                ...o
            },
            d = d.replace && !ae(d.replace) ? d.replace : d,
            d.applyPostProcessor = !1,
            delete d.defaultValue;
            const p = /{.*}/.test(c[1]) ? c[1].lastIndexOf("}") + 1 : c[1].indexOf(this.formatSeparator);
            if (p !== -1 && (g = c[1].slice(p).split(this.formatSeparator).map(b => b.trim()).filter(Boolean),
            c[1] = c[1].slice(0, p)),
            f = r(m.call(this, c[1].trim(), d), d),
            f && c[0] === a && !ae(f))
                return f;
            ae(f) || (f = Fh(f)),
            f || (this.logger.warn(`missed to resolve ${c[1]} for nesting ${a}`),
            f = ""),
            g.length && (f = g.reduce( (b, v) => this.format(b, v, o.lng, {
                ...o,
                interpolationkey: c[1].trim()
            }), f.trim())),
            a = a.replace(c[0], f),
            this.regexp.lastIndex = 0
        }
        return a
    }
}
const Dy = u => {
    let a = u.toLowerCase().trim();
    const r = {};
    if (u.indexOf("(") > -1) {
        const o = u.split("(");
        a = o[0].toLowerCase().trim();
        const c = o[1].substring(0, o[1].length - 1);
        a === "currency" && c.indexOf(":") < 0 ? r.currency || (r.currency = c.trim()) : a === "relativetime" && c.indexOf(":") < 0 ? r.range || (r.range = c.trim()) : c.split(";").forEach(d => {
            if (d) {
                const [m,...g] = d.split(":")
                  , p = g.join(":").trim().replace(/^'+|'+$/g, "")
                  , b = m.trim();
                r[b] || (r[b] = p),
                p === "false" && (r[b] = !1),
                p === "true" && (r[b] = !0),
                isNaN(p) || (r[b] = parseInt(p, 10))
            }
        }
        )
    }
    return {
        formatName: a,
        formatOptions: r
    }
}
  , rm = u => {
    const a = {};
    return (r, o, c) => {
        let f = c;
        c && c.interpolationkey && c.formatParams && c.formatParams[c.interpolationkey] && c[c.interpolationkey] && (f = {
            ...f,
            [c.interpolationkey]: void 0
        });
        const d = o + JSON.stringify(f);
        let m = a[d];
        return m || (m = u(Ja(o), c),
        a[d] = m),
        m(r)
    }
}
  , jy = u => (a, r, o) => u(Ja(r), o)(a);
class Uy {
    constructor(a={}) {
        this.logger = Yt.create("formatter"),
        this.options = a,
        this.init(a)
    }
    init(a, r={
        interpolation: {}
    }) {
        this.formatSeparator = r.interpolation.formatSeparator || ",";
        const o = r.cacheInBuiltFormats ? rm : jy;
        this.formats = {
            number: o( (c, f) => {
                const d = new Intl.NumberFormat(c,{
                    ...f
                });
                return m => d.format(m)
            }
            ),
            currency: o( (c, f) => {
                const d = new Intl.NumberFormat(c,{
                    ...f,
                    style: "currency"
                });
                return m => d.format(m)
            }
            ),
            datetime: o( (c, f) => {
                const d = new Intl.DateTimeFormat(c,{
                    ...f
                });
                return m => d.format(m)
            }
            ),
            relativetime: o( (c, f) => {
                const d = new Intl.RelativeTimeFormat(c,{
                    ...f
                });
                return m => d.format(m, f.range || "day")
            }
            ),
            list: o( (c, f) => {
                const d = new Intl.ListFormat(c,{
                    ...f
                });
                return m => d.format(m)
            }
            )
        }
    }
    add(a, r) {
        this.formats[a.toLowerCase().trim()] = r
    }
    addCached(a, r) {
        this.formats[a.toLowerCase().trim()] = rm(r)
    }
    format(a, r, o, c={}) {
        const f = r.split(this.formatSeparator);
        if (f.length > 1 && f[0].indexOf("(") > 1 && f[0].indexOf(")") < 0 && f.find(m => m.indexOf(")") > -1)) {
            const m = f.findIndex(g => g.indexOf(")") > -1);
            f[0] = [f[0], ...f.splice(1, m)].join(this.formatSeparator)
        }
        return f.reduce( (m, g) => {
            const {formatName: p, formatOptions: b} = Dy(g);
            if (this.formats[p]) {
                let v = m;
                try {
                    const S = c?.formatParams?.[c.interpolationkey] || {}
                      , x = S.locale || S.lng || c.locale || c.lng || o;
                    v = this.formats[p](m, x, {
                        ...b,
                        ...c,
                        ...S
                    })
                } catch (S) {
                    this.logger.warn(S)
                }
                return v
            } else
                this.logger.warn(`there was no format function for ${p}`);
            return m
        }
        , a)
    }
}
const By = (u, a) => {
    u.pending[a] !== void 0 && (delete u.pending[a],
    u.pendingCount--)
}
;
class Hy extends Lu {
    constructor(a, r, o, c={}) {
        super(),
        this.backend = a,
        this.store = r,
        this.services = o,
        this.languageUtils = o.languageUtils,
        this.options = c,
        this.logger = Yt.create("backendConnector"),
        this.waitingReads = [],
        this.maxParallelReads = c.maxParallelReads || 10,
        this.readingCalls = 0,
        this.maxRetries = c.maxRetries >= 0 ? c.maxRetries : 5,
        this.retryTimeout = c.retryTimeout >= 1 ? c.retryTimeout : 350,
        this.state = {},
        this.queue = [],
        this.backend?.init?.(o, c.backend, c)
    }
    queueLoad(a, r, o, c) {
        const f = {}
          , d = {}
          , m = {}
          , g = {};
        return a.forEach(p => {
            let b = !0;
            r.forEach(v => {
                const S = `${p}|${v}`;
                !o.reload && this.store.hasResourceBundle(p, v) ? this.state[S] = 2 : this.state[S] < 0 || (this.state[S] === 1 ? d[S] === void 0 && (d[S] = !0) : (this.state[S] = 1,
                b = !1,
                d[S] === void 0 && (d[S] = !0),
                f[S] === void 0 && (f[S] = !0),
                g[v] === void 0 && (g[v] = !0)))
            }
            ),
            b || (m[p] = !0)
        }
        ),
        (Object.keys(f).length || Object.keys(d).length) && this.queue.push({
            pending: d,
            pendingCount: Object.keys(d).length,
            loaded: {},
            errors: [],
            callback: c
        }),
        {
            toLoad: Object.keys(f),
            pending: Object.keys(d),
            toLoadLanguages: Object.keys(m),
            toLoadNamespaces: Object.keys(g)
        }
    }
    loaded(a, r, o) {
        const c = a.split("|")
          , f = c[0]
          , d = c[1];
        r && this.emit("failedLoading", f, d, r),
        !r && o && this.store.addResourceBundle(f, d, o, void 0, void 0, {
            skipCopy: !0
        }),
        this.state[a] = r ? -1 : 2,
        r && o && (this.state[a] = 0);
        const m = {};
        this.queue.forEach(g => {
            Ey(g.loaded, [f], d),
            By(g, a),
            r && g.errors.push(r),
            g.pendingCount === 0 && !g.done && (Object.keys(g.loaded).forEach(p => {
                m[p] || (m[p] = {});
                const b = g.loaded[p];
                b.length && b.forEach(v => {
                    m[p][v] === void 0 && (m[p][v] = !0)
                }
                )
            }
            ),
            g.done = !0,
            g.errors.length ? g.callback(g.errors) : g.callback())
        }
        ),
        this.emit("loaded", m),
        this.queue = this.queue.filter(g => !g.done)
    }
    read(a, r, o, c=0, f=this.retryTimeout, d) {
        if (!a.length)
            return d(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: a,
                ns: r,
                fcName: o,
                tried: c,
                wait: f,
                callback: d
            });
            return
        }
        this.readingCalls++;
        const m = (p, b) => {
            if (this.readingCalls--,
            this.waitingReads.length > 0) {
                const v = this.waitingReads.shift();
                this.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback)
            }
            if (p && b && c < this.maxRetries) {
                setTimeout( () => {
                    this.read.call(this, a, r, o, c + 1, f * 2, d)
                }
                , f);
                return
            }
            d(p, b)
        }
          , g = this.backend[o].bind(this.backend);
        if (g.length === 2) {
            try {
                const p = g(a, r);
                p && typeof p.then == "function" ? p.then(b => m(null, b)).catch(m) : m(null, p)
            } catch (p) {
                m(p)
            }
            return
        }
        return g(a, r, m)
    }
    prepareLoading(a, r, o={}, c) {
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            c && c();
        ae(a) && (a = this.languageUtils.toResolveHierarchy(a)),
        ae(r) && (r = [r]);
        const f = this.queueLoad(a, r, o, c);
        if (!f.toLoad.length)
            return f.pending.length || c(),
            null;
        f.toLoad.forEach(d => {
            this.loadOne(d)
        }
        )
    }
    load(a, r, o) {
        this.prepareLoading(a, r, {}, o)
    }
    reload(a, r, o) {
        this.prepareLoading(a, r, {
            reload: !0
        }, o)
    }
    loadOne(a, r="") {
        const o = a.split("|")
          , c = o[0]
          , f = o[1];
        this.read(c, f, "read", void 0, void 0, (d, m) => {
            d && this.logger.warn(`${r}loading namespace ${f} for language ${c} failed`, d),
            !d && m && this.logger.log(`${r}loaded namespace ${f} for language ${c}`, m),
            this.loaded(a, d, m)
        }
        )
    }
    saveMissing(a, r, o, c, f, d={}, m= () => {}
    ) {
        if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(r)) {
            this.logger.warn(`did not save key "${o}" as the namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(o == null || o === "")) {
            if (this.backend?.create) {
                const g = {
                    ...d,
                    isUpdate: f
                }
                  , p = this.backend.create.bind(this.backend);
                if (p.length < 6)
                    try {
                        let b;
                        p.length === 5 ? b = p(a, r, o, c, g) : b = p(a, r, o, c),
                        b && typeof b.then == "function" ? b.then(v => m(null, v)).catch(m) : m(null, b)
                    } catch (b) {
                        m(b)
                    }
                else
                    p(a, r, o, c, m, g)
            }
            !a || !a[0] || this.store.addResource(a[0], r, o, c)
        }
    }
}
const sm = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: u => {
        let a = {};
        if (typeof u[1] == "object" && (a = u[1]),
        ae(u[1]) && (a.defaultValue = u[1]),
        ae(u[2]) && (a.tDescription = u[2]),
        typeof u[2] == "object" || typeof u[3] == "object") {
            const r = u[3] || u[2];
            Object.keys(r).forEach(o => {
                a[o] = r[o]
            }
            )
        }
        return a
    }
    ,
    interpolation: {
        escapeValue: !0,
        format: u => u,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0
    },
    cacheInBuiltFormats: !0
})
  , om = u => (ae(u.ns) && (u.ns = [u.ns]),
ae(u.fallbackLng) && (u.fallbackLng = [u.fallbackLng]),
ae(u.fallbackNS) && (u.fallbackNS = [u.fallbackNS]),
u.supportedLngs?.indexOf?.("cimode") < 0 && (u.supportedLngs = u.supportedLngs.concat(["cimode"])),
typeof u.initImmediate == "boolean" && (u.initAsync = u.initImmediate),
u)
  , bu = () => {}
  , qy = u => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(u)).forEach(r => {
        typeof u[r] == "function" && (u[r] = u[r].bind(u))
    }
    )
}
;
class $a extends Lu {
    constructor(a={}, r) {
        if (super(),
        this.options = om(a),
        this.services = {},
        this.logger = Yt,
        this.modules = {
            external: []
        },
        qy(this),
        r && !this.isInitialized && !a.isClone) {
            if (!this.options.initAsync)
                return this.init(a, r),
                this;
            setTimeout( () => {
                this.init(a, r)
            }
            , 0)
        }
    }
    init(a={}, r) {
        this.isInitializing = !0,
        typeof a == "function" && (r = a,
        a = {}),
        a.defaultNS == null && a.ns && (ae(a.ns) ? a.defaultNS = a.ns : a.ns.indexOf("translation") < 0 && (a.defaultNS = a.ns[0]));
        const o = sm();
        this.options = {
            ...o,
            ...this.options,
            ...om(a)
        },
        this.options.interpolation = {
            ...o.interpolation,
            ...this.options.interpolation
        },
        a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator),
        a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator);
        const c = p => p ? typeof p == "function" ? new p : p : null;
        if (!this.options.isClone) {
            this.modules.logger ? Yt.init(c(this.modules.logger), this.options) : Yt.init(null, this.options);
            let p;
            this.modules.formatter ? p = this.modules.formatter : p = Uy;
            const b = new lm(this.options);
            this.store = new em(this.options.resources,this.options);
            const v = this.services;
            v.logger = Yt,
            v.resourceStore = this.store,
            v.languageUtils = b,
            v.pluralResolver = new zy(b,{
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            this.options.interpolation.format && this.options.interpolation.format !== o.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),
            p && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (v.formatter = c(p),
            v.formatter.init && v.formatter.init(v, this.options),
            this.options.interpolation.format = v.formatter.format.bind(v.formatter)),
            v.interpolator = new Ly(this.options),
            v.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            },
            v.backendConnector = new Hy(c(this.modules.backend),v.resourceStore,v,this.options),
            v.backendConnector.on("*", (x, ...E) => {
                this.emit(x, ...E)
            }
            ),
            this.modules.languageDetector && (v.languageDetector = c(this.modules.languageDetector),
            v.languageDetector.init && v.languageDetector.init(v, this.options.detection, this.options)),
            this.modules.i18nFormat && (v.i18nFormat = c(this.modules.i18nFormat),
            v.i18nFormat.init && v.i18nFormat.init(this)),
            this.translator = new Nu(this.services,this.options),
            this.translator.on("*", (x, ...E) => {
                this.emit(x, ...E)
            }
            ),
            this.modules.external.forEach(x => {
                x.init && x.init(this)
            }
            )
        }
        if (this.format = this.options.interpolation.format,
        r || (r = bu),
        this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const p = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            p.length > 0 && p[0] !== "dev" && (this.options.lng = p[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(p => {
            this[p] = (...b) => this.store[p](...b)
        }
        ),
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(p => {
            this[p] = (...b) => (this.store[p](...b),
            this)
        }
        );
        const m = qa()
          , g = () => {
            const p = (b, v) => {
                this.isInitializing = !1,
                this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                this.isInitialized = !0,
                this.options.isClone || this.logger.log("initialized", this.options),
                this.emit("initialized", this.options),
                m.resolve(v),
                r(b, v)
            }
            ;
            if (this.languages && !this.isInitialized)
                return p(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, p)
        }
        ;
        return this.options.resources || !this.options.initAsync ? g() : setTimeout(g, 0),
        m
    }
    loadResources(a, r=bu) {
        let o = r;
        const c = ae(a) ? a : this.language;
        if (typeof a == "function" && (o = a),
        !this.options.resources || this.options.partialBundledLanguages) {
            if (c?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return o();
            const f = []
              , d = m => {
                if (!m || m === "cimode")
                    return;
                this.services.languageUtils.toResolveHierarchy(m).forEach(p => {
                    p !== "cimode" && f.indexOf(p) < 0 && f.push(p)
                }
                )
            }
            ;
            c ? d(c) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(g => d(g)),
            this.options.preload?.forEach?.(m => d(m)),
            this.services.backendConnector.load(f, this.options.ns, m => {
                !m && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                o(m)
            }
            )
        } else
            o(null)
    }
    reloadResources(a, r, o) {
        const c = qa();
        return typeof a == "function" && (o = a,
        a = void 0),
        typeof r == "function" && (o = r,
        r = void 0),
        a || (a = this.languages),
        r || (r = this.options.ns),
        o || (o = bu),
        this.services.backendConnector.reload(a, r, f => {
            c.resolve(),
            o(f)
        }
        ),
        c
    }
    use(a) {
        if (!a)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!a.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return a.type === "backend" && (this.modules.backend = a),
        (a.type === "logger" || a.log && a.warn && a.error) && (this.modules.logger = a),
        a.type === "languageDetector" && (this.modules.languageDetector = a),
        a.type === "i18nFormat" && (this.modules.i18nFormat = a),
        a.type === "postProcessor" && ng.addPostProcessor(a),
        a.type === "formatter" && (this.modules.formatter = a),
        a.type === "3rdParty" && this.modules.external.push(a),
        this
    }
    setResolvedLanguage(a) {
        if (!(!a || !this.languages) && !(["cimode", "dev"].indexOf(a) > -1)) {
            for (let r = 0; r < this.languages.length; r++) {
                const o = this.languages[r];
                if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
                    this.resolvedLanguage = o;
                    break
                }
            }
            !this.resolvedLanguage && this.languages.indexOf(a) < 0 && this.store.hasLanguageSomeTranslations(a) && (this.resolvedLanguage = a,
            this.languages.unshift(a))
        }
    }
    changeLanguage(a, r) {
        this.isLanguageChangingTo = a;
        const o = qa();
        this.emit("languageChanging", a);
        const c = m => {
            this.language = m,
            this.languages = this.services.languageUtils.toResolveHierarchy(m),
            this.resolvedLanguage = void 0,
            this.setResolvedLanguage(m)
        }
          , f = (m, g) => {
            g ? this.isLanguageChangingTo === a && (c(g),
            this.translator.changeLanguage(g),
            this.isLanguageChangingTo = void 0,
            this.emit("languageChanged", g),
            this.logger.log("languageChanged", g)) : this.isLanguageChangingTo = void 0,
            o.resolve( (...p) => this.t(...p)),
            r && r(m, (...p) => this.t(...p))
        }
          , d = m => {
            !a && !m && this.services.languageDetector && (m = []);
            const g = ae(m) ? m : m && m[0]
              , p = this.store.hasLanguageSomeTranslations(g) ? g : this.services.languageUtils.getBestMatchFromCodes(ae(m) ? [m] : m);
            p && (this.language || c(p),
            this.translator.language || this.translator.changeLanguage(p),
            this.services.languageDetector?.cacheUserLanguage?.(p)),
            this.loadResources(p, b => {
                f(b, p)
            }
            )
        }
        ;
        return !a && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !a && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(d) : this.services.languageDetector.detect(d) : d(a),
        o
    }
    getFixedT(a, r, o) {
        const c = (f, d, ...m) => {
            let g;
            typeof d != "object" ? g = this.options.overloadTranslationOptionHandler([f, d].concat(m)) : g = {
                ...d
            },
            g.lng = g.lng || c.lng,
            g.lngs = g.lngs || c.lngs,
            g.ns = g.ns || c.ns,
            g.keyPrefix !== "" && (g.keyPrefix = g.keyPrefix || o || c.keyPrefix);
            const p = this.options.keySeparator || ".";
            let b;
            return g.keyPrefix && Array.isArray(f) ? b = f.map(v => (typeof v == "function" && (v = No(v, d)),
            `${g.keyPrefix}${p}${v}`)) : (typeof f == "function" && (f = No(f, d)),
            b = g.keyPrefix ? `${g.keyPrefix}${p}${f}` : f),
            this.t(b, g)
        }
        ;
        return ae(a) ? c.lng = a : c.lngs = a,
        c.ns = r,
        c.keyPrefix = o,
        c
    }
    t(...a) {
        return this.translator?.translate(...a)
    }
    exists(...a) {
        return this.translator?.exists(...a)
    }
    setDefaultNamespace(a) {
        this.options.defaultNS = a
    }
    hasLoadedNamespace(a, r={}) {
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
            !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
            !1;
        const o = r.lng || this.resolvedLanguage || this.languages[0]
          , c = this.options ? this.options.fallbackLng : !1
          , f = this.languages[this.languages.length - 1];
        if (o.toLowerCase() === "cimode")
            return !0;
        const d = (m, g) => {
            const p = this.services.backendConnector.state[`${m}|${g}`];
            return p === -1 || p === 0 || p === 2
        }
        ;
        if (r.precheck) {
            const m = r.precheck(this, d);
            if (m !== void 0)
                return m
        }
        return !!(this.hasResourceBundle(o, a) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || d(o, a) && (!c || d(f, a)))
    }
    loadNamespaces(a, r) {
        const o = qa();
        return this.options.ns ? (ae(a) && (a = [a]),
        a.forEach(c => {
            this.options.ns.indexOf(c) < 0 && this.options.ns.push(c)
        }
        ),
        this.loadResources(c => {
            o.resolve(),
            r && r(c)
        }
        ),
        o) : (r && r(),
        Promise.resolve())
    }
    loadLanguages(a, r) {
        const o = qa();
        ae(a) && (a = [a]);
        const c = this.options.preload || []
          , f = a.filter(d => c.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
        return f.length ? (this.options.preload = c.concat(f),
        this.loadResources(d => {
            o.resolve(),
            r && r(d)
        }
        ),
        o) : (r && r(),
        Promise.resolve())
    }
    dir(a) {
        if (a || (a = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)),
        !a)
            return "rtl";
        try {
            const c = new Intl.Locale(a);
            if (c && c.getTextInfo) {
                const f = c.getTextInfo();
                if (f && f.direction)
                    return f.direction
            }
        } catch {}
        const r = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
          , o = this.services?.languageUtils || new lm(sm());
        return a.toLowerCase().indexOf("-latn") > 1 ? "ltr" : r.indexOf(o.getLanguagePartFromCode(a)) > -1 || a.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(a={}, r) {
        return new $a(a,r)
    }
    cloneInstance(a={}, r=bu) {
        const o = a.forkResourceStore;
        o && delete a.forkResourceStore;
        const c = {
            ...this.options,
            ...a,
            isClone: !0
        }
          , f = new $a(c);
        if ((a.debug !== void 0 || a.prefix !== void 0) && (f.logger = f.logger.clone(a)),
        ["store", "services", "language"].forEach(m => {
            f[m] = this[m]
        }
        ),
        f.services = {
            ...this.services
        },
        f.services.utils = {
            hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
        },
        o) {
            const m = Object.keys(this.store.data).reduce( (g, p) => (g[p] = {
                ...this.store.data[p]
            },
            g[p] = Object.keys(g[p]).reduce( (b, v) => (b[v] = {
                ...g[p][v]
            },
            b), g[p]),
            g), {});
            f.store = new em(m,c),
            f.services.resourceStore = f.store
        }
        return f.translator = new Nu(f.services,c),
        f.translator.on("*", (m, ...g) => {
            f.emit(m, ...g)
        }
        ),
        f.init(c, r),
        f.translator.options = c,
        f.translator.backendConnector.services.utils = {
            hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
        },
        f
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const et = $a.createInstance();
et.createInstance = $a.createInstance;
et.createInstance;
et.dir;
et.init;
et.loadResources;
et.reloadResources;
et.use;
et.changeLanguage;
et.getFixedT;
et.t;
et.exists;
et.setDefaultNamespace;
et.hasLoadedNamespace;
et.loadNamespaces;
et.loadLanguages;
const Gy = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
  , Yy = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
}
  , Vy = u => Yy[u]
  , Qy = u => u.replace(Gy, Vy);
let cm = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: Qy
};
const Xy = (u={}) => {
    cm = {
        ...cm,
        ...u
    }
}
  , Zy = {
    type: "3rdParty",
    init(u) {
        Xy(u.options.react)
    }
}
  , Ky = B.createContext();
function ky({i18n: u, defaultNS: a, children: r}) {
    const o = B.useMemo( () => ({
        i18n: u,
        defaultNS: a
    }), [u, a]);
    return B.createElement(Ky.Provider, {
        value: o
    }, r)
}
const {slice: Jy, forEach: $y} = [];
function Fy(u) {
    return $y.call(Jy.call(arguments, 1), a => {
        if (a)
            for (const r in a)
                u[r] === void 0 && (u[r] = a[r])
    }
    ),
    u
}
function Wy(u) {
    return typeof u != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(r => r.test(u))
}
const fm = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
  , Iy = function(u, a) {
    const o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        path: "/"
    }
      , c = encodeURIComponent(a);
    let f = `${u}=${c}`;
    if (o.maxAge > 0) {
        const d = o.maxAge - 0;
        if (Number.isNaN(d))
            throw new Error("maxAge should be a Number");
        f += `; Max-Age=${Math.floor(d)}`
    }
    if (o.domain) {
        if (!fm.test(o.domain))
            throw new TypeError("option domain is invalid");
        f += `; Domain=${o.domain}`
    }
    if (o.path) {
        if (!fm.test(o.path))
            throw new TypeError("option path is invalid");
        f += `; Path=${o.path}`
    }
    if (o.expires) {
        if (typeof o.expires.toUTCString != "function")
            throw new TypeError("option expires is invalid");
        f += `; Expires=${o.expires.toUTCString()}`
    }
    if (o.httpOnly && (f += "; HttpOnly"),
    o.secure && (f += "; Secure"),
    o.sameSite)
        switch (typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite) {
        case !0:
            f += "; SameSite=Strict";
            break;
        case "lax":
            f += "; SameSite=Lax";
            break;
        case "strict":
            f += "; SameSite=Strict";
            break;
        case "none":
            f += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
        }
    return o.partitioned && (f += "; Partitioned"),
    f
}
  , dm = {
    create(u, a, r, o) {
        let c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            path: "/",
            sameSite: "strict"
        };
        r && (c.expires = new Date,
        c.expires.setTime(c.expires.getTime() + r * 60 * 1e3)),
        o && (c.domain = o),
        document.cookie = Iy(u, a, c)
    },
    read(u) {
        const a = `${u}=`
          , r = document.cookie.split(";");
        for (let o = 0; o < r.length; o++) {
            let c = r[o];
            for (; c.charAt(0) === " "; )
                c = c.substring(1, c.length);
            if (c.indexOf(a) === 0)
                return c.substring(a.length, c.length)
        }
        return null
    },
    remove(u, a) {
        this.create(u, "", -1, a)
    }
};
var Py = {
    name: "cookie",
    lookup(u) {
        let {lookupCookie: a} = u;
        if (a && typeof document < "u")
            return dm.read(a) || void 0
    },
    cacheUserLanguage(u, a) {
        let {lookupCookie: r, cookieMinutes: o, cookieDomain: c, cookieOptions: f} = a;
        r && typeof document < "u" && dm.create(r, u, o, c, f)
    }
}
  , ev = {
    name: "querystring",
    lookup(u) {
        let {lookupQuerystring: a} = u, r;
        if (typeof window < "u") {
            let {search: o} = window.location;
            !window.location.search && window.location.hash?.indexOf("?") > -1 && (o = window.location.hash.substring(window.location.hash.indexOf("?")));
            const f = o.substring(1).split("&");
            for (let d = 0; d < f.length; d++) {
                const m = f[d].indexOf("=");
                m > 0 && f[d].substring(0, m) === a && (r = f[d].substring(m + 1))
            }
        }
        return r
    }
}
  , tv = {
    name: "hash",
    lookup(u) {
        let {lookupHash: a, lookupFromHashIndex: r} = u, o;
        if (typeof window < "u") {
            const {hash: c} = window.location;
            if (c && c.length > 2) {
                const f = c.substring(1);
                if (a) {
                    const d = f.split("&");
                    for (let m = 0; m < d.length; m++) {
                        const g = d[m].indexOf("=");
                        g > 0 && d[m].substring(0, g) === a && (o = d[m].substring(g + 1))
                    }
                }
                if (o)
                    return o;
                if (!o && r > -1) {
                    const d = c.match(/\/([a-zA-Z-]*)/g);
                    return Array.isArray(d) ? d[typeof r == "number" ? r : 0]?.replace("/", "") : void 0
                }
            }
        }
        return o
    }
};
let Yl = null;
const hm = () => {
    if (Yl !== null)
        return Yl;
    try {
        if (Yl = typeof window < "u" && window.localStorage !== null,
        !Yl)
            return !1;
        const u = "i18next.translate.boo";
        window.localStorage.setItem(u, "foo"),
        window.localStorage.removeItem(u)
    } catch {
        Yl = !1
    }
    return Yl
}
;
var nv = {
    name: "localStorage",
    lookup(u) {
        let {lookupLocalStorage: a} = u;
        if (a && hm())
            return window.localStorage.getItem(a) || void 0
    },
    cacheUserLanguage(u, a) {
        let {lookupLocalStorage: r} = a;
        r && hm() && window.localStorage.setItem(r, u)
    }
};
let Vl = null;
const mm = () => {
    if (Vl !== null)
        return Vl;
    try {
        if (Vl = typeof window < "u" && window.sessionStorage !== null,
        !Vl)
            return !1;
        const u = "i18next.translate.boo";
        window.sessionStorage.setItem(u, "foo"),
        window.sessionStorage.removeItem(u)
    } catch {
        Vl = !1
    }
    return Vl
}
;
var lv = {
    name: "sessionStorage",
    lookup(u) {
        let {lookupSessionStorage: a} = u;
        if (a && mm())
            return window.sessionStorage.getItem(a) || void 0
    },
    cacheUserLanguage(u, a) {
        let {lookupSessionStorage: r} = a;
        r && mm() && window.sessionStorage.setItem(r, u)
    }
}
  , av = {
    name: "navigator",
    lookup(u) {
        const a = [];
        if (typeof navigator < "u") {
            const {languages: r, userLanguage: o, language: c} = navigator;
            if (r)
                for (let f = 0; f < r.length; f++)
                    a.push(r[f]);
            o && a.push(o),
            c && a.push(c)
        }
        return a.length > 0 ? a : void 0
    }
}
  , iv = {
    name: "htmlTag",
    lookup(u) {
        let {htmlTag: a} = u, r;
        const o = a || (typeof document < "u" ? document.documentElement : null);
        return o && typeof o.getAttribute == "function" && (r = o.getAttribute("lang")),
        r
    }
}
  , uv = {
    name: "path",
    lookup(u) {
        let {lookupFromPathIndex: a} = u;
        if (typeof window > "u")
            return;
        const r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        return Array.isArray(r) ? r[typeof a == "number" ? a : 0]?.replace("/", "") : void 0
    }
}
  , rv = {
    name: "subdomain",
    lookup(u) {
        let {lookupFromSubdomainIndex: a} = u;
        const r = typeof a == "number" ? a + 1 : 1
          , o = typeof window < "u" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
        if (o)
            return o[r]
    }
};
let ag = !1;
try {
    document.cookie,
    ag = !0
} catch {}
const ig = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
ag || ig.splice(1, 1);
const sv = () => ({
    order: ig,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: u => u
});
class ug {
    constructor(a) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.type = "languageDetector",
        this.detectors = {},
        this.init(a, r)
    }
    init() {
        let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            languageUtils: {}
        }
          , r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        this.services = a,
        this.options = Fy(r, this.options || {}, sv()),
        typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = c => c.replace("-", "_")),
        this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
        this.i18nOptions = o,
        this.addDetector(Py),
        this.addDetector(ev),
        this.addDetector(nv),
        this.addDetector(lv),
        this.addDetector(av),
        this.addDetector(iv),
        this.addDetector(uv),
        this.addDetector(rv),
        this.addDetector(tv)
    }
    addDetector(a) {
        return this.detectors[a.name] = a,
        this
    }
    detect() {
        let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order
          , r = [];
        return a.forEach(o => {
            if (this.detectors[o]) {
                let c = this.detectors[o].lookup(this.options);
                c && typeof c == "string" && (c = [c]),
                c && (r = r.concat(c))
            }
        }
        ),
        r = r.filter(o => o != null && !Wy(o)).map(o => this.options.convertDetectedLanguage(o)),
        this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? r : r.length > 0 ? r[0] : null
    }
    cacheUserLanguage(a) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
        r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(a) > -1 || r.forEach(o => {
            this.detectors[o] && this.detectors[o].cacheUserLanguage(a, this.options)
        }
        ))
    }
}
ug.type = "languageDetector";
const gm = Object.assign({})
  , Xa = {};
Object.keys(gm).forEach(u => {
    const a = u.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
    if (a) {
        const [,r] = a
          , o = gm[u];
        Xa[r] || (Xa[r] = {
            translation: {}
        }),
        o.default && (Xa[r].translation = {
            ...Xa[r].translation,
            ...o.default
        })
    }
}
);
et.use(ug).use(Zy).init({
    lng: "en",
    fallbackLng: "en",
    debug: !1,
    resources: Xa,
    interpolation: {
        escapeValue: !1
    }
});
var io = {
    exports: {}
}
  , Ga = {}
  , uo = {
    exports: {}
}
  , ro = {};
var pm;
function ov() {
    return pm || (pm = 1,
    (function(u) {
        function a(j, X) {
            var te = j.length;
            j.push(X);
            e: for (; 0 < te; ) {
                var ve = te - 1 >>> 1
                  , we = j[ve];
                if (0 < c(we, X))
                    j[ve] = X,
                    j[te] = we,
                    te = ve;
                else
                    break e
            }
        }
        function r(j) {
            return j.length === 0 ? null : j[0]
        }
        function o(j) {
            if (j.length === 0)
                return null;
            var X = j[0]
              , te = j.pop();
            if (te !== X) {
                j[0] = te;
                e: for (var ve = 0, we = j.length, C = we >>> 1; ve < C; ) {
                    var q = 2 * (ve + 1) - 1
                      , K = j[q]
                      , $ = q + 1
                      , ue = j[$];
                    if (0 > c(K, te))
                        $ < we && 0 > c(ue, K) ? (j[ve] = ue,
                        j[$] = te,
                        ve = $) : (j[ve] = K,
                        j[q] = te,
                        ve = q);
                    else if ($ < we && 0 > c(ue, te))
                        j[ve] = ue,
                        j[$] = te,
                        ve = $;
                    else
                        break e
                }
            }
            return X
        }
        function c(j, X) {
            var te = j.sortIndex - X.sortIndex;
            return te !== 0 ? te : j.id - X.id
        }
        if (u.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            u.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , m = d.now();
            u.unstable_now = function() {
                return d.now() - m
            }
        }
        var g = []
          , p = []
          , b = 1
          , v = null
          , S = 3
          , x = !1
          , E = !1
          , O = !1
          , _ = !1
          , L = typeof setTimeout == "function" ? setTimeout : null
          , U = typeof clearTimeout == "function" ? clearTimeout : null
          , V = typeof setImmediate < "u" ? setImmediate : null;
        function J(j) {
            for (var X = r(p); X !== null; ) {
                if (X.callback === null)
                    o(p);
                else if (X.startTime <= j)
                    o(p),
                    X.sortIndex = X.expirationTime,
                    a(g, X);
                else
                    break;
                X = r(p)
            }
        }
        function W(j) {
            if (O = !1,
            J(j),
            !E)
                if (r(g) !== null)
                    E = !0,
                    oe || (oe = !0,
                    k());
                else {
                    var X = r(p);
                    X !== null && Ce(W, X.startTime - j)
                }
        }
        var oe = !1
          , I = -1
          , pe = 5
          , Ee = -1;
        function Q() {
            return _ ? !0 : !(u.unstable_now() - Ee < pe)
        }
        function Z() {
            if (_ = !1,
            oe) {
                var j = u.unstable_now();
                Ee = j;
                var X = !0;
                try {
                    e: {
                        E = !1,
                        O && (O = !1,
                        U(I),
                        I = -1),
                        x = !0;
                        var te = S;
                        try {
                            t: {
                                for (J(j),
                                v = r(g); v !== null && !(v.expirationTime > j && Q()); ) {
                                    var ve = v.callback;
                                    if (typeof ve == "function") {
                                        v.callback = null,
                                        S = v.priorityLevel;
                                        var we = ve(v.expirationTime <= j);
                                        if (j = u.unstable_now(),
                                        typeof we == "function") {
                                            v.callback = we,
                                            J(j),
                                            X = !0;
                                            break t
                                        }
                                        v === r(g) && o(g),
                                        J(j)
                                    } else
                                        o(g);
                                    v = r(g)
                                }
                                if (v !== null)
                                    X = !0;
                                else {
                                    var C = r(p);
                                    C !== null && Ce(W, C.startTime - j),
                                    X = !1
                                }
                            }
                            break e
                        } finally {
                            v = null,
                            S = te,
                            x = !1
                        }
                        X = void 0
                    }
                } finally {
                    X ? k() : oe = !1
                }
            }
        }
        var k;
        if (typeof V == "function")
            k = function() {
                V(Z)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var le = new MessageChannel
              , ce = le.port2;
            le.port1.onmessage = Z,
            k = function() {
                ce.postMessage(null)
            }
        } else
            k = function() {
                L(Z, 0)
            }
            ;
        function Ce(j, X) {
            I = L(function() {
                j(u.unstable_now())
            }, X)
        }
        u.unstable_IdlePriority = 5,
        u.unstable_ImmediatePriority = 1,
        u.unstable_LowPriority = 4,
        u.unstable_NormalPriority = 3,
        u.unstable_Profiling = null,
        u.unstable_UserBlockingPriority = 2,
        u.unstable_cancelCallback = function(j) {
            j.callback = null
        }
        ,
        u.unstable_forceFrameRate = function(j) {
            0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pe = 0 < j ? Math.floor(1e3 / j) : 5
        }
        ,
        u.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        u.unstable_next = function(j) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var X = 3;
                break;
            default:
                X = S
            }
            var te = S;
            S = X;
            try {
                return j()
            } finally {
                S = te
            }
        }
        ,
        u.unstable_requestPaint = function() {
            _ = !0
        }
        ,
        u.unstable_runWithPriority = function(j, X) {
            switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
            }
            var te = S;
            S = j;
            try {
                return X()
            } finally {
                S = te
            }
        }
        ,
        u.unstable_scheduleCallback = function(j, X, te) {
            var ve = u.unstable_now();
            switch (typeof te == "object" && te !== null ? (te = te.delay,
            te = typeof te == "number" && 0 < te ? ve + te : ve) : te = ve,
            j) {
            case 1:
                var we = -1;
                break;
            case 2:
                we = 250;
                break;
            case 5:
                we = 1073741823;
                break;
            case 4:
                we = 1e4;
                break;
            default:
                we = 5e3
            }
            return we = te + we,
            j = {
                id: b++,
                callback: X,
                priorityLevel: j,
                startTime: te,
                expirationTime: we,
                sortIndex: -1
            },
            te > ve ? (j.sortIndex = te,
            a(p, j),
            r(g) === null && j === r(p) && (O ? (U(I),
            I = -1) : O = !0,
            Ce(W, te - ve))) : (j.sortIndex = we,
            a(g, j),
            E || x || (E = !0,
            oe || (oe = !0,
            k()))),
            j
        }
        ,
        u.unstable_shouldYield = Q,
        u.unstable_wrapCallback = function(j) {
            var X = S;
            return function() {
                var te = S;
                S = X;
                try {
                    return j.apply(this, arguments)
                } finally {
                    S = te
                }
            }
        }
    }
    )(ro)),
    ro
}
var ym;
function cv() {
    return ym || (ym = 1,
    uo.exports = ov()),
    uo.exports
}
var so = {
    exports: {}
}
  , tt = {};
var vm;
function fv() {
    if (vm)
        return tt;
    vm = 1;
    var u = Do();
    function a(g) {
        var p = "https://react.dev/errors/" + g;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var b = 2; b < arguments.length; b++)
                p += "&args[]=" + encodeURIComponent(arguments[b])
        }
        return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function r() {}
    var o = {
        d: {
            f: r,
            r: function() {
                throw Error(a(522))
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function f(g, p, b) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: v == null ? null : "" + v,
            children: g,
            containerInfo: p,
            implementation: b
        }
    }
    var d = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(g, p) {
        if (g === "font")
            return "";
        if (typeof p == "string")
            return p === "use-credentials" ? p : ""
    }
    return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    tt.createPortal = function(g, p) {
        var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            throw Error(a(299));
        return f(g, p, null, b)
    }
    ,
    tt.flushSync = function(g) {
        var p = d.T
          , b = o.p;
        try {
            if (d.T = null,
            o.p = 2,
            g)
                return g()
        } finally {
            d.T = p,
            o.p = b,
            o.d.f()
        }
    }
    ,
    tt.preconnect = function(g, p) {
        typeof g == "string" && (p ? (p = p.crossOrigin,
        p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null,
        o.d.C(g, p))
    }
    ,
    tt.prefetchDNS = function(g) {
        typeof g == "string" && o.d.D(g)
    }
    ,
    tt.preinit = function(g, p) {
        if (typeof g == "string" && p && typeof p.as == "string") {
            var b = p.as
              , v = m(b, p.crossOrigin)
              , S = typeof p.integrity == "string" ? p.integrity : void 0
              , x = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            b === "style" ? o.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: v,
                integrity: S,
                fetchPriority: x
            }) : b === "script" && o.d.X(g, {
                crossOrigin: v,
                integrity: S,
                fetchPriority: x,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }
    ,
    tt.preinitModule = function(g, p) {
        if (typeof g == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var b = m(p.as, p.crossOrigin);
                    o.d.M(g, {
                        crossOrigin: b,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else
                p == null && o.d.M(g)
    }
    ,
    tt.preload = function(g, p) {
        if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var b = p.as
              , v = m(b, p.crossOrigin);
            o.d.L(g, b, {
                crossOrigin: v,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }
    ,
    tt.preloadModule = function(g, p) {
        if (typeof g == "string")
            if (p) {
                var b = m(p.as, p.crossOrigin);
                o.d.m(g, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: b,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else
                o.d.m(g)
    }
    ,
    tt.requestFormReset = function(g) {
        o.d.r(g)
    }
    ,
    tt.unstable_batchedUpdates = function(g, p) {
        return g(p)
    }
    ,
    tt.useFormState = function(g, p, b) {
        return d.H.useFormState(g, p, b)
    }
    ,
    tt.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    tt.version = "19.2.4",
    tt
}
var bm;
function dv() {
    if (bm)
        return so.exports;
    bm = 1;
    function u() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)
            } catch (a) {
                console.error(a)
            }
    }
    return u(),
    so.exports = fv(),
    so.exports
}
var xm;
function hv() {
    if (xm)
        return Ga;
    xm = 1;
    var u = cv()
      , a = Do()
      , r = dv();
    function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function f(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function m(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function g(e) {
        if (f(e) !== e)
            throw Error(o(188))
    }
    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e),
            t === null)
                throw Error(o(188));
            return t !== e ? null : e
        }
        for (var n = e, l = t; ; ) {
            var i = n.return;
            if (i === null)
                break;
            var s = i.alternate;
            if (s === null) {
                if (l = i.return,
                l !== null) {
                    n = l;
                    continue
                }
                break
            }
            if (i.child === s.child) {
                for (s = i.child; s; ) {
                    if (s === n)
                        return g(i),
                        e;
                    if (s === l)
                        return g(i),
                        t;
                    s = s.sibling
                }
                throw Error(o(188))
            }
            if (n.return !== l.return)
                n = i,
                l = s;
            else {
                for (var h = !1, y = i.child; y; ) {
                    if (y === n) {
                        h = !0,
                        n = i,
                        l = s;
                        break
                    }
                    if (y === l) {
                        h = !0,
                        l = i,
                        n = s;
                        break
                    }
                    y = y.sibling
                }
                if (!h) {
                    for (y = s.child; y; ) {
                        if (y === n) {
                            h = !0,
                            n = s,
                            l = i;
                            break
                        }
                        if (y === l) {
                            h = !0,
                            l = s,
                            n = i;
                            break
                        }
                        y = y.sibling
                    }
                    if (!h)
                        throw Error(o(189))
                }
            }
            if (n.alternate !== l)
                throw Error(o(190))
        }
        if (n.tag !== 3)
            throw Error(o(188));
        return n.stateNode.current === n ? e : t
    }
    function b(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = b(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var v = Object.assign
      , S = Symbol.for("react.element")
      , x = Symbol.for("react.transitional.element")
      , E = Symbol.for("react.portal")
      , O = Symbol.for("react.fragment")
      , _ = Symbol.for("react.strict_mode")
      , L = Symbol.for("react.profiler")
      , U = Symbol.for("react.consumer")
      , V = Symbol.for("react.context")
      , J = Symbol.for("react.forward_ref")
      , W = Symbol.for("react.suspense")
      , oe = Symbol.for("react.suspense_list")
      , I = Symbol.for("react.memo")
      , pe = Symbol.for("react.lazy")
      , Ee = Symbol.for("react.activity")
      , Q = Symbol.for("react.memo_cache_sentinel")
      , Z = Symbol.iterator;
    function k(e) {
        return e === null || typeof e != "object" ? null : (e = Z && e[Z] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var le = Symbol.for("react.client.reference");
    function ce(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === le ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case O:
            return "Fragment";
        case L:
            return "Profiler";
        case _:
            return "StrictMode";
        case W:
            return "Suspense";
        case oe:
            return "SuspenseList";
        case Ee:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case E:
                return "Portal";
            case V:
                return e.displayName || "Context";
            case U:
                return (e._context.displayName || "Context") + ".Consumer";
            case J:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case I:
                return t = e.displayName || null,
                t !== null ? t : ce(e.type) || "Memo";
            case pe:
                t = e._payload,
                e = e._init;
                try {
                    return ce(e(t))
                } catch {}
            }
        return null
    }
    var Ce = Array.isArray
      , j = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , X = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , te = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ve = []
      , we = -1;
    function C(e) {
        return {
            current: e
        }
    }
    function q(e) {
        0 > we || (e.current = ve[we],
        ve[we] = null,
        we--)
    }
    function K(e, t) {
        we++,
        ve[we] = e.current,
        e.current = t
    }
    var $ = C(null)
      , ue = C(null)
      , fe = C(null)
      , _e = C(null);
    function nt(e, t) {
        switch (K(fe, t),
        K(ue, e),
        K($, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? mh(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = mh(t),
                e = gh(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        q($),
        K($, e)
    }
    function Be() {
        q($),
        q(ue),
        q(fe)
    }
    function Zl(e) {
        e.memoizedState !== null && K(_e, e);
        var t = $.current
          , n = gh(t, e.type);
        t !== n && (K(ue, e),
        K($, n))
    }
    function ti(e) {
        ue.current === e && (q($),
        q(ue)),
        _e.current === e && (q(_e),
        Da._currentValue = te)
    }
    var Hu, Qo;
    function Bn(e) {
        if (Hu === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                Hu = t && t[1] || "",
                Qo = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Hu + e + Qo
    }
    var qu = !1;
    function Gu(e, t) {
        if (!e || qu)
            return "";
        qu = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var Y = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(Y.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Y, [])
                                } catch (D) {
                                    var z = D
                                }
                                Reflect.construct(e, [], Y)
                            } else {
                                try {
                                    Y.call()
                                } catch (D) {
                                    z = D
                                }
                                e.call(Y.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (D) {
                                z = D
                            }
                            (Y = e()) && typeof Y.catch == "function" && Y.catch(function() {})
                        }
                    } catch (D) {
                        if (D && z && typeof D.stack == "string")
                            return [D.stack, z.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            i && i.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var s = l.DetermineComponentFrameRoot()
              , h = s[0]
              , y = s[1];
            if (h && y) {
                var w = h.split(`
`)
                  , M = y.split(`
`);
                for (i = l = 0; l < w.length && !w[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; i < M.length && !M[i].includes("DetermineComponentFrameRoot"); )
                    i++;
                if (l === w.length || i === M.length)
                    for (l = w.length - 1,
                    i = M.length - 1; 1 <= l && 0 <= i && w[l] !== M[i]; )
                        i--;
                for (; 1 <= l && 0 <= i; l--,
                i--)
                    if (w[l] !== M[i]) {
                        if (l !== 1 || i !== 1)
                            do
                                if (l--,
                                i--,
                                0 > i || w[l] !== M[i]) {
                                    var H = `
` + w[l].replace(" at new ", " at ");
                                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)),
                                    H
                                }
                            while (1 <= l && 0 <= i);
                        break
                    }
            }
        } finally {
            qu = !1,
            Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? Bn(n) : ""
    }
    function Kg(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return Bn(e.type);
        case 16:
            return Bn("Lazy");
        case 13:
            return e.child !== t && t !== null ? Bn("Suspense Fallback") : Bn("Suspense");
        case 19:
            return Bn("SuspenseList");
        case 0:
        case 15:
            return Gu(e.type, !1);
        case 11:
            return Gu(e.type.render, !1);
        case 1:
            return Gu(e.type, !0);
        case 31:
            return Bn("Activity");
        default:
            return ""
        }
    }
    function Xo(e) {
        try {
            var t = ""
              , n = null;
            do
                t += Kg(e, n),
                n = e,
                e = e.return;
            while (e);
            return t
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var Yu = Object.prototype.hasOwnProperty
      , Vu = u.unstable_scheduleCallback
      , Qu = u.unstable_cancelCallback
      , kg = u.unstable_shouldYield
      , Jg = u.unstable_requestPaint
      , ft = u.unstable_now
      , $g = u.unstable_getCurrentPriorityLevel
      , Zo = u.unstable_ImmediatePriority
      , Ko = u.unstable_UserBlockingPriority
      , ni = u.unstable_NormalPriority
      , Fg = u.unstable_LowPriority
      , ko = u.unstable_IdlePriority
      , Wg = u.log
      , Ig = u.unstable_setDisableYieldValue
      , Kl = null
      , dt = null;
    function fn(e) {
        if (typeof Wg == "function" && Ig(e),
        dt && typeof dt.setStrictMode == "function")
            try {
                dt.setStrictMode(Kl, e)
            } catch {}
    }
    var ht = Math.clz32 ? Math.clz32 : tp
      , Pg = Math.log
      , ep = Math.LN2;
    function tp(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Pg(e) / ep | 0) | 0
    }
    var li = 256
      , ai = 262144
      , ii = 4194304;
    function Hn(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
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
            return 64;
        case 128:
            return 128;
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
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function ui(e, t, n) {
        var l = e.pendingLanes;
        if (l === 0)
            return 0;
        var i = 0
          , s = e.suspendedLanes
          , h = e.pingedLanes;
        e = e.warmLanes;
        var y = l & 134217727;
        return y !== 0 ? (l = y & ~s,
        l !== 0 ? i = Hn(l) : (h &= y,
        h !== 0 ? i = Hn(h) : n || (n = y & ~e,
        n !== 0 && (i = Hn(n))))) : (y = l & ~s,
        y !== 0 ? i = Hn(y) : h !== 0 ? i = Hn(h) : n || (n = l & ~e,
        n !== 0 && (i = Hn(n)))),
        i === 0 ? 0 : t !== 0 && t !== i && (t & s) === 0 && (s = i & -i,
        n = t & -t,
        s >= n || s === 32 && (n & 4194048) !== 0) ? t : i
    }
    function kl(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function np(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
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
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Jo() {
        var e = ii;
        return ii <<= 1,
        (ii & 62914560) === 0 && (ii = 4194304),
        e
    }
    function Xu(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function Jl(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function lp(e, t, n, l, i, s) {
        var h = e.pendingLanes;
        e.pendingLanes = n,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= n,
        e.entangledLanes &= n,
        e.errorRecoveryDisabledLanes &= n,
        e.shellSuspendCounter = 0;
        var y = e.entanglements
          , w = e.expirationTimes
          , M = e.hiddenUpdates;
        for (n = h & ~n; 0 < n; ) {
            var H = 31 - ht(n)
              , Y = 1 << H;
            y[H] = 0,
            w[H] = -1;
            var z = M[H];
            if (z !== null)
                for (M[H] = null,
                H = 0; H < z.length; H++) {
                    var D = z[H];
                    D !== null && (D.lane &= -536870913)
                }
            n &= ~Y
        }
        l !== 0 && $o(e, l, 0),
        s !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(h & ~t))
    }
    function $o(e, t, n) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var l = 31 - ht(t);
        e.entangledLanes |= t,
        e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930
    }
    function Fo(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var l = 31 - ht(n)
              , i = 1 << l;
            i & t | e[l] & t && (e[l] |= t),
            n &= ~i
        }
    }
    function Wo(e, t) {
        var n = t & -t;
        return n = (n & 42) !== 0 ? 1 : Zu(n),
        (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    }
    function Zu(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
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
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function Ku(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Io() {
        var e = X.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : Hh(e.type))
    }
    function Po(e, t) {
        var n = X.p;
        try {
            return X.p = e,
            t()
        } finally {
            X.p = n
        }
    }
    var dn = Math.random().toString(36).slice(2)
      , $e = "__reactFiber$" + dn
      , at = "__reactProps$" + dn
      , nl = "__reactContainer$" + dn
      , ku = "__reactEvents$" + dn
      , ap = "__reactListeners$" + dn
      , ip = "__reactHandles$" + dn
      , ec = "__reactResources$" + dn
      , $l = "__reactMarker$" + dn;
    function Ju(e) {
        delete e[$e],
        delete e[at],
        delete e[ku],
        delete e[ap],
        delete e[ip]
    }
    function ll(e) {
        var t = e[$e];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[nl] || n[$e]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = Eh(e); e !== null; ) {
                        if (n = e[$e])
                            return n;
                        e = Eh(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function al(e) {
        if (e = e[$e] || e[nl]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function Fl(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(o(33))
    }
    function il(e) {
        var t = e[ec];
        return t || (t = e[ec] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Ke(e) {
        e[$l] = !0
    }
    var tc = new Set
      , nc = {};
    function qn(e, t) {
        ul(e, t),
        ul(e + "Capture", t)
    }
    function ul(e, t) {
        for (nc[e] = t,
        e = 0; e < t.length; e++)
            tc.add(t[e])
    }
    var up = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , lc = {}
      , ac = {};
    function rp(e) {
        return Yu.call(ac, e) ? !0 : Yu.call(lc, e) ? !1 : up.test(e) ? ac[e] = !0 : (lc[e] = !0,
        !1)
    }
    function ri(e, t, n) {
        if (rp(t))
            if (n === null)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var l = t.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + n)
            }
    }
    function si(e, t, n) {
        if (n === null)
            e.removeAttribute(t);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + n)
        }
    }
    function Qt(e, t, n, l) {
        if (l === null)
            e.removeAttribute(n);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(n);
                return
            }
            e.setAttributeNS(t, n, "" + l)
        }
    }
    function St(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function ic(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function sp(e, t, n) {
        var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var i = l.get
              , s = l.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return i.call(this)
                },
                set: function(h) {
                    n = "" + h,
                    s.call(this, h)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(h) {
                    n = "" + h
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function $u(e) {
        if (!e._valueTracker) {
            var t = ic(e) ? "checked" : "value";
            e._valueTracker = sp(e, t, "" + e[t])
        }
    }
    function uc(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , l = "";
        return e && (l = ic(e) ? e.checked ? "true" : "false" : e.value),
        e = l,
        e !== n ? (t.setValue(e),
        !0) : !1
    }
    function oi(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var op = /[\n"\\]/g;
    function Et(e) {
        return e.replace(op, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Fu(e, t, n, l, i, s, h, y) {
        e.name = "",
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.type = h : e.removeAttribute("type"),
        t != null ? h === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"),
        t != null ? Wu(e, h, St(t)) : n != null ? Wu(e, h, St(n)) : l != null && e.removeAttribute("value"),
        i == null && s != null && (e.defaultChecked = !!s),
        i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"),
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + St(y) : e.removeAttribute("name")
    }
    function rc(e, t, n, l, i, s, h, y) {
        if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s),
        t != null || n != null) {
            if (!(s !== "submit" && s !== "reset" || t != null)) {
                $u(e);
                return
            }
            n = n != null ? "" + St(n) : "",
            t = t != null ? "" + St(t) : n,
            y || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        l = l ?? i,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        e.checked = y ? e.checked : !!l,
        e.defaultChecked = !!l,
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.name = h),
        $u(e)
    }
    function Wu(e, t, n) {
        t === "number" && oi(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }
    function rl(e, t, n, l) {
        if (e = e.options,
        t) {
            t = {};
            for (var i = 0; i < n.length; i++)
                t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                i = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && l && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + St(n),
            t = null,
            i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    e[i].selected = !0,
                    l && (e[i].defaultSelected = !0);
                    return
                }
                t !== null || e[i].disabled || (t = e[i])
            }
            t !== null && (t.selected = !0)
        }
    }
    function sc(e, t, n) {
        if (t != null && (t = "" + St(t),
        t !== e.value && (e.value = t),
        n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n != null ? "" + St(n) : ""
    }
    function oc(e, t, n, l) {
        if (t == null) {
            if (l != null) {
                if (n != null)
                    throw Error(o(92));
                if (Ce(l)) {
                    if (1 < l.length)
                        throw Error(o(93));
                    l = l[0]
                }
                n = l
            }
            n == null && (n = ""),
            t = n
        }
        n = St(t),
        e.defaultValue = n,
        l = e.textContent,
        l === n && l !== "" && l !== null && (e.value = l),
        $u(e)
    }
    function sl(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var cp = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function cc(e, t, n) {
        var l = t.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || cp.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }
    function fc(e, t, n) {
        if (t != null && typeof t != "object")
            throw Error(o(62));
        if (e = e.style,
        n != null) {
            for (var l in n)
                !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
            for (var i in t)
                l = t[i],
                t.hasOwnProperty(i) && n[i] !== l && cc(e, i, l)
        } else
            for (var s in t)
                t.hasOwnProperty(s) && cc(e, s, t[s])
    }
    function Iu(e) {
        if (e.indexOf("-") === -1)
            return !1;
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
            return !0
        }
    }
    var fp = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , dp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ci(e) {
        return dp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function Xt() {}
    var Pu = null;
    function er(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var ol = null
      , cl = null;
    function dc(e) {
        var t = al(e);
        if (t && (e = t.stateNode)) {
            var n = e[at] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (Fu(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                t = n.name,
                n.type === "radio" && t != null) {
                    for (n = e; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'),
                    t = 0; t < n.length; t++) {
                        var l = n[t];
                        if (l !== e && l.form === e.form) {
                            var i = l[at] || null;
                            if (!i)
                                throw Error(o(90));
                            Fu(l, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name)
                        }
                    }
                    for (t = 0; t < n.length; t++)
                        l = n[t],
                        l.form === e.form && uc(l)
                }
                break e;
            case "textarea":
                sc(e, n.value, n.defaultValue);
                break e;
            case "select":
                t = n.value,
                t != null && rl(e, !!n.multiple, t, !1)
            }
        }
    }
    var tr = !1;
    function hc(e, t, n) {
        if (tr)
            return e(t, n);
        tr = !0;
        try {
            var l = e(t);
            return l
        } finally {
            if (tr = !1,
            (ol !== null || cl !== null) && (Wi(),
            ol && (t = ol,
            e = cl,
            cl = ol = null,
            dc(t),
            e)))
                for (t = 0; t < e.length; t++)
                    dc(e[t])
        }
    }
    function Wl(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var l = n[at] || null;
        if (l === null)
            return null;
        n = l[t];
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
            (l = !l.disabled) || (e = e.type,
            l = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !l;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(o(231, t, typeof n));
        return n
    }
    var Zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , nr = !1;
    if (Zt)
        try {
            var Il = {};
            Object.defineProperty(Il, "passive", {
                get: function() {
                    nr = !0
                }
            }),
            window.addEventListener("test", Il, Il),
            window.removeEventListener("test", Il, Il)
        } catch {
            nr = !1
        }
    var hn = null
      , lr = null
      , fi = null;
    function mc() {
        if (fi)
            return fi;
        var e, t = lr, n = t.length, l, i = "value"in hn ? hn.value : hn.textContent, s = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++)
            ;
        var h = n - e;
        for (l = 1; l <= h && t[n - l] === i[s - l]; l++)
            ;
        return fi = i.slice(e, 1 < l ? 1 - l : void 0)
    }
    function di(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function hi() {
        return !0
    }
    function gc() {
        return !1
    }
    function it(e) {
        function t(n, l, i, s, h) {
            this._reactName = n,
            this._targetInst = i,
            this.type = l,
            this.nativeEvent = s,
            this.target = h,
            this.currentTarget = null;
            for (var y in e)
                e.hasOwnProperty(y) && (n = e[y],
                this[y] = n ? n(s) : s[y]);
            return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? hi : gc,
            this.isPropagationStopped = gc,
            this
        }
        return v(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = hi)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = hi)
            },
            persist: function() {},
            isPersistent: hi
        }),
        t
    }
    var Gn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, mi = it(Gn), Pl = v({}, Gn, {
        view: 0,
        detail: 0
    }), hp = it(Pl), ar, ir, ea, gi = v({}, Pl, {
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
        getModifierState: rr,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== ea && (ea && e.type === "mousemove" ? (ar = e.screenX - ea.screenX,
            ir = e.screenY - ea.screenY) : ir = ar = 0,
            ea = e),
            ar)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : ir
        }
    }), pc = it(gi), mp = v({}, gi, {
        dataTransfer: 0
    }), gp = it(mp), pp = v({}, Pl, {
        relatedTarget: 0
    }), ur = it(pp), yp = v({}, Gn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), vp = it(yp), bp = v({}, Gn, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), xp = it(bp), Sp = v({}, Gn, {
        data: 0
    }), yc = it(Sp), Ep = {
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
        MozPrintableKey: "Unidentified"
    }, wp = {
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
        224: "Meta"
    }, _p = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Cp(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = _p[e]) ? !!t[e] : !1
    }
    function rr() {
        return Cp
    }
    var Ap = v({}, Pl, {
        key: function(e) {
            if (e.key) {
                var t = Ep[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = di(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wp[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: rr,
        charCode: function(e) {
            return e.type === "keypress" ? di(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? di(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Op = it(Ap)
      , Tp = v({}, gi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , vc = it(Tp)
      , Rp = v({}, Pl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: rr
    })
      , Np = it(Rp)
      , Mp = v({}, Gn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , zp = it(Mp)
      , Lp = v({}, gi, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Dp = it(Lp)
      , jp = v({}, Gn, {
        newState: 0,
        oldState: 0
    })
      , Up = it(jp)
      , Bp = [9, 13, 27, 32]
      , sr = Zt && "CompositionEvent"in window
      , ta = null;
    Zt && "documentMode"in document && (ta = document.documentMode);
    var Hp = Zt && "TextEvent"in window && !ta
      , bc = Zt && (!sr || ta && 8 < ta && 11 >= ta)
      , xc = " "
      , Sc = !1;
    function Ec(e, t) {
        switch (e) {
        case "keyup":
            return Bp.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function wc(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var fl = !1;
    function qp(e, t) {
        switch (e) {
        case "compositionend":
            return wc(t);
        case "keypress":
            return t.which !== 32 ? null : (Sc = !0,
            xc);
        case "textInput":
            return e = t.data,
            e === xc && Sc ? null : e;
        default:
            return null
        }
    }
    function Gp(e, t) {
        if (fl)
            return e === "compositionend" || !sr && Ec(e, t) ? (e = mc(),
            fi = lr = hn = null,
            fl = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return bc && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Yp = {
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
        week: !0
    };
    function _c(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Yp[e.type] : t === "textarea"
    }
    function Cc(e, t, n, l) {
        ol ? cl ? cl.push(l) : cl = [l] : ol = l,
        t = au(t, "onChange"),
        0 < t.length && (n = new mi("onChange","change",null,n,l),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var na = null
      , la = null;
    function Vp(e) {
        sh(e, 0)
    }
    function pi(e) {
        var t = Fl(e);
        if (uc(t))
            return e
    }
    function Ac(e, t) {
        if (e === "change")
            return t
    }
    var Oc = !1;
    if (Zt) {
        var or;
        if (Zt) {
            var cr = "oninput"in document;
            if (!cr) {
                var Tc = document.createElement("div");
                Tc.setAttribute("oninput", "return;"),
                cr = typeof Tc.oninput == "function"
            }
            or = cr
        } else
            or = !1;
        Oc = or && (!document.documentMode || 9 < document.documentMode)
    }
    function Rc() {
        na && (na.detachEvent("onpropertychange", Nc),
        la = na = null)
    }
    function Nc(e) {
        if (e.propertyName === "value" && pi(la)) {
            var t = [];
            Cc(t, la, e, er(e)),
            hc(Vp, t)
        }
    }
    function Qp(e, t, n) {
        e === "focusin" ? (Rc(),
        na = t,
        la = n,
        na.attachEvent("onpropertychange", Nc)) : e === "focusout" && Rc()
    }
    function Xp(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return pi(la)
    }
    function Zp(e, t) {
        if (e === "click")
            return pi(t)
    }
    function Kp(e, t) {
        if (e === "input" || e === "change")
            return pi(t)
    }
    function kp(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var mt = typeof Object.is == "function" ? Object.is : kp;
    function aa(e, t) {
        if (mt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
          , l = Object.keys(t);
        if (n.length !== l.length)
            return !1;
        for (l = 0; l < n.length; l++) {
            var i = n[l];
            if (!Yu.call(t, i) || !mt(e[i], t[i]))
                return !1
        }
        return !0
    }
    function Mc(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function zc(e, t) {
        var n = Mc(e);
        e = 0;
        for (var l; n; ) {
            if (n.nodeType === 3) {
                if (l = e + n.textContent.length,
                e <= t && l >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = l
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Mc(n)
        }
    }
    function Lc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lc(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Dc(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = oi(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = oi(e.document)
        }
        return t
    }
    function fr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Jp = Zt && "documentMode"in document && 11 >= document.documentMode
      , dl = null
      , dr = null
      , ia = null
      , hr = !1;
    function jc(e, t, n) {
        var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        hr || dl == null || dl !== oi(l) || (l = dl,
        "selectionStart"in l && fr(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        ia && aa(ia, l) || (ia = l,
        l = au(dr, "onSelect"),
        0 < l.length && (t = new mi("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: l
        }),
        t.target = dl)))
    }
    function Yn(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var hl = {
        animationend: Yn("Animation", "AnimationEnd"),
        animationiteration: Yn("Animation", "AnimationIteration"),
        animationstart: Yn("Animation", "AnimationStart"),
        transitionrun: Yn("Transition", "TransitionRun"),
        transitionstart: Yn("Transition", "TransitionStart"),
        transitioncancel: Yn("Transition", "TransitionCancel"),
        transitionend: Yn("Transition", "TransitionEnd")
    }
      , mr = {}
      , Uc = {};
    Zt && (Uc = document.createElement("div").style,
    "AnimationEvent"in window || (delete hl.animationend.animation,
    delete hl.animationiteration.animation,
    delete hl.animationstart.animation),
    "TransitionEvent"in window || delete hl.transitionend.transition);
    function Vn(e) {
        if (mr[e])
            return mr[e];
        if (!hl[e])
            return e;
        var t = hl[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Uc)
                return mr[e] = t[n];
        return e
    }
    var Bc = Vn("animationend")
      , Hc = Vn("animationiteration")
      , qc = Vn("animationstart")
      , $p = Vn("transitionrun")
      , Fp = Vn("transitionstart")
      , Wp = Vn("transitioncancel")
      , Gc = Vn("transitionend")
      , Yc = new Map
      , gr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    gr.push("scrollEnd");
    function zt(e, t) {
        Yc.set(e, t),
        qn(t, [e])
    }
    var yi = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , wt = []
      , ml = 0
      , pr = 0;
    function vi() {
        for (var e = ml, t = pr = ml = 0; t < e; ) {
            var n = wt[t];
            wt[t++] = null;
            var l = wt[t];
            wt[t++] = null;
            var i = wt[t];
            wt[t++] = null;
            var s = wt[t];
            if (wt[t++] = null,
            l !== null && i !== null) {
                var h = l.pending;
                h === null ? i.next = i : (i.next = h.next,
                h.next = i),
                l.pending = i
            }
            s !== 0 && Vc(n, i, s)
        }
    }
    function bi(e, t, n, l) {
        wt[ml++] = e,
        wt[ml++] = t,
        wt[ml++] = n,
        wt[ml++] = l,
        pr |= l,
        e.lanes |= l,
        e = e.alternate,
        e !== null && (e.lanes |= l)
    }
    function yr(e, t, n, l) {
        return bi(e, t, n, l),
        xi(e)
    }
    function Qn(e, t) {
        return bi(e, null, null, t),
        xi(e)
    }
    function Vc(e, t, n) {
        e.lanes |= n;
        var l = e.alternate;
        l !== null && (l.lanes |= n);
        for (var i = !1, s = e.return; s !== null; )
            s.childLanes |= n,
            l = s.alternate,
            l !== null && (l.childLanes |= n),
            s.tag === 22 && (e = s.stateNode,
            e === null || e._visibility & 1 || (i = !0)),
            e = s,
            s = s.return;
        return e.tag === 3 ? (s = e.stateNode,
        i && t !== null && (i = 31 - ht(n),
        e = s.hiddenUpdates,
        l = e[i],
        l === null ? e[i] = [t] : l.push(t),
        t.lane = n | 536870912),
        s) : null
    }
    function xi(e) {
        if (50 < Oa)
            throw Oa = 0,
            As = null,
            Error(o(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var gl = {};
    function Ip(e, t, n, l) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function gt(e, t, n, l) {
        return new Ip(e,t,n,l)
    }
    function vr(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Kt(e, t) {
        var n = e.alternate;
        return n === null ? (n = gt(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 65011712,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n.refCleanup = e.refCleanup,
        n
    }
    function Qc(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = n.childLanes,
        e.lanes = n.lanes,
        e.child = n.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = n.memoizedProps,
        e.memoizedState = n.memoizedState,
        e.updateQueue = n.updateQueue,
        e.type = n.type,
        t = n.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Si(e, t, n, l, i, s) {
        var h = 0;
        if (l = e,
        typeof e == "function")
            vr(e) && (h = 1);
        else if (typeof e == "string")
            h = ly(e, n, $.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case Ee:
                return e = gt(31, n, t, i),
                e.elementType = Ee,
                e.lanes = s,
                e;
            case O:
                return Xn(n.children, i, s, t);
            case _:
                h = 8,
                i |= 24;
                break;
            case L:
                return e = gt(12, n, t, i | 2),
                e.elementType = L,
                e.lanes = s,
                e;
            case W:
                return e = gt(13, n, t, i),
                e.elementType = W,
                e.lanes = s,
                e;
            case oe:
                return e = gt(19, n, t, i),
                e.elementType = oe,
                e.lanes = s,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case V:
                        h = 10;
                        break e;
                    case U:
                        h = 9;
                        break e;
                    case J:
                        h = 11;
                        break e;
                    case I:
                        h = 14;
                        break e;
                    case pe:
                        h = 16,
                        l = null;
                        break e
                    }
                h = 29,
                n = Error(o(130, e === null ? "null" : typeof e, "")),
                l = null
            }
        return t = gt(h, n, t, i),
        t.elementType = e,
        t.type = l,
        t.lanes = s,
        t
    }
    function Xn(e, t, n, l) {
        return e = gt(7, e, l, t),
        e.lanes = n,
        e
    }
    function br(e, t, n) {
        return e = gt(6, e, null, t),
        e.lanes = n,
        e
    }
    function Xc(e) {
        var t = gt(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function xr(e, t, n) {
        return t = gt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var Zc = new WeakMap;
    function _t(e, t) {
        if (typeof e == "object" && e !== null) {
            var n = Zc.get(e);
            return n !== void 0 ? n : (t = {
                value: e,
                source: t,
                stack: Xo(t)
            },
            Zc.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: Xo(t)
        }
    }
    var pl = []
      , yl = 0
      , Ei = null
      , ua = 0
      , Ct = []
      , At = 0
      , mn = null
      , Ut = 1
      , Bt = "";
    function kt(e, t) {
        pl[yl++] = ua,
        pl[yl++] = Ei,
        Ei = e,
        ua = t
    }
    function Kc(e, t, n) {
        Ct[At++] = Ut,
        Ct[At++] = Bt,
        Ct[At++] = mn,
        mn = e;
        var l = Ut;
        e = Bt;
        var i = 32 - ht(l) - 1;
        l &= ~(1 << i),
        n += 1;
        var s = 32 - ht(t) + i;
        if (30 < s) {
            var h = i - i % 5;
            s = (l & (1 << h) - 1).toString(32),
            l >>= h,
            i -= h,
            Ut = 1 << 32 - ht(t) + i | n << i | l,
            Bt = s + e
        } else
            Ut = 1 << s | n << i | l,
            Bt = e
    }
    function Sr(e) {
        e.return !== null && (kt(e, 1),
        Kc(e, 1, 0))
    }
    function Er(e) {
        for (; e === Ei; )
            Ei = pl[--yl],
            pl[yl] = null,
            ua = pl[--yl],
            pl[yl] = null;
        for (; e === mn; )
            mn = Ct[--At],
            Ct[At] = null,
            Bt = Ct[--At],
            Ct[At] = null,
            Ut = Ct[--At],
            Ct[At] = null
    }
    function kc(e, t) {
        Ct[At++] = Ut,
        Ct[At++] = Bt,
        Ct[At++] = mn,
        Ut = t.id,
        Bt = t.overflow,
        mn = e
    }
    var Fe = null
      , ze = null
      , ye = !1
      , gn = null
      , Ot = !1
      , wr = Error(o(519));
    function pn(e) {
        var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw ra(_t(t, e)),
        wr
    }
    function Jc(e) {
        var t = e.stateNode
          , n = e.type
          , l = e.memoizedProps;
        switch (t[$e] = e,
        t[at] = l,
        n) {
        case "dialog":
            he("cancel", t),
            he("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            he("load", t);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Ra.length; n++)
                he(Ra[n], t);
            break;
        case "source":
            he("error", t);
            break;
        case "img":
        case "image":
        case "link":
            he("error", t),
            he("load", t);
            break;
        case "details":
            he("toggle", t);
            break;
        case "input":
            he("invalid", t),
            rc(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            he("invalid", t);
            break;
        case "textarea":
            he("invalid", t),
            oc(t, l.value, l.defaultValue, l.children)
        }
        n = l.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || dh(t.textContent, n) ? (l.popover != null && (he("beforetoggle", t),
        he("toggle", t)),
        l.onScroll != null && he("scroll", t),
        l.onScrollEnd != null && he("scrollend", t),
        l.onClick != null && (t.onclick = Xt),
        t = !0) : t = !1,
        t || pn(e, !0)
    }
    function $c(e) {
        for (Fe = e.return; Fe; )
            switch (Fe.tag) {
            case 5:
            case 31:
            case 13:
                Ot = !1;
                return;
            case 27:
            case 3:
                Ot = !0;
                return;
            default:
                Fe = Fe.return
            }
    }
    function vl(e) {
        if (e !== Fe)
            return !1;
        if (!ye)
            return $c(e),
            ye = !0,
            !1;
        var t = e.tag, n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type,
        n = !(n !== "form" && n !== "button") || Ys(e.type, e.memoizedProps)),
        n = !n),
        n && ze && pn(e),
        $c(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(o(317));
            ze = Sh(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(o(317));
            ze = Sh(e)
        } else
            t === 27 ? (t = ze,
            Nn(e.type) ? (e = Ks,
            Ks = null,
            ze = e) : ze = t) : ze = Fe ? Rt(e.stateNode.nextSibling) : null;
        return !0
    }
    function Zn() {
        ze = Fe = null,
        ye = !1
    }
    function _r() {
        var e = gn;
        return e !== null && (ot === null ? ot = e : ot.push.apply(ot, e),
        gn = null),
        e
    }
    function ra(e) {
        gn === null ? gn = [e] : gn.push(e)
    }
    var Cr = C(null)
      , Kn = null
      , Jt = null;
    function yn(e, t, n) {
        K(Cr, t._currentValue),
        t._currentValue = n
    }
    function $t(e) {
        e._currentValue = Cr.current,
        q(Cr)
    }
    function Ar(e, t, n) {
        for (; e !== null; ) {
            var l = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
            e === n)
                break;
            e = e.return
        }
    }
    function Or(e, t, n, l) {
        var i = e.child;
        for (i !== null && (i.return = e); i !== null; ) {
            var s = i.dependencies;
            if (s !== null) {
                var h = i.child;
                s = s.firstContext;
                e: for (; s !== null; ) {
                    var y = s;
                    s = i;
                    for (var w = 0; w < t.length; w++)
                        if (y.context === t[w]) {
                            s.lanes |= n,
                            y = s.alternate,
                            y !== null && (y.lanes |= n),
                            Ar(s.return, n, e),
                            l || (h = null);
                            break e
                        }
                    s = y.next
                }
            } else if (i.tag === 18) {
                if (h = i.return,
                h === null)
                    throw Error(o(341));
                h.lanes |= n,
                s = h.alternate,
                s !== null && (s.lanes |= n),
                Ar(h, n, e),
                h = null
            } else
                h = i.child;
            if (h !== null)
                h.return = i;
            else
                for (h = i; h !== null; ) {
                    if (h === e) {
                        h = null;
                        break
                    }
                    if (i = h.sibling,
                    i !== null) {
                        i.return = h.return,
                        h = i;
                        break
                    }
                    h = h.return
                }
            i = h
        }
    }
    function bl(e, t, n, l) {
        e = null;
        for (var i = t, s = !1; i !== null; ) {
            if (!s) {
                if ((i.flags & 524288) !== 0)
                    s = !0;
                else if ((i.flags & 262144) !== 0)
                    break
            }
            if (i.tag === 10) {
                var h = i.alternate;
                if (h === null)
                    throw Error(o(387));
                if (h = h.memoizedProps,
                h !== null) {
                    var y = i.type;
                    mt(i.pendingProps.value, h.value) || (e !== null ? e.push(y) : e = [y])
                }
            } else if (i === _e.current) {
                if (h = i.alternate,
                h === null)
                    throw Error(o(387));
                h.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(Da) : e = [Da])
            }
            i = i.return
        }
        e !== null && Or(t, e, n, l),
        t.flags |= 262144
    }
    function wi(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!mt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function kn(e) {
        Kn = e,
        Jt = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function We(e) {
        return Fc(Kn, e)
    }
    function _i(e, t) {
        return Kn === null && kn(e),
        Fc(e, t)
    }
    function Fc(e, t) {
        var n = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: n,
            next: null
        },
        Jt === null) {
            if (e === null)
                throw Error(o(308));
            Jt = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Jt = Jt.next = t;
        return n
    }
    var Pp = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(n, l) {
                e.push(l)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(n) {
                return n()
            })
        }
    }
      , e0 = u.unstable_scheduleCallback
      , t0 = u.unstable_NormalPriority
      , Ge = {
        $$typeof: V,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Tr() {
        return {
            controller: new Pp,
            data: new Map,
            refCount: 0
        }
    }
    function sa(e) {
        e.refCount--,
        e.refCount === 0 && e0(t0, function() {
            e.controller.abort()
        })
    }
    var oa = null
      , Rr = 0
      , xl = 0
      , Sl = null;
    function n0(e, t) {
        if (oa === null) {
            var n = oa = [];
            Rr = 0,
            xl = zs(),
            Sl = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    n.push(l)
                }
            }
        }
        return Rr++,
        t.then(Wc, Wc),
        t
    }
    function Wc() {
        if (--Rr === 0 && oa !== null) {
            Sl !== null && (Sl.status = "fulfilled");
            var e = oa;
            oa = null,
            xl = 0,
            Sl = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function l0(e, t) {
        var n = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(i) {
                n.push(i)
            }
        };
        return e.then(function() {
            l.status = "fulfilled",
            l.value = t;
            for (var i = 0; i < n.length; i++)
                (0,
                n[i])(t)
        }, function(i) {
            for (l.status = "rejected",
            l.reason = i,
            i = 0; i < n.length; i++)
                (0,
                n[i])(void 0)
        }),
        l
    }
    var Ic = j.S;
    j.S = function(e, t) {
        Ud = ft(),
        typeof t == "object" && t !== null && typeof t.then == "function" && n0(e, t),
        Ic !== null && Ic(e, t)
    }
    ;
    var Jn = C(null);
    function Nr() {
        var e = Jn.current;
        return e !== null ? e : Me.pooledCache
    }
    function Ci(e, t) {
        t === null ? K(Jn, Jn.current) : K(Jn, t.pool)
    }
    function Pc() {
        var e = Nr();
        return e === null ? null : {
            parent: Ge._currentValue,
            pool: e
        }
    }
    var El = Error(o(460))
      , Mr = Error(o(474))
      , Ai = Error(o(542))
      , Oi = {
        then: function() {}
    };
    function ef(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function tf(e, t, n) {
        switch (n = e[n],
        n === void 0 ? e.push(t) : n !== t && (t.then(Xt, Xt),
        t = n),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            lf(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(Xt, Xt);
            else {
                if (e = Me,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(o(482));
                e = t,
                e.status = "pending",
                e.then(function(l) {
                    if (t.status === "pending") {
                        var i = t;
                        i.status = "fulfilled",
                        i.value = l
                    }
                }, function(l) {
                    if (t.status === "pending") {
                        var i = t;
                        i.status = "rejected",
                        i.reason = l
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                lf(e),
                e
            }
            throw Fn = t,
            El
        }
    }
    function $n(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Fn = n,
            El) : n
        }
    }
    var Fn = null;
    function nf() {
        if (Fn === null)
            throw Error(o(459));
        var e = Fn;
        return Fn = null,
        e
    }
    function lf(e) {
        if (e === El || e === Ai)
            throw Error(o(483))
    }
    var wl = null
      , ca = 0;
    function Ti(e) {
        var t = ca;
        return ca += 1,
        wl === null && (wl = []),
        tf(wl, e, t)
    }
    function fa(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function Ri(e, t) {
        throw t.$$typeof === S ? Error(o(525)) : (e = Object.prototype.toString.call(t),
        Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function af(e) {
        function t(T, A) {
            if (e) {
                var N = T.deletions;
                N === null ? (T.deletions = [A],
                T.flags |= 16) : N.push(A)
            }
        }
        function n(T, A) {
            if (!e)
                return null;
            for (; A !== null; )
                t(T, A),
                A = A.sibling;
            return null
        }
        function l(T) {
            for (var A = new Map; T !== null; )
                T.key !== null ? A.set(T.key, T) : A.set(T.index, T),
                T = T.sibling;
            return A
        }
        function i(T, A) {
            return T = Kt(T, A),
            T.index = 0,
            T.sibling = null,
            T
        }
        function s(T, A, N) {
            return T.index = N,
            e ? (N = T.alternate,
            N !== null ? (N = N.index,
            N < A ? (T.flags |= 67108866,
            A) : N) : (T.flags |= 67108866,
            A)) : (T.flags |= 1048576,
            A)
        }
        function h(T) {
            return e && T.alternate === null && (T.flags |= 67108866),
            T
        }
        function y(T, A, N, G) {
            return A === null || A.tag !== 6 ? (A = br(N, T.mode, G),
            A.return = T,
            A) : (A = i(A, N),
            A.return = T,
            A)
        }
        function w(T, A, N, G) {
            var ee = N.type;
            return ee === O ? H(T, A, N.props.children, G, N.key) : A !== null && (A.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === pe && $n(ee) === A.type) ? (A = i(A, N.props),
            fa(A, N),
            A.return = T,
            A) : (A = Si(N.type, N.key, N.props, null, T.mode, G),
            fa(A, N),
            A.return = T,
            A)
        }
        function M(T, A, N, G) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== N.containerInfo || A.stateNode.implementation !== N.implementation ? (A = xr(N, T.mode, G),
            A.return = T,
            A) : (A = i(A, N.children || []),
            A.return = T,
            A)
        }
        function H(T, A, N, G, ee) {
            return A === null || A.tag !== 7 ? (A = Xn(N, T.mode, G, ee),
            A.return = T,
            A) : (A = i(A, N),
            A.return = T,
            A)
        }
        function Y(T, A, N) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
                return A = br("" + A, T.mode, N),
                A.return = T,
                A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case x:
                    return N = Si(A.type, A.key, A.props, null, T.mode, N),
                    fa(N, A),
                    N.return = T,
                    N;
                case E:
                    return A = xr(A, T.mode, N),
                    A.return = T,
                    A;
                case pe:
                    return A = $n(A),
                    Y(T, A, N)
                }
                if (Ce(A) || k(A))
                    return A = Xn(A, T.mode, N, null),
                    A.return = T,
                    A;
                if (typeof A.then == "function")
                    return Y(T, Ti(A), N);
                if (A.$$typeof === V)
                    return Y(T, _i(T, A), N);
                Ri(T, A)
            }
            return null
        }
        function z(T, A, N, G) {
            var ee = A !== null ? A.key : null;
            if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
                return ee !== null ? null : y(T, A, "" + N, G);
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case x:
                    return N.key === ee ? w(T, A, N, G) : null;
                case E:
                    return N.key === ee ? M(T, A, N, G) : null;
                case pe:
                    return N = $n(N),
                    z(T, A, N, G)
                }
                if (Ce(N) || k(N))
                    return ee !== null ? null : H(T, A, N, G, null);
                if (typeof N.then == "function")
                    return z(T, A, Ti(N), G);
                if (N.$$typeof === V)
                    return z(T, A, _i(T, N), G);
                Ri(T, N)
            }
            return null
        }
        function D(T, A, N, G, ee) {
            if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
                return T = T.get(N) || null,
                y(A, T, "" + G, ee);
            if (typeof G == "object" && G !== null) {
                switch (G.$$typeof) {
                case x:
                    return T = T.get(G.key === null ? N : G.key) || null,
                    w(A, T, G, ee);
                case E:
                    return T = T.get(G.key === null ? N : G.key) || null,
                    M(A, T, G, ee);
                case pe:
                    return G = $n(G),
                    D(T, A, N, G, ee)
                }
                if (Ce(G) || k(G))
                    return T = T.get(N) || null,
                    H(A, T, G, ee, null);
                if (typeof G.then == "function")
                    return D(T, A, N, Ti(G), ee);
                if (G.$$typeof === V)
                    return D(T, A, N, _i(A, G), ee);
                Ri(A, G)
            }
            return null
        }
        function F(T, A, N, G) {
            for (var ee = null, be = null, P = A, se = A = 0, ge = null; P !== null && se < N.length; se++) {
                P.index > se ? (ge = P,
                P = null) : ge = P.sibling;
                var xe = z(T, P, N[se], G);
                if (xe === null) {
                    P === null && (P = ge);
                    break
                }
                e && P && xe.alternate === null && t(T, P),
                A = s(xe, A, se),
                be === null ? ee = xe : be.sibling = xe,
                be = xe,
                P = ge
            }
            if (se === N.length)
                return n(T, P),
                ye && kt(T, se),
                ee;
            if (P === null) {
                for (; se < N.length; se++)
                    P = Y(T, N[se], G),
                    P !== null && (A = s(P, A, se),
                    be === null ? ee = P : be.sibling = P,
                    be = P);
                return ye && kt(T, se),
                ee
            }
            for (P = l(P); se < N.length; se++)
                ge = D(P, T, se, N[se], G),
                ge !== null && (e && ge.alternate !== null && P.delete(ge.key === null ? se : ge.key),
                A = s(ge, A, se),
                be === null ? ee = ge : be.sibling = ge,
                be = ge);
            return e && P.forEach(function(jn) {
                return t(T, jn)
            }),
            ye && kt(T, se),
            ee
        }
        function ne(T, A, N, G) {
            if (N == null)
                throw Error(o(151));
            for (var ee = null, be = null, P = A, se = A = 0, ge = null, xe = N.next(); P !== null && !xe.done; se++,
            xe = N.next()) {
                P.index > se ? (ge = P,
                P = null) : ge = P.sibling;
                var jn = z(T, P, xe.value, G);
                if (jn === null) {
                    P === null && (P = ge);
                    break
                }
                e && P && jn.alternate === null && t(T, P),
                A = s(jn, A, se),
                be === null ? ee = jn : be.sibling = jn,
                be = jn,
                P = ge
            }
            if (xe.done)
                return n(T, P),
                ye && kt(T, se),
                ee;
            if (P === null) {
                for (; !xe.done; se++,
                xe = N.next())
                    xe = Y(T, xe.value, G),
                    xe !== null && (A = s(xe, A, se),
                    be === null ? ee = xe : be.sibling = xe,
                    be = xe);
                return ye && kt(T, se),
                ee
            }
            for (P = l(P); !xe.done; se++,
            xe = N.next())
                xe = D(P, T, se, xe.value, G),
                xe !== null && (e && xe.alternate !== null && P.delete(xe.key === null ? se : xe.key),
                A = s(xe, A, se),
                be === null ? ee = xe : be.sibling = xe,
                be = xe);
            return e && P.forEach(function(my) {
                return t(T, my)
            }),
            ye && kt(T, se),
            ee
        }
        function Ne(T, A, N, G) {
            if (typeof N == "object" && N !== null && N.type === O && N.key === null && (N = N.props.children),
            typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case x:
                    e: {
                        for (var ee = N.key; A !== null; ) {
                            if (A.key === ee) {
                                if (ee = N.type,
                                ee === O) {
                                    if (A.tag === 7) {
                                        n(T, A.sibling),
                                        G = i(A, N.props.children),
                                        G.return = T,
                                        T = G;
                                        break e
                                    }
                                } else if (A.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === pe && $n(ee) === A.type) {
                                    n(T, A.sibling),
                                    G = i(A, N.props),
                                    fa(G, N),
                                    G.return = T,
                                    T = G;
                                    break e
                                }
                                n(T, A);
                                break
                            } else
                                t(T, A);
                            A = A.sibling
                        }
                        N.type === O ? (G = Xn(N.props.children, T.mode, G, N.key),
                        G.return = T,
                        T = G) : (G = Si(N.type, N.key, N.props, null, T.mode, G),
                        fa(G, N),
                        G.return = T,
                        T = G)
                    }
                    return h(T);
                case E:
                    e: {
                        for (ee = N.key; A !== null; ) {
                            if (A.key === ee)
                                if (A.tag === 4 && A.stateNode.containerInfo === N.containerInfo && A.stateNode.implementation === N.implementation) {
                                    n(T, A.sibling),
                                    G = i(A, N.children || []),
                                    G.return = T,
                                    T = G;
                                    break e
                                } else {
                                    n(T, A);
                                    break
                                }
                            else
                                t(T, A);
                            A = A.sibling
                        }
                        G = xr(N, T.mode, G),
                        G.return = T,
                        T = G
                    }
                    return h(T);
                case pe:
                    return N = $n(N),
                    Ne(T, A, N, G)
                }
                if (Ce(N))
                    return F(T, A, N, G);
                if (k(N)) {
                    if (ee = k(N),
                    typeof ee != "function")
                        throw Error(o(150));
                    return N = ee.call(N),
                    ne(T, A, N, G)
                }
                if (typeof N.then == "function")
                    return Ne(T, A, Ti(N), G);
                if (N.$$typeof === V)
                    return Ne(T, A, _i(T, N), G);
                Ri(T, N)
            }
            return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N,
            A !== null && A.tag === 6 ? (n(T, A.sibling),
            G = i(A, N),
            G.return = T,
            T = G) : (n(T, A),
            G = br(N, T.mode, G),
            G.return = T,
            T = G),
            h(T)) : n(T, A)
        }
        return function(T, A, N, G) {
            try {
                ca = 0;
                var ee = Ne(T, A, N, G);
                return wl = null,
                ee
            } catch (P) {
                if (P === El || P === Ai)
                    throw P;
                var be = gt(29, P, null, T.mode);
                return be.lanes = G,
                be.return = T,
                be
            }
        }
    }
    var Wn = af(!0)
      , uf = af(!1)
      , vn = !1;
    function zr(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Lr(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function bn(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function xn(e, t, n) {
        var l = e.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Se & 2) !== 0) {
            var i = l.pending;
            return i === null ? t.next = t : (t.next = i.next,
            i.next = t),
            l.pending = t,
            t = xi(e),
            Vc(e, null, n),
            t
        }
        return bi(e, l, t, n),
        xi(e)
    }
    function da(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (n & 4194048) !== 0)) {
            var l = t.lanes;
            l &= e.pendingLanes,
            n |= l,
            t.lanes = n,
            Fo(e, n)
        }
    }
    function Dr(e, t) {
        var n = e.updateQueue
          , l = e.alternate;
        if (l !== null && (l = l.updateQueue,
        n === l)) {
            var i = null
              , s = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var h = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    s === null ? i = s = h : s = s.next = h,
                    n = n.next
                } while (n !== null);
                s === null ? i = s = t : s = s.next = t
            } else
                i = s = t;
            n = {
                baseState: l.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: s,
                shared: l.shared,
                callbacks: l.callbacks
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    var jr = !1;
    function ha() {
        if (jr) {
            var e = Sl;
            if (e !== null)
                throw e
        }
    }
    function ma(e, t, n, l) {
        jr = !1;
        var i = e.updateQueue;
        vn = !1;
        var s = i.firstBaseUpdate
          , h = i.lastBaseUpdate
          , y = i.shared.pending;
        if (y !== null) {
            i.shared.pending = null;
            var w = y
              , M = w.next;
            w.next = null,
            h === null ? s = M : h.next = M,
            h = w;
            var H = e.alternate;
            H !== null && (H = H.updateQueue,
            y = H.lastBaseUpdate,
            y !== h && (y === null ? H.firstBaseUpdate = M : y.next = M,
            H.lastBaseUpdate = w))
        }
        if (s !== null) {
            var Y = i.baseState;
            h = 0,
            H = M = w = null,
            y = s;
            do {
                var z = y.lane & -536870913
                  , D = z !== y.lane;
                if (D ? (me & z) === z : (l & z) === z) {
                    z !== 0 && z === xl && (jr = !0),
                    H !== null && (H = H.next = {
                        lane: 0,
                        tag: y.tag,
                        payload: y.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var F = e
                          , ne = y;
                        z = t;
                        var Ne = n;
                        switch (ne.tag) {
                        case 1:
                            if (F = ne.payload,
                            typeof F == "function") {
                                Y = F.call(Ne, Y, z);
                                break e
                            }
                            Y = F;
                            break e;
                        case 3:
                            F.flags = F.flags & -65537 | 128;
                        case 0:
                            if (F = ne.payload,
                            z = typeof F == "function" ? F.call(Ne, Y, z) : F,
                            z == null)
                                break e;
                            Y = v({}, Y, z);
                            break e;
                        case 2:
                            vn = !0
                        }
                    }
                    z = y.callback,
                    z !== null && (e.flags |= 64,
                    D && (e.flags |= 8192),
                    D = i.callbacks,
                    D === null ? i.callbacks = [z] : D.push(z))
                } else
                    D = {
                        lane: z,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null
                    },
                    H === null ? (M = H = D,
                    w = Y) : H = H.next = D,
                    h |= z;
                if (y = y.next,
                y === null) {
                    if (y = i.shared.pending,
                    y === null)
                        break;
                    D = y,
                    y = D.next,
                    D.next = null,
                    i.lastBaseUpdate = D,
                    i.shared.pending = null
                }
            } while (!0);
            H === null && (w = Y),
            i.baseState = w,
            i.firstBaseUpdate = M,
            i.lastBaseUpdate = H,
            s === null && (i.shared.lanes = 0),
            Cn |= h,
            e.lanes = h,
            e.memoizedState = Y
        }
    }
    function rf(e, t) {
        if (typeof e != "function")
            throw Error(o(191, e));
        e.call(t)
    }
    function sf(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null,
            e = 0; e < n.length; e++)
                rf(n[e], t)
    }
    var _l = C(null)
      , Ni = C(0);
    function of(e, t) {
        e = an,
        K(Ni, e),
        K(_l, t),
        an = e | t.baseLanes
    }
    function Ur() {
        K(Ni, an),
        K(_l, _l.current)
    }
    function Br() {
        an = Ni.current,
        q(_l),
        q(Ni)
    }
    var pt = C(null)
      , Tt = null;
    function Sn(e) {
        var t = e.alternate;
        K(He, He.current & 1),
        K(pt, e),
        Tt === null && (t === null || _l.current !== null || t.memoizedState !== null) && (Tt = e)
    }
    function Hr(e) {
        K(He, He.current),
        K(pt, e),
        Tt === null && (Tt = e)
    }
    function cf(e) {
        e.tag === 22 ? (K(He, He.current),
        K(pt, e),
        Tt === null && (Tt = e)) : En()
    }
    function En() {
        K(He, He.current),
        K(pt, pt.current)
    }
    function yt(e) {
        q(pt),
        Tt === e && (Tt = null),
        q(He)
    }
    var He = C(0);
    function Mi(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || Xs(n) || Zs(n)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Ft = 0
      , re = null
      , Te = null
      , Ye = null
      , zi = !1
      , Cl = !1
      , In = !1
      , Li = 0
      , ga = 0
      , Al = null
      , a0 = 0;
    function je() {
        throw Error(o(321))
    }
    function qr(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!mt(e[n], t[n]))
                return !1;
        return !0
    }
    function Gr(e, t, n, l, i, s) {
        return Ft = s,
        re = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        j.H = e === null || e.memoizedState === null ? kf : ts,
        In = !1,
        s = n(l, i),
        In = !1,
        Cl && (s = df(t, n, l, i)),
        ff(e),
        s
    }
    function ff(e) {
        j.H = va;
        var t = Te !== null && Te.next !== null;
        if (Ft = 0,
        Ye = Te = re = null,
        zi = !1,
        ga = 0,
        Al = null,
        t)
            throw Error(o(300));
        e === null || Ve || (e = e.dependencies,
        e !== null && wi(e) && (Ve = !0))
    }
    function df(e, t, n, l) {
        re = e;
        var i = 0;
        do {
            if (Cl && (Al = null),
            ga = 0,
            Cl = !1,
            25 <= i)
                throw Error(o(301));
            if (i += 1,
            Ye = Te = null,
            e.updateQueue != null) {
                var s = e.updateQueue;
                s.lastEffect = null,
                s.events = null,
                s.stores = null,
                s.memoCache != null && (s.memoCache.index = 0)
            }
            j.H = Jf,
            s = t(n, l)
        } while (Cl);
        return s
    }
    function i0() {
        var e = j.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? pa(t) : t,
        e = e.useState()[0],
        (Te !== null ? Te.memoizedState : null) !== e && (re.flags |= 1024),
        t
    }
    function Yr() {
        var e = Li !== 0;
        return Li = 0,
        e
    }
    function Vr(e, t, n) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~n
    }
    function Qr(e) {
        if (zi) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            zi = !1
        }
        Ft = 0,
        Ye = Te = re = null,
        Cl = !1,
        ga = Li = 0,
        Al = null
    }
    function lt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ye === null ? re.memoizedState = Ye = e : Ye = Ye.next = e,
        Ye
    }
    function qe() {
        if (Te === null) {
            var e = re.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Te.next;
        var t = Ye === null ? re.memoizedState : Ye.next;
        if (t !== null)
            Ye = t,
            Te = e;
        else {
            if (e === null)
                throw re.alternate === null ? Error(o(467)) : Error(o(310));
            Te = e,
            e = {
                memoizedState: Te.memoizedState,
                baseState: Te.baseState,
                baseQueue: Te.baseQueue,
                queue: Te.queue,
                next: null
            },
            Ye === null ? re.memoizedState = Ye = e : Ye = Ye.next = e
        }
        return Ye
    }
    function Di() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function pa(e) {
        var t = ga;
        return ga += 1,
        Al === null && (Al = []),
        e = tf(Al, e, t),
        t = re,
        (Ye === null ? t.memoizedState : Ye.next) === null && (t = t.alternate,
        j.H = t === null || t.memoizedState === null ? kf : ts),
        e
    }
    function ji(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return pa(e);
            if (e.$$typeof === V)
                return We(e)
        }
        throw Error(o(438, String(e)))
    }
    function Xr(e) {
        var t = null
          , n = re.updateQueue;
        if (n !== null && (t = n.memoCache),
        t == null) {
            var l = re.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (t = {
                data: l.data.map(function(i) {
                    return i.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        n === null && (n = Di(),
        re.updateQueue = n),
        n.memoCache = t,
        n = t.data[t.index],
        n === void 0)
            for (n = t.data[t.index] = Array(e),
            l = 0; l < e; l++)
                n[l] = Q;
        return t.index++,
        n
    }
    function Wt(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Ui(e) {
        var t = qe();
        return Zr(t, Te, e)
    }
    function Zr(e, t, n) {
        var l = e.queue;
        if (l === null)
            throw Error(o(311));
        l.lastRenderedReducer = n;
        var i = e.baseQueue
          , s = l.pending;
        if (s !== null) {
            if (i !== null) {
                var h = i.next;
                i.next = s.next,
                s.next = h
            }
            t.baseQueue = i = s,
            l.pending = null
        }
        if (s = e.baseState,
        i === null)
            e.memoizedState = s;
        else {
            t = i.next;
            var y = h = null
              , w = null
              , M = t
              , H = !1;
            do {
                var Y = M.lane & -536870913;
                if (Y !== M.lane ? (me & Y) === Y : (Ft & Y) === Y) {
                    var z = M.revertLane;
                    if (z === 0)
                        w !== null && (w = w.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: M.action,
                            hasEagerState: M.hasEagerState,
                            eagerState: M.eagerState,
                            next: null
                        }),
                        Y === xl && (H = !0);
                    else if ((Ft & z) === z) {
                        M = M.next,
                        z === xl && (H = !0);
                        continue
                    } else
                        Y = {
                            lane: 0,
                            revertLane: M.revertLane,
                            gesture: null,
                            action: M.action,
                            hasEagerState: M.hasEagerState,
                            eagerState: M.eagerState,
                            next: null
                        },
                        w === null ? (y = w = Y,
                        h = s) : w = w.next = Y,
                        re.lanes |= z,
                        Cn |= z;
                    Y = M.action,
                    In && n(s, Y),
                    s = M.hasEagerState ? M.eagerState : n(s, Y)
                } else
                    z = {
                        lane: Y,
                        revertLane: M.revertLane,
                        gesture: M.gesture,
                        action: M.action,
                        hasEagerState: M.hasEagerState,
                        eagerState: M.eagerState,
                        next: null
                    },
                    w === null ? (y = w = z,
                    h = s) : w = w.next = z,
                    re.lanes |= Y,
                    Cn |= Y;
                M = M.next
            } while (M !== null && M !== t);
            if (w === null ? h = s : w.next = y,
            !mt(s, e.memoizedState) && (Ve = !0,
            H && (n = Sl,
            n !== null)))
                throw n;
            e.memoizedState = s,
            e.baseState = h,
            e.baseQueue = w,
            l.lastRenderedState = s
        }
        return i === null && (l.lanes = 0),
        [e.memoizedState, l.dispatch]
    }
    function Kr(e) {
        var t = qe()
          , n = t.queue;
        if (n === null)
            throw Error(o(311));
        n.lastRenderedReducer = e;
        var l = n.dispatch
          , i = n.pending
          , s = t.memoizedState;
        if (i !== null) {
            n.pending = null;
            var h = i = i.next;
            do
                s = e(s, h.action),
                h = h.next;
            while (h !== i);
            mt(s, t.memoizedState) || (Ve = !0),
            t.memoizedState = s,
            t.baseQueue === null && (t.baseState = s),
            n.lastRenderedState = s
        }
        return [s, l]
    }
    function hf(e, t, n) {
        var l = re
          , i = qe()
          , s = ye;
        if (s) {
            if (n === void 0)
                throw Error(o(407));
            n = n()
        } else
            n = t();
        var h = !mt((Te || i).memoizedState, n);
        if (h && (i.memoizedState = n,
        Ve = !0),
        i = i.queue,
        $r(pf.bind(null, l, i, e), [e]),
        i.getSnapshot !== t || h || Ye !== null && Ye.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            Ol(9, {
                destroy: void 0
            }, gf.bind(null, l, i, n, t), null),
            Me === null)
                throw Error(o(349));
            s || (Ft & 127) !== 0 || mf(l, t, n)
        }
        return n
    }
    function mf(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = re.updateQueue,
        t === null ? (t = Di(),
        re.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function gf(e, t, n, l) {
        t.value = n,
        t.getSnapshot = l,
        yf(t) && vf(e)
    }
    function pf(e, t, n) {
        return n(function() {
            yf(t) && vf(e)
        })
    }
    function yf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !mt(e, n)
        } catch {
            return !0
        }
    }
    function vf(e) {
        var t = Qn(e, 2);
        t !== null && ct(t, e, 2)
    }
    function kr(e) {
        var t = lt();
        if (typeof e == "function") {
            var n = e;
            if (e = n(),
            In) {
                fn(!0);
                try {
                    n()
                } finally {
                    fn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Wt,
            lastRenderedState: e
        },
        t
    }
    function bf(e, t, n, l) {
        return e.baseState = n,
        Zr(e, Te, typeof l == "function" ? l : Wt)
    }
    function u0(e, t, n, l, i) {
        if (qi(e))
            throw Error(o(485));
        if (e = t.action,
        e !== null) {
            var s = {
                payload: i,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(h) {
                    s.listeners.push(h)
                }
            };
            j.T !== null ? n(!0) : s.isTransition = !1,
            l(s),
            n = t.pending,
            n === null ? (s.next = t.pending = s,
            xf(t, s)) : (s.next = n.next,
            t.pending = n.next = s)
        }
    }
    function xf(e, t) {
        var n = t.action
          , l = t.payload
          , i = e.state;
        if (t.isTransition) {
            var s = j.T
              , h = {};
            j.T = h;
            try {
                var y = n(i, l)
                  , w = j.S;
                w !== null && w(h, y),
                Sf(e, t, y)
            } catch (M) {
                Jr(e, t, M)
            } finally {
                s !== null && h.types !== null && (s.types = h.types),
                j.T = s
            }
        } else
            try {
                s = n(i, l),
                Sf(e, t, s)
            } catch (M) {
                Jr(e, t, M)
            }
    }
    function Sf(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
            Ef(e, t, l)
        }, function(l) {
            return Jr(e, t, l)
        }) : Ef(e, t, n)
    }
    function Ef(e, t, n) {
        t.status = "fulfilled",
        t.value = n,
        wf(t),
        e.state = n,
        t = e.pending,
        t !== null && (n = t.next,
        n === t ? e.pending = null : (n = n.next,
        t.next = n,
        xf(e, n)))
    }
    function Jr(e, t, n) {
        var l = e.pending;
        if (e.pending = null,
        l !== null) {
            l = l.next;
            do
                t.status = "rejected",
                t.reason = n,
                wf(t),
                t = t.next;
            while (t !== l)
        }
        e.action = null
    }
    function wf(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function _f(e, t) {
        return t
    }
    function Cf(e, t) {
        if (ye) {
            var n = Me.formState;
            if (n !== null) {
                e: {
                    var l = re;
                    if (ye) {
                        if (ze) {
                            t: {
                                for (var i = ze, s = Ot; i.nodeType !== 8; ) {
                                    if (!s) {
                                        i = null;
                                        break t
                                    }
                                    if (i = Rt(i.nextSibling),
                                    i === null) {
                                        i = null;
                                        break t
                                    }
                                }
                                s = i.data,
                                i = s === "F!" || s === "F" ? i : null
                            }
                            if (i) {
                                ze = Rt(i.nextSibling),
                                l = i.data === "F!";
                                break e
                            }
                        }
                        pn(l)
                    }
                    l = !1
                }
                l && (t = n[0])
            }
        }
        return n = lt(),
        n.memoizedState = n.baseState = t,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: _f,
            lastRenderedState: t
        },
        n.queue = l,
        n = Xf.bind(null, re, l),
        l.dispatch = n,
        l = kr(!1),
        s = es.bind(null, re, !1, l.queue),
        l = lt(),
        i = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        l.queue = i,
        n = u0.bind(null, re, i, s, n),
        i.dispatch = n,
        l.memoizedState = e,
        [t, n, !1]
    }
    function Af(e) {
        var t = qe();
        return Of(t, Te, e)
    }
    function Of(e, t, n) {
        if (t = Zr(e, t, _f)[0],
        e = Ui(Wt)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var l = pa(t)
            } catch (h) {
                throw h === El ? Ai : h
            }
        else
            l = t;
        t = qe();
        var i = t.queue
          , s = i.dispatch;
        return n !== t.memoizedState && (re.flags |= 2048,
        Ol(9, {
            destroy: void 0
        }, r0.bind(null, i, n), null)),
        [l, s, e]
    }
    function r0(e, t) {
        e.action = t
    }
    function Tf(e) {
        var t = qe()
          , n = Te;
        if (n !== null)
            return Of(t, n, e);
        qe(),
        t = t.memoizedState,
        n = qe();
        var l = n.queue.dispatch;
        return n.memoizedState = e,
        [t, l, !1]
    }
    function Ol(e, t, n, l) {
        return e = {
            tag: e,
            create: n,
            deps: l,
            inst: t,
            next: null
        },
        t = re.updateQueue,
        t === null && (t = Di(),
        re.updateQueue = t),
        n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (l = n.next,
        n.next = e,
        e.next = l,
        t.lastEffect = e),
        e
    }
    function Rf() {
        return qe().memoizedState
    }
    function Bi(e, t, n, l) {
        var i = lt();
        re.flags |= e,
        i.memoizedState = Ol(1 | t, {
            destroy: void 0
        }, n, l === void 0 ? null : l)
    }
    function Hi(e, t, n, l) {
        var i = qe();
        l = l === void 0 ? null : l;
        var s = i.memoizedState.inst;
        Te !== null && l !== null && qr(l, Te.memoizedState.deps) ? i.memoizedState = Ol(t, s, n, l) : (re.flags |= e,
        i.memoizedState = Ol(1 | t, s, n, l))
    }
    function Nf(e, t) {
        Bi(8390656, 8, e, t)
    }
    function $r(e, t) {
        Hi(2048, 8, e, t)
    }
    function s0(e) {
        re.flags |= 4;
        var t = re.updateQueue;
        if (t === null)
            t = Di(),
            re.updateQueue = t,
            t.events = [e];
        else {
            var n = t.events;
            n === null ? t.events = [e] : n.push(e)
        }
    }
    function Mf(e) {
        var t = qe().memoizedState;
        return s0({
            ref: t,
            nextImpl: e
        }),
        function() {
            if ((Se & 2) !== 0)
                throw Error(o(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function zf(e, t) {
        return Hi(4, 2, e, t)
    }
    function Lf(e, t) {
        return Hi(4, 4, e, t)
    }
    function Df(e, t) {
        if (typeof t == "function") {
            e = e();
            var n = t(e);
            return function() {
                typeof n == "function" ? n() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function jf(e, t, n) {
        n = n != null ? n.concat([e]) : null,
        Hi(4, 4, Df.bind(null, t, e), n)
    }
    function Fr() {}
    function Uf(e, t) {
        var n = qe();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        return t !== null && qr(t, l[1]) ? l[0] : (n.memoizedState = [e, t],
        e)
    }
    function Bf(e, t) {
        var n = qe();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        if (t !== null && qr(t, l[1]))
            return l[0];
        if (l = e(),
        In) {
            fn(!0);
            try {
                e()
            } finally {
                fn(!1)
            }
        }
        return n.memoizedState = [l, t],
        l
    }
    function Wr(e, t, n) {
        return n === void 0 || (Ft & 1073741824) !== 0 && (me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n,
        e = Hd(),
        re.lanes |= e,
        Cn |= e,
        n)
    }
    function Hf(e, t, n, l) {
        return mt(n, t) ? n : _l.current !== null ? (e = Wr(e, n, l),
        mt(e, t) || (Ve = !0),
        e) : (Ft & 42) === 0 || (Ft & 1073741824) !== 0 && (me & 261930) === 0 ? (Ve = !0,
        e.memoizedState = n) : (e = Hd(),
        re.lanes |= e,
        Cn |= e,
        t)
    }
    function qf(e, t, n, l, i) {
        var s = X.p;
        X.p = s !== 0 && 8 > s ? s : 8;
        var h = j.T
          , y = {};
        j.T = y,
        es(e, !1, t, n);
        try {
            var w = i()
              , M = j.S;
            if (M !== null && M(y, w),
            w !== null && typeof w == "object" && typeof w.then == "function") {
                var H = l0(w, l);
                ya(e, t, H, xt(e))
            } else
                ya(e, t, l, xt(e))
        } catch (Y) {
            ya(e, t, {
                then: function() {},
                status: "rejected",
                reason: Y
            }, xt())
        } finally {
            X.p = s,
            h !== null && y.types !== null && (h.types = y.types),
            j.T = h
        }
    }
    function o0() {}
    function Ir(e, t, n, l) {
        if (e.tag !== 5)
            throw Error(o(476));
        var i = Gf(e).queue;
        qf(e, i, t, te, n === null ? o0 : function() {
            return Yf(e),
            n(l)
        }
        )
    }
    function Gf(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: te,
            baseState: te,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Wt,
                lastRenderedState: te
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Wt,
                lastRenderedState: n
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Yf(e) {
        var t = Gf(e);
        t.next === null && (t = e.alternate.memoizedState),
        ya(e, t.next.queue, {}, xt())
    }
    function Pr() {
        return We(Da)
    }
    function Vf() {
        return qe().memoizedState
    }
    function Qf() {
        return qe().memoizedState
    }
    function c0(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var n = xt();
                e = bn(n);
                var l = xn(t, e, n);
                l !== null && (ct(l, t, n),
                da(l, t, n)),
                t = {
                    cache: Tr()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function f0(e, t, n) {
        var l = xt();
        n = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        qi(e) ? Zf(t, n) : (n = yr(e, t, n, l),
        n !== null && (ct(n, e, l),
        Kf(n, t, l)))
    }
    function Xf(e, t, n) {
        var l = xt();
        ya(e, t, n, l)
    }
    function ya(e, t, n, l) {
        var i = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (qi(e))
            Zf(t, i);
        else {
            var s = e.alternate;
            if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
            s !== null))
                try {
                    var h = t.lastRenderedState
                      , y = s(h, n);
                    if (i.hasEagerState = !0,
                    i.eagerState = y,
                    mt(y, h))
                        return bi(e, t, i, 0),
                        Me === null && vi(),
                        !1
                } catch {}
            if (n = yr(e, t, i, l),
            n !== null)
                return ct(n, e, l),
                Kf(n, t, l),
                !0
        }
        return !1
    }
    function es(e, t, n, l) {
        if (l = {
            lane: 2,
            revertLane: zs(),
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        qi(e)) {
            if (t)
                throw Error(o(479))
        } else
            t = yr(e, n, l, 2),
            t !== null && ct(t, e, 2)
    }
    function qi(e) {
        var t = e.alternate;
        return e === re || t !== null && t === re
    }
    function Zf(e, t) {
        Cl = zi = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function Kf(e, t, n) {
        if ((n & 4194048) !== 0) {
            var l = t.lanes;
            l &= e.pendingLanes,
            n |= l,
            t.lanes = n,
            Fo(e, n)
        }
    }
    var va = {
        readContext: We,
        use: ji,
        useCallback: je,
        useContext: je,
        useEffect: je,
        useImperativeHandle: je,
        useLayoutEffect: je,
        useInsertionEffect: je,
        useMemo: je,
        useReducer: je,
        useRef: je,
        useState: je,
        useDebugValue: je,
        useDeferredValue: je,
        useTransition: je,
        useSyncExternalStore: je,
        useId: je,
        useHostTransitionStatus: je,
        useFormState: je,
        useActionState: je,
        useOptimistic: je,
        useMemoCache: je,
        useCacheRefresh: je
    };
    va.useEffectEvent = je;
    var kf = {
        readContext: We,
        use: ji,
        useCallback: function(e, t) {
            return lt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: We,
        useEffect: Nf,
        useImperativeHandle: function(e, t, n) {
            n = n != null ? n.concat([e]) : null,
            Bi(4194308, 4, Df.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Bi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            Bi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = lt();
            t = t === void 0 ? null : t;
            var l = e();
            if (In) {
                fn(!0);
                try {
                    e()
                } finally {
                    fn(!1)
                }
            }
            return n.memoizedState = [l, t],
            l
        },
        useReducer: function(e, t, n) {
            var l = lt();
            if (n !== void 0) {
                var i = n(t);
                if (In) {
                    fn(!0);
                    try {
                        n(t)
                    } finally {
                        fn(!1)
                    }
                }
            } else
                i = t;
            return l.memoizedState = l.baseState = i,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: i
            },
            l.queue = e,
            e = e.dispatch = f0.bind(null, re, e),
            [l.memoizedState, e]
        },
        useRef: function(e) {
            var t = lt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = kr(e);
            var t = e.queue
              , n = Xf.bind(null, re, t);
            return t.dispatch = n,
            [e.memoizedState, n]
        },
        useDebugValue: Fr,
        useDeferredValue: function(e, t) {
            var n = lt();
            return Wr(n, e, t)
        },
        useTransition: function() {
            var e = kr(!1);
            return e = qf.bind(null, re, e.queue, !0, !1),
            lt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, n) {
            var l = re
              , i = lt();
            if (ye) {
                if (n === void 0)
                    throw Error(o(407));
                n = n()
            } else {
                if (n = t(),
                Me === null)
                    throw Error(o(349));
                (me & 127) !== 0 || mf(l, t, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return i.queue = s,
            Nf(pf.bind(null, l, s, e), [e]),
            l.flags |= 2048,
            Ol(9, {
                destroy: void 0
            }, gf.bind(null, l, s, n, t), null),
            n
        },
        useId: function() {
            var e = lt()
              , t = Me.identifierPrefix;
            if (ye) {
                var n = Bt
                  , l = Ut;
                n = (l & ~(1 << 32 - ht(l) - 1)).toString(32) + n,
                t = "_" + t + "R_" + n,
                n = Li++,
                0 < n && (t += "H" + n.toString(32)),
                t += "_"
            } else
                n = a0++,
                t = "_" + t + "r_" + n.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: Pr,
        useFormState: Cf,
        useActionState: Cf,
        useOptimistic: function(e) {
            var t = lt();
            t.memoizedState = t.baseState = e;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = n,
            t = es.bind(null, re, !0, n),
            n.dispatch = t,
            [e, t]
        },
        useMemoCache: Xr,
        useCacheRefresh: function() {
            return lt().memoizedState = c0.bind(null, re)
        },
        useEffectEvent: function(e) {
            var t = lt()
              , n = {
                impl: e
            };
            return t.memoizedState = n,
            function() {
                if ((Se & 2) !== 0)
                    throw Error(o(440));
                return n.impl.apply(void 0, arguments)
            }
        }
    }
      , ts = {
        readContext: We,
        use: ji,
        useCallback: Uf,
        useContext: We,
        useEffect: $r,
        useImperativeHandle: jf,
        useInsertionEffect: zf,
        useLayoutEffect: Lf,
        useMemo: Bf,
        useReducer: Ui,
        useRef: Rf,
        useState: function() {
            return Ui(Wt)
        },
        useDebugValue: Fr,
        useDeferredValue: function(e, t) {
            var n = qe();
            return Hf(n, Te.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Ui(Wt)[0]
              , t = qe().memoizedState;
            return [typeof e == "boolean" ? e : pa(e), t]
        },
        useSyncExternalStore: hf,
        useId: Vf,
        useHostTransitionStatus: Pr,
        useFormState: Af,
        useActionState: Af,
        useOptimistic: function(e, t) {
            var n = qe();
            return bf(n, Te, e, t)
        },
        useMemoCache: Xr,
        useCacheRefresh: Qf
    };
    ts.useEffectEvent = Mf;
    var Jf = {
        readContext: We,
        use: ji,
        useCallback: Uf,
        useContext: We,
        useEffect: $r,
        useImperativeHandle: jf,
        useInsertionEffect: zf,
        useLayoutEffect: Lf,
        useMemo: Bf,
        useReducer: Kr,
        useRef: Rf,
        useState: function() {
            return Kr(Wt)
        },
        useDebugValue: Fr,
        useDeferredValue: function(e, t) {
            var n = qe();
            return Te === null ? Wr(n, e, t) : Hf(n, Te.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Kr(Wt)[0]
              , t = qe().memoizedState;
            return [typeof e == "boolean" ? e : pa(e), t]
        },
        useSyncExternalStore: hf,
        useId: Vf,
        useHostTransitionStatus: Pr,
        useFormState: Tf,
        useActionState: Tf,
        useOptimistic: function(e, t) {
            var n = qe();
            return Te !== null ? bf(n, Te, e, t) : (n.baseState = e,
            [e, n.queue.dispatch])
        },
        useMemoCache: Xr,
        useCacheRefresh: Qf
    };
    Jf.useEffectEvent = Mf;
    function ns(e, t, n, l) {
        t = e.memoizedState,
        n = n(l, t),
        n = n == null ? t : v({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var ls = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var l = xt()
              , i = bn(l);
            i.payload = t,
            n != null && (i.callback = n),
            t = xn(e, i, l),
            t !== null && (ct(t, e, l),
            da(t, e, l))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var l = xt()
              , i = bn(l);
            i.tag = 1,
            i.payload = t,
            n != null && (i.callback = n),
            t = xn(e, i, l),
            t !== null && (ct(t, e, l),
            da(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = xt()
              , l = bn(n);
            l.tag = 2,
            t != null && (l.callback = t),
            t = xn(e, l, n),
            t !== null && (ct(t, e, n),
            da(t, e, n))
        }
    };
    function $f(e, t, n, l, i, s, h) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, s, h) : t.prototype && t.prototype.isPureReactComponent ? !aa(n, l) || !aa(i, s) : !0
    }
    function Ff(e, t, n, l) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l),
        t.state !== e && ls.enqueueReplaceState(t, t.state, null)
    }
    function Pn(e, t) {
        var n = t;
        if ("ref"in t) {
            n = {};
            for (var l in t)
                l !== "ref" && (n[l] = t[l])
        }
        if (e = e.defaultProps) {
            n === t && (n = v({}, n));
            for (var i in e)
                n[i] === void 0 && (n[i] = e[i])
        }
        return n
    }
    function Wf(e) {
        yi(e)
    }
    function If(e) {
        console.error(e)
    }
    function Pf(e) {
        yi(e)
    }
    function Gi(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function ed(e, t, n) {
        try {
            var l = e.onCaughtError;
            l(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    function as(e, t, n) {
        return n = bn(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            Gi(e, t)
        }
        ,
        n
    }
    function td(e) {
        return e = bn(e),
        e.tag = 3,
        e
    }
    function nd(e, t, n, l) {
        var i = n.type.getDerivedStateFromError;
        if (typeof i == "function") {
            var s = l.value;
            e.payload = function() {
                return i(s)
            }
            ,
            e.callback = function() {
                ed(t, n, l)
            }
        }
        var h = n.stateNode;
        h !== null && typeof h.componentDidCatch == "function" && (e.callback = function() {
            ed(t, n, l),
            typeof i != "function" && (An === null ? An = new Set([this]) : An.add(this));
            var y = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: y !== null ? y : ""
            })
        }
        )
    }
    function d0(e, t, n, l, i) {
        if (n.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (t = n.alternate,
            t !== null && bl(t, n, i, !0),
            n = pt.current,
            n !== null) {
                switch (n.tag) {
                case 31:
                case 13:
                    return Tt === null ? Ii() : n.alternate === null && Ue === 0 && (Ue = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = i,
                    l === Oi ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? n.updateQueue = new Set([l]) : t.add(l),
                    Rs(e, l, i)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    l === Oi ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    n.updateQueue = t) : (n = t.retryQueue,
                    n === null ? t.retryQueue = new Set([l]) : n.add(l)),
                    Rs(e, l, i)),
                    !1
                }
                throw Error(o(435, n.tag))
            }
            return Rs(e, l, i),
            Ii(),
            !1
        }
        if (ye)
            return t = pt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = i,
            l !== wr && (e = Error(o(422), {
                cause: l
            }),
            ra(_t(e, n)))) : (l !== wr && (t = Error(o(423), {
                cause: l
            }),
            ra(_t(t, n))),
            e = e.current.alternate,
            e.flags |= 65536,
            i &= -i,
            e.lanes |= i,
            l = _t(l, n),
            i = as(e.stateNode, l, i),
            Dr(e, i),
            Ue !== 4 && (Ue = 2)),
            !1;
        var s = Error(o(520), {
            cause: l
        });
        if (s = _t(s, n),
        Aa === null ? Aa = [s] : Aa.push(s),
        Ue !== 4 && (Ue = 2),
        t === null)
            return !0;
        l = _t(l, n),
        n = t;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                e = i & -i,
                n.lanes |= e,
                e = as(n.stateNode, l, e),
                Dr(n, e),
                !1;
            case 1:
                if (t = n.type,
                s = n.stateNode,
                (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (An === null || !An.has(s))))
                    return n.flags |= 65536,
                    i &= -i,
                    n.lanes |= i,
                    i = td(i),
                    nd(i, e, n, l),
                    Dr(n, i),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var is = Error(o(461))
      , Ve = !1;
    function Ie(e, t, n, l) {
        t.child = e === null ? uf(t, null, n, l) : Wn(t, e.child, n, l)
    }
    function ld(e, t, n, l, i) {
        n = n.render;
        var s = t.ref;
        if ("ref"in l) {
            var h = {};
            for (var y in l)
                y !== "ref" && (h[y] = l[y])
        } else
            h = l;
        return kn(t),
        l = Gr(e, t, n, h, s, i),
        y = Yr(),
        e !== null && !Ve ? (Vr(e, t, i),
        It(e, t, i)) : (ye && y && Sr(t),
        t.flags |= 1,
        Ie(e, t, l, i),
        t.child)
    }
    function ad(e, t, n, l, i) {
        if (e === null) {
            var s = n.type;
            return typeof s == "function" && !vr(s) && s.defaultProps === void 0 && n.compare === null ? (t.tag = 15,
            t.type = s,
            id(e, t, s, l, i)) : (e = Si(n.type, null, l, t, t.mode, i),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (s = e.child,
        !hs(e, i)) {
            var h = s.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : aa,
            n(h, l) && e.ref === t.ref)
                return It(e, t, i)
        }
        return t.flags |= 1,
        e = Kt(s, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function id(e, t, n, l, i) {
        if (e !== null) {
            var s = e.memoizedProps;
            if (aa(s, l) && e.ref === t.ref)
                if (Ve = !1,
                t.pendingProps = l = s,
                hs(e, i))
                    (e.flags & 131072) !== 0 && (Ve = !0);
                else
                    return t.lanes = e.lanes,
                    It(e, t, i)
        }
        return us(e, t, n, l, i)
    }
    function ud(e, t, n, l) {
        var i = l.children
          , s = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (s = s !== null ? s.baseLanes | n : n,
                e !== null) {
                    for (l = t.child = e.child,
                    i = 0; l !== null; )
                        i = i | l.lanes | l.childLanes,
                        l = l.sibling;
                    l = i & ~s
                } else
                    l = 0,
                    t.child = null;
                return rd(e, t, s, n, l)
            }
            if ((n & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Ci(t, s !== null ? s.cachePool : null),
                s !== null ? of(t, s) : Ur(),
                cf(t);
            else
                return l = t.lanes = 536870912,
                rd(e, t, s !== null ? s.baseLanes | n : n, n, l)
        } else
            s !== null ? (Ci(t, s.cachePool),
            of(t, s),
            En(),
            t.memoizedState = null) : (e !== null && Ci(t, null),
            Ur(),
            En());
        return Ie(e, t, i, n),
        t.child
    }
    function ba(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function rd(e, t, n, l, i) {
        var s = Nr();
        return s = s === null ? null : {
            parent: Ge._currentValue,
            pool: s
        },
        t.memoizedState = {
            baseLanes: n,
            cachePool: s
        },
        e !== null && Ci(t, null),
        Ur(),
        cf(t),
        e !== null && bl(e, t, l, !0),
        t.childLanes = i,
        null
    }
    function Yi(e, t) {
        return t = Qi({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function sd(e, t, n) {
        return Wn(t, e.child, null, n),
        e = Yi(t, t.pendingProps),
        e.flags |= 2,
        yt(t),
        t.memoizedState = null,
        e
    }
    function h0(e, t, n) {
        var l = t.pendingProps
          , i = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        e === null) {
            if (ye) {
                if (l.mode === "hidden")
                    return e = Yi(t, l),
                    t.lanes = 536870912,
                    ba(null, e);
                if (Hr(t),
                (e = ze) ? (e = xh(e, Ot),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: mn !== null ? {
                        id: Ut,
                        overflow: Bt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = Xc(e),
                n.return = t,
                t.child = n,
                Fe = t,
                ze = null)) : e = null,
                e === null)
                    throw pn(t);
                return t.lanes = 536870912,
                null
            }
            return Yi(t, l)
        }
        var s = e.memoizedState;
        if (s !== null) {
            var h = s.dehydrated;
            if (Hr(t),
            i)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = sd(e, t, n);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(o(558));
            else if (Ve || bl(e, t, n, !1),
            i = (n & e.childLanes) !== 0,
            Ve || i) {
                if (l = Me,
                l !== null && (h = Wo(l, n),
                h !== 0 && h !== s.retryLane))
                    throw s.retryLane = h,
                    Qn(e, h),
                    ct(l, e, h),
                    is;
                Ii(),
                t = sd(e, t, n)
            } else
                e = s.treeContext,
                ze = Rt(h.nextSibling),
                Fe = t,
                ye = !0,
                gn = null,
                Ot = !1,
                e !== null && kc(t, e),
                t = Yi(t, l),
                t.flags |= 4096;
            return t
        }
        return e = Kt(e.child, {
            mode: l.mode,
            children: l.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function Vi(e, t) {
        var n = t.ref;
        if (n === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(o(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }
    function us(e, t, n, l, i) {
        return kn(t),
        n = Gr(e, t, n, l, void 0, i),
        l = Yr(),
        e !== null && !Ve ? (Vr(e, t, i),
        It(e, t, i)) : (ye && l && Sr(t),
        t.flags |= 1,
        Ie(e, t, n, i),
        t.child)
    }
    function od(e, t, n, l, i, s) {
        return kn(t),
        t.updateQueue = null,
        n = df(t, l, n, i),
        ff(e),
        l = Yr(),
        e !== null && !Ve ? (Vr(e, t, s),
        It(e, t, s)) : (ye && l && Sr(t),
        t.flags |= 1,
        Ie(e, t, n, s),
        t.child)
    }
    function cd(e, t, n, l, i) {
        if (kn(t),
        t.stateNode === null) {
            var s = gl
              , h = n.contextType;
            typeof h == "object" && h !== null && (s = We(h)),
            s = new n(l,s),
            t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
            s.updater = ls,
            t.stateNode = s,
            s._reactInternals = t,
            s = t.stateNode,
            s.props = l,
            s.state = t.memoizedState,
            s.refs = {},
            zr(t),
            h = n.contextType,
            s.context = typeof h == "object" && h !== null ? We(h) : gl,
            s.state = t.memoizedState,
            h = n.getDerivedStateFromProps,
            typeof h == "function" && (ns(t, n, h, l),
            s.state = t.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (h = s.state,
            typeof s.componentWillMount == "function" && s.componentWillMount(),
            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
            h !== s.state && ls.enqueueReplaceState(s, s.state, null),
            ma(t, l, s, i),
            ha(),
            s.state = t.memoizedState),
            typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            l = !0
        } else if (e === null) {
            s = t.stateNode;
            var y = t.memoizedProps
              , w = Pn(n, y);
            s.props = w;
            var M = s.context
              , H = n.contextType;
            h = gl,
            typeof H == "object" && H !== null && (h = We(H));
            var Y = n.getDerivedStateFromProps;
            H = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function",
            y = t.pendingProps !== y,
            H || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (y || M !== h) && Ff(t, s, l, h),
            vn = !1;
            var z = t.memoizedState;
            s.state = z,
            ma(t, l, s, i),
            ha(),
            M = t.memoizedState,
            y || z !== M || vn ? (typeof Y == "function" && (ns(t, n, Y, l),
            M = t.memoizedState),
            (w = vn || $f(t, n, w, l, z, M, h)) ? (H || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
            typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = l,
            t.memoizedState = M),
            s.props = l,
            s.state = M,
            s.context = h,
            l = w) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            l = !1)
        } else {
            s = t.stateNode,
            Lr(e, t),
            h = t.memoizedProps,
            H = Pn(n, h),
            s.props = H,
            Y = t.pendingProps,
            z = s.context,
            M = n.contextType,
            w = gl,
            typeof M == "object" && M !== null && (w = We(M)),
            y = n.getDerivedStateFromProps,
            (M = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (h !== Y || z !== w) && Ff(t, s, l, w),
            vn = !1,
            z = t.memoizedState,
            s.state = z,
            ma(t, l, s, i),
            ha();
            var D = t.memoizedState;
            h !== Y || z !== D || vn || e !== null && e.dependencies !== null && wi(e.dependencies) ? (typeof y == "function" && (ns(t, n, y, l),
            D = t.memoizedState),
            (H = vn || $f(t, n, H, l, z, D, w) || e !== null && e.dependencies !== null && wi(e.dependencies)) ? (M || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(l, D, w),
            typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(l, D, w)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || h === e.memoizedProps && z === e.memoizedState || (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = l,
            t.memoizedState = D),
            s.props = l,
            s.state = D,
            s.context = w,
            l = H) : (typeof s.componentDidUpdate != "function" || h === e.memoizedProps && z === e.memoizedState || (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024),
            l = !1)
        }
        return s = l,
        Vi(e, t),
        l = (t.flags & 128) !== 0,
        s || l ? (s = t.stateNode,
        n = l && typeof n.getDerivedStateFromError != "function" ? null : s.render(),
        t.flags |= 1,
        e !== null && l ? (t.child = Wn(t, e.child, null, i),
        t.child = Wn(t, null, n, i)) : Ie(e, t, n, i),
        t.memoizedState = s.state,
        e = t.child) : e = It(e, t, i),
        e
    }
    function fd(e, t, n, l) {
        return Zn(),
        t.flags |= 256,
        Ie(e, t, n, l),
        t.child
    }
    var rs = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function ss(e) {
        return {
            baseLanes: e,
            cachePool: Pc()
        }
    }
    function os(e, t, n) {
        return e = e !== null ? e.childLanes & ~n : 0,
        t && (e |= bt),
        e
    }
    function dd(e, t, n) {
        var l = t.pendingProps, i = !1, s = (t.flags & 128) !== 0, h;
        if ((h = s) || (h = e !== null && e.memoizedState === null ? !1 : (He.current & 2) !== 0),
        h && (i = !0,
        t.flags &= -129),
        h = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (ye) {
                if (i ? Sn(t) : En(),
                (e = ze) ? (e = xh(e, Ot),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: mn !== null ? {
                        id: Ut,
                        overflow: Bt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = Xc(e),
                n.return = t,
                t.child = n,
                Fe = t,
                ze = null)) : e = null,
                e === null)
                    throw pn(t);
                return Zs(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var y = l.children;
            return l = l.fallback,
            i ? (En(),
            i = t.mode,
            y = Qi({
                mode: "hidden",
                children: y
            }, i),
            l = Xn(l, i, n, null),
            y.return = t,
            l.return = t,
            y.sibling = l,
            t.child = y,
            l = t.child,
            l.memoizedState = ss(n),
            l.childLanes = os(e, h, n),
            t.memoizedState = rs,
            ba(null, l)) : (Sn(t),
            cs(t, y))
        }
        var w = e.memoizedState;
        if (w !== null && (y = w.dehydrated,
        y !== null)) {
            if (s)
                t.flags & 256 ? (Sn(t),
                t.flags &= -257,
                t = fs(e, t, n)) : t.memoizedState !== null ? (En(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (En(),
                y = l.fallback,
                i = t.mode,
                l = Qi({
                    mode: "visible",
                    children: l.children
                }, i),
                y = Xn(y, i, n, null),
                y.flags |= 2,
                l.return = t,
                y.return = t,
                l.sibling = y,
                t.child = l,
                Wn(t, e.child, null, n),
                l = t.child,
                l.memoizedState = ss(n),
                l.childLanes = os(e, h, n),
                t.memoizedState = rs,
                t = ba(null, l));
            else if (Sn(t),
            Zs(y)) {
                if (h = y.nextSibling && y.nextSibling.dataset,
                h)
                    var M = h.dgst;
                h = M,
                l = Error(o(419)),
                l.stack = "",
                l.digest = h,
                ra({
                    value: l,
                    source: null,
                    stack: null
                }),
                t = fs(e, t, n)
            } else if (Ve || bl(e, t, n, !1),
            h = (n & e.childLanes) !== 0,
            Ve || h) {
                if (h = Me,
                h !== null && (l = Wo(h, n),
                l !== 0 && l !== w.retryLane))
                    throw w.retryLane = l,
                    Qn(e, l),
                    ct(h, e, l),
                    is;
                Xs(y) || Ii(),
                t = fs(e, t, n)
            } else
                Xs(y) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = w.treeContext,
                ze = Rt(y.nextSibling),
                Fe = t,
                ye = !0,
                gn = null,
                Ot = !1,
                e !== null && kc(t, e),
                t = cs(t, l.children),
                t.flags |= 4096);
            return t
        }
        return i ? (En(),
        y = l.fallback,
        i = t.mode,
        w = e.child,
        M = w.sibling,
        l = Kt(w, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = w.subtreeFlags & 65011712,
        M !== null ? y = Kt(M, y) : (y = Xn(y, i, n, null),
        y.flags |= 2),
        y.return = t,
        l.return = t,
        l.sibling = y,
        t.child = l,
        ba(null, l),
        l = t.child,
        y = e.child.memoizedState,
        y === null ? y = ss(n) : (i = y.cachePool,
        i !== null ? (w = Ge._currentValue,
        i = i.parent !== w ? {
            parent: w,
            pool: w
        } : i) : i = Pc(),
        y = {
            baseLanes: y.baseLanes | n,
            cachePool: i
        }),
        l.memoizedState = y,
        l.childLanes = os(e, h, n),
        t.memoizedState = rs,
        ba(e.child, l)) : (Sn(t),
        n = e.child,
        e = n.sibling,
        n = Kt(n, {
            mode: "visible",
            children: l.children
        }),
        n.return = t,
        n.sibling = null,
        e !== null && (h = t.deletions,
        h === null ? (t.deletions = [e],
        t.flags |= 16) : h.push(e)),
        t.child = n,
        t.memoizedState = null,
        n)
    }
    function cs(e, t) {
        return t = Qi({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function Qi(e, t) {
        return e = gt(22, e, null, t),
        e.lanes = 0,
        e
    }
    function fs(e, t, n) {
        return Wn(t, e.child, null, n),
        e = cs(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function hd(e, t, n) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t),
        Ar(e.return, t, n)
    }
    function ds(e, t, n, l, i, s) {
        var h = e.memoizedState;
        h === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: n,
            tailMode: i,
            treeForkCount: s
        } : (h.isBackwards = t,
        h.rendering = null,
        h.renderingStartTime = 0,
        h.last = l,
        h.tail = n,
        h.tailMode = i,
        h.treeForkCount = s)
    }
    function md(e, t, n) {
        var l = t.pendingProps
          , i = l.revealOrder
          , s = l.tail;
        l = l.children;
        var h = He.current
          , y = (h & 2) !== 0;
        if (y ? (h = h & 1 | 2,
        t.flags |= 128) : h &= 1,
        K(He, h),
        Ie(e, t, l, n),
        l = ye ? ua : 0,
        !y && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && hd(e, n, t);
                else if (e.tag === 19)
                    hd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Mi(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            ds(t, !1, i, n, s, l);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Mi(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            ds(t, !0, n, null, s, l);
            break;
        case "together":
            ds(t, !1, null, null, void 0, l);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function It(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        Cn |= t.lanes,
        (n & t.childLanes) === 0)
            if (e !== null) {
                if (bl(e, t, n, !1),
                (n & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child,
            n = Kt(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = Kt(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function hs(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && wi(e)))
    }
    function m0(e, t, n) {
        switch (t.tag) {
        case 3:
            nt(t, t.stateNode.containerInfo),
            yn(t, Ge, e.memoizedState.cache),
            Zn();
            break;
        case 27:
        case 5:
            Zl(t);
            break;
        case 4:
            nt(t, t.stateNode.containerInfo);
            break;
        case 10:
            yn(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                Hr(t),
                null;
            break;
        case 13:
            var l = t.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (Sn(t),
                t.flags |= 128,
                null) : (n & t.child.childLanes) !== 0 ? dd(e, t, n) : (Sn(t),
                e = It(e, t, n),
                e !== null ? e.sibling : null);
            Sn(t);
            break;
        case 19:
            var i = (e.flags & 128) !== 0;
            if (l = (n & t.childLanes) !== 0,
            l || (bl(e, t, n, !1),
            l = (n & t.childLanes) !== 0),
            i) {
                if (l)
                    return md(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState,
            i !== null && (i.rendering = null,
            i.tail = null,
            i.lastEffect = null),
            K(He, He.current),
            l)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            ud(e, t, n, t.pendingProps);
        case 24:
            yn(t, Ge, e.memoizedState.cache)
        }
        return It(e, t, n)
    }
    function gd(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                Ve = !0;
            else {
                if (!hs(e, n) && (t.flags & 128) === 0)
                    return Ve = !1,
                    m0(e, t, n);
                Ve = (e.flags & 131072) !== 0
            }
        else
            Ve = !1,
            ye && (t.flags & 1048576) !== 0 && Kc(t, ua, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                var l = t.pendingProps;
                if (e = $n(t.elementType),
                t.type = e,
                typeof e == "function")
                    vr(e) ? (l = Pn(e, l),
                    t.tag = 1,
                    t = cd(null, t, e, l, n)) : (t.tag = 0,
                    t = us(null, t, e, l, n));
                else {
                    if (e != null) {
                        var i = e.$$typeof;
                        if (i === J) {
                            t.tag = 11,
                            t = ld(null, t, e, l, n);
                            break e
                        } else if (i === I) {
                            t.tag = 14,
                            t = ad(null, t, e, l, n);
                            break e
                        }
                    }
                    throw t = ce(e) || e,
                    Error(o(306, t, ""))
                }
            }
            return t;
        case 0:
            return us(e, t, t.type, t.pendingProps, n);
        case 1:
            return l = t.type,
            i = Pn(l, t.pendingProps),
            cd(e, t, l, i, n);
        case 3:
            e: {
                if (nt(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(o(387));
                l = t.pendingProps;
                var s = t.memoizedState;
                i = s.element,
                Lr(e, t),
                ma(t, l, null, n);
                var h = t.memoizedState;
                if (l = h.cache,
                yn(t, Ge, l),
                l !== s.cache && Or(t, [Ge], n, !0),
                ha(),
                l = h.element,
                s.isDehydrated)
                    if (s = {
                        element: l,
                        isDehydrated: !1,
                        cache: h.cache
                    },
                    t.updateQueue.baseState = s,
                    t.memoizedState = s,
                    t.flags & 256) {
                        t = fd(e, t, l, n);
                        break e
                    } else if (l !== i) {
                        i = _t(Error(o(424)), t),
                        ra(i),
                        t = fd(e, t, l, n);
                        break e
                    } else
                        for (e = t.stateNode.containerInfo,
                        e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e,
                        ze = Rt(e.firstChild),
                        Fe = t,
                        ye = !0,
                        gn = null,
                        Ot = !0,
                        n = uf(t, null, l, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (Zn(),
                    l === i) {
                        t = It(e, t, n);
                        break e
                    }
                    Ie(e, t, l, n)
                }
                t = t.child
            }
            return t;
        case 26:
            return Vi(e, t),
            e === null ? (n = Ah(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : ye || (n = t.type,
            e = t.pendingProps,
            l = iu(fe.current).createElement(n),
            l[$e] = t,
            l[at] = e,
            Pe(l, n, e),
            Ke(l),
            t.stateNode = l) : t.memoizedState = Ah(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return Zl(t),
            e === null && ye && (l = t.stateNode = wh(t.type, t.pendingProps, fe.current),
            Fe = t,
            Ot = !0,
            i = ze,
            Nn(t.type) ? (Ks = i,
            ze = Rt(l.firstChild)) : ze = i),
            Ie(e, t, t.pendingProps.children, n),
            Vi(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && ye && ((i = l = ze) && (l = X0(l, t.type, t.pendingProps, Ot),
            l !== null ? (t.stateNode = l,
            Fe = t,
            ze = Rt(l.firstChild),
            Ot = !1,
            i = !0) : i = !1),
            i || pn(t)),
            Zl(t),
            i = t.type,
            s = t.pendingProps,
            h = e !== null ? e.memoizedProps : null,
            l = s.children,
            Ys(i, s) ? l = null : h !== null && Ys(i, h) && (t.flags |= 32),
            t.memoizedState !== null && (i = Gr(e, t, i0, null, null, n),
            Da._currentValue = i),
            Vi(e, t),
            Ie(e, t, l, n),
            t.child;
        case 6:
            return e === null && ye && ((e = n = ze) && (n = Z0(n, t.pendingProps, Ot),
            n !== null ? (t.stateNode = n,
            Fe = t,
            ze = null,
            e = !0) : e = !1),
            e || pn(t)),
            null;
        case 13:
            return dd(e, t, n);
        case 4:
            return nt(t, t.stateNode.containerInfo),
            l = t.pendingProps,
            e === null ? t.child = Wn(t, null, l, n) : Ie(e, t, l, n),
            t.child;
        case 11:
            return ld(e, t, t.type, t.pendingProps, n);
        case 7:
            return Ie(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return Ie(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return Ie(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            return l = t.pendingProps,
            yn(t, t.type, l.value),
            Ie(e, t, l.children, n),
            t.child;
        case 9:
            return i = t.type._context,
            l = t.pendingProps.children,
            kn(t),
            i = We(i),
            l = l(i),
            t.flags |= 1,
            Ie(e, t, l, n),
            t.child;
        case 14:
            return ad(e, t, t.type, t.pendingProps, n);
        case 15:
            return id(e, t, t.type, t.pendingProps, n);
        case 19:
            return md(e, t, n);
        case 31:
            return h0(e, t, n);
        case 22:
            return ud(e, t, n, t.pendingProps);
        case 24:
            return kn(t),
            l = We(Ge),
            e === null ? (i = Nr(),
            i === null && (i = Me,
            s = Tr(),
            i.pooledCache = s,
            s.refCount++,
            s !== null && (i.pooledCacheLanes |= n),
            i = s),
            t.memoizedState = {
                parent: l,
                cache: i
            },
            zr(t),
            yn(t, Ge, i)) : ((e.lanes & n) !== 0 && (Lr(e, t),
            ma(t, null, null, n),
            ha()),
            i = e.memoizedState,
            s = t.memoizedState,
            i.parent !== l ? (i = {
                parent: l,
                cache: l
            },
            t.memoizedState = i,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
            yn(t, Ge, l)) : (l = s.cache,
            yn(t, Ge, l),
            l !== i.cache && Or(t, [Ge], n, !0))),
            Ie(e, t, t.pendingProps.children, n),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }
    function Pt(e) {
        e.flags |= 4
    }
    function ms(e, t, n, l, i) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (i & 335544128) === i)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (Vd())
                    e.flags |= 8192;
                else
                    throw Fn = Oi,
                    Mr
        } else
            e.flags &= -16777217
    }
    function pd(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !Mh(t))
            if (Vd())
                e.flags |= 8192;
            else
                throw Fn = Oi,
                Mr
    }
    function Xi(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? Jo() : 536870912,
        e.lanes |= t,
        Ml |= t)
    }
    function xa(e, t) {
        if (!ye)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var l = null; n !== null; )
                    n.alternate !== null && (l = n),
                    n = n.sibling;
                l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
            }
    }
    function Le(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , l = 0;
        if (t)
            for (var i = e.child; i !== null; )
                n |= i.lanes | i.childLanes,
                l |= i.subtreeFlags & 65011712,
                l |= i.flags & 65011712,
                i.return = e,
                i = i.sibling;
        else
            for (i = e.child; i !== null; )
                n |= i.lanes | i.childLanes,
                l |= i.subtreeFlags,
                l |= i.flags,
                i.return = e,
                i = i.sibling;
        return e.subtreeFlags |= l,
        e.childLanes = n,
        t
    }
    function g0(e, t, n) {
        var l = t.pendingProps;
        switch (Er(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Le(t),
            null;
        case 1:
            return Le(t),
            null;
        case 3:
            return n = t.stateNode,
            l = null,
            e !== null && (l = e.memoizedState.cache),
            t.memoizedState.cache !== l && (t.flags |= 2048),
            $t(Ge),
            Be(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (e === null || e.child === null) && (vl(t) ? Pt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            _r())),
            Le(t),
            null;
        case 26:
            var i = t.type
              , s = t.memoizedState;
            return e === null ? (Pt(t),
            s !== null ? (Le(t),
            pd(t, s)) : (Le(t),
            ms(t, i, null, l, n))) : s ? s !== e.memoizedState ? (Pt(t),
            Le(t),
            pd(t, s)) : (Le(t),
            t.flags &= -16777217) : (e = e.memoizedProps,
            e !== l && Pt(t),
            Le(t),
            ms(t, i, e, l, n)),
            null;
        case 27:
            if (ti(t),
            n = fe.current,
            i = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== l && Pt(t);
            else {
                if (!l) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return Le(t),
                    null
                }
                e = $.current,
                vl(t) ? Jc(t) : (e = wh(i, l, n),
                t.stateNode = e,
                Pt(t))
            }
            return Le(t),
            null;
        case 5:
            if (ti(t),
            i = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== l && Pt(t);
            else {
                if (!l) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return Le(t),
                    null
                }
                if (s = $.current,
                vl(t))
                    Jc(t);
                else {
                    var h = iu(fe.current);
                    switch (s) {
                    case 1:
                        s = h.createElementNS("http://www.w3.org/2000/svg", i);
                        break;
                    case 2:
                        s = h.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                        break;
                    default:
                        switch (i) {
                        case "svg":
                            s = h.createElementNS("http://www.w3.org/2000/svg", i);
                            break;
                        case "math":
                            s = h.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                            break;
                        case "script":
                            s = h.createElement("div"),
                            s.innerHTML = "<script><\/script>",
                            s = s.removeChild(s.firstChild);
                            break;
                        case "select":
                            s = typeof l.is == "string" ? h.createElement("select", {
                                is: l.is
                            }) : h.createElement("select"),
                            l.multiple ? s.multiple = !0 : l.size && (s.size = l.size);
                            break;
                        default:
                            s = typeof l.is == "string" ? h.createElement(i, {
                                is: l.is
                            }) : h.createElement(i)
                        }
                    }
                    s[$e] = t,
                    s[at] = l;
                    e: for (h = t.child; h !== null; ) {
                        if (h.tag === 5 || h.tag === 6)
                            s.appendChild(h.stateNode);
                        else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                            h.child.return = h,
                            h = h.child;
                            continue
                        }
                        if (h === t)
                            break e;
                        for (; h.sibling === null; ) {
                            if (h.return === null || h.return === t)
                                break e;
                            h = h.return
                        }
                        h.sibling.return = h.return,
                        h = h.sibling
                    }
                    t.stateNode = s;
                    e: switch (Pe(s, i, l),
                    i) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break e;
                    case "img":
                        l = !0;
                        break e;
                    default:
                        l = !1
                    }
                    l && Pt(t)
                }
            }
            return Le(t),
            ms(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== l && Pt(t);
            else {
                if (typeof l != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (e = fe.current,
                vl(t)) {
                    if (e = t.stateNode,
                    n = t.memoizedProps,
                    l = null,
                    i = Fe,
                    i !== null)
                        switch (i.tag) {
                        case 27:
                        case 5:
                            l = i.memoizedProps
                        }
                    e[$e] = t,
                    e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || dh(e.nodeValue, n)),
                    e || pn(t, !0)
                } else
                    e = iu(e).createTextNode(l),
                    e[$e] = t,
                    t.stateNode = e
            }
            return Le(t),
            null;
        case 31:
            if (n = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (l = vl(t),
                n !== null) {
                    if (e === null) {
                        if (!l)
                            throw Error(o(318));
                        if (e = t.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(o(557));
                        e[$e] = t
                    } else
                        Zn(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Le(t),
                    e = !1
                } else
                    n = _r(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (yt(t),
                    t) : (yt(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(o(558))
            }
            return Le(t),
            null;
        case 13:
            if (l = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (i = vl(t),
                l !== null && l.dehydrated !== null) {
                    if (e === null) {
                        if (!i)
                            throw Error(o(318));
                        if (i = t.memoizedState,
                        i = i !== null ? i.dehydrated : null,
                        !i)
                            throw Error(o(317));
                        i[$e] = t
                    } else
                        Zn(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Le(t),
                    i = !1
                } else
                    i = _r(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
                    i = !0;
                if (!i)
                    return t.flags & 256 ? (yt(t),
                    t) : (yt(t),
                    null)
            }
            return yt(t),
            (t.flags & 128) !== 0 ? (t.lanes = n,
            t) : (n = l !== null,
            e = e !== null && e.memoizedState !== null,
            n && (l = t.child,
            i = null,
            l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool),
            s = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (s = l.memoizedState.cachePool.pool),
            s !== i && (l.flags |= 2048)),
            n !== e && n && (t.child.flags |= 8192),
            Xi(t, t.updateQueue),
            Le(t),
            null);
        case 4:
            return Be(),
            e === null && Us(t.stateNode.containerInfo),
            Le(t),
            null;
        case 10:
            return $t(t.type),
            Le(t),
            null;
        case 19:
            if (q(He),
            l = t.memoizedState,
            l === null)
                return Le(t),
                null;
            if (i = (t.flags & 128) !== 0,
            s = l.rendering,
            s === null)
                if (i)
                    xa(l, !1);
                else {
                    if (Ue !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (s = Mi(e),
                            s !== null) {
                                for (t.flags |= 128,
                                xa(l, !1),
                                e = s.updateQueue,
                                t.updateQueue = e,
                                Xi(t, e),
                                t.subtreeFlags = 0,
                                e = n,
                                n = t.child; n !== null; )
                                    Qc(n, e),
                                    n = n.sibling;
                                return K(He, He.current & 1 | 2),
                                ye && kt(t, l.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null && ft() > $i && (t.flags |= 128,
                    i = !0,
                    xa(l, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!i)
                    if (e = Mi(s),
                    e !== null) {
                        if (t.flags |= 128,
                        i = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Xi(t, e),
                        xa(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !s.alternate && !ye)
                            return Le(t),
                            null
                    } else
                        2 * ft() - l.renderingStartTime > $i && n !== 536870912 && (t.flags |= 128,
                        i = !0,
                        xa(l, !1),
                        t.lanes = 4194304);
                l.isBackwards ? (s.sibling = t.child,
                t.child = s) : (e = l.last,
                e !== null ? e.sibling = s : t.child = s,
                l.last = s)
            }
            return l.tail !== null ? (e = l.tail,
            l.rendering = e,
            l.tail = e.sibling,
            l.renderingStartTime = ft(),
            e.sibling = null,
            n = He.current,
            K(He, i ? n & 1 | 2 : n & 1),
            ye && kt(t, l.treeForkCount),
            e) : (Le(t),
            null);
        case 22:
        case 23:
            return yt(t),
            Br(),
            l = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192),
            l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Le(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t),
            n = t.updateQueue,
            n !== null && Xi(t, n.retryQueue),
            n = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            l = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
            l !== n && (t.flags |= 2048),
            e !== null && q(Jn),
            null;
        case 24:
            return n = null,
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            $t(Ge),
            Le(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function p0(e, t) {
        switch (Er(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return $t(Ge),
            Be(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return ti(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (yt(t),
                t.alternate === null)
                    throw Error(o(340));
                Zn()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (yt(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(o(340));
                Zn()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return q(He),
            null;
        case 4:
            return Be(),
            null;
        case 10:
            return $t(t.type),
            null;
        case 22:
        case 23:
            return yt(t),
            Br(),
            e !== null && q(Jn),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return $t(Ge),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function yd(e, t) {
        switch (Er(t),
        t.tag) {
        case 3:
            $t(Ge),
            Be();
            break;
        case 26:
        case 27:
        case 5:
            ti(t);
            break;
        case 4:
            Be();
            break;
        case 31:
            t.memoizedState !== null && yt(t);
            break;
        case 13:
            yt(t);
            break;
        case 19:
            q(He);
            break;
        case 10:
            $t(t.type);
            break;
        case 22:
        case 23:
            yt(t),
            Br(),
            e !== null && q(Jn);
            break;
        case 24:
            $t(Ge)
        }
    }
    function Sa(e, t) {
        try {
            var n = t.updateQueue
              , l = n !== null ? n.lastEffect : null;
            if (l !== null) {
                var i = l.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        l = void 0;
                        var s = n.create
                          , h = n.inst;
                        l = s(),
                        h.destroy = l
                    }
                    n = n.next
                } while (n !== i)
            }
        } catch (y) {
            Oe(t, t.return, y)
        }
    }
    function wn(e, t, n) {
        try {
            var l = t.updateQueue
              , i = l !== null ? l.lastEffect : null;
            if (i !== null) {
                var s = i.next;
                l = s;
                do {
                    if ((l.tag & e) === e) {
                        var h = l.inst
                          , y = h.destroy;
                        if (y !== void 0) {
                            h.destroy = void 0,
                            i = t;
                            var w = n
                              , M = y;
                            try {
                                M()
                            } catch (H) {
                                Oe(i, w, H)
                            }
                        }
                    }
                    l = l.next
                } while (l !== s)
            }
        } catch (H) {
            Oe(t, t.return, H)
        }
    }
    function vd(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                sf(t, n)
            } catch (l) {
                Oe(e, e.return, l)
            }
        }
    }
    function bd(e, t, n) {
        n.props = Pn(e.type, e.memoizedProps),
        n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (l) {
            Oe(e, t, l)
        }
    }
    function Ea(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var l = e.stateNode;
                    break;
                case 30:
                    l = e.stateNode;
                    break;
                default:
                    l = e.stateNode
                }
                typeof n == "function" ? e.refCleanup = n(l) : n.current = l
            }
        } catch (i) {
            Oe(e, t, i)
        }
    }
    function Ht(e, t) {
        var n = e.ref
          , l = e.refCleanup;
        if (n !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (i) {
                    Oe(e, t, i)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (i) {
                    Oe(e, t, i)
                }
            else
                n.current = null
    }
    function xd(e) {
        var t = e.type
          , n = e.memoizedProps
          , l = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && l.focus();
                break e;
            case "img":
                n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet)
            }
        } catch (i) {
            Oe(e, e.return, i)
        }
    }
    function gs(e, t, n) {
        try {
            var l = e.stateNode;
            H0(l, e.type, n, t),
            l[at] = t
        } catch (i) {
            Oe(e, e.return, i)
        }
    }
    function Sd(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Nn(e.type) || e.tag === 4
    }
    function ps(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Sd(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Nn(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function ys(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6)
            e = e.stateNode,
            t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            t.appendChild(e),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = Xt));
        else if (l !== 4 && (l === 27 && Nn(e.type) && (n = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (ys(e, t, n),
            e = e.sibling; e !== null; )
                ys(e, t, n),
                e = e.sibling
    }
    function Zi(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (l !== 4 && (l === 27 && Nn(e.type) && (n = e.stateNode),
        e = e.child,
        e !== null))
            for (Zi(e, t, n),
            e = e.sibling; e !== null; )
                Zi(e, t, n),
                e = e.sibling
    }
    function Ed(e) {
        var t = e.stateNode
          , n = e.memoizedProps;
        try {
            for (var l = e.type, i = t.attributes; i.length; )
                t.removeAttributeNode(i[0]);
            Pe(t, l, n),
            t[$e] = e,
            t[at] = n
        } catch (s) {
            Oe(e, e.return, s)
        }
    }
    var en = !1
      , Qe = !1
      , vs = !1
      , wd = typeof WeakSet == "function" ? WeakSet : Set
      , ke = null;
    function y0(e, t) {
        if (e = e.containerInfo,
        qs = du,
        e = Dc(e),
        fr(e)) {
            if ("selectionStart"in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var l = n.getSelection && n.getSelection();
                    if (l && l.rangeCount !== 0) {
                        n = l.anchorNode;
                        var i = l.anchorOffset
                          , s = l.focusNode;
                        l = l.focusOffset;
                        try {
                            n.nodeType,
                            s.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var h = 0
                          , y = -1
                          , w = -1
                          , M = 0
                          , H = 0
                          , Y = e
                          , z = null;
                        t: for (; ; ) {
                            for (var D; Y !== n || i !== 0 && Y.nodeType !== 3 || (y = h + i),
                            Y !== s || l !== 0 && Y.nodeType !== 3 || (w = h + l),
                            Y.nodeType === 3 && (h += Y.nodeValue.length),
                            (D = Y.firstChild) !== null; )
                                z = Y,
                                Y = D;
                            for (; ; ) {
                                if (Y === e)
                                    break t;
                                if (z === n && ++M === i && (y = h),
                                z === s && ++H === l && (w = h),
                                (D = Y.nextSibling) !== null)
                                    break;
                                Y = z,
                                z = Y.parentNode
                            }
                            Y = D
                        }
                        n = y === -1 || w === -1 ? null : {
                            start: y,
                            end: w
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (Gs = {
            focusedElem: e,
            selectionRange: n
        },
        du = !1,
        ke = t; ke !== null; )
            if (t = ke,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                ke = e;
            else
                for (; ke !== null; ) {
                    switch (t = ke,
                    s = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue,
                        e = e !== null ? e.events : null,
                        e !== null))
                            for (n = 0; n < e.length; n++)
                                i = e[n],
                                i.ref.impl = i.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && s !== null) {
                            e = void 0,
                            n = t,
                            i = s.memoizedProps,
                            s = s.memoizedState,
                            l = n.stateNode;
                            try {
                                var F = Pn(n.type, i);
                                e = l.getSnapshotBeforeUpdate(F, s),
                                l.__reactInternalSnapshotBeforeUpdate = e
                            } catch (ne) {
                                Oe(n, n.return, ne)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            n = e.nodeType,
                            n === 9)
                                Qs(e);
                            else if (n === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Qs(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        ke = e;
                        break
                    }
                    ke = t.return
                }
    }
    function _d(e, t, n) {
        var l = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            nn(e, n),
            l & 4 && Sa(5, n);
            break;
        case 1:
            if (nn(e, n),
            l & 4)
                if (e = n.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (h) {
                        Oe(n, n.return, h)
                    }
                else {
                    var i = Pn(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (h) {
                        Oe(n, n.return, h)
                    }
                }
            l & 64 && vd(n),
            l & 512 && Ea(n, n.return);
            break;
        case 3:
            if (nn(e, n),
            l & 64 && (e = n.updateQueue,
            e !== null)) {
                if (t = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        t = n.child.stateNode;
                        break;
                    case 1:
                        t = n.child.stateNode
                    }
                try {
                    sf(e, t)
                } catch (h) {
                    Oe(n, n.return, h)
                }
            }
            break;
        case 27:
            t === null && l & 4 && Ed(n);
        case 26:
        case 5:
            nn(e, n),
            t === null && l & 4 && xd(n),
            l & 512 && Ea(n, n.return);
            break;
        case 12:
            nn(e, n);
            break;
        case 31:
            nn(e, n),
            l & 4 && Od(e, n);
            break;
        case 13:
            nn(e, n),
            l & 4 && Td(e, n),
            l & 64 && (e = n.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (n = A0.bind(null, n),
            K0(e, n))));
            break;
        case 22:
            if (l = n.memoizedState !== null || en,
            !l) {
                t = t !== null && t.memoizedState !== null || Qe,
                i = en;
                var s = Qe;
                en = l,
                (Qe = t) && !s ? ln(e, n, (n.subtreeFlags & 8772) !== 0) : nn(e, n),
                en = i,
                Qe = s
            }
            break;
        case 30:
            break;
        default:
            nn(e, n)
        }
    }
    function Cd(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Cd(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && Ju(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var De = null
      , ut = !1;
    function tn(e, t, n) {
        for (n = n.child; n !== null; )
            Ad(e, t, n),
            n = n.sibling
    }
    function Ad(e, t, n) {
        if (dt && typeof dt.onCommitFiberUnmount == "function")
            try {
                dt.onCommitFiberUnmount(Kl, n)
            } catch {}
        switch (n.tag) {
        case 26:
            Qe || Ht(n, t),
            tn(e, t, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            Qe || Ht(n, t);
            var l = De
              , i = ut;
            Nn(n.type) && (De = n.stateNode,
            ut = !1),
            tn(e, t, n),
            Ma(n.stateNode),
            De = l,
            ut = i;
            break;
        case 5:
            Qe || Ht(n, t);
        case 6:
            if (l = De,
            i = ut,
            De = null,
            tn(e, t, n),
            De = l,
            ut = i,
            De !== null)
                if (ut)
                    try {
                        (De.nodeType === 9 ? De.body : De.nodeName === "HTML" ? De.ownerDocument.body : De).removeChild(n.stateNode)
                    } catch (s) {
                        Oe(n, t, s)
                    }
                else
                    try {
                        De.removeChild(n.stateNode)
                    } catch (s) {
                        Oe(n, t, s)
                    }
            break;
        case 18:
            De !== null && (ut ? (e = De,
            vh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode),
            ql(e)) : vh(De, n.stateNode));
            break;
        case 4:
            l = De,
            i = ut,
            De = n.stateNode.containerInfo,
            ut = !0,
            tn(e, t, n),
            De = l,
            ut = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            wn(2, n, t),
            Qe || wn(4, n, t),
            tn(e, t, n);
            break;
        case 1:
            Qe || (Ht(n, t),
            l = n.stateNode,
            typeof l.componentWillUnmount == "function" && bd(n, t, l)),
            tn(e, t, n);
            break;
        case 21:
            tn(e, t, n);
            break;
        case 22:
            Qe = (l = Qe) || n.memoizedState !== null,
            tn(e, t, n),
            Qe = l;
            break;
        default:
            tn(e, t, n)
        }
    }
    function Od(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                ql(e)
            } catch (n) {
                Oe(t, t.return, n)
            }
        }
    }
    function Td(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                ql(e)
            } catch (n) {
                Oe(t, t.return, n)
            }
    }
    function v0(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new wd),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new wd),
            t;
        default:
            throw Error(o(435, e.tag))
        }
    }
    function Ki(e, t) {
        var n = v0(e);
        t.forEach(function(l) {
            if (!n.has(l)) {
                n.add(l);
                var i = O0.bind(null, e, l);
                l.then(i, i)
            }
        })
    }
    function rt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var l = 0; l < n.length; l++) {
                var i = n[l]
                  , s = e
                  , h = t
                  , y = h;
                e: for (; y !== null; ) {
                    switch (y.tag) {
                    case 27:
                        if (Nn(y.type)) {
                            De = y.stateNode,
                            ut = !1;
                            break e
                        }
                        break;
                    case 5:
                        De = y.stateNode,
                        ut = !1;
                        break e;
                    case 3:
                    case 4:
                        De = y.stateNode.containerInfo,
                        ut = !0;
                        break e
                    }
                    y = y.return
                }
                if (De === null)
                    throw Error(o(160));
                Ad(s, h, i),
                De = null,
                ut = !1,
                s = i.alternate,
                s !== null && (s.return = null),
                i.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                Rd(t, e),
                t = t.sibling
    }
    var Lt = null;
    function Rd(e, t) {
        var n = e.alternate
          , l = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            rt(t, e),
            st(e),
            l & 4 && (wn(3, e, e.return),
            Sa(3, e),
            wn(5, e, e.return));
            break;
        case 1:
            rt(t, e),
            st(e),
            l & 512 && (Qe || n === null || Ht(n, n.return)),
            l & 64 && en && (e = e.updateQueue,
            e !== null && (l = e.callbacks,
            l !== null && (n = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
            break;
        case 26:
            var i = Lt;
            if (rt(t, e),
            st(e),
            l & 512 && (Qe || n === null || Ht(n, n.return)),
            l & 4) {
                var s = n !== null ? n.memoizedState : null;
                if (l = e.memoizedState,
                n === null)
                    if (l === null)
                        if (e.stateNode === null) {
                            e: {
                                l = e.type,
                                n = e.memoizedProps,
                                i = i.ownerDocument || i;
                                t: switch (l) {
                                case "title":
                                    s = i.getElementsByTagName("title")[0],
                                    (!s || s[$l] || s[$e] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = i.createElement(l),
                                    i.head.insertBefore(s, i.querySelector("head > title"))),
                                    Pe(s, l, n),
                                    s[$e] = e,
                                    Ke(s),
                                    l = s;
                                    break e;
                                case "link":
                                    var h = Rh("link", "href", i).get(l + (n.href || ""));
                                    if (h) {
                                        for (var y = 0; y < h.length; y++)
                                            if (s = h[y],
                                            s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                h.splice(y, 1);
                                                break t
                                            }
                                    }
                                    s = i.createElement(l),
                                    Pe(s, l, n),
                                    i.head.appendChild(s);
                                    break;
                                case "meta":
                                    if (h = Rh("meta", "content", i).get(l + (n.content || ""))) {
                                        for (y = 0; y < h.length; y++)
                                            if (s = h[y],
                                            s.getAttribute("content") === (n.content == null ? null : "" + n.content) && s.getAttribute("name") === (n.name == null ? null : n.name) && s.getAttribute("property") === (n.property == null ? null : n.property) && s.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && s.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                h.splice(y, 1);
                                                break t
                                            }
                                    }
                                    s = i.createElement(l),
                                    Pe(s, l, n),
                                    i.head.appendChild(s);
                                    break;
                                default:
                                    throw Error(o(468, l))
                                }
                                s[$e] = e,
                                Ke(s),
                                l = s
                            }
                            e.stateNode = l
                        } else
                            Nh(i, e.type, e.stateNode);
                    else
                        e.stateNode = Th(i, l, e.memoizedProps);
                else
                    s !== l ? (s === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : s.count--,
                    l === null ? Nh(i, e.type, e.stateNode) : Th(i, l, e.memoizedProps)) : l === null && e.stateNode !== null && gs(e, e.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            rt(t, e),
            st(e),
            l & 512 && (Qe || n === null || Ht(n, n.return)),
            n !== null && l & 4 && gs(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (rt(t, e),
            st(e),
            l & 512 && (Qe || n === null || Ht(n, n.return)),
            e.flags & 32) {
                i = e.stateNode;
                try {
                    sl(i, "")
                } catch (F) {
                    Oe(e, e.return, F)
                }
            }
            l & 4 && e.stateNode != null && (i = e.memoizedProps,
            gs(e, i, n !== null ? n.memoizedProps : i)),
            l & 1024 && (vs = !0);
            break;
        case 6:
            if (rt(t, e),
            st(e),
            l & 4) {
                if (e.stateNode === null)
                    throw Error(o(162));
                l = e.memoizedProps,
                n = e.stateNode;
                try {
                    n.nodeValue = l
                } catch (F) {
                    Oe(e, e.return, F)
                }
            }
            break;
        case 3:
            if (su = null,
            i = Lt,
            Lt = uu(t.containerInfo),
            rt(t, e),
            Lt = i,
            st(e),
            l & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    ql(t.containerInfo)
                } catch (F) {
                    Oe(e, e.return, F)
                }
            vs && (vs = !1,
            Nd(e));
            break;
        case 4:
            l = Lt,
            Lt = uu(e.stateNode.containerInfo),
            rt(t, e),
            st(e),
            Lt = l;
            break;
        case 12:
            rt(t, e),
            st(e);
            break;
        case 31:
            rt(t, e),
            st(e),
            l & 4 && (l = e.updateQueue,
            l !== null && (e.updateQueue = null,
            Ki(e, l)));
            break;
        case 13:
            rt(t, e),
            st(e),
            e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Ji = ft()),
            l & 4 && (l = e.updateQueue,
            l !== null && (e.updateQueue = null,
            Ki(e, l)));
            break;
        case 22:
            i = e.memoizedState !== null;
            var w = n !== null && n.memoizedState !== null
              , M = en
              , H = Qe;
            if (en = M || i,
            Qe = H || w,
            rt(t, e),
            Qe = H,
            en = M,
            st(e),
            l & 8192)
                e: for (t = e.stateNode,
                t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                i && (n === null || w || en || Qe || el(e)),
                n = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            w = n = t;
                            try {
                                if (s = w.stateNode,
                                i)
                                    h = s.style,
                                    typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                                else {
                                    y = w.stateNode;
                                    var Y = w.memoizedProps.style
                                      , z = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                                    y.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim()
                                }
                            } catch (F) {
                                Oe(w, w.return, F)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            w = t;
                            try {
                                w.stateNode.nodeValue = i ? "" : w.memoizedProps
                            } catch (F) {
                                Oe(w, w.return, F)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (n === null) {
                            w = t;
                            try {
                                var D = w.stateNode;
                                i ? bh(D, !0) : bh(w.stateNode, !1)
                            } catch (F) {
                                Oe(w, w.return, F)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        n === t && (n = null),
                        t = t.return
                    }
                    n === t && (n = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            l & 4 && (l = e.updateQueue,
            l !== null && (n = l.retryQueue,
            n !== null && (l.retryQueue = null,
            Ki(e, n))));
            break;
        case 19:
            rt(t, e),
            st(e),
            l & 4 && (l = e.updateQueue,
            l !== null && (e.updateQueue = null,
            Ki(e, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            rt(t, e),
            st(e)
        }
    }
    function st(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, l = e.return; l !== null; ) {
                    if (Sd(l)) {
                        n = l;
                        break
                    }
                    l = l.return
                }
                if (n == null)
                    throw Error(o(160));
                switch (n.tag) {
                case 27:
                    var i = n.stateNode
                      , s = ps(e);
                    Zi(e, s, i);
                    break;
                case 5:
                    var h = n.stateNode;
                    n.flags & 32 && (sl(h, ""),
                    n.flags &= -33);
                    var y = ps(e);
                    Zi(e, y, h);
                    break;
                case 3:
                case 4:
                    var w = n.stateNode.containerInfo
                      , M = ps(e);
                    ys(e, M, w);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (H) {
                Oe(e, e.return, H)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Nd(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                Nd(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function nn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                _d(e, t.alternate, t),
                t = t.sibling
    }
    function el(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                wn(4, t, t.return),
                el(t);
                break;
            case 1:
                Ht(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == "function" && bd(t, t.return, n),
                el(t);
                break;
            case 27:
                Ma(t.stateNode);
            case 26:
            case 5:
                Ht(t, t.return),
                el(t);
                break;
            case 22:
                t.memoizedState === null && el(t);
                break;
            case 30:
                el(t);
                break;
            default:
                el(t)
            }
            e = e.sibling
        }
    }
    function ln(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var l = t.alternate
              , i = e
              , s = t
              , h = s.flags;
            switch (s.tag) {
            case 0:
            case 11:
            case 15:
                ln(i, s, n),
                Sa(4, s);
                break;
            case 1:
                if (ln(i, s, n),
                l = s,
                i = l.stateNode,
                typeof i.componentDidMount == "function")
                    try {
                        i.componentDidMount()
                    } catch (M) {
                        Oe(l, l.return, M)
                    }
                if (l = s,
                i = l.updateQueue,
                i !== null) {
                    var y = l.stateNode;
                    try {
                        var w = i.shared.hiddenCallbacks;
                        if (w !== null)
                            for (i.shared.hiddenCallbacks = null,
                            i = 0; i < w.length; i++)
                                rf(w[i], y)
                    } catch (M) {
                        Oe(l, l.return, M)
                    }
                }
                n && h & 64 && vd(s),
                Ea(s, s.return);
                break;
            case 27:
                Ed(s);
            case 26:
            case 5:
                ln(i, s, n),
                n && l === null && h & 4 && xd(s),
                Ea(s, s.return);
                break;
            case 12:
                ln(i, s, n);
                break;
            case 31:
                ln(i, s, n),
                n && h & 4 && Od(i, s);
                break;
            case 13:
                ln(i, s, n),
                n && h & 4 && Td(i, s);
                break;
            case 22:
                s.memoizedState === null && ln(i, s, n),
                Ea(s, s.return);
                break;
            case 30:
                break;
            default:
                ln(i, s, n)
            }
            t = t.sibling
        }
    }
    function bs(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++,
        n != null && sa(n))
    }
    function xs(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && sa(e))
    }
    function Dt(e, t, n, l) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Md(e, t, n, l),
                t = t.sibling
    }
    function Md(e, t, n, l) {
        var i = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Dt(e, t, n, l),
            i & 2048 && Sa(9, t);
            break;
        case 1:
            Dt(e, t, n, l);
            break;
        case 3:
            Dt(e, t, n, l),
            i & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && sa(e)));
            break;
        case 12:
            if (i & 2048) {
                Dt(e, t, n, l),
                e = t.stateNode;
                try {
                    var s = t.memoizedProps
                      , h = s.id
                      , y = s.onPostCommit;
                    typeof y == "function" && y(h, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (w) {
                    Oe(t, t.return, w)
                }
            } else
                Dt(e, t, n, l);
            break;
        case 31:
            Dt(e, t, n, l);
            break;
        case 13:
            Dt(e, t, n, l);
            break;
        case 23:
            break;
        case 22:
            s = t.stateNode,
            h = t.alternate,
            t.memoizedState !== null ? s._visibility & 2 ? Dt(e, t, n, l) : wa(e, t) : s._visibility & 2 ? Dt(e, t, n, l) : (s._visibility |= 2,
            Tl(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
            i & 2048 && bs(h, t);
            break;
        case 24:
            Dt(e, t, n, l),
            i & 2048 && xs(t.alternate, t);
            break;
        default:
            Dt(e, t, n, l)
        }
    }
    function Tl(e, t, n, l, i) {
        for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var s = e
              , h = t
              , y = n
              , w = l
              , M = h.flags;
            switch (h.tag) {
            case 0:
            case 11:
            case 15:
                Tl(s, h, y, w, i),
                Sa(8, h);
                break;
            case 23:
                break;
            case 22:
                var H = h.stateNode;
                h.memoizedState !== null ? H._visibility & 2 ? Tl(s, h, y, w, i) : wa(s, h) : (H._visibility |= 2,
                Tl(s, h, y, w, i)),
                i && M & 2048 && bs(h.alternate, h);
                break;
            case 24:
                Tl(s, h, y, w, i),
                i && M & 2048 && xs(h.alternate, h);
                break;
            default:
                Tl(s, h, y, w, i)
            }
            t = t.sibling
        }
    }
    function wa(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var n = e
                  , l = t
                  , i = l.flags;
                switch (l.tag) {
                case 22:
                    wa(n, l),
                    i & 2048 && bs(l.alternate, l);
                    break;
                case 24:
                    wa(n, l),
                    i & 2048 && xs(l.alternate, l);
                    break;
                default:
                    wa(n, l)
                }
                t = t.sibling
            }
    }
    var _a = 8192;
    function Rl(e, t, n) {
        if (e.subtreeFlags & _a)
            for (e = e.child; e !== null; )
                zd(e, t, n),
                e = e.sibling
    }
    function zd(e, t, n) {
        switch (e.tag) {
        case 26:
            Rl(e, t, n),
            e.flags & _a && e.memoizedState !== null && ay(n, Lt, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Rl(e, t, n);
            break;
        case 3:
        case 4:
            var l = Lt;
            Lt = uu(e.stateNode.containerInfo),
            Rl(e, t, n),
            Lt = l;
            break;
        case 22:
            e.memoizedState === null && (l = e.alternate,
            l !== null && l.memoizedState !== null ? (l = _a,
            _a = 16777216,
            Rl(e, t, n),
            _a = l) : Rl(e, t, n));
            break;
        default:
            Rl(e, t, n)
        }
    }
    function Ld(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Ca(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    ke = l,
                    jd(l, e)
                }
            Ld(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Dd(e),
                e = e.sibling
    }
    function Dd(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Ca(e),
            e.flags & 2048 && wn(9, e, e.return);
            break;
        case 3:
            Ca(e);
            break;
        case 12:
            Ca(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            ki(e)) : Ca(e);
            break;
        default:
            Ca(e)
        }
    }
    function ki(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    ke = l,
                    jd(l, e)
                }
            Ld(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                wn(8, t, t.return),
                ki(t);
                break;
            case 22:
                n = t.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                ki(t));
                break;
            default:
                ki(t)
            }
            e = e.sibling
        }
    }
    function jd(e, t) {
        for (; ke !== null; ) {
            var n = ke;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                wn(8, n, t);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var l = n.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                sa(n.memoizedState.cache)
            }
            if (l = n.child,
            l !== null)
                l.return = n,
                ke = l;
            else
                e: for (n = e; ke !== null; ) {
                    l = ke;
                    var i = l.sibling
                      , s = l.return;
                    if (Cd(l),
                    l === n) {
                        ke = null;
                        break e
                    }
                    if (i !== null) {
                        i.return = s,
                        ke = i;
                        break e
                    }
                    ke = s
                }
        }
    }
    var b0 = {
        getCacheForType: function(e) {
            var t = We(Ge)
              , n = t.data.get(e);
            return n === void 0 && (n = e(),
            t.data.set(e, n)),
            n
        },
        cacheSignal: function() {
            return We(Ge).controller.signal
        }
    }
      , x0 = typeof WeakMap == "function" ? WeakMap : Map
      , Se = 0
      , Me = null
      , de = null
      , me = 0
      , Ae = 0
      , vt = null
      , _n = !1
      , Nl = !1
      , Ss = !1
      , an = 0
      , Ue = 0
      , Cn = 0
      , tl = 0
      , Es = 0
      , bt = 0
      , Ml = 0
      , Aa = null
      , ot = null
      , ws = !1
      , Ji = 0
      , Ud = 0
      , $i = 1 / 0
      , Fi = null
      , An = null
      , Xe = 0
      , On = null
      , zl = null
      , un = 0
      , _s = 0
      , Cs = null
      , Bd = null
      , Oa = 0
      , As = null;
    function xt() {
        return (Se & 2) !== 0 && me !== 0 ? me & -me : j.T !== null ? zs() : Io()
    }
    function Hd() {
        if (bt === 0)
            if ((me & 536870912) === 0 || ye) {
                var e = ai;
                ai <<= 1,
                (ai & 3932160) === 0 && (ai = 262144),
                bt = e
            } else
                bt = 536870912;
        return e = pt.current,
        e !== null && (e.flags |= 32),
        bt
    }
    function ct(e, t, n) {
        (e === Me && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) && (Ll(e, 0),
        Tn(e, me, bt, !1)),
        Jl(e, n),
        ((Se & 2) === 0 || e !== Me) && (e === Me && ((Se & 2) === 0 && (tl |= n),
        Ue === 4 && Tn(e, me, bt, !1)),
        qt(e))
    }
    function qd(e, t, n) {
        if ((Se & 6) !== 0)
            throw Error(o(327));
        var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || kl(e, t)
          , i = l ? w0(e, t) : Ts(e, t, !0)
          , s = l;
        do {
            if (i === 0) {
                Nl && !l && Tn(e, t, 0, !1);
                break
            } else {
                if (n = e.current.alternate,
                s && !S0(n)) {
                    i = Ts(e, t, !1),
                    s = !1;
                    continue
                }
                if (i === 2) {
                    if (s = t,
                    e.errorRecoveryDisabledLanes & s)
                        var h = 0;
                    else
                        h = e.pendingLanes & -536870913,
                        h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
                    if (h !== 0) {
                        t = h;
                        e: {
                            var y = e;
                            i = Aa;
                            var w = y.current.memoizedState.isDehydrated;
                            if (w && (Ll(y, h).flags |= 256),
                            h = Ts(y, h, !1),
                            h !== 2) {
                                if (Ss && !w) {
                                    y.errorRecoveryDisabledLanes |= s,
                                    tl |= s,
                                    i = 4;
                                    break e
                                }
                                s = ot,
                                ot = i,
                                s !== null && (ot === null ? ot = s : ot.push.apply(ot, s))
                            }
                            i = h
                        }
                        if (s = !1,
                        i !== 2)
                            continue
                    }
                }
                if (i === 1) {
                    Ll(e, 0),
                    Tn(e, t, 0, !0);
                    break
                }
                e: {
                    switch (l = e,
                    s = i,
                    s) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        Tn(l, t, bt, !_n);
                        break e;
                    case 2:
                        ot = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (i = Ji + 300 - ft(),
                    10 < i)) {
                        if (Tn(l, t, bt, !_n),
                        ui(l, 0, !0) !== 0)
                            break e;
                        un = t,
                        l.timeoutHandle = ph(Gd.bind(null, l, n, ot, Fi, ws, t, bt, tl, Ml, _n, s, "Throttled", -0, 0), i);
                        break e
                    }
                    Gd(l, n, ot, Fi, ws, t, bt, tl, Ml, _n, s, null, -0, 0)
                }
            }
            break
        } while (!0);
        qt(e)
    }
    function Gd(e, t, n, l, i, s, h, y, w, M, H, Y, z, D) {
        if (e.timeoutHandle = -1,
        Y = t.subtreeFlags,
        Y & 8192 || (Y & 16785408) === 16785408) {
            Y = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Xt
            },
            zd(t, s, Y);
            var F = (s & 62914560) === s ? Ji - ft() : (s & 4194048) === s ? Ud - ft() : 0;
            if (F = iy(Y, F),
            F !== null) {
                un = s,
                e.cancelPendingCommit = F(Jd.bind(null, e, t, s, n, l, i, h, y, w, H, Y, null, z, D)),
                Tn(e, s, h, !M);
                return
            }
        }
        Jd(e, t, s, n, l, i, h, y, w)
    }
    function S0(e) {
        for (var t = e; ; ) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var l = 0; l < n.length; l++) {
                    var i = n[l]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!mt(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Tn(e, t, n, l) {
        t &= ~Es,
        t &= ~tl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        l && (e.warmLanes |= t),
        l = e.expirationTimes;
        for (var i = t; 0 < i; ) {
            var s = 31 - ht(i)
              , h = 1 << s;
            l[s] = -1,
            i &= ~h
        }
        n !== 0 && $o(e, n, t)
    }
    function Wi() {
        return (Se & 6) === 0 ? (Ta(0),
        !1) : !0
    }
    function Os() {
        if (de !== null) {
            if (Ae === 0)
                var e = de.return;
            else
                e = de,
                Jt = Kn = null,
                Qr(e),
                wl = null,
                ca = 0,
                e = de;
            for (; e !== null; )
                yd(e.alternate, e),
                e = e.return;
            de = null
        }
    }
    function Ll(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1,
        Y0(n)),
        n = e.cancelPendingCommit,
        n !== null && (e.cancelPendingCommit = null,
        n()),
        un = 0,
        Os(),
        Me = e,
        de = n = Kt(e.current, null),
        me = t,
        Ae = 0,
        vt = null,
        _n = !1,
        Nl = kl(e, t),
        Ss = !1,
        Ml = bt = Es = tl = Cn = Ue = 0,
        ot = Aa = null,
        ws = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var l = e.entangledLanes;
        if (l !== 0)
            for (e = e.entanglements,
            l &= t; 0 < l; ) {
                var i = 31 - ht(l)
                  , s = 1 << i;
                t |= e[i],
                l &= ~s
            }
        return an = t,
        vi(),
        n
    }
    function Yd(e, t) {
        re = null,
        j.H = va,
        t === El || t === Ai ? (t = nf(),
        Ae = 3) : t === Mr ? (t = nf(),
        Ae = 4) : Ae = t === is ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        vt = t,
        de === null && (Ue = 1,
        Gi(e, _t(t, e.current)))
    }
    function Vd() {
        var e = pt.current;
        return e === null ? !0 : (me & 4194048) === me ? Tt === null : (me & 62914560) === me || (me & 536870912) !== 0 ? e === Tt : !1
    }
    function Qd() {
        var e = j.H;
        return j.H = va,
        e === null ? va : e
    }
    function Xd() {
        var e = j.A;
        return j.A = b0,
        e
    }
    function Ii() {
        Ue = 4,
        _n || (me & 4194048) !== me && pt.current !== null || (Nl = !0),
        (Cn & 134217727) === 0 && (tl & 134217727) === 0 || Me === null || Tn(Me, me, bt, !1)
    }
    function Ts(e, t, n) {
        var l = Se;
        Se |= 2;
        var i = Qd()
          , s = Xd();
        (Me !== e || me !== t) && (Fi = null,
        Ll(e, t)),
        t = !1;
        var h = Ue;
        e: do
            try {
                if (Ae !== 0 && de !== null) {
                    var y = de
                      , w = vt;
                    switch (Ae) {
                    case 8:
                        Os(),
                        h = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        pt.current === null && (t = !0);
                        var M = Ae;
                        if (Ae = 0,
                        vt = null,
                        Dl(e, y, w, M),
                        n && Nl) {
                            h = 0;
                            break e
                        }
                        break;
                    default:
                        M = Ae,
                        Ae = 0,
                        vt = null,
                        Dl(e, y, w, M)
                    }
                }
                E0(),
                h = Ue;
                break
            } catch (H) {
                Yd(e, H)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Jt = Kn = null,
        Se = l,
        j.H = i,
        j.A = s,
        de === null && (Me = null,
        me = 0,
        vi()),
        h
    }
    function E0() {
        for (; de !== null; )
            Zd(de)
    }
    function w0(e, t) {
        var n = Se;
        Se |= 2;
        var l = Qd()
          , i = Xd();
        Me !== e || me !== t ? (Fi = null,
        $i = ft() + 500,
        Ll(e, t)) : Nl = kl(e, t);
        e: do
            try {
                if (Ae !== 0 && de !== null) {
                    t = de;
                    var s = vt;
                    t: switch (Ae) {
                    case 1:
                        Ae = 0,
                        vt = null,
                        Dl(e, t, s, 1);
                        break;
                    case 2:
                    case 9:
                        if (ef(s)) {
                            Ae = 0,
                            vt = null,
                            Kd(t);
                            break
                        }
                        t = function() {
                            Ae !== 2 && Ae !== 9 || Me !== e || (Ae = 7),
                            qt(e)
                        }
                        ,
                        s.then(t, t);
                        break e;
                    case 3:
                        Ae = 7;
                        break e;
                    case 4:
                        Ae = 5;
                        break e;
                    case 7:
                        ef(s) ? (Ae = 0,
                        vt = null,
                        Kd(t)) : (Ae = 0,
                        vt = null,
                        Dl(e, t, s, 7));
                        break;
                    case 5:
                        var h = null;
                        switch (de.tag) {
                        case 26:
                            h = de.memoizedState;
                        case 5:
                        case 27:
                            var y = de;
                            if (h ? Mh(h) : y.stateNode.complete) {
                                Ae = 0,
                                vt = null;
                                var w = y.sibling;
                                if (w !== null)
                                    de = w;
                                else {
                                    var M = y.return;
                                    M !== null ? (de = M,
                                    Pi(M)) : de = null
                                }
                                break t
                            }
                        }
                        Ae = 0,
                        vt = null,
                        Dl(e, t, s, 5);
                        break;
                    case 6:
                        Ae = 0,
                        vt = null,
                        Dl(e, t, s, 6);
                        break;
                    case 8:
                        Os(),
                        Ue = 6;
                        break e;
                    default:
                        throw Error(o(462))
                    }
                }
                _0();
                break
            } catch (H) {
                Yd(e, H)
            }
        while (!0);
        return Jt = Kn = null,
        j.H = l,
        j.A = i,
        Se = n,
        de !== null ? 0 : (Me = null,
        me = 0,
        vi(),
        Ue)
    }
    function _0() {
        for (; de !== null && !kg(); )
            Zd(de)
    }
    function Zd(e) {
        var t = gd(e.alternate, e, an);
        e.memoizedProps = e.pendingProps,
        t === null ? Pi(e) : de = t
    }
    function Kd(e) {
        var t = e
          , n = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = od(n, t, t.pendingProps, t.type, void 0, me);
            break;
        case 11:
            t = od(n, t, t.pendingProps, t.type.render, t.ref, me);
            break;
        case 5:
            Qr(t);
        default:
            yd(n, t),
            t = de = Qc(t, an),
            t = gd(n, t, an)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? Pi(e) : de = t
    }
    function Dl(e, t, n, l) {
        Jt = Kn = null,
        Qr(t),
        wl = null,
        ca = 0;
        var i = t.return;
        try {
            if (d0(e, i, t, n, me)) {
                Ue = 1,
                Gi(e, _t(n, e.current)),
                de = null;
                return
            }
        } catch (s) {
            if (i !== null)
                throw de = i,
                s;
            Ue = 1,
            Gi(e, _t(n, e.current)),
            de = null;
            return
        }
        t.flags & 32768 ? (ye || l === 1 ? e = !0 : Nl || (me & 536870912) !== 0 ? e = !1 : (_n = e = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = pt.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        kd(t, e)) : Pi(t)
    }
    function Pi(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                kd(t, _n);
                return
            }
            e = t.return;
            var n = g0(t.alternate, t, an);
            if (n !== null) {
                de = n;
                return
            }
            if (t = t.sibling,
            t !== null) {
                de = t;
                return
            }
            de = t = e
        } while (t !== null);
        Ue === 0 && (Ue = 5)
    }
    function kd(e, t) {
        do {
            var n = p0(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767,
                de = n;
                return
            }
            if (n = e.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                de = e;
                return
            }
            de = e = n
        } while (e !== null);
        Ue = 6,
        de = null
    }
    function Jd(e, t, n, l, i, s, h, y, w) {
        e.cancelPendingCommit = null;
        do
            eu();
        while (Xe !== 0);
        if ((Se & 6) !== 0)
            throw Error(o(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(o(177));
            if (s = t.lanes | t.childLanes,
            s |= pr,
            lp(e, n, s, h, y, w),
            e === Me && (de = Me = null,
            me = 0),
            zl = t,
            On = e,
            un = n,
            _s = s,
            Cs = i,
            Bd = l,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            T0(ni, function() {
                return Pd(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            l = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || l) {
                l = j.T,
                j.T = null,
                i = X.p,
                X.p = 2,
                h = Se,
                Se |= 4;
                try {
                    y0(e, t, n)
                } finally {
                    Se = h,
                    X.p = i,
                    j.T = l
                }
            }
            Xe = 1,
            $d(),
            Fd(),
            Wd()
        }
    }
    function $d() {
        if (Xe === 1) {
            Xe = 0;
            var e = On
              , t = zl
              , n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                n = j.T,
                j.T = null;
                var l = X.p;
                X.p = 2;
                var i = Se;
                Se |= 4;
                try {
                    Rd(t, e);
                    var s = Gs
                      , h = Dc(e.containerInfo)
                      , y = s.focusedElem
                      , w = s.selectionRange;
                    if (h !== y && y && y.ownerDocument && Lc(y.ownerDocument.documentElement, y)) {
                        if (w !== null && fr(y)) {
                            var M = w.start
                              , H = w.end;
                            if (H === void 0 && (H = M),
                            "selectionStart"in y)
                                y.selectionStart = M,
                                y.selectionEnd = Math.min(H, y.value.length);
                            else {
                                var Y = y.ownerDocument || document
                                  , z = Y && Y.defaultView || window;
                                if (z.getSelection) {
                                    var D = z.getSelection()
                                      , F = y.textContent.length
                                      , ne = Math.min(w.start, F)
                                      , Ne = w.end === void 0 ? ne : Math.min(w.end, F);
                                    !D.extend && ne > Ne && (h = Ne,
                                    Ne = ne,
                                    ne = h);
                                    var T = zc(y, ne)
                                      , A = zc(y, Ne);
                                    if (T && A && (D.rangeCount !== 1 || D.anchorNode !== T.node || D.anchorOffset !== T.offset || D.focusNode !== A.node || D.focusOffset !== A.offset)) {
                                        var N = Y.createRange();
                                        N.setStart(T.node, T.offset),
                                        D.removeAllRanges(),
                                        ne > Ne ? (D.addRange(N),
                                        D.extend(A.node, A.offset)) : (N.setEnd(A.node, A.offset),
                                        D.addRange(N))
                                    }
                                }
                            }
                        }
                        for (Y = [],
                        D = y; D = D.parentNode; )
                            D.nodeType === 1 && Y.push({
                                element: D,
                                left: D.scrollLeft,
                                top: D.scrollTop
                            });
                        for (typeof y.focus == "function" && y.focus(),
                        y = 0; y < Y.length; y++) {
                            var G = Y[y];
                            G.element.scrollLeft = G.left,
                            G.element.scrollTop = G.top
                        }
                    }
                    du = !!qs,
                    Gs = qs = null
                } finally {
                    Se = i,
                    X.p = l,
                    j.T = n
                }
            }
            e.current = t,
            Xe = 2
        }
    }
    function Fd() {
        if (Xe === 2) {
            Xe = 0;
            var e = On
              , t = zl
              , n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                n = j.T,
                j.T = null;
                var l = X.p;
                X.p = 2;
                var i = Se;
                Se |= 4;
                try {
                    _d(e, t.alternate, t)
                } finally {
                    Se = i,
                    X.p = l,
                    j.T = n
                }
            }
            Xe = 3
        }
    }
    function Wd() {
        if (Xe === 4 || Xe === 3) {
            Xe = 0,
            Jg();
            var e = On
              , t = zl
              , n = un
              , l = Bd;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Xe = 5 : (Xe = 0,
            zl = On = null,
            Id(e, e.pendingLanes));
            var i = e.pendingLanes;
            if (i === 0 && (An = null),
            Ku(n),
            t = t.stateNode,
            dt && typeof dt.onCommitFiberRoot == "function")
                try {
                    dt.onCommitFiberRoot(Kl, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                t = j.T,
                i = X.p,
                X.p = 2,
                j.T = null;
                try {
                    for (var s = e.onRecoverableError, h = 0; h < l.length; h++) {
                        var y = l[h];
                        s(y.value, {
                            componentStack: y.stack
                        })
                    }
                } finally {
                    j.T = t,
                    X.p = i
                }
            }
            (un & 3) !== 0 && eu(),
            qt(e),
            i = e.pendingLanes,
            (n & 261930) !== 0 && (i & 42) !== 0 ? e === As ? Oa++ : (Oa = 0,
            As = e) : Oa = 0,
            Ta(0)
        }
    }
    function Id(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        sa(t)))
    }
    function eu() {
        return $d(),
        Fd(),
        Wd(),
        Pd()
    }
    function Pd() {
        if (Xe !== 5)
            return !1;
        var e = On
          , t = _s;
        _s = 0;
        var n = Ku(un)
          , l = j.T
          , i = X.p;
        try {
            X.p = 32 > n ? 32 : n,
            j.T = null,
            n = Cs,
            Cs = null;
            var s = On
              , h = un;
            if (Xe = 0,
            zl = On = null,
            un = 0,
            (Se & 6) !== 0)
                throw Error(o(331));
            var y = Se;
            if (Se |= 4,
            Dd(s.current),
            Md(s, s.current, h, n),
            Se = y,
            Ta(0, !1),
            dt && typeof dt.onPostCommitFiberRoot == "function")
                try {
                    dt.onPostCommitFiberRoot(Kl, s)
                } catch {}
            return !0
        } finally {
            X.p = i,
            j.T = l,
            Id(e, t)
        }
    }
    function eh(e, t, n) {
        t = _t(n, t),
        t = as(e.stateNode, t, 2),
        e = xn(e, t, 2),
        e !== null && (Jl(e, 2),
        qt(e))
    }
    function Oe(e, t, n) {
        if (e.tag === 3)
            eh(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    eh(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var l = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (An === null || !An.has(l))) {
                        e = _t(n, e),
                        n = td(2),
                        l = xn(t, n, 2),
                        l !== null && (nd(n, l, t, e),
                        Jl(l, 2),
                        qt(l));
                        break
                    }
                }
                t = t.return
            }
    }
    function Rs(e, t, n) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new x0;
            var i = new Set;
            l.set(t, i)
        } else
            i = l.get(t),
            i === void 0 && (i = new Set,
            l.set(t, i));
        i.has(n) || (Ss = !0,
        i.add(n),
        e = C0.bind(null, e, t, n),
        t.then(e, e))
    }
    function C0(e, t, n) {
        var l = e.pingCache;
        l !== null && l.delete(t),
        e.pingedLanes |= e.suspendedLanes & n,
        e.warmLanes &= ~n,
        Me === e && (me & n) === n && (Ue === 4 || Ue === 3 && (me & 62914560) === me && 300 > ft() - Ji ? (Se & 2) === 0 && Ll(e, 0) : Es |= n,
        Ml === me && (Ml = 0)),
        qt(e)
    }
    function th(e, t) {
        t === 0 && (t = Jo()),
        e = Qn(e, t),
        e !== null && (Jl(e, t),
        qt(e))
    }
    function A0(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        th(e, n)
    }
    function O0(e, t) {
        var n = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var l = e.stateNode
              , i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            l = e.stateNode;
            break;
        case 22:
            l = e.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        l !== null && l.delete(t),
        th(e, n)
    }
    function T0(e, t) {
        return Vu(e, t)
    }
    var tu = null
      , jl = null
      , Ns = !1
      , nu = !1
      , Ms = !1
      , Rn = 0;
    function qt(e) {
        e !== jl && e.next === null && (jl === null ? tu = jl = e : jl = jl.next = e),
        nu = !0,
        Ns || (Ns = !0,
        N0())
    }
    function Ta(e, t) {
        if (!Ms && nu) {
            Ms = !0;
            do
                for (var n = !1, l = tu; l !== null; ) {
                    if (e !== 0) {
                        var i = l.pendingLanes;
                        if (i === 0)
                            var s = 0;
                        else {
                            var h = l.suspendedLanes
                              , y = l.pingedLanes;
                            s = (1 << 31 - ht(42 | e) + 1) - 1,
                            s &= i & ~(h & ~y),
                            s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0
                        }
                        s !== 0 && (n = !0,
                        ih(l, s))
                    } else
                        s = me,
                        s = ui(l, l === Me ? s : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (s & 3) === 0 || kl(l, s) || (n = !0,
                        ih(l, s));
                    l = l.next
                }
            while (n);
            Ms = !1
        }
    }
    function R0() {
        nh()
    }
    function nh() {
        nu = Ns = !1;
        var e = 0;
        Rn !== 0 && G0() && (e = Rn);
        for (var t = ft(), n = null, l = tu; l !== null; ) {
            var i = l.next
              , s = lh(l, t);
            s === 0 ? (l.next = null,
            n === null ? tu = i : n.next = i,
            i === null && (jl = n)) : (n = l,
            (e !== 0 || (s & 3) !== 0) && (nu = !0)),
            l = i
        }
        Xe !== 0 && Xe !== 5 || Ta(e),
        Rn !== 0 && (Rn = 0)
    }
    function lh(e, t) {
        for (var n = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
            var h = 31 - ht(s)
              , y = 1 << h
              , w = i[h];
            w === -1 ? ((y & n) === 0 || (y & l) !== 0) && (i[h] = np(y, t)) : w <= t && (e.expiredLanes |= y),
            s &= ~y
        }
        if (t = Me,
        n = me,
        n = ui(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        l = e.callbackNode,
        n === 0 || e === t && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null)
            return l !== null && l !== null && Qu(l),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((n & 3) === 0 || kl(e, n)) {
            if (t = n & -n,
            t === e.callbackPriority)
                return t;
            switch (l !== null && Qu(l),
            Ku(n)) {
            case 2:
            case 8:
                n = Ko;
                break;
            case 32:
                n = ni;
                break;
            case 268435456:
                n = ko;
                break;
            default:
                n = ni
            }
            return l = ah.bind(null, e),
            n = Vu(n, l),
            e.callbackPriority = t,
            e.callbackNode = n,
            t
        }
        return l !== null && l !== null && Qu(l),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function ah(e, t) {
        if (Xe !== 0 && Xe !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var n = e.callbackNode;
        if (eu() && e.callbackNode !== n)
            return null;
        var l = me;
        return l = ui(e, e === Me ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        l === 0 ? null : (qd(e, l, t),
        lh(e, ft()),
        e.callbackNode != null && e.callbackNode === n ? ah.bind(null, e) : null)
    }
    function ih(e, t) {
        if (eu())
            return null;
        qd(e, t, !0)
    }
    function N0() {
        V0(function() {
            (Se & 6) !== 0 ? Vu(Zo, R0) : nh()
        })
    }
    function zs() {
        if (Rn === 0) {
            var e = xl;
            e === 0 && (e = li,
            li <<= 1,
            (li & 261888) === 0 && (li = 256)),
            Rn = e
        }
        return Rn
    }
    function uh(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ci("" + e)
    }
    function rh(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name,
        n.value = t.value,
        e.id && n.setAttribute("form", e.id),
        t.parentNode.insertBefore(n, t),
        e = new FormData(e),
        n.parentNode.removeChild(n),
        e
    }
    function M0(e, t, n, l, i) {
        if (t === "submit" && n && n.stateNode === i) {
            var s = uh((i[at] || null).action)
              , h = l.submitter;
            h && (t = (t = h[at] || null) ? uh(t.formAction) : h.getAttribute("formAction"),
            t !== null && (s = t,
            h = null));
            var y = new mi("action","action",null,l,i);
            e.push({
                event: y,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Rn !== 0) {
                                var w = h ? rh(i, h) : new FormData(i);
                                Ir(n, {
                                    pending: !0,
                                    data: w,
                                    method: i.method,
                                    action: s
                                }, null, w)
                            }
                        } else
                            typeof s == "function" && (y.preventDefault(),
                            w = h ? rh(i, h) : new FormData(i),
                            Ir(n, {
                                pending: !0,
                                data: w,
                                method: i.method,
                                action: s
                            }, s, w))
                    },
                    currentTarget: i
                }]
            })
        }
    }
    for (var Ls = 0; Ls < gr.length; Ls++) {
        var Ds = gr[Ls]
          , z0 = Ds.toLowerCase()
          , L0 = Ds[0].toUpperCase() + Ds.slice(1);
        zt(z0, "on" + L0)
    }
    zt(Bc, "onAnimationEnd"),
    zt(Hc, "onAnimationIteration"),
    zt(qc, "onAnimationStart"),
    zt("dblclick", "onDoubleClick"),
    zt("focusin", "onFocus"),
    zt("focusout", "onBlur"),
    zt($p, "onTransitionRun"),
    zt(Fp, "onTransitionStart"),
    zt(Wp, "onTransitionCancel"),
    zt(Gc, "onTransitionEnd"),
    ul("onMouseEnter", ["mouseout", "mouseover"]),
    ul("onMouseLeave", ["mouseout", "mouseover"]),
    ul("onPointerEnter", ["pointerout", "pointerover"]),
    ul("onPointerLeave", ["pointerout", "pointerover"]),
    qn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    qn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    qn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    qn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    qn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ra = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , D0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ra));
    function sh(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var l = e[n]
              , i = l.event;
            l = l.listeners;
            e: {
                var s = void 0;
                if (t)
                    for (var h = l.length - 1; 0 <= h; h--) {
                        var y = l[h]
                          , w = y.instance
                          , M = y.currentTarget;
                        if (y = y.listener,
                        w !== s && i.isPropagationStopped())
                            break e;
                        s = y,
                        i.currentTarget = M;
                        try {
                            s(i)
                        } catch (H) {
                            yi(H)
                        }
                        i.currentTarget = null,
                        s = w
                    }
                else
                    for (h = 0; h < l.length; h++) {
                        if (y = l[h],
                        w = y.instance,
                        M = y.currentTarget,
                        y = y.listener,
                        w !== s && i.isPropagationStopped())
                            break e;
                        s = y,
                        i.currentTarget = M;
                        try {
                            s(i)
                        } catch (H) {
                            yi(H)
                        }
                        i.currentTarget = null,
                        s = w
                    }
            }
        }
    }
    function he(e, t) {
        var n = t[ku];
        n === void 0 && (n = t[ku] = new Set);
        var l = e + "__bubble";
        n.has(l) || (oh(t, e, 2, !1),
        n.add(l))
    }
    function js(e, t, n) {
        var l = 0;
        t && (l |= 4),
        oh(n, e, l, t)
    }
    var lu = "_reactListening" + Math.random().toString(36).slice(2);
    function Us(e) {
        if (!e[lu]) {
            e[lu] = !0,
            tc.forEach(function(n) {
                n !== "selectionchange" && (D0.has(n) || js(n, !1, e),
                js(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[lu] || (t[lu] = !0,
            js("selectionchange", !1, t))
        }
    }
    function oh(e, t, n, l) {
        switch (Hh(t)) {
        case 2:
            var i = sy;
            break;
        case 8:
            i = oy;
            break;
        default:
            i = Ws
        }
        n = i.bind(null, t, n, e),
        i = void 0,
        !nr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
        l ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
            passive: i
        }) : e.addEventListener(t, n, !1)
    }
    function Bs(e, t, n, l, i) {
        var s = l;
        if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var h = l.tag;
                if (h === 3 || h === 4) {
                    var y = l.stateNode.containerInfo;
                    if (y === i)
                        break;
                    if (h === 4)
                        for (h = l.return; h !== null; ) {
                            var w = h.tag;
                            if ((w === 3 || w === 4) && h.stateNode.containerInfo === i)
                                return;
                            h = h.return
                        }
                    for (; y !== null; ) {
                        if (h = ll(y),
                        h === null)
                            return;
                        if (w = h.tag,
                        w === 5 || w === 6 || w === 26 || w === 27) {
                            l = s = h;
                            continue e
                        }
                        y = y.parentNode
                    }
                }
                l = l.return
            }
        hc(function() {
            var M = s
              , H = er(n)
              , Y = [];
            e: {
                var z = Yc.get(e);
                if (z !== void 0) {
                    var D = mi
                      , F = e;
                    switch (e) {
                    case "keypress":
                        if (di(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        D = Op;
                        break;
                    case "focusin":
                        F = "focus",
                        D = ur;
                        break;
                    case "focusout":
                        F = "blur",
                        D = ur;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        D = ur;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        D = pc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        D = gp;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        D = Np;
                        break;
                    case Bc:
                    case Hc:
                    case qc:
                        D = vp;
                        break;
                    case Gc:
                        D = zp;
                        break;
                    case "scroll":
                    case "scrollend":
                        D = hp;
                        break;
                    case "wheel":
                        D = Dp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        D = xp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        D = vc;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        D = Up
                    }
                    var ne = (t & 4) !== 0
                      , Ne = !ne && (e === "scroll" || e === "scrollend")
                      , T = ne ? z !== null ? z + "Capture" : null : z;
                    ne = [];
                    for (var A = M, N; A !== null; ) {
                        var G = A;
                        if (N = G.stateNode,
                        G = G.tag,
                        G !== 5 && G !== 26 && G !== 27 || N === null || T === null || (G = Wl(A, T),
                        G != null && ne.push(Na(A, G, N))),
                        Ne)
                            break;
                        A = A.return
                    }
                    0 < ne.length && (z = new D(z,F,null,n,H),
                    Y.push({
                        event: z,
                        listeners: ne
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (z = e === "mouseover" || e === "pointerover",
                    D = e === "mouseout" || e === "pointerout",
                    z && n !== Pu && (F = n.relatedTarget || n.fromElement) && (ll(F) || F[nl]))
                        break e;
                    if ((D || z) && (z = H.window === H ? H : (z = H.ownerDocument) ? z.defaultView || z.parentWindow : window,
                    D ? (F = n.relatedTarget || n.toElement,
                    D = M,
                    F = F ? ll(F) : null,
                    F !== null && (Ne = f(F),
                    ne = F.tag,
                    F !== Ne || ne !== 5 && ne !== 27 && ne !== 6) && (F = null)) : (D = null,
                    F = M),
                    D !== F)) {
                        if (ne = pc,
                        G = "onMouseLeave",
                        T = "onMouseEnter",
                        A = "mouse",
                        (e === "pointerout" || e === "pointerover") && (ne = vc,
                        G = "onPointerLeave",
                        T = "onPointerEnter",
                        A = "pointer"),
                        Ne = D == null ? z : Fl(D),
                        N = F == null ? z : Fl(F),
                        z = new ne(G,A + "leave",D,n,H),
                        z.target = Ne,
                        z.relatedTarget = N,
                        G = null,
                        ll(H) === M && (ne = new ne(T,A + "enter",F,n,H),
                        ne.target = N,
                        ne.relatedTarget = Ne,
                        G = ne),
                        Ne = G,
                        D && F)
                            t: {
                                for (ne = j0,
                                T = D,
                                A = F,
                                N = 0,
                                G = T; G; G = ne(G))
                                    N++;
                                G = 0;
                                for (var ee = A; ee; ee = ne(ee))
                                    G++;
                                for (; 0 < N - G; )
                                    T = ne(T),
                                    N--;
                                for (; 0 < G - N; )
                                    A = ne(A),
                                    G--;
                                for (; N--; ) {
                                    if (T === A || A !== null && T === A.alternate) {
                                        ne = T;
                                        break t
                                    }
                                    T = ne(T),
                                    A = ne(A)
                                }
                                ne = null
                            }
                        else
                            ne = null;
                        D !== null && ch(Y, z, D, ne, !1),
                        F !== null && Ne !== null && ch(Y, Ne, F, ne, !0)
                    }
                }
                e: {
                    if (z = M ? Fl(M) : window,
                    D = z.nodeName && z.nodeName.toLowerCase(),
                    D === "select" || D === "input" && z.type === "file")
                        var be = Ac;
                    else if (_c(z))
                        if (Oc)
                            be = Kp;
                        else {
                            be = Xp;
                            var P = Qp
                        }
                    else
                        D = z.nodeName,
                        !D || D.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? M && Iu(M.elementType) && (be = Ac) : be = Zp;
                    if (be && (be = be(e, M))) {
                        Cc(Y, be, n, H);
                        break e
                    }
                    P && P(e, z, M),
                    e === "focusout" && M && z.type === "number" && M.memoizedProps.value != null && Wu(z, "number", z.value)
                }
                switch (P = M ? Fl(M) : window,
                e) {
                case "focusin":
                    (_c(P) || P.contentEditable === "true") && (dl = P,
                    dr = M,
                    ia = null);
                    break;
                case "focusout":
                    ia = dr = dl = null;
                    break;
                case "mousedown":
                    hr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    hr = !1,
                    jc(Y, n, H);
                    break;
                case "selectionchange":
                    if (Jp)
                        break;
                case "keydown":
                case "keyup":
                    jc(Y, n, H)
                }
                var se;
                if (sr)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ge = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ge = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ge = "onCompositionUpdate";
                            break e
                        }
                        ge = void 0
                    }
                else
                    fl ? Ec(e, n) && (ge = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ge = "onCompositionStart");
                ge && (bc && n.locale !== "ko" && (fl || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && fl && (se = mc()) : (hn = H,
                lr = "value"in hn ? hn.value : hn.textContent,
                fl = !0)),
                P = au(M, ge),
                0 < P.length && (ge = new yc(ge,e,null,n,H),
                Y.push({
                    event: ge,
                    listeners: P
                }),
                se ? ge.data = se : (se = wc(n),
                se !== null && (ge.data = se)))),
                (se = Hp ? qp(e, n) : Gp(e, n)) && (ge = au(M, "onBeforeInput"),
                0 < ge.length && (P = new yc("onBeforeInput","beforeinput",null,n,H),
                Y.push({
                    event: P,
                    listeners: ge
                }),
                P.data = se)),
                M0(Y, e, M, n, H)
            }
            sh(Y, t)
        })
    }
    function Na(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function au(e, t) {
        for (var n = t + "Capture", l = []; e !== null; ) {
            var i = e
              , s = i.stateNode;
            if (i = i.tag,
            i !== 5 && i !== 26 && i !== 27 || s === null || (i = Wl(e, n),
            i != null && l.unshift(Na(e, i, s)),
            i = Wl(e, t),
            i != null && l.push(Na(e, i, s))),
            e.tag === 3)
                return l;
            e = e.return
        }
        return []
    }
    function j0(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function ch(e, t, n, l, i) {
        for (var s = t._reactName, h = []; n !== null && n !== l; ) {
            var y = n
              , w = y.alternate
              , M = y.stateNode;
            if (y = y.tag,
            w !== null && w === l)
                break;
            y !== 5 && y !== 26 && y !== 27 || M === null || (w = M,
            i ? (M = Wl(n, s),
            M != null && h.unshift(Na(n, M, w))) : i || (M = Wl(n, s),
            M != null && h.push(Na(n, M, w)))),
            n = n.return
        }
        h.length !== 0 && e.push({
            event: t,
            listeners: h
        })
    }
    var U0 = /\r\n?/g
      , B0 = /\u0000|\uFFFD/g;
    function fh(e) {
        return (typeof e == "string" ? e : "" + e).replace(U0, `
`).replace(B0, "")
    }
    function dh(e, t) {
        return t = fh(t),
        fh(e) === t
    }
    function Re(e, t, n, l, i, s) {
        switch (n) {
        case "children":
            typeof l == "string" ? t === "body" || t === "textarea" && l === "" || sl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && sl(e, "" + l);
            break;
        case "className":
            si(e, "class", l);
            break;
        case "tabIndex":
            si(e, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            si(e, n, l);
            break;
        case "style":
            fc(e, l, s);
            break;
        case "data":
            if (t !== "object") {
                si(e, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (t !== "a" || n !== "href")) {
                e.removeAttribute(n);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                e.removeAttribute(n);
                break
            }
            l = ci("" + l),
            e.setAttribute(n, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof s == "function" && (n === "formAction" ? (t !== "input" && Re(e, t, "name", i.name, i, null),
                Re(e, t, "formEncType", i.formEncType, i, null),
                Re(e, t, "formMethod", i.formMethod, i, null),
                Re(e, t, "formTarget", i.formTarget, i, null)) : (Re(e, t, "encType", i.encType, i, null),
                Re(e, t, "method", i.method, i, null),
                Re(e, t, "target", i.target, i, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                e.removeAttribute(n);
                break
            }
            l = ci("" + l),
            e.setAttribute(n, l);
            break;
        case "onClick":
            l != null && (e.onclick = Xt);
            break;
        case "onScroll":
            l != null && he("scroll", e);
            break;
        case "onScrollEnd":
            l != null && he("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(o(61));
                if (n = l.__html,
                n != null) {
                    if (i.children != null)
                        throw Error(o(60));
                    e.innerHTML = n
                }
            }
            break;
        case "multiple":
            e.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            e.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            n = ci("" + l),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
            break;
        case "capture":
        case "download":
            l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
            break;
        case "popover":
            he("beforetoggle", e),
            he("toggle", e),
            ri(e, "popover", l);
            break;
        case "xlinkActuate":
            Qt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            Qt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            Qt(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            Qt(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            Qt(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            Qt(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            ri(e, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = fp.get(n) || n,
            ri(e, n, l))
        }
    }
    function Hs(e, t, n, l, i, s) {
        switch (n) {
        case "style":
            fc(e, l, s);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(o(61));
                if (n = l.__html,
                n != null) {
                    if (i.children != null)
                        throw Error(o(60));
                    e.innerHTML = n
                }
            }
            break;
        case "children":
            typeof l == "string" ? sl(e, l) : (typeof l == "number" || typeof l == "bigint") && sl(e, "" + l);
            break;
        case "onScroll":
            l != null && he("scroll", e);
            break;
        case "onScrollEnd":
            l != null && he("scrollend", e);
            break;
        case "onClick":
            l != null && (e.onclick = Xt);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!nc.hasOwnProperty(n))
                e: {
                    if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"),
                    t = n.slice(2, i ? n.length - 7 : void 0),
                    s = e[at] || null,
                    s = s != null ? s[n] : null,
                    typeof s == "function" && e.removeEventListener(t, s, i),
                    typeof l == "function")) {
                        typeof s != "function" && s !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                        e.addEventListener(t, l, i);
                        break e
                    }
                    n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : ri(e, n, l)
                }
        }
    }
    function Pe(e, t, n) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            he("error", e),
            he("load", e);
            var l = !1, i = !1, s;
            for (s in n)
                if (n.hasOwnProperty(s)) {
                    var h = n[s];
                    if (h != null)
                        switch (s) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            i = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            Re(e, t, s, h, n, null)
                        }
                }
            i && Re(e, t, "srcSet", n.srcSet, n, null),
            l && Re(e, t, "src", n.src, n, null);
            return;
        case "input":
            he("invalid", e);
            var y = s = h = i = null
              , w = null
              , M = null;
            for (l in n)
                if (n.hasOwnProperty(l)) {
                    var H = n[l];
                    if (H != null)
                        switch (l) {
                        case "name":
                            i = H;
                            break;
                        case "type":
                            h = H;
                            break;
                        case "checked":
                            w = H;
                            break;
                        case "defaultChecked":
                            M = H;
                            break;
                        case "value":
                            s = H;
                            break;
                        case "defaultValue":
                            y = H;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (H != null)
                                throw Error(o(137, t));
                            break;
                        default:
                            Re(e, t, l, H, n, null)
                        }
                }
            rc(e, s, y, w, M, h, i, !1);
            return;
        case "select":
            he("invalid", e),
            l = h = s = null;
            for (i in n)
                if (n.hasOwnProperty(i) && (y = n[i],
                y != null))
                    switch (i) {
                    case "value":
                        s = y;
                        break;
                    case "defaultValue":
                        h = y;
                        break;
                    case "multiple":
                        l = y;
                    default:
                        Re(e, t, i, y, n, null)
                    }
            t = s,
            n = h,
            e.multiple = !!l,
            t != null ? rl(e, !!l, t, !1) : n != null && rl(e, !!l, n, !0);
            return;
        case "textarea":
            he("invalid", e),
            s = i = l = null;
            for (h in n)
                if (n.hasOwnProperty(h) && (y = n[h],
                y != null))
                    switch (h) {
                    case "value":
                        l = y;
                        break;
                    case "defaultValue":
                        i = y;
                        break;
                    case "children":
                        s = y;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (y != null)
                            throw Error(o(91));
                        break;
                    default:
                        Re(e, t, h, y, n, null)
                    }
            oc(e, l, i, s);
            return;
        case "option":
            for (w in n)
                n.hasOwnProperty(w) && (l = n[w],
                l != null) && (w === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Re(e, t, w, l, n, null));
            return;
        case "dialog":
            he("beforetoggle", e),
            he("toggle", e),
            he("cancel", e),
            he("close", e);
            break;
        case "iframe":
        case "object":
            he("load", e);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Ra.length; l++)
                he(Ra[l], e);
            break;
        case "image":
            he("error", e),
            he("load", e);
            break;
        case "details":
            he("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            he("error", e),
            he("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (M in n)
                if (n.hasOwnProperty(M) && (l = n[M],
                l != null))
                    switch (M) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                    default:
                        Re(e, t, M, l, n, null)
                    }
            return;
        default:
            if (Iu(t)) {
                for (H in n)
                    n.hasOwnProperty(H) && (l = n[H],
                    l !== void 0 && Hs(e, t, H, l, n, void 0));
                return
            }
        }
        for (y in n)
            n.hasOwnProperty(y) && (l = n[y],
            l != null && Re(e, t, y, l, n, null))
    }
    function H0(e, t, n, l) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var i = null
              , s = null
              , h = null
              , y = null
              , w = null
              , M = null
              , H = null;
            for (D in n) {
                var Y = n[D];
                if (n.hasOwnProperty(D) && Y != null)
                    switch (D) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        w = Y;
                    default:
                        l.hasOwnProperty(D) || Re(e, t, D, null, l, Y)
                    }
            }
            for (var z in l) {
                var D = l[z];
                if (Y = n[z],
                l.hasOwnProperty(z) && (D != null || Y != null))
                    switch (z) {
                    case "type":
                        s = D;
                        break;
                    case "name":
                        i = D;
                        break;
                    case "checked":
                        M = D;
                        break;
                    case "defaultChecked":
                        H = D;
                        break;
                    case "value":
                        h = D;
                        break;
                    case "defaultValue":
                        y = D;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (D != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        D !== Y && Re(e, t, z, D, l, Y)
                    }
            }
            Fu(e, h, y, w, M, H, s, i);
            return;
        case "select":
            D = h = y = z = null;
            for (s in n)
                if (w = n[s],
                n.hasOwnProperty(s) && w != null)
                    switch (s) {
                    case "value":
                        break;
                    case "multiple":
                        D = w;
                    default:
                        l.hasOwnProperty(s) || Re(e, t, s, null, l, w)
                    }
            for (i in l)
                if (s = l[i],
                w = n[i],
                l.hasOwnProperty(i) && (s != null || w != null))
                    switch (i) {
                    case "value":
                        z = s;
                        break;
                    case "defaultValue":
                        y = s;
                        break;
                    case "multiple":
                        h = s;
                    default:
                        s !== w && Re(e, t, i, s, l, w)
                    }
            t = y,
            n = h,
            l = D,
            z != null ? rl(e, !!n, z, !1) : !!l != !!n && (t != null ? rl(e, !!n, t, !0) : rl(e, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            D = z = null;
            for (y in n)
                if (i = n[y],
                n.hasOwnProperty(y) && i != null && !l.hasOwnProperty(y))
                    switch (y) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Re(e, t, y, null, l, i)
                    }
            for (h in l)
                if (i = l[h],
                s = n[h],
                l.hasOwnProperty(h) && (i != null || s != null))
                    switch (h) {
                    case "value":
                        z = i;
                        break;
                    case "defaultValue":
                        D = i;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (i != null)
                            throw Error(o(91));
                        break;
                    default:
                        i !== s && Re(e, t, h, i, l, s)
                    }
            sc(e, z, D);
            return;
        case "option":
            for (var F in n)
                z = n[F],
                n.hasOwnProperty(F) && z != null && !l.hasOwnProperty(F) && (F === "selected" ? e.selected = !1 : Re(e, t, F, null, l, z));
            for (w in l)
                z = l[w],
                D = n[w],
                l.hasOwnProperty(w) && z !== D && (z != null || D != null) && (w === "selected" ? e.selected = z && typeof z != "function" && typeof z != "symbol" : Re(e, t, w, z, l, D));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var ne in n)
                z = n[ne],
                n.hasOwnProperty(ne) && z != null && !l.hasOwnProperty(ne) && Re(e, t, ne, null, l, z);
            for (M in l)
                if (z = l[M],
                D = n[M],
                l.hasOwnProperty(M) && z !== D && (z != null || D != null))
                    switch (M) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (z != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        Re(e, t, M, z, l, D)
                    }
            return;
        default:
            if (Iu(t)) {
                for (var Ne in n)
                    z = n[Ne],
                    n.hasOwnProperty(Ne) && z !== void 0 && !l.hasOwnProperty(Ne) && Hs(e, t, Ne, void 0, l, z);
                for (H in l)
                    z = l[H],
                    D = n[H],
                    !l.hasOwnProperty(H) || z === D || z === void 0 && D === void 0 || Hs(e, t, H, z, l, D);
                return
            }
        }
        for (var T in n)
            z = n[T],
            n.hasOwnProperty(T) && z != null && !l.hasOwnProperty(T) && Re(e, t, T, null, l, z);
        for (Y in l)
            z = l[Y],
            D = n[Y],
            !l.hasOwnProperty(Y) || z === D || z == null && D == null || Re(e, t, Y, z, l, D)
    }
    function hh(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function q0() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
                var i = n[l]
                  , s = i.transferSize
                  , h = i.initiatorType
                  , y = i.duration;
                if (s && y && hh(h)) {
                    for (h = 0,
                    y = i.responseEnd,
                    l += 1; l < n.length; l++) {
                        var w = n[l]
                          , M = w.startTime;
                        if (M > y)
                            break;
                        var H = w.transferSize
                          , Y = w.initiatorType;
                        H && hh(Y) && (w = w.responseEnd,
                        h += H * (w < y ? 1 : (y - M) / (w - M)))
                    }
                    if (--l,
                    t += 8 * (s + h) / (i.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var qs = null
      , Gs = null;
    function iu(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function mh(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function gh(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function Ys(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Vs = null;
    function G0() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Vs ? !1 : (Vs = e,
        !0) : (Vs = null,
        !1)
    }
    var ph = typeof setTimeout == "function" ? setTimeout : void 0
      , Y0 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , yh = typeof Promise == "function" ? Promise : void 0
      , V0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof yh < "u" ? function(e) {
        return yh.resolve(null).then(e).catch(Q0)
    }
    : ph;
    function Q0(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Nn(e) {
        return e === "head"
    }
    function vh(e, t) {
        var n = t
          , l = 0;
        do {
            var i = n.nextSibling;
            if (e.removeChild(n),
            i && i.nodeType === 8)
                if (n = i.data,
                n === "/$" || n === "/&") {
                    if (l === 0) {
                        e.removeChild(i),
                        ql(t);
                        return
                    }
                    l--
                } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
                    l++;
                else if (n === "html")
                    Ma(e.ownerDocument.documentElement);
                else if (n === "head") {
                    n = e.ownerDocument.head,
                    Ma(n);
                    for (var s = n.firstChild; s; ) {
                        var h = s.nextSibling
                          , y = s.nodeName;
                        s[$l] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s),
                        s = h
                    }
                } else
                    n === "body" && Ma(e.ownerDocument.body);
            n = i
        } while (n);
        ql(t)
    }
    function bh(e, t) {
        var n = e;
        e = 0;
        do {
            var l = n.nextSibling;
            if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display,
            n.style.display = "none") : (n.style.display = n._stashedDisplay || "",
            n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue,
            n.nodeValue = "") : n.nodeValue = n._stashedText || ""),
            l && l.nodeType === 8)
                if (n = l.data,
                n === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
            n = l
        } while (n)
    }
    function Qs(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Qs(n),
                Ju(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(n)
        }
    }
    function X0(e, t, n, l) {
        for (; e.nodeType === 1; ) {
            var i = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (l) {
                if (!e[$l])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (s = e.getAttribute("rel"),
                        s === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (s !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (s = e.getAttribute("src"),
                        (s !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var s = i.name == null ? null : "" + i.name;
                if (i.type === "hidden" && e.getAttribute("name") === s)
                    return e
            } else
                return e;
            if (e = Rt(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function Z0(e, t, n) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Rt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function xh(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Rt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Xs(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function Zs(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function K0(e, t) {
        var n = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || n.readyState !== "loading")
            t();
        else {
            var l = function() {
                t(),
                n.removeEventListener("DOMContentLoaded", l)
            };
            n.addEventListener("DOMContentLoaded", l),
            e._reactRetry = l
        }
    }
    function Rt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var Ks = null;
    function Sh(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$" || n === "/&") {
                    if (t === 0)
                        return Rt(e.nextSibling);
                    t--
                } else
                    n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function Eh(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n !== "/$" && n !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function wh(e, t, n) {
        switch (t = iu(n),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(o(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(o(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(o(454));
            return e;
        default:
            throw Error(o(451))
        }
    }
    function Ma(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        Ju(e)
    }
    var Nt = new Map
      , _h = new Set;
    function uu(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var rn = X.d;
    X.d = {
        f: k0,
        r: J0,
        D: $0,
        C: F0,
        L: W0,
        m: I0,
        X: ey,
        S: P0,
        M: ty
    };
    function k0() {
        var e = rn.f()
          , t = Wi();
        return e || t
    }
    function J0(e) {
        var t = al(e);
        t !== null && t.tag === 5 && t.type === "form" ? Yf(t) : rn.r(e)
    }
    var Ul = typeof document > "u" ? null : document;
    function Ch(e, t, n) {
        var l = Ul;
        if (l && typeof t == "string" && t) {
            var i = Et(t);
            i = 'link[rel="' + e + '"][href="' + i + '"]',
            typeof n == "string" && (i += '[crossorigin="' + n + '"]'),
            _h.has(i) || (_h.add(i),
            e = {
                rel: e,
                crossOrigin: n,
                href: t
            },
            l.querySelector(i) === null && (t = l.createElement("link"),
            Pe(t, "link", e),
            Ke(t),
            l.head.appendChild(t)))
        }
    }
    function $0(e) {
        rn.D(e),
        Ch("dns-prefetch", e, null)
    }
    function F0(e, t) {
        rn.C(e, t),
        Ch("preconnect", e, t)
    }
    function W0(e, t, n) {
        rn.L(e, t, n);
        var l = Ul;
        if (l && e && t) {
            var i = 'link[rel="preload"][as="' + Et(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Et(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (i += '[imagesizes="' + Et(n.imageSizes) + '"]')) : i += '[href="' + Et(e) + '"]';
            var s = i;
            switch (t) {
            case "style":
                s = Bl(e);
                break;
            case "script":
                s = Hl(e)
            }
            Nt.has(s) || (e = v({
                rel: "preload",
                href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n),
            Nt.set(s, e),
            l.querySelector(i) !== null || t === "style" && l.querySelector(za(s)) || t === "script" && l.querySelector(La(s)) || (t = l.createElement("link"),
            Pe(t, "link", e),
            Ke(t),
            l.head.appendChild(t)))
        }
    }
    function I0(e, t) {
        rn.m(e, t);
        var n = Ul;
        if (n && e) {
            var l = t && typeof t.as == "string" ? t.as : "script"
              , i = 'link[rel="modulepreload"][as="' + Et(l) + '"][href="' + Et(e) + '"]'
              , s = i;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                s = Hl(e)
            }
            if (!Nt.has(s) && (e = v({
                rel: "modulepreload",
                href: e
            }, t),
            Nt.set(s, e),
            n.querySelector(i) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(La(s)))
                        return
                }
                l = n.createElement("link"),
                Pe(l, "link", e),
                Ke(l),
                n.head.appendChild(l)
            }
        }
    }
    function P0(e, t, n) {
        rn.S(e, t, n);
        var l = Ul;
        if (l && e) {
            var i = il(l).hoistableStyles
              , s = Bl(e);
            t = t || "default";
            var h = i.get(s);
            if (!h) {
                var y = {
                    loading: 0,
                    preload: null
                };
                if (h = l.querySelector(za(s)))
                    y.loading = 5;
                else {
                    e = v({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, n),
                    (n = Nt.get(s)) && ks(e, n);
                    var w = h = l.createElement("link");
                    Ke(w),
                    Pe(w, "link", e),
                    w._p = new Promise(function(M, H) {
                        w.onload = M,
                        w.onerror = H
                    }
                    ),
                    w.addEventListener("load", function() {
                        y.loading |= 1
                    }),
                    w.addEventListener("error", function() {
                        y.loading |= 2
                    }),
                    y.loading |= 4,
                    ru(h, t, l)
                }
                h = {
                    type: "stylesheet",
                    instance: h,
                    count: 1,
                    state: y
                },
                i.set(s, h)
            }
        }
    }
    function ey(e, t) {
        rn.X(e, t);
        var n = Ul;
        if (n && e) {
            var l = il(n).hoistableScripts
              , i = Hl(e)
              , s = l.get(i);
            s || (s = n.querySelector(La(i)),
            s || (e = v({
                src: e,
                async: !0
            }, t),
            (t = Nt.get(i)) && Js(e, t),
            s = n.createElement("script"),
            Ke(s),
            Pe(s, "link", e),
            n.head.appendChild(s)),
            s = {
                type: "script",
                instance: s,
                count: 1,
                state: null
            },
            l.set(i, s))
        }
    }
    function ty(e, t) {
        rn.M(e, t);
        var n = Ul;
        if (n && e) {
            var l = il(n).hoistableScripts
              , i = Hl(e)
              , s = l.get(i);
            s || (s = n.querySelector(La(i)),
            s || (e = v({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = Nt.get(i)) && Js(e, t),
            s = n.createElement("script"),
            Ke(s),
            Pe(s, "link", e),
            n.head.appendChild(s)),
            s = {
                type: "script",
                instance: s,
                count: 1,
                state: null
            },
            l.set(i, s))
        }
    }
    function Ah(e, t, n, l) {
        var i = (i = fe.current) ? uu(i) : null;
        if (!i)
            throw Error(o(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Bl(n.href),
            n = il(i).hoistableStyles,
            l = n.get(t),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                e = Bl(n.href);
                var s = il(i).hoistableStyles
                  , h = s.get(e);
                if (h || (i = i.ownerDocument || i,
                h = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                s.set(e, h),
                (s = i.querySelector(za(e))) && !s._p && (h.instance = s,
                h.state.loading = 5),
                Nt.has(e) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Nt.set(e, n),
                s || ny(i, e, n, h.state))),
                t && l === null)
                    throw Error(o(528, ""));
                return h
            }
            if (t && l !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return t = n.async,
            n = n.src,
            typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Hl(n),
            n = il(i).hoistableScripts,
            l = n.get(t),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, e))
        }
    }
    function Bl(e) {
        return 'href="' + Et(e) + '"'
    }
    function za(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function Oh(e) {
        return v({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function ny(e, t, n, l) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"),
        l.preload = t,
        t.addEventListener("load", function() {
            return l.loading |= 1
        }),
        t.addEventListener("error", function() {
            return l.loading |= 2
        }),
        Pe(t, "link", n),
        Ke(t),
        e.head.appendChild(t))
    }
    function Hl(e) {
        return '[src="' + Et(e) + '"]'
    }
    function La(e) {
        return "script[async]" + e
    }
    function Th(e, t, n) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var l = e.querySelector('style[data-href~="' + Et(n.href) + '"]');
                if (l)
                    return t.instance = l,
                    Ke(l),
                    l;
                var i = v({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return l = (e.ownerDocument || e).createElement("style"),
                Ke(l),
                Pe(l, "style", i),
                ru(l, n.precedence, e),
                t.instance = l;
            case "stylesheet":
                i = Bl(n.href);
                var s = e.querySelector(za(i));
                if (s)
                    return t.state.loading |= 4,
                    t.instance = s,
                    Ke(s),
                    s;
                l = Oh(n),
                (i = Nt.get(i)) && ks(l, i),
                s = (e.ownerDocument || e).createElement("link"),
                Ke(s);
                var h = s;
                return h._p = new Promise(function(y, w) {
                    h.onload = y,
                    h.onerror = w
                }
                ),
                Pe(s, "link", l),
                t.state.loading |= 4,
                ru(s, n.precedence, e),
                t.instance = s;
            case "script":
                return s = Hl(n.src),
                (i = e.querySelector(La(s))) ? (t.instance = i,
                Ke(i),
                i) : (l = n,
                (i = Nt.get(s)) && (l = v({}, n),
                Js(l, i)),
                e = e.ownerDocument || e,
                i = e.createElement("script"),
                Ke(i),
                Pe(i, "link", l),
                e.head.appendChild(i),
                t.instance = i);
            case "void":
                return null;
            default:
                throw Error(o(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance,
            t.state.loading |= 4,
            ru(l, n.precedence, e));
        return t.instance
    }
    function ru(e, t, n) {
        for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = l.length ? l[l.length - 1] : null, s = i, h = 0; h < l.length; h++) {
            var y = l[h];
            if (y.dataset.precedence === t)
                s = y;
            else if (s !== i)
                break
        }
        s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = n.nodeType === 9 ? n.head : n,
        t.insertBefore(e, t.firstChild))
    }
    function ks(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function Js(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var su = null;
    function Rh(e, t, n) {
        if (su === null) {
            var l = new Map
              , i = su = new Map;
            i.set(n, l)
        } else
            i = su,
            l = i.get(n),
            l || (l = new Map,
            i.set(n, l));
        if (l.has(e))
            return l;
        for (l.set(e, null),
        n = n.getElementsByTagName(e),
        i = 0; i < n.length; i++) {
            var s = n[i];
            if (!(s[$l] || s[$e] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
                var h = s.getAttribute(t) || "";
                h = e + h;
                var y = l.get(h);
                y ? y.push(s) : l.set(h, [s])
            }
        }
        return l
    }
    function Nh(e, t, n) {
        e = e.ownerDocument || e,
        e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
    }
    function ly(e, t, n) {
        if (n === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (e = t.disabled,
            typeof t.precedence == "string" && e == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function Mh(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function ay(e, t, n, l) {
        if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var i = Bl(l.href)
                  , s = t.querySelector(za(i));
                if (s) {
                    t = s._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                    e = ou.bind(e),
                    t.then(e, e)),
                    n.state.loading |= 4,
                    n.instance = s,
                    Ke(s);
                    return
                }
                s = t.ownerDocument || t,
                l = Oh(l),
                (i = Nt.get(i)) && ks(l, i),
                s = s.createElement("link"),
                Ke(s);
                var h = s;
                h._p = new Promise(function(y, w) {
                    h.onload = y,
                    h.onerror = w
                }
                ),
                Pe(s, "link", l),
                n.instance = s
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(n, t),
            (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++,
            n = ou.bind(e),
            t.addEventListener("load", n),
            t.addEventListener("error", n))
        }
    }
    var $s = 0;
    function iy(e, t) {
        return e.stylesheets && e.count === 0 && fu(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(n) {
            var l = setTimeout(function() {
                if (e.stylesheets && fu(e, e.stylesheets),
                e.unsuspend) {
                    var s = e.unsuspend;
                    e.unsuspend = null,
                    s()
                }
            }, 6e4 + t);
            0 < e.imgBytes && $s === 0 && ($s = 62500 * q0());
            var i = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && fu(e, e.stylesheets),
                e.unsuspend)) {
                    var s = e.unsuspend;
                    e.unsuspend = null,
                    s()
                }
            }, (e.imgBytes > $s ? 50 : 800) + t);
            return e.unsuspend = n,
            function() {
                e.unsuspend = null,
                clearTimeout(l),
                clearTimeout(i)
            }
        }
        : null
    }
    function ou() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                fu(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var cu = null;
    function fu(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        cu = new Map,
        t.forEach(uy, e),
        cu = null,
        ou.call(e))
    }
    function uy(e, t) {
        if (!(t.state.loading & 4)) {
            var n = cu.get(e);
            if (n)
                var l = n.get(null);
            else {
                n = new Map,
                cu.set(e, n);
                for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < i.length; s++) {
                    var h = i[s];
                    (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h),
                    l = h)
                }
                l && n.set(null, l)
            }
            i = t.instance,
            h = i.getAttribute("data-precedence"),
            s = n.get(h) || l,
            s === l && n.set(null, i),
            n.set(h, i),
            this.count++,
            l = ou.bind(this),
            i.addEventListener("load", l),
            i.addEventListener("error", l),
            s ? s.parentNode.insertBefore(i, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(i, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Da = {
        $$typeof: V,
        Provider: null,
        Consumer: null,
        _currentValue: te,
        _currentValue2: te,
        _threadCount: 0
    };
    function ry(e, t, n, l, i, s, h, y, w) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Xu(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Xu(0),
        this.hiddenUpdates = Xu(null),
        this.identifierPrefix = l,
        this.onUncaughtError = i,
        this.onCaughtError = s,
        this.onRecoverableError = h,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = w,
        this.incompleteTransitions = new Map
    }
    function zh(e, t, n, l, i, s, h, y, w, M, H, Y) {
        return e = new ry(e,t,n,h,w,M,H,Y,y),
        t = 1,
        s === !0 && (t |= 24),
        s = gt(3, null, null, t),
        e.current = s,
        s.stateNode = e,
        t = Tr(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        s.memoizedState = {
            element: l,
            isDehydrated: n,
            cache: t
        },
        zr(s),
        e
    }
    function Lh(e) {
        return e ? (e = gl,
        e) : gl
    }
    function Dh(e, t, n, l, i, s) {
        i = Lh(i),
        l.context === null ? l.context = i : l.pendingContext = i,
        l = bn(t),
        l.payload = {
            element: n
        },
        s = s === void 0 ? null : s,
        s !== null && (l.callback = s),
        n = xn(e, l, t),
        n !== null && (ct(n, e, t),
        da(n, e, t))
    }
    function jh(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function Fs(e, t) {
        jh(e, t),
        (e = e.alternate) && jh(e, t)
    }
    function Uh(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Qn(e, 67108864);
            t !== null && ct(t, e, 67108864),
            Fs(e, 67108864)
        }
    }
    function Bh(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = xt();
            t = Zu(t);
            var n = Qn(e, t);
            n !== null && ct(n, e, t),
            Fs(e, t)
        }
    }
    var du = !0;
    function sy(e, t, n, l) {
        var i = j.T;
        j.T = null;
        var s = X.p;
        try {
            X.p = 2,
            Ws(e, t, n, l)
        } finally {
            X.p = s,
            j.T = i
        }
    }
    function oy(e, t, n, l) {
        var i = j.T;
        j.T = null;
        var s = X.p;
        try {
            X.p = 8,
            Ws(e, t, n, l)
        } finally {
            X.p = s,
            j.T = i
        }
    }
    function Ws(e, t, n, l) {
        if (du) {
            var i = Is(l);
            if (i === null)
                Bs(e, t, l, hu, n),
                qh(e, l);
            else if (fy(i, e, t, n, l))
                l.stopPropagation();
            else if (qh(e, l),
            t & 4 && -1 < cy.indexOf(e)) {
                for (; i !== null; ) {
                    var s = al(i);
                    if (s !== null)
                        switch (s.tag) {
                        case 3:
                            if (s = s.stateNode,
                            s.current.memoizedState.isDehydrated) {
                                var h = Hn(s.pendingLanes);
                                if (h !== 0) {
                                    var y = s;
                                    for (y.pendingLanes |= 2,
                                    y.entangledLanes |= 2; h; ) {
                                        var w = 1 << 31 - ht(h);
                                        y.entanglements[1] |= w,
                                        h &= ~w
                                    }
                                    qt(s),
                                    (Se & 6) === 0 && ($i = ft() + 500,
                                    Ta(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            y = Qn(s, 2),
                            y !== null && ct(y, s, 2),
                            Wi(),
                            Fs(s, 2)
                        }
                    if (s = Is(l),
                    s === null && Bs(e, t, l, hu, n),
                    s === i)
                        break;
                    i = s
                }
                i !== null && l.stopPropagation()
            } else
                Bs(e, t, l, null, n)
        }
    }
    function Is(e) {
        return e = er(e),
        Ps(e)
    }
    var hu = null;
    function Ps(e) {
        if (hu = null,
        e = ll(e),
        e !== null) {
            var t = f(e);
            if (t === null)
                e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = d(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 31) {
                    if (e = m(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return hu = e,
        null
    }
    function Hh(e) {
        switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch ($g()) {
            case Zo:
                return 2;
            case Ko:
                return 8;
            case ni:
            case Fg:
                return 32;
            case ko:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var eo = !1
      , Mn = null
      , zn = null
      , Ln = null
      , ja = new Map
      , Ua = new Map
      , Dn = []
      , cy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function qh(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Mn = null;
            break;
        case "dragenter":
        case "dragleave":
            zn = null;
            break;
        case "mouseover":
        case "mouseout":
            Ln = null;
            break;
        case "pointerover":
        case "pointerout":
            ja.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ua.delete(t.pointerId)
        }
    }
    function Ba(e, t, n, l, i, s) {
        return e === null || e.nativeEvent !== s ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: l,
            nativeEvent: s,
            targetContainers: [i]
        },
        t !== null && (t = al(t),
        t !== null && Uh(t)),
        e) : (e.eventSystemFlags |= l,
        t = e.targetContainers,
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e)
    }
    function fy(e, t, n, l, i) {
        switch (t) {
        case "focusin":
            return Mn = Ba(Mn, e, t, n, l, i),
            !0;
        case "dragenter":
            return zn = Ba(zn, e, t, n, l, i),
            !0;
        case "mouseover":
            return Ln = Ba(Ln, e, t, n, l, i),
            !0;
        case "pointerover":
            var s = i.pointerId;
            return ja.set(s, Ba(ja.get(s) || null, e, t, n, l, i)),
            !0;
        case "gotpointercapture":
            return s = i.pointerId,
            Ua.set(s, Ba(Ua.get(s) || null, e, t, n, l, i)),
            !0
        }
        return !1
    }
    function Gh(e) {
        var t = ll(e.target);
        if (t !== null) {
            var n = f(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = d(n),
                    t !== null) {
                        e.blockedOn = t,
                        Po(e.priority, function() {
                            Bh(n)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = m(n),
                    t !== null) {
                        e.blockedOn = t,
                        Po(e.priority, function() {
                            Bh(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function mu(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Is(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var l = new n.constructor(n.type,n);
                Pu = l,
                n.target.dispatchEvent(l),
                Pu = null
            } else
                return t = al(n),
                t !== null && Uh(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function Yh(e, t, n) {
        mu(e) && n.delete(t)
    }
    function dy() {
        eo = !1,
        Mn !== null && mu(Mn) && (Mn = null),
        zn !== null && mu(zn) && (zn = null),
        Ln !== null && mu(Ln) && (Ln = null),
        ja.forEach(Yh),
        Ua.forEach(Yh)
    }
    function gu(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        eo || (eo = !0,
        u.unstable_scheduleCallback(u.unstable_NormalPriority, dy)))
    }
    var pu = null;
    function Vh(e) {
        pu !== e && (pu = e,
        u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
            pu === e && (pu = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t]
                  , l = e[t + 1]
                  , i = e[t + 2];
                if (typeof l != "function") {
                    if (Ps(l || n) === null)
                        continue;
                    break
                }
                var s = al(n);
                s !== null && (e.splice(t, 3),
                t -= 3,
                Ir(s, {
                    pending: !0,
                    data: i,
                    method: n.method,
                    action: l
                }, l, i))
            }
        }))
    }
    function ql(e) {
        function t(w) {
            return gu(w, e)
        }
        Mn !== null && gu(Mn, e),
        zn !== null && gu(zn, e),
        Ln !== null && gu(Ln, e),
        ja.forEach(t),
        Ua.forEach(t);
        for (var n = 0; n < Dn.length; n++) {
            var l = Dn[n];
            l.blockedOn === e && (l.blockedOn = null)
        }
        for (; 0 < Dn.length && (n = Dn[0],
        n.blockedOn === null); )
            Gh(n),
            n.blockedOn === null && Dn.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay,
        n != null)
            for (l = 0; l < n.length; l += 3) {
                var i = n[l]
                  , s = n[l + 1]
                  , h = i[at] || null;
                if (typeof s == "function")
                    h || Vh(n);
                else if (h) {
                    var y = null;
                    if (s && s.hasAttribute("formAction")) {
                        if (i = s,
                        h = s[at] || null)
                            y = h.formAction;
                        else if (Ps(i) !== null)
                            continue
                    } else
                        y = h.action;
                    typeof y == "function" ? n[l + 1] = y : (n.splice(l, 3),
                    l -= 3),
                    Vh(n)
                }
            }
    }
    function Qh() {
        function e(s) {
            s.canIntercept && s.info === "react-transition" && s.intercept({
                handler: function() {
                    return new Promise(function(h) {
                        return i = h
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            i !== null && (i(),
            i = null),
            l || setTimeout(n, 20)
        }
        function n() {
            if (!l && !navigation.transition) {
                var s = navigation.currentEntry;
                s && s.url != null && navigation.navigate(s.url, {
                    state: s.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1
              , i = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(n, 100),
            function() {
                l = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                i !== null && (i(),
                i = null)
            }
        }
    }
    function to(e) {
        this._internalRoot = e
    }
    yu.prototype.render = to.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(o(409));
        var n = t.current
          , l = xt();
        Dh(n, l, e, t, null, null)
    }
    ,
    yu.prototype.unmount = to.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Dh(e.current, 2, null, e, null, null),
            Wi(),
            t[nl] = null
        }
    }
    ;
    function yu(e) {
        this._internalRoot = e
    }
    yu.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Io();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Dn.length && t !== 0 && t < Dn[n].priority; n++)
                ;
            Dn.splice(n, 0, e),
            n === 0 && Gh(e)
        }
    }
    ;
    var Xh = a.version;
    if (Xh !== "19.2.4")
        throw Error(o(527, Xh, "19.2.4"));
    X.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","),
            Error(o(268, e)));
        return e = p(t),
        e = e !== null ? b(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var hy = {
        bundleType: 0,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: j,
        reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var vu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vu.isDisabled && vu.supportsFiber)
            try {
                Kl = vu.inject(hy),
                dt = vu
            } catch {}
    }
    return Ga.createRoot = function(e, t) {
        if (!c(e))
            throw Error(o(299));
        var n = !1
          , l = ""
          , i = Wf
          , s = If
          , h = Pf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
        t.onCaughtError !== void 0 && (s = t.onCaughtError),
        t.onRecoverableError !== void 0 && (h = t.onRecoverableError)),
        t = zh(e, 1, !1, null, null, n, l, null, i, s, h, Qh),
        e[nl] = t.current,
        Us(e),
        new to(t)
    }
    ,
    Ga.hydrateRoot = function(e, t, n) {
        if (!c(e))
            throw Error(o(299));
        var l = !1
          , i = ""
          , s = Wf
          , h = If
          , y = Pf
          , w = null;
        return n != null && (n.unstable_strictMode === !0 && (l = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
        n.onCaughtError !== void 0 && (h = n.onCaughtError),
        n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
        n.formState !== void 0 && (w = n.formState)),
        t = zh(e, 1, !0, t, n ?? null, l, i, w, s, h, y, Qh),
        t.context = Lh(null),
        n = t.current,
        l = xt(),
        l = Zu(l),
        i = bn(l),
        i.callback = null,
        xn(n, i, l),
        n = l,
        t.current.lanes = n,
        Jl(t, n),
        qt(t),
        e[nl] = t.current,
        Us(e),
        new yu(t)
    }
    ,
    Ga.version = "19.2.4",
    Ga
}
var Sm;
function mv() {
    if (Sm)
        return io.exports;
    Sm = 1;
    function u() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)
            } catch (a) {
                console.error(a)
            }
    }
    return u(),
    io.exports = hv(),
    io.exports
}
var gv = mv();
var Em = "popstate";
function pv(u={}) {
    function a(o, c) {
        let {pathname: f, search: d, hash: m} = o.location;
        return Mo("", {
            pathname: f,
            search: d,
            hash: m
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }
    function r(o, c) {
        return typeof c == "string" ? c : Fa(c)
    }
    return vv(a, r, null, u)
}
function Ze(u, a) {
    if (u === !1 || u === null || typeof u > "u")
        throw new Error(a)
}
function Vt(u, a) {
    if (!u) {
        typeof console < "u" && console.warn(a);
        try {
            throw new Error(a)
        } catch {}
    }
}
function yv() {
    return Math.random().toString(36).substring(2, 10)
}
function wm(u, a) {
    return {
        usr: u.state,
        key: u.key,
        idx: a
    }
}
function Mo(u, a, r=null, o) {
    return {
        pathname: typeof u == "string" ? u : u.pathname,
        search: "",
        hash: "",
        ...typeof a == "string" ? Wa(a) : a,
        state: r,
        key: a && a.key || o || yv()
    }
}
function Fa({pathname: u="/", search: a="", hash: r=""}) {
    return a && a !== "?" && (u += a.charAt(0) === "?" ? a : "?" + a),
    r && r !== "#" && (u += r.charAt(0) === "#" ? r : "#" + r),
    u
}
function Wa(u) {
    let a = {};
    if (u) {
        let r = u.indexOf("#");
        r >= 0 && (a.hash = u.substring(r),
        u = u.substring(0, r));
        let o = u.indexOf("?");
        o >= 0 && (a.search = u.substring(o),
        u = u.substring(0, o)),
        u && (a.pathname = u)
    }
    return a
}
function vv(u, a, r, o={}) {
    let {window: c=document.defaultView, v5Compat: f=!1} = o
      , d = c.history
      , m = "POP"
      , g = null
      , p = b();
    p == null && (p = 0,
    d.replaceState({
        ...d.state,
        idx: p
    }, ""));
    function b() {
        return (d.state || {
            idx: null
        }).idx
    }
    function v() {
        m = "POP";
        let _ = b()
          , L = _ == null ? null : _ - p;
        p = _,
        g && g({
            action: m,
            location: O.location,
            delta: L
        })
    }
    function S(_, L) {
        m = "PUSH";
        let U = Mo(O.location, _, L);
        p = b() + 1;
        let V = wm(U, p)
          , J = O.createHref(U);
        try {
            d.pushState(V, "", J)
        } catch (W) {
            if (W instanceof DOMException && W.name === "DataCloneError")
                throw W;
            c.location.assign(J)
        }
        f && g && g({
            action: m,
            location: O.location,
            delta: 1
        })
    }
    function x(_, L) {
        m = "REPLACE";
        let U = Mo(O.location, _, L);
        p = b();
        let V = wm(U, p)
          , J = O.createHref(U);
        d.replaceState(V, "", J),
        f && g && g({
            action: m,
            location: O.location,
            delta: 0
        })
    }
    function E(_) {
        return bv(_)
    }
    let O = {
        get action() {
            return m
        },
        get location() {
            return u(c, d)
        },
        listen(_) {
            if (g)
                throw new Error("A history only accepts one active listener");
            return c.addEventListener(Em, v),
            g = _,
            () => {
                c.removeEventListener(Em, v),
                g = null
            }
        },
        createHref(_) {
            return a(c, _)
        },
        createURL: E,
        encodeLocation(_) {
            let L = E(_);
            return {
                pathname: L.pathname,
                search: L.search,
                hash: L.hash
            }
        },
        push: S,
        replace: x,
        go(_) {
            return d.go(_)
        }
    };
    return O
}
function bv(u, a=!1) {
    let r = "http://localhost";
    typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href),
    Ze(r, "No window.location.(origin|href) available to create URL");
    let o = typeof u == "string" ? u : Fa(u);
    return o = o.replace(/ $/, "%20"),
    !a && o.startsWith("//") && (o = r + o),
    new URL(o,r)
}
function rg(u, a, r="/") {
    return xv(u, a, r, !1)
}
function xv(u, a, r, o) {
    let c = typeof a == "string" ? Wa(a) : a
      , f = on(c.pathname || "/", r);
    if (f == null)
        return null;
    let d = sg(u);
    Sv(d);
    let m = null;
    for (let g = 0; m == null && g < d.length; ++g) {
        let p = zv(f);
        m = Nv(d[g], p, o)
    }
    return m
}
function sg(u, a=[], r=[], o="", c=!1) {
    let f = (d, m, g=c, p) => {
        let b = {
            relativePath: p === void 0 ? d.path || "" : p,
            caseSensitive: d.caseSensitive === !0,
            childrenIndex: m,
            route: d
        };
        if (b.relativePath.startsWith("/")) {
            if (!b.relativePath.startsWith(o) && g)
                return;
            Ze(b.relativePath.startsWith(o), `Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            b.relativePath = b.relativePath.slice(o.length)
        }
        let v = sn([o, b.relativePath])
          , S = r.concat(b);
        d.children && d.children.length > 0 && (Ze(d.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`),
        sg(d.children, a, S, v, g)),
        !(d.path == null && !d.index) && a.push({
            path: v,
            score: Tv(v, d.index),
            routesMeta: S
        })
    }
    ;
    return u.forEach( (d, m) => {
        if (d.path === "" || !d.path?.includes("?"))
            f(d, m);
        else
            for (let g of og(d.path))
                f(d, m, !0, g)
    }
    ),
    a
}
function og(u) {
    let a = u.split("/");
    if (a.length === 0)
        return [];
    let[r,...o] = a
      , c = r.endsWith("?")
      , f = r.replace(/\?$/, "");
    if (o.length === 0)
        return c ? [f, ""] : [f];
    let d = og(o.join("/"))
      , m = [];
    return m.push(...d.map(g => g === "" ? f : [f, g].join("/"))),
    c && m.push(...d),
    m.map(g => u.startsWith("/") && g === "" ? "/" : g)
}
function Sv(u) {
    u.sort( (a, r) => a.score !== r.score ? r.score - a.score : Rv(a.routesMeta.map(o => o.childrenIndex), r.routesMeta.map(o => o.childrenIndex)))
}
var Ev = /^:[\w-]+$/
  , wv = 3
  , _v = 2
  , Cv = 1
  , Av = 10
  , Ov = -2
  , _m = u => u === "*";
function Tv(u, a) {
    let r = u.split("/")
      , o = r.length;
    return r.some(_m) && (o += Ov),
    a && (o += _v),
    r.filter(c => !_m(c)).reduce( (c, f) => c + (Ev.test(f) ? wv : f === "" ? Cv : Av), o)
}
function Rv(u, a) {
    return u.length === a.length && u.slice(0, -1).every( (o, c) => o === a[c]) ? u[u.length - 1] - a[a.length - 1] : 0
}
function Nv(u, a, r=!1) {
    let {routesMeta: o} = u
      , c = {}
      , f = "/"
      , d = [];
    for (let m = 0; m < o.length; ++m) {
        let g = o[m]
          , p = m === o.length - 1
          , b = f === "/" ? a : a.slice(f.length) || "/"
          , v = Mu({
            path: g.relativePath,
            caseSensitive: g.caseSensitive,
            end: p
        }, b)
          , S = g.route;
        if (!v && p && r && !o[o.length - 1].route.index && (v = Mu({
            path: g.relativePath,
            caseSensitive: g.caseSensitive,
            end: !1
        }, b)),
        !v)
            return null;
        Object.assign(c, v.params),
        d.push({
            params: c,
            pathname: sn([f, v.pathname]),
            pathnameBase: Uv(sn([f, v.pathnameBase])),
            route: S
        }),
        v.pathnameBase !== "/" && (f = sn([f, v.pathnameBase]))
    }
    return d
}
function Mu(u, a) {
    typeof u == "string" && (u = {
        path: u,
        caseSensitive: !1,
        end: !0
    });
    let[r,o] = Mv(u.path, u.caseSensitive, u.end)
      , c = a.match(r);
    if (!c)
        return null;
    let f = c[0]
      , d = f.replace(/(.)\/+$/, "$1")
      , m = c.slice(1);
    return {
        params: o.reduce( (p, {paramName: b, isOptional: v}, S) => {
            if (b === "*") {
                let E = m[S] || "";
                d = f.slice(0, f.length - E.length).replace(/(.)\/+$/, "$1")
            }
            const x = m[S];
            return v && !x ? p[b] = void 0 : p[b] = (x || "").replace(/%2F/g, "/"),
            p
        }
        , {}),
        pathname: f,
        pathnameBase: d,
        pattern: u
    }
}
function Mv(u, a=!1, r=!0) {
    Vt(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`);
    let o = []
      , c = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, m, g) => (o.push({
        paramName: m,
        isOptional: g != null
    }),
    g ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return u.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    c += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? c += "\\/*$" : u !== "" && u !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c,a ? void 0 : "i"), o]
}
function zv(u) {
    try {
        return u.split("/").map(a => decodeURIComponent(a).replace(/\//g, "%2F")).join("/")
    } catch (a) {
        return Vt(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),
        u
    }
}
function on(u, a) {
    if (a === "/")
        return u;
    if (!u.toLowerCase().startsWith(a.toLowerCase()))
        return null;
    let r = a.endsWith("/") ? a.length - 1 : a.length
      , o = u.charAt(r);
    return o && o !== "/" ? null : u.slice(r) || "/"
}
var Lv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Dv(u, a="/") {
    let {pathname: r, search: o="", hash: c=""} = typeof u == "string" ? Wa(u) : u, f;
    return r ? (r = r.replace(/\/\/+/g, "/"),
    r.startsWith("/") ? f = Cm(r.substring(1), "/") : f = Cm(r, a)) : f = a,
    {
        pathname: f,
        search: Bv(o),
        hash: Hv(c)
    }
}
function Cm(u, a) {
    let r = a.replace(/\/+$/, "").split("/");
    return u.split("/").forEach(c => {
        c === ".." ? r.length > 1 && r.pop() : c !== "." && r.push(c)
    }
    ),
    r.length > 1 ? r.join("/") : "/"
}
function oo(u, a, r, o) {
    return `Cannot include a '${u}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function jv(u) {
    return u.filter( (a, r) => r === 0 || a.route.path && a.route.path.length > 0)
}
function cg(u) {
    let a = jv(u);
    return a.map( (r, o) => o === a.length - 1 ? r.pathname : r.pathnameBase)
}
function fg(u, a, r, o=!1) {
    let c;
    typeof u == "string" ? c = Wa(u) : (c = {
        ...u
    },
    Ze(!c.pathname || !c.pathname.includes("?"), oo("?", "pathname", "search", c)),
    Ze(!c.pathname || !c.pathname.includes("#"), oo("#", "pathname", "hash", c)),
    Ze(!c.search || !c.search.includes("#"), oo("#", "search", "hash", c)));
    let f = u === "" || c.pathname === "", d = f ? "/" : c.pathname, m;
    if (d == null)
        m = r;
    else {
        let v = a.length - 1;
        if (!o && d.startsWith("..")) {
            let S = d.split("/");
            for (; S[0] === ".."; )
                S.shift(),
                v -= 1;
            c.pathname = S.join("/")
        }
        m = v >= 0 ? a[v] : "/"
    }
    let g = Dv(c, m)
      , p = d && d !== "/" && d.endsWith("/")
      , b = (f || d === ".") && r.endsWith("/");
    return !g.pathname.endsWith("/") && (p || b) && (g.pathname += "/"),
    g
}
var sn = u => u.join("/").replace(/\/\/+/g, "/")
  , Uv = u => u.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Bv = u => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u
  , Hv = u => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u
  , qv = class {
    constructor(u, a, r, o=!1) {
        this.status = u,
        this.statusText = a || "",
        this.internal = o,
        r instanceof Error ? (this.data = r.toString(),
        this.error = r) : this.data = r
    }
}
;
function Gv(u) {
    return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data"in u
}
function Yv(u) {
    return u.map(a => a.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
var dg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function hg(u, a) {
    let r = u;
    if (typeof r != "string" || !Lv.test(r))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: r
        };
    let o = r
      , c = !1;
    if (dg)
        try {
            let f = new URL(window.location.href)
              , d = r.startsWith("//") ? new URL(f.protocol + r) : new URL(r)
              , m = on(d.pathname, a);
            d.origin === f.origin && m != null ? r = m + d.search + d.hash : c = !0
        } catch {
            Vt(!1, `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: o,
        isExternal: c,
        to: r
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var mg = ["POST", "PUT", "PATCH", "DELETE"];
new Set(mg);
var Vv = ["GET", ...mg];
new Set(Vv);
var Xl = B.createContext(null);
Xl.displayName = "DataRouter";
var Du = B.createContext(null);
Du.displayName = "DataRouterState";
var Qv = B.createContext(!1)
  , gg = B.createContext({
    isTransitioning: !1
});
gg.displayName = "ViewTransition";
var Xv = B.createContext(new Map);
Xv.displayName = "Fetchers";
var Zv = B.createContext(null);
Zv.displayName = "Await";
var Mt = B.createContext(null);
Mt.displayName = "Navigation";
var ju = B.createContext(null);
ju.displayName = "Location";
var cn = B.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
cn.displayName = "Route";
var jo = B.createContext(null);
jo.displayName = "RouteError";
var pg = "REACT_ROUTER_ERROR"
  , Kv = "REDIRECT"
  , kv = "ROUTE_ERROR_RESPONSE";
function Jv(u) {
    if (u.startsWith(`${pg}:${Kv}:{`))
        try {
            let a = JSON.parse(u.slice(28));
            if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
                return a
        } catch {}
}
function $v(u) {
    if (u.startsWith(`${pg}:${kv}:{`))
        try {
            let a = JSON.parse(u.slice(40));
            if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
                return new qv(a.status,a.statusText,a.data)
        } catch {}
}
function Fv(u, {relative: a}={}) {
    Ze(Ia(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: r, navigator: o} = B.useContext(Mt)
      , {hash: c, pathname: f, search: d} = Pa(u, {
        relative: a
    })
      , m = f;
    return r !== "/" && (m = f === "/" ? r : sn([r, f])),
    o.createHref({
        pathname: m,
        search: d,
        hash: c
    })
}
function Ia() {
    return B.useContext(ju) != null
}
function Un() {
    return Ze(Ia(), "useLocation() may be used only in the context of a <Router> component."),
    B.useContext(ju).location
}
var yg = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function vg(u) {
    B.useContext(Mt).static || B.useLayoutEffect(u)
}
function bg() {
    let {isDataRoute: u} = B.useContext(cn);
    return u ? o1() : Wv()
}
function Wv() {
    Ze(Ia(), "useNavigate() may be used only in the context of a <Router> component.");
    let u = B.useContext(Xl)
      , {basename: a, navigator: r} = B.useContext(Mt)
      , {matches: o} = B.useContext(cn)
      , {pathname: c} = Un()
      , f = JSON.stringify(cg(o))
      , d = B.useRef(!1);
    return vg( () => {
        d.current = !0
    }
    ),
    B.useCallback( (g, p={}) => {
        if (Vt(d.current, yg),
        !d.current)
            return;
        if (typeof g == "number") {
            r.go(g);
            return
        }
        let b = fg(g, JSON.parse(f), c, p.relative === "path");
        u == null && a !== "/" && (b.pathname = b.pathname === "/" ? a : sn([a, b.pathname])),
        (p.replace ? r.replace : r.push)(b, p.state, p)
    }
    , [a, r, f, c, u])
}
B.createContext(null);
function Pa(u, {relative: a}={}) {
    let {matches: r} = B.useContext(cn)
      , {pathname: o} = Un()
      , c = JSON.stringify(cg(r));
    return B.useMemo( () => fg(u, JSON.parse(c), o, a === "path"), [u, c, o, a])
}
function Iv(u, a) {
    return xg(u)
}
function xg(u, a, r, o, c) {
    Ze(Ia(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: f} = B.useContext(Mt)
      , {matches: d} = B.useContext(cn)
      , m = d[d.length - 1]
      , g = m ? m.params : {}
      , p = m ? m.pathname : "/"
      , b = m ? m.pathnameBase : "/"
      , v = m && m.route;
    {
        let U = v && v.path || "";
        Eg(p, !v || U.endsWith("*") || U.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U === "/" ? "*" : `${U}/*`}">.`)
    }
    let S = Un(), x;
    x = S;
    let E = x.pathname || "/"
      , O = E;
    if (b !== "/") {
        let U = b.replace(/^\//, "").split("/");
        O = "/" + E.replace(/^\//, "").split("/").slice(U.length).join("/")
    }
    let _ = rg(u, {
        pathname: O
    });
    return Vt(v || _ != null, `No routes matched location "${x.pathname}${x.search}${x.hash}" `),
    Vt(_ == null || _[_.length - 1].route.element !== void 0 || _[_.length - 1].route.Component !== void 0 || _[_.length - 1].route.lazy !== void 0, `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),
    l1(_ && _.map(U => Object.assign({}, U, {
        params: Object.assign({}, g, U.params),
        pathname: sn([b, f.encodeLocation ? f.encodeLocation(U.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : U.pathname]),
        pathnameBase: U.pathnameBase === "/" ? b : sn([b, f.encodeLocation ? f.encodeLocation(U.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : U.pathnameBase])
    })), d, r, o, c)
}
function Pv() {
    let u = s1()
      , a = Gv(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u)
      , r = u instanceof Error ? u.stack : null
      , o = "rgba(200,200,200, 0.5)"
      , c = {
        padding: "0.5rem",
        backgroundColor: o
    }
      , f = {
        padding: "2px 4px",
        backgroundColor: o
    }
      , d = null;
    return console.error("Error handled by React Router default ErrorBoundary:", u),
    d = B.createElement(B.Fragment, null, B.createElement("p", null, "💿 Hey developer 👋"), B.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", B.createElement("code", {
        style: f
    }, "ErrorBoundary"), " or", " ", B.createElement("code", {
        style: f
    }, "errorElement"), " prop on your route.")),
    B.createElement(B.Fragment, null, B.createElement("h2", null, "Unexpected Application Error!"), B.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, a), r ? B.createElement("pre", {
        style: c
    }, r) : null, d)
}
var e1 = B.createElement(Pv, null)
  , Sg = class extends B.Component {
    constructor(u) {
        super(u),
        this.state = {
            location: u.location,
            revalidation: u.revalidation,
            error: u.error
        }
    }
    static getDerivedStateFromError(u) {
        return {
            error: u
        }
    }
    static getDerivedStateFromProps(u, a) {
        return a.location !== u.location || a.revalidation !== "idle" && u.revalidation === "idle" ? {
            error: u.error,
            location: u.location,
            revalidation: u.revalidation
        } : {
            error: u.error !== void 0 ? u.error : a.error,
            location: a.location,
            revalidation: u.revalidation || a.revalidation
        }
    }
    componentDidCatch(u, a) {
        this.props.onError ? this.props.onError(u, a) : console.error("React Router caught the following error during render", u)
    }
    render() {
        let u = this.state.error;
        if (this.context && typeof u == "object" && u && "digest"in u && typeof u.digest == "string") {
            const r = $v(u.digest);
            r && (u = r)
        }
        let a = u !== void 0 ? B.createElement(cn.Provider, {
            value: this.props.routeContext
        }, B.createElement(jo.Provider, {
            value: u,
            children: this.props.component
        })) : this.props.children;
        return this.context ? B.createElement(t1, {
            error: u
        }, a) : a
    }
}
;
Sg.contextType = Qv;
var co = new WeakMap;
function t1({children: u, error: a}) {
    let {basename: r} = B.useContext(Mt);
    if (typeof a == "object" && a && "digest"in a && typeof a.digest == "string") {
        let o = Jv(a.digest);
        if (o) {
            let c = co.get(a);
            if (c)
                throw c;
            let f = hg(o.location, r);
            if (dg && !co.get(a))
                if (f.isExternal || o.reloadDocument)
                    window.location.href = f.absoluteURL || f.to;
                else {
                    const d = Promise.resolve().then( () => window.__reactRouterDataRouter.navigate(f.to, {
                        replace: o.replace
                    }));
                    throw co.set(a, d),
                    d
                }
            return B.createElement("meta", {
                httpEquiv: "refresh",
                content: `0;url=${f.absoluteURL || f.to}`
            })
        }
    }
    return u
}
function n1({routeContext: u, match: a, children: r}) {
    let o = B.useContext(Xl);
    return o && o.static && o.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = a.route.id),
    B.createElement(cn.Provider, {
        value: u
    }, r)
}
function l1(u, a=[], r=null, o=null, c=null) {
    if (u == null) {
        if (!r)
            return null;
        if (r.errors)
            u = r.matches;
        else if (a.length === 0 && !r.initialized && r.matches.length > 0)
            u = r.matches;
        else
            return null
    }
    let f = u
      , d = r?.errors;
    if (d != null) {
        let b = f.findIndex(v => v.route.id && d?.[v.route.id] !== void 0);
        Ze(b >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),
        f = f.slice(0, Math.min(f.length, b + 1))
    }
    let m = !1
      , g = -1;
    if (r)
        for (let b = 0; b < f.length; b++) {
            let v = f[b];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (g = b),
            v.route.id) {
                let {loaderData: S, errors: x} = r
                  , E = v.route.loader && !S.hasOwnProperty(v.route.id) && (!x || x[v.route.id] === void 0);
                if (v.route.lazy || E) {
                    m = !0,
                    g >= 0 ? f = f.slice(0, g + 1) : f = [f[0]];
                    break
                }
            }
        }
    let p = r && o ? (b, v) => {
        o(b, {
            location: r.location,
            params: r.matches?.[0]?.params ?? {},
            unstable_pattern: Yv(r.matches),
            errorInfo: v
        })
    }
    : void 0;
    return f.reduceRight( (b, v, S) => {
        let x, E = !1, O = null, _ = null;
        r && (x = d && v.route.id ? d[v.route.id] : void 0,
        O = v.route.errorElement || e1,
        m && (g < 0 && S === 0 ? (Eg("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        E = !0,
        _ = null) : g === S && (E = !0,
        _ = v.route.hydrateFallbackElement || null)));
        let L = a.concat(f.slice(0, S + 1))
          , U = () => {
            let V;
            return x ? V = O : E ? V = _ : v.route.Component ? V = B.createElement(v.route.Component, null) : v.route.element ? V = v.route.element : V = b,
            B.createElement(n1, {
                match: v,
                routeContext: {
                    outlet: b,
                    matches: L,
                    isDataRoute: r != null
                },
                children: V
            })
        }
        ;
        return r && (v.route.ErrorBoundary || v.route.errorElement || S === 0) ? B.createElement(Sg, {
            location: r.location,
            revalidation: r.revalidation,
            component: O,
            error: x,
            children: U(),
            routeContext: {
                outlet: null,
                matches: L,
                isDataRoute: !0
            },
            onError: p
        }) : U()
    }
    , null)
}
function Uo(u) {
    return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function a1(u) {
    let a = B.useContext(Xl);
    return Ze(a, Uo(u)),
    a
}
function i1(u) {
    let a = B.useContext(Du);
    return Ze(a, Uo(u)),
    a
}
function u1(u) {
    let a = B.useContext(cn);
    return Ze(a, Uo(u)),
    a
}
function Bo(u) {
    let a = u1(u)
      , r = a.matches[a.matches.length - 1];
    return Ze(r.route.id, `${u} can only be used on routes that contain a unique "id"`),
    r.route.id
}
function r1() {
    return Bo("useRouteId")
}
function s1() {
    let u = B.useContext(jo)
      , a = i1("useRouteError")
      , r = Bo("useRouteError");
    return u !== void 0 ? u : a.errors?.[r]
}
function o1() {
    let {router: u} = a1("useNavigate")
      , a = Bo("useNavigate")
      , r = B.useRef(!1);
    return vg( () => {
        r.current = !0
    }
    ),
    B.useCallback(async (c, f={}) => {
        Vt(r.current, yg),
        r.current && (typeof c == "number" ? await u.navigate(c) : await u.navigate(c, {
            fromRouteId: a,
            ...f
        }))
    }
    , [u, a])
}
var Am = {};
function Eg(u, a, r) {
    !a && !Am[u] && (Am[u] = !0,
    Vt(!1, r))
}
B.memo(c1);
function c1({routes: u, future: a, state: r, onError: o}) {
    return xg(u, void 0, r, o, a)
}
function f1({basename: u="/", children: a=null, location: r, navigationType: o="POP", navigator: c, static: f=!1, unstable_useTransitions: d}) {
    Ze(!Ia(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let m = u.replace(/^\/*/, "/")
      , g = B.useMemo( () => ({
        basename: m,
        navigator: c,
        static: f,
        unstable_useTransitions: d,
        future: {}
    }), [m, c, f, d]);
    typeof r == "string" && (r = Wa(r));
    let {pathname: p="/", search: b="", hash: v="", state: S=null, key: x="default"} = r
      , E = B.useMemo( () => {
        let O = on(p, m);
        return O == null ? null : {
            location: {
                pathname: O,
                search: b,
                hash: v,
                state: S,
                key: x
            },
            navigationType: o
        }
    }
    , [m, p, b, v, S, x, o]);
    return Vt(E != null, `<Router basename="${m}"> is not able to match the URL "${p}${b}${v}" because it does not start with the basename, so the <Router> won't render anything.`),
    E == null ? null : B.createElement(Mt.Provider, {
        value: g
    }, B.createElement(ju.Provider, {
        children: a,
        value: E
    }))
}
var Au = "get"
  , Ou = "application/x-www-form-urlencoded";
function Uu(u) {
    return typeof HTMLElement < "u" && u instanceof HTMLElement
}
function d1(u) {
    return Uu(u) && u.tagName.toLowerCase() === "button"
}
function h1(u) {
    return Uu(u) && u.tagName.toLowerCase() === "form"
}
function m1(u) {
    return Uu(u) && u.tagName.toLowerCase() === "input"
}
function g1(u) {
    return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey)
}
function p1(u, a) {
    return u.button === 0 && (!a || a === "_self") && !g1(u)
}
var xu = null;
function y1() {
    if (xu === null)
        try {
            new FormData(document.createElement("form"),0),
            xu = !1
        } catch {
            xu = !0
        }
    return xu
}
var v1 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function fo(u) {
    return u != null && !v1.has(u) ? (Vt(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ou}"`),
    null) : u
}
function b1(u, a) {
    let r, o, c, f, d;
    if (h1(u)) {
        let m = u.getAttribute("action");
        o = m ? on(m, a) : null,
        r = u.getAttribute("method") || Au,
        c = fo(u.getAttribute("enctype")) || Ou,
        f = new FormData(u)
    } else if (d1(u) || m1(u) && (u.type === "submit" || u.type === "image")) {
        let m = u.form;
        if (m == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let g = u.getAttribute("formaction") || m.getAttribute("action");
        if (o = g ? on(g, a) : null,
        r = u.getAttribute("formmethod") || m.getAttribute("method") || Au,
        c = fo(u.getAttribute("formenctype")) || fo(m.getAttribute("enctype")) || Ou,
        f = new FormData(m,u),
        !y1()) {
            let {name: p, type: b, value: v} = u;
            if (b === "image") {
                let S = p ? `${p}.` : "";
                f.append(`${S}x`, "0"),
                f.append(`${S}y`, "0")
            } else
                p && f.append(p, v)
        }
    } else {
        if (Uu(u))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        r = Au,
        o = null,
        c = Ou,
        d = u
    }
    return f && c === "text/plain" && (d = f,
    f = void 0),
    {
        action: o,
        method: r.toLowerCase(),
        encType: c,
        formData: f,
        body: d
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ho(u, a) {
    if (u === !1 || u === null || typeof u > "u")
        throw new Error(a)
}
function x1(u, a, r, o) {
    let c = typeof u == "string" ? new URL(u,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
    return r ? c.pathname.endsWith("/") ? c.pathname = `${c.pathname}_.${o}` : c.pathname = `${c.pathname}.${o}` : c.pathname === "/" ? c.pathname = `_root.${o}` : a && on(c.pathname, a) === "/" ? c.pathname = `${a.replace(/\/$/, "")}/_root.${o}` : c.pathname = `${c.pathname.replace(/\/$/, "")}.${o}`,
    c
}
async function S1(u, a) {
    if (u.id in a)
        return a[u.id];
    try {
        let r = await import(u.module);
        return a[u.id] = r,
        r
    } catch (r) {
        return console.error(`Error loading route module \`${u.module}\`, reloading page...`),
        console.error(r),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function E1(u) {
    return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string"
}
async function w1(u, a, r) {
    let o = await Promise.all(u.map(async c => {
        let f = a.routes[c.route.id];
        if (f) {
            let d = await S1(f, r);
            return d.links ? d.links() : []
        }
        return []
    }
    ));
    return O1(o.flat(1).filter(E1).filter(c => c.rel === "stylesheet" || c.rel === "preload").map(c => c.rel === "stylesheet" ? {
        ...c,
        rel: "prefetch",
        as: "style"
    } : {
        ...c,
        rel: "prefetch"
    }))
}
function Om(u, a, r, o, c, f) {
    let d = (g, p) => r[p] ? g.route.id !== r[p].route.id : !0
      , m = (g, p) => r[p].pathname !== g.pathname || r[p].route.path?.endsWith("*") && r[p].params["*"] !== g.params["*"];
    return f === "assets" ? a.filter( (g, p) => d(g, p) || m(g, p)) : f === "data" ? a.filter( (g, p) => {
        let b = o.routes[g.route.id];
        if (!b || !b.hasLoader)
            return !1;
        if (d(g, p) || m(g, p))
            return !0;
        if (g.route.shouldRevalidate) {
            let v = g.route.shouldRevalidate({
                currentUrl: new URL(c.pathname + c.search + c.hash,window.origin),
                currentParams: r[0]?.params || {},
                nextUrl: new URL(u,window.origin),
                nextParams: g.params,
                defaultShouldRevalidate: !0
            });
            if (typeof v == "boolean")
                return v
        }
        return !0
    }
    ) : []
}
function _1(u, a, {includeHydrateFallback: r}={}) {
    return C1(u.map(o => {
        let c = a.routes[o.route.id];
        if (!c)
            return [];
        let f = [c.module];
        return c.clientActionModule && (f = f.concat(c.clientActionModule)),
        c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)),
        r && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)),
        c.imports && (f = f.concat(c.imports)),
        f
    }
    ).flat(1))
}
function C1(u) {
    return [...new Set(u)]
}
function A1(u) {
    let a = {}
      , r = Object.keys(u).sort();
    for (let o of r)
        a[o] = u[o];
    return a
}
function O1(u, a) {
    let r = new Set;
    return new Set(a),
    u.reduce( (o, c) => {
        let f = JSON.stringify(A1(c));
        return r.has(f) || (r.add(f),
        o.push({
            key: f,
            link: c
        })),
        o
    }
    , [])
}
function wg() {
    let u = B.useContext(Xl);
    return Ho(u, "You must render this element inside a <DataRouterContext.Provider> element"),
    u
}
function T1() {
    let u = B.useContext(Du);
    return Ho(u, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    u
}
var qo = B.createContext(void 0);
qo.displayName = "FrameworkContext";
function _g() {
    let u = B.useContext(qo);
    return Ho(u, "You must render this element inside a <HydratedRouter> element"),
    u
}
function R1(u, a) {
    let r = B.useContext(qo)
      , [o,c] = B.useState(!1)
      , [f,d] = B.useState(!1)
      , {onFocus: m, onBlur: g, onMouseEnter: p, onMouseLeave: b, onTouchStart: v} = a
      , S = B.useRef(null);
    B.useEffect( () => {
        if (u === "render" && d(!0),
        u === "viewport") {
            let O = L => {
                L.forEach(U => {
                    d(U.isIntersecting)
                }
                )
            }
              , _ = new IntersectionObserver(O,{
                threshold: .5
            });
            return S.current && _.observe(S.current),
            () => {
                _.disconnect()
            }
        }
    }
    , [u]),
    B.useEffect( () => {
        if (o) {
            let O = setTimeout( () => {
                d(!0)
            }
            , 100);
            return () => {
                clearTimeout(O)
            }
        }
    }
    , [o]);
    let x = () => {
        c(!0)
    }
      , E = () => {
        c(!1),
        d(!1)
    }
    ;
    return r ? u !== "intent" ? [f, S, {}] : [f, S, {
        onFocus: Ya(m, x),
        onBlur: Ya(g, E),
        onMouseEnter: Ya(p, x),
        onMouseLeave: Ya(b, E),
        onTouchStart: Ya(v, x)
    }] : [!1, S, {}]
}
function Ya(u, a) {
    return r => {
        u && u(r),
        r.defaultPrevented || a(r)
    }
}
function N1({page: u, ...a}) {
    let {router: r} = wg()
      , o = B.useMemo( () => rg(r.routes, u, r.basename), [r.routes, u, r.basename]);
    return o ? B.createElement(z1, {
        page: u,
        matches: o,
        ...a
    }) : null
}
function M1(u) {
    let {manifest: a, routeModules: r} = _g()
      , [o,c] = B.useState([]);
    return B.useEffect( () => {
        let f = !1;
        return w1(u, a, r).then(d => {
            f || c(d)
        }
        ),
        () => {
            f = !0
        }
    }
    , [u, a, r]),
    o
}
function z1({page: u, matches: a, ...r}) {
    let o = Un()
      , {future: c, manifest: f, routeModules: d} = _g()
      , {basename: m} = wg()
      , {loaderData: g, matches: p} = T1()
      , b = B.useMemo( () => Om(u, a, p, f, o, "data"), [u, a, p, f, o])
      , v = B.useMemo( () => Om(u, a, p, f, o, "assets"), [u, a, p, f, o])
      , S = B.useMemo( () => {
        if (u === o.pathname + o.search + o.hash)
            return [];
        let O = new Set
          , _ = !1;
        if (a.forEach(U => {
            let V = f.routes[U.route.id];
            !V || !V.hasLoader || (!b.some(J => J.route.id === U.route.id) && U.route.id in g && d[U.route.id]?.shouldRevalidate || V.hasClientLoader ? _ = !0 : O.add(U.route.id))
        }
        ),
        O.size === 0)
            return [];
        let L = x1(u, m, c.unstable_trailingSlashAwareDataRequests, "data");
        return _ && O.size > 0 && L.searchParams.set("_routes", a.filter(U => O.has(U.route.id)).map(U => U.route.id).join(",")),
        [L.pathname + L.search]
    }
    , [m, c.unstable_trailingSlashAwareDataRequests, g, o, f, b, a, u, d])
      , x = B.useMemo( () => _1(v, f), [v, f])
      , E = M1(v);
    return B.createElement(B.Fragment, null, S.map(O => B.createElement("link", {
        key: O,
        rel: "prefetch",
        as: "fetch",
        href: O,
        ...r
    })), x.map(O => B.createElement("link", {
        key: O,
        rel: "modulepreload",
        href: O,
        ...r
    })), E.map( ({key: O, link: _}) => B.createElement("link", {
        key: O,
        nonce: r.nonce,
        ..._,
        crossOrigin: _.crossOrigin ?? r.crossOrigin
    })))
}
function L1(...u) {
    return a => {
        u.forEach(r => {
            typeof r == "function" ? r(a) : r != null && (r.current = a)
        }
        )
    }
}
var D1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    D1 && (window.__reactRouterVersion = "7.13.0")
} catch {}
function j1({basename: u, children: a, unstable_useTransitions: r, window: o}) {
    let c = B.useRef();
    c.current == null && (c.current = pv({
        window: o,
        v5Compat: !0
    }));
    let f = c.current
      , [d,m] = B.useState({
        action: f.action,
        location: f.location
    })
      , g = B.useCallback(p => {
        r === !1 ? m(p) : B.startTransition( () => m(p))
    }
    , [r]);
    return B.useLayoutEffect( () => f.listen(g), [f, g]),
    B.createElement(f1, {
        basename: u,
        children: a,
        location: d.location,
        navigationType: d.action,
        navigator: f,
        unstable_useTransitions: r
    })
}
var Cg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Ag = B.forwardRef(function({onClick: a, discover: r="render", prefetch: o="none", relative: c, reloadDocument: f, replace: d, state: m, target: g, to: p, preventScrollReset: b, viewTransition: v, unstable_defaultShouldRevalidate: S, ...x}, E) {
    let {basename: O, unstable_useTransitions: _} = B.useContext(Mt)
      , L = typeof p == "string" && Cg.test(p)
      , U = hg(p, O);
    p = U.to;
    let V = Fv(p, {
        relative: c
    })
      , [J,W,oe] = R1(o, x)
      , I = q1(p, {
        replace: d,
        state: m,
        target: g,
        preventScrollReset: b,
        relative: c,
        viewTransition: v,
        unstable_defaultShouldRevalidate: S,
        unstable_useTransitions: _
    });
    function pe(Q) {
        a && a(Q),
        Q.defaultPrevented || I(Q)
    }
    let Ee = B.createElement("a", {
        ...x,
        ...oe,
        href: U.absoluteURL || V,
        onClick: U.isExternal || f ? a : pe,
        ref: L1(E, W),
        target: g,
        "data-discover": !L && r === "render" ? "true" : void 0
    });
    return J && !L ? B.createElement(B.Fragment, null, Ee, B.createElement(N1, {
        page: V
    })) : Ee
});
Ag.displayName = "Link";
var U1 = B.forwardRef(function({"aria-current": a="page", caseSensitive: r=!1, className: o="", end: c=!1, style: f, to: d, viewTransition: m, children: g, ...p}, b) {
    let v = Pa(d, {
        relative: p.relative
    })
      , S = Un()
      , x = B.useContext(Du)
      , {navigator: E, basename: O} = B.useContext(Mt)
      , _ = x != null && X1(v) && m === !0
      , L = E.encodeLocation ? E.encodeLocation(v).pathname : v.pathname
      , U = S.pathname
      , V = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    r || (U = U.toLowerCase(),
    V = V ? V.toLowerCase() : null,
    L = L.toLowerCase()),
    V && O && (V = on(V, O) || V);
    const J = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
    let W = U === L || !c && U.startsWith(L) && U.charAt(J) === "/", oe = V != null && (V === L || !c && V.startsWith(L) && V.charAt(L.length) === "/"), I = {
        isActive: W,
        isPending: oe,
        isTransitioning: _
    }, pe = W ? a : void 0, Ee;
    typeof o == "function" ? Ee = o(I) : Ee = [o, W ? "active" : null, oe ? "pending" : null, _ ? "transitioning" : null].filter(Boolean).join(" ");
    let Q = typeof f == "function" ? f(I) : f;
    return B.createElement(Ag, {
        ...p,
        "aria-current": pe,
        className: Ee,
        ref: b,
        style: Q,
        to: d,
        viewTransition: m
    }, typeof g == "function" ? g(I) : g)
});
U1.displayName = "NavLink";
var B1 = B.forwardRef( ({discover: u="render", fetcherKey: a, navigate: r, reloadDocument: o, replace: c, state: f, method: d=Au, action: m, onSubmit: g, relative: p, preventScrollReset: b, viewTransition: v, unstable_defaultShouldRevalidate: S, ...x}, E) => {
    let {unstable_useTransitions: O} = B.useContext(Mt)
      , _ = V1()
      , L = Q1(m, {
        relative: p
    })
      , U = d.toLowerCase() === "get" ? "get" : "post"
      , V = typeof m == "string" && Cg.test(m)
      , J = W => {
        if (g && g(W),
        W.defaultPrevented)
            return;
        W.preventDefault();
        let oe = W.nativeEvent.submitter
          , I = oe?.getAttribute("formmethod") || d
          , pe = () => _(oe || W.currentTarget, {
            fetcherKey: a,
            method: I,
            navigate: r,
            replace: c,
            state: f,
            relative: p,
            preventScrollReset: b,
            viewTransition: v,
            unstable_defaultShouldRevalidate: S
        });
        O && r !== !1 ? B.startTransition( () => pe()) : pe()
    }
    ;
    return B.createElement("form", {
        ref: E,
        method: U,
        action: L,
        onSubmit: o ? g : J,
        ...x,
        "data-discover": !V && u === "render" ? "true" : void 0
    })
}
);
B1.displayName = "Form";
function H1(u) {
    return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Og(u) {
    let a = B.useContext(Xl);
    return Ze(a, H1(u)),
    a
}
function q1(u, {target: a, replace: r, state: o, preventScrollReset: c, relative: f, viewTransition: d, unstable_defaultShouldRevalidate: m, unstable_useTransitions: g}={}) {
    let p = bg()
      , b = Un()
      , v = Pa(u, {
        relative: f
    });
    return B.useCallback(S => {
        if (p1(S, a)) {
            S.preventDefault();
            let x = r !== void 0 ? r : Fa(b) === Fa(v)
              , E = () => p(u, {
                replace: x,
                state: o,
                preventScrollReset: c,
                relative: f,
                viewTransition: d,
                unstable_defaultShouldRevalidate: m
            });
            g ? B.startTransition( () => E()) : E()
        }
    }
    , [b, p, v, r, o, a, u, c, f, d, m, g])
}
var G1 = 0
  , Y1 = () => `__${String(++G1)}__`;
function V1() {
    let {router: u} = Og("useSubmit")
      , {basename: a} = B.useContext(Mt)
      , r = r1()
      , o = u.fetch
      , c = u.navigate;
    return B.useCallback(async (f, d={}) => {
        let {action: m, method: g, encType: p, formData: b, body: v} = b1(f, a);
        if (d.navigate === !1) {
            let S = d.fetcherKey || Y1();
            await o(S, r, d.action || m, {
                unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
                preventScrollReset: d.preventScrollReset,
                formData: b,
                body: v,
                formMethod: d.method || g,
                formEncType: d.encType || p,
                flushSync: d.flushSync
            })
        } else
            await c(d.action || m, {
                unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
                preventScrollReset: d.preventScrollReset,
                formData: b,
                body: v,
                formMethod: d.method || g,
                formEncType: d.encType || p,
                replace: d.replace,
                state: d.state,
                fromRouteId: r,
                flushSync: d.flushSync,
                viewTransition: d.viewTransition
            })
    }
    , [o, c, a, r])
}
function Q1(u, {relative: a}={}) {
    let {basename: r} = B.useContext(Mt)
      , o = B.useContext(cn);
    Ze(o, "useFormAction must be used inside a RouteContext");
    let[c] = o.matches.slice(-1)
      , f = {
        ...Pa(u || ".", {
            relative: a
        })
    }
      , d = Un();
    if (u == null) {
        f.search = d.search;
        let m = new URLSearchParams(f.search)
          , g = m.getAll("index");
        if (g.some(b => b === "")) {
            m.delete("index"),
            g.filter(v => v).forEach(v => m.append("index", v));
            let b = m.toString();
            f.search = b ? `?${b}` : ""
        }
    }
    return (!u || u === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (f.pathname = f.pathname === "/" ? r : sn([r, f.pathname])),
    Fa(f)
}
function X1(u, {relative: a}={}) {
    let r = B.useContext(gg);
    Ze(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: o} = Og("useViewTransitionState")
      , c = Pa(u, {
        relative: a
    });
    if (!r.isTransitioning)
        return !1;
    let f = on(r.currentLocation.pathname, o) || r.currentLocation.pathname
      , d = on(r.nextLocation.pathname, o) || r.nextLocation.pathname;
    return Mu(c.pathname, d) != null || Mu(c.pathname, f) != null
}
function Z1() {
    const u = Un();
    return R.jsxs("div", {
        className: "relative flex flex-col items-center justify-center h-screen text-center px-4",
        children: [R.jsx("h1", {
            className: "absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0",
            children: "404"
        }), R.jsxs("div", {
            className: "relative z-10",
            children: [R.jsx("h1", {
                className: "text-xl md:text-2xl font-semibold mt-6",
                children: "This page has not been generated"
            }), R.jsx("p", {
                className: "mt-2 text-base text-gray-400 font-mono",
                children: u.pathname
            }), R.jsx("p", {
                className: "mt-4 text-lg md:text-xl text-gray-500",
                children: "Tell me more about this page, so I can generate it"
            })]
        })]
    })
}
function K1() {
    const [u,a] = B.useState(!1);
    B.useEffect( () => {
        a(!0)
    }
    , []);
   
    return R.jsx("section", {
        id: "home",
        className: "relative min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white pt-[15vh] pb-20 px-6",
        children: R.jsxs("div", {
            className: "max-w-[1280px] mx-auto",
            children: [R.jsxs("div", {
                className: "text-center mb-10",
                children: [R.jsx("h1", {
                    className: `font-serif text-[72px] leading-[1.1] tracking-[0.02em] text-[#1A1A1A] transition-all duration-600 ${u ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    style: {
                        transitionDelay: "200ms"
                    },
                    children: "Wellness That"
                }), R.jsxs("h1", {
                    className: `font-serif text-[72px] leading-[1.1] tracking-[0.02em] text-[#1A1A1A] transition-all duration-600 ${u ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    style: {
                        transitionDelay: "400ms"
                    },
                    children: ["Feels Like Coming Home ", R.jsx("span", {
                        className: "text-[64px]",
                        children: "🌿"
                    })]
                })]
            }), R.jsx("div", {
                className: "flex items-end justify-center gap-4 mb-16 px-4",
                children: r.map( (o, c) => R.jsxs("div", {
                    className: `relative w-[280px] h-[380px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-3 hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] cursor-pointer ${o.elevated ? "translate-y-[-20px]" : ""}`,
                    style: {
                        transform: `rotate(${o.rotation}deg) ${o.elevated ? "translateY(-20px)" : ""}`,
                        backgroundColor: o.color
                    },
                    children: [R.jsx("img", {
                        src: o.image,
                        alt: "Wellness lifestyle",
                        className: "w-full h-full object-cover transition-transform duration-400 hover:scale-103"
                    }), R.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    })]
                }, c))
            }), R.jsx("div", {
                className: "max-w-[520px] mx-auto text-center mb-12",
                children: R.jsx("p", {
                    className: "text-lg leading-[1.7] text-[#6B6B6B]",
                    children: "Transform your life through personalized wellness programs that nurture your body, mind, and spirit. Experience holistic health coaching designed for lasting change."
                })
            }), R.jsxs("div", {
                className: "flex items-center justify-center gap-5",
                children: [R.jsx("button", {
                    className: "h-[52px] px-12 bg-[#1A1A1A] text-white rounded-full text-[15px] font-medium transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] whitespace-nowrap cursor-pointer",
                    children: "Start Your Journey"
                }), R.jsx("button", {
                    className: "h-[52px] px-12 text-[#8A8A8A] rounded-full text-[15px] font-medium transition-all duration-200 hover:text-[#B8956A] whitespace-nowrap cursor-pointer",
                    children: "Learn More"
                })]
            })]
        })
    })
}
function k1() {
    const [u,a] = B.useState(!1)
      , r = B.useRef(null);
    return B.useEffect( () => {
        const o = new IntersectionObserver( ([c]) => {
            c.isIntersecting && a(!0)
        }
        ,{
            threshold: .2
        });
        return r.current && o.observe(r.current),
        () => o.disconnect()
    }
    , []),
    R.jsx("section", {
        id: "about",
        ref: r,
        className: "py-32 px-6 bg-white",
        children: R.jsx("div", {
            className: "max-w-[1200px] mx-auto",
            children: R.jsxs("div", {
                className: "grid md:grid-cols-[40%_60%] gap-16 items-start",
                children: [R.jsxs("div", {
                    className: `transition-all duration-600 ${u ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`,
                    children: [R.jsx("h2", {
                        className: "font-serif text-[48px] leading-tight text-[#C4C4C4] mb-4",
                        children: "Your Wellness"
                    }), R.jsx("h2", {
                        className: "font-serif italic text-[56px] leading-tight text-[#2A2A2A]",
                        children: "Journey Starts Here"
                    }), R.jsx("div", {
                        className: "mt-10 w-full h-[380px] rounded-lg overflow-hidden shadow-md",
                        children: R.jsx("img", {
                            // src: "https://readdy.ai/api/search-image?query=Serene%20woman%20practicing%20yoga%20in%20a%20sunlit%20minimalist%20studio%20with%20warm%20beige%20tones%20and%20soft%20natural%20light%20streaming%20through%20large%20windows%20creating%20a%20calm%20peaceful%20atmosphere%20feminine%20wellness%20lifestyle%20photography%20with%20neutral%20earthy%20color%20palette%20and%20clean%20background&width=480&height=380&seq=about-left-img-1&orientation=landscape",
                            // alt: "Wellness journey - serene yoga practice in sunlit studio",
                            title: "Your wellness journey starts here - holistic health coaching",
                            className: "w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.03]",
                            loading: "lazy"
                        })
                    })]
                }), R.jsx("div", {
                    className: `transition-all duration-600 ${u ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`,
                    style: {
                        transitionDelay: "200ms"
                    },
                    children: R.jsxs("div", {
                        className: "w-[75%]",
                        children: [R.jsx("p", {
                            className: "text-[17px] leading-[1.9] text-[#4A4A4A] mb-6",
                            children: "I believe that true wellness is not about quick fixes or restrictive diets. It's about creating sustainable habits that honor your unique body, mind, and lifestyle. Through personalized coaching and evidence-based practices, I help women reclaim their vitality and confidence."
                        }), R.jsx("p", {
                            className: "text-[17px] leading-[1.9] text-[#4A4A4A] mb-6",
                            children: "With over a decade of experience in holistic health, I've guided hundreds of clients toward lasting transformation. My approach combines nutrition science, mindful movement, and emotional wellness to create a comprehensive path to your best self."
                        }), R.jsx("p", {
                            className: "text-[17px] leading-[1.9] text-[#4A4A4A]",
                            children: "Whether you're looking to boost your energy, find balance, or completely transform your relationship with health, I'm here to support you every step of the way."
                        })]
                    })
                })]
            })
        })
    })
}

    return R.jsx("section", {
        id: "programs",
        className: "py-32 px-6 bg-[#FAFAFA]",
        children: R.jsxs("div", {
            className: "max-w-[1200px] mx-auto",
            children: [R.jsxs("div", {
                className: "text-center mb-20",
                children: [R.jsx("h2", {
                    className: "font-serif text-[56px] leading-tight text-[#1A1A1A] mb-4",
                    children: "Programs & Services"
                }), R.jsx("p", {
                    className: "text-lg text-[#6B6B6B]",
                    children: "Choose the path that resonates with your wellness goals"
                })]
            }), R.jsx("div", {
                className: "grid md:grid-cols-3 gap-10",
                children: u.map( (a, r) => R.jsxs("div", {
                    className: "group bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-250 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] cursor-pointer",
                    children: [R.jsx("div", {
                        className: "relative w-full h-[240px] overflow-hidden",
                        children: R.jsx("img", {
                            src: a.image,
                            alt: a.title,
                            className: "w-full h-full object-cover transition-transform duration-400 group-hover:scale-103"
                        })
                    }), R.jsxs("div", {
                        className: "p-8",
                        children: [R.jsx("div", {
                            className: "inline-block px-4 py-2 bg-[#E8F5E9] rounded-full mb-6 -mt-12 relative",
                            children: R.jsx("span", {
                                className: "text-xs font-semibold tracking-[0.08em] text-[#2A2A2A] uppercase",
                                children: a.label
                            })
                        }), R.jsx("h3", {
                            className: "text-[24px] font-bold leading-[1.3] text-[#1A1A1A] mb-4 line-clamp-2",
                            children: a.title
                        }), R.jsx("p", {
                            className: "text-[16px] leading-[1.6] text-[#6B6B6B] line-clamp-3",
                            children: a.description
                        }), R.jsxs("button", {
                            className: "mt-6 text-[15px] font-medium text-[#B8956A] hover:text-[#A07D52] transition-colors duration-200 flex items-center gap-2 group/btn cursor-pointer whitespace-nowrap",
                            children: ["Learn More", R.jsx("i", {
                                className: "ri-arrow-right-line text-lg transition-transform duration-200 group-hover/btn:translate-x-1"
                            })]
                        })]
                    })]
                }, r))
            })]
        })
    })

    return R.jsxs("section", {
        id: "vitamins",
        className: "relative py-32 px-6 bg-[#F7F4EF] overflow-hidden",
        children: [R.jsx("div", {
            className: "absolute top-0 left-0 right-0 h-16 bg-white",
            children: R.jsx("svg", {
                className: "absolute bottom-0 w-full h-16",
                viewBox: "0 0 1200 60",
                preserveAspectRatio: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: R.jsx("path", {
                    d: "M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z",
                    fill: "#F7F4EF"
                })
            })
        }), R.jsx("div", {
            className: "max-w-[1200px] mx-auto",
            children: R.jsxs("div", {
                className: "grid md:grid-cols-[45%_55%] gap-16 items-center",
                children: [R.jsx("div", {
                    className: "relative flex items-center justify-center gap-6 px-8",
                    children: u.map( (a, r) => R.jsx("div", {
                        className: "relative transition-transform duration-300 hover:-translate-y-2 cursor-pointer",
                        style: {
                            transform: `rotate(${a.rotation}deg)`,
                            zIndex: r === 1 ? 10 : 5
                        },
                        children: R.jsx("div", {
                            className: "w-[180px] h-[280px] rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.1)]",
                            children: R.jsx("img", {
                                src: a.image,
                                alt: "Vitamin supplement",
                                className: "w-full h-full object-cover"
                            })
                        })
                    }, r))
                }), R.jsxs("div", {
                    children: [R.jsx("div", {
                        className: "inline-block px-5 py-2 bg-[#B8956A] rounded-full mb-6",
                        children: R.jsx("span", {
                            className: "text-sm font-semibold tracking-[0.08em] text-white uppercase",
                            children: "Coming Soon"
                        })
                    }), R.jsx("h2", {
                        className: "font-serif text-[64px] leading-tight text-[#2A2A2A] mb-6",
                        children: "Nourish From Within"
                    }), R.jsx("p", {
                        className: "text-lg leading-[1.8] text-[#4A4A4A] mb-8 max-w-[90%]",
                        children: "Introducing our carefully formulated vitamin range, designed to complement your wellness journey. Each supplement is crafted with premium ingredients to support your body's natural vitality, energy, and balance."
                    }), R.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [R.jsx("button", {
                            className: "h-[56px] px-10 bg-[#B8956A] text-white rounded-full text-[16px] font-medium transition-all duration-200 hover:bg-[#A07D52] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(184,149,106,0.3)] whitespace-nowrap cursor-pointer",
                            children: "Notify Me When It Launches"
                        }), R.jsx("a", {
                            href: "#learn-more",
                            className: "text-[16px] text-[#6B6B6B] hover:text-[#B8956A] transition-colors duration-200 underline cursor-pointer",
                            children: "Learn About the Formula"
                        })]
                    })]
                })]
            })
        })]
    })


      , o = () => {
        a(d => d === 0 ? r.length - 1 : d - 1)
    }
      , c = () => {
        a(d => d === r.length - 1 ? 0 : d + 1)
    }
      , f = r[u];
    return R.jsx("section", {
        className: "py-32 px-6 bg-white",
        children: R.jsx("div", {
            className: "max-w-[1200px] mx-auto",
            children: R.jsxs("div", {
                className: "grid md:grid-cols-[40%_60%] gap-16 items-center",
                children: [R.jsx("div", {
                    className: "relative",
                    children: R.jsx("div", {
                        className: "w-full h-[500px] rounded-3xl overflow-hidden border border-black/[0.06]",
                        children: R.jsx("img", {
                            src: f.image,
                            alt: f.name,
                            className: "w-full h-full object-cover",
                            style: {
                                backgroundColor: "#E3F2FD"
                            }
                        })
                    })
                }), R.jsxs("div", {
                    children: [R.jsx("p", {
                        className: "text-sm text-[#8A8A8A] mb-4",
                        children: "(Client Success)"
                    }), R.jsxs("h2", {
                        className: "mb-20",
                        children: [R.jsx("span", {
                            className: "block font-bold text-[48px] leading-tight text-[#1A1A1A]",
                            children: "Transformative"
                        }), R.jsx("span", {
                            className: "block font-light text-[48px] leading-tight text-[#C4C4C4]",
                            children: "Experience"
                        })]
                    }), R.jsxs("div", {
                        className: "mb-8 max-w-[85%]",
                        children: [R.jsx("span", {
                            className: "text-[32px] text-[#B8956A] leading-none",
                            children: "“"
                        }), R.jsx("p", {
                            className: "text-xl leading-[1.7] text-[#4A4A4A] my-4",
                            children: f.quote
                        }), R.jsx("span", {
                            className: "text-[32px] text-[#B8956A] leading-none",
                            children: "”"
                        })]
                    }), R.jsxs("p", {
                        className: "text-xl font-bold text-[#1A1A1A] mb-1",
                        children: ["— ", f.name]
                    }), R.jsx("p", {
                        className: "text-sm text-[#B8956A] mb-12",
                        children: f.result
                    }), R.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [R.jsx("button", {
                            onClick: o,
                            className: "w-12 h-12 rounded-full border-2 border-[#E0E0E0] flex items-center justify-center text-[#6B6B6B] hover:border-[#B8956A] hover:text-[#B8956A] transition-all duration-200 hover:scale-110 cursor-pointer",
                            "aria-label": "Previous testimonial",
                            children: R.jsx("i", {
                                className: "ri-arrow-left-line text-xl"
                            })
                        }), R.jsx("button", {
                            onClick: c,
                            className: "w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#B8956A] transition-all duration-200 hover:scale-110 cursor-pointer",
                            "aria-label": "Next testimonial",
                            children: R.jsx("i", {
                                className: "ri-arrow-right-line text-xl"
                            })
                        })]
                    })]
                })]
            })
        })
    })
}
function W1() {
    const u = [{
        icon: "ri-heart-pulse-line",
        title: "Personalized Approach",
        description: "Every program is tailored to your unique body, lifestyle, and wellness goals for optimal results."
    }, {
        icon: "ri-flask-line",
        title: "Evidence-Based Methods",
        description: "All recommendations are grounded in the latest nutrition science and holistic health research."
    }, {
        icon: "ri-team-line",
        title: "Ongoing Support",
        description: "Regular check-ins, accountability, and guidance throughout your entire wellness journey."
    }, {
        icon: "ri-plant-line",
        title: "Holistic Wellness",
        description: "Address nutrition, movement, sleep, stress, and mindfulness for complete transformation."
    }, {
        icon: "ri-time-line",
        title: "Sustainable Habits",
        description: "Build lasting lifestyle changes that fit seamlessly into your daily routine and schedule."
    }, {
        icon: "ri-shield-check-line",
        title: "Safe & Effective",
        description: "Gentle, sustainable practices that honor your body and promote long-term health and vitality."
    }];
    return R.jsx("section", {
        className: "py-32 px-6 bg-[#FAFAFA]",
        children: R.jsxs("div", {
            className: "max-w-[1200px] mx-auto",
            children: [R.jsxs("div", {
                className: "text-center mb-20",
                children: [R.jsx("div", {
                    className: "inline-block px-6 py-2 border-2 border-[#E0E0E0] rounded-full mb-6",
                    children: R.jsx("span", {
                        className: "text-sm font-semibold tracking-wide text-[#6B6B6B] uppercase",
                        children: "Features"
                    })
                }), R.jsx("h2", {
                    className: "font-bold text-[56px] leading-tight text-[#1A1A1A] mb-4 max-w-[700px] mx-auto",
                    children: "Why Choose My Wellness Programs"
                }), R.jsx("p", {
                    className: "text-lg text-[#6B6B6B] max-w-[600px] mx-auto",
                    children: "Experience a comprehensive approach to health that transforms your life from the inside out"
                })]
            }), R.jsx("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: u.map( (a, r) => R.jsxs("div", {
                    className: "group bg-white p-10 rounded-2xl transition-all duration-300 hover:bg-[#B8956A] cursor-pointer",
                    children: [R.jsx("div", {
                        className: "w-12 h-12 rounded-full bg-[#F0F0F0] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white",
                        children: R.jsx("i", {
                            className: `${a.icon} text-2xl text-[#6B6B6B] transition-colors duration-300 group-hover:text-[#B8956A]`
                        })
                    }), R.jsx("h3", {
                        className: "text-2xl font-bold leading-tight text-[#1A1A1A] mb-4 transition-colors duration-300 group-hover:text-white",
                        children: a.title
                    }), R.jsx("p", {
                        className: "text-[16px] leading-[1.6] text-[#6B6B6B] transition-colors duration-300 group-hover:text-white/90",
                        children: a.description
                    }), R.jsx("div", {
                        className: "mt-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                        children: R.jsx("i", {
                            className: "ri-arrow-right-line text-2xl text-white"
                        })
                    })]
                }, r))
            })]
        })
    })
}
function I1() {
    const [u,a] = B.useState("")
      , r = c => {
        c.preventDefault(),
        console.log("Email submitted:", u),
        a("")
    }
      , o = {
        Programs: [{
            label: "Nutrition Coaching",
            href: "#nutrition"
        }, {
            label: "Movement Program",
            href: "#movement"
        }, {
            label: "Lifestyle Transformation",
            href: "#lifestyle"
        }, {
            label: "Group Circles",
            href: "#group"
        }],
        Resources: [{
            label: "Blog",
            href: "#blog"
        }, {
            label: "Success Stories",
            href: "#stories"
        }, {
            label: "Free Guide",
            href: "#guide"
        }, {
            label: "FAQ",
            href: "#faq"
        }],
        Connect: [{
            label: "Instagram",
            href: "#instagram"
        }, {
            label: "Facebook",
            href: "#facebook"
        }, {
            label: "Contact",
            href: "#contact"
        }, {
            label: "Book Consultation",
            href: "#book"
        }]
    };
    return R.jsx("footer", {
        id: "contact",
        className: "bg-[#F7F4EF] border-t border-black/[0.08]",
        children: R.jsxs("div", {
            className: "max-w-[1200px] mx-auto px-8 py-24",
            children: [R.jsxs("div", {
                className: "grid md:grid-cols-[40%_60%] gap-16",
                children: [R.jsxs("div", {
                    children: [R.jsxs("h3", {
                        className: "font-serif text-[40px] leading-tight text-[#1A1A1A] mb-8",
                        children: ["Start Your", R.jsx("br", {}), "Wellness Journey"]
                    }), R.jsx("p", {
                        className: "text-[16px] leading-relaxed text-[#6B6B6B] mb-12",
                        children: "Join our community and receive wellness tips, healthy recipes, and exclusive program updates delivered to your inbox."
                    }), R.jsxs("form", {
                        onSubmit: r,
                        children: [R.jsx("label", {
                            className: "block text-sm font-semibold tracking-wide text-[#4A4A4A] uppercase mb-4",
                            children: "Stay Connected"
                        }), R.jsx("div", {
                            className: "mb-4",
                            children: R.jsx("input", {
                                type: "email",
                                value: u,
                                onChange: c => a(c.target.value),
                                placeholder: "Enter your email",
                                className: "w-full bg-transparent border-b-2 border-[#B8956A] pb-3 text-[16px] text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-[#A07D52] transition-colors duration-200",
                                required: !0
                            })
                        }), R.jsx("button", {
                            type: "submit",
                            className: "h-12 px-8 border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-lg text-[15px] font-medium hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 whitespace-nowrap cursor-pointer",
                            children: "Subscribe"
                        })]
                    })]
                }), R.jsx("div", {
                    className: "grid grid-cols-3 gap-8",
                    children: Object.entries(o).map( ([c,f]) => R.jsxs("div", {
                        children: [R.jsx("h4", {
                            className: "text-sm font-bold tracking-wide text-[#1A1A1A] uppercase mb-6",
                            children: c
                        }), R.jsx("ul", {
                            className: "space-y-5",
                            children: f.map(d => R.jsx("li", {
                                children: R.jsx("a", {
                                    href: d.href,
                                    className: "text-[16px] text-[#6B6B6B] hover:text-[#B8956A] hover:translate-x-1 transition-all duration-200 inline-block cursor-pointer",
                                    children: d.label
                                })
                            }, d.label))
                        })]
                    }, c))
                })]
            }), R.jsxs("div", {
                className: "mt-20 pt-8 border-t border-black/[0.08] flex flex-col md:flex-row justify-between items-center gap-4",
                children: [R.jsx("p", {
                    className: "text-sm text-[#8A8A8A]",
                    children: "© 2025 Dana Landgren Wellness. All rights reserved."
                }), R.jsxs("div", {
                    className: "flex items-center gap-6",
                    children: [R.jsx("a", {
                        href: "#privacy",
                        className: "text-sm text-[#8A8A8A] hover:text-[#B8956A] transition-colors duration-200 cursor-pointer",
                        children: "Privacy Policy"
                    }), R.jsx("a", {
                        href: "#terms",
                        className: "text-sm text-[#8A8A8A] hover:text-[#B8956A] transition-colors duration-200 cursor-pointer",
                        children: "Terms of Service"
                    }), R.jsx("a", {
                        href: "https://readdy.ai/?ref=logo",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-sm text-[#8A8A8A] hover:text-[#B8956A] transition-colors duration-200 cursor-pointer",
                        children: "Website Builder"
                    })]
                })]
            })]
        })
    })
}
function P1() {
    const [u,a] = B.useState(!1)
      , [r,o] = B.useState(!1);
    B.useEffect( () => {
        const f = () => {
            a(window.scrollY > 50)
        }
        ;
        return window.addEventListener("scroll", f),
        () => window.removeEventListener("scroll", f)
    }
    , []);
    const c = [{
        label: "Home",
        href: "#home"
    }, {
        label: "About",
        href: "#about"
    }, {
        label: "Programs",
        href: "#programs"
    }, {
        label: "Vitamins",
        href: "#vitamins"
    }, {
        label: "Contact",
        href: "#contact"
    }];
    return R.jsxs(R.Fragment, {
        children: [R.jsx("nav", {
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${u ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] h-[70px]" : "bg-transparent h-[80px]"}`,
            children: R.jsxs("div", {
                className: "max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between",
                children: [R.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [R.jsx("div", {
                        className: "w-8 h-8 rounded-full bg-[#4ECDC4] flex items-center justify-center",
                        children: R.jsx("span", {
                            className: "text-white text-sm font-semibold",
                            children: "DL"
                        })
                    }), R.jsx("span", {
                        className: "text-lg font-serif text-[#1A1A1A]",
                        children: "Dana Landgren"
                    })]
                }), R.jsx("div", {
                    className: "hidden md:flex items-center gap-10",
                    children: c.map(f => R.jsxs("a", {
                        href: f.href,
                        className: "relative text-[15px] text-[#4A4A4A] hover:text-[#B8956A] transition-colors duration-200 group cursor-pointer",
                        children: [f.label, R.jsx("span", {
                            className: "absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#B8956A] transition-all duration-200 group-hover:w-full group-hover:left-0"
                        })]
                    }, f.label))
                }), R.jsxs("button", {
                    onClick: () => o(!r),
                    className: "md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[6px] cursor-pointer",
                    "aria-label": "Toggle menu",
                    children: [R.jsx("span", {
                        className: `w-6 h-[2px] bg-[#1A1A1A] transition-all duration-300 ${r ? "rotate-45 translate-y-[8px]" : ""}`
                    }), R.jsx("span", {
                        className: `w-6 h-[2px] bg-[#1A1A1A] transition-all duration-300 ${r ? "opacity-0" : ""}`
                    }), R.jsx("span", {
                        className: `w-6 h-[2px] bg-[#1A1A1A] transition-all duration-300 ${r ? "-rotate-45 -translate-y-[8px]" : ""}`
                    })]
                })]
            })
        }), R.jsxs("div", {
            className: `fixed inset-0 z-40 md:hidden transition-all duration-300 ${r ? "visible" : "invisible"}`,
            children: [R.jsx("div", {
                className: `absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${r ? "opacity-100" : "opacity-0"}`,
                onClick: () => o(!1)
            }), R.jsx("div", {
                className: `absolute top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl transition-transform duration-300 ${r ? "translate-x-0" : "translate-x-full"}`,
                children: R.jsx("div", {
                    className: "flex flex-col pt-24 px-8",
                    children: c.map( (f, d) => R.jsx("a", {
                        href: f.href,
                        onClick: () => o(!1),
                        className: "text-2xl text-[#1A1A1A] hover:text-[#B8956A] transition-colors duration-200 py-6 border-b border-gray-100 cursor-pointer",
                        style: {
                            animation: r ? `fadeIn 300ms ease-out ${d * 50}ms both` : "none"
                        },
                        children: f.label
                    }, f.label))
                })
            })]
        }), R.jsx("style", {
            children: `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `
        })]
    })
}
function e2() {
    return R.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [R.jsx(P1, {}), R.jsx(K1, {}), R.jsx(k1, {}), R.jsx(J1, {}), R.jsx($1, {}), R.jsx(F1, {}), R.jsx(W1, {}), R.jsx(I1, {})]
    })
}
const Tg = [{
    path: "/",
    element: R.jsx(e2, {})
}, {
    path: "*",
    element: R.jsx(Z1, {})
}]
  , t2 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Tg
}, Symbol.toStringTag, {
    value: "Module"
}));
let Rg;
const n2 = new Promise(u => {
    Rg = u
}
);
function Ng() {
    const u = Iv(Tg)
      , a = bg();
    return B.useEffect( () => {
        window.REACT_APP_NAVIGATE = a,
        Rg(window.REACT_APP_NAVIGATE)
    }
    ),
    u
}
const l2 = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppRoutes: Ng,
    navigatePromise: n2
}, Symbol.toStringTag, {
    value: "Module"
}));
function a2() {
    return R.jsx(ky, {
        i18n: et,
        children: R.jsx(j1, {
            basename: "/preview/45d5a1e4-ddb4-46e5-a5eb-751d206edf7d/6560744",
            children: R.jsx(Ng, {})
        })
    })
}
gv.createRoot(document.getElementById("root")).render(R.jsx(B.StrictMode, {
    children: R.jsx(a2, {})
}));
const zu = [];
let Mg = !0;
const zg = console.error;
function Tm(u) {
    zu.length > 5 || !Mg || zu.push(u)
}
function Lg(u) {
    zu.push({
        type: "runtime",
        args: u
    })
}
function Dg(u) {
    u.preventDefault()
}
function i2(u) {
    try {
        const a = u.find(r => r instanceof Error);
        if (a && a.stack)
            Tm({
                type: "console.error",
                args: a
            });
        else if (u.length > 0) {
            const r = u.map(c => typeof c == "object" ? JSON.stringify(c) : String(c)).join(" ")
              , o = new Error(r);
            Tm({
                type: "console.error",
                args: o
            })
        }
    } catch (a) {
        console.warn(a)
    }
}
window.addEventListener("error", Lg);
window.addEventListener("unhandledrejection", Dg);
console.error = function(...a) {
    i2(a),
    zg.apply(this, a)
}
;
function u2() {
    return window.removeEventListener("error", Lg),
    window.removeEventListener("unhandledrejection", Dg),
    console.error = zg,
    Mg = !1,
    zu
}
const r2 = 1e3
  , Rm = Symbol("postMessageResponseTimeout");
let Su = 0;
const ho = "*";
class ei {
    client;
    baseTimeout;
    waitRes = new Map;
    removeListeners = new Set;
    clear;
    constructor(a, r) {
        this.client = a,
        this.baseTimeout = r?.timeout || r2;
        const o = this.emitResponse.bind(this);
        this.clear = () => {
            window.removeEventListener("message", o)
        }
        ,
        window.addEventListener("message", o)
    }
    destroy() {
        this.clear(),
        this.removeListeners.forEach(a => a())
    }
    isTimeout(a) {
        return a === Rm
    }
    post(a, r, o) {
        Su++;
        const {timeout: c, origin: f=ho} = o || {};
        return this.client.postMessage({
            data: r,
            id: Su,
            type: a
        }, f),
        new Promise(d => {
            this.waitRes.set(Su, m => {
                d(m)
            }
            ),
            setTimeout( () => {
                this.waitRes.delete(Su),
                d(Rm)
            }
            , c || this.baseTimeout)
        }
        )
    }
    on(a, r, o) {
        const {once: c, origin: f=ho} = o || {}
          , d = async g => {
            const {id: p, type: b, data: v} = g.data;
            let S;
            b === a && (S = await r(v),
            console.log(a, c, S, v),
            (p && f === g.origin || f === ho) && g.source?.postMessage({
                fromType: a,
                id: p,
                data: S
            }, g.origin),
            c && m())
        }
        ;
        window.addEventListener("message", d);
        const m = () => {
            window.removeEventListener("message", d),
            this.removeListeners.delete(m)
        }
        ;
        return this.removeListeners.add(m),
        m
    }
    emitResponse(a) {
        const r = a.data
          , {id: o, data: c} = r
          , f = this.waitRes.get(o);
        f && f(c)
    }
}
var Va = {}, mo = {}, go = {}, po = {}, Nm;
function s2() {
    if (Nm)
        return po;
    Nm = 1;
    const u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    return po.encode = function(a) {
        if (0 <= a && a < u.length)
            return u[a];
        throw new TypeError("Must be between 0 and 63: " + a)
    }
    ,
    po
}
var Mm;
function jg() {
    if (Mm)
        return go;
    Mm = 1;
    const u = s2()
      , a = 5
      , r = 1 << a
      , o = r - 1
      , c = r;
    function f(d) {
        return d < 0 ? (-d << 1) + 1 : (d << 1) + 0
    }
    return go.encode = function(m) {
        let g = "", p, b = f(m);
        do
            p = b & o,
            b >>>= a,
            b > 0 && (p |= c),
            g += u.encode(p);
        while (b > 0);
        return g
    }
    ,
    go
}
var jt = {};
const o2 = {}
  , c2 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: o2
}, Symbol.toStringTag, {
    value: "Module"
}))
  , f2 = py(c2);
var yo, zm;
function d2() {
    return zm || (zm = 1,
    yo = typeof URL == "function" ? URL : f2.URL),
    yo
}
var Lm;
function Bu() {
    if (Lm)
        return jt;
    Lm = 1;
    const u = d2();
    function a(Q, Z, k) {
        if (Z in Q)
            return Q[Z];
        if (arguments.length === 3)
            return k;
        throw new Error('"' + Z + '" is a required argument.')
    }
    jt.getArg = a;
    const r = (function() {
        return !("__proto__"in Object.create(null))
    }
    )();
    function o(Q) {
        return Q
    }
    function c(Q) {
        return d(Q) ? "$" + Q : Q
    }
    jt.toSetString = r ? o : c;
    function f(Q) {
        return d(Q) ? Q.slice(1) : Q
    }
    jt.fromSetString = r ? o : f;
    function d(Q) {
        if (!Q)
            return !1;
        const Z = Q.length;
        if (Z < 9 || Q.charCodeAt(Z - 1) !== 95 || Q.charCodeAt(Z - 2) !== 95 || Q.charCodeAt(Z - 3) !== 111 || Q.charCodeAt(Z - 4) !== 116 || Q.charCodeAt(Z - 5) !== 111 || Q.charCodeAt(Z - 6) !== 114 || Q.charCodeAt(Z - 7) !== 112 || Q.charCodeAt(Z - 8) !== 95 || Q.charCodeAt(Z - 9) !== 95)
            return !1;
        for (let k = Z - 10; k >= 0; k--)
            if (Q.charCodeAt(k) !== 36)
                return !1;
        return !0
    }
    function m(Q, Z) {
        return Q === Z ? 0 : Q === null ? 1 : Z === null ? -1 : Q > Z ? 1 : -1
    }
    function g(Q, Z) {
        let k = Q.generatedLine - Z.generatedLine;
        return k !== 0 || (k = Q.generatedColumn - Z.generatedColumn,
        k !== 0) || (k = m(Q.source, Z.source),
        k !== 0) || (k = Q.originalLine - Z.originalLine,
        k !== 0) || (k = Q.originalColumn - Z.originalColumn,
        k !== 0) ? k : m(Q.name, Z.name)
    }
    jt.compareByGeneratedPositionsInflated = g;
    function p(Q) {
        return JSON.parse(Q.replace(/^\)]}'[^\n]*\n/, ""))
    }
    jt.parseSourceMapInput = p;
    const b = "http:"
      , v = `${b}//host`;
    function S(Q) {
        return Z => {
            const k = L(Z)
              , le = O(Z)
              , ce = new u(Z,le);
            Q(ce);
            const Ce = ce.toString();
            return k === "absolute" ? Ce : k === "scheme-relative" ? Ce.slice(b.length) : k === "path-absolute" ? Ce.slice(v.length) : U(le, Ce)
        }
    }
    function x(Q, Z) {
        return new u(Q,Z).toString()
    }
    function E(Q, Z) {
        let k = 0;
        do {
            const le = Q + k++;
            if (Z.indexOf(le) === -1)
                return le
        } while (!0)
    }
    function O(Q) {
        const Z = Q.split("..").length - 1
          , k = E("p", Q);
        let le = `${v}/`;
        for (let ce = 0; ce < Z; ce++)
            le += `${k}/`;
        return le
    }
    const _ = /^[A-Za-z0-9\+\-\.]+:/;
    function L(Q) {
        return Q[0] === "/" ? Q[1] === "/" ? "scheme-relative" : "path-absolute" : _.test(Q) ? "absolute" : "path-relative"
    }
    function U(Q, Z) {
        typeof Q == "string" && (Q = new u(Q)),
        typeof Z == "string" && (Z = new u(Z));
        const k = Z.pathname.split("/")
          , le = Q.pathname.split("/");
        for (le.length > 0 && !le[le.length - 1] && le.pop(); k.length > 0 && le.length > 0 && k[0] === le[0]; )
            k.shift(),
            le.shift();
        return le.map( () => "..").concat(k).join("/") + Z.search + Z.hash
    }
    const V = S(Q => {
        Q.pathname = Q.pathname.replace(/\/?$/, "/")
    }
    )
      , J = S(Q => {
        Q.href = new u(".",Q.toString()).toString()
    }
    )
      , W = S(Q => {}
    );
    jt.normalize = W;
    function oe(Q, Z) {
        const k = L(Z)
          , le = L(Q);
        if (Q = V(Q),
        k === "absolute")
            return x(Z, void 0);
        if (le === "absolute")
            return x(Z, Q);
        if (k === "scheme-relative")
            return W(Z);
        if (le === "scheme-relative")
            return x(Z, x(Q, v)).slice(b.length);
        if (k === "path-absolute")
            return W(Z);
        if (le === "path-absolute")
            return x(Z, x(Q, v)).slice(v.length);
        const ce = O(Z + Q)
          , Ce = x(Z, x(Q, ce));
        return U(ce, Ce)
    }
    jt.join = oe;
    function I(Q, Z) {
        const k = pe(Q, Z);
        return typeof k == "string" ? k : W(Z)
    }
    jt.relative = I;
    function pe(Q, Z) {
        if (L(Q) !== L(Z))
            return null;
        const le = O(Q + Z)
          , ce = new u(Q,le)
          , Ce = new u(Z,le);
        try {
            new u("",Ce.toString())
        } catch {
            return null
        }
        return Ce.protocol !== ce.protocol || Ce.user !== ce.user || Ce.password !== ce.password || Ce.hostname !== ce.hostname || Ce.port !== ce.port ? null : U(ce, Ce)
    }
    function Ee(Q, Z, k) {
        Q && L(Z) === "path-absolute" && (Z = Z.replace(/^\//, ""));
        let le = W(Z || "");
        return Q && (le = oe(Q, le)),
        k && (le = oe(J(k), le)),
        le
    }
    return jt.computeSourceURL = Ee,
    jt
}
var vo = {}, Dm;
function Ug() {
    if (Dm)
        return vo;
    Dm = 1;
    class u {
        constructor() {
            this._array = [],
            this._set = new Map
        }
        static fromArray(r, o) {
            const c = new u;
            for (let f = 0, d = r.length; f < d; f++)
                c.add(r[f], o);
            return c
        }
        size() {
            return this._set.size
        }
        add(r, o) {
            const c = this.has(r)
              , f = this._array.length;
            (!c || o) && this._array.push(r),
            c || this._set.set(r, f)
        }
        has(r) {
            return this._set.has(r)
        }
        indexOf(r) {
            const o = this._set.get(r);
            if (o >= 0)
                return o;
            throw new Error('"' + r + '" is not in the set.')
        }
        at(r) {
            if (r >= 0 && r < this._array.length)
                return this._array[r];
            throw new Error("No element indexed by " + r)
        }
        toArray() {
            return this._array.slice()
        }
    }
    return vo.ArraySet = u,
    vo
}
var bo = {}, jm;
function h2() {
    if (jm)
        return bo;
    jm = 1;
    const u = Bu();
    function a(o, c) {
        const f = o.generatedLine
          , d = c.generatedLine
          , m = o.generatedColumn
          , g = c.generatedColumn;
        return d > f || d == f && g >= m || u.compareByGeneratedPositionsInflated(o, c) <= 0
    }
    class r {
        constructor() {
            this._array = [],
            this._sorted = !0,
            this._last = {
                generatedLine: -1,
                generatedColumn: 0
            }
        }
        unsortedForEach(c, f) {
            this._array.forEach(c, f)
        }
        add(c) {
            a(this._last, c) ? (this._last = c,
            this._array.push(c)) : (this._sorted = !1,
            this._array.push(c))
        }
        toArray() {
            return this._sorted || (this._array.sort(u.compareByGeneratedPositionsInflated),
            this._sorted = !0),
            this._array
        }
    }
    return bo.MappingList = r,
    bo
}
var Um;
function Bg() {
    if (Um)
        return mo;
    Um = 1;
    const u = jg()
      , a = Bu()
      , r = Ug().ArraySet
      , o = h2().MappingList;
    class c {
        constructor(d) {
            d || (d = {}),
            this._file = a.getArg(d, "file", null),
            this._sourceRoot = a.getArg(d, "sourceRoot", null),
            this._skipValidation = a.getArg(d, "skipValidation", !1),
            this._sources = new r,
            this._names = new r,
            this._mappings = new o,
            this._sourcesContents = null
        }
        static fromSourceMap(d) {
            const m = d.sourceRoot
              , g = new c({
                file: d.file,
                sourceRoot: m
            });
            return d.eachMapping(function(p) {
                const b = {
                    generated: {
                        line: p.generatedLine,
                        column: p.generatedColumn
                    }
                };
                p.source != null && (b.source = p.source,
                m != null && (b.source = a.relative(m, b.source)),
                b.original = {
                    line: p.originalLine,
                    column: p.originalColumn
                },
                p.name != null && (b.name = p.name)),
                g.addMapping(b)
            }),
            d.sources.forEach(function(p) {
                let b = p;
                m != null && (b = a.relative(m, p)),
                g._sources.has(b) || g._sources.add(b);
                const v = d.sourceContentFor(p);
                v != null && g.setSourceContent(p, v)
            }),
            g
        }
        addMapping(d) {
            const m = a.getArg(d, "generated")
              , g = a.getArg(d, "original", null);
            let p = a.getArg(d, "source", null)
              , b = a.getArg(d, "name", null);
            this._skipValidation || this._validateMapping(m, g, p, b),
            p != null && (p = String(p),
            this._sources.has(p) || this._sources.add(p)),
            b != null && (b = String(b),
            this._names.has(b) || this._names.add(b)),
            this._mappings.add({
                generatedLine: m.line,
                generatedColumn: m.column,
                originalLine: g && g.line,
                originalColumn: g && g.column,
                source: p,
                name: b
            })
        }
        setSourceContent(d, m) {
            let g = d;
            this._sourceRoot != null && (g = a.relative(this._sourceRoot, g)),
            m != null ? (this._sourcesContents || (this._sourcesContents = Object.create(null)),
            this._sourcesContents[a.toSetString(g)] = m) : this._sourcesContents && (delete this._sourcesContents[a.toSetString(g)],
            Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null))
        }
        applySourceMap(d, m, g) {
            let p = m;
            if (m == null) {
                if (d.file == null)
                    throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
                p = d.file
            }
            const b = this._sourceRoot;
            b != null && (p = a.relative(b, p));
            const v = this._mappings.toArray().length > 0 ? new r : this._sources
              , S = new r;
            this._mappings.unsortedForEach(function(x) {
                if (x.source === p && x.originalLine != null) {
                    const _ = d.originalPositionFor({
                        line: x.originalLine,
                        column: x.originalColumn
                    });
                    _.source != null && (x.source = _.source,
                    g != null && (x.source = a.join(g, x.source)),
                    b != null && (x.source = a.relative(b, x.source)),
                    x.originalLine = _.line,
                    x.originalColumn = _.column,
                    _.name != null && (x.name = _.name))
                }
                const E = x.source;
                E != null && !v.has(E) && v.add(E);
                const O = x.name;
                O != null && !S.has(O) && S.add(O)
            }, this),
            this._sources = v,
            this._names = S,
            d.sources.forEach(function(x) {
                const E = d.sourceContentFor(x);
                E != null && (g != null && (x = a.join(g, x)),
                b != null && (x = a.relative(b, x)),
                this.setSourceContent(x, E))
            }, this)
        }
        _validateMapping(d, m, g, p) {
            if (m && typeof m.line != "number" && typeof m.column != "number")
                throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
            if (!(d && "line"in d && "column"in d && d.line > 0 && d.column >= 0 && !m && !g && !p)) {
                if (!(d && "line"in d && "column"in d && m && "line"in m && "column"in m && d.line > 0 && d.column >= 0 && m.line > 0 && m.column >= 0 && g))
                    throw new Error("Invalid mapping: " + JSON.stringify({
                        generated: d,
                        source: g,
                        original: m,
                        name: p
                    }))
            }
        }
        _serializeMappings() {
            let d = 0, m = 1, g = 0, p = 0, b = 0, v = 0, S = "", x, E, O, _;
            const L = this._mappings.toArray();
            for (let U = 0, V = L.length; U < V; U++) {
                if (E = L[U],
                x = "",
                E.generatedLine !== m)
                    for (d = 0; E.generatedLine !== m; )
                        x += ";",
                        m++;
                else if (U > 0) {
                    if (!a.compareByGeneratedPositionsInflated(E, L[U - 1]))
                        continue;
                    x += ","
                }
                x += u.encode(E.generatedColumn - d),
                d = E.generatedColumn,
                E.source != null && (_ = this._sources.indexOf(E.source),
                x += u.encode(_ - v),
                v = _,
                x += u.encode(E.originalLine - 1 - p),
                p = E.originalLine - 1,
                x += u.encode(E.originalColumn - g),
                g = E.originalColumn,
                E.name != null && (O = this._names.indexOf(E.name),
                x += u.encode(O - b),
                b = O)),
                S += x
            }
            return S
        }
        _generateSourcesContent(d, m) {
            return d.map(function(g) {
                if (!this._sourcesContents)
                    return null;
                m != null && (g = a.relative(m, g));
                const p = a.toSetString(g);
                return Object.prototype.hasOwnProperty.call(this._sourcesContents, p) ? this._sourcesContents[p] : null
            }, this)
        }
        toJSON() {
            const d = {
                version: this._version,
                sources: this._sources.toArray(),
                names: this._names.toArray(),
                mappings: this._serializeMappings()
            };
            return this._file != null && (d.file = this._file),
            this._sourceRoot != null && (d.sourceRoot = this._sourceRoot),
            this._sourcesContents && (d.sourcesContent = this._generateSourcesContent(d.sources, d.sourceRoot)),
            d
        }
        toString() {
            return JSON.stringify(this.toJSON())
        }
    }
    return c.prototype._version = 3,
    mo.SourceMapGenerator = c,
    mo
}
var Qa = {}, xo = {}, Bm;
function m2() {
    return Bm || (Bm = 1,
    (function(u) {
        u.GREATEST_LOWER_BOUND = 1,
        u.LEAST_UPPER_BOUND = 2;
        function a(r, o, c, f, d, m) {
            const g = Math.floor((o - r) / 2) + r
              , p = d(c, f[g], !0);
            return p === 0 ? g : p > 0 ? o - g > 1 ? a(g, o, c, f, d, m) : m === u.LEAST_UPPER_BOUND ? o < f.length ? o : -1 : g : g - r > 1 ? a(r, g, c, f, d, m) : m == u.LEAST_UPPER_BOUND ? g : r < 0 ? -1 : r
        }
        u.search = function(o, c, f, d) {
            if (c.length === 0)
                return -1;
            let m = a(-1, c.length, o, c, f, d || u.GREATEST_LOWER_BOUND);
            if (m < 0)
                return -1;
            for (; m - 1 >= 0 && f(c[m], c[m - 1], !0) === 0; )
                --m;
            return m
        }
    }
    )(xo)),
    xo
}
var Eu = {
    exports: {}
}, Hm;
function Hg() {
    if (Hm)
        return Eu.exports;
    Hm = 1;
    let u = null;
    return Eu.exports = function() {
        if (typeof u == "string")
            return fetch(u).then(r => r.arrayBuffer());
        if (u instanceof ArrayBuffer)
            return Promise.resolve(u);
        throw new Error("You must provide the string URL or ArrayBuffer contents of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer")
    }
    ,
    Eu.exports.initialize = a => {
        u = a
    }
    ,
    Eu.exports
}
var So, qm;
function g2() {
    if (qm)
        return So;
    qm = 1;
    const u = Hg();
    function a() {
        this.generatedLine = 0,
        this.generatedColumn = 0,
        this.lastGeneratedColumn = null,
        this.source = null,
        this.originalLine = null,
        this.originalColumn = null,
        this.name = null
    }
    let r = null;
    return So = function() {
        if (r)
            return r;
        const c = [];
        return r = u().then(f => WebAssembly.instantiate(f, {
            env: {
                mapping_callback(d, m, g, p, b, v, S, x, E, O) {
                    const _ = new a;
                    _.generatedLine = d + 1,
                    _.generatedColumn = m,
                    g && (_.lastGeneratedColumn = p - 1),
                    b && (_.source = v,
                    _.originalLine = S + 1,
                    _.originalColumn = x,
                    E && (_.name = O)),
                    c[c.length - 1](_)
                },
                start_all_generated_locations_for() {
                    console.time("all_generated_locations_for")
                },
                end_all_generated_locations_for() {
                    console.timeEnd("all_generated_locations_for")
                },
                start_compute_column_spans() {
                    console.time("compute_column_spans")
                },
                end_compute_column_spans() {
                    console.timeEnd("compute_column_spans")
                },
                start_generated_location_for() {
                    console.time("generated_location_for")
                },
                end_generated_location_for() {
                    console.timeEnd("generated_location_for")
                },
                start_original_location_for() {
                    console.time("original_location_for")
                },
                end_original_location_for() {
                    console.timeEnd("original_location_for")
                },
                start_parse_mappings() {
                    console.time("parse_mappings")
                },
                end_parse_mappings() {
                    console.timeEnd("parse_mappings")
                },
                start_sort_by_generated_location() {
                    console.time("sort_by_generated_location")
                },
                end_sort_by_generated_location() {
                    console.timeEnd("sort_by_generated_location")
                },
                start_sort_by_original_location() {
                    console.time("sort_by_original_location")
                },
                end_sort_by_original_location() {
                    console.timeEnd("sort_by_original_location")
                }
            }
        })).then(f => ({
            exports: f.instance.exports,
            withMappingCallback: (d, m) => {
                c.push(d);
                try {
                    m()
                } finally {
                    c.pop()
                }
            }
        })).then(null, f => {
            throw r = null,
            f
        }
        ),
        r
    }
    ,
    So
}
var Gm;
function p2() {
    if (Gm)
        return Qa;
    Gm = 1;
    const u = Bu()
      , a = m2()
      , r = Ug().ArraySet;
    jg();
    const o = Hg()
      , c = g2()
      , f = Symbol("smcInternal");
    class d {
        constructor(S, x) {
            return S == f ? Promise.resolve(this) : p(S, x)
        }
        static initialize(S) {
            o.initialize(S["lib/mappings.wasm"])
        }
        static fromSourceMap(S, x) {
            return b(S, x)
        }
        static async with(S, x, E) {
            const O = await new d(S,x);
            try {
                return await E(O)
            } finally {
                O.destroy()
            }
        }
        eachMapping(S, x, E) {
            throw new Error("Subclasses must implement eachMapping")
        }
        allGeneratedPositionsFor(S) {
            throw new Error("Subclasses must implement allGeneratedPositionsFor")
        }
        destroy() {
            throw new Error("Subclasses must implement destroy")
        }
    }
    d.prototype._version = 3,
    d.GENERATED_ORDER = 1,
    d.ORIGINAL_ORDER = 2,
    d.GREATEST_LOWER_BOUND = 1,
    d.LEAST_UPPER_BOUND = 2,
    Qa.SourceMapConsumer = d;
    class m extends d {
        constructor(S, x) {
            return super(f).then(E => {
                let O = S;
                typeof S == "string" && (O = u.parseSourceMapInput(S));
                const _ = u.getArg(O, "version")
                  , L = u.getArg(O, "sources").map(String)
                  , U = u.getArg(O, "names", [])
                  , V = u.getArg(O, "sourceRoot", null)
                  , J = u.getArg(O, "sourcesContent", null)
                  , W = u.getArg(O, "mappings")
                  , oe = u.getArg(O, "file", null)
                  , I = u.getArg(O, "x_google_ignoreList", null);
                if (_ != E._version)
                    throw new Error("Unsupported version: " + _);
                return E._sourceLookupCache = new Map,
                E._names = r.fromArray(U.map(String), !0),
                E._sources = r.fromArray(L, !0),
                E._absoluteSources = r.fromArray(E._sources.toArray().map(function(pe) {
                    return u.computeSourceURL(V, pe, x)
                }), !0),
                E.sourceRoot = V,
                E.sourcesContent = J,
                E._mappings = W,
                E._sourceMapURL = x,
                E.file = oe,
                E.x_google_ignoreList = I,
                E._computedColumnSpans = !1,
                E._mappingsPtr = 0,
                E._wasm = null,
                c().then(pe => (E._wasm = pe,
                E))
            }
            )
        }
        _findSourceIndex(S) {
            const x = this._sourceLookupCache.get(S);
            if (typeof x == "number")
                return x;
            const E = u.computeSourceURL(null, S, this._sourceMapURL);
            if (this._absoluteSources.has(E)) {
                const _ = this._absoluteSources.indexOf(E);
                return this._sourceLookupCache.set(S, _),
                _
            }
            const O = u.computeSourceURL(this.sourceRoot, S, this._sourceMapURL);
            if (this._absoluteSources.has(O)) {
                const _ = this._absoluteSources.indexOf(O);
                return this._sourceLookupCache.set(S, _),
                _
            }
            return -1
        }
        static fromSourceMap(S, x) {
            return new m(S.toString())
        }
        get sources() {
            return this._absoluteSources.toArray()
        }
        _getMappingsPtr() {
            return this._mappingsPtr === 0 && this._parseMappings(),
            this._mappingsPtr
        }
        _parseMappings() {
            const S = this._mappings
              , x = S.length
              , E = this._wasm.exports.allocate_mappings(x) >>> 0
              , O = new Uint8Array(this._wasm.exports.memory.buffer,E,x);
            for (let L = 0; L < x; L++)
                O[L] = S.charCodeAt(L);
            const _ = this._wasm.exports.parse_mappings(E);
            if (!_) {
                const L = this._wasm.exports.get_last_error();
                let U = `Error parsing mappings (code ${L}): `;
                switch (L) {
                case 1:
                    U += "the mappings contained a negative line, column, source index, or name index";
                    break;
                case 2:
                    U += "the mappings contained a number larger than 2**32";
                    break;
                case 3:
                    U += "reached EOF while in the middle of parsing a VLQ";
                    break;
                case 4:
                    U += "invalid base 64 character while parsing a VLQ";
                    break;
                default:
                    U += "unknown error code";
                    break
                }
                throw new Error(U)
            }
            this._mappingsPtr = _
        }
        eachMapping(S, x, E) {
            const O = x || null
              , _ = E || d.GENERATED_ORDER;
            this._wasm.withMappingCallback(L => {
                L.source !== null && (L.source = this._absoluteSources.at(L.source),
                L.name !== null && (L.name = this._names.at(L.name))),
                this._computedColumnSpans && L.lastGeneratedColumn === null && (L.lastGeneratedColumn = 1 / 0),
                S.call(O, L)
            }
            , () => {
                switch (_) {
                case d.GENERATED_ORDER:
                    this._wasm.exports.by_generated_location(this._getMappingsPtr());
                    break;
                case d.ORIGINAL_ORDER:
                    this._wasm.exports.by_original_location(this._getMappingsPtr());
                    break;
                default:
                    throw new Error("Unknown order of iteration.")
                }
            }
            )
        }
        allGeneratedPositionsFor(S) {
            let x = u.getArg(S, "source");
            const E = u.getArg(S, "line")
              , O = S.column || 0;
            if (x = this._findSourceIndex(x),
            x < 0)
                return [];
            if (E < 1)
                throw new Error("Line numbers must be >= 1");
            if (O < 0)
                throw new Error("Column numbers must be >= 0");
            const _ = [];
            return this._wasm.withMappingCallback(L => {
                let U = L.lastGeneratedColumn;
                this._computedColumnSpans && U === null && (U = 1 / 0),
                _.push({
                    line: L.generatedLine,
                    column: L.generatedColumn,
                    lastColumn: U
                })
            }
            , () => {
                this._wasm.exports.all_generated_locations_for(this._getMappingsPtr(), x, E - 1, "column"in S, O)
            }
            ),
            _
        }
        destroy() {
            this._mappingsPtr !== 0 && (this._wasm.exports.free_mappings(this._mappingsPtr),
            this._mappingsPtr = 0)
        }
        computeColumnSpans() {
            this._computedColumnSpans || (this._wasm.exports.compute_column_spans(this._getMappingsPtr()),
            this._computedColumnSpans = !0)
        }
        originalPositionFor(S) {
            const x = {
                generatedLine: u.getArg(S, "line"),
                generatedColumn: u.getArg(S, "column")
            };
            if (x.generatedLine < 1)
                throw new Error("Line numbers must be >= 1");
            if (x.generatedColumn < 0)
                throw new Error("Column numbers must be >= 0");
            let E = u.getArg(S, "bias", d.GREATEST_LOWER_BOUND);
            E == null && (E = d.GREATEST_LOWER_BOUND);
            let O;
            if (this._wasm.withMappingCallback(_ => O = _, () => {
                this._wasm.exports.original_location_for(this._getMappingsPtr(), x.generatedLine - 1, x.generatedColumn, E)
            }
            ),
            O && O.generatedLine === x.generatedLine) {
                let _ = u.getArg(O, "source", null);
                _ !== null && (_ = this._absoluteSources.at(_));
                let L = u.getArg(O, "name", null);
                return L !== null && (L = this._names.at(L)),
                {
                    source: _,
                    line: u.getArg(O, "originalLine", null),
                    column: u.getArg(O, "originalColumn", null),
                    name: L
                }
            }
            return {
                source: null,
                line: null,
                column: null,
                name: null
            }
        }
        hasContentsOfAllSources() {
            return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(S) {
                return S == null
            }) : !1
        }
        sourceContentFor(S, x) {
            if (!this.sourcesContent)
                return null;
            const E = this._findSourceIndex(S);
            if (E >= 0)
                return this.sourcesContent[E];
            if (x)
                return null;
            throw new Error('"' + S + '" is not in the SourceMap.')
        }
        generatedPositionFor(S) {
            let x = u.getArg(S, "source");
            if (x = this._findSourceIndex(x),
            x < 0)
                return {
                    line: null,
                    column: null,
                    lastColumn: null
                };
            const E = {
                source: x,
                originalLine: u.getArg(S, "line"),
                originalColumn: u.getArg(S, "column")
            };
            if (E.originalLine < 1)
                throw new Error("Line numbers must be >= 1");
            if (E.originalColumn < 0)
                throw new Error("Column numbers must be >= 0");
            let O = u.getArg(S, "bias", d.GREATEST_LOWER_BOUND);
            O == null && (O = d.GREATEST_LOWER_BOUND);
            let _;
            if (this._wasm.withMappingCallback(L => _ = L, () => {
                this._wasm.exports.generated_location_for(this._getMappingsPtr(), E.source, E.originalLine - 1, E.originalColumn, O)
            }
            ),
            _ && _.source === E.source) {
                let L = _.lastGeneratedColumn;
                return this._computedColumnSpans && L === null && (L = 1 / 0),
                {
                    line: u.getArg(_, "generatedLine", null),
                    column: u.getArg(_, "generatedColumn", null),
                    lastColumn: L
                }
            }
            return {
                line: null,
                column: null,
                lastColumn: null
            }
        }
    }
    m.prototype.consumer = d,
    Qa.BasicSourceMapConsumer = m;
    class g extends d {
        constructor(S, x) {
            return super(f).then(E => {
                let O = S;
                typeof S == "string" && (O = u.parseSourceMapInput(S));
                const _ = u.getArg(O, "version")
                  , L = u.getArg(O, "sections");
                if (_ != E._version)
                    throw new Error("Unsupported version: " + _);
                let U = {
                    line: -1,
                    column: 0
                };
                return Promise.all(L.map(V => {
                    if (V.url)
                        throw new Error("Support for url field in sections not implemented.");
                    const J = u.getArg(V, "offset")
                      , W = u.getArg(J, "line")
                      , oe = u.getArg(J, "column");
                    if (W < U.line || W === U.line && oe < U.column)
                        throw new Error("Section offsets must be ordered and non-overlapping.");
                    return U = J,
                    new d(u.getArg(V, "map"),x).then(pe => ({
                        generatedOffset: {
                            generatedLine: W + 1,
                            generatedColumn: oe + 1
                        },
                        consumer: pe
                    }))
                }
                )).then(V => (E._sections = V,
                E))
            }
            )
        }
        get sources() {
            const S = [];
            for (let x = 0; x < this._sections.length; x++)
                for (let E = 0; E < this._sections[x].consumer.sources.length; E++)
                    S.push(this._sections[x].consumer.sources[E]);
            return S
        }
        originalPositionFor(S) {
            const x = {
                generatedLine: u.getArg(S, "line"),
                generatedColumn: u.getArg(S, "column")
            }
              , E = a.search(x, this._sections, function(_, L) {
                const U = _.generatedLine - L.generatedOffset.generatedLine;
                return U || _.generatedColumn - (L.generatedOffset.generatedColumn - 1)
            })
              , O = this._sections[E];
            return O ? O.consumer.originalPositionFor({
                line: x.generatedLine - (O.generatedOffset.generatedLine - 1),
                column: x.generatedColumn - (O.generatedOffset.generatedLine === x.generatedLine ? O.generatedOffset.generatedColumn - 1 : 0),
                bias: S.bias
            }) : {
                source: null,
                line: null,
                column: null,
                name: null
            }
        }
        hasContentsOfAllSources() {
            return this._sections.every(function(S) {
                return S.consumer.hasContentsOfAllSources()
            })
        }
        sourceContentFor(S, x) {
            for (let E = 0; E < this._sections.length; E++) {
                const _ = this._sections[E].consumer.sourceContentFor(S, !0);
                if (_)
                    return _
            }
            if (x)
                return null;
            throw new Error('"' + S + '" is not in the SourceMap.')
        }
        _findSectionIndex(S) {
            for (let x = 0; x < this._sections.length; x++) {
                const {consumer: E} = this._sections[x];
                if (E._findSourceIndex(S) !== -1)
                    return x
            }
            return -1
        }
        generatedPositionFor(S) {
            const x = this._findSectionIndex(u.getArg(S, "source"))
              , E = x >= 0 ? this._sections[x] : null
              , O = x >= 0 && x + 1 < this._sections.length ? this._sections[x + 1] : null
              , _ = E && E.consumer.generatedPositionFor(S);
            if (_ && _.line !== null) {
                const L = E.generatedOffset.generatedLine - 1
                  , U = E.generatedOffset.generatedColumn - 1;
                return _.line === 1 && (_.column += U,
                typeof _.lastColumn == "number" && (_.lastColumn += U)),
                _.lastColumn === 1 / 0 && O && _.line === O.generatedOffset.generatedLine && (_.lastColumn = O.generatedOffset.generatedColumn - 2),
                _.line += L,
                _
            }
            return {
                line: null,
                column: null,
                lastColumn: null
            }
        }
        allGeneratedPositionsFor(S) {
            const x = this._findSectionIndex(u.getArg(S, "source"))
              , E = x >= 0 ? this._sections[x] : null
              , O = x >= 0 && x + 1 < this._sections.length ? this._sections[x + 1] : null;
            return E ? E.consumer.allGeneratedPositionsFor(S).map(_ => {
                const L = E.generatedOffset.generatedLine - 1
                  , U = E.generatedOffset.generatedColumn - 1;
                return _.line === 1 && (_.column += U,
                typeof _.lastColumn == "number" && (_.lastColumn += U)),
                _.lastColumn === 1 / 0 && O && _.line === O.generatedOffset.generatedLine && (_.lastColumn = O.generatedOffset.generatedColumn - 2),
                _.line += L,
                _
            }
            ) : []
        }
        eachMapping(S, x, E) {
            this._sections.forEach( (O, _) => {
                const L = _ + 1 < this._sections.length ? this._sections[_ + 1] : null
                  , {generatedOffset: U} = O
                  , V = U.generatedLine - 1
                  , J = U.generatedColumn - 1;
                O.consumer.eachMapping(function(W) {
                    W.generatedLine === 1 && (W.generatedColumn += J,
                    typeof W.lastGeneratedColumn == "number" && (W.lastGeneratedColumn += J)),
                    W.lastGeneratedColumn === 1 / 0 && L && W.generatedLine === L.generatedOffset.generatedLine && (W.lastGeneratedColumn = L.generatedOffset.generatedColumn - 2),
                    W.generatedLine += V,
                    S.call(this, W)
                }, x, E)
            }
            )
        }
        computeColumnSpans() {
            for (let S = 0; S < this._sections.length; S++)
                this._sections[S].consumer.computeColumnSpans()
        }
        destroy() {
            for (let S = 0; S < this._sections.length; S++)
                this._sections[S].consumer.destroy()
        }
    }
    Qa.IndexedSourceMapConsumer = g;
    function p(v, S) {
        let x = v;
        typeof v == "string" && (x = u.parseSourceMapInput(v));
        const E = x.sections != null ? new g(x,S) : new m(x,S);
        return Promise.resolve(E)
    }
    function b(v, S) {
        return m.fromSourceMap(v, S)
    }
    return Qa
}
var Eo = {}, Ym;
function y2() {
    if (Ym)
        return Eo;
    Ym = 1;
    const u = Bg().SourceMapGenerator
      , a = Bu()
      , r = /(\r?\n)/
      , o = 10
      , c = "$$$isSourceNode$$$";
    class f {
        constructor(m, g, p, b, v) {
            this.children = [],
            this.sourceContents = {},
            this.line = m ?? null,
            this.column = g ?? null,
            this.source = p ?? null,
            this.name = v ?? null,
            this[c] = !0,
            b != null && this.add(b)
        }
        static fromStringWithSourceMap(m, g, p) {
            const b = new f
              , v = m.split(r);
            let S = 0;
            const x = function() {
                const V = W()
                  , J = W() || "";
                return V + J;
                function W() {
                    return S < v.length ? v[S++] : void 0
                }
            };
            let E = 1, O = 0, _ = null, L;
            return g.eachMapping(function(V) {
                if (_ !== null)
                    if (E < V.generatedLine)
                        U(_, x()),
                        E++,
                        O = 0;
                    else {
                        L = v[S] || "";
                        const J = L.substr(0, V.generatedColumn - O);
                        v[S] = L.substr(V.generatedColumn - O),
                        O = V.generatedColumn,
                        U(_, J),
                        _ = V;
                        return
                    }
                for (; E < V.generatedLine; )
                    b.add(x()),
                    E++;
                O < V.generatedColumn && (L = v[S] || "",
                b.add(L.substr(0, V.generatedColumn)),
                v[S] = L.substr(V.generatedColumn),
                O = V.generatedColumn),
                _ = V
            }, this),
            S < v.length && (_ && U(_, x()),
            b.add(v.splice(S).join(""))),
            g.sources.forEach(function(V) {
                const J = g.sourceContentFor(V);
                J != null && (p != null && (V = a.join(p, V)),
                b.setSourceContent(V, J))
            }),
            b;
            function U(V, J) {
                if (V === null || V.source === void 0)
                    b.add(J);
                else {
                    const W = p ? a.join(p, V.source) : V.source;
                    b.add(new f(V.originalLine,V.originalColumn,W,J,V.name))
                }
            }
        }
        add(m) {
            if (Array.isArray(m))
                m.forEach(function(g) {
                    this.add(g)
                }, this);
            else if (m[c] || typeof m == "string")
                m && this.children.push(m);
            else
                throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m);
            return this
        }
        prepend(m) {
            if (Array.isArray(m))
                for (let g = m.length - 1; g >= 0; g--)
                    this.prepend(m[g]);
            else if (m[c] || typeof m == "string")
                this.children.unshift(m);
            else
                throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m);
            return this
        }
        walk(m) {
            let g;
            for (let p = 0, b = this.children.length; p < b; p++)
                g = this.children[p],
                g[c] ? g.walk(m) : g !== "" && m(g, {
                    source: this.source,
                    line: this.line,
                    column: this.column,
                    name: this.name
                })
        }
        join(m) {
            let g, p;
            const b = this.children.length;
            if (b > 0) {
                for (g = [],
                p = 0; p < b - 1; p++)
                    g.push(this.children[p]),
                    g.push(m);
                g.push(this.children[p]),
                this.children = g
            }
            return this
        }
        replaceRight(m, g) {
            const p = this.children[this.children.length - 1];
            return p[c] ? p.replaceRight(m, g) : typeof p == "string" ? this.children[this.children.length - 1] = p.replace(m, g) : this.children.push("".replace(m, g)),
            this
        }
        setSourceContent(m, g) {
            this.sourceContents[a.toSetString(m)] = g
        }
        walkSourceContents(m) {
            for (let p = 0, b = this.children.length; p < b; p++)
                this.children[p][c] && this.children[p].walkSourceContents(m);
            const g = Object.keys(this.sourceContents);
            for (let p = 0, b = g.length; p < b; p++)
                m(a.fromSetString(g[p]), this.sourceContents[g[p]])
        }
        toString() {
            let m = "";
            return this.walk(function(g) {
                m += g
            }),
            m
        }
        toStringWithSourceMap(m) {
            const g = {
                code: "",
                line: 1,
                column: 0
            }
              , p = new u(m);
            let b = !1
              , v = null
              , S = null
              , x = null
              , E = null;
            return this.walk(function(O, _) {
                g.code += O,
                _.source !== null && _.line !== null && _.column !== null ? ((v !== _.source || S !== _.line || x !== _.column || E !== _.name) && p.addMapping({
                    source: _.source,
                    original: {
                        line: _.line,
                        column: _.column
                    },
                    generated: {
                        line: g.line,
                        column: g.column
                    },
                    name: _.name
                }),
                v = _.source,
                S = _.line,
                x = _.column,
                E = _.name,
                b = !0) : b && (p.addMapping({
                    generated: {
                        line: g.line,
                        column: g.column
                    }
                }),
                v = null,
                b = !1);
                for (let L = 0, U = O.length; L < U; L++)
                    O.charCodeAt(L) === o ? (g.line++,
                    g.column = 0,
                    L + 1 === U ? (v = null,
                    b = !1) : b && p.addMapping({
                        source: _.source,
                        original: {
                            line: _.line,
                            column: _.column
                        },
                        generated: {
                            line: g.line,
                            column: g.column
                        },
                        name: _.name
                    })) : g.column++
            }),
            this.walkSourceContents(function(O, _) {
                p.setSourceContent(O, _)
            }),
            {
                code: g.code,
                map: p
            }
        }
    }
    return Eo.SourceNode = f,
    Eo
}
var Vm;
function v2() {
    return Vm || (Vm = 1,
    Va.SourceMapGenerator = Bg().SourceMapGenerator,
    Va.SourceMapConsumer = p2().SourceMapConsumer,
    Va.SourceNode = y2().SourceNode),
    Va
}
var zo = v2();
function b2(u, a, r) {
    const o = u[a];
    if (!o)
        return {
            lineIndex: a,
            column: r
        };
    const c = o.trim()
      , f = /^<\/[A-Za-z][A-Za-z0-9\-_.]*\s*>$/.test(c)
      , d = /<\/[A-Za-z][A-Za-z0-9\-_.]*\s*>$/.test(c);
    let m = !1;
    if (r != null) {
        const g = o.substring(0, r);
        m = /<\/[A-Za-z][A-Za-z0-9\-_.]*\s*>$/.test(g)
    }
    if (f || d || m) {
        if (r != null) {
            const g = o.substring(r)
              , p = g.match(/<([A-Za-z][A-Za-z0-9\-_.]*)/);
            if (p && g[p.index + 1] !== "/")
                return {
                    lineIndex: a,
                    column: r + p.index + 1
                }
        }
        for (let g = a + 1; g < u.length && g < a + 50; g++) {
            const p = u[g]
              , b = p.match(/<([A-Za-z][A-Za-z0-9\-_.]*)/);
            if (b && p[b.index + 1] !== "/")
                return {
                    lineIndex: g,
                    column: b.index + 1
                }
        }
    }
    return {
        lineIndex: a,
        column: r
    }
}
function Go(u, a, r) {
    let o = 0;
    for (let c = a; c < u.length; c++) {
        const f = u[c]
          , d = c === a ? r : 0;
        for (let m = d; m < f.length; m++) {
            const g = f[m];
            if (g === "{")
                o++;
            else if (g === "}")
                o--;
            else if (o === 0) {
                if (g === "/" && f[m + 1] === ">")
                    return {
                        lineIndex: c,
                        columnEnd: m + 2,
                        isSelfClosing: !0
                    };
                if (g === ">")
                    return {
                        lineIndex: c,
                        columnEnd: m + 1,
                        isSelfClosing: !1
                    }
            }
        }
    }
}
function qg(u, a, r, o) {
    let c = 1;
    const f = new RegExp(`<${a}(?=\\s|>|/>)`,"g")
      , d = new RegExp(`</${a}\\s*>`,"g");
    for (let m = r; m < u.length; m++) {
        const g = m === r ? o : 0
          , p = u[m].substring(g)
          , b = [];
        let v;
        for (f.lastIndex = 0; (v = f.exec(p)) !== null; ) {
            const S = Go([p], 0, v.index + v[0].length);
            S && !S.isSelfClosing && b.push({
                type: "open",
                index: v.index,
                length: v[0].length
            })
        }
        for (d.lastIndex = 0; (v = d.exec(p)) !== null; )
            b.push({
                type: "close",
                index: v.index,
                length: v[0].length
            });
        b.sort( (S, x) => S.index - x.index);
        for (const S of b)
            if (S.type === "open")
                c++;
            else if (S.type === "close" && (c--,
            c === 0))
                return {
                    lineIndex: m,
                    columnEnd: g + S.index + S.length
                }
    }
}
function Qm(u, a, r) {
    let o;
    for (let c = a; c >= 0; c--) {
        const f = u[c]
          , d = /<([A-Za-z][A-Za-z0-9\-_.]*)/g;
        let m;
        for (; (m = d.exec(f)) !== null; ) {
            const g = m.index
              , p = m[1];
            if (f[g + 1] === "/" || !(c < a || c === a && g <= (r ?? f.length)))
                continue;
            const v = g + m[0].length
              , S = Go(u, c, v);
            if (!S)
                continue;
            let x = c
              , E = S.columnEnd;
            if (!S.isSelfClosing) {
                const _ = qg(u, p, c, S.columnEnd);
                if (!_)
                    continue;
                x = _.lineIndex,
                E = _.columnEnd
            }
            (c < a || c === a && g <= (r ?? f.length)) && (x > a || x === a && E >= (r ?? 0)) && (!o || x - c < o.closeLineIndex - o.lineIndex || x - c === o.closeLineIndex - o.lineIndex && E - g < o.closeColumnEnd - o.columnStart) && (o = {
                tagName: p,
                lineIndex: c,
                columnStart: g,
                columnEnd: S.columnEnd,
                isSelfClosing: S.isSelfClosing,
                closeLineIndex: x,
                closeColumnEnd: E
            })
        }
    }
    return o
}
function x2(u, a, r) {
    const o = new RegExp(`<(${r})(?=\\s|>|/>)`,"i");
    for (let c = a + 1; c < u.length && c < a + 50; c++) {
        const f = u[c]
          , d = o.exec(f);
        if (d) {
            const m = d.index
              , g = d[1]
              , p = m + d[0].length
              , b = Go(u, c, p);
            if (!b)
                continue;
            let v = c
              , S = b.columnEnd;
            if (!b.isSelfClosing) {
                const x = qg(u, g, c, b.columnEnd);
                if (!x)
                    continue;
                v = x.lineIndex,
                S = x.columnEnd
            }
            return {
                tagName: g,
                lineIndex: c,
                columnStart: m,
                columnEnd: b.columnEnd,
                isSelfClosing: b.isSelfClosing,
                closeLineIndex: v,
                closeColumnEnd: S
            }
        }
    }
}
function S2(u, a, r, o, c) {
    if (a === o)
        return u[a].substring(r, c);
    let f = u[a].substring(r);
    for (let d = a + 1; d < o; d++)
        f += `
` + u[d];
    return f += `
` + u[o].substring(0, c),
    f
}
function E2(u, a, r=10) {
    const o = u.split(`
`)
      , c = Math.max(0, a - r - 1)
      , f = Math.min(o.length - 1, a + r - 1)
      , d = [];
    for (let m = c; m <= f; m++) {
        const g = m + 1
          , v = `${g === a ? ">>>" : "   "} ${g.toString().padStart(4, " ")} | ${o[m] || ""}`;
        d.push(v)
    }
    return d.join(`
`)
}
async function w2(u) {
    try {
        const a = await fetch(u);
        if (!a.ok)
            throw new Error(`Failed to load source map: ${a.status}`);
        return await a.json()
    } catch (a) {
        const r = a instanceof Error ? a.message : String(a);
        console.warn("Error loading source map from", u, r)
    }
}
let wo = !1;
const Ql = new Map
  , _2 = 300 * 1e3
  , C2 = 1e3;
setInterval( () => {
    const u = Date.now();
    for (const [a,r] of Ql.entries())
        u - r.timestamp > _2 && Ql.delete(a)
}
, 6e4);
async function A2() {
    if (!wo)
        try {
            await zo.SourceMapConsumer.initialize({
                "lib/mappings.wasm": "https://unpkg.com/source-map@0.7.6/lib/mappings.wasm"
            }),
            wo = !0
        } catch (u) {
            console.warn("Failed to initialize SourceMapConsumer:", u);
            try {
                await zo.SourceMapConsumer.initialize({}),
                wo = !0
            } catch (a) {
                throw console.error("SourceMapConsumer initialization failed completely:", a),
                a
            }
        }
}
function O2(u) {
    if (!u || !u.stack)
        return `no-stack-${u?.message || "unknown"}`;
    const o = u.stack.split(`
`).slice(0, 6).map(c => c.replace(/\?t=\d+/g, "").replace(/\?v=[\w\d]+/g, "").replace(/\d{13,}/g, "TIMESTAMP"));
    return `${u.name || "Error"}-${u.message}-${o.join("|")}`
}
const T2 = "preview-inject/";
async function Za(u, a=10, r) {
    if (!u || !u.stack)
        return {
            errorMessage: u?.message || "",
            mappedStack: u?.stack || "",
            sourceContext: []
        };
    const o = O2(u);
    if (Ql.has(o)) {
        const v = Ql.get(o);
        return console.log("Using cached error mapping for:", o),
        v
    }
    if (Ql.size >= C2)
        return null;
    await A2();
    const c = u.stack.split(`
`)
      , f = []
      , d = []
      , m = new Map
      , g = new Map;
    let p = 0;
    for (const v of c) {
        const S = v.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)|at\s+(.+?):(\d+):(\d+)|([^@]*)@(.+?):(\d+):(\d+)/);
        if (!S) {
            f.push(v);
            continue
        }
        let x, E, O, _;
        S[1] ? (x = S[1],
        E = S[2],
        O = parseInt(S[3]),
        _ = parseInt(S[4])) : S[5] ? (x = "<anonymous>",
        E = S[5],
        O = parseInt(S[6]),
        _ = parseInt(S[7])) : (x = S[8],
        E = S[9],
        O = parseInt(S[10]),
        _ = parseInt(S[11]));
        try {
            const L = `${E}.map`;
            let U = m.get(L);
            if (!U) {
                const J = await w2(L);
                U = await new zo.SourceMapConsumer(J),
                m.set(L, U)
            }
            const V = U.originalPositionFor({
                line: O,
                column: _
            });
            if (V.source) {
                if (V.source.includes(T2))
                    continue;
                const J = V.source.split("/").filter(I => I !== "..").join("/")
                  , oe = `    at ${V.name || x} (${J}:${V.line}:${V.column})`;
                if (f.push(oe),
                V.line && V.column && p < a) {
                    p++;
                    try {
                        const I = await R2(U, V.source, g);
                        if (I) {
                            const pe = J.includes("node_modules")
                              , Ee = /\.(tsx|jsx)$/.test(J);
                            let Q;
                            if (!pe && Ee) {
                                const k = N2(I, V.line, V.column, r);
                                k && (Q = {
                                    tagName: k.tagName,
                                    code: k.code,
                                    context: k.context,
                                    startLine: k.startLine,
                                    endLine: k.endLine
                                })
                            }
                            const Z = E2(I, V.line, pe ? 1 : 10);
                            d.push({
                                file: J,
                                line: V.line,
                                column: V.column,
                                context: Z,
                                closedBlock: Q
                            })
                        }
                    } catch (I) {
                        console.warn("Failed to extract source context:", I)
                    }
                }
            } else
                f.push(v)
        } catch (L) {
            console.warn("Failed to map stack line:", v, L),
            f.push(v)
        }
    }
    for (const v of m.values())
        v.destroy();
    const b = {
        errorMessage: u?.message || "",
        mappedStack: f.join(`
`),
        sourceContext: d
    };
    return b.timestamp = Date.now(),
    Ql.set(o, b),
    b
}
async function R2(u, a, r) {
    if (r.has(a))
        return r.get(a) || null;
    const o = u.sourceContentFor(a);
    return o ? (r.set(a, o),
    o) : null
}
function N2(u, a, r, o) {
    const c = u.split(`
`);
    let f = a - 1;
    if (f < 0 || f >= c.length)
        return;
    let d = Qm(c, f, r);
    if (o && d) {
        const x = o.toLowerCase()
          , E = d.tagName.toLowerCase();
        if (x !== E) {
            const O = x2(c, f, x);
            O && (d = O)
        }
    } else if (!d) {
        const x = b2(c, f, r);
        d = Qm(c, x.lineIndex, x.column)
    }
    if (!d)
        return;
    const {tagName: m, lineIndex: g, columnStart: p, closeLineIndex: b, closeColumnEnd: v, isSelfClosing: S} = d;
    return {
        tagName: m,
        code: S2(c, g, p, b, v),
        context: c.slice(g, b + 1).join(`
`),
        startLine: g + 1,
        endLine: b + 1,
        isSelfClosing: S
    }
}
class M2 {
    client;
    originalConsoleError;
    constructor() {
        const a = u2();
        a.length > 0 && a.forEach(r => {
            r.type === "console.error" ? this.handleConsoleError(r.args) : r.type === "runtime" && this.handleError(r.args)
        }
        ),
        this.client = new ei(window.parent),
        this.originalConsoleError = console.error,
        this.initErrorHandlers()
    }
    initErrorHandlers() {
        window.addEventListener("error", this.handleError.bind(this)),
        window.addEventListener("unhandledrejection", this.handlePromiseRejection.bind(this)),
        this.interceptConsoleError()
    }
    async handleError(a) {
        const r = a.target;
        if (!(r && r instanceof HTMLElement && r.tagName && ["IMG", "SCRIPT", "LINK", "VIDEO", "AUDIO", "SOURCE", "IFRAME"].includes(r.tagName)) && a.error && a.error.stack)
            try {
                const o = await Za(a.error);
                this.sendError(o)
            } catch (o) {
                console.warn("Failed to map error stack:", o)
            }
    }
    async handlePromiseRejection(a) {
        const r = a.reason instanceof Error ? a.reason : new Error(String(a.reason));
        if (r.stack)
            try {
                const o = await Za(r);
                this.sendError(o)
            } catch (o) {
                console.warn("Failed to map promise rejection stack:", o)
            }
    }
    interceptConsoleError() {
        console.error = (...a) => {
            this.originalConsoleError.apply(console, a);
            const r = a.find(o => o instanceof Error);
            if (r && r.stack)
                this.handleConsoleError(r);
            else if (a.length > 0) {
                const o = a.map(f => typeof f == "object" ? JSON.stringify(f) : String(f)).join(" ")
                  , c = new Error(o);
                this.handleConsoleError(c)
            }
        }
    }
    async handleConsoleError(a) {
        try {
            const r = await Za(a);
            this.sendError(r)
        } catch (r) {
            console.warn("Failed to map console error stack:", r)
        }
    }
    reportError(a) {
        this.handleReactError(a)
    }
    async handleReactError(a) {
        try {
            const r = await Za(a);
            this.sendError(r)
        } catch (r) {
            console.warn("Failed to map React error stack:", r)
        }
    }
    async sendError(a) {
        if (!a) {
            console.warn("error is too many");
            return
        }
        if (a.sourceContext.length !== 0)
            try {
                await this.client.post("runtime-error", a)
            } catch (r) {
                console.warn("Failed to send error to parent:", r)
            }
    }
    destroy() {
        console.error = this.originalConsoleError,
        this.client.destroy()
    }
}
function z2() {
    const u = new M2;
    return window.runtimeErrorCollector = u,
    u
}
class L2 {
    _client;
    constructor() {
        this._client = new ei(window.parent),
        this._domContentLoadedListener()
    }
    _domContentLoadedListener() {
        const a = () => {
            console.log("DOMContentLoaded"),
            this._client.post("DOMContentLoaded"),
            document.removeEventListener("DOMContentLoaded", a)
        }
        ;
        document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a) : (console.log("DOMContentLoaded"),
        this._client.post("DOMContentLoaded"))
    }
}
function D2() {
    return new L2
}
const Yo = u => {
    const a = "/preview/45d5a1e4-ddb4-46e5-a5eb-751d206edf7d/6560744";
    return u.startsWith(a) ? u.replaceAll(a, "") || "/" : u || "/"
}
  , j2 = "modulepreload"
  , U2 = function(u) {
    return "/preview/45d5a1e4-ddb4-46e5-a5eb-751d206edf7d/6560744/" + u
}
  , Xm = {}
  , Gg = function(a, r, o) {
    let c = Promise.resolve();
    if (r && r.length > 0) {
        let p = function(b) {
            return Promise.all(b.map(v => Promise.resolve(v).then(S => ({
                status: "fulfilled",
                value: S
            }), S => ({
                status: "rejected",
                reason: S
            }))))
        };
        var d = p;
        document.getElementsByTagName("link");
        const m = document.querySelector("meta[property=csp-nonce]")
          , g = m?.nonce || m?.getAttribute("nonce");
        c = p(r.map(b => {
            if (b = U2(b),
            b in Xm)
                return;
            Xm[b] = !0;
            const v = b.endsWith(".css")
              , S = v ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${b}"]${S}`))
                return;
            const x = document.createElement("link");
            if (x.rel = v ? "stylesheet" : j2,
            v || (x.as = "script"),
            x.crossOrigin = "",
            x.href = b,
            g && x.setAttribute("nonce", g),
            document.head.appendChild(x),
            v)
                return new Promise( (E, O) => {
                    x.addEventListener("load", E),
                    x.addEventListener("error", () => O(new Error(`Unable to preload CSS for ${b}`)))
                }
                )
        }
        ))
    }
    function f(m) {
        const g = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (g.payload = m,
        window.dispatchEvent(g),
        !g.defaultPrevented)
            throw m
    }
    return c.then(m => {
        for (const g of m || [])
            g.status === "rejected" && f(g.reason);
        return a().catch(f)
    }
    )
};
async function B2() {
    await await Gg( () => Promise.resolve().then( () => l2), []).then(a => a.navigatePromise).catch(a => (console.error(a),
    Promise.resolve( () => {}
    ))),
    window.REACT_APP_ROUTER = {
        push: (a, r) => {
            window.REACT_APP_NAVIGATE(a, r)
        }
        ,
        replace: (a, r, o) => {
            window.REACT_APP_NAVIGATE(a, {
                replace: !0,
                ...o
            })
        }
        ,
        forward: () => {
            window.REACT_APP_NAVIGATE(1)
        }
        ,
        back: () => {
            window.REACT_APP_NAVIGATE(-1)
        }
        ,
        refresh: () => {
            window.REACT_APP_NAVIGATE(0)
        }
        ,
        prefetch: (a, r) => {
            window.REACT_APP_NAVIGATE(a, r)
        }
    }
}
const Yg = new Promise(u => {
    B2().then( () => {
        u(window.REACT_APP_ROUTER)
    }
    )
}
)
  , Vo = () => window.REACT_APP_ROUTER
  , Vg = new ei(window.parent)
  , Lo = async (u, a) => {
    await Vg.post("routeWillChange", {
        next: Yo(u)
    }, a)
}
;
function H2(u) {
    const a = document.querySelector(u);
    a && a.scrollIntoView({
        behavior: "smooth"
    })
}
function q2() {
    const u = window.open;
    return window.open = function(a, r, o) {
        return a && typeof a == "string" && a.startsWith("#") ? (H2(a),
        null) : (u(a, "_blank", o),
        null)
    }
    ,
    () => {
        window.open = u
    }
}
function G2() {
    const u = async a => {
        const o = a.target.closest("a");
        if (!o || o.tagName !== "A")
            return;
        const c = o.getAttribute("href");
        if (c && !["#", "javascript:void(0)", ""].includes(c) && !c.startsWith("#")) {
            if (a.preventDefault(),
            c.startsWith("/")) {
                const f = Vo();
                await Lo(c, {
                    timeout: 500
                });
                const d = Yo(c);
                f.push(d);
                return
            }
            window.open(o.href, "_blank")
        }
    }
    ;
    return window.addEventListener("click", u, !0),
    () => {
        window.removeEventListener("click", u, !0)
    }
}
const Zm = u => u.startsWith("http://") || u.startsWith("https://");
function Y2() {
    const u = () => {
        const a = Vo()
          , r = a.push;
        a.push = async function(c, f, d) {
            return Zm(c) ? (window.open(c, "_blank"),
            Promise.resolve(!1)) : (await Lo(c, {
                timeout: 500
            }),
            r.call(this, c, f, d))
        }
        ;
        const o = a.replace;
        a.replace = async function(c, f, d) {
            return Zm(c) ? (window.open(c, "_blank"),
            Promise.resolve(!1)) : (await Lo(c, {
                timeout: 500
            }),
            o.call(this, c, f, d))
        }
    }
    ;
    return window.addEventListener("load", u),
    () => {
        window.removeEventListener("load", u)
    }
}
async function V2() {
    await Yg;
    const u = q2()
      , a = G2()
      , r = Y2();
    return () => {
        Vg.destroy(),
        u(),
        a(),
        r()
    }
}
async function Q2() {
    const u = await Gg( () => Promise.resolve().then( () => t2), void 0).then(f => f.default).catch(f => []);
    let a = []
      , r = 0;
    function o(f, d) {
        const {path: m="", children: g, index: p} = f;
        r++;
        const b = p === !0 || m === ""
          , v = m && m[0] === "/"
          , S = b ? d.path : `${d.path}/${m}`
          , x = v && !b ? m : S
          , E = {
            id: r,
            parentId: d.id,
            path: "/" + x.split("/").filter(Boolean).join("/")
        };
        /\*/.test(E.path) || a.push(E),
        g && g.forEach(O => o(O, E))
    }
    u.forEach(f => o(f, {
        id: 0,
        path: ""
    }));
    const c = new Set;
    return a = a.filter(f => c.has(f.path) ? !1 : (c.add(f.path),
    !0)),
    a
}
async function X2() {
    const u = new ei(window.parent)
      , a = await Q2();
    window.REACT_APP_ROUTES = a,
    u.post("routes", {
        routes: a
    }),
    u.on("getRouteInfo", async v => a),
    await Yg,
    u.on("routeAction", async v => {
        const S = Vo()
          , {action: x, route: E} = v;
        switch (x) {
        case "goForward":
            S.forward();
            break;
        case "goBack":
            S.back();
            break;
        case "refresh":
            S.refresh();
            break;
        case "goTo":
            E && S.push(E);
            break;
        default:
            console.warn("Unknown action:", x)
        }
    }
    );
    function r() {
        const v = window.history.state?.index ?? 0
          , S = window.history.length > v + 1
          , x = v > 0
          , E = window.location.pathname;
        u.post("updateNavigationState", {
            canGoForward: S,
            canGoBack: x,
            currentRoute: Yo(E)
        })
    }
    function o() {
        const v = new MutationObserver(x => {
            x.forEach(E => {
                (E.type === "childList" || E.type === "characterData") && u.post("titleChanged", {
                    title: document.title
                })
            }
            )
        }
        )
          , S = document.querySelector("title");
        return u.post("titleChanged", {
            title: document.title
        }),
        S && v.observe(S, {
            childList: !0,
            characterData: !0,
            subtree: !0
        }),
        v
    }
    let c = o();
    function f() {
        c.disconnect(),
        setTimeout( () => {
            c = o()
        }
        , 100)
    }
    const d = window.history.pushState
      , m = window.history.replaceState
      , g = window.history.go
      , p = window.history.back
      , b = window.history.forward;
    return window.history.pushState = function(v, S, x) {
        d.apply(this, arguments),
        r(),
        f()
    }
    ,
    window.history.replaceState = function(v, S, x) {
        m.apply(this, arguments),
        r(),
        f()
    }
    ,
    window.history.go = function(v) {
        g.apply(this, arguments),
        setTimeout( () => {
            r(),
            f()
        }
        , 100)
    }
    ,
    window.history.back = function() {
        p.apply(this, arguments),
        setTimeout( () => {
            r(),
            f()
        }
        , 100)
    }
    ,
    window.history.forward = function() {
        b.apply(this, arguments),
        setTimeout( () => {
            r(),
            f()
        }
        , 100)
    }
    ,
    {
        destroy: () => {
            u.destroy(),
            c.disconnect()
        }
    }
}
var _o = {
    exports: {}
}
  , wu = {};
var Km;
function Z2() {
    if (Km)
        return wu;
    Km = 1;
    var u = Symbol.for("react.fragment");
    return wu.Fragment = u,
    wu.jsxDEV = void 0,
    wu
}
var km;
function K2() {
    return km || (km = 1,
    _o.exports = Z2()),
    _o.exports
}
var Jm = K2();
class Qg {
    static getFiberFromDOMNode(a) {
        if (!a)
            return null;
        const r = Object.keys(a).find(o => o.startsWith("__reactFiber$") || o.startsWith("__reactInternalInstance$"));
        return r ? a[r] : null
    }
}
const Xg = new WeakMap
  , Zg = new WeakMap
  , $m = new WeakMap
  , Co = new WeakMap
  , Fm = new WeakMap
  , Wm = new WeakMap
  , Ao = (u, a) => {
    try {
        Zg.set(u, a);
        const r = Qg.getFiberFromDOMNode(u);
        r && Xg.set(r, a)
    } catch {}
}
  , _u = (u, a) => {
    if (!u)
        return r => {
            r instanceof HTMLElement && Ao(r, a)
        }
        ;
    if (typeof u == "function") {
        let r = Co.get(u);
        r || (r = [],
        Co.set(u, r)),
        r.push(a);
        let o = $m.get(u);
        return o || (o = c => {
            if (c instanceof HTMLElement) {
                const f = Co.get(u);
                if (f && f.length > 0) {
                    const d = f.shift();
                    Ao(c, d)
                }
            }
            u(c)
        }
        ,
        $m.set(u, o)),
        o
    }
    if (u && typeof u == "object" && "current"in u) {
        Wm.set(u, a);
        let r = Fm.get(u);
        return r || (r = o => {
            if (o instanceof HTMLElement) {
                const c = Wm.get(u);
                c && Ao(o, c)
            }
            u.current = o
        }
        ,
        Fm.set(u, r)),
        r
    }
}
;
function k2() {
    const u = $h.createElement
      , a = R.jsx
      , r = R.jsxs
      , o = Jm.jsxDEV
      , c = () => {
        const d = new Error;
        return () => d
    }
      , f = d => typeof d == "string";
    $h.createElement = function(d, m, ...g) {
        if (!f(d) && typeof d != "function")
            return u(d, m, ...g);
        const p = c()
          , b = m ? {
            ...m
        } : {}
          , v = _u(b.ref, p);
        return v && (b.ref = v),
        u(d, b, ...g)
    }
    ,
    R.jsx = function(d, m, g) {
        if (!f(d) && typeof d != "function")
            return a(d, m, g);
        const p = c()
          , b = m ? {
            ...m
        } : {}
          , v = _u(b.ref, p);
        return v && (b.ref = v),
        a(d, b, g)
    }
    ,
    R.jsxs = function(d, m, g) {
        if (!f(d) && typeof d != "function")
            return r(d, m, g);
        const p = c()
          , b = m ? {
            ...m
        } : {}
          , v = _u(b.ref, p);
        return v && (b.ref = v),
        r(d, b, g)
    }
    ,
    o && (Jm.jsxDEV = function(d, m, g, p, b, v) {
        if (!f(d) && typeof d != "function")
            return o(d, m, g, p, b, v);
        const S = c()
          , x = m ? {
            ...m
        } : {}
          , E = _u(x.ref, S);
        return E && (x.ref = E),
        o(d, x, g, p, b, v)
    }
    )
}
function J2(u) {
    const a = document.querySelector(u);
    if (!a)
        return null;
    const r = a.tagName.toLowerCase()
      , o = Zg.get(a);
    if (o)
        return {
            element: a,
            tagName: r,
            debugError: o()
        };
    const c = Qg.getFiberFromDOMNode(a);
    if (c) {
        const f = Xg.get(c);
        if (f)
            return {
                element: a,
                tagName: r,
                debugError: f()
            }
    }
    return null
}
k2();
function $2() {
    const u = new WeakMap
      , a = new ei(window.parent);
    return a.on("get-element-source", async ({selector: r}) => {
        const o = J2(r);
        if (!o)
            return null;
        const {element: c, tagName: f, debugError: d} = o;
        if (u.has(c))
            return u.get(c);
        const m = await Za(d, 10, f);
        if (!m)
            return null;
        const p = {
            ...m.sourceContext.filter(b => !b.file.includes("node_modules"))[0],
            domInfo: {
                tagName: c.tagName,
                textContent: c.textContent.slice(0, 300)
            }
        };
        return u.set(c, p),
        p
    }
    ),
    () => {
        a.destroy()
    }
}
const F2 = !0;
console.log("Is preview build:", F2);
async function W2() {
    z2(),
    V2(),
    D2(),
    X2(),
    $2()
}
W2();
const I2 = "phc_V7JMHB0fVJGRu8UHyrsj6pSL1BS76P5zD8qCi7lrTTV"
  , Je = {
    colors: {
        text: "#5D5D5D",
        white: "#FFFFFF",
        border: "rgba(0, 10, 36, 0.08)"
    },
    font: {
        family: '"Geist"',
        weight: "600",
        size: {
            normal: "14px",
            button: "18px"
        },
        lineHeight: "20px"
    },
    button: {
        gradient: "linear-gradient(180deg, #A797FF 0%, #7057FF 100%)"
    },
    shadow: "0px 8px 12px 0px rgba(9, 10, 20, 0.06)",
    zIndex: `${Number.MAX_SAFE_INTEGER}`
}
  , Im = {
    close: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D303D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>')}`,
    generate: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.87 4.94c.227-.71 1.21-.723 1.456-.02l1.177 3.378 3.101 1.013c.708.231.714 1.216.01 1.455l-3.183 1.082-1.105 3.17c-.245.704-1.23.69-1.455-.02l-.989-3.107-3.367-1.203c-.702-.25-.68-1.234.04-1.455l3.282-1.016 1.043-3.277Z" fill="#FFF"/><path fill-rule="evenodd" d="M12.238 1.3c.167-.667 1.1-.667 1.266 0l.388 1.551 1.55.388c.666.166.667 1.1 0 1.266l-1.55.388-.388 1.55c-.167.666-1.1.667-1.266 0l-.388-1.55-1.55-.388c-.667-.166-.667-1.1 0-1.266l1.55-.388.388-1.551Z" fill="#FFF"/></svg>')}`
}
  , Ka = {
    readdyLogo: "https://public.readdy.ai/gen_page/readdy-logo.png",
    watermarkLogo: "https://public.readdy.ai/gen_page/watermark.png",
    readdyLink: "https://readdy.ai?ref=b",
    fontStylesheet: "https://fonts.googleapis.com/css2?family=Geist:wght@600&display=swap",
    posthogCDN: "https://cdn.jsdelivr.net/npm/posthog-js@1.96.1/dist/array.full.min.js"
}
  , Pm = {
    en: {
        prefix: "This Website is Made with",
        suffix: ". You can also get one like this in minutes",
        button: "Get one for FREE"
    },
    zh: {
        prefix: "本网站来自",
        suffix: "你也可以在几分钟内拥有同样的页面",
        button: "立即免费拥有"
    }
}
  , P2 = () => navigator.language?.toLowerCase().startsWith("zh") ?? !1
  , Oo = () => P2() ? Pm.zh : Pm.en
  , eb = () => window.innerWidth > 768 && !("ontouchstart"in window)
  , tb = () => {
    const u = window.location.hostname;
    return ["readdy.ai", "dev.readdy.ai", "localhost"].some(r => u === r || u.endsWith(`.${r}`))
}
;
function nb() {
    if (window.posthog)
        return;
    const u = document.createElement("script");
    u.src = Ka.posthogCDN,
    u.async = !0,
    u.onload = () => {
        window.posthog?.init(I2, {
            api_host: "https://us.i.posthog.com",
            autocapture: !1,
            capture_pageview: !1,
            capture_pageleave: !1,
            disable_session_recording: !0,
            disable_scroll_properties: !0,
            capture_performance: {
                web_vitals: !1
            },
            rageclick: !1,
            loaded: function(a) {
                a.sessionRecording && a.sessionRecording.stopRecording()
            }
        })
    }
    ,
    document.head.appendChild(u)
}
function eg(u, a) {
    window.posthog?.capture(u, {
        ...a,
        version: 2
    })
}
function Gt(u, a) {
    Object.assign(u.style, a)
}
function To(u, a="0") {
    Gt(u, {
        color: Je.colors.text,
        fontFamily: Je.font.family,
        fontSize: Je.font.size.normal,
        lineHeight: Je.font.lineHeight,
        fontWeight: Je.font.weight,
        whiteSpace: "nowrap",
        marginRight: a
    })
}
function Cu(u, a="row") {
    Gt(u, {
        display: "flex",
        flexDirection: a,
        alignItems: "center",
        justifyContent: "center"
    })
}
function lb() {
    if (tb())
        return;
    const u = "https://readdy.ai/api/public/user/is_free"
      , a = "45d5a1e4-ddb4-46e5-a5eb-751d206edf7d";
    async function r(x) {
        try {
            return !(await (await fetch(`${u}?projectId=${x}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })).json()).data.is_free
        } catch {
            return !0
        }
    }
    function o() {
        document.querySelector('link[rel="icon"]')?.remove();
        const x = document.createElement("link");
        x.type = "image/png",
        x.rel = "icon",
        x.href = Ka.readdyLogo,
        document.head.appendChild(x);
        const E = document.createElement("link");
        E.rel = "stylesheet",
        E.href = Ka.fontStylesheet,
        document.head.appendChild(E)
    }
    function c(x) {
        eg(x),
        window.open(Ka.readdyLink, "_blank")
    }
    function f() {
        const x = document.createElement("div");
        x.id = "close-button",
        Gt(x, {
            position: "absolute",
            top: "-12px",
            right: "-12px",
            width: "32px",
            height: "32px",
            backgroundColor: Je.colors.white,
            borderRadius: "50%",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: Je.colors.border,
            cursor: "pointer",
            boxShadow: Je.shadow
        }),
        Cu(x);
        const E = document.createElement("img");
        return E.src = Im.close,
        Gt(E, {
            width: "24px",
            height: "24px"
        }),
        x.appendChild(E),
        x.addEventListener("click", O => {
            O.stopPropagation(),
            eg("watermark_close_button_click"),
            document.getElementById("watermark")?.remove()
        }
        ),
        x
    }
    function d(x) {
        const E = document.createElement("div");
        E.id = "generate-button",
        Gt(E, {
            padding: x ? "8px 16px" : "10px 20px",
            background: Je.button.gradient,
            borderRadius: "999px",
            border: "none",
            gap: "6px",
            cursor: "pointer",
            marginLeft: x ? "12px" : "0",
            whiteSpace: "nowrap",
            width: x ? "auto" : "100%"
        }),
        Cu(E);
        const O = document.createElement("img");
        O.src = Im.generate,
        Gt(O, {
            width: "16px",
            height: "16px",
            flexShrink: "0"
        });
        const _ = document.createElement("span");
        return _.textContent = Oo().button,
        Gt(_, {
            color: Je.colors.white,
            fontFamily: Je.font.family,
            fontSize: Je.font.size.button,
            fontWeight: Je.font.weight,
            lineHeight: Je.font.lineHeight
        }),
        E.append(O, _),
        E.addEventListener("click", L => {
            L.stopPropagation(),
            c("watermark_create_button_click")
        }
        ),
        E
    }
    function m() {
        const x = document.createElement("img");
        return x.src = Ka.watermarkLogo,
        Gt(x, {
            width: "92px",
            height: "auto",
            paddingLeft: "8px",
            flexShrink: "0"
        }),
        x
    }
    function g(x) {
        const E = Oo()
          , O = document.createElement("div");
        O.textContent = E.prefix,
        To(O);
        const _ = m()
          , L = document.createElement("div");
        L.textContent = E.suffix,
        To(L, "12px"),
        x.append(O, _, L, d(!0))
    }
    function p(x, E) {
        const O = document.createElement("div");
        return O.textContent = x,
        To(O),
        E && Gt(O, E),
        O
    }
    function b(x) {
        const {prefix: E, suffix: O} = Oo()
          , [_,L] = O.startsWith(".") ? [".", O.slice(1).trim()] : ["", O]
          , U = document.createElement("div");
        Cu(U),
        U.style.marginBottom = "4px",
        U.append(p(E, {
            marginRight: "6px"
        }), m(), ..._ ? [p(_)] : []),
        x.append(U, p(L, {
            textAlign: "center",
            marginBottom: "12px"
        }), d(!1))
    }
    function v() {
        const x = eb()
          , E = document.createElement("div");
        return E.id = "watermark",
        Gt(E, {
            zIndex: Je.zIndex,
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            width: x ? "fit-content" : "calc(100% - 32px)",
            maxWidth: x ? "none" : "100%",
            backgroundColor: Je.colors.white,
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: x ? "999px" : "36px",
            borderColor: Je.colors.border,
            padding: x ? "12px 20px" : "16px",
            boxShadow: Je.shadow,
            cursor: "pointer"
        }),
        Cu(E, x ? "row" : "column"),
        E.appendChild(f()),
        x ? g(E) : b(E),
        E.addEventListener("click", O => {
            O.target.closest("#generate-button, #close-button") || c("watermark_create_button_click")
        }
        ),
        E
    }
    function S(x) {
        const E = document.getElementById("watermark");
        !E && !x ? (document.body.appendChild(v()),
        o(),
        nb()) : x && E && E.remove()
    }
    r(a).then(S)
}
lb();
//# sourceMappingURL=index-Dex266-3.js.map
