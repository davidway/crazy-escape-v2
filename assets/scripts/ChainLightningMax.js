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
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var i,
                r = arguments.length,
                a = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else
                for (var s = t.length - 1; 0 <= s; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : 3 < r ? i(e, o, a) : i(e, o)) || a);
            return 3 < r && a && Object.defineProperty(e, o, a), a;
        },
    a =
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
var l,
    c = t("ResMgr"),
    u = t("ArrayUtil"),
    p = t("MathUtil"),
    h = t("ResUtils"),
    d = t("HeroController"),
    f = t("BulletType"),
    y = t("GameEnums"),
    g = t("GameMgr"),
    m = t("MoveSys"),
    _ = t("BaseElement"),
    v = t("ChainLightning"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (l = _.default),
        i(b, l),
        Object.defineProperty(b.prototype, "bulletType", {
            get: function () {
                return f.BulletType.ChainLightning;
            },
            enumerable: !1,
            configurable: !0
        }),
        (b.prototype.recycle = function () {
            this._skill && (this._skill.del(this.node), (this._skill = null)),
                this.lights.forEach(function (t) {
                    t.recycle();
                });
        }),
        (b.prototype.onLoad = function () {
            l.prototype.onLoad.call(this), (this._isMax = !0);
        }),
        (b.prototype.setData = function (e, t, o) {
            var n = this;
            (this.duration = 0.6),
                (this._hurtValue = t),
                (this._skill = o),
                (this.curr_interval = this.hurt_interval = 0),
                p.default.copy(this.pre_pos, d.HeroController.getHeroCenter());
            for (
                var o = g.default.inst.getMapCameraPos(),
                    o = cc.rect(
                        o.x - g.default.inst.halfWidth - 30,
                        o.y - g.default.inst.halfHeight - 30,
                        g.default.inst.stageWidth + 60,
                        g.default.inst.stageHeight + 60
                    ),
                    i = (this.monsters.length = 0),
                    r = m.MoveSys.getInSightList(o);
                i < r.length;
                i++
            ) {
                var a = r[i];
                a.monster && !a.monster.isDie && this.monsters.push(a.monster);
            }
            u.default.shuffle(this.monsters),
                this.monsters.forEach(function (t) {
                    n.createBullet(t),
                        t.isDie ||
                            (t.type != y.MonsterType.MOB && t.type != y.MonsterType.AGILITY_MOB) ||
                            t.onDizziness(e.dizziness);
                });
        }),
        (b.prototype.createBullet = function (r) {
            return a(this, void 0, void 0, function () {
                var e, o, n, i;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = r.getMoveComp().getCenterPos()),
                                [
                                    4,
                                    c.default.inst.getNodeFromPool(
                                        h.ResUtils.Prefabs.ChainLightning.url,
                                        h.ResUtils.Prefabs.ChainLightning.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (
                                ((o = t.sent()).position = this.pre_pos),
                                (n = e),
                                (i = o.getComponent(v.default)).setData(
                                    {pre_pos: this.pre_pos, to_pos: n, target: r, hurt_delay: 0.1},
                                    this.hurtValue,
                                    this._skill
                                ),
                                p.default.copy(this.pre_pos, n),
                                (o.parent = this.node),
                                this.lights.set(o.uuid, i),
                                [2]
                            );
                    }
                });
            });
        }),
        (b.prototype.onUpdate = function (e) {
            (this.duration -= e),
                this.duration <= 0
                    ? this.recycle()
                    : this.lights.forEach(function (t) {
                          t.onUpdate(e);
                      });
        }),
        r([t], b));
function b() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (t.lights = new Map()), (t.duration = null), (t.pre_pos = cc.v3()), t;
}
o.default = t;
