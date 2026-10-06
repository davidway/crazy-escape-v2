var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("UiStyle"),
    i = t("UiTokens"),
    a = t("HeroController"),
    s = t("SkillEnum"),
    c = t("SkillIcon");
var u = 0.3,
    p = 12,
    h = 36;
function d(t, e) {
    if (!t) return null;
    var o = t.getChildByName(e);
    return o || (((o = new cc.Node(e)).parent = t), o);
}
function f(t) {
    return i.hexToColor(t);
}
function y(t, e) {
    if (!t) return;
    var o =
        t.barSprite ||
        (t.node && t.node.getChildByName("bar") && t.node.getChildByName("bar").getComponent(cc.Sprite));
    o && o.node && (o.node.color = f(e));
}
function g() {
    var t = a.HeroController.getAtrr("hp"),
        e = a.HeroController.getAtrr("maxHp");
    return {ratio: e ? cc.misc.clamp01(t / e) : 1, hp: Math.max(0, Math.floor(t || 0)), maxHp: Math.max(0, Math.floor(e || 0))};
}
function m(t) {
    if (!t || !t.node) return null;
    var e = d(t.node, "ArcadeVignette");
    (e.zIndex = 200),
        (e.width = cc.winSize.width + 40),
        (e.height = cc.winSize.height + 40),
        (e.x = 0),
        (e.y = 0),
        (e.opacity = 255),
        n.ignoreHits(e);
    var o = e.getComponent(cc.Graphics) || e.addComponent(cc.Graphics);
    o.clear();
    var halfW = e.width / 2,
        halfH = e.height / 2,
        band = 72;
    (o.fillColor = i.hexToColor(i.Color.danger, 55)),
        o.rect(-halfW, halfH - band, e.width, band),
        o.fill(),
        o.rect(-halfW, -halfH, e.width, band),
        o.fill(),
        o.rect(-halfW, -halfH, band, e.height),
        o.fill(),
        o.rect(halfW - band, -halfH, band, e.height),
        o.fill();
    return (e.active = !1), e;
}
function _(t) {
    if (!t || !t.node) return null;
    var e = t.timeLab && t.timeLab.node && t.timeLab.node.parent,
        o = e || t.node,
        r = d(o, "ArcadeHpRow");
    (r.zIndex = 20), (r.y = e ? 48 : 0), (r.x = 0), (r.width = 420), (r.height = 18), n.ignoreHits(r);
    var a = d(r, "HpLabel");
    (a.x = -210),
        ((a.getComponent(cc.Label) || a.addComponent(cc.Label)).string = "HP"),
        (a.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.LEFT),
        n.applyLabelStyle(a, "hud");
    var s = d(r, "HpTrack");
    (s.x = 36), (s.y = 0), (s.width = 340), (s.height = 12), n.paintPanel(s, i.Color.bgBase, i.Color.border);
    var c = d(s, "HpFill");
    (c.anchorX = 0), (c.x = -170), (c.y = 0), (c.width = 340), (c.height = 10);
    var l = c.getComponent(cc.Graphics) || c.addComponent(cc.Graphics);
    return (r._hpLabel = a), (r._hpFill = c), (r._hpGfx = l), (r._hpTrackW = 340), r;
}
function v(t, e) {
    if (!t || !t._hpGfx) return;
    var o = t._hpGfx,
        n = t._hpTrackW || 340,
        r = typeof e === "number" ? e : e.ratio,
        a = Math.max(2, n * r);
    o.clear(),
        (o.fillColor = f(r < u ? i.Color.danger : "#E85A4A")),
        o.roundRect(0, -5, a, 10, 4),
        o.fill();
    if (t._hpLabel && e && typeof e !== "number") {
        var s = t._hpLabel.getComponent(cc.Label);
        s && (s.string = e.hp + "/" + e.maxHp);
    }
}
function b(t) {
    if (!t || !t.node) return null;
    var e = d(t.node, "ArcadeSkillStrip");
    (e.zIndex = 60),
        (e.x = 0),
        (e.y = 90 - cc.winSize.height / 2),
        (e.width = Math.min(700, cc.winSize.width - 40)),
        (e.height = h + 8),
        (e.anchorX = 0.5),
        (e.anchorY = 0.5),
        n.ignoreHits(e);
    e.getComponent(cc.Mask) || (e.addComponent(cc.Mask).type = cc.Mask.Type.RECT);
    var o = d(e, "Content");
    return (o.x = 0), (o.y = 0), (o.anchorX = 0.5), (o.anchorY = 0.5), (e._content = o), e;
}
function w(t, e, o) {
    var n = new cc.Node("sk" + e.id);
    (n.width = h), (n.height = h), (n.parent = t);
    var r = n.addComponent(cc.Graphics);
    r.clear(),
        (r.fillColor = f(i.Color.bgPanel)),
        r.roundRect(-h / 2, -h / 2, h, h, i.Radius.sm),
        r.fill(),
        (r.strokeColor = f(o ? i.Color.cyan : "#4A5568")),
        (r.lineWidth = 2),
        r.roundRect(-h / 2, -h / 2, h, h, i.Radius.sm),
        r.stroke();
    var a = new cc.Node("icon"),
        l,
        m;
    (a.parent = n),
        (a.width = h - 8),
        (a.height = h - 8),
        a.addComponent(cc.Sprite),
        (l = a.addComponent(c.default)),
        (l.iconSp = a.getComponent(cc.Sprite)),
        l.setData(e.id, e.level);
    m = new cc.Node("lv");
    return (
        (m.parent = n),
        (m.y = -h / 2 + 8),
        ((m.getComponent(cc.Label) || m.addComponent(cc.Label)).string = "L" + (e.level || 1)),
        (m.getComponent(cc.Label).fontSize = 14),
        (m.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        (m.color = f(i.Color.muted)),
        n
    );
}
function C(t) {
    if (!t || !t._content) return;
    var e = t._content;
    try {
        e.removeAllChildren();
        var o = (a.HeroController.getHeroSkills() || []).slice(0, p),
            n = o.length,
            r = (n - 1) * (h + 6);
        for (var c = 0; c < n; c++) {
            var u = o[c];
            if (!u || null == u.id) continue;
            var d = u.confVo && u.confVo.type == s.SkillGroup.ACTIVE_SKILL,
                g = w(e, u, d);
            g.x = n <= 1 ? 0 : -r / 2 + c * (h + 6);
        }
    } catch (err) {
        console.error("[CombatHudArcade] refreshSkills failed", err);
    }
}
function k(t) {
    if (!t || !t.node) return null;
    var e = d(t.node, "ArcadeModBanner");
    (e.zIndex = 90),
        (e.y = 180),
        (e.x = 0),
        (e.width = 520),
        (e.height = 44),
        (e.active = !1),
        n.ignoreHits(e),
        n.paintPanel(e, i.Color.bgPanelRaised, i.Color.cyan);
    var o = d(e, "Lab");
    ((o.getComponent(cc.Label) || o.addComponent(cc.Label)).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        (o.getComponent(cc.Label).string = ""),
        n.applyLabelStyle(o, "cyan");
    var r = d(t.node, "ArcadeModBadge");
    (r.zIndex = 90),
        (r.width = 36),
        (r.height = 36),
        (r.x = cc.winSize.width / 2 - 48),
        (r.y = 180),
        (r.active = !1),
        n.paintPanel(r, i.Color.bgPanelRaised, i.Color.cyan);
    var a = d(r, "IconLab");
    return (
        ((a.getComponent(cc.Label) || a.addComponent(cc.Label)).string = "雾"),
        (a.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        n.applyLabelStyle(a, "cyan"),
        {banner: e, badge: r}
    );
}
(o.apply = function (t) {
    if (!t || !t.node) return;
    if (!t._arcadeApplied) {
        t._arcadeApplied = !0;
        t.timeLab && n.applyLabelStyle(t.timeLab.node, "hud");
        t.levelLab && n.applyLabelStyle(t.levelLab.node, "hud");
        t.goldLab &&
            (n.applyLabelStyle(t.goldLab.node, "hud"),
            (t.goldLab.node.color = f(i.Color.gold)),
            (t.goldLab.node.opacity = 200));
        t.killLab && n.applyLabelStyle(t.killLab.node, "hud");
        t.bossLab && n.applyLabelStyle(t.bossLab.node, "danger");
        t.expBar && y(t.expBar, i.Color.gold);
        t.bossBar && y(t.bossBar, i.Color.danger);
        t.progressBar && y(t.progressBar, i.Color.cyan);
        if (t.btnPause) {
            var e = t.btnPause;
            (e.width = Math.max(e.width || 0, 48)), (e.height = Math.max(e.height || 0, 48));
        }
        (t._arcadeHpRow = _(t)),
            (t._arcadeVignette = m(t)),
            (t._arcadeSkillStrip = b(t)),
            (t._arcadeMod = k(t));
    }
    C(t._arcadeSkillStrip), o.tickHp(t);
}),
    (o.refreshSkills = function (t) {
        t && t._arcadeSkillStrip && C(t._arcadeSkillStrip);
    }),
    (o.tickHp = function (t) {
        if (!t) return;
        var e = g();
        t._arcadeHpRow && v(t._arcadeHpRow, e);
        if (t._arcadeVignette) {
            var n = e.ratio < u;
            t._arcadeVignette.active !== n && (t._arcadeVignette.active = n),
                n && (t._arcadeVignette.opacity = 160 + Math.floor((1 - e.ratio / u) * 80));
        }
    }),
    (o.showModifier = function (t, e) {
        if (!t || !t._arcadeMod) return;
        var o = t._arcadeMod,
            n = (e && e.title) || "雾夜来袭 — 视野降低",
            r = (e && e.badge) || "雾";
        o.banner.active = !0;
        var a = o.banner.getChildByName("Lab");
        a && (a.getComponent(cc.Label).string = n);
        var s = o.badge.getChildByName("IconLab");
        s && (s.getComponent(cc.Label).string = r),
            (o.badge.active = !0),
            (function (hud) {
                if (!hud || !hud.node) return;
                var mask = d(hud.node, "ArcadeFogMask");
                (mask.zIndex = 85),
                    (mask.width = cc.winSize.width + 40),
                    (mask.height = cc.winSize.height + 40),
                    (mask.x = 0),
                    (mask.y = 0),
                    (mask.active = !0),
                    (mask.opacity = 0),
                    n.ignoreHits(mask);
                var gfx = mask.getComponent(cc.Graphics) || mask.addComponent(cc.Graphics);
                gfx.clear();
                var halfW = mask.width / 2,
                    halfH = mask.height / 2,
                    band = 90;
                (gfx.fillColor = i.hexToColor("#0A1220", 90)),
                    gfx.rect(-halfW, halfH - band, mask.width, band),
                    gfx.fill(),
                    gfx.rect(-halfW, -halfH, mask.width, band),
                    gfx.fill(),
                    gfx.rect(-halfW, -halfH, band, mask.height),
                    gfx.fill(),
                    gfx.rect(halfW - band, -halfH, band, mask.height),
                    gfx.fill();
                cc.tween(mask).to(0.6, {opacity: 120}).start();
                hud._arcadeFog = mask;
            })(t),
            cc.tween(o.banner)
                .delay(2.5)
                .to(0.35, {opacity: 0})
                .call(function () {
                    (o.banner.active = !1), (o.banner.opacity = 255);
                })
                .start();
    }),
    (o.LOW_HP = u);
