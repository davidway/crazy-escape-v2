var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("EquipController"),
    i = t("EquipType"),
    r = t("HeroController"),
    a = t("GameEnums"),
    s = t("HurtType"),
    L = t("LegendEnchantLevels"),
    l = {
        1: {
            id: "thousand_blades",
            name: "千刃血刀",
            summary: "主技能暴击额外飞刀",
            evolve_bias: 2012,
            skill_ids: [12, 1012, 2012],
            extra_dmg: 0.4,
            cd: 0.3
        },
        2: {
            id: "rift_slash",
            name: "裂空之刃",
            summary: "近战击杀回血 · 受击后近战爆发",
            evolve_bias: 1009,
            skill_ids: [9, 1009, 2009],
            heal: 0.01,
            heal_cd: 0.5,
            buff_dmg: 0.2,
            buff_dur: 2
        },
        8: {
            id: "pierce",
            name: "贯穿金弩",
            summary: "精英/Boss 额外伤害 · 穿透+1",
            evolve_bias: 1010,
            skill_ids: [10, 1010, 2010],
            elite_boss: 0.2,
            pierce_bonus: 1
        },
        14: {
            id: "echo_boomerang",
            name: "回响旋风",
            summary: "同目标叠伤，上限 40%",
            evolve_bias: 2016,
            skill_ids: [16, 1016, 2016],
            echo_stack: 0.08,
            echo_cap: 0.4
        }
    },
    c = {bladeCd: 0, healCd: 0, meleeBuffUntil: 0};
function g(t) {
    if (!t) return null;
    var e = l[t.id];
    if (!e) return null;
    var o = {},
        n,
        i = L.getTier(e.id, t.legendEnchant || 0);
    for (n in e) o[n] = e[n];
    if (i) for (n in i) o[n] = i[n];
    return o;
}
function u() {
    var t = n.EquipController.inst.getWeapon();
    return t && t.quality == i.EquipQualityType.RED ? g(t) : null;
}
function p(t, e) {
    return !!t && -1 < t.skill_ids.indexOf(e);
}
(o.LEGENDS = l),
    (o.getActiveLegend = u),
    (o.getLegendForEquip = function (t, e) {
        return t && e == i.EquipQualityType.RED ? l[t] || null : null;
    }),
    (o.getScaledLegendForEquip = function (t) {
        return t && t.quality == i.EquipQualityType.RED ? g(t) : null;
    }),
    (o.getEvolveBiasId = function () {
        var t = u();
        return t ? t.evolve_bias : 0;
    }),
    (o.modifyHurt = function (t, e, o, n) {
        var i = u();
        if (!i || !e || !t) return t;
        var r = e.skill_id;
        if (i.id == "pierce" && p(i, r) && o && (o.type == a.MonsterType.ELITE || o.type == a.MonsterType.BOSS))
            t = {type: t.type, value: Math.floor(t.value * (1 + i.elite_boss))};
        if (
            i.id == "rift_slash" &&
            p(i, r) &&
            0 < c.meleeBuffUntil &&
            Date.now() < c.meleeBuffUntil
        )
            t = {type: t.type, value: Math.floor(t.value * (1 + i.buff_dmg))};
        if (i.id == "echo_boomerang" && p(i, r) && n) {
            n._legendEcho = (n._legendEcho || 0) + 1;
            var s = Math.min(i.echo_cap, (n._legendEcho - 1) * i.echo_stack);
            0 < s && (t = {type: t.type, value: Math.floor(t.value * (1 + s))});
        }
        return t;
    }),
    (o.afterHurt = function (t, e, o) {
        var n = u();
        if (!n || !e || !t || !o || o.isDie) return;
        if (n.id != "thousand_blades" || !p(n, e.skill_id) || t.type != s.HurtType.Crit) return;
        var i = Date.now();
        if (i < c.bladeCd) return;
        c.bladeCd = i + 1e3 * n.cd;
        var r = Math.floor(t.value * n.extra_dmg);
        0 < r && o.onLostHp({type: s.HurtType.Normal, value: r}, e);
    }),
    (o.onMonsterKilled = function (t, e) {
        var o = u();
        if (!o || o.id != "rift_slash" || !e || !p(o, e.skill_id)) return;
        var n = Date.now();
        if (n < c.healCd) return;
        c.healCd = n + 1e3 * o.heal_cd;
        r.HeroController.addHpRate(o.heal);
    }),
    (o.onHeroHurt = function () {
        var t = u();
        t && t.id == "rift_slash" && (c.meleeBuffUntil = Date.now() + 1e3 * t.buff_dur);
    }),
    (o.getPierceBonus = function () {
        var t = u();
        return t && t.id == "pierce" ? t.pierce_bonus : 0;
    }),
    (o.clearCombatState = function () {
        (c.bladeCd = 0), (c.healCd = 0), (c.meleeBuffUntil = 0);
    });
