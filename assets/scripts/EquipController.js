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
Object.defineProperty(o, "__esModule", {value: !0}), (o.EquipController = void 0);
var s,
    c = t("App"),
    e = t("Singleton"),
    u = t("EventTypes"),
    p = t("ConfData"),
    h = t("AssignmentConf"),
    d = t("IUserEquipVo"),
    f = t("EquipType"),
    l = t("SkillEnum"),
    y = t("EffectMgr"),
    g = t("AssignmentController"),
    m = t("DrawingController"),
    _ = t("TaskController"),
    v = t("UserDataController"),
    EC = t("EnchantController"),
    i =
        ((s = e.Singleton()),
        i(b, s),
        (b.prototype.initEquip = function () {
            this.equips = c.app.local.getValue("equips");
            for (var t = 0, e = this.equips; t < e.length; t++) {
                var o,
                    n = e[t];
                EC.onQualityChanged(n),
                n.status == d.EquipStatus.ON &&
                    ((o = p.default.inst.equipConf.getEquipVo(n.id)),
                    this.heroEquips.set(o.type, n),
                    this.heroEquipList.push(n));
            }
            this.calcMerge(), console.log("[EquipController]-->[line:15]:角色装备", this.equips);
        }),
        (b.prototype.getMainSkillId = function () {
            var t = l.HeroSkillType.Darts,
                e = this.getHeroEquipByType(f.EquipType.WEAPONS);
            return !e || ((e = p.default.inst.equipConf.getEquipVo(e.id)) && e.skill_id && (t = e.skill_id)), t;
        }),
        (b.prototype.getWeapon = function () {
            return this.getHeroEquipByType(f.EquipType.WEAPONS) || null;
        }),
        (b.prototype.getHeroEquipByType = function (t) {
            return this.heroEquips.get(t);
        }),
        (b.prototype.getHeroEquips = function () {
            return this.heroEquipList;
        }),
        (b.prototype.getEquips = function () {
            return this.equips;
        }),
        (b.prototype.addEquip = function (t, e, o) {
            void 0 === e && (e = f.EquipQualityType.GRAY), void 0 === o && (o = 1), console.log("添加装备:", t, e);
            var n = p.default.inst.equipConf.getEquipVo(t);
            if (n) {
                var i = {id: t, quality: e, level: o, status: 0, equipType: n.type, affixId: null, legendEnchant: 0};
                EC.onQualityChanged(i),
                    this.equips.push(i),
                    this.calcMerge(),
                    c.app.local.setValue("equips", this.equips),
                    c.app.event.emit(u.EventType.Home_Equip_Change_Page),
                    e == f.EquipQualityType.PURPLE && _.default.inst.addHonour("equips", 1);
            }
        }),
        (b.prototype.calcHeroEquipAttr = function () {
            for (
                var t = {
                        atk: 0,
                        hp: 0,
                        speed: 0,
                        pickUp: 0,
                        skillLv: 1,
                        atkRate: 0,
                        hpRate: 0,
                        expRate: 0,
                        skillUseRate: 0,
                        skillHurtRate: 0,
                        defenseRate: 0,
                        areaRate: 0,
                        durationRate: 0,
                        heroSpeedRate: 0,
                        angularRate: 0,
                        skillSpeedRate: 0,
                        pickupRate: 0,
                        goldRate: 0,
                        critRate: 0,
                        critHurtRate: 0,
                        add_hp_rate: 0,
                        hurt_rate: 0,
                        rebound_rate: 0,
                        dodge_rate: 0,
                        seckill_rate: 0
                    },
                    e = 0,
                    o = this.heroEquipList;
                e < o.length;
                e++
            ) {
                var n,
                    i = o[e],
                    r = p.default.inst.equipConf.getEquipQualityVo(i.id, i.quality);
                r &&
                    ((n = this.clacAttr(i.id, i.level)),
                    r.attr_type == f.EquipAttrType.ATTACK
                        ? (t.atk += n)
                        : r.attr_type == f.EquipAttrType.HP && (t.hp += n));
                for (var a = 1; a <= i.quality; a++) {
                    var s = p.default.inst.equipConf.getEquipQualityVo(i.id, a);
                    if (0 < s.effect)
                        switch (s.effect) {
                            case f.EquipEffectType.Attack_Rate:
                                t.atkRate += s.effect_value;
                                break;
                            case f.EquipEffectType.Hp_Rate:
                                t.hpRate += s.effect_value;
                                break;
                            case f.EquipEffectType.Defense_Rate:
                                t.defenseRate += s.effect_value;
                                break;
                            case f.EquipEffectType.Add_Hp_Rate:
                                t.add_hp_rate += s.effect_value;
                                break;
                            case f.EquipEffectType.Hurt_Rate:
                                t.hurt_rate += s.effect_value;
                                break;
                            case f.EquipEffectType.Rebound_Rate:
                                t.rebound_rate += s.effect_value;
                                break;
                            case f.EquipEffectType.Dodge_Rate:
                                t.dodge_rate += s.effect_value;
                                break;
                            case f.EquipEffectType.Speed_Rate:
                                t.heroSpeedRate += s.effect_value;
                                break;
                            case f.EquipEffectType.Seckill_Rate:
                                t.seckill_rate += s.effect_value;
                                break;
                            case f.EquipEffectType.Fire_Rate:
                                t.skillSpeedRate += s.effect_value;
                                break;
                            case f.EquipEffectType.Area_Rate:
                                t.areaRate += s.effect_value;
                        }
                }
            }
            return EC.applyAffixesToAttr(t, this.heroEquipList), console.log("装备属性", t), t;
        }),
        (b.prototype.clacAttr = function (t, e, o) {
            void 0 === o && (o = !1);
            for (
                var n = 0,
                    i = 1,
                    r = p.default.inst.equipConf.getEquipQualityVo(t, i),
                    a = r,
                    s = v.default.inst.skin,
                    l = p.default.inst.playerSkinConf.getPlayerSkinVoById(s),
                    c = 1;
                c <= e && (!(r.max_level < c) || (r = p.default.inst.equipConf.getEquipQualityVo(t, (i += 1))));
                c++
            )
                n += r.attr_add;
            (n = parseFloat(n.toFixed(3))), (s = 0);
            return (
                a.attr_type == f.EquipAttrType.ATTACK
                    ? (s = l.attack)
                    : a.attr_type == f.EquipAttrType.HP && (s = l.hp),
                o ? Math.floor(s * n * 10) : Math.ceil(s * n)
            );
        }),
        (b.prototype.showCalcHeroEquipAttr = function () {
            for (var t = {atk: 0, hp: 0}, e = 0, o = this.heroEquipList; e < o.length; e++) {
                var n = o[e],
                    i = p.default.inst.equipConf.getEquipQualityVo(n.id, n.quality);
                i &&
                    ((n = this.clacAttr(n.id, n.level, !0)),
                    i.attr_type == f.EquipAttrType.ATTACK
                        ? (t.atk += n)
                        : i.attr_type == f.EquipAttrType.HP && (t.hp += n));
            }
            return t;
        }),
        (b.prototype.putOnEquip = function (t) {
            var e, o, n, i;
            t &&
                1 != t.status &&
                ((e = p.default.inst.equipConf.getEquipVo(t.id)),
                (o = this.getHeroEquipByType(e.type)) && (o.status = 0),
                (t.status = 1),
                this.heroEquips.set(e.type, t),
                -1 == (o = this.heroEquipList.indexOf(o))
                    ? this.heroEquipList.push(t)
                    : this.heroEquipList.splice(o, 1, t),
                (o = this.getHeroEquips()),
                (i = n = 0),
                o.forEach(function (t) {
                    t.quality > f.EquipQualityType.GRAY && n++,
                        t.level > p.default.inst.assignmentConf.equip_grade && i++;
                }),
                g.default.inst.setProg(n, h.DayAssign.equip_use),
                g.default.inst.setProg(i, h.DayAssign.equip_grade),
                c.app.sound.playEffect("装备穿戴时音效"),
                c.app.local.setValue("equips", this.equips),
                c.app.event.emit(u.EventType.Put_On_Equip, t));
        }),
        (b.prototype.takeOffEquip = function (t) {
            var e;
            t &&
                0 != t.status &&
                ((t.status = 0),
                (e = p.default.inst.equipConf.getEquipVo(t.id)),
                this.heroEquips.delete(e.type),
                (e = this.heroEquipList.indexOf(t)),
                this.heroEquipList.splice(e, 1),
                c.app.local.setValue("equips", this.equips),
                c.app.event.emit(u.EventType.Take_Off_Equip, t));
        }),
        (b.prototype.mergeEquip = function (t, e) {
            if (t && e)
                if (t.quality != f.EquipQualityType.MAX - 1) {
                    for (var o = 0, n = e; o < n.length; o++)
                        if ((i = n[o]).status == d.EquipStatus.ON) return void y.default.inst.showTips("装备在身上");
                    for (var i, r = 0, a = e; r < a.length; r++) {
                        1 < (i = a[r]).level && this.levelDown(i);
                        var s = this.equips.indexOf(i);
                        this.equips.splice(s, 1);
                    }
                    (t.quality += 1),
                        EC.onQualityChanged(t),
                        t.quality == f.EquipQualityType.PURPLE && _.default.inst.addHonour("equips", 1),
                        this.calcMerge();
                    e = g.default.inst.equip_compose + 1;
                    g.default.inst.setProg(e, h.DayAssign.equip_compose);
                    var e = this.getHeroEquips(),
                        l = 0;
                    e.forEach(function (t) {
                        t.quality > f.EquipQualityType.GRAY && l++;
                    }),
                        g.default.inst.setProg(l, h.DayAssign.equip_use),
                        c.app.local.setValue("equips", this.equips),
                        c.app.event.emit(u.EventType.Merge_Equip, t);
                } else console.log("最高品质");
        }),
        (b.prototype.canMerge = function (t, e, o) {
            if (o == f.EquipQualityType.MAX - 1) return !1;
            var n = p.default.inst.equipConf.getEquipMergeConfVo(o + 1);
            if (1 == n.mat_type) {
                t = this.idMap.get(t + "_" + o) || 0;
                return n.mat_count < t;
            }
            o = e + "_" + o;
            return !!this.mergeMap.has(o) && this.mergeMap.get(o) > n.mat_count;
        }),
        (b.prototype.calcMerge = function () {
            var n = this;
            this.mergeMap.clear(),
                this.idMap.clear(),
                this.equips.forEach(function (t) {
                    var e = t.equipType + "_" + t.quality,
                        o = 0;
                    n.mergeMap.has(e) && (o = n.mergeMap.get(e)),
                        n.mergeMap.set(e, (o += 1)),
                        (e = t.id + "_" + t.quality),
                        (o = 0),
                        n.idMap.has(e) && (o = n.idMap.get(e)),
                        n.idMap.set(e, (o += 1));
                }),
                console.log("装备统计:", this.mergeMap, this.idMap);
        }),
        (b.prototype.levelUp = function (t, e, o) {
            if ((void 0 === e && (e = !0), void 0 === o && (o = !0), !t)) return !1;
            var n = p.default.inst.equipConf.getConsume(t.level + 1);
            if (!n) return console.log("[EquipController]-->[line:139]:最高级"), !1;
            if (!this.checkLvUp(t, o)) return console.log("[EquipController]-->[line:148]:条件不满足"), !1;
            _.default.inst.addDaily("equip_lv_up", 1),
                _.default.inst.addWeek("equip_lv_up", 1),
                c.app.event.emit(u.EventType.Home_Equip_Change_Page),
                m.DrawingController.inst.useDrawing(t.equipType, n.drawing_count),
                v.default.inst.useGold(n.gold),
                (t.level += 1),
                c.app.local.setValue("equips", this.equips),
                e && c.app.event.emit(u.EventType.Level_Up_Equip, t);
            var t = this.getHeroEquips(),
                i = 0;
            return (
                t.forEach(function (t) {
                    t.level > p.default.inst.assignmentConf.equip_grade && i++;
                }),
                g.default.inst.setProg(i, h.DayAssign.equip_grade),
                !0
            );
        }),
        (b.prototype.oneKeyLvUp = function (t) {
            if (!t) return !1;
            var e = p.default.inst.equipConf.getEquipQualityVo(t.id, t.quality);
            if (!this.checkLvUp(t)) return console.log("[EquipController]-->[line:148]:条件不满足"), !1;
            for (var o = t.level; o < e.max_level && this.levelUp(t, !0, !1); o++);
            return !0;
        }),
        (b.prototype.levelDown = function (t) {
            var e;
            1 != t.level &&
                ((e = p.default.inst.equipConf.getConsume(t.level)),
                m.DrawingController.inst.addDrawing(t.equipType, e.total_drawing),
                (t.level = 1),
                c.app.local.setValue("equips", this.equips),
                c.app.event.emit(u.EventType.Level_Up_Equip, t),
                v.default.inst.addGold(e.total_gold, !0));
        }),
        (b.prototype.qualityDown = function () {}),
        (b.prototype.checkLvUp = function (t, e) {
            if ((void 0 === e && (e = !0), t.level >= p.default.inst.equipConf.equipMaxLevel)) return !1;
            var o = v.default.inst.gold,
                n = p.default.inst.equipConf.getConsume(t.level + 1),
                i = m.DrawingController.inst.getDrawing(t.equipType),
                r = p.default.inst.equipConf.getEquipQualityVo(t.id, t.quality),
                a = n.gold,
                n = n.drawing_count;
            return !(
                r.max_level == t.level ||
                (o < a
                    ? (e && y.default.inst.showTips("升级金币不足"), 1)
                    : i < n && (e && y.default.inst.showTips("升级材料不足"), 1))
            );
        }),
        (b.prototype.checkQualityUp = function () {}),
        (b.prototype.getEquipIcon = function (o) {
            return r(this, void 0, void 0, function () {
                var e;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (e = null), this.iconSprs.has(o) ? [3, 2] : [4, this.loadIcon(o)];
                        case 1:
                            return (e = t.sent()), this.iconSprs.set(o, e), [3, 3];
                        case 2:
                            (e = this.iconSprs.get(o)), (t.label = 3);
                        case 3:
                            return [2, e];
                    }
                });
            });
        }),
        (b.prototype.loadIcon = function (t) {
            return new Promise(function (o) {
                cc.resources.load("equips/" + t, cc.SpriteFrame, function (t, e) {
                    o(e);
                });
            });
        }),
        b);
function b() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t.equips = null),
        (t.heroEquips = new Map()),
        (t.heroEquipList = []),
        (t.iconSprs = new Map()),
        (t.mergeMap = new Map()),
        (t.idMap = new Map()),
        t
    );
}
o.EquipController = i;
