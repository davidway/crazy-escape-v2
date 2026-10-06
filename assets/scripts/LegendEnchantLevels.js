var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
/**
 * Red legend parameter tiers 0–3 (base + 3 enchant levels).
 * Enchant stone raises legendEnchant 1→3; never changes legend_id.
 */
var n = {
    thousand_blades: {
        max: 3,
        stone: [1, 2, 3],
        levels: [
            {extra_dmg: 0.4, cd: 0.3},
            {extra_dmg: 0.46, cd: 0.3},
            {extra_dmg: 0.52, cd: 0.28},
            {extra_dmg: 0.58, cd: 0.26}
        ]
    },
    rift_slash: {
        max: 3,
        stone: [1, 2, 3],
        levels: [
            {heal: 0.01, heal_cd: 0.5, buff_dmg: 0.2, buff_dur: 2},
            {heal: 0.012, heal_cd: 0.48, buff_dmg: 0.23, buff_dur: 2},
            {heal: 0.014, heal_cd: 0.45, buff_dmg: 0.26, buff_dur: 2.2},
            {heal: 0.016, heal_cd: 0.4, buff_dmg: 0.3, buff_dur: 2.5}
        ]
    },
    pierce: {
        max: 3,
        stone: [1, 2, 3],
        levels: [
            {elite_boss: 0.2, pierce_bonus: 1},
            {elite_boss: 0.23, pierce_bonus: 1},
            {elite_boss: 0.26, pierce_bonus: 1},
            {elite_boss: 0.3, pierce_bonus: 2}
        ]
    },
    echo_boomerang: {
        max: 3,
        stone: [1, 2, 3],
        levels: [
            {echo_stack: 0.08, echo_cap: 0.4},
            {echo_stack: 0.09, echo_cap: 0.46},
            {echo_stack: 0.1, echo_cap: 0.52},
            {echo_stack: 0.11, echo_cap: 0.58}
        ]
    }
};
(o.LEGEND_ENCHANT = n),
    (o.getTier = function (t, e) {
        var o = n[t];
        if (!o) return null;
        var i = Math.max(0, Math.min(o.max, e || 0));
        return o.levels[i] || o.levels[0];
    }),
    (o.getStoneCost = function (t, e) {
        var o = n[t];
        if (!o) return 0;
        var i = e || 0;
        return i >= o.max ? 0 : o.stone[i] || 1;
    }),
    (o.getMax = function (t) {
        var e = n[t];
        return e ? e.max : 0;
    });
