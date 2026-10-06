var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("UiStyle"),
    i = t("UiTokens"),
    a = t("EquipController"),
    s = t("ConfData"),
    l = t("UserDataController");
var MILESTONES = [6, 8, 10, 12, 15, 20, 25, 30],
    QUALITY_TIER = ["", "灰白", "精良", "稀有", "史诗", "传奇"];
function c(t, e) {
    if (!t) return null;
    var o = t.getChildByName(e);
    return o || (((o = new cc.Node(e)).parent = t), o);
}
/** 原按钮上的 Label/美术字藏起来，避免与 Arcade 文案叠字 */
function hideNativeButtonText(btn, keepNames) {
    if (!btn) return;
    keepNames = keepNames || [];
    function walk(node) {
        if (!node) return;
        if (-1 < keepNames.indexOf(node.name)) return;
        var lab = node.getComponent(cc.Label),
            rich = node.getComponent(cc.RichText);
        if (lab || rich) (node.opacity = 0), lab && (lab.enabled = !1), rich && (rich.enabled = !1);
        for (var i = 0, kids = node.children || []; i < kids.length; i++) walk(kids[i]);
    }
    walk(btn);
}
/** CTA 底画在子节点，不污染按钮本体，且不抢点击 */
function paintCtaBackdrop(btn) {
    if (!btn) return;
    var bg = c(btn, "ArcadeCtaBg");
    bg.setSiblingIndex(0),
        (bg.x = 0),
        (bg.y = 0),
        (bg.width = btn.width || 300),
        (bg.height = btn.height || 80),
        (bg.zIndex = -1),
        n.paintCta(bg),
        n.ignoreHits(bg);
}
function isMilestone(t) {
    return -1 < MILESTONES.indexOf(t | 0);
}
function u(t, e) {
    if (!t) return;
    for (var o = 0; o < e.length; o++) {
        var n = t[e[o]];
        n && n.opacity != null && (n.opacity = 90);
    }
}
function p() {
    var t = a.EquipController.inst.getWeapon(),
        e = {title: "装备武器后显示流派", tag: "未装备", color: i.Color.cyan};
    if (!t) return e;
    var o = s.default.inst.equipConf.getEquipVo(t.id),
        n = s.default.inst.equipConf.getEquipQualityVo(t.id, t.quality),
        r = (o && o.name) || "武器",
        l = (n && n.name) || r,
        h = QUALITY_TIER[t.quality] || "品质" + t.quality;
    return (
        (e.title = l),
        (e.tag = r + "系 · " + h),
        (e.color = i.Color.quality[t.quality] || i.Color.cyan),
        e
    );
}
function hideNode(o) {
    if (!o) return;
    try {
        cc.Tween.stopAllByTarget(o);
    } catch (e) {}
    (o.active = !1), (o.opacity = 0);
    var sp = o.getComponent && o.getComponent(cc.Sprite);
    sp && (sp.enabled = !1);
    var lab = o.getComponent && o.getComponent(cc.Label);
    lab && (lab.enabled = !1);
}
/** 关掉共用舞台 + 章节预览（地图/章名），否则会与 Arcade 文案叠画 */
function hideSharedStage(t) {
    var names = ["bg", "Loong", "shadow", "role"],
        o,
        n;
    for (n = 0; n < names.length; n++) hideNode(t[names[n]]);
    // 章节岛图 / 章名 / 最高生存 — 整块关掉，大厅只留 Arcade 品牌层
    if (t.chapter) {
        hideNode(t.chapter.node);
        hideNode(t.chapter.chapterName && t.chapter.chapterName.node);
        hideNode(t.chapter.bestLab && t.chapter.bestLab.node);
        hideNode(t.chapter.iconSp && t.chapter.iconSp.node);
    }
    if (t.node) {
        var veil = t.node.getChildByName("ArcadeNightVeil");
        veil && veil.destroy();
        // 旧大武器卡删掉，避免双层
        var oldW = t.node.getChildByName("ArcadeWeapon");
        oldW && oldW.destroy();
    }
}
function hideDeepByNames(root, names) {
    if (!root) return;
    !function walk(node) {
        if (!node) return;
        if (-1 < names.indexOf(node.name)) hideNode(node);
        for (var i = 0, kids = node.children || []; i < kids.length; i++) walk(kids[i]);
    }(root);
}
function paintArcadeStage(t) {
    if (!t || !t.node) return;
    hideSharedStage(t);
    var e = t.node,
        o = c(e, "ArcadeStage");
    o.setSiblingIndex(0),
        (o.zIndex = -100),
        (o.x = 0),
        (o.y = 0),
        (o.width = cc.winSize.width + 80),
        (o.height = cc.winSize.height + 80),
        n.ignoreHits(o);
    var r = o.getComponent(cc.Graphics) || o.addComponent(cc.Graphics),
        a = o.width / 2,
        s = o.height / 2,
        k;
    r.clear(),
        (r.fillColor = i.hexToColor("#070B12", 255)),
        r.rect(-a, -s, o.width, o.height),
        r.fill(),
        (r.fillColor = i.hexToColor("#101820", 255)),
        r.rect(-a, -s, o.width, s * 0.42),
        r.fill();
    for (k = 0; k < 16; k++) {
        var px = ((k * 97) % 200) / 100 - 1,
            py = ((k * 53) % 160) / 100 + 0.05;
        (r.fillColor = i.hexToColor("#C8D6E5", 28 + (k % 4) * 10)),
            r.circle(px * a * 0.88, py * s * 0.72, 1.1 + (k % 2)),
            r.fill();
    }
    n.ignoreHits(o);
    if (t.scheduleOnce) {
        t.scheduleOnce(function () {
            hideSharedStage(t);
        }, 0);
        t.scheduleOnce(function () {
            hideSharedStage(t);
        }, 0.2);
        t.scheduleOnce(function () {
            hideSharedStage(t);
        }, 0.8);
    }
}
(o.applyBattleLobby = function (t) {
    if (!t || !t.node) return;
    paintArcadeStage(t);
    var e = t.node,
        h = p();
    hideDeepByNames(e, ["chapterName", "nameBg", "pic-gqdl", "chapter", "bestLab"]);
    hideSharedStage(t);
    t.bg && hideNode(t.bg);
    t.chest && hideNode(t.chest);
    if (t.chapter && !t.chapter._arcadeHideWrapped) {
        t.chapter._arcadeHideWrapped = !0;
        var _set = t.chapter.setChapter.bind(t.chapter);
        t.chapter.setChapter = function (id) {
            _set(id);
            hideSharedStage(t);
            hideDeepByNames(e, ["chapterName", "nameBg", "chapter", "bestLab"]);
        };
    }
    ["ArcadeEdition", "ArcadeWeapon", "ArcadeNightVeil"].forEach(function (name) {
        var node = e.getChildByName(name);
        node && node.destroy();
    });
    // 品牌下移，避开顶部设置/礼物和原 nameBg(y=290)
    var o = c(e, "ArcadeBrand");
    (o.x = 0),
        (o.y = 160),
        (o.zIndex = 90),
        n.ignoreHits(o),
        ((o.getComponent(cc.Label) || o.addComponent(cc.Label)).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        (o.getComponent(cc.Label).string = "疯狂大逃杀"),
        (o.getComponent(cc.Label).enabled = !0),
        (o.opacity = 255),
        n.applyLabelStyle(o, "h1Gold");
    var r = c(e, "ArcadeTagline");
    (r.x = 0),
        (r.y = 112),
        (r.zIndex = 90),
        n.ignoreHits(r),
        ((r.getComponent(cc.Label) || r.addComponent(cc.Label)).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        (r.getComponent(cc.Label).string = "V2 夜间求生 · 武器决定怎么玩"),
        (r.getComponent(cc.Label).enabled = !0),
        (r.opacity = 255),
        n.applyLabelStyle(r, "caption");
    var d = c(e, "ArcadeWeaponCard");
    (d.x = 0),
        (d.y = 52),
        (d.zIndex = 90),
        (d.width = 420),
        (d.height = 56),
        n.ignoreHits(d),
        n.paintPanel(d, i.Color.bgPanelRaised, i.Color.cyan);
    var badgeLab = c(d, "EditionLab");
    (badgeLab.y = 10),
        n.ignoreHits(badgeLab),
        ((badgeLab.getComponent(cc.Label) || badgeLab.addComponent(cc.Label)).string = "ARCADE · " + h.title),
        (badgeLab.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        (badgeLab.getComponent(cc.Label).enabled = !0),
        (badgeLab.opacity = 255),
        n.applyLabelStyle(badgeLab, "cyan");
    var y = c(d, "BuildTag");
    (y.y = -12),
        n.ignoreHits(y),
        ((y.getComponent(cc.Label) || y.addComponent(cc.Label)).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        (y.getComponent(cc.Label).string = h.tag),
        (y.getComponent(cc.Label).enabled = !0),
        (y.opacity = 255),
        n.applyLabelStyle(y, "caption");
    var wn = d.getChildByName("WeaponName");
    wn && hideNode(wn);
    if (t.btnStart) {
        (t.btnStart.zIndex = 95);
        var m = t.btnStart.width || 320,
            _ = t.btnStart.height || 88,
            g0 = t.btnStart.getComponent(cc.Graphics);
        (t.btnStart.width = m),
            (t.btnStart.height = _),
            g0 && g0.clear && g0.clear(),
            g0 && (g0.enabled = !1),
            paintCtaBackdrop(t.btnStart);
        var v = t.btnStart.getChildByName("ArcadeCtaLab");
        v ||
            (((v = new cc.Node("ArcadeCtaLab")).parent = t.btnStart),
            (v.y = 0),
            (v.zIndex = 20),
            v.addComponent(cc.Label)),
            (v.getComponent(cc.Label).string = "开始挑战"),
            (v.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
            (v.getComponent(cc.Label).enabled = !0),
            (v.opacity = 255),
            n.applyLabelStyle(v, "cta"),
            n.ignoreHits(v);
        hideNativeButtonText(t.btnStart, ["ArcadeCtaLab", "ArcadeCtaBg"]);
        hideDeepByNames(t.btnStart, ["kqyx_wz", "HellStart"]);
        // 恢复默认点击检测（之前误写成 _hitTest=null，按钮永远点不到）
        t.btnStart._hitTest = cc.Node.prototype._hitTest;
        t.btnStart.setSiblingIndex(e.childrenCount - 1);
        t.modes && n.ignoreHits(t.modes);
    }
    // 头像区已藏，名字不必再画一层
    t.nameLab && t.nameLab.node && hideNode(t.nameLab.node);
    u(t, ["activityBtn", "btnPatrol", "btnActivity", "chest", "btnBox"]);
    try {
        cc.director.setDisplayStats(!1);
    } catch (err) {}
}),
    (o.applyChapterSelect = function (t) {
        if (!t) return;
        // 不要在 nameBg 上再画一层板，会盖住「1.龙之原野」美术字
        if (t.descBg) {
            (t.descBg.width = Math.max(t.descBg.width || 0, 520)),
                (t.descBg.height = Math.max(t.descBg.height || 0, 160));
            var dg = t.descBg.getComponent(cc.Graphics);
            dg && dg.clear && dg.clear();
            n.paintPanel(t.descBg);
            n.ignoreHits(t.descBg);
        }
        t.tipsLab && n.applyLabelStyle(t.tipsLab.node, "body");
        t.tipsLab && t.tipsLab.node && n.ignoreHits(t.tipsLab.node);
        var e = t._curIdex || 1,
            o = (l.default.inst && l.default.inst.chapter) || 1,
            r = (s.default.inst.chapterConf && s.default.inst.chapterConf.getMaxChapter()) || 40,
            h = t.node || (t.descBg && t.descBg.parent),
            d = h && c(h, "ArcadeChapterMeta");
        if (d) {
            // 放在说明板上方，避开章节名和岛图
            (d.zIndex = 20),
                (d.y = -165),
                (d.x = 0),
                (d.width = 520),
                (d.height = 32),
                n.ignoreHits(d);
            var f = c(d, "ProgressLab");
            (f.x = -160),
                n.ignoreHits(f),
                ((f.getComponent(cc.Label) || f.addComponent(cc.Label)).string =
                    "进度 " + Math.min(o, r) + "/" + r),
                (f.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.LEFT),
                n.applyLabelStyle(f, "caption");
            var y = c(d, "MilestoneLab");
            (y.x = 20),
                n.ignoreHits(y),
                ((y.getComponent(cc.Label) || y.addComponent(cc.Label)).string = isMilestone(e)
                    ? "里程碑章"
                    : ""),
                (y.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
                n.applyLabelStyle(y, "cyan"),
                (y.active = isMilestone(e));
            var g = c(d, "RecommendLab");
            (g.x = 180),
                n.ignoreHits(g),
                ((g.getComponent(cc.Label) || g.addComponent(cc.Label)).string = e == o ? "推荐挑战" : ""),
                (g.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.RIGHT),
                n.applyLabelStyle(g, "caption"),
                (g.color = i.hexToColor(i.Color.gold)),
                (g.active = e == o);
        }
        if (t.btnGet) {
            var m = t.btnGet.width || 260,
                _ = t.btnGet.height || 66,
                g0 = t.btnGet.getComponent(cc.Graphics);
            (t.btnGet.width = m),
                (t.btnGet.height = _),
                g0 && g0.clear && g0.clear(),
                g0 && (g0.enabled = !1),
                paintCtaBackdrop(t.btnGet);
            var v = t.btnGet.getChildByName("ArcadeGetLab");
            v ||
                (((v = new cc.Node("ArcadeGetLab")).parent = t.btnGet),
                (v.y = 0),
                (v.zIndex = 20),
                v.addComponent(cc.Label)),
                (v.getComponent(cc.Label).string = e == o ? "挑战本章" : "开始挑战"),
                (v.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
                (v.getComponent(cc.Label).enabled = !0),
                (v.opacity = 255),
                n.applyLabelStyle(v, "cta"),
                n.ignoreHits(v);
            hideNativeButtonText(t.btnGet, ["ArcadeGetLab", "ArcadeCtaBg"]);
            hideDeepByNames(t.btnGet, ["kqyx_wz", "js_wz4"]);
            n.ignoreHits(t.btnGet.getChildByName("ArcadeCtaBg"));
            t.btnGet._hitTest = cc.Node.prototype._hitTest;
            t.btnGet.setSiblingIndex((h && h.childrenCount - 1) || 0);
        }
        t.btnBack && (t.btnBack.opacity = 200);
        try {
            cc.director.setDisplayStats(!1);
        } catch (err) {}
    }),
    (o.applyHomeChrome = function (t) {
        if (!t) return;
        var ui = t.node && t.node.getChildByName("ui"),
            dirt = ui && ui.getChildByName("bg"),
            dock;
        if (dirt) {
            var dsp = dirt.getComponent(cc.Sprite);
            dsp && (dsp.enabled = !1);
            (dirt.width = cc.winSize.width + 20), (dirt.height = 110);
            n.paintPanel(dirt, i.Color.bgPanel, i.Color.border);
            n.ignoreHits(dirt);
        }
        if (t.btns) {
            for (var e = 0, o = t.btns.children || []; e < o.length; e++) {
                var btn = o[e];
                if (!btn) continue;
                var nm = (btn.name || "").toLowerCase();
                btn.opacity = -1 < nm.indexOf("battle") || -1 < nm.indexOf("btnbattle") ? 255 : 180;
            }
        }
    });
