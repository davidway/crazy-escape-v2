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
var r,
    p = t("ResMgr"),
    h = t("MathUtil"),
    d = t("ResUtils"),
    f = t("GameConst"),
    y = t("DropController"),
    g = t("HeroController"),
    m = t("MoveSys"),
    _ = t("Darts"),
    e =
        ((r = t("HeroSkillBase").default),
        e(a, r),
        (a.prototype.updateSkill = function () {
            r.prototype.updateSkill.call(this);
        }),
        (a.prototype.onUpdate = function (t, e) {
            var o = this;
            0 < this.closeList.length &&
                (this.closeList.forEach(function (t) {
                    o.bullets.delete(t);
                }),
                (this.closeList.length = 0)),
                (0 == this._data.useTime || this._data.useTime + this.exeTime < t) &&
                    (0 == this._data.useTime && (this.count = 0), this.playSkill(), (this._data.useTime = t)),
                (this.delay -= e),
                0 < this.count && this.delay <= 0 && (--this.count, this.createDarts()),
                this.bullets.forEach(function (t) {
                    t.onUpdate(e);
                });
        }),
        (a.prototype.del = function (t) {
            this.closeList.push(t.uuid);
        }),
        (a.prototype.clear = function () {
            this.bullets.forEach(function (t) {
                t.recycle();
            }),
                this.bullets.clear();
        }),
        (a.prototype.playSkill = function () {
            this.count += this._data.confVo.atk_num;
        }),
        (a.prototype.createDarts = function () {
            return i(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s, l, c;
                return u(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (
                                ((this.delay = 0.2),
                                (e = null),
                                (o = g.HeroController.getHeroCenter()),
                                0 < y.default.inst.getBoxNum())
                            )
                                for (n = y.default.inst.getBoxPos(), r = 0, a = n.length; r < a; r++)
                                    if (h.default.getDistanceSq(o, n[r]) < f.GameConst.Hit_Box_Dis) {
                                        e = n[r];
                                        break;
                                    }
                            if (!e)
                                for (i = m.MoveSys.nearList, r = 0, a = i.length; r < a; r++)
                                    if (!i[r].monster.isDie) {
                                        e = i[r].getCenterPos();
                                        break;
                                    }
                            return e
                                ? (g.HeroController.heroAttack(this.timeScale),
                                  [
                                      4,
                                      p.default.inst.getNodeFromPool(
                                          d.ResUtils.Prefabs.Darts.url,
                                          d.ResUtils.Prefabs.Darts.bundle
                                      )
                                  ])
                                : [2];
                        case 1:
                            return (
                                ((s = t.sent()).position = o),
                                (c = h.default.getAngleTwoPoint(o, e)),
                                (s.angle = c),
                                (l = e.sub(o).normalizeSelf().mulSelf(this.speedValue)),
                                ((c = s.getComponent(_.default)).hitNum = this._data.confVo.hit_num),
                                (c.isMax = !1),
                                (s.parent = this._topLayer),
                                c.setData({speed: l, duration: this.duration}, this.hurtValue, this),
                                this.bullets.set(s.uuid, c),
                                this.spliceCloseList(s),
                                [2]
                            );
                    }
                });
            });
        }),
        a);
function a() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t.count = 0), (t.delay = 0), (t.timeScale = 1), (t.bullets = new Map()), t;
}
o.default = e;
