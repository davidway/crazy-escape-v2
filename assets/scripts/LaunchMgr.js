var t = require;
var e = module;
var o = exports;
var n,
    i =
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
    a =
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
    s =
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
var r,
    l = t("App"),
    c = t("LayerMgr"),
    u = t("ResMgr"),
    e = t("Singleton"),
    p = t("EventTypes"),
    h = t("ResUtils"),
    d = t("UIEnum"),
    f = t("GuideController"),
    y = t("ConfData"),
    i =
        ((r = e.Singleton()),
        i(g, r),
        (g.prototype.start = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return l.app.platform.setLoadingProgress(0), this.startLoad(), [2];
                });
            });
        }),
        (g.prototype.startLoad = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return cc.sys.platform == cc.sys.WECHAT_GAME &&
                                "wxad56d005ec7ccef9" != wx.getAccountInfoSync().miniProgram.appId
                                ? [2]
                                : [4, l.app.gui.openUI(d.UIEnum.LoadingView, c.LayerEnum.TOP_LAYER)];
                        case 1:
                            return t.sent(), [4, l.app.platform.getSetting()];
                        case 2:
                            return (
                                t.sent(), l.app.platform.checkUpdate(), f.GuideController.init(), this.loadRes(), [2]
                            );
                    }
                });
            });
        }),
        (g.prototype.loadRes = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.loadBundle()];
                        case 1:
                            return t.sent(), [4, this.loadConf()];
                        case 2:
                            return t.sent(), [4, this.loadAssets()];
                        case 3:
                            return t.sent(), [4, this.initPrefabs(this.preloads)];
                        case 4:
                            return t.sent(), l.app.event.emit(p.EventType.Launch_Load_Complete), [2];
                    }
                });
            });
        }),
        (g.prototype.loadBundle = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = ["round", "resources", "actors", "maps", "prefabs", "goods"]),
                                [4, u.default.inst.loadBundle(e)]
                            );
                        case 1:
                            return t.sent(), this.onProgress(0.1, "加载游戏配置"), [2];
                    }
                });
            });
        }),
        (g.prototype.loadConf = function () {
            var n = this;
            return new Promise(function (o) {
                cc.resources.load(
                    "conf/all",
                    cc.JsonAsset,
                    function (t, e) {
                        e = cc.misc.clamp01(t / e);
                        n.onProgress(0.1 + 0.2 * e, "加载游戏配置");
                    },
                    function (t, e) {
                        y.default.inst.parseJson(e), o();
                    }
                );
            });
        }),
        (g.prototype.loadAssets = function () {
            return a(this, void 0, void 0, function () {
                var e = this;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                f.GuideController.isNewPlayer
                                    ? (this.preloads = h.ResUtils.GamePreloads.concat([
                                          {url: "views/GuideView", bundle: "", type: cc.Prefab, count: 1}
                                      ]))
                                    : (this.preloads = h.ResUtils.Preloads.concat(h.ResUtils.GamePreloads)),
                                (this.preloads = this.preloads.concat(h.ResUtils.GameSkillRes)),
                                console.warn("[LaunchMgr]-->[line:70]:", this.preloads),
                                [
                                    4,
                                    u.default.inst.loadAssets(this.preloads, function (t) {
                                        e.onProgress(0.3 + 0.7 * t);
                                    })
                                ]
                            );
                        case 1:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (g.prototype.initPrefabs = function (r, t) {
            var e = this;
            return (
                void 0 === t && (t = !0),
                new Promise(function (i) {
                    return a(e, void 0, void 0, function () {
                        var e, o, n;
                        return s(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    r.length, (e = 0), (o = r), (t.label = 1);
                                case 1:
                                    return e < o.length
                                        ? 0 < (n = o[e]).count && n.type == cc.Prefab
                                            ? [4, u.default.inst.createNode(n.url, n.bundle, n.count)]
                                            : [3, 3]
                                        : [3, 5];
                                case 2:
                                    t.sent(), (t.label = 3);
                                case 3:
                                    t.label = 4;
                                case 4:
                                    return e++, [3, 1];
                                case 5:
                                    return i(), [2];
                            }
                        });
                    });
                })
            );
        }),
        (g.prototype.preload = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return [2];
                });
            });
        }),
        (g.prototype.preloadAssets = function (o, n) {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (e = Date.now()), [4, u.default.inst.preloadAssets(o)];
                        case 1:
                            return t.sent(), console.warn("预加载" + n, Date.now() - e), [2];
                    }
                });
            });
        }),
        (g.prototype.onProgress = function (t, e) {
            void 0 === e && (e = "加载游戏资源"),
                l.app.platform.setLoadingProgress(100 * t),
                l.app.event.emit(p.EventType.Launch_Load_Progress, {value: t, desc: e});
        }),
        g);
function g() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t.preloads = null), t;
}
o.default = i;
