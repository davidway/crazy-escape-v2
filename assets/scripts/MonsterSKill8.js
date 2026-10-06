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
var s,
    l = t("ResMgr"),
    c = t("ResUtils"),
    u = t("GameMgr"),
    e = t("MonsterSkillBase"),
    p = t("MB8"),
    i =
        ((s = e.default),
        i(h, s),
        (h.prototype.setData = function (t, e) {
            s.prototype.setData.call(this, t, e);
            e = c.ResUtils.MonsterSkillRes.Mb8;
            (this.url = e.url), (this.bundle = e.bundle);
        }),
        (h.prototype.startSkill = function (t) {
            (this.data.useTime = t), (this.count = 0), (this.delay_time = this.calcValue("interval", 0));
        }),
        (h.prototype.playSkill = function (t, e) {
            return r(this, void 0, void 0, function () {
                return a(this, function () {
                    return (
                        this.bullets.forEach(function (t) {
                            t.onUpdate(e);
                        }),
                        this.isFinish ||
                            (this.count == this.data.count
                                ? ((this.isFinish = !0),
                                  this.ower.getMoveComp().stopMove(),
                                  (this.ower.isAllowMove = !0))
                                : 0 < this.delay_time &&
                                  ((this.delay_time -= e), this.delay_time <= 0 && this.createBullet())),
                        [2]
                    );
                });
            });
        }),
        (h.prototype.createBullet = function () {
            return r(this, void 0, void 0, function () {
                var e, o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, l.default.inst.getNodeFromPool(this.url, this.bundle)];
                        case 1:
                            return (
                                (e = t.sent()),
                                !this.ower || this.ower.isDie
                                    ? l.default.inst.putNodeToPool(e)
                                    : ((e.parent = this._layer),
                                      (e.position = this.ower.getMoveComp().getCenterPos()),
                                      (o = e.getComponent(p.default)).setData(
                                          {
                                              bounce: this.data.bounce,
                                              injury_time: this.data.injury_time,
                                              track: this.calcValue("track", 0),
                                              speedValue: this.data.speed,
                                              radius: this.data.radius,
                                              hurt_interval: this.data.hurt_interval,
                                              hurtValue: this._hurtValue,
                                              duration: this.data.duration
                                          },
                                          this
                                      ),
                                      this.bullets.set(e.uuid, o),
                                      this.ower.onAttack(),
                                      (this.delay_time = this.calcValue("interval", 0) / u.default.inst.timeScale),
                                      (this.count += 1)),
                                [2]
                            );
                    }
                });
            });
        }),
        (h.prototype.del = function (t) {
            this.bullets.delete(t);
        }),
        (h.prototype.clear = function () {
            for (var t = 0, e = Array.from(this.bullets.values()); t < e.length; t++) e[t].recycle();
            this.bullets.clear();
        }),
        h);
function h() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (t.bullets = new Map()), (t.delay_time = 0), (t.count = 0), (t.url = ""), (t.bundle = ""), t;
}
o.default = i;
