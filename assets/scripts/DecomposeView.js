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
    s =
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
var l,
    c = t("BasePanel"),
    u = t("UIEnum"),
    p = t("decorator"),
    h = t("App"),
    d = t("Font"),
    f = t("ConfData"),
    y = t("EquipController"),
    g = t("EventTypes"),
    m = t("LayerMgr"),
    _ = t("MultipleController"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (l = c.default),
        i(v, l),
        (v.prototype.initView = function () {
            this.onEvent();
        }),
        (v.prototype.updateView = function () {
            var t = this;
            this.init(this.param),
                _.default.inst.eject(this.zb_ck1, this.bg, function () {
                    t.onEvent();
                });
        }),
        (v.prototype.show = function (t) {
            this.param = t;
        }),
        (v.prototype.init = function (t) {
            (this.miniIcon.getComponent(cc.Sprite).spriteFrame = t.theIcons[0]),
                (this.diamond.getComponent(cc.Sprite).spriteFrame = t.theIcons[1]),
                (this.blockBg.getComponent(cc.Sprite).spriteFrame = t.theIcons[2]),
                (this.icon.getComponent(cc.Sprite).spriteFrame = t.theIcons[3]),
                (this.priMiniIcon.getComponent(cc.Sprite).spriteFrame = t.theIcons[0]),
                (this.priDiamond.getComponent(cc.Sprite).spriteFrame = t.theIcons[1]),
                (this.priEquip.getComponent(cc.Sprite).spriteFrame = t.theIcons[2]),
                (this.priIcon.getComponent(cc.Sprite).spriteFrame = t.theIcons[3]),
                (this.lv.string = d.default.getFon().change(t.equipData.level)),
                (this.drawIcon.getComponent(cc.Sprite).spriteFrame = t.theIcons[4]);
            t = f.default.inst.equipConf.getConsume(t.equipData.level);
            (this.DrawNumLab.string = "x" + d.default.getFon().change(t.total_drawing)),
                (this.goldNumLab.string = "x" + d.default.getFon().change(t.total_gold));
        }),
        (v.prototype.onEvent = function () {
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    h.app.gui.closeUI(u.UIEnum.DecomposeView);
                },
                this
            );
        }),
        (v.prototype.onDisable = function () {
            l.prototype.onDisable.call(this), this.bg.off(cc.Node.EventType.TOUCH_START);
        }),
        (v.prototype.onBtnCloseClick = function () {
            h.app.gui.closeUI(u.UIEnum.DecomposeView);
        }),
        (v.prototype.onBtnDecomClick = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                y.EquipController.inst.levelDown(this.param.equipData),
                                h.app.event.emit(g.EventType.Equips_Change),
                                h.app.event.emit(g.EventType.Drawings_Change),
                                h.app.gui.closeUI(u.UIEnum.DecomposeView),
                                h.app.gui.closeUI(u.UIEnum.DetailedView),
                                (e = {type: 0, node: this.introduce, iconType: 0}),
                                [4, h.app.gui.openUI(u.UIEnum.ReturnMaterialView, m.LayerEnum.TOP_LAYER, e)]
                            );
                        case 1:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        r([p.autoBind("cc.Node", "zb_ck1")], v.prototype, "zb_ck1", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/middle/introduce")], v.prototype, "introduce", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/middle/introduce/Layout/priEquip")], v.prototype, "priEquip", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/middle/introduce/Layout/priEquip/priIcon")], v.prototype, "priIcon", void 0),
        r(
            [p.autoBind("cc.Node", "zb_ck1/middle/introduce/Layout/priEquip/priDiamond")],
            v.prototype,
            "priDiamond",
            void 0
        ),
        r(
            [p.autoBind("cc.Node", "zb_ck1/middle/introduce/Layout/priEquip/priDiamond/priMiniIcon")],
            v.prototype,
            "priMiniIcon",
            void 0
        ),
        r(
            [p.autoBind("cc.Label", "zb_ck1/middle/introduce/Layout/gold/btnBg/goldNumLab")],
            v.prototype,
            "goldNumLab",
            void 0
        ),
        r(
            [p.autoBind("cc.Node", "zb_ck1/middle/introduce/Layout/Draw/btnBg/drawIcon")],
            v.prototype,
            "drawIcon",
            void 0
        ),
        r(
            [p.autoBind("cc.Label", "zb_ck1/middle/introduce/Layout/Draw/btnBg/DrawNumLab")],
            v.prototype,
            "DrawNumLab",
            void 0
        ),
        r([p.autoBind("cc.Node", "zb_ck1/bottom/btn/btnDecom")], v.prototype, "btnDecom", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/top/blockBg")], v.prototype, "blockBg", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/top/blockBg/icon")], v.prototype, "icon", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/top/blockBg/diamond")], v.prototype, "diamond", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/top/blockBg/diamond/miniIcon")], v.prototype, "miniIcon", void 0),
        r([p.autoBind("cc.Label", "zb_ck1/top/blockBg/Layout/lv")], v.prototype, "lv", void 0),
        r([p.autoBind("cc.Node", "bg")], v.prototype, "bg", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/btnClose")], v.prototype, "btnClose", void 0),
        r([t], v));
function v() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.zb_ck1 = null),
        (t.introduce = null),
        (t.priEquip = null),
        (t.priIcon = null),
        (t.priDiamond = null),
        (t.priMiniIcon = null),
        (t.goldNumLab = null),
        (t.drawIcon = null),
        (t.DrawNumLab = null),
        (t.btnDecom = null),
        (t.blockBg = null),
        (t.icon = null),
        (t.diamond = null),
        (t.miniIcon = null),
        (t.lv = null),
        (t.bg = null),
        (t.btnClose = null),
        (t.param = null),
        t
    );
}
o.default = t;
