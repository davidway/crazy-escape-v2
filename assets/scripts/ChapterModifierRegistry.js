var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
/**
 * Milestone modifiers: unlock at chapter N, appear in N+ main runs.
 * Aligns with wayfinder ch 6/8/10/12/15/20/25/30 table (modifier rows only).
 * Passives stay in UnlockContentLabels / SkillDraft — not here.
 */
var n = [
    {
        id: "fog",
        unlockChapter: 6,
        title: "雾夜来袭 — 视野降低",
        badge: "雾",
        /** zoomRatio > 1 = zoom in = smaller FOV */
        zoomRatio: 1.32,
        /** seconds into round (timeline event) */
        triggerAt: 50
    }
];
(o.MODIFIERS = n),
    (o.getEligible = function (t) {
        for (var e = [], o = 0; o < n.length; o++) n[o].unlockChapter <= t && e.push(n[o]);
        return e;
    }),
    (o.getById = function (t) {
        for (var e = 0; e < n.length; e++) if (n[e].id === t) return n[e];
        return null;
    });
