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
    s =
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
    p =
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
Object.defineProperty(o, "__esModule", {value: !0}), (o.PrefabItem = o.AssetItem = void 0);
var i = t("CCPrefab"),
    a = t("DelayUtil"),
    l = t("AssetLoader"),
    t = t("Singleton"),
    r = new Map(),
    c =
        ((u.prototype.getAsset = function () {
            return this.m_asset;
        }),
        (u.prototype.getRefCount = function () {
            return this.m_refCount;
        }),
        (u.prototype.getBundle = function () {
            return this.m_bundle;
        }),
        (u.prototype.getPath = function () {
            return this.m_path;
        }),
        (u.prototype.addRef = function () {
            this.m_refCount++, (this.m_idle_time = 0);
        }),
        (u.prototype.decRef = function () {
            this.m_refCount--, this.m_refCount <= 0 && (this.m_idle_time = Date.now());
        }),
        (u.prototype.destroy = function () {
            return (
                !!this.canDestroy() &&
                (this.m_asset.decRef(),
                r.delete(this.m_url),
                (this.m_asset = null),
                (this.m_path = ""),
                (this.m_bundle = ""),
                (this.m_url = ""),
                console.log("[ResMgr]-->[line:66]:销毁"),
                !0)
            );
        }),
        (u.prototype.canDestroy = function () {
            return !(
                0 < this.m_refCount ||
                0 == this.m_idle_time ||
                Date.now() - this.m_idle_time < 2e5 ||
                !this.m_asset
            );
        }),
        u);
function u(t, e, o) {
    (this.m_refCount = 0),
        (this.m_asset = null),
        (this.m_url = ""),
        (this.m_idle_time = 0),
        (this.m_asset = t),
        (this.m_path = e),
        (this.m_bundle = o || ""),
        (this.m_url = e),
        o && (this.m_url += "_" + o),
        r.set(this.m_url, this);
}
o.AssetItem = c;
var h,
    d =
        (e(f, (h = c)),
        (f.prototype.create = function (t) {
            for (var e = 0; e < t; e++) {
                var o = cc.instantiate(this.m_asset);
                (o.addComponent(i.default).assetItem = this).pool.push(o);
            }
        }),
        (f.prototype.getNode = function () {
            var t = this.pool.pop();
            return t || ((t = cc.instantiate(this.m_asset)).addComponent(i.default).assetItem = this), this.addRef(), t;
        }),
        (f.prototype.putNode = function (t) {
            this.pool.includes(t) || (this.pool.push(t), this.decRef());
        }),
        (f.prototype.destroy = function () {
            var t = h.prototype.destroy.call(this);
            return (
                t &&
                    (this.pool.concat([]).forEach(function (t) {
                        t.destroy();
                    }),
                    (this.pool.length = 0)),
                t
            );
        }),
        f);
