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
    h = t("ConfData"),
    d = t("Font"),
    f = t("EquipController"),
    y = t("App"),
    g = t("CloseUI"),
    m = t("LayerMgr"),
    _ = t("MultipleController"),
    v = t("GuideController"),
    b = t("TrackType"),
    w = cc._decorator,
    e = w.ccclass,
    t = w.property,
    e =
        (w.inspector,
        (l = c.default),
        i(C, l),
        (C.prototype.initView = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return _.default.inst.Breathing(this.zy_hd, 1.2, 1, 0.9), this.init(), (this.isInit = !0), [2];
                });
            });
        }),
        (C.prototype.show = function () {}),
        (C.prototype.updateView = function () {}),
        (C.prototype.init = function () {
            return a(this, void 0, void 0, function () {
                var e, o;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (this.miniIcon.getComponent(cc.Sprite).spriteFrame =
                                    this.miniIcons[this.equipData.equipType - 1]),
                                (this.diamond.getComponent(cc.Sprite).spriteFrame =
                                    this.diamonds[this.equipData.quality - 1]),
                                (this.btnBg.getComponent(cc.Sprite).spriteFrame = this.bgs[this.equipData.quality - 1]),
                                (e = this.icon.getComponent(cc.Sprite)),
                                [4, f.EquipController.inst.getEquipIcon(this.quality.icon)]
                            );
                        case 1:
                            return (
                                (e.spriteFrame = t.sent()),
                                (this.theIcons[0] = this.miniIcon.getComponent(cc.Sprite).spriteFrame),
                                (this.theIcons[1] = this.diamond.getComponent(cc.Sprite).spriteFrame),
                                (this.theIcons[2] = this.btnBg.getComponent(cc.Sprite).spriteFrame),
                                (this.theIcons[3] = this.icon.getComponent(cc.Sprite).spriteFrame),
                                (this.lv.string = d.default.getFon().change(this.equipData.level)),
                                0 == this.equipData.status
                                    ? (null ==
                                          (o = f.EquipController.inst.getHeroEquipByType(this.equipData.equipType)) ||
                                      this.equipData.quality > o.quality
                                          ? (this.zy_hd.active = !0)
                                          : (this.zy_hd.active = !1),
                                      (this.zb_ts1.active = !1))
                                    : ((this.zy_hd.active = !1),
                                      (this.zb_ts1.active = f.EquipController.inst.checkLvUp(this.equipData, !1))),
                                [2]
                            );
                    }
                });
            });
        }),
        (C.prototype.setData = function (t) {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return (
                        (this.equipData = t),
                        (this.quality = h.default.inst.equipConf.getEquipQualityVo(
                            this.equipData.id,
                            this.equipData.quality
                        )),
                        this.isInit && (this.init(), (this.node.active = !0)),
                        [2]
                    );
                });
            });
        }),
        (C.prototype.onBtnBgClick = function () {
            var o;
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, y.app.gui.openUI(u.UIEnum.WaitingView, m.LayerEnum.TOP_LAYER)];
                        case 1:
                            return (
                                t.sent(),
                                g.default.inst.closeNode(),
                                (e = h.default.inst.equipConf.getEquipVo(this.equipData.id)),
                                (e = {
                                    Equip: e,
                                    quality: this.quality,
                                    theIcons: this.theIcons,
                                    equipData: this.equipData
                                }),
                                4 == (null === (o = v.GuideController.guideVo) || void 0 === o ? void 0 : o.idx) &&
                                    v.GuideController.guideNext(),
                                [4, y.app.gui.openUI(u.UIEnum.DetailedView, m.LayerEnum.VIEW_LAYER, e)]
                            );
                        case 2:
                            return (
                                t.sent(),
                                y.app.gui.closeUI(u.UIEnum.WaitingView),
                                null === (o = y.app.track) || void 0 === o || o.trackEvent(b.TrackType.Equip_Click),
                                [2]
                            );
                    }
                });
            });
        }),
        r([p.autoBind("cc.Node", "btnBg/zy_hd")], C.prototype, "zy_hd", void 0),
        r([p.autoBind("cc.Node", "btnBg/zb_ts1")], C.prototype, "zb_ts1", void 0),
        r([p.autoBind("cc.Node", "btnBg/icon")], C.prototype, "icon", void 0),
        r([p.autoBind("cc.Node", "btnBg")], C.prototype, "btnBg", void 0),
        r([p.autoBind("cc.Node", "btnBg/diamond")], C.prototype, "diamond", void 0),
        r([p.autoBind("cc.Node", "btnBg/diamond/miniIcon")], C.prototype, "miniIcon", void 0),
        r([t(cc.Label)], C.prototype, "lv", void 0),
        r([t([cc.SpriteFrame])], C.prototype, "bgs", void 0),
        r([t([cc.SpriteFrame])], C.prototype, "diamonds", void 0),
        r([t([cc.SpriteFrame])], C.prototype, "miniIcons", void 0),
        r([e], C));
function C() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.zy_hd = null),
        (t.zb_ts1 = null),
        (t.icon = null),
        (t.btnBg = null),
        (t.diamond = null),
        (t.miniIcon = null),
        (t.lv = null),
        (t.bgs = []),
        (t.diamonds = []),
        (t.miniIcons = []),
        (t.equipData = null),
        (t.quality = null),
        (t.theIcons = []),
        (t.isInit = !1),
        t
    );
}
o.default = e;
