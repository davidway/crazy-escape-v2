var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var r = t("ConfData"),
    a = t("EquipController"),
    D = t("GameDataController"),
    s = t("GameEnums"),
    l = t("GameMgr"),
    c = t("HeroController"),
    u = t("MathUtil"),
    p = t("SkinAttrController"),
    F = t("DualEvolveRegistry"),
    L = t("LegendController"),
    h = {
        BASE: 100,
        EVOLVE: 140,
        WEAPON_TAG: 1.8,
        SYNERGY: 1.3,
        ORPHAN_PASSIVE: 0.5,
        MAXED: 0.15,
        NEW_ACTIVE_EARLY: 1.25
    };
function d(t, e) {
    for (var o = 0; o < e.length; o++) if (e[o].id == t.id && e[o].level == t.level) return !0;
    return !1;
}
function f(t, e) {
    var o = r.default.inst.playerSkillConf.getSkillInfoVo(t.id);
    return !!o && 1 != o.isUltimate && !!(e = e.get(t.id)) && e < t.level;
}
function y(t) {
    return (t = r.default.inst.playerSkillConf.getSkillInfoVo(t)) && t.type == s.SkillGroup.AUXILIARY_SKILL;
}
function g(t) {
    return (t = r.default.inst.playerSkillConf.getSkillInfoVo(t)) && t.type == s.SkillGroup.ACTIVE_SKILL;
}
function E(t) {
    return r.default.inst.playerSkillConf.isUltimateSkill(t);
}
function m() {
    var t = a.EquipController.inst.getMainSkillId(),
        t = r.default.inst.playerSkillConf.getSkillInfoVo(t);
    return t && t.weapon ? t.weapon : 0;
}
function _(t, e) {
    var o = r.default.inst.playerSkillConf.getSkillInfoVo(t);
    if (!o || !o.relation) return !1;
    for (var n = 0; n < o.relation.length; n++) if (-1 < e.indexOf(o.relation[n])) return !0;
    return !1;
}
function v(t, e, o) {
    var n = r.default.inst.playerSkillConf.getSkillInfoVo(t.id);
    if (!n) return 0;
    if (E(t.id)) {
        var i = h.EVOLVE,
            r0 = F.getBaseSkillId(t.id),
            bias = L.getEvolveBiasId();
        return (
            r0 && a.EquipController.inst.getMainSkillId() == r0 && (i *= 2),
            bias && t.id == bias && (i *= 2),
            i
        );
    }
    var i = h.BASE,
        x = m();
    if (
        (0 < x &&
            (g(t.id) && n.weapon == x
                ? (i *= h.WEAPON_TAG)
                : y(t.id) &&
                  n.relation &&
                  n.relation.some(function (t) {
                      t = r.default.inst.playerSkillConf.getSkillInfoVo(t);
                      return t && t.weapon == x;
                  }) &&
                  (i *= h.WEAPON_TAG)),
        _(t.id, e) && (i *= h.SYNERGY),
        y(t.id) &&
            n.relation &&
            !n.relation.some(function (t) {
                return -1 < e.indexOf(t);
            }) &&
            (i *= h.ORPHAN_PASSIVE),
        (x = o.skillLevels.get(t.id)) && 5 <= x && (i *= h.MAXED),
        o.isEarlyGame && g(t.id) && !o.heldIds.includes(t.id) && (i *= h.NEW_ACTIVE_EARLY),
        0 < n.weapon)
    ) {
        var z = m();
        if (0 < z && n.weapon != z && !o.heldIds.includes(t.id)) return 0;
    }
    return (i *= 1 + p.default.inst.getAttr("appear", t.id)), i;
}
function b(t) {
    for (var e = 0, o = 0; o < t.length; o++) e += t[o].weight;
    if (e <= 0) return null;
    for (var n = u.default.randomRangeInt(0, Math.floor(e)), i = 0, a = 0; a < t.length; a++)
        if (n <= (i += t[a].weight)) return t[a].candidate;
    return t[t.length - 1].candidate;
}
function w() {
    for (var t = new Map(), e = [], o = 0, n = c.HeroController.getHeroSkills(); o < n.length; o++)
        e.push(n[o].id), t.set(n[o].id, n[o].level);
    return {heldIds: e, skillLevels: t};
}
(o.pickThree = function (t) {
    var e = w(),
        o = e.heldIds,
        n = e.skillLevels,
        i = {
            heldIds: o,
            skillLevels: n,
            isEarlyGame: (D.default.inst.getValue("level") || 1) < 10 || l.default.inst.roundTime < 300
        },
        a = t.slice(),
        s = [],
        u = !1;
    if (2 <= l.default.inst.skill_draft_pity_count)
        for (var p = 0; p < a.length; p++)
            if (f(a[p], n) && !d(a[p], s)) {
                s.push(a[p]);
                break;
            }
    for (p = 0; p < 12 && s.length < 3 && 0 < a.length; p++) {
        for (var m = [], _ = 0; _ < a.length; _++) {
            if (d(a[_], s)) continue;
            var C = E(a[_].id);
            if (C && u) continue;
            var k = v(a[_], o, i);
            0 < k && m.push({candidate: a[_], weight: k});
        }
        if (!m.length) break;
        var S = b(m);
        if (!S) break;
        s.push(S), E(S.id) && (u = !0);
    }
    return s.slice(0, 3);
}),
    (o.onDraftResolved = function (t) {
        if (t && t.length) {
            var e = w().skillLevels;
            t.some(function (t) {
                return f(t, e);
            })
                ? (l.default.inst.skill_draft_pity_count = 0)
                : (l.default.inst.skill_draft_pity_count += 1);
        }
    }),
    (o.isOwnedUpgradeable = f),
    (o.WEIGHTS = h);
