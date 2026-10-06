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
    s = t("ResMgr"),
    l = t("ResUtils"),
    c = t("HeroController"),
    u = t("GameMgr"),
    p = t("Greatsword"),
    e =
        ((a = t("HeroSkillBase").default),
        e(h, a),
        (h.prototype.setData = function (t) {
            a.prototype.setData.call(this, t), (this.delay = 1);
        }),
        (h.prototype.updateSkill = function () {
            a.prototype.updateSkill.call(this);
        }),
        (h.prototype.onUpdate = function (t, e) {
            var o = this;
            0 < this.closeList.length &&
                (this.closeList.forEach(function (t) {
                    o.lights.delete(t);
                }),
                (this.closeList.length = 0)),
                (this.delay -= e),
                ((this.delay <= 0 && 0 == this._data.useTime) || this._data.useTime + this.exeTime < t) &&
                    (0 == this._data.useTime && (this.count = 0), this.playSkill(), (this._data.useTime = t)),
                0 < this.count && (--this.count, this.createBullet()),
                this.lights.forEach(function (t) {
                    t.onUpdate(e);
                });
        }),
        (h.prototype.del = function (t) {
            this.closeList.push(t.uuid);
        }),
        (h.prototype.clear = function () {
            this.lights.forEach(function (t) {
                t.recycle();
            }),
                this.lights.clear(),
                (this.count = 0);
        }),
        (h.prototype.playSkill = function () {
            (this.count = 1), c.HeroController.heroAttack();
        }),
        (h.prototype.createBullet = function () {
            return i(this, void 0, void 0, function () {
                var e, o, n, i;
                return r(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = cc.v3(1, 0)),
                                u.default.inst.moveVector.equals(cc.Vec3.ZERO)
                                    ? u.default.inst.oldVertor.equals(cc.Vec3.ZERO) ||
                                      ((e.x = u.default.inst.oldVertor.x), (e.y = u.default.inst.oldVertor.y))
                                    : ((e.x = u.default.inst.moveVector.x), (e.y = u.default.inst.moveVector.y)),
                                (o = c.HeroController.getHeroCenter()),
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
                                ((n = t.sent()).position = o),
                                ((i = n.getComponent(p.default)).isMax = !1),
                                (i.hitNum = Number.MAX_SAFE_INTEGER),
                                i.setData(
                                    {
                                        dir: e,
                                        angle: this._data.confVo.speed,
                                        duration: this.duration,
                                        radius: this.radius
                                    },
                                    this.hurtValue,
                                    this
                                ),
                                (n.parent = this._topLayer),
                                this.lights.set(n.uuid, i),
                                this.spliceCloseList(n),
                                [2]
                            );
                    }
                });
            });
        }),
        h);
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.count = 0), (t.lights = new Map()), (t.delay = 1), t;
}
o.default = e;
