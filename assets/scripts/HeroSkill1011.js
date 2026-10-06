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
    r =
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
var a,
    s = t("App"),
    l = t("ResMgr"),
    c = t("MathUtil"),
    u = t("ResUtils"),
    p = t("HeroController"),
    h = t("GameMgr"),
    d = t("HuoQiu"),
    e =
        ((a = t("HeroSkillBase").default),
        e(f, a),
        (f.prototype.updateSkill = function () {
            a.prototype.updateSkill.call(this);
        }),
        (f.prototype.onUpdate = function (t, e) {
            var o = this;
            0 < this.closeList.length &&
                (this.closeList.forEach(function (t) {
                    o.bulltes.delete(t);
                }),
                (this.closeList.length = 0)),
                (0 == this._data.useTime || this._data.useTime + this.exeTime < t) &&
                    (this.playSkill(), (this._data.useTime = t)),
                (this.delay -= e),
                0 < this.count && this.delay <= 0 && this.isLoad && this.createBullet(),
                this.bulltes.forEach(function (t) {
                    t.onUpdate(e);
                });
        }),
        (f.prototype.del = function (t) {
            this.closeList.push(t.uuid);
        }),
        (f.prototype.clear = function () {
            this.bulltes.forEach(function (t) {
                t.recycle();
            }),
                this.bulltes.clear();
        }),
        (f.prototype.playSkill = function () {
            return i(this, void 0, void 0, function () {
                return r(this, function () {
                    return (
                        s.app.sound.playEffect("发射火焰球时的音效"),
                        (this.angle = 0),
                        (this.count = this._data.confVo.atk_num),
                        (this.dir.x = 1),
                        (this.dir.y = 0),
                        h.default.inst.moveVector.equals(cc.Vec3.ZERO)
                            ? h.default.inst.oldVertor.equals(cc.Vec3.ZERO) ||
                              c.default.copy(this.dir, h.default.inst.oldVertor)
                            : c.default.copy(this.dir, h.default.inst.moveVector),
                        this.isLoad || this.createBullet(),
                        [2]
                    );
                });
            });
        }),
        (f.prototype.createBullet = function () {
            return i(this, void 0, void 0, function () {
                var e, o, n, i;
                return r(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (i = c.default.rotatePoint(this.dir, this.angle)),
                                (e = i.mul(this.speedValue)),
                                (o = p.HeroController.getHeroCenter()),
                                [
                                    4,
                                    l.default.inst.getNodeFromPool(
                                        u.ResUtils.Prefabs.Huoqiu.url,
                                        u.ResUtils.Prefabs.Huoqiu.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (
                                (n = t.sent()),
                                (this.isLoad = !0),
                                (n.position = o),
                                ((i = n.getComponent(d.default)).isMax = !0),
                                (n.angle = this.angle),
                                (i.hitNum = Number.MAX_SAFE_INTEGER),
                                i.setData(
                                    {speed: e, duration: this.duration, radius: this.radius},
                                    this.hurtValue,
                                    this
                                ),
                                (n.parent = this._topLayer),
                                this.bulltes.set(n.uuid, i),
                                (this.angle -= this._data.confVo.extra_values.disperse_angle),
                                (this.delay = 0.06),
                                --this.count,
                                this.spliceCloseList(n),
                                [2]
                            );
                    }
                });
            });
        }),
        f);
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.count = 0), (t.delay = 0), (t.bulltes = new Map()), (t.angle = 0), (t.isLoad = !1), (t.dir = cc.v3(1, 0)), t
    );
}
o.default = e;
