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
    l = t("App"),
    c = t("ResMgr"),
    u = t("ResUtils"),
    p = t("HeroController"),
    e = t("HeroSkillBase"),
    h = t("GyroMax"),
    i =
        ((s = e.default),
        i(d, s),
        (d.prototype.updateSkill = function () {
            s.prototype.updateSkill.call(this), (this.duration = Number.MAX_SAFE_INTEGER);
        }),
        (d.prototype.onUpdate = function (t, e) {
            this.gyro && this.gyro.node.parent ? this.gyro.onUpdate(e) : this.playSkill();
        }),
        (d.prototype.del = function () {
            this.gyro && (this.gyro.node.parent = null);
        }),
        (d.prototype.clear = function () {
            this.gyro && (this.gyro.node.parent = null);
        }),
        (d.prototype.playSkill = function () {
            if ((l.app.sound.playEffect("发射火焰球时的音效"), this.gyro))
                return (
                    this.gyro.updatePos(),
                    this.gyro.setData(
                        {
                            speed: this.speedValue,
                            angular: this.angular,
                            duration: this.duration,
                            count: this._data.confVo.atk_num
                        },
                        this.hurtValue,
                        this
                    ),
                    void (this.gyro.node.parent = this._topLayer)
                );
            this.isLoading || ((this.isLoading = !0), this.createGyro());
        }),
        (d.prototype.createGyro = function () {
            return r(this, void 0, void 0, function () {
                var e, o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [
                                4,
                                c.default.inst.getNodeFromPool(
                                    u.ResUtils.Prefabs.GyroMax.url,
                                    u.ResUtils.Prefabs.GyroMax.bundle
                                )
                            ];
                        case 1:
                            return (
                                (e = t.sent()),
                                (o = p.HeroController.getHeroPos().add(cc.v3(0, 40))),
                                (e.position = o),
                                (this.gyro = e.getComponent(h.default)),
                                (this.gyro.hitNum = Number.MAX_SAFE_INTEGER),
                                this.gyro.setData(
                                    {
                                        speed: this.speedValue,
                                        angular: this.angular,
                                        duration: this.duration,
                                        count: this._data.confVo.atk_num
                                    },
                                    this.hurtValue,
                                    this
                                ),
                                (e.parent = this._topLayer),
                                [2]
                            );
                    }
                });
            });
        }),
        d);
function d() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (t.gyro = null), (t.isLoading = !1), t;
}
o.default = i;
