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
    c = t("CCSkeleton"),
    u = t("ResMgr"),
    p = t("EquipController"),
    h = t("HeroController"),
    d = t("ConfData"),
    f = t("GameSetting"),
    y = t("Flash"),
    g = t("GameEnums"),
    m = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = cc.Component),
        i(_, l),
        (_.prototype.onLoad = function () {
            (this.flashComp = this.body.node.addComponent(y.default)),
                f.GameSetting.inst.isDebug &&
                    ((this.ctx = this.node.addComponent(cc.Graphics)),
                    (this.ctx.lineWidth = 6),
                    (this.ctx.strokeColor = cc.Color.RED),
                    this.drawCircle());
        }),
        (_.prototype.setSkin = function (o) {
            var t = this;
            this.scheduleOnce(function () {
                return a(t, void 0, void 0, function () {
                    var e;
                    return s(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (
                                    (this.idle_atk_count = 0),
                                    (this.walk_atk_count = 0),
                                    (this.state = 0),
                                    (this.isAttack = !1),
                                    (e = d.default.inst.playerSkinConf.getPlayerSkinVoById(o)),
                                    [4, this.body.setSource(e.url, "actors")]
                                );
                            case 1:
                                return (
                                    t.sent(),
                                    this.body.setSkin(e.skin_name),
                                    this.body.setAnimation({
                                        act: g.HeroActs.IDLE,
                                        loop: !0,
                                        timeScale: m.default.inst.timeScale
                                    }),
                                    (this.bodyScale = e.scale),
                                    (this.body.node.scaleY = this.bodyScale),
                                    (this.isReady = !0),
                                    this.setDir(1),
                                    [2]
                                );
                        }
                    });
                });
            });
        }),
        (_.prototype.setWeapon = function () {
            return a(this, void 0, void 0, function () {
                var e, o, n;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = this.body.spine) &&
                                    !this.weapon &&
                                    ((e = e.attachUtil).generateAllAttachedNodes(),
                                    (e = e.getAttachedNodes("youshou4")),
                                    (e = e[0]) &&
                                        (((o = new cc.Node("weapon")).parent = e),
                                        (o.position = cc.v3(-6, -13)),
                                        (o.anchorX = 0),
                                        (o.anchorY = 0),
                                        (o.scale = 0.35),
                                        (o.angle = 45),
                                        (this.weapon = o.addComponent(cc.Sprite)))),
                                this.weapon
                                    ? (o = p.EquipController.inst.getWeapon())
                                        ? ((n = d.default.inst.equipConf.getEquipQualityVo(o.id, o.quality)),
                                          [4, u.default.inst.getAsset("equips/" + n.icon, cc.Texture2D)])
                                        : [3, 2]
                                    : [3, 3]
                            );
                        case 1:
                            return (n = t.sent()), (this.weapon.spriteFrame = new cc.SpriteFrame(n)), [3, 3];
                        case 2:
                            (this.weapon.spriteFrame = null), (t.label = 3);
                        case 3:
                            return [2];
                    }
                });
            });
        }),
        (_.prototype.drawCircle = function () {
            var t = h.HeroController.getHeroRadius();
            this.ctx &&
                (this.ctx.clear(), this.ctx.circle(0, 30, t), (this.ctx.fillColor = cc.Color.RED), this.ctx.fill());
        }),
        (_.prototype.setDir = function (t) {
            this.body.node.scaleX = t * this.bodyScale;
        }),
        (_.prototype.onMove = function () {
            this.isReady &&
                ((this.state = 1),
                this.isAttack ||
                    this.body.setAnimation({act: g.HeroActs.WALK, loop: !0, timeScale: m.default.inst.timeScale}));
        }),
        (_.prototype.onIdle = function () {
            this.isReady &&
                ((this.state = 2),
                this.isAttack ||
                    this.body.setAnimation({act: g.HeroActs.IDLE, loop: !0, timeScale: m.default.inst.timeScale}));
        }),
        (_.prototype.onAttack = function (t) {
            var e,
                o = this;
            void 0 === t && (t = 1),
                this.isReady &&
                    !this.isAttack &&
                    ((this.isAttack = !0),
                    (t = this.body.getAnimation()),
                    (e = g.HeroActs.IDLE),
                    t == g.HeroActs.IDLE
                        ? ((e = 2 <= this.idle_atk_count ? g.HeroActs.ATTACK3 : g.HeroActs.ATTACK2),
                          (this.idle_atk_count += 1))
                        : ((e = 2 <= this.walk_atk_count ? g.HeroActs.ATTACK4 : g.HeroActs.ATTACK),
                          (this.walk_atk_count += 1)),
                    this.body.setAnimation({
                        act: e,
                        loop: !1,
                        timeScale: 1.2 * m.default.inst.timeScale,
                        complete: function () {
                            (o.isAttack = !1),
                                e == g.HeroActs.ATTACK3
                                    ? (o.idle_atk_count = 0)
                                    : e == g.HeroActs.ATTACK4 && (o.walk_atk_count = 0),
                                o.body.setAnimation({
                                    act: 1 == o.state ? g.HeroActs.WALK : g.HeroActs.IDLE,
                                    loop: !0,
                                    timeScale: m.default.inst.timeScale
                                });
                        }
                    }));
        }),
        (_.prototype.onHurt = function () {
            this.flash();
        }),
        (_.prototype.onDie = function () {
            this.isReady &&
                ((this.isAttack = !1),
                this.body.setAnimation({act: g.HeroActs.DIE, loop: !1, timeScale: m.default.inst.timeScale}));
        }),
        (_.prototype.flash = function () {
            this.flashComp.play();
        }),
        r([e(c.default)], _.prototype, "body", void 0),
        r([t], _));
function _() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.body = null),
        (t.isReady = !1),
        (t.flashComp = null),
        (t.ctx = null),
        (t.bodyScale = 1),
        (t.isAttack = !1),
        (t.idle_atk_count = 0),
        (t.walk_atk_count = 0),
        (t.weapon = null),
        (t.state = 0),
        t
    );
}
o.default = t;
