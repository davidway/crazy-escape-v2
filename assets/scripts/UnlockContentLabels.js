var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = {
    "passive_split+fog": "解锁：分裂被动规则 · 雾夜 modifier",
    branch_awakening: "解锁：双进化分支觉醒（需对应武器）",
    "summon_cdr+red_hint": "解锁：召唤击杀缩 CD 被动 · 红装可追提示",
    orbit_compact_passive: "解锁：环绕「少而精」被动",
    boss_focus_passive: "解锁：Boss 专精被动",
    low_hp_burst: "解锁：低血爆发被动",
    elite_counter_passive: "解锁：精英词缀对抗被动",
    fog_vision_passive: "解锁：雾夜/视野相关被动"
};
(o.UNLOCK_LABELS = n),
    (o.getUnlockLabel = function (t) {
        return n[t] || null;
    }),
    (o.getUnlockPreview = function (t, e) {
        var o = n[t];
        return o ? (e ? o.replace("解锁：", "已解锁：") : "通关解锁：" + o.replace("解锁：", "")) : "";
    });
