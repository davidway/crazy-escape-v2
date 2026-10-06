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
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var i,
                r = arguments.length,
                a = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else
                for (var s = t.length - 1; 0 <= s; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : 3 < r ? i(e, o, a) : i(e, o)) || a);
            return 3 < r && a && Object.defineProperty(e, o, a), a;
        },
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
var l,
    c = t("App"),
    u = t("CCSkeleton"),
    p = t("MathUtil"),
    h = t("ConfData"),
    d = t("Flash"),
    f = t("GameEnums"),
    y = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = cc.Component),
        i(g, l),
        (g.prototype.onLoad = function () {
            (this.body.autoClear = !0),
                (this.flashComp = this.body.node.addComponent(d.default)),
                this.flashComp.setColor(cc.Color.WHITE.fromHEX("#EAEAEA"));
        }),
        (g.prototype.onEnable = function () {
            var t = this,
                n = h.default.inst.deathConf.getDeathConfVoByChapter(y.default.inst.chapter);
            n
                ? this.scheduleOnce(function () {
                      return a(t, void 0, void 0, function () {
                          var e, o;
                          return s(this, function (t) {
                              switch (t.label) {
                                  case 0:
                                      return (
                                          (e = cc.misc.clampf(p.default.randomRangeInt(1, 10), 1, 9)),
                                          (o = "others/egg0" + e + "/egg"),
                                          (y.default.inst.eggIndex = e),
                                          [4, this.body.setSource(o, "actors")]
                                      );
                                  case 1:
                                      return (
                                          t.sent(),
                                          (this.body.node.scale = n.scale),
                                          this.body.setSkin("default"),
                                          (this.isReady = !0),
                                          this.onIdle(),
                                          [2]
                                      );
                              }
                          });
                      });
                  }, 0.1)
                : console.log("找不到死神配置", y.default);
        }),
        (g.prototype.onIdle = function () {
            this.isReady && this.playIdle1();
        }),
        (g.prototype.playIdle1 = function () {
            var t = this,
                e = 0;
            this.body.setAnimation({
                act: f.GoddessActs.IDLE1,
                loop: !0,
                complete: function () {
                    3 <= (e += 1) && t.playIdle2();
                }
            });
        }),
        (g.prototype.playIdle2 = function () {
            var t = this,
                e = 0;
            this.body.setAnimation({
                act: f.GoddessActs.IDLE2,
                loop: !0,
                complete: function () {
                    2 <= (e += 1) && t.playIdle1();
                }
            });
        }),
        (g.prototype.onLostHp = function () {
            this.flashComp.play();
        }),
        (g.prototype.onWin = function () {
            return a(this, void 0, void 0, function () {
                var e = this;
                return s(this, function () {
                    return [
                        2,
                        new Promise(function (t) {
                            e.body.setAnimation({
                                act: f.GoddessActs.Win,
                                loop: !1,
                                complete: function () {
                                    t();
                                }
                            });
                        })
                    ];
                });
            });
        }),
        (g.prototype.onDie = function () {
            return a(this, void 0, void 0, function () {
                var e = this;
                return s(this, function () {
                    return [
                        2,
                        new Promise(function (t) {
                            c.app.sound.playEffect("龙蛋碎掉"),
                                e.body.setAnimation({
                                    act: f.GoddessActs.DIE,
                                    loop: !1,
                                    complete: function () {
                                        t();
                                    }
                                });
                        })
                    ];
                });
            });
        }),
        r([e(u.default)], g.prototype, "body", void 0),
        r([t], g));
function g() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (t.body = null), (t.isReady = !1), (t.flashComp = null), t;
}
o.default = t;
