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
    a = t("ResMgr"),
    p = t("MathUtil"),
    s = t("ResUtils"),
    h = t("HeroController"),
    d = t("GameMgr"),
    f = t("MoveSys"),
    l = t("Bolt"),
    e =
        ((i = t("HeroSkillBase").default),
        e(c, i),
        (c.prototype.setData = function (t) {
            i.prototype.setData.call(this, t), (this.delay = 1);
        }),
        (c.prototype.updateSkill = function () {
            i.prototype.updateSkill.call(this);
        }),
        (c.prototype.levelUp = function () {
            this.clear();
        }),
        (c.prototype.onUpdate = function (t, e) {
            var o = this;
            0 < this.closeList.length &&
                (this.closeList.forEach(function (t) {
                    o.bolts.delete(t);
                }),
                (this.closeList.length = 0)),
                (this.delay -= e),
                ((this.delay <= 0 && 0 == this._data.useTime) || this._data.useTime + this.exeTime < t) &&
                    (this.playSkill(), (this._data.useTime = t)),
                this.bolts.forEach(function (t) {
                    t.onUpdate(e);
                });
        }),
        (c.prototype.del = function (t) {
            this.closeList.push(t.uuid);
        }),
        (c.prototype.clear = function () {
            this.bolts.forEach(function (t) {
                t.recycle();
            }),
                this.bolts.clear();
        }),
        (c.prototype.playSkill = function () {
            return r(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s, l, c;
                return u(this, function (t) {
                    switch (t.label) {
                        case 0:
                            for (
                                e = null,
                                    o = h.HeroController.getHeroCenter(),
                                    n = f.MoveSys.nearList,
                                    l = 0,
                                    i = n.length;
                                l < i;
                                l++
                            )
                                if (!n[l].monster.isDie) {
                                    (r = n[l].getCenterPos()), (e = r.sub(o).normalize());
                                    break;
                                }
                            if (!e)
                                return (
                                    (e = cc.v3(1, 0)),
                                    d.default.inst.moveVector.equals(cc.Vec3.ZERO)
                                        ? d.default.inst.oldVertor.equals(cc.Vec3.ZERO) ||
                                          p.default.copy(e, d.default.inst.oldVertor)
                                        : p.default.copy(e, d.default.inst.moveVector),
                                    [2]
                                );
                            (s =
                                this._data.confVo.atk_num <= 1
                                    ? 0
                                    : (this._data.confVo.atk_num - 1) * this._data.confVo.extra_values.disperse_angle),
                                (c = p.default.getAngleTwoPoint(cc.v3(), e)),
                                (a = c - (s >> 1)),
                                (s = e.mulSelf(this.speedValue)),
                                (s = p.default.rotatePoint(s, a - c)),
                                h.HeroController.heroAttack(),
                                (l = 0),
                                (t.label = 1);
                        case 1:
                            return l < this._data.confVo.atk_num
                                ? ((c = p.default.rotatePoint(s, l * this._data.confVo.extra_values.disperse_angle)),
                                  [4, this.createBullet(c)])
                                : [3, 4];
                        case 2:
                            t.sent(), (t.label = 3);
                        case 3:
                            return l++, [3, 1];
                        case 4:
                            return [2];
                    }
                });
            });
        }),
        (c.prototype.createBullet = function (i) {
            return r(this, void 0, void 0, function () {
                var e, o, n;
                return u(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = h.HeroController.getHeroCenter()),
                                [
                                    4,
                                    a.default.inst.getNodeFromPool(
                                        s.ResUtils.Prefabs.Bolt.url,
                                        s.ResUtils.Prefabs.Bolt.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (
                                ((o = t.sent()).position = e),
                                ((n = o.getComponent(l.default)).hitNum = this._data.confVo.hit_num),
                                (n.isMax = !1),
                                n.setData(
                                    {speed: i, duration: this.duration, radius: this.radius},
                                    this.hurtValue,
                                    this
                                ),
                                (o.parent = this._topLayer),
                                this.bolts.set(o.uuid, n),
                                this.spliceCloseList(o),
                                [2]
                            );
                    }
                });
            });
        }),
        c);
function c() {
    var t = (null !== i && i.apply(this, arguments)) || this;
    return (t.bolts = new Map()), (t.delay = 1), t;
}
o.default = e;
