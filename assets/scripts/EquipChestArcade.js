var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("UiStyle"),
    i = t("UiTokens"),
    a = t("LegendController"),
    s = t("EquipController"),
    c = t("EquipType"),
    u = t("ConfData"),
    EC = t("EnchantController"),
    LE = t("LegendEnchantLevels");
var p = {1: "武器", 2: "护甲", 3: "项链", 4: "腰带", 5: "手套", 6: "战靴"};
var applyDetailedRef = null;
function h(t, e) {
    if (!t) return null;
    var o = t.getChildByName(e);
    return o || (((o = new cc.Node(e)).parent = t), o);
}
function d(t) {
    return i.hexToColor(t);
}
function f(t, e, o) {
    if (!t) return;
    void 0 === e && (e = i.Color.bgPanel);
    void 0 === o && (o = i.Color.border);
    var r = t.getComponent(cc.Graphics) || t.addComponent(cc.Graphics),
        a = t.width || 100,
        s = t.height || 100;
    r.clear(),
        (r.fillColor = d(e)),
        r.roundRect(-a / 2, -s / 2, a, s, i.Radius.sm),
        r.fill(),
        (r.strokeColor = d(o)),
        (r.lineWidth = 2),
        r.roundRect(-a / 2, -s / 2, a, s, i.Radius.sm),
        r.stroke();
}
function y(t, e) {
    var o = h(t, "ArcadeQFrame");
    (o.width = (t.width || 110) + 8),
        (o.height = (t.height || 110) + 8),
        (o.zIndex = -1),
        (o.x = 0),
        (o.y = 0),
        f(o, i.Color.bgPanel, e || i.Color.border);
    return o;
}
(o.applyEquipsPage = function (t) {
    if (!t || !t.node) return;
    var e = t.node,
        o = h(e, "ArcadeEquipTitle");
    (o.zIndex = 80),
        (o.y = 340),
        ((o.getComponent(cc.Label) || o.addComponent(cc.Label)).string = "装备"),
        (o.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        n.applyLabelStyle(o, "h1Gold");
    var r = s.EquipController.inst.getWeapon(),
        l = r && a.getLegendForEquip(r.id, r.quality),
        c = h(e, "ArcadeBuildTag");
    (c.zIndex = 80),
        (c.y = 300),
        ((c.getComponent(cc.Label) || c.addComponent(cc.Label)).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
        (c.getComponent(cc.Label).string = l ? "传奇 · " + l.name + " — " + l.summary : "穿戴武器决定流派"),
        n.applyLabelStyle(c, "caption"),
        l && (c.color = d(i.Color.quality[5]));
    t.hpLab && n.applyLabelStyle(t.hpLab.node, "hud");
    t.attackLab && n.applyLabelStyle(t.attackLab.node, "hud");
    t.sortTypeLab && n.applyLabelStyle(t.sortTypeLab.node, "caption");
    t.btnSynthes && n.paintPanel(t.btnSynthes, i.Color.bgPanelRaised, i.Color.borderGold);
}),
    (o.applyEquipBlock = function (t) {
        if (!t || !t.node || !t._data) return;
        var e = t._data.quality || 1,
            o = i.Color.quality[e] || i.Color.border;
        y(t.node, o);
        t.lv && ((t.lv.node.color = d(o)), n.applyLabelStyle(t.lv.node, "hud"));
        if (e == c.EquipQualityType.RED) {
            var r = a.getLegendForEquip(t._data.id, e);
            if (r) {
                var s = h(t.node, "ArcadeLegendDot");
                (s.width = 14),
                    (s.height = 14),
                    (s.x = (t.node.width || 100) / 2 - 10),
                    (s.y = (t.node.height || 100) / 2 - 10),
                    (s.zIndex = 30),
                    f(s, i.Color.gold, i.Color.borderGold);
            }
        }
    }),
    (o.applyDetailed = function (t) {
        if (!t || !t.param || !t.param.equipData) return;
        var e = t.param.equipData,
            qual = e.quality || 1,
            r = i.Color.quality[qual] || i.Color.text;
        t.nameLab && ((t.nameLab.node.color = d(r)), n.applyLabelStyle(t.nameLab.node, "h2"));
        t.introduceLab && n.applyLabelStyle(t.introduceLab.node, "caption");
        t.attr_type2 && n.applyLabelStyle(t.attr_type2.node, "hud");
        t.value && n.applyLabelStyle(t.value.node, "hud");
        t.lv && n.applyLabelStyle(t.lv.node, "caption");
        var slotLab = h(t.zb_ck1 || t.node, "ArcadeSlotLab");
        (slotLab.y = 210),
            ((slotLab.getComponent(cc.Label) || slotLab.addComponent(cc.Label)).string = p[e.equipType] || "装备"),
            (slotLab.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
            n.applyLabelStyle(slotLab, "caption");
        var legend = a.getLegendForEquip(e.id, qual),
            banner = h(t.zb_ck1 || t.node, "ArcadeLegendBanner");
        if (legend) {
            (banner.active = !0),
                (banner.y = 170),
                (banner.width = 420),
                (banner.height = 56),
                f(banner, i.Color.bgPanelRaised, i.Color.quality[5]);
            var nameLab = h(banner, "Lab");
            ((nameLab.getComponent(cc.Label) || nameLab.addComponent(cc.Label)).string = "传奇 · " + legend.name),
                (nameLab.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
                (nameLab.y = 10),
                n.applyLabelStyle(nameLab, "h2"),
                (nameLab.color = d(i.Color.quality[5]));
            var sumLab = h(banner, "Sum");
            ((sumLab.getComponent(cc.Label) || sumLab.addComponent(cc.Label)).string = legend.summary),
                (sumLab.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
                (sumLab.y = -12),
                n.applyLabelStyle(sumLab, "caption");
            if (t.introduceLab && (!t.introduceLab.string || !t.introduceLab.string.trim()))
                t.introduceLab.string = legend.summary;
        } else banner.active = !1;
        var affixLab = h(t.zb_ck1 || t.node, "ArcadeAffixLab");
        (affixLab.y = legend ? 120 : 160),
            (affixLab.active = !0),
            ((affixLab.getComponent(cc.Label) || affixLab.addComponent(cc.Label)).horizontalAlign =
                cc.Label.HorizontalAlign.CENTER);
        var affixTxt = EC.getAffixLabel(e) || EC.getLegendEnchantLabel(e);
        (affixLab.getComponent(cc.Label).string = affixTxt || ""),
            n.applyLabelStyle(affixLab, "caption"),
            affixTxt &&
                (affixLab.color = d(
                    qual == c.EquipQualityType.RED ? i.Color.quality[5] : i.Color.quality[4]
                ));
        var enchantBtn = h(t.zb_ck1 || t.node, "ArcadeEnchantBtn");
        if (EC.canEnchant(e)) {
            (enchantBtn.active = !0),
                (enchantBtn.y = -260),
                (enchantBtn.width = 220),
                (enchantBtn.height = 48),
                (enchantBtn.zIndex = 50),
                f(enchantBtn, i.Color.bgPanelRaised, i.Color.borderGold);
            var btnLab = h(enchantBtn, "Lab"),
                cost =
                    qual == c.EquipQualityType.PURPLE
                        ? EC.REROLL_COST
                        : legend
                          ? LE.getStoneCost(legend.id, e.legendEnchant || 0)
                          : 1,
                stoneN = EC.getStoneCount();
            ((btnLab.getComponent(cc.Label) || btnLab.addComponent(cc.Label)).string =
                (qual == c.EquipQualityType.PURPLE ? "洗词缀" : "强化传奇") +
                " · 石" +
                cost +
                "（有" +
                stoneN +
                "）"),
                (btnLab.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
                n.applyLabelStyle(btnLab, "cta");
            enchantBtn.off(cc.Node.EventType.TOUCH_END);
            enchantBtn.on(
                cc.Node.EventType.TOUCH_END,
                function () {
                    var ok =
                        qual == c.EquipQualityType.PURPLE
                            ? EC.rerollPurple(e, s.EquipController.inst.getEquips())
                            : EC.upgradeRedLegend(e, s.EquipController.inst.getEquips());
                    ok && applyDetailedRef && applyDetailedRef(t);
                },
                t
            );
        } else enchantBtn.active = !1;
        t.btnRemoving && n.paintPanel(t.btnRemoving, i.Color.bgPanelRaised, i.Color.border);
        t.btnUpgrade && n.paintCta(t.btnUpgrade);
        t.btnOneUpgrade && n.paintPanel(t.btnOneUpgrade, i.Color.bgPanelRaised, i.Color.borderGold);
    }),
    (applyDetailedRef = o.applyDetailed),
    (o.applyLottery = function (t) {
        if (!t || !t.node) return;
        var e = t.panel || t.node;
        e && n.paintPanel(e, i.Color.bgPanel, i.Color.borderGold);
        var o = h(t.node, "ArcadeLotteryTitle");
        (o.zIndex = 90),
            (o.y = 320),
            n.ignoreHits(o),
            ((o.getComponent(cc.Label) || o.addComponent(cc.Label)).string = "幸运转盘"),
            (o.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
            n.applyLabelStyle(o, "h1Gold");
        t.btnLottery && n.paintCta(t.btnLottery);
        t.btnLucky && n.paintPanel(t.btnLucky, i.Color.bgPanelRaised, i.Color.cyan);
        t.btnClose && (t.btnClose.opacity = 200);
        t.coinLab && n.applyLabelStyle(t.coinLab.node, "hud");
    }),
    (o.applyTreasureChest = function (t) {
        if (!t || !t.node) return;
        var e = t._treasure_chest || (t._content && u.default.inst.shopConf.getTreasureChest(t._content.id)),
            o = e && e.type,
            r = o == 2 ? i.Color.quality[5] : i.Color.border;
        t.ItemName && ((t.ItemName.node.color = d(o == 2 ? i.Color.quality[4] : i.Color.cyan)), n.applyLabelStyle(t.ItemName.node, "h2"));
        t.getBtnLab && n.applyLabelStyle(t.getBtnLab.node, "cta");
        t.moneyLab && n.applyLabelStyle(t.moneyLab.node, "hud");
        var a = h(t.node, "ArcadeChestFrame");
        (a.width = (t.node.width || 280) + 12),
            (a.height = (t.node.height || 360) + 12),
            (a.zIndex = -1),
            f(a, i.Color.bgPanel, r);
        if (o == 2) {
            var s = h(t.node, "ArcadeJackpotGlow");
            (s.width = a.width + 20),
                (s.height = a.height + 20),
                (s.zIndex = -2),
                (s.opacity = Math.floor(255 * i.Glow.opacity));
            var l = s.getComponent(cc.Graphics) || s.addComponent(cc.Graphics);
            l.clear(),
                (l.fillColor = i.hexToColor(i.Glow.color, 40)),
                l.roundRect(-s.width / 2, -s.height / 2, s.width, s.height, i.Radius.lg),
                l.fill();
        }
    }),
    (o.applyShopPage = function (t) {
        if (!t || !t.node) return;
        var e = h(t.node, "ArcadeShopTitle");
        (e.zIndex = 80),
            (e.y = 340),
            n.ignoreHits(e),
            ((e.getComponent(cc.Label) || e.addComponent(cc.Label)).string = "宝箱"),
            (e.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER),
            n.applyLabelStyle(e, "h1Gold");
    });
