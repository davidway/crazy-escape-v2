var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("ChapterModifierRegistry"),
    i = t("ValueTypes"),
    r = t("GameEnums");
/**
 * Injects milestone modifiers into the existing fixed-event timeline.
 * Does not replace RoundConf spawn logic.
 */
(o.scheduleForChapter = function (t, e) {
    if (!t || !e || !e.chapterVo) return;
    var o = e.chapterVo.type;
    if (o !== r.Map_Group.NORMAL && o !== r.Map_Group.HELL) return;
    var a = n.getEligible(t);
    if (!a.length) return;
    for (var s = 0; s < a.length; s++) {
        var l = a[s],
            c = Math.max(5, l.triggerAt || 50);
        e.registerFixedEvent({
            time: c,
            type: i.FixedType.MODIFIER,
            index: 0,
            value: l.zoomRatio || 1.3,
            modifierId: l.id,
            title: l.title,
            badge: l.badge
        });
    }
}),
    (o.getEligible = function (t) {
        return n.getEligible(t);
    });
