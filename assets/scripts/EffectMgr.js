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
    l = t("ResMgr"),
    e = t("Singleton"),
    c = t("ResUtils"),
    u = t("Tips"),
    p = t("UserDataController"),
    h = t("ConfData"),
    d = t("FloatSkill"),
    f = t("FloatSkinSkill"),
    y = t("Explosion"),
    i =
        ((r = e.Singleton()),
        i(g, r),
        (g.prototype.init = function (t) {
            this._layer = t;
        }),
        (g.prototype.playRockerBomb = function (o, n, i, r) {
            return (
                void 0 === r && (r = null),
                a(this, void 0, void 0, function () {
                    var e;
                    return s(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [
                                    4,
                                    l.default.inst.getNodeFromPool(
                                        c.ResUtils.Prefabs.RocketBomb.url,
                                        c.ResUtils.Prefabs.RocketBomb.bundle
                                    )
                                ];
                            case 1:
                                return (
                                    (e = t.sent()).setPosition(n),
                                    (e.parent = r),
                                    (e = e.getComponent(y.default)).setScale(i),
                                    e.playAnim(o),
                                    [2]
                                );
                        }
                    });
                })
            );
        }),
        (g.prototype.playExplosion = function (o, n, i, r) {
            return (
                void 0 === r && (r = null),
                a(this, void 0, void 0, function () {
                    var e;
                    return s(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [
                                    4,
                                    l.default.inst.getNodeFromPool(
                                        c.ResUtils.Prefabs.Explosion.url,
                                        c.ResUtils.Prefabs.Explosion.bundle
                                    )
                                ];
                            case 1:
                                return (
                                    (e = t.sent()).setPosition(n),
                                    (e.parent = r),
                                    (e = e.getComponent(y.default)).setScale(i),
                                    e.playAnim(o),
                                    [2]
                                );
                        }
                    });
                })
            );
        }),
        (g.prototype.showTips = function (o) {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [
                                4,
                                l.default.inst.getNodeFromPool(
                                    c.ResUtils.Prefabs.Tips.url,
                                    c.ResUtils.Prefabs.Tips.bundle
                                )
                            ];
                        case 1:
                            return ((e = t.sent()).parent = this._layer), e.getComponent(u.default).setMsg(o), [2];
                    }
                });
            });
        }),
        (g.prototype.showDebugTips = function (t) {
            cc.sys.isBrowser && this.showTips(t);
        }),
        (g.prototype.showSkill = function (o) {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [
                                4,
                                l.default.inst.getNodeFromPool(
                                    c.ResUtils.Prefabs.FloatSkill.url,
                                    c.ResUtils.Prefabs.FloatSkill.bundle
                                )
                            ];
                        case 1:
                            return ((e = t.sent()).parent = this._layer), e.getComponent(d.default).setData(o), [2];
                    }
                });
            });
        }),
        (g.prototype.showSkinSkill = function () {
            return a(this, void 0, void 0, function () {
                var e, o;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return 0 <
                                (o = h.default.inst.playerSkinConf.getPlayerSkinVoById(p.default.inst.skin)).skill_id
                                ? ((e = []).push({skin_id: o.id, skill_id: o.skill_id}),
                                  p.default.inst.getSkinSkillStatus(o.id) &&
                                      0 < o.mb_id &&
                                      e.push({skin_id: o.id, skill_id: o.mb_id}),
                                  [
                                      4,
                                      l.default.inst.getNodeFromPool(
                                          c.ResUtils.Prefabs.FloatSkinSkill.url,
                                          c.ResUtils.Prefabs.FloatSkinSkill.bundle
                                      )
                                  ])
                                : [3, 2];
                        case 1:
                            ((o = t.sent()).parent = this._layer), o.getComponent(f.default).setData(e), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        g);
function g() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t._layer = null), t;
}
o.default = i;
