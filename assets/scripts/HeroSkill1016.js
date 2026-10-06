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
    a = t("ArrayUtil"),
    c = t("MathUtil"),
    u = t("ResUtils"),
    p = t("HeroController"),
    h = t("MoveSys"),
    d = t("RotaryDart"),
    e =
        ((r = t("HeroSkillBase").default),
        e(f, r),
        (f.prototype.updateSkill = function () {
            var t;
            r.prototype.updateSkill.call(this),
                (this.create_delay =
                    (null === (t = this._data.confVo.extra_values) || void 0 === t ? void 0 : t.delay) || 0.2),
                (this.atk_radius =
                    (null === (t = this._data.confVo.extra_values) || void 0 === t ? void 0 : t.attack_dis) || 300),
                (this.splitNum =
                    (null === (t = this._data.confVo.extra_values) || void 0 === t ? void 0 : t.split) || 4),
                (this.splitRadius =
                    (null === (t = this._data.confVo.extra_values) || void 0 === t ? void 0 : t.raduis) || 20),
                (this.splitSpeed =
                    (null === (t = this._data.confVo.extra_values) || void 0 === t ? void 0 : t.splitSpeed) || 10);
        }),
        (f.prototype.levelUp = function () {
            this.clear();
        }),
        (f.prototype.onUpdate = function (t, e) {
            var o = this;
            0 < this.closeList.length &&
                (this.closeList.forEach(function (t) {
                    o.bullets.delete(t);
                }),
                (this.closeList.length = 0)),
                (0 == this._data.useTime || this._data.useTime + this.exeTime < t) &&
                    (0 == this._data.useTime && (this.count = 0), this.playSkill(), (this._data.useTime = t)),
                (this.delay -= e),
                0 < this.count && this.delay <= 0 && (--this.count, this.createBullet()),
                this.bullets.forEach(function (t) {
                    t.onUpdate(e);
                });
        }),
        (f.prototype.del = function (t) {
            this.closeList.push(t.uuid);
        }),
        (f.prototype.clear = function () {
            this.bullets.forEach(function (t) {
                t.recycle();
            }),
                this.bullets.clear();
        }),
        (f.prototype.playSkill = function () {
            (this.delay = 0),
                (this.angleIndex = 0),
                a.default.shuffle(this.angles1),
                a.default.shuffle(this.angles2),
                (this.angles = Math.random() < 0.5 ? this.angles1 : this.angles2),
                (this.count += this._data.confVo.atk_num),
                (this.start_angle = 0);
            var t,
                e = h.MoveSys.nearList;
            0 < (null == e ? void 0 : e.length) &&
                ((t = e[0].getCenterPos()),
                (e = p.HeroController.getHeroCenter()),
                (this.start_angle = c.default.getAngleTwoPoint(e, t)));
        }),
        (f.prototype.createBullet = function (a) {
            return i(this, void 0, void 0, function () {
                var e, o, n, i, r;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (this.delay = 100),
                                (e = p.HeroController.getHeroCenter()),
                                (o = (a || this).atk_radius),
                                (n = cc.v3(e.x + o, e.y)),
                                (r = a
                                    ? a.angle
                                    : 0 == this.angleIndex
                                    ? this.start_angle
                                    : this.start_angle + this.angles[this.angleIndex]),
                                c.default.rotatePoint(n, r, e, n),
                                (this.angleIndex = (this.angleIndex + 1) % this.angles.length),
                                [
                                    4,
                                    l.default.inst.getNodeFromPool(
                                        u.ResUtils.Prefabs.RotaryDart.url,
                                        u.ResUtils.Prefabs.RotaryDart.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (
                                ((i = t.sent()).position = a ? a.pos : e),
                                ((r = i.getComponent(d.default)).isMax = !a),
                                (r.hitNum = this._data.confVo.hit_num),
                                r.setData(
                                    {
                                        speedValue: (a || this).speedValue,
                                        isMax: !0,
                                        dis: o,
                                        targetPos: n,
                                        duration: this.duration,
                                        radius: (a || this).radius,
                                        angular: this.angular
                                    },
                                    this.hurtValue,
                                    this
                                ),
                                (i.parent = this._topLayer),
                                this.bullets.set(i.uuid, r),
                                this.spliceCloseList(i),
                                (this.delay = a ? 0 : this.create_delay),
                                [2]
                            );
                    }
                });
            });
        }),
        (f.prototype.split = function (t) {
            if (this.splitNum)
                for (var e = c.default.randomRangeInt(0, 360), o = 360 / this.splitNum, n = 0; n < this.splitNum; n++) {
                    var i = {
                        pos: t,
                        angle: e + o * n,
                        atk_radius: 1800,
                        speedValue: this.splitSpeed,
                        radius: this.splitRadius
                    };
                    this.createBullet(i);
                }
        }),
        f);
function f() {
    var t = r.call(this) || this;
    (t.count = 0),
        (t.delay = 0),
        (t.create_delay = 0.2),
        (t.atk_radius = 200),
        (t.bullets = new Map()),
        (t.splitNum = 0),
        (t.splitSpeed = 0),
        (t.splitRadius = 0),
        (t.angles1 = []),
        (t.angles2 = []),
        (t.angles = []),
        (t.angleIndex = 0),
        (t.start_angle = 0);
    for (var e = 18, o = 1; o < e; o++) t.angles1.push(20 * o);
    for (e = 12, o = 1; o < e; o++) t.angles2.push(30 * o);
    return t;
}
o.default = e;
