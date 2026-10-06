var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("UiStyle"),
    i = t("UiTokens");
function a(t, e) {
    if (!t) return null;
    var o = t.getChildByName(e);
    return o || (((o = new cc.Node(e)).parent = t), o);
}
function s(t) {
    return i.hexToColor(t);
}
function c(t, e, o) {
    if (!t) return;
    void 0 === e && (e = i.Color.bgPanel);
    void 0 === o && (o = i.Color.borderGold);
    var r = t.getComponent(cc.Graphics) || t.addComponent(cc.Graphics),
        a = t.width || 200,
        c = t.height || 100;
    r.clear(),
        (r.fillColor = s(e)),
        r.roundRect(-a / 2, -c / 2, a, c, i.Radius.sm),
        r.fill(),
        (r.strokeColor = s(o)),
        (r.lineWidth = 3),
        r.roundRect(-a / 2, -c / 2, a, c, i.Radius.sm),
        r.stroke();
}
function u(t, e) {
    if (!t) return;
    var o = a(t, "ArcadeBtnLab");
    (o.y = 0),
        ((o.getComponent(cc.Label) || o.addComponent(cc.Label)).string = e),
        (o.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        n.applyLabelStyle(o, "cta");
}
(o.applySkillPick = function (t) {
    if (!t || !t.node) return;
    var e = t.node,
        o = a(e, "ArcadeDim");
    (o.zIndex = -1),
        (o.width = cc.winSize.width + 80),
        (o.height = cc.winSize.height + 80),
        (o.x = 0),
        (o.y = 0),
        n.ignoreHits(o);
    var r = o.getComponent(cc.Graphics) || o.addComponent(cc.Graphics);
    r.clear(),
        (r.fillColor = i.hexToColor(i.Color.bgBase, 200)),
        r.rect(-o.width / 2, -o.height / 2, o.width, o.height),
        r.fill();
    if (t.content) {
        var h = a(t.content, "ArcadePickTitle");
        (h.y = 280),
            (h.zIndex = 50),
            ((h.getComponent(cc.Label) || h.addComponent(cc.Label)).string = "选择强化"),
            (h.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
            n.applyLabelStyle(h, "h1Gold"),
            n.ignoreHits(h);
    }
    if (t.skills) {
        var d = t.skills.getComponent(cc.Layout);
        d &&
            ((d.type = cc.Layout.Type.VERTICAL),
            (d.resizeMode = cc.Layout.ResizeMode.CONTAINER),
            (d.spacingY = 12),
            (d.paddingTop = 8),
            (d.paddingBottom = 8)),
            (t.skills.y = 40);
        for (var f = 0, y = t.skills.children || []; f < y.length; f++) {
            var g = y[f];
            if (!g) continue;
            (g.width = Math.max(g.width || 0, 560)), (g.height = Math.max(g.height || 0, 110));
            var m = a(g, "ArcadeCardFrame");
            (m.width = g.width),
                (m.height = g.height),
                (m.zIndex = -1),
                n.ignoreHits(m),
                c(m, i.Color.bgPanel, 0 === f ? i.Color.borderGold : i.Color.border);
            if (!g._arcadeTouchBound) {
                g._arcadeTouchBound = !0;
                g.on(
                    cc.Node.EventType.TOUCH_START,
                    function (t) {
                        var e = t.currentTarget.getChildByName("ArcadeCardFrame");
                        e && c(e, i.Color.bgPanelRaised, i.Color.borderGold);
                    },
                    g
                );
            }
        }
    }
    if (t.btnRefresh) {
        (t.btnRefresh.width = Math.max(t.btnRefresh.width || 0, 200)),
            (t.btnRefresh.height = Math.max(t.btnRefresh.height || 0, 64)),
            n.paintPanel(t.btnRefresh, i.Color.bgPanelRaised, i.Color.border);
        var _ = a(t.btnRefresh, "ArcadeRefreshLab");
        ((_.getComponent(cc.Label) || _.addComponent(cc.Label)).string = "刷新"),
            (_.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
            n.applyLabelStyle(_, "caption"),
            n.ignoreHits(_);
    }
    if (t.btnAll) {
        (t.btnAll.width = Math.max(t.btnAll.width || 0, 200)),
            (t.btnAll.height = Math.max(t.btnAll.height || 0, 64)),
            n.paintPanel(t.btnAll, i.Color.bgPanelRaised, i.Color.cyan);
        var v = a(t.btnAll, "ArcadeAllLab");
        ((v.getComponent(cc.Label) || v.addComponent(cc.Label)).string = "全选"),
            (v.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
            n.applyLabelStyle(v, "cyan"),
            n.ignoreHits(v);
    }
}),
    (o.styleSkillCard = function (t, e) {
        if (!t) return;
        t.nameLab && n.applyLabelStyle(t.nameLab.node, "h2");
        t.descLab && n.applyLabelStyle(t.descLab.node, "caption");
        if (!e) return;
        e.isUltimate
            ? (t.nameLab && (t.nameLab.node.color = s(i.Color.danger)),
              t.descLab && (t.descLab.node.color = s(i.Color.danger)))
            : e.type == 1
            ? (t.nameLab && (t.nameLab.node.color = s(i.Color.gold)),
              t.descLab && (t.descLab.node.color = s(i.Color.muted)))
            : (t.nameLab && (t.nameLab.node.color = s(i.Color.cyan)),
              t.descLab && (t.descLab.node.color = s(i.Color.muted)));
        var o = t.node && t.node.getChildByName("ArcadeCardFrame");
        o &&
            c(
                o,
                i.Color.bgPanel,
                e.isUltimate ? i.Color.danger : e.type == 1 ? i.Color.borderGold : i.Color.cyan
            );
    }),
    (o.applyWinSettle = function (t) {
        if (!t || !t.node) return;
        t.bg && (t.bg.opacity = 220);
        t.panel &&
            ((t.panel.width = Math.max(t.panel.width || 0, 620)),
            (t.panel.height = Math.max(t.panel.height || 0, 780)),
            n.paintPanel(t.panel, i.Color.bgPanel, i.Color.borderGold));
        t.chapterLab && n.applyLabelStyle(t.chapterLab.node, "h1Gold");
        t.chapter && n.applyLabelStyle(t.chapter.node, "caption");
        t.killLab && n.applyLabelStyle(t.killLab.node, "hud");
        if (t.btnDouble) {
            (t.btnDouble.width = Math.max(t.btnDouble.width || 0, 360)),
                (t.btnDouble.height = Math.max(t.btnDouble.height || 0, 80)),
                n.paintPanel(t.btnDouble, i.Color.bgPanelRaised, i.Color.gold);
            var e = a(t.btnDouble, "ArcadeDoubleLab");
            ((e.getComponent(cc.Label) || e.addComponent(cc.Label)).string = "广告双倍奖励（保留品质）"),
                (e.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
                (e.getComponent(cc.Label).overflow = cc.Label.Overflow.SHRINK),
                (e.width = 340),
                n.applyLabelStyle(e, "cyan");
        }
        if (t.btnHome) {
            (t.btnHome.width = Math.max(t.btnHome.width || 0, 320)),
                (t.btnHome.height = Math.max(t.btnHome.height || 0, 80)),
                n.paintCta(t.btnHome),
                u(t.btnHome, "领取并返回");
        }
        t.btnRecord && (t.btnRecord.opacity = 180);
    }),
    (o.applyFailSettle = function (t) {
        if (!t || !t.node) return;
        t.bg && (t.bg.opacity = 220);
        t.panel &&
            ((t.panel.width = Math.max(t.panel.width || 0, 620)),
            (t.panel.height = Math.max(t.panel.height || 0, 720)),
            n.paintPanel(t.panel, i.Color.bgPanel, i.Color.border));
        t.chapterLab && n.applyLabelStyle(t.chapterLab.node, "h2");
        t.timeLab && n.applyLabelStyle(t.timeLab.node, "hud");
        t.killLab && n.applyLabelStyle(t.killLab.node, "hud");
        t.bestLab && n.applyLabelStyle(t.bestLab.node, "caption");
        if (t.btnHome) {
            (t.btnHome.width = Math.max(t.btnHome.width || 0, 320)),
                (t.btnHome.height = Math.max(t.btnHome.height || 0, 80)),
                n.paintCta(t.btnHome),
                u(t.btnHome, "返回大厅");
        }
        t.btnRecord && (t.btnRecord.opacity = 180);
    });
