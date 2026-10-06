var t = require;
var e = module;
var o = exports;
var n,
    i =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        }),
    r =
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var i,
                r = arguments.length,
                a = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else
                for (var s = t.length - 1; 0 <= s; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : 3 < r ? i(e, o, a) : i(e, o)) || a);
            return 3 < r && a && Object.defineProperty(e, o, a), a;
        },
    a =
        (this && this.__awaiter) ||
        function (t, a, s, l) {
            return new (s = s || Promise)(function (o, e) {
                function n(t) {
                    try {
                        r(l.next(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function i(t) {
                    try {
                        r(l.throw(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function r(t) {
                    var e;
                    t.done
                        ? o(t.value)
                        : ((e = t.value) instanceof s
                              ? e
                              : new s(function (t) {
                                    t(e);
                                })
                          ).then(n, i);
                }
                r((l = l.apply(t, a || [])).next());
            });
        },
    p =
        (this && this.__generator) ||
        function (o, n) {
            var i,
                r,
                a,
                s = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                },
                t = {next: e(0), throw: e(1), return: e(2)};
            return (
                "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                        return this;
                    }),
                t
            );
            function e(e) {
                return function (t) {
                    return (function (e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (
                                    ((i = 1),
                                    r &&
                                        (a =
                                            2 & e[0]
                                                ? r.return
                                                : e[0]
                                                ? r.throw || ((a = r.return) && a.call(r), 0)
                                                : r.next) &&
                                        !(a = a.call(r, e[1])).done)
                                )
                                    return a;
                                switch (((r = 0), (e = a ? [2 & e[0], a.value] : e)[0])) {
                                    case 0:
                                    case 1:
                                        a = e;
                                        break;
                                    case 4:
                                        return s.label++, {value: e[1], done: !1};
                                    case 5:
                                        s.label++, (r = e[1]), (e = [0]);
                                        continue;
                                    case 7:
                                        (e = s.ops.pop()), s.trys.pop();
                                        continue;
                                    default:
                                        if (
                                            !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                                            (6 === e[0] || 2 === e[0])
                                        ) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                                            s.label = e[1];
                                            break;
                                        }
                                        if (6 === e[0] && s.label < a[1]) {
                                            (s.label = a[1]), (a = e);
                                            break;
                                        }
                                        if (a && s.label < a[2]) {
                                            (s.label = a[2]), s.ops.push(e);
                                            break;
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                e = n.call(o, s);
                            } catch (t) {
                                (e = [6, t]), (r = 0);
                            } finally {
                                i = a = 0;
                            }
                        if (5 & e[0]) throw e[1];
                        return {value: e[0] ? e[1] : void 0, done: !0};
                    })([e, t]);
                };
            }
        };
Object.defineProperty(o, "__esModule", {value: !0});
var s,
    l = t("BasePanel"),
    c = t("UIEnum"),
    u = t("decorator"),
    h = t("App"),
    d = t("Font"),
    f = t("EquipController"),
    y = t("EventTypes"),
    g = t("ConfData"),
    m = t("DrawingController"),
    _ = t("UserDataController"),
    v = t("LayerMgr"),
    b = t("MultipleController"),
    w = t("GuideController"),
    ECA = t("EquipChestArcade"),
    C = cc._decorator,
    e = C.ccclass,
    t = C.property,
    e =
        (C.inspector,
        (s = l.default),
        i(k, s),
        (k.prototype.initView = function () {
            b.default.inst.Breathing(this.zb_ts1, 1.2, 1, 0.9),
                b.default.inst.Breathing(this.zb_ts2, 1.2, 1, 0.9),
                b.default.inst.Breathing(this.zb_ts3, 1.2, 1, 0.9);
        }),
        (k.prototype.updateView = function () {
            var t = this;
            this.init(this.param),
                b.default.inst.eject(this.zb_ck1, this.bg, function () {
                    t.onEvent(), t.showGuide();
                });
        }),
        (k.prototype.show = function (t) {
            console.log(t), (this.param = t);
        }),
        (k.prototype.showGuide = function () {
            var t;
            5 == (null === (t = w.GuideController.guideVo) || void 0 === t ? void 0 : t.idx) &&
                (w.GuideController.guideStart(), w.GuideController.setGuide("Equipment", 1));
        }),
        (k.prototype.init = function (u) {
            return a(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s, l, c;
                return p(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (this.zb_ts1.active = !1),
                                (this.zb_ts2.active = !1),
                                (this.zb_ts3.active = !1),
                                (this.nameLab.string = u.quality.name),
                                (this.attr_type1.getComponent(cc.Sprite).spriteFrame =
                                    this.bgs[u.quality.attr_type - 1]),
                                (this.attr_type2.string = 1 == u.quality.attr_type ? "攻击" : "生命"),
                                (this.value.string = d.default
                                    .getFon()
                                    .change(
                                        f.EquipController.inst.clacAttr(u.quality.equip_id, u.equipData.level, !0)
                                    )),
                                (this.introduceLab.string = u.quality.desc || ""),
                                (this.qualityBg.getComponent(cc.Sprite).spriteFrame =
                                    null != this.qualityBgs[u.equipData.quality - 1]
                                        ? this.qualityBgs[u.equipData.quality - 1]
                                        : null),
                                (this.miniIcon.getComponent(cc.Sprite).spriteFrame = u.theIcons[0]),
                                (this.diamond.getComponent(cc.Sprite).spriteFrame = u.theIcons[1]),
                                (this.blockBg.getComponent(cc.Sprite).spriteFrame = u.theIcons[2]),
                                (this.icon.getComponent(cc.Sprite).spriteFrame = u.theIcons[3]),
                                (r = g.default.inst.drawingConf.getDrawingVoById(u.equipData.equipType)),
                                this.iconDraw.setSource(r.icon),
                                (this.iconDrawi = this.iconDraw.getComponent(cc.Sprite).spriteFrame),
                                null != this.iconDrawi
                                    ? [3, 2]
                                    : ((e = this), [4, m.DrawingController.inst.getDrawIcon(r.icon)])
                            );
                        case 1:
                            (e.iconDrawi = t.sent()), (t.label = 2);
                        case 2:
                            for (
                                l = g.default.inst.equipConf.getEquipQualityVo(u.equipData.id, 1),
                                    a = l.effect_desc.replace(
                                        "+d%",
                                        "</color><color=#63A820>+" +
                                            Math.floor(100 * l.effect_value) +
                                            "%</color><color=#96695E>"
                                    ),
                                    this.qualityLabs[0].string = "<b><color=#96695E>" + a + "</color></b>",
                                    o = 0;
                                o < this.qualityIcon.length;
                                o++
                            )
                                (i = g.default.inst.equipConf.getEquipQualityVo(u.equipData.id, o + 2)),
                                    u.equipData.quality >= o + 2
                                        ? (console.log("圆"),
                                          (this.qualityLabs[o + 1].node.color = cc.Color.WHITE),
                                          i.effect_desc &&
                                              ((n = i.effect_desc.replace(
                                                  "+d%",
                                                  "</color><color=#63A820>+" +
                                                      Math.floor(100 * i.effect_value) +
                                                      "%</color><color=#96695E>"
                                              )),
                                              (this.qualityLabs[o + 1].string =
                                                  "<b><color=#96695E>" + n + "</color></b>")),
                                          (this.qualityIcon[o].spriteFrame = this.qualityCircu[o]))
                                        : (console.log("方"),
                                          i.effect_desc &&
                                              ((i = i.effect_desc.replace(
                                                  "+d%",
                                                  "+" + Math.floor(100 * i.effect_value) + "%"
                                              )),
                                              (this.qualityLabs[o + 1].string = "<b>" + i + "</b>"),
                                              (this.qualityLabs[o + 1].node.color = cc.Color.GRAY)),
                                          (this.qualityIcon[o].spriteFrame = this.qualitySquare[o]));
                            return (
                                (this.lv.string =
                                    d.default.getFon().change(u.equipData.level) +
                                    "/" +
                                    d.default.getFon().change(u.quality.max_level)),
                                (this.btnDecom.active = 1 < u.equipData.level),
                                (this.status.getComponent(cc.Sprite).spriteFrame = this.statuss[u.equipData.status]),
                                (this.btnRemoving.getComponent(cc.Sprite).spriteFrame =
                                    this.statuss[u.equipData.status + 2]),
                                u.equipData.level == u.quality.max_level
                                    ? (this.showUI(!1),
                                      u.equipData.level < g.default.inst.equipConf.equipMaxLevel &&
                                      0 == u.equipData.status &&
                                      (null == (c = f.EquipController.inst.getHeroEquipByType(u.equipData.equipType)) ||
                                          u.equipData.quality > c.quality)
                                          ? (this.zb_ts1.active = !0)
                                          : (this.zb_ts1.active = !1))
                                    : (this.showUI(!0),
                                      (this.nameLab.node.active = !0),
                                      (this.tipLab.node.active = !1),
                                      (s = _.default.inst.gold),
                                      (r = !1),
                                      (l = g.default.inst.equipConf.getConsume(u.equipData.level + 1).gold),
                                      (r =
                                          s < l
                                              ? ((this.leftGoldLabel.node.color = cc.Color.RED), !1)
                                              : ((this.leftGoldLabel.node.color = cc.Color.WHITE), !0)),
                                      (this.leftGoldLabel.string = d.default.getFon().change(s)),
                                      (this.rightGoldLabel.string = d.default.getFon().change(l)),
                                      (a = m.DrawingController.inst.getDrawing(u.equipData.equipType)),
                                      (s = g.default.inst.equipConf.getConsume(u.equipData.level + 1).drawing_count),
                                      (l = !1),
                                      (l =
                                          a < s
                                              ? ((this.leftDrawLabel.node.color = cc.Color.RED), !1)
                                              : ((this.leftDrawLabel.node.color = cc.Color.WHITE), !0)),
                                      console.log(a, s),
                                      (this.leftDrawLabel.string = d.default.getFon().change(a)),
                                      (this.rightDrawLabel.string = d.default.getFon().change(s)),
                                      (this.zb_ts1.active =
                                          r && l && u.equipData.level < g.default.inst.equipConf.equipMaxLevel),
                                      (this.zb_ts2.active = this.zb_ts1.active),
                                      u.equipData.level < g.default.inst.equipConf.equipMaxLevel &&
                                      0 == u.equipData.status &&
                                      (null == (c = f.EquipController.inst.getHeroEquipByType(u.equipData.equipType)) ||
                                          u.equipData.quality > c.quality)
                                          ? (this.zb_ts3.active = !0)
                                          : (this.zb_ts3.active = !1)),
                                ECA.applyDetailed(this),
                                [2]
                            );
                    }
                });
            });
        }),
        (k.prototype.showUI = function (t) {
            (this.tipLab.node.active = !t),
                (this.btnUpgrade.active = t),
                (this.btnOneUpgrade.active = t),
                (this.upgradeNum.active = t);
        }),
        (k.prototype.onEvent = function () {
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    h.app.gui.closeUI(c.UIEnum.DetailedView);
                },
                this
            );
        }),
        (k.prototype.onDisable = function () {
            s.prototype.onDisable.call(this), this.bg.off(cc.Node.EventType.TOUCH_START);
        }),
        (k.prototype.onBtnCloseClick = function () {
            h.app.gui.closeUI(c.UIEnum.DetailedView);
        }),
        (k.prototype.onBtnDecomClick = function () {
            return a(this, void 0, void 0, function () {
                return p(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (this.param.theIcons[4] = this.iconDrawi),
                                [4, h.app.gui.openUI(c.UIEnum.DecomposeView, v.LayerEnum.TOP_LAYER, this.param)]
                            );
                        case 1:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (k.prototype.onBtnRemovingClick = function () {
            var t;
            0 == this.param.equipData.status
                ? (f.EquipController.inst.putOnEquip(this.param.equipData),
                  h.app.event.emit(y.EventType.Equips_Change),
                  (t = {name: this.attr_type2.string}),
                  h.app.event.emit(y.EventType.Equips_AddLable, t))
                : 1 == this.param.equipData.status &&
                  (f.EquipController.inst.takeOffEquip(this.param.equipData),
                  h.app.event.emit(y.EventType.Removing_Equips, this.param.equipData.equipType),
                  h.app.event.emit(y.EventType.Equips_Change)),
                h.app.event.emit(y.EventType.Home_Equip_Change_Page),
                h.app.gui.closeUI(c.UIEnum.DetailedView);
        }),
        (k.prototype.onBtnUpgradeClick = function () {
            f.EquipController.inst.levelUp(this.param.equipData) &&
                (h.app.sound.playEffect("装备升级音效"),
                h.app.event.emit(y.EventType.Equips_Change),
                h.app.event.emit(y.EventType.Drawings_Change),
                this.init(this.param),
                this.border.play());
        }),
        (k.prototype.onBtnOneUpgradeClick = function () {
            f.EquipController.inst.oneKeyLvUp(this.param.equipData) &&
                (h.app.sound.playEffect("装备升级音效"),
                h.app.event.emit(y.EventType.Equips_Change),
                h.app.event.emit(y.EventType.Drawings_Change),
                this.init(this.param),
                this.border.play());
        }),
        r([u.autoBind("cc.Animation", "zb_ck1/border")], k.prototype, "border", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/zb_ts1/zb_ts3")], k.prototype, "zb_ts3", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/zb_ts1/zb_ts2")], k.prototype, "zb_ts2", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/zb_ts1/zb_ts1")], k.prototype, "zb_ts1", void 0),
        r([u.autoBind("cc.Node", "zb_ck1")], k.prototype, "zb_ck1", void 0),
        r([u.autoBind("CCImage", "zb_ck1/bottom/upgradeNum/zb_tz1/iconDraw")], k.prototype, "iconDraw", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/bottom/upgradeNum")], k.prototype, "upgradeNum", void 0),
        r([u.autoBind("cc.Label", "zb_ck1/tipLab")], k.prototype, "tipLab", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/qualityBg")], k.prototype, "qualityBg", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/bottom/btn/btnRemoving/status")], k.prototype, "status", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/top/zb_szk0/attr_type1")], k.prototype, "attr_type1", void 0),
        r([u.autoBind("cc.Label", "zb_ck1/top/zb_szk0/attr_type1/attr_type2")], k.prototype, "attr_type2", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/top/blockBg")], k.prototype, "blockBg", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/top/blockBg/icon")], k.prototype, "icon", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/top/blockBg/diamond")], k.prototype, "diamond", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/top/blockBg/diamond/miniIcon")], k.prototype, "miniIcon", void 0),
        r([u.autoBind("cc.Node", "bg")], k.prototype, "bg", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/btnClose")], k.prototype, "btnClose", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/top/btnDecom")], k.prototype, "btnDecom", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/bottom/btn/btnRemoving")], k.prototype, "btnRemoving", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/bottom/btn/btnUpgrade")], k.prototype, "btnUpgrade", void 0),
        r([u.autoBind("cc.Node", "zb_ck1/bottom/btn/btnOneUpgrade")], k.prototype, "btnOneUpgrade", void 0),
        r([t([cc.SpriteFrame])], k.prototype, "bgs", void 0),
        r([t([cc.SpriteFrame])], k.prototype, "statuss", void 0),
        r([t([cc.SpriteFrame])], k.prototype, "qualityBgs", void 0),
        r([t([cc.SpriteFrame])], k.prototype, "qualityCircu", void 0),
        r([t([cc.SpriteFrame])], k.prototype, "qualitySquare", void 0),
        r([t([cc.Sprite])], k.prototype, "qualityIcon", void 0),
        r([t([cc.RichText])], k.prototype, "qualityLabs", void 0),
        r([t(cc.Label)], k.prototype, "nameLab", void 0),
        r([t(cc.Label)], k.prototype, "lv", void 0),
        r([t(cc.Label)], k.prototype, "value", void 0),
        r([t(cc.Label)], k.prototype, "introduceLab", void 0),
        r([t(cc.Label)], k.prototype, "leftGoldLabel", void 0),
        r([t(cc.Label)], k.prototype, "rightGoldLabel", void 0),
        r([t(cc.Label)], k.prototype, "leftDrawLabel", void 0),
        r([t(cc.Label)], k.prototype, "rightDrawLabel", void 0),
        r([e], k));
