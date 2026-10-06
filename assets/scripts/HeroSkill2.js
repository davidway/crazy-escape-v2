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
    c = t("ResUtils"),
    u = t("HeroController"),
    p = t("Gyro"),
    e =
        ((a = t("HeroSkillBase").default),
        e(h, a),
        (h.prototype.updateSkill = function () {
            a.prototype.updateSkill.call(this);
        }),
        (h.prototype.levelUp = function () {
            this.gyro && (this.gyro.node.parent = null);
        }),
        (h.prototype.onUpdate = function (t, e) {
            this.gyro && this.gyro.node.parent
                ? this.gyro.onUpdate(e)
                : (0 == this._data.useTime || this._data.useTime + this.exeTime < t) &&
                  (this.playSkill(), (this._data.useTime = t));
        }),
        (h.prototype.del = function () {
            this.gyro && (this.gyro.node.parent = null);
        }),
        (h.prototype.clear = function () {
            this.gyro && (this.gyro.node.parent = null);
        }),
        (h.prototype.playSkill = function () {
            if ((s.app.sound.playEffect("发射火焰球时的音效"), this.gyro))
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
        (h.prototype.createGyro = function () {
            return i(this, void 0, void 0, function () {
                var e, o;
                return r(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [
                                4,
                                l.default.inst.getNodeFromPool(
                                    c.ResUtils.Prefabs.Gyro.url,
                                    c.ResUtils.Prefabs.Gyro.bundle
                                )
                            ];
                        case 1:
                            return (
                                (e = t.sent()),
                                (o = u.HeroController.getHeroPos().add(cc.v3(0, 40))),
                                (e.position = o),
                                (this.gyro = e.getComponent(p.default)),
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
        h);
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.gyro = null), (t.isLoading = !1), t;
}
o.default = e;