function f() {
    var t = (null !== h && h.apply(this, arguments)) || this;
    return (t.pool = []), t;
}
o.PrefabItem = d;
var y,
    e =
        ((y = t.Singleton()),
        e(g, y),
        (g.prototype.getAssetFromPool = function (t, e) {
            return e && (t += "_" + e), r.get(t);
        }),
        (g.prototype.loadAsset = function (r) {
            var t = this;
            return new Promise(function (i) {
                return s(t, void 0, void 0, function () {
                    var e, o, n;
                    return p(this, function (t) {
                        switch (t.label) {
                            case 0:
                                if (((e = r.url), r.bundle && (e += "_" + r.bundle), !this.loadingMap.has(e)))
                                    return [3, 4];
                                (o = 0), (t.label = 1);
                            case 1:
                                return o < 1e3 ? [4, a.default.delay(0.2, this)] : [3, 4];
                            case 2:
                                if ((t.sent(), !this.loadingMap.has(e))) return [3, 4];
                                t.label = 3;
                            case 3:
                                return o++, [3, 1];
                            case 4:
                                return (n = this.getAssetFromPool(r.url, r.bundle))
                                    ? (i(n), [2])
                                    : (this.loadingMap.set(e, 1), [4, l.default.inst.loadAsset(r)]);
                            case 5:
                                return (
                                    (n = t.sent())
                                        ? (r.type == cc.Prefab
                                              ? i(new d(n, r.url, r.bundle))
                                              : i(new c(n, r.url, r.bundle)),
                                          this.loadingMap.delete(e))
                                        : (this.loadingMap.delete(e), i(null)),
                                    [2]
                                );
                        }
                    });
                });
            });
        }),
        (g.prototype.loadAssets = function (l, c, u) {
            return s(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s;
                return p(this, function (t) {
                    switch (t.label) {
                        case 0:
                            for (r in ((e = 0), (o = l.length), (n = []), (i = []), l)) i.push(r);
                            (a = 0), (t.label = 1);
                        case 1:
                            return a < i.length ? ((s = i[a]), [4, this.loadAsset(l[s])]) : [3, 4];
                        case 2:
                            (s = t.sent()) && ((s = s.getAsset()), (e += 1), c && c(e / o), n.push(s)), (t.label = 3);
                        case 3:
                            return a++, [3, 1];
                        case 4:
                            return u && u(n), [2];
                    }
                });
            });
        }),
        (g.prototype.loadBundle = function (t) {
            return s(this, void 0, void 0, function () {
                return p(this, function () {
                    return l.default.inst.loadBundle(t), [2];
                });
            });
        }),
        (g.prototype.preloadAssets = function (a) {
            return s(this, void 0, void 0, function () {
                var t = this;
                return p(this, function () {
                    return [
                        2,
                        new Promise(function (r) {
                            return s(t, void 0, void 0, function () {
                                var e, o, n, i;
                                return p(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            if (0 == a.length) return r(), [2];
                                            for (o in ((e = []), a)) e.push(o);
                                            (n = 0), (t.label = 1);
                                        case 1:
                                            return n < e.length
                                                ? ((i = e[n]), [4, l.default.inst.preLoadAsset(a[i])])
                                                : [3, 4];
                                        case 2:
                                            t.sent(), (t.label = 3);
                                        case 3:
                                            return n++, [3, 1];
                                        case 4:
                                            return r(), [2];
                                    }
                                });
                            });
                        })
                    ];
                });
            });
        }),
        (g.prototype.getAsset = function (n, i, r) {
            var t = this;
            return new Promise(function (o) {
                return s(t, void 0, void 0, function () {
                    var e;
                    return p(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.loadAsset({url: n, type: i, bundle: r})];
                            case 1:
                                return (e = t.sent()) ? ((e = e.getAsset()), o(e)) : o(null), [2];
                        }
                    });
                });
            });
        }),
        (g.prototype.createNode = function (n, i, r) {
            var t = this;
            return (
                void 0 === r && (r = 1),
                new Promise(function (o) {
                    return s(t, void 0, void 0, function () {
                        var e;
                        return p(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.loadAsset({url: n, type: cc.Prefab, bundle: i})];
                                case 1:
                                    return (e = t.sent()) && e.create(r), o(null), [2];
                            }
                        });
                    });
                })
            );
        }),
        (g.prototype.getNodeFromPool = function (n, i) {
            var t = this;
            return new Promise(function (o) {
                return s(t, void 0, void 0, function () {
                    var e;
                    return p(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.loadAsset({url: n, type: cc.Prefab, bundle: i})];
                            case 1:
                                return (e = t.sent()) && o(e.getNode()), o(null), [2];
                        }
                    });
                });
            });
        }),
        (g.prototype.putNodeToPool = function (t) {
            var e = t.getComponent(i.default);
            e ? e.assetItem.putNode(t) : console.error("putNodeToPool error:", t.name), (t.parent = null);
        }),
        (g.prototype.release = function () {
            Array.from(r.values()).forEach(function (t) {
                t.destroy();
            });
        }),
        (g.prototype.releaseRes = function (t) {
            var e = this;
            t &&
                0 != t.length &&
                t.forEach(function (t) {
                    t = e.getAssetFromPool(t.path, t.bundle);
                    t && t.destroy();
                });
        }),
        g);
function g() {
    var t = y.call(this) || this;
    return (t.loadingMap = new Map()), t;
}
o.default = e;
