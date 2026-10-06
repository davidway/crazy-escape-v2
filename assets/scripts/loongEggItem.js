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
    u = t("decorator"),
    p = t("BasePanel"),
    h = t("Activity51Controller"),
    d = t("GoodsDataController"),
    f = t("GameEnums"),
    y = t("PropType"),
    g = t("EffectMgr"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (l = p.default),
        i(m, l),
        (m.prototype.initView = function () {
            (this.egg.autoClear = !0), (this.countLab.string = "x" + this._Activity.count), (this._isInit = !0);
        }),
        (m.prototype.updateView = function () {
            this.showEgg(),
                (this.PropNum = d.default.inst.getGoodsNumByID(this.propType)),
                this.setGray(this.openBtn, this._isOpen || this.PropNum < this._Activity.count);
        }),
        (m.prototype.setData = function (t, e, o) {
            (this._Activity = t), (this._isOpen = e), (this.propType = o), this._isInit && this.updateView();
        }),
        (m.prototype.openLoongEgg = function () {
            var t = this;
            this._isOpen
                ? g.default.inst.showTips("奖励已领取")
                : ((this.PropNum = d.default.inst.getGoodsNumByID(this.propType)),
                  this.PropNum >= this._Activity.count
                      ? h.default.inst.isClick
                          ? g.default.inst.showTips("正在砸蛋，请稍后...")
                          : ((h.default.inst.isClick = !0),
                            c.app.sound.playEffect("龙蛋碎掉"),
                            this.scheduleOnce(function () {
                                c.app.sound.playEffect("弹出奖励");
                            }, 1),
                            this.egg.setAnimation({
                                act: f.GoddessActs.Win,
                                loop: !1,
                                complete: function () {
                                    t.addReward();
                                }
                            }))
                      : g.default.inst.showTips("锤子不足，多多击杀怪物获得"));
        }),
        (m.prototype.addReward = function () {
            console.log("打开龙蛋", this.PropNum, this._Activity.count),
                (this._isOpen = !0),
                this.setGray(this.openBtn, this._isOpen),
                h.default.inst.addReward(this._Activity);
        }),
        (m.prototype.stopAtFrame = function (t) {
            var e = this.egg.node.getComponent(sp.Skeleton).getCurrent(0);
            (t = (t = -1 === t ? e.animation.duration : 1 < t ? (t - 1) / 30 : 0) < 0 ? 0 : t) >=
                e.animation.duration && (t = e.animation.duration - 0.01),
                (e.timeScale = 0),
                (e.trackTime = t);
        }),
        (m.prototype.showEgg = function () {
            return a(this, void 0, void 0, function () {
                var e,
                    o,
                    n = this;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [
                                4,
                                this.egg.setSource("others/egg0" + this._Activity.loong_egg_id + "/egg", "actors")
                            ];
                        case 1:
                            return (
                                t.sent(),
                                this.egg.setSkin("default"),
                                (e = f.GoddessActs.IDLE2),
                                this._isOpen && (e = f.GoddessActs.Win),
                                (o = function () {
                                    (n._shouTime = 0),
                                        n.egg.setAnimation({act: e, loop: !n._isOpen, complete: function () {}}),
                                        n._isOpen && n.stopAtFrame(-1);
                                }),
                                this.scheduleOnce(o, this._shouTime),
                                [2]
                            );
                    }
                });
            });
        }),
        (m.prototype.onOpenBtnClick = function () {
            this.openLoongEgg();
        }),
        r([u.autoBind("CCSkeleton", "egg")], m.prototype, "egg", void 0),
        r([u.autoBind("cc.Node", "openBtn")], m.prototype, "openBtn", void 0),
        r([u.autoBind("cc.Label", "countLab")], m.prototype, "countLab", void 0),
        r([t], m));
function m() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.egg = null),
        (t.openBtn = null),
        (t.countLab = null),
        (t._Activity = null),
        (t._isInit = !1),
        (t._isOpen = !1),
        (t.PropNum = 0),
        (t._shouTime = 0.8),
        (t.propType = y.PropType.none),
        t
    );
}
o.default = t;
