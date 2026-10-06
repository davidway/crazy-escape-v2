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
    l =
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
    c = t("App"),
    u = t("ResMgr"),
    p = t("EventTypes"),
    h = t("FrameComp"),
    d = t("HeroController"),
    f = t("GameEnums"),
    y = t("GameMgr"),
    g = t("AnimSys"),
    m = t("MoveSys"),
    _ = t("Monster"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((s = _.default),
        i(v, s),
        Object.defineProperty(v.prototype, "type", {
            get: function () {
                return f.MonsterType.REWARD_MOB;
            },
            enumerable: !1,
            configurable: !0
        }),
        (v.prototype.onLoad = function () {
            s.prototype.onLoad.call(this),
                (this.size.x = 5),
                (this.size.y = 7),
                (this.animComp = new h.FrameComp(this.node, this.body)),
                g.AnimSys.addComp(this.animComp);
        }),
        (v.prototype.onEnable = function () {
            s.prototype.onEnable.call(this), this.initAmins();
        }),
        (v.prototype.onDisable = function () {
            s.prototype.onDisable.call(this),
                this.animComp.clear(),
                (this.isHitHero = !1),
                g.AnimSys.delComp(this.animComp);
        }),
        (v.prototype.onIdle = function () {}),
        (v.prototype.onMove = function () {}),
        (v.prototype.onAttack = function () {}),
        (v.prototype.initAmins = function () {
            return a(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (this.isHitHero = !1),
                                this.animComp.clear(),
                                [4, u.default.inst.getAsset(this.mSkin.url, cc.SpriteAtlas, "actors")]
                            );
                        case 1:
                            for (e = t.sent(), o = 0, n = this.mSkin.action.length; o < n; o++) {
                                for (i = this.mSkin.action[o], r = [], a = 1; a <= i.count; a++)
                                    r.push(e.getSpriteFrame("" + i.name + this.mSkin.index + "_" + a));
                                (s = {name: i.name, frames: r, interval: i.interval, loop: i.name == f.MobActs.WALK}),
                                    this.animComp.setData(s);
                            }
                            return this.animComp.play(f.MobActs.WALK), [2];
                    }
                });
            });
        }),
        (v.prototype.onLostHp = function () {}),
        (v.prototype.onDie = function () {
            g.AnimSys.delComp(this.animComp), s.prototype.onDie.call(this);
        }),
        (v.prototype.onUpdate = function (t) {
            if (this.isHitHero) return (this.disapear_time += t), void this.disapear();
            (this.body.node.angle += this.sign),
                (this.body.node.angle < -7 || 7 < this.body.node.angle) && (this.sign = -this.sign),
                0 < y.default.inst.reward_num &&
                    this.distance <= d.HeroController.getHeroRadius() + this.mConf.atk_radius &&
                    (--y.default.inst.reward_num,
                    console.log("神龙-奖励:", y.default.inst.reward_num),
                    (this.isHitHero = !0),
                    m.MoveSys.delComp(this.moveComp),
                    c.app.event.emit(p.EventType.Game_Reward_Monster_Hit)),
                s.prototype.onUpdate.call(this, t);
        }),
        (v.prototype.disapear = function () {
            var t = this.node.position.add(cc.v3(0, 25));
            (this.node.position = t), 1 <= this.disapear_time && ((this.disapear_time = 0), this.kill());
        }),
        (v.prototype.setScale = function (t) {
            (this.bodyScale = t), (this.body.node.scale = this.bodyScale);
        }),
        (v.prototype.setDir = function (t) {
            this.body.node.scaleX = -t * this.bodyScale;
        }),
        (v.prototype.checkDrop = function () {}),
        r([e(cc.Sprite)], v.prototype, "body", void 0),
        r([t], v));
function v() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t.body = null),
        (t.animComp = null),
        (t.sign = -0.4),
        (t.scale = -0.01),
        (t.isHitHero = !1),
        (t.disapear_time = 0),
        t
    );
}
o.default = t;
