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
    c,
    u = t("App"),
    p = t("ArrayUtil"),
    h = t("MathUtil"),
    d = t("GameConst"),
    f = t("DropController"),
    y = t("GameController"),
    g = t("HeroController"),
    m = t("SkinAttrController"),
    _ = t("GameSetting"),
    v = t("BulletType"),
    b = t("HurtType"),
    w = t("GameMgr"),
    C = t("GridMgr"),
    k = t("MoveSys"),
    E = t("Box"),
    L = t("LegendController"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (l = cc.Component),
        i(S, l),
        (c = S),
        Object.defineProperty(S.prototype, "hitNum", {
            set: function (t) {
                this.bulletType == v.BulletType.Bolt && (t += L.getPierceBonus()), (this._hitNum = t);
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(S.prototype, "skill", {
            get: function () {
                return this._skill;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(S.prototype, "hurtValue", {
            get: function () {
                return this._hurtValue;
            },
            enumerable: !1,
            configurable: !0
        }),
        (S.prototype.onLoad = function () {
            _.GameSetting.inst.isDebug &&
                ((this.ctx = this.node.addComponent(cc.Graphics)),
                (this.ctx.lineWidth = 6),
                (this.ctx.strokeColor = cc.Color.BLUE));
        }),
        (S.prototype.setHurt = function (t) {
            this._hurtValue = t;
        }),
        (S.prototype.isPierceSkill = function () {
            return (
                this.bulletType == v.BulletType.Darts ||
                this.bulletType == v.BulletType.Rocket ||
                this.bulletType == v.BulletType.Bolt ||
                this.bulletType == v.BulletType.Axe
            );
        }),
        (S.prototype.calcCircleHurt = function (o, n, t) {
            var e,
                i = this;
            void 0 === t && (t = !1),
                (this.causeDamage = 0),
                (this.isHurtFrame() || t) &&
                    (_.GameSetting.inst.isDebug && this.drawCircle(o, n),
                    (this.monsters.length = 0),
                    (this.hitPos.length = 0),
                    this.checkBoxInCircle(o, n),
                    (e = function (t) {
                        var e = t.getCenterPos();
                        h.default.pointInCircle(e, o, n + t.radius) &&
                            (t.monster.onLostHp(i.calcValue(), i.skill.getData().confVo),
                            i.hitPos.push(t.getCenterPos()),
                            t.monster && !t.monster.isDie && i.monsters.push(t.monster),
                            i.isPierceSkill() && --i._hitNum);
                    }),
                    (t = y.GameController.inst.getFreeMoveMonsters()),
                    this.checkMonster(t, e),
                    this._hitNum <= 0 ||
                        ((this.monsters.length = 0),
                        (t = y.GameController.inst.getAgility()),
                        this.checkMonster(t, e),
                        this._hitNum <= 0 || ((e = C.GridMgr.getGrid(o)), this.hurtMobsByRadius(e, n))));
        }),
        (S.prototype.calcValue = function () {
            this.playHitSound();
            var t = g.HeroController.getAtrr("crit_rate"),
                e = g.HeroController.getAtrr("crit_hurt_rate"),
                o = Math.random(),
                n = this._hurtValue,
                i = b.HurtType.Normal,
                r = this._skill ? this._skill.getData() : null;
            r && ((t += m.default.inst.getAttr("crit_rate", r.id)), (e += m.default.inst.getAttr("crit_value", r.id))),
                o <= t && ((n = Math.floor(this._hurtValue * e)), (i = b.HurtType.Crit));
            e = g.HeroController.getAtrr("hurt_rate");
            0 < e && (n = Math.floor(n * (1 + e)));
            var a = {type: i, value: n},
                s = r && r.confVo ? r.confVo : null;
            return (
                (a = L.modifyHurt(a, s, null, this)),
                (this.causeDamage += a.value),
                this._skill && w.default.inst.addHurt(this.bulletType, r.id, a.value),
                a
            );
        }),
        (S.prototype.playHitSound = function () {
            switch (this.bulletType) {
                case v.BulletType.Axe:
                    this.playSound("投掷斧头音效", 1);
                    break;
                case v.BulletType.LightDragon:
                    this.playSound("恐龙激光发射音效");
                    break;
                case v.BulletType.Lightning:
                    this.playSound("落雷击中敌人的音效");
                    break;
                case v.BulletType.ChainLightning:
                    this._isMax || this.playSound("连锁闪电击中敌人音效");
                    break;
                case v.BulletType.Darts:
                case v.BulletType.Fireball:
                case v.BulletType.Fuel_Bottle:
                case v.BulletType.Boomerang:
                case v.BulletType.Spell:
                case v.BulletType.Bone:
                case v.BulletType.Forcefield:
                case v.BulletType.Greatsword:
                case v.BulletType.Bolt:
                case v.BulletType.Gyro:
                    this.playSound("怪物受击音效0"), (c.idx = (c.idx + 1) % 2);
            }
        }),
        (S.prototype.hurtMobsByRadius = function (o, n) {
            var t,
                i = this;
            if (this.bulletType != v.BulletType.Darts) {
                var e = Math.ceil(n / C.GridMgr.gridSize),
                    r = o.x - e,
                    a = o.y - e;
                e *= 2;
                for (var s = 1; s < e - 1; s += 2) {
                    for (
                        var l = 1;
                        l < e - 1 &&
                        ((function (t, e) {
                            t = C.GridMgr.getGridXY(t, e);
                            i.canHurt(null === (e = t.comp) || void 0 === e ? void 0 : e.monster) &&
                                h.default.pointInCircle(t.pos, o.pos, n) &&
                                (i.monsters.push(t.comp.monster),
                                i.hitPos.push(t.comp.getCenterPos()),
                                t.comp.monster.onLostHp(i.calcValue(), i.skill.getData().confVo),
                                i.isPierceSkill() && --i._hitNum);
                        })(r + s, a + l),
                        !(this._hitNum <= 0));
                        l += 2
                    );
                    if (this._hitNum <= 0) break;
                }
            } else
                this.canHurt(null === (t = o.comp) || void 0 === t ? void 0 : t.monster) &&
                    (o.comp.monster.onLostHp(this.calcValue(), this.skill.getData().confVo), --this._hitNum);
        }),
        (S.prototype.calcLineHurt = function (o, n) {
            var i = this;
            if (((this.causeDamage = 0), this.isHurtFrame())) {
                this.checkBox(function (t) {
                    cc.Intersection.lineRect(o, n, t.rect) && t.broken();
                }),
                    (this.monsters.length = 0);
                var t = function (t) {
                        var e = t.getCenterPos();
                        cc.Intersection.pointLineDistance(e, o, n, !0) <= t.radius &&
                            (i.monsters.push(t.monster),
                            t.monster.onLostHp(i.calcValue(), i.skill.getData().confVo),
                            i.isPierceSkill() && --i._hitNum);
                    },
                    e = y.GameController.inst.getFreeMoveMonsters();
                this.checkMonster(e, t);
                e = y.GameController.inst.getAgility();
                this.checkMonster(e, t);
                for (
                    var e = Math.abs(n.x - o.x),
                        t = Math.abs(n.y - o.y),
                        r = Math.ceil(Math.max(e, t) / C.GridMgr.gridSize),
                        a = 0;
                    a < r;
                    a++
                ) {
                    var s = o.lerp(n, a / r),
                        l = C.GridMgr.getGrid(s);
                    this.canHurt(null === (s = l.comp) || void 0 === s ? void 0 : s.monster) &&
                        (this.monsters.push(l.comp.monster),
                        l.comp.monster.onLostHp(this.calcValue(), this.skill.getData().confVo),
                        this.isPierceSkill() && --this._hitNum);
                }
            }
        }),
        (S.prototype.calcPolygonHurt = function (o) {
            var n = this;
            if (((this.causeDamage = 0), !this.isHurtFrame())) return !1;
            (this.monsters.length = 0),
                this.checkBox(function (t) {
                    cc.Intersection.rectPolygon(t.rect, o) && t.broken();
                }),
                (this.monsters.length = 0);
            function t(t) {
                var e = t.getCenterPos();
                cc.Intersection.polygonCircle(o, {position: e, radius: t.radius}) &&
                    (t.monster.onLostHp(n.calcValue(), n.skill.getData().confVo), n.monsters.push(t.monster));
            }
            var e = y.GameController.inst.getFreeMoveMonsters();
            this.checkMonster(e, t);
            e = y.GameController.inst.getAgility();
            this.checkMonster(e, t);
            for (
                var i = Number.MAX_SAFE_INTEGER,
                    r = Number.MIN_SAFE_INTEGER,
                    a = Number.MAX_SAFE_INTEGER,
                    s = Number.MIN_SAFE_INTEGER,
                    l = 0,
                    c = o;
                l < c.length;
                l++
            )
                var u = c[l], i = Math.min(i, u.x), r = Math.max(r, u.x), a = Math.min(a, u.y), s = Math.max(s, u.y);
            for (var p = C.GridMgr.getGrid(cc.v3(i, a)), h = C.GridMgr.getGrid(cc.v3(r, s)), d = p.x; d < h.x; d += 2)
                for (var f = p.y; f < h.y; f += 2)
                    !(function (t, e) {
                        t = C.GridMgr.getGridXY(t, e);
                        n.canHurt(null === (e = t.comp) || void 0 === e ? void 0 : e.monster) &&
                            cc.Intersection.pointInPolygon(t.pos, o) &&
                            (n.monsters.push(t.comp.monster),
                            t.comp.monster.onLostHp(n.calcValue(), n.skill.getData().confVo));
                    })(d, f);
            return !0;
        }),
        (S.prototype.calcInSightHurt = function (t) {
            t = k.MoveSys.getInSightList(t);
            if (t && 0 < t.length)
                for (var e = 0, o = t; e < o.length; e++) {
                    var n = o[e];
                    this.canHurt(n.monster) &&
                        (n.monster.onLostHp(this.calcValue(), this.skill.getData().confVo),
                        this.monsters.push(n.monster));
                }
        }),
        (S.prototype.calcAroundHurt = function (t, e) {
            if (((this.causeDamage = 0), this.isHurtFrame())) {
                _.GameSetting.inst.isDebug && this.drawCircle(t, e),
                    this.checkBoxInCircle(t, e),
                    (this.monsters.length = 0);
                for (var o = k.MoveSys.nearList, n = 0, i = o.length; n < i; n++) {
                    var r = o[n],
                        a = r.getCenterPos(),
                        s = r.monster;
                    if (!h.default.pointInCircle(a, t, e + r.radius)) break;
                    if (
                        (this.canHurt(s) &&
                            (s.onLostHp(this.calcValue(), this.skill.getData().confVo),
                            this.monsters.push(s),
                            this.isPierceSkill() && --this._hitNum),
                        this._hitNum <= 0)
                    )
                        break;
                }
            }
        }),
        (S.prototype.checkMonster = function (t, o) {
            var n = this;
            t &&
                t.forEach(function (t) {
                    var e = t.getMoveComp(),
                        t = e.monster;
                    n.canHurt(t) && 0 < n._hitNum && o(e);
                });
        }),
        (S.prototype.canHurt = function (t) {
            if (!t || t.isDie) return !1;
            if (this.monsters.includes(t)) return !1;
            var e = 0;
            return this._skill && this._skill.getData() && (e = this._skill.getData().confVo.skill_id), t.canBeHurt(e);
        }),
        (S.prototype.checkBoxInCircle = function (e, o) {
            this.checkBox(function (t) {
                h.default.pointInCircle(t.node.position, e, o + d.GameConst.Box_Radius) && t.broken();
            });
        }),
        (S.prototype.checkBox = function (t) {
            for (var e = p.default.clone(f.default.inst.getBoxs()), o = 0, n = e.length; o < n; o++)
                e[o].parent && t(e[o].getComponent(E.default));
        }),
        (S.prototype.isHurtFrame = function () {
            if (1 < this.hurt_interval) {
                if (((this.curr_interval -= +w.default.inst.timeScale), 0 < this.curr_interval)) return !1;
                this.curr_interval = this.hurt_interval;
            }
            return !0;
        }),
        (S.prototype.drawCircle = function (t, e) {
            this.ctx &&
                (this.ctx.clear(), this.ctx.circle(0, 0, e), (this.ctx.fillColor = cc.Color.BLUE), this.ctx.fill());
        }),
        (S.prototype.drawSector = function (t, e, o) {
            if (this.ctx) {
                for (
                    var n = function (t) {
                            var e = o * Math.cos(t),
                                t = o * Math.sin(t);
                            return cc.v3(e, t);
                        },
                        i = h.default.getRadian(t),
                        r = [n(i)],
                        a = Math.ceil((t - e) / 5),
                        s = 1;
                    s <= a;
                    s++
                ) {
                    var l = n((i = h.default.getRadian(t - 5 * s)));
                    r.push(l);
                }
                for (n((i = h.default.getRadian(e))), this.ctx.clear(), this.ctx.moveTo(0, 0), s = 0; s < r.length; s++)
                    this.ctx.lineTo(r[s].x, r[s].y);
                this.ctx.lineTo(0, 0), this.ctx.stroke();
            }
        }),
        (S.prototype.playSound = function (o, n) {
            return (
                void 0 === n && (n = 1),
                a(this, void 0, void 0, function () {
                    var e;
                    return s(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (
                                    (e = c.soundMap.get(o) || 0),
                                    0 == n || e < n
                                        ? ((e += 1), c.soundMap.set(o, e), [4, u.app.sound.playEffect(o)])
                                        : [3, 2]
                                );
                            case 1:
                                t.sent(), (e = c.soundMap.get(o)), --e, c.soundMap.set(o, e), (t.label = 2);
                            case 2:
                                return [2];
                        }
                    });
                })
            );
        }),
        (S.idx = 0),
        (S.soundMap = new Map()),
        (c = r([t], S)));
function S() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t._skill = null),
        (t._hurtValue = 0),
        (t._isMax = !1),
        (t.curr_interval = 0),
        (t.hurt_interval = 0),
        (t._hitNum = 1),
        (t.monsters = []),
        (t.hitPos = []),
        (t.ctx = null),
        (t.causeDamage = 0),
        t
    );
}
o.default = t;
