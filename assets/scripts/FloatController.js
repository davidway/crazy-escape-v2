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
    r =
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
    a =
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
var s,
    l = t("App"),
    c = t("ResMgr"),
    e = t("Singleton"),
    u = t("ResUtils"),
    p = t("FloatNum"),
    h = t("LevelUpEff"),
    d = t("HeroController"),
    i =
        ((s = e.Singleton()),
        i(f, s),
        (f.prototype.setLayer = function (t) {
            return r(this, void 0, void 0, function () {
                return a(this, function () {
                    return (this.layer = t), [2];
                });
            });
        }),
        (f.prototype.addFloat = function (n) {
            return r(this, void 0, void 0, function () {
                var e, o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return 200 <= this.layer.childrenCount
                                ? [2]
                                : [
                                      4,
                                      c.default.inst.getNodeFromPool(
                                          u.ResUtils.Prefabs.FloatNum.url,
                                          u.ResUtils.Prefabs.FloatNum.bundle
                                      )
                                  ];
                        case 1:
                            return (
                                ((e = t.sent()).position = n.pt),
                                (o = e.getComponent(p.default)).setLab(n.msg, n.type),
                                (e.parent = this.layer),
                                this.floatMap.set(e.uuid, o),
                                [2]
                            );
                    }
                });
            });
        }),
        (f.prototype.delFloat = function (t) {
            this.closeFloats.push(t.node.uuid);
        }),
        (f.prototype.addLevelUp = function () {
            return r(this, void 0, void 0, function () {
                var e;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.isLoading
                                ? [2]
                                : this.lvUp
                                ? [3, 2]
                                : ((this.isLoading = !0),
                                  [
                                      4,
                                      c.default.inst.getNodeFromPool(
                                          u.ResUtils.Prefabs.Levelupeff.url,
                                          u.ResUtils.Prefabs.Levelupeff.bundle
                                      )
                                  ]);
                        case 1:
                            ((e = t.sent()).position = d.HeroController.getHeroCenter()),
                                (this.lvUp = e.getComponent(h.default)),
                                (this.isLoading = !1),
                                (t.label = 2);
                        case 2:
                            return l.app.sound.playEffect("升级"), (this.lvUp.node.parent = this.layer), [2];
                    }
                });
            });
        }),
        (f.prototype.delLevelUp = function () {
            this.lvUp && (this.lvUp.node.parent = null);
        }),
        (f.prototype.onUpdate = function () {
            var o = this;
            this.closeFloats.forEach(function (t) {
                var e = o.floatMap.get(t);
                e && (c.default.inst.putNodeToPool(e.node), o.floatMap.delete(t));
            }),
                (this.closeFloats.length = 0),
                this.lvUp &&
                    this.lvUp.node.parent &&
                    (this.lvUp.onUpdate(2), (this.lvUp.node.position = d.HeroController.getHeroCenter())),
                this.floatMap.forEach(function (t) {
                    t.node.parent && t.onUpdate(2);
                });
        }),
        (f.prototype.clear = function () {
            var o = this;
            Array.from(this.floatMap.keys()).forEach(function (t) {
                var e = o.floatMap.get(t);
                e && (c.default.inst.putNodeToPool(e.node), o.floatMap.delete(t));
            }),
                this.floatMap.clear();
        }),
        f);
function f() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t.layer = null),
        (t.floatMap = new Map()),
        (t.splitNum = 300),
        (t.list = []),
        (t.ratio = 1),
        (t.closeFloats = []),
        (t.lvUp = null),
        (t.isLoading = !1),
        t
    );
}
o.default = i;
