var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
/**
 * UI Batch3 — 天赋树壳 + Gene 提示（与大厅/装备同一套 Arcade tokens）
 */
var n = t("UiStyle"),
    i = t("UiTokens"),
    a = t("EvolveController"),
    s = t("UserDataController");
function c(t, e) {
    if (!t) return null;
    var o = t.getChildByName(e);
    return o || (((o = new cc.Node(e)).parent = t), o);
}
function u(t) {
    return i.hexToColor(t);
}
function p(t, e, o) {
    if (!t) return;
    void 0 === e && (e = i.Color.bgPanel);
    void 0 === o && (o = i.Color.border);
    var r = t.getComponent(cc.Graphics) || t.addComponent(cc.Graphics),
        a = t.width || 100,
        s = t.height || 100;
    r.clear(),
        (r.fillColor = u(e)),
        r.roundRect(-a / 2, -s / 2, a, s, i.Radius.sm),
        r.fill(),
        (r.strokeColor = u(o)),
        (r.lineWidth = 2),
        r.roundRect(-a / 2, -s / 2, a, s, i.Radius.sm),
        r.stroke();
}
function h(t) {
    if (!t || !t.data) return {border: i.Color.border, unlocked: !1, available: !1};
    var e = 1 == t.data.group ? a.default.inst.getNormalid() : a.default.inst.getSpecialid(),
        o = t.data.id < e,
        n = t.data.id == e,
        r = s.default.inst.level >= t.data.level,
        l = !1;
    if (n && r) {
        if (1 == t.data.group) l = s.default.inst.gold >= t.data.cost;
        else {
            var c = a.default.inst.getNormalid() > t.data.need;
            l = c && s.default.inst.gene >= t.data.cost;
        }
    }
    return {
        border: o ? i.Color.cyan : l ? i.Color.gold : i.Color.border,
        unlocked: o,
        available: l
    };
}
(o.applyEvolvePage = function (t) {
    if (!t || !t.node) return;
    var e = t.node,
        o = c(e, "ArcadeTalentTitle");
    (o.zIndex = 80),
        (o.y = 340),
        ((o.getComponent(cc.Label) || o.addComponent(cc.Label)).string = "天赋"),
        (o.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        n.applyLabelStyle(o, "h1Gold");
    var r = c(e, "ArcadeTalentHint");
    (r.zIndex = 80),
        (r.y = 300),
        ((r.getComponent(cc.Label) || r.addComponent(cc.Label)).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        (r.getComponent(cc.Label).string =
            "左路金币成长 · 右路 Gene 特化 — 余额 G" +
            (s.default.inst.gold | 0) +
            " / Gene " +
            (s.default.inst.gene | 0)),
        n.applyLabelStyle(r, "caption");
    t.list && t.list.node && (t.list.node.opacity = 255);
}),
    (o.applyEvolveItem = function (t) {
        if (!t || !t.node || !t.data) return;
        var e = h(t),
            o = c(t.node, "ArcadeTalentRing");
        (o.width = (t.node.width || 120) + 10),
            (o.height = (t.node.height || 120) + 10),
            (o.zIndex = -1),
            (o.x = 0),
            (o.y = 0),
            p(o, i.Color.bgPanel, e.border);
        o.opacity = e.unlocked || e.available ? 255 : 140;
        if (t.upIcon && e.available) t.upIcon.opacity = 255;
    }),
    (o.applyEvolveTips = function (t) {
        if (!t || !t.node || !t.data) return;
        p(t.node, i.Color.bgPanelRaised, 2 == t.data.group ? i.Color.cyan : i.Color.borderGold);
        t.nameLab && n.applyLabelStyle(t.nameLab.node, "h2");
        t.detailLab && n.applyLabelStyle(t.detailLab.node, "body");
        t.descLab && n.applyLabelStyle(t.descLab.node, "caption");
        t.valueLab &&
            (n.applyLabelStyle(t.valueLab.node, "hud"),
            (t.valueLab.node.color = u(2 == t.data.group ? i.Color.cyan : i.Color.gold)));
        if (t.btnUnLock && t.btnUnLock.active) {
            n.paintCta(t.btnUnLock);
            t.btnLab && n.applyLabelStyle(t.btnLab.node, "cta");
        }
    }),
    (o.applyGeneLack = function (t) {
        if (!t || !t.node) return;
        t.panel && p(t.panel, i.Color.bgPanelRaised, i.Color.cyan);
        var e = c(t.node, "ArcadeGeneTitle");
        (e.zIndex = 20),
            (e.y = 80),
            ((e.getComponent(cc.Label) || e.addComponent(cc.Label)).string = "Gene 不足"),
            (e.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
            n.applyLabelStyle(e, "h2");
    });
