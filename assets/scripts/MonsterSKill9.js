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
var a,
    l = t("ResMgr"),
    c = t("MathUtil"),
    u = t("ResUtils"),
    p = t("GameMgr"),
    e = t("MonsterSkillBase"),
    h = t("MB7"),
    d = t("MB9"),
    i =
        ((a = e.default),
        i(f, a),
        (f.prototype.setData = function (t, e) {
            a.prototype.setData.call(this, t, e);
            e = u.ResUtils.MonsterSkillRes.Mb9;
            (this.url = e.url),
                (this.bundle = e.bundle),
                (e = u.ResUtils.MonsterSkillRes.Mb7),
                (this.bullet_url = e.url),
                (this.bullet_bundle = e.bundle);
        }),
        (f.prototype.startSkill = function (t) {
            return r(this, void 0, void 0, function () {
                return s(this, function () {
                    return (
                        (this.data.useTime = t),
                        (this.round = 0),
                        (this.ower.target = p.default.inst.seekTarget(this.ower.distance)),
                        this.playRound(),
                        [2]
                    );
                });
            });
        }),
        (f.prototype.playRound = function () {
            return r(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            (e = 0), (t.label = 1);
                        case 1:
                            return e < this.data.count ? [4, this.createSplitBullet()] : [3, 4];
                        case 2:
                            t.sent(), (t.label = 3);
                        case 3:
                            return e++, [3, 1];
                        case 4:
                            return [4, this.ower.onAttack()];
                        case 5:
                            return t.sent(), (this.stay_time = this.calcValue("interval", 1)), (this.round += 1), [2];
                    }
                });
            });
        }),
        (f.prototype.playSkill = function (t, e) {
            return r(this, void 0, void 0, function () {
                return s(this, function () {
                    return (
                        this.bullets.forEach(function (t) {
                            t.onUpdate(e);
                        }),
                        this.isFinish ||
                            (this.round == this.data.round
                                ? ((this.isFinish = !0), (this.ower.isAllowMove = !0))
                                : 0 < this.stay_time &&
                                  ((this.stay_time -= e), this.stay_time <= 0 && this.playRound())),
                        [2]
                    );
                });
            });
        }),
        (f.prototype.createSplitBullet = function () {
            return r(this, void 0, void 0, function () {
                var e, o, n;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, l.default.inst.getNodeFromPool(this.url, this.bundle)];
                        case 1:
                            return (
                                (e = t.sent()),
                                !this.ower || this.ower.isDie
                                    ? l.default.inst.putNodeToPool(e)
                                    : ((e.parent = this._layer),
                                      (n = this.ower.getMoveComp().getCenterPos()),
                                      (e.position = n),
                                      (o = p.default.inst.getTargetCenterPos(this.ower.target)),
                                      (o = o.sub(n).normalize().mul(this.data.speed)),
                                      (n = e.getComponent(d.default)).setData(
                                          {
                                              bounce: this.data.bounce,
                                              injury_time: this.data.injury_time,
                                              radius: this.data.radius,
                                              hurt_interval: this.data.hurt_interval,
                                              hurtValue: this._hurtValue,
                                              speed: o,
                                              duration: this.data.duration
                                          },
                                          this
                                      ),
                                      this.bullets.set(e.uuid, n)),
                                [2]
                            );
                    }
                });
            });
        }),
        (f.prototype.del = function (t) {
            this.bullets.delete(t);
        }),
        (f.prototype.createBullet = function (n, i) {
            return r(this, void 0, void 0, function () {
                var e, o;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, l.default.inst.getNodeFromPool(this.bullet_url, this.bullet_bundle)];
                        case 1:
                            return (
                                (e = t.sent()),
                                !this.ower || this.ower.isDie
                                    ? l.default.inst.putNodeToPool(e)
                                    : ((e.parent = this._layer),
                                      (e.position = n),
                                      (o = e.getComponent(h.default)).setData(
                                          {
                                              bounce: 0,
                                              injury_time: this.data.injury_time,
                                              radius: this.data.radius >> 1,
                                              hurt_interval: this.data.hurt_interval,
                                              hurtValue: this._hurtValue,
                                              speed: i,
                                              duration: this.data.duration
                                          },
                                          this
                                      ),
                                      this.bullets.set(e.uuid, o)),
                                [2]
                            );
                    }
                });
            });
        }),
        (f.prototype.split = function (a) {
            return r(this, void 0, void 0, function () {
                var e, o, n, i, r;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            (e = this.data.value.splitNum),
                                (r = this.calcValue("splitSpeed", 0)),
                                (o = 360 / e),
                                (n = cc.v3(r, 0)),
                                (i = 0),
                                (t.label = 1);
                        case 1:
                            return i < e
                                ? ((r = c.default.rotatePoint(n, o * i)), [4, this.createBullet(a, r)])
                                : [3, 4];
                        case 2:
                            t.sent(), (t.label = 3);
                        case 3:
                            return i++, [3, 1];
                        case 4:
                            return [2];
                    }
                });
            });
        }),
        (f.prototype.clear = function () {
            for (var t = 0, e = Array.from(this.bullets.values()); t < e.length; t++) e[t].recycle();
            this.bullets.clear();
        }),
        f);
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.bullets = new Map()),
        (t.url = ""),
        (t.bundle = ""),
        (t.bullet_url = ""),
        (t.bullet_bundle = ""),
        (t.stay_time = 0),
        (t.round = 0),
        t
    );
}
o.default = i;
