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
    d = t("ChainLightning"),
    e =
        ((r = t("HeroSkillBase").default),
        e(f, r),
        (f.prototype.updateSkill = function () {
            r.prototype.updateSkill.call(this), (this.delay = this._data.confVo.extra_values.delay || 0.2);
        }),
        (f.prototype.levelUp = function () {
            this.clear();
        }),
        (f.prototype.onUpdate = function (t, e) {
            var o = this;
            0 < this.closeList.length &&
                (this.closeList.forEach(function (t) {
                    o.lights.delete(t);
                }),
                (this.closeList.length = 0)),
                (0 == this._data.useTime || this._data.useTime + this.exeTime < t) &&
                    (this.playSkill(), (this.create_delay = 0), (this._data.useTime = t)),
                0 < this.count &&
                    ((this.create_delay -= e),
                    this.create_delay <= 0 && (--this.count, (this.create_delay = 100), this.createBullet())),
                this.lights.forEach(function (t) {
                    t.onUpdate(e);
                });
        }),
        (f.prototype.del = function (t) {
            this.closeList.push(t.uuid);
        }),
        (f.prototype.clear = function () {
            this.lights.forEach(function (t) {
                t.recycle();
            }),
                this.lights.clear(),
                (this.targets.length = 0);
        }),
        (f.prototype.playSkill = function () {
            return i(this, void 0, void 0, function () {
                return s(this, function () {
                    return (
                        (this.count = this._data.confVo.atk_num),
                        (this.targets.length = 0),
                        c.default.copy(this.pre_pos, p.HeroController.getHeroCenter()),
                        (this.targets = h.MoveSys.getInSightList()),
                        a.default.shuffle(this.targets),
                        [2]
                    );
                });
            });
        }),
        (f.prototype.createBullet = function () {
            return i(this, void 0, void 0, function () {
                var e, o, n, i, r, a;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (0 == this.targets.length) return (this.count = 0), [2];
                            for (e = null; 0 < this.targets.length; )
                                if ((o = this.targets.shift()) && o.monster && !o.monster.isDie) {
                                    e = o;
                                    break;
                                }
                            return e
                                ? ((n = e.getCenterPos()),
                                  [
                                      4,
                                      l.default.inst.getNodeFromPool(
                                          u.ResUtils.Prefabs.ChainLightning.url,
                                          u.ResUtils.Prefabs.ChainLightning.bundle
                                      )
                                  ])
                                : [2];
                        case 1:
                            return (
                                ((i = t.sent()).position = this.pre_pos),
                                (r = n),
                                (a = i.getComponent(d.default)).setData(
                                    {pre_pos: this.pre_pos, to_pos: r, target: e.monster},
                                    this.hurtValue,
                                    this
                                ),
                                c.default.copy(this.pre_pos, r),
                                (i.parent = this._topLayer),
                                this.lights.set(i.uuid, a),
                                this.spliceCloseList(i),
                                (this.create_delay = this.delay),
                                [2]
                            );
                    }
                });
            });
        }),
        f);
function f() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t.create_delay = 0),
        (t.delay = 0),
        (t.count = 0),
        (t.lights = new Map()),
        (t.targets = []),
        (t.pre_pos = cc.v3()),
        t
    );
}
o.default = e;
