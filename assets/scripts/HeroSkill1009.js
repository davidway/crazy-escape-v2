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
var i,
    s = t("ResMgr"),
    l = t("ResUtils"),
    c = t("HeroController"),
    u = t("GameMgr"),
    p = t("Greatsword"),
    e =
        ((i = t("HeroSkillBase").default),
        e(h, i),
        (h.prototype.updateSkill = function () {
            i.prototype.updateSkill.call(this);
        }),
        (h.prototype.onUpdate = function (t, e) {
            var o = this;
            0 < this.closeList.length &&
                (this.closeList.forEach(function (t) {
                    o.swords.delete(t);
                }),
                (this.closeList.length = 0)),
                (0 == this._data.useTime || this._data.useTime + this.exeTime < t) &&
                    (this.playSkill(), (this._data.useTime = t)),
                this.swords.forEach(function (t) {
                    t.onUpdate(e);
                });
        }),
        (h.prototype.del = function (t) {
            this.closeList.push(t.uuid);
        }),
        (h.prototype.clear = function () {
            this.swords.forEach(function (t) {
                t.recycle();
            }),
                this.swords.clear();
        }),
        (h.prototype.playSkill = function () {
            return r(this, void 0, void 0, function () {
                var e;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = cc.v3(1, 0)),
                                u.default.inst.moveVector.equals(cc.Vec3.ZERO)
                                    ? u.default.inst.oldVertor.equals(cc.Vec3.ZERO) ||
                                      ((e.x = u.default.inst.oldVertor.x), (e.y = u.default.inst.oldVertor.y))
                                    : ((e.x = u.default.inst.moveVector.x), (e.y = u.default.inst.moveVector.y)),
                                c.HeroController.heroAttack(),
                                [4, this.createBullet(e)]
                            );
                        case 1:
                            return t.sent(), [4, this.createBullet(e.mul(-1))];
                        case 2:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (h.prototype.createBullet = function (i) {
            return r(this, void 0, void 0, function () {
                var e, o, n;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = c.HeroController.getHeroCenter()),
                                [
                                    4,
                                    s.default.inst.getNodeFromPool(
                                        l.ResUtils.Prefabs.Greatsword.url,
                                        l.ResUtils.Prefabs.Greatsword.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (
                                ((o = t.sent()).position = e),
                                ((n = o.getComponent(p.default)).isMax = !0),
                                (n.hitNum = Number.MAX_SAFE_INTEGER),
                                n.setData(
                                    {
                                        dir: i,
                                        angle: this._data.confVo.speed,
                                        duration: this.duration,
                                        radius: this.radius
                                    },
                                    this.hurtValue,
                                    this
                                ),
                                (o.parent = this._topLayer),
                                this.swords.set(o.uuid, n),
                                this.spliceCloseList(o),
                                [2]
                            );
                    }
                });
            });
        }),
        h);
function h() {
    var t = (null !== i && i.apply(this, arguments)) || this;
    return (t.swords = new Map()), t;
}
o.default = e;