function k() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t.border = null),
        (t.zb_ts3 = null),
        (t.zb_ts2 = null),
        (t.zb_ts1 = null),
        (t.zb_ck1 = null),
        (t.iconDraw = null),
        (t.upgradeNum = null),
        (t.tipLab = null),
        (t.qualityBg = null),
        (t.status = null),
        (t.attr_type1 = null),
        (t.attr_type2 = null),
        (t.blockBg = null),
        (t.icon = null),
        (t.diamond = null),
        (t.miniIcon = null),
        (t.bg = null),
        (t.btnClose = null),
        (t.btnDecom = null),
        (t.btnRemoving = null),
        (t.btnUpgrade = null),
        (t.btnOneUpgrade = null),
        (t.bgs = []),
        (t.statuss = []),
        (t.qualityBgs = []),
        (t.qualityCircu = []),
        (t.qualitySquare = []),
        (t.qualityIcon = []),
        (t.qualityLabs = []),
        (t.nameLab = null),
        (t.lv = null),
        (t.value = null),
        (t.introduceLab = null),
        (t.leftGoldLabel = null),
        (t.rightGoldLabel = null),
        (t.leftDrawLabel = null),
        (t.rightDrawLabel = null),
        (t.param = null),
        (t.iconDrawi = null),
        t
    );
}
o.default = e;
