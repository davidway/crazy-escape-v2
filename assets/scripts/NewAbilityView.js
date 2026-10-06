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
    h = t("MultipleController"),
    d = t("App"),
    f = t("ShareDataController"),
    y = t("CCImage"),
    g = t("GuideGroup"),
    m = t("GuideController"),
    _ = t("LayerMgr"),
    v = cc._decorator,
    e = v.ccclass,
    t = v.property,
    e =
        (v.inspector,
        (l = c.default),
        i(b, l),
        (b.prototype.initView = function () {
            this.showNode.children.forEach(function (t) {
                (t.active = !1), h.default.inst.rotate(t.getChildByName("blockBg"), 3);
            });
        }),
        (b.prototype.updateView = function () {
            var t = this;
            d.app.sound.playEffect("新功能解锁弹窗的弹出音效"), this.bg.off(cc.Node.EventType.TOUCH_START);
            var e = f.default.inst.NewAbilityData;
            if (((this.describeimage.active = !1), console.log(f.default.inst.NewAbilityData), 0 != e.length))
                switch ((e[0].guide > g.GuideGroup.None && (this.guideValue = e[0].guide), e[0].type)) {
                    case 1:
                        this.init1(f.default.inst.NewAbilityData.shift());
                        break;
                    case 2:
                        this.init2(f.default.inst.NewAbilityData.shift());
                        break;
                    case 3:
                        this.init3(f.default.inst.NewAbilityData.shift());
                }
            h.default.inst.eject(this.panel, this.bg, function () {
                t.onEvent();
            });
        }),
        (b.prototype.show = function () {}),
        (b.prototype.init1 = function (t) {
            var e;
            null != t &&
                (this.showNode.children.forEach(function (t) {
                    t.active = !1;
                }),
                (this.showNode.children[0].active = !0),
                (this.showNode.children[0].scale = 1),
                (this.showNode.children[0].getChildByName("icon1").active = !0),
                (this.showNode.children[0].getChildByName("icon2").active = !1),
                (this.showNode.children[0].getChildByName("describeLab").active = !0),
                (this.showNode.children[0].getChildByName("describeLab").getComponent(cc.Label).string = t.describe),
                (this.lc_btz5.getComponent(cc.Sprite).spriteFrame = this.typeName[t.type - 1]),
                t.icon
                    ? (this.showNode.children[0].getChildByName("icon1").getComponent(cc.Sprite).spriteFrame = t.icon)
                    : t.iconURL &&
                      ((e = this.showNode.children[0].getChildByName("icon2")),
                      t.scale && (e.scale = t.scale),
                      (this.showNode.children[0].getChildByName("icon1").active = !1),
                      (e.active = !0),
                      e.getComponent(y.default).setSource(t.iconURL)));
        }),
        (b.prototype.init2 = function (t) {
            null != t &&
                (this.showNode.children.forEach(function (t) {
                    t.active = !1;
                }),
                (this.showNode.children[0].active = !0),
                (this.showNode.children[0].scale = 1),
                (this.showNode.children[0].getChildByName("describeLab").active = !1),
                (this.showNode.children[0].getChildByName("icon1").active = !1),
                (this.showNode.children[0].getChildByName("icon2").active = !0),
                (this.showNode.children[0].getChildByName("icon2").scale = 0.25),
                (this.describeimage.active = !0),
                (this.lc_btz5.getComponent(cc.Sprite).spriteFrame = this.typeName[t.type - 1]),
                this.showNode.children[0].getChildByName("icon2").getComponent(y.default).setSource(t.iconURL),
                this.describeimage.getComponent(y.default).setSource(t.describeURL));
        }),
        (b.prototype.init3 = function (e) {
            return a(this, void 0, void 0, function () {
                var t;
                return s(this, function () {
                    if (null != e)
                        for (
                            console.log(e),
                                this.showNode.children.forEach(function (t) {
                                    t.active = !1;
                                }),
                                this.lc_btz5.getComponent(cc.Sprite).spriteFrame = this.typeName[e.type - 1],
                                t = 0;
                            t < e.skillDatas.length;
                            t++
                        )
                            (this.showNode.children[t].active = !0),
                                (this.showNode.children[t].scale = 0.75),
                                (this.showNode.children[t].getChildByName("icon1").getComponent(cc.Sprite).spriteFrame =
                                    e.skillDatas[t].icon),
                                (this.showNode.children[t].getChildByName("icon1").active = !0),
                                (this.showNode.children[t].getChildByName("icon2").active = !1),
                                (this.showNode.children[0].getChildByName("describeLab").active = !0),
                                (this.showNode.children[t].getChildByName("describeLab").getComponent(cc.Label).string =
                                    e.skillDatas[t].name);
                    return [2];
                });
            });
        }),
        (b.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    t.closeView();
                },
                this
            );
        }),
        (b.prototype.onDisable = function () {
            l.prototype.onDisable.call(this), (f.default.inst.inEject = !1), this.bg.off(cc.Node.EventType.TOUCH_START);
        }),
        (b.prototype.closeView = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return 0 == f.default.inst.NewAbilityData.length ? [3, 1] : (this.updateView(), [3, 3]);
                        case 1:
                            return [4, this.showGuide()];
                        case 2:
                            t.sent(), d.app.gui.closeUI(u.UIEnum.NewAbilityView), (t.label = 3);
                        case 3:
                            return [2];
                    }
                });
            });
        }),
        (b.prototype.showGuide = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                console.log("解锁指引:", this.guideValue),
                                0 < this.guideValue ? [4, m.GuideController.initGroup(this.guideValue)] : [3, 4]
                            );
                        case 1:
                            return (
                                t.sent(),
                                this.guideValue == g.GuideGroup.Skin
                                    ? [3, 2]
                                    : (m.GuideController.guideNext(), m.GuideController.guideStart(), [3, 4])
                            );
                        case 2:
                            return [4, d.app.gui.openUI(u.UIEnum.GuideSkinView, _.LayerEnum.VIEW_LAYER)];
                        case 3:
                            t.sent(), (t.label = 4);
                        case 4:
                            return (this.guideValue = g.GuideGroup.None), [2];
                    }
                });
            });
        }),
        (b.prototype.onBtnCloseClick = function () {
            this.closeView();
        }),
        r([p.autoBind("cc.Node", "panel/showNode/block")], b.prototype, "block", void 0),
        r([p.autoBind("cc.Node", "panel/showNode")], b.prototype, "showNode", void 0),
        r([p.autoBind("cc.Node", "panel/describeimage")], b.prototype, "describeimage", void 0),
        r([p.autoBind("cc.Node", "bg")], b.prototype, "bg", void 0),
        r([p.autoBind("cc.Node", "panel")], b.prototype, "panel", void 0),
        r([p.autoBind("cc.Node", "panel/lc_btz5")], b.prototype, "lc_btz5", void 0),
        r([p.autoBind("cc.Node", "panel/btnClose")], b.prototype, "btnClose", void 0),
        r([t([cc.SpriteFrame])], b.prototype, "typeName", void 0),
        r([e], b));
function b() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.block = null),
        (t.showNode = null),
        (t.describeimage = null),
        (t.bg = null),
        (t.panel = null),
        (t.lc_btz5 = null),
        (t.btnClose = null),
        (t.typeName = []),
        (t.guideValue = g.GuideGroup.None),
        t
    );
}
o.default = e;
