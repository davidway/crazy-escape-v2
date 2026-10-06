var t = require;
var e = module;
var o = exports;
var n,
    e =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        }),
    c =
        (this && this.__awaiter) ||
        function (t, a, s, l) {
            return new (s = s || Promise)(function (o, e) {
                function n(t) {
                    try {
                        r(l.next(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function i(t) {
                    try {
                        r(l.throw(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function r(t) {
                    var e;
                    t.done
                        ? o(t.value)
                        : ((e = t.value) instanceof s
                              ? e
                              : new s(function (t) {
                                    t(e);
                                })
                          ).then(n, i);
                }
                r((l = l.apply(t, a || [])).next());
            });
        },
    u =
        (this && this.__generator) ||
        function (o, n) {
            var i,
                r,
                a,
                s = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                },
                t = {next: e(0), throw: e(1), return: e(2)};
            return (
                "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                        return this;
                    }),
                t
            );
            function e(e) {
                return function (t) {
                    return (function (e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (
                                    ((i = 1),
                                    r &&
                                        (a =
                                            2 & e[0]
                                                ? r.return
                                                : e[0]
                                                ? r.throw || ((a = r.return) && a.call(r), 0)
                                                : r.next) &&
                                        !(a = a.call(r, e[1])).done)
                                )
                                    return a;
                                switch (((r = 0), (e = a ? [2 & e[0], a.value] : e)[0])) {
                                    case 0:
                                    case 1:
                                        a = e;
                                        break;
                                    case 4:
                                        return s.label++, {value: e[1], done: !1};
                                    case 5:
                                        s.label++, (r = e[1]), (e = [0]);
                                        continue;
                                    case 7:
                                        (e = s.ops.pop()), s.trys.pop();
                                        continue;
                                    default:
                                        if (
                                            !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                                            (6 === e[0] || 2 === e[0])
                                        ) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                                            s.label = e[1];
                                            break;
                                        }
                                        if (6 === e[0] && s.label < a[1]) {
                                            (s.label = a[1]), (a = e);
                                            break;
                                        }
                                        if (a && s.label < a[2]) {
                                            (s.label = a[2]), s.ops.push(e);
                                            break;
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                e = n.call(o, s);
                            } catch (t) {
                                (e = [6, t]), (r = 0);
                            } finally {
                                i = a = 0;
                            }
                        if (5 & e[0]) throw e[1];
                        return {value: e[0] ? e[1] : void 0, done: !0};
                    })([e, t]);
                };
            }
        };
Object.defineProperty(o, "__esModule", {value: !0});
var i,
    e =
        ((i = t("Singleton").Singleton()),
        e(r, i),
        (r.prototype.loadRemote = function (n, t) {
            return new Promise(function (o) {
                cc.assetManager.loadRemote(n, t, function (t, e) {
                    return t ? (console.error("获取资源失败：" + n), void o(null)) : void o(e);
                });
            });
        }),
        (r.prototype.loadAsset = function (l) {
            var t = this;
            return new Promise(function (s) {
                return c(t, void 0, void 0, function () {
                    var o,
                        e,
                        n,
                        i,
                        r,
                        a = this;
                    return u(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (
                                    (o = l.url),
                                    (e = l.type),
                                    (n = l.bundle),
                                    (r = void 0 === n ? "" : n) ? [4, this.getBundle(r)] : [3, 2]
                                );
                            case 1:
                                return (i = t.sent()), [3, 3];
                            case 2:
                                (i = cc.resources), (t.label = 3);
                            case 3:
                                return (
                                    (r = (n = i).get(o, l.type))
                                        ? (console.log("已有资源1:", o), s(r))
                                        : n.load(o, e, function (t, e) {
                                              return t
                                                  ? (console.error("获取资源失败：" + o), void s(null))
                                                  : (a.traceObject(e, o), void s(e));
                                          }),
                                    [2]
                                );
                        }
                    });
                });
            });
        }),
        (r.prototype.preLoadAsset = function (a) {
            var t = this;
            return new Promise(function (r) {
                return c(t, void 0, void 0, function () {
                    var e, o, n, i;
                    return u(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (
                                    (e = a.url),
                                    (o = a.type),
                                    (n = a.bundle),
                                    (n = void 0 === n ? "" : n) ? [4, this.getBundle(n)] : [3, 2]
                                );
                            case 1:
                                return (i = t.sent()), [3, 3];
                            case 2:
                                (i = cc.resources), (t.label = 3);
                            case 3:
                                return (
                                    (n = i).get(e, a.type)
                                        ? (console.log("已有资源2:", e), r())
                                        : n.preload(e, o, function (t) {
                                              return t && console.error("获取资源失败：" + e), void r();
                                          }),
                                    [2]
                                );
                        }
                    });
                });
            });
        }),
        (r.prototype.preloadDir = function (n, i) {
            var t = this;
            return new Promise(function (o) {
                return c(t, void 0, void 0, function () {
                    var e;
                    return u(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return i ? [4, this.getBundle(i)] : [3, 2];
                            case 1:
                                return (e = t.sent()), [3, 3];
                            case 2:
                                (e = cc.resources), (t.label = 3);
                            case 3:
                                return (
                                    e.preloadDir(n, function (t) {
                                        return t && console.error("获取资源失败：" + n), void o();
                                    }),
                                    [2]
                                );
                        }
                    });
                });
            });
        }),
        (r.prototype.loadBundle = function (i) {
            return c(this, void 0, void 0, function () {
                var e, o, n;
                return u(this, function (t) {
                    switch (t.label) {
                        case 0:
                            (e = 0), (o = i), (t.label = 1);
                        case 1:
                            return e < o.length ? ((n = o[e]), [4, this.getBundle(n)]) : [3, 4];
                        case 2:
                            t.sent(), (t.label = 3);
                        case 3:
                            return e++, [3, 1];
                        case 4:
                            return [2];
                    }
                });
            });
        }),
        (r.prototype.getBundle = function (a) {
            var s = this;
            return new Promise(function (o, n) {
                var i = Date.now(),
                    r = s.bundles.get(a);
                r
                    ? (console.log("已有分包:", a, Date.now() - i), o(r))
                    : cc.assetManager.loadBundle(a, function (t, e) {
                          return t
                              ? (console.error("加载bundle:" + a + "失败" + t), void n())
                              : ((r = e), s.bundles.set(a, r), console.log("加载分包:", e, Date.now() - i), void o(r));
                      });
            });
        }),
        (r.prototype.traceObject = function (t) {
            var e = t.addRef,
                o = t.decRef;
            (t.addRef = function () {
                return e.apply(t, arguments);
            }),
                (t.decRef = function () {
                    return o.apply(t, arguments);
                });
        }),
        r);
function r() {
    var t = (null !== i && i.apply(this, arguments)) || this;
    return (t.bundles = new Map()), t;
}
o.default = e;
