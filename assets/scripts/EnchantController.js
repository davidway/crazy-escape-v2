var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("AffixPool"),
    i = t("LegendEnchantLevels"),
    r = t("EquipType"),
    a = t("PropType"),
    s = t("GoodsDataController"),
    l = t("LegendController"),
    c = t("App"),
    u = t("EffectMgr");
var p = a.PropType.EnchantStone || 1002,
    h = 1;
function d(t) {
    return s.default.inst.useGoodsNumByID(p, t);
}
function f(t) {
    c.app.local.setValue("equips", t);
}
(o.STONE_ID = p),
    (o.REROLL_COST = h),
    (o.ensurePurpleAffix = function (t) {
        if (!t || t.quality != r.EquipQualityType.PURPLE) return null;
        if (t.affixId && n.getById(t.affixId)) return n.getById(t.affixId);
        var e = n.roll();
        return (t.affixId = e.id), (t.legendEnchant = 0), e;
    }),
    (o.onQualityChanged = function (t) {
        if (!t) return;
        if (t.quality == r.EquipQualityType.PURPLE) {
            t.legendEnchant = 0;
            if (!t.affixId || !n.getById(t.affixId)) {
                var e = n.roll();
                t.affixId = e.id;
            }
        } else if (t.quality == r.EquipQualityType.RED) {
            t.affixId = null;
            void 0 === t.legendEnchant && (t.legendEnchant = 0);
        } else (t.affixId = null), (t.legendEnchant = 0);
    }),
    (o.applyAffixesToAttr = function (t, e) {
        if (!t || !e) return;
        for (var o = 0; o < e.length; o++) {
            var i = e[o];
            if (i && i.quality == r.EquipQualityType.PURPLE) {
                var a = i.affixId && n.getById(i.affixId);
                a || (a = this.ensurePurpleAffix(i));
                a && void 0 !== t[a.attr] && (t[a.attr] += a.value);
            }
        }
    }),
    (o.getAffixLabel = function (t) {
        if (!t || t.quality != r.EquipQualityType.PURPLE) return "";
        var e = t.affixId && n.getById(t.affixId);
        return e ? "词缀 · " + e.name : "";
    }),
    (o.getLegendEnchantLabel = function (t) {
        if (!t || t.quality != r.EquipQualityType.RED) return "";
        var e = l.getLegendForEquip(t.id, t.quality);
        if (!e) return "";
        var o = t.legendEnchant || 0,
            n = i.getMax(e.id);
        return o ? "传奇强化 Lv." + o + "/" + n : "传奇强化 Lv.0/" + n;
    }),
    (o.rerollPurple = function (t, e) {
        if (!t || t.quality != r.EquipQualityType.PURPLE)
            return u.default.inst.showTips("仅紫装可洗词缀"), !1;
        if (s.default.inst.getGoodsNumByID(p) < h)
            return u.default.inst.showTips("附魔石不足"), !1;
        if (!d(h)) return !1;
        var o = n.roll(t.affixId);
        return (
            (t.affixId = o.id),
            e && f(e),
            u.default.inst.showTips("词缀已刷新：" + o.name),
            !0
        );
    }),
    (o.upgradeRedLegend = function (t, e) {
        if (!t || t.quality != r.EquipQualityType.RED)
            return u.default.inst.showTips("仅红装可强化传奇"), !1;
        var o = l.getLegendForEquip(t.id, t.quality);
        if (!o) return u.default.inst.showTips("该装备无传奇效果"), !1;
        var n = t.legendEnchant || 0,
            a = i.getMax(o.id);
        if (n >= a) return u.default.inst.showTips("传奇已满级"), !1;
        var c = i.getStoneCost(o.id, n);
        if (s.default.inst.getGoodsNumByID(p) < c)
            return u.default.inst.showTips("附魔石不足（需" + c + "）"), !1;
        if (!d(c)) return !1;
        return (
            (t.legendEnchant = n + 1),
            e && f(e),
            u.default.inst.showTips("传奇强化至 Lv." + t.legendEnchant),
            !0
        );
    }),
    (o.getStoneCount = function () {
        return s.default.inst.getGoodsNumByID(p);
    }),
    (o.canEnchant = function (t) {
        if (!t) return !1;
        if (t.quality == r.EquipQualityType.PURPLE) return !0;
        if (t.quality == r.EquipQualityType.RED) {
            var e = l.getLegendForEquip(t.id, t.quality);
            return !!(e && (t.legendEnchant || 0) < i.getMax(e.id));
        }
        return !1;
    });
