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
    i =
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
var r,
    s = t("ResMgr"),
    l = t("MathUtil"),
    c = t("ResUtils"),
    u = t("HeroController"),
    p = t("FiringEffect"),
    h = t("FuelBottle"),
    e =
        ((r = t("HeroSkillBase").default),
        e(d, r),
        (d.prototype.updateSkill = function () {
            var t;
            r.prototype.updateSkill.call(this),
                (this.create_delay =
                    (null === (t = this._data.confVo.extra_values) || void 0 === t ? void 0 : t.delay) || 0.1);
        }),
        (d.prototype.levelUp = function () {
            this.clear();
        }),
        (d.prototype.onUpdate = function (t, e) {
            var o = this;
            if (
                (0 < this.closeList.length &&
                    (this.closeList.forEach(function (t) {
                        o.bottles.delete(t);
                    }),
                    this.closeList.forEach(function (t) {
                        o.fires.delete(t);
                    }),
                    (this.closeList.length = 0)),
                0 < this.play_time && ((this.play_time -= e), this.play_time <= 0))
            )
                return (this.play_time = 0), void this.clear();
            (0 == this._data.useTime || this._data.useTime + this.exeTime < t) &&
                (0 == this._data.useTime && (this.count = 0),
                this.playSkill(),
                (this.play_time = this.duration + 1),
                (this._data.useTime = t)),
                (this.delay -= e),
                0 < this.count && this.delay <= 0 && (--this.count, (this.delay = 100), this.createBullet()),
                !this.isCreateFire && 0 < this.posList.length && this.createFire(this.posList.pop()),
                this.bottles.forEach(function (t) {
                    t.onUpdate(e);
                }),
                this.fires.forEach(function (t) {
                    t.onUpdate(e);
                });
        }),
        (d.prototype.del = function (t) {
            this.closeList.push(t.uuid);
        }),
        (d.prototype.clear = function () {
            this.bottles.forEach(function (t) {
                t.recycle();
            }),
                this.fires.forEach(function (t) {
                    t.recycle();
                }),
                this.bottles.clear(),
                this.fires.clear(),
                (this.isCreateFire = !1),
                (this.count = 0),
                (this.posList.length = 0);
        }),
        (d.prototype.playSkill = function () {
            (this.count = this._data.confVo.atk_num),
                (this.start_angle = l.default.randomRangeInt(0, 360)),
                (this.add_angle = 360 / this._data.confVo.atk_num);
        }),
        (d.prototype.addFire = function (t) {
            this.posList.push(t);
        }),
        (d.prototype.createBullet = function () {
            return i(this, void 0, void 0, function () {
                var e, o, n, i, r;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = u.HeroController.getHeroCenter()),
                                [
                                    4,
                                    s.default.inst.getNodeFromPool(
                                        c.ResUtils.Prefabs.Bottle.url,
                                        c.ResUtils.Prefabs.Bottle.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (
                                ((o = t.sent()).position = e),
                                (n = o.getComponent(h.default)),
                                (i = l.default.rotatePoint(cc.v3(this._data.confVo.speed, 0), this.start_angle)),
                                (r = l.default.getAngleTwoPoint(cc.v3(), i)),
                                (n.isMax = !0),
                                (o.angle = r),
                                (n.hitNum = Number.MAX_SAFE_INTEGER),
                                n.setData(
                                    {speed: i, duration: this.duration, radius: this.radius},
                                    this.hurtValue,
                                    this
                                ),
                                (o.parent = this._topLayer),
                                this.bottles.set(o.uuid, n),
                                this.spliceCloseList(o),
                                (this.start_angle += this.add_angle),
                                (this.delay = this.create_delay),
                                (this.play_time = this.duration + 1),
                                [2]
                            );
                    }
                });
            });
        }),
        (d.prototype.createFire = function (n) {
            return i(this, void 0, void 0, function () {
                var e, o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (this.isCreateFire = !0),
                                [
                                    4,
                                    s.default.inst.getNodeFromPool(
                                        c.ResUtils.Prefabs.FiringEffMax.url,
                                        c.ResUtils.Prefabs.FiringEffMax.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (
                                ((e = t.sent()).position = n),
                                ((o = e.getComponent(p.default)).hitNum = Number.MAX_SAFE_INTEGER),
                                o.setData(
                                    {
                                        duration: this.duration,
                                        radius: this.radius,
                                        defence: this._data.confVo.extra_values.reduce_defense
                                    },
                                    this.hurtValue,
                                    this
                                ),
                                (e.parent = this._bottomLayer),
                                (e.zIndex = -200),
                                this.fires.set(e.uuid, o),
                                (this.isCreateFire = !1),
                                this.spliceCloseList(e),
                                [2]
                            );
                    }
                });
            });
        }),
        d);
function d() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t.count = 0),
        (t.bottles = new Map()),
        (t.fires = new Map()),
        (t.play_time = 0),
        (t.delay = 0),
        (t.create_delay = 0),
        (t.start_angle = 0),
        (t.add_angle = 0),
        (t.posList = []),
        (t.isCreateFire = !1),
        t
    );
}
o.default = e;
