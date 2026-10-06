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
    l =
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
    c = t("BasePanel"),
    u = t("UIEnum"),
    p = t("decorator"),
    h = t("Font"),
    d = t("CloseUI"),
    f = t("ConfData"),
    y = t("App"),
    g = t("LayerMgr"),
    m = t("Prop"),
    _ = t("EquipController"),
    v = t("ResMgr"),
    b = t("DrawingController"),
    w = ["武器", "盔甲", "项链", "腰带", "手套", "战靴"],
    C = cc._decorator,
    e = C.ccclass,
    t = C.property,
    e =
        (C.inspector,
        (s = c.default),
        i(k, s),
        (k.prototype.setData = function (t, e, o, n) {
            void 0 === e && (e = m.Prop.drawing),
                void 0 === o && (o = !0),
                (this.showLayout = n = void 0 === n ? 1 : n),
                (this._data = t),
                (this.type = e) == m.Prop.drawing
                    ? (this.drawingData = null == t ? void 0 : t.draw)
                    : e == m.Prop.equip
                    ? (this.profitEquip = null == t ? void 0 : t.equip)
                    : (this.profitNum = null == t ? void 0 : t.num),
                this.isInit && this.updateView();
        }),
        (k.prototype.initView = function () {
            this.onEvent(), (this.isInit = !0);
        }),
        (k.prototype.updateView = function () {
            this.init();
        }),
        (k.prototype.onEvent = function () {
            this.node.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    d.default.inst.closeNode();
                },
                this
            );
        }),
        (k.prototype.init = function () {
            return a(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            switch (
                                ((this.diamond.active = !1),
                                (this.miniIcon.active = this.diamond.active),
                                (e = 0),
                                (o = ""),
                                (n = null),
                                (this.Layout1.active = !1),
                                (this.Layout2.active = !1),
                                this.type)
                            ) {
                                case m.Prop.equip:
                                    return [3, 1];
                                case m.Prop.drawing:
                                    return [3, 3];
                                case m.Prop.gold:
                                    return [3, 5];
                                case m.Prop.Exp:
                                    return [3, 6];
                                case m.Prop.randomEquip:
                                    return [3, 7];
                                case m.Prop.randomDrawing:
                                    return [3, 10];
                                case m.Prop.Gem:
                                    return [3, 12];
                                case m.Prop.gene:
                                    return [3, 13];
                                case m.Prop.energy:
                                    return [3, 14];
                                case m.Prop.randomGreenEquip:
                                    return [3, 15];
                                case m.Prop.randomBlueEquip:
                                    return [3, 18];
                                case m.Prop.randomPurpleEquip:
                                    return [3, 21];
                                case m.Prop.randomRedeEquip:
                                    return [3, 24];
                            }
                            return [3, 27];
                        case 1:
                            return (
                                (this.icon.node.scale = 0.5),
                                (this.diamond.active = !0),
                                (this.miniIcon.active = this.diamond.active),
                                (this.diamond.getComponent(cc.Sprite).spriteFrame =
                                    this.diamonds[this.profitEquip.quality - 1]),
                                (this.miniIcon.getComponent(cc.Sprite).spriteFrame =
                                    this.miniIcons[this.profitEquip.equipType - 1]),
                                (i = f.default.inst.equipConf.getEquipQualityVo(
                                    this.profitEquip.id,
                                    this.profitEquip.quality
                                )),
                                (e = i.quality - 1),
                                [4, _.EquipController.inst.getEquipIcon(i.icon)]
                            );
                        case 2:
                            return (n = t.sent()), (o = "1"), (this.text = i.name), [3, 27];
                        case 3:
                            return (
                                (this.icon.node.scale = 1.3),
                                (o = "" + h.default.getFon().change(this.drawingData.quantity, !1)),
                                (r = f.default.inst.drawingConf.getDrawingVoById(this.drawingData.id)),
                                [4, b.DrawingController.inst.getDrawIcon(r.icon)]
                            );
                        case 4:
                            return (n = t.sent()), (this.text = w[r.type - 1]), (e = 0), [3, 27];
                        case 5:
                            return (
                                (o = "" + h.default.getFon().change(this.profitNum, !1)),
                                (e = 2),
                                (n = this.icons[0]),
                                (this.icon.node.scale = 2),
                                [3, 27]
                            );
                        case 6:
                            return (
                                (o = "" + h.default.getFon().change(this.profitNum, !1)),
                                (e = 2),
                                (n = this.icons[1]),
                                (this.icon.node.scale = 1.5),
                                [3, 27]
                            );
                        case 7:
                            return [4, this.randomEquip()];
                        case 8:
                            return (o = t.sent().numLab), [4, this.randomEquip()];
                        case 9:
                            return (n = t.sent().icons), (e = 0), [3, 27];
                        case 10:
                            return (
                                (o = "" + h.default.getFon().change(this.profitNum, !1)),
                                (e = 0),
                                (a = f.default.inst.drawingConf.getDrawingVoById(7)),
                                [4, v.default.inst.getAsset(a.icon, cc.Texture2D)]
                            );
                        case 11:
                            return (s = t.sent()) && (n = new cc.SpriteFrame(s)), (this.icon.node.scale = 1.3), [3, 27];
                        case 12:
                            return (
                                (o = "" + h.default.getFon().change(this.profitNum, !1)),
                                (e = 2),
                                (n = this.icons[2]),
                                (this.icon.node.scale = 2),
                                [3, 27]
                            );
                        case 13:
                            return (
                                (o = "" + h.default.getFon().change(this.profitNum, !1)),
                                (e = 2),
                                (n = this.icons[3]),
                                (this.icon.node.scale = 0.9),
                                [3, 27]
                            );
                        case 14:
                            return (
                                (o = "" + h.default.getFon().change(this.profitNum, !1)),
                                (e = 2),
                                (n = this.icons[4]),
                                (this.icon.node.scale = 2),
                                [3, 27]
                            );
                        case 15:
                            return [4, this.randomEquip()];
                        case 16:
                            return (o = t.sent().numLab), [4, this.randomEquip()];
                        case 17:
                            return (n = t.sent().icons), (e = 1), [3, 27];
                        case 18:
                            return [4, this.randomEquip()];
                        case 19:
                            return (o = t.sent().numLab), [4, this.randomEquip()];
                        case 20:
                            return (n = t.sent().icons), (e = 2), [3, 27];
                        case 21:
                            return [4, this.randomEquip()];
                        case 22:
                            return (o = t.sent().numLab), [4, this.randomEquip()];
                        case 23:
                            return (n = t.sent().icons), [(e = 3), 27];
                        case 24:
                            return [4, this.randomEquip()];
                        case 25:
                            return (o = t.sent().numLab), [4, this.randomEquip()];
                        case 26:
                            return (n = t.sent().icons), (e = 4), [3, 27];
                        case 27:
                            return (
                                null != n && (this.icon.getComponent(cc.Sprite).spriteFrame = n),
                                (s = null),
                                (this.icon.node.y = 12),
                                1 == this.showLayout
                                    ? ((this.Layout1.active = !0), (s = this.Layout1.getChildByName("num")))
                                    : 2 == this.showLayout
                                    ? ((this.Layout2.active = !0), (s = this.Layout2.getChildByName("num")))
                                    : 3 == this.showLayout &&
                                      ((this.Layout1.active = !1), (this.Layout2.active = !1), (this.icon.node.y = 3)),
                                o && s && (s.getComponent(cc.Label).string = o),
                                (this.btnBg.getComponent(cc.Sprite).spriteFrame = this.btnBgs[e]),
                                [2]
                            );
                    }
                });
            });
        }),
        (k.prototype.randomEquip = function () {
            return a(this, void 0, void 0, function () {
                var e, o, n;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = this._data.EquipType),
                                this.equip0.has(e) ? [3, 2] : [4, v.default.inst.getAsset("equips/" + e, cc.Texture2D)]
                            );
                        case 1:
                            (n = t.sent()), this.equip0.set(e, n), (t.label = 2);
                        case 2:
                            return (
                                (o = null),
                                (n = "" + h.default.getFon().change(this.profitNum)),
                                this.equip0.has(e) && (o = new cc.SpriteFrame(this.equip0.get(e))),
                                (this.icon.node.scale = 1.3),
                                [2, {icons: o, numLab: n}]
                            );
                    }
                });
            });
        }),
        (k.prototype.onBtnBgClick = function () {
            return a(this, void 0, void 0, function () {
                var e, o;
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                d.default.inst.closeNode(),
                                (e = this.node.convertToWorldSpaceAR(cc.v2(0, this.node.height / 2 + 10))),
                                (o = this._data.EquipType),
                                (o = {text: this.text, pos: e, type: this.type, EquipType: o}),
                                [4, y.app.gui.openUI(u.UIEnum.DescribeBlackView, g.LayerEnum.VIEW_LAYER, o)]
                            );
                        case 1:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        r([p.autoBind("cc.Node", "btnBg/Layout1")], k.prototype, "Layout1", void 0),
        r([p.autoBind("cc.Node", "btnBg/Layout2")], k.prototype, "Layout2", void 0),
        r([p.autoBind("cc.Node", "btnBg/Layout1/num1"), p.autoBind("cc.Node", "btnBg")], k.prototype, "btnBg", void 0),
        r([p.autoBind("CCImage", "btnBg/icon")], k.prototype, "icon", void 0),
        r([p.autoBind("cc.Node", "btnBg/diamond")], k.prototype, "diamond", void 0),
        r([p.autoBind("cc.Node", "btnBg/miniIcon")], k.prototype, "miniIcon", void 0),
        r([t([cc.SpriteFrame])], k.prototype, "btnBgs", void 0),
        r([t([cc.SpriteFrame])], k.prototype, "icons", void 0),
        r([t([cc.SpriteFrame])], k.prototype, "miniIcons", void 0),
        r([t([cc.SpriteFrame])], k.prototype, "diamonds", void 0),
        r([e], k));
function k() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t.Layout1 = null),
        (t.Layout2 = null),
        (t.btnBg = null),
        (t.icon = null),
        (t.diamond = null),
        (t.miniIcon = null),
        (t.btnBgs = []),
        (t.icons = []),
        (t.miniIcons = []),
        (t.diamonds = []),
        (t.type = m.Prop.drawing),
        (t.drawingData = null),
        (t.profitEquip = null),
        (t.profitNum = 0),
        (t.text = ""),
        (t.isInit = !1),
        (t.equip0 = new Map()),
        (t.showLayout = 0),
        (t._data = null),
        t
    );
}
o.default = e;
