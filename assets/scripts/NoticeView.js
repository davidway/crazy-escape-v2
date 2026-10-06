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
    f = t("ConfData"),
    y = t("NoticeController"),
    g = t("btnDrawBlock"),
    m = t("EverydayRewardController"),
    _ = t("LayerMgr"),
    v = t("DebugView"),
    b = t("GameSetting"),
    w = cc._decorator,
    e = w.ccclass,
    t = w.property,
    e =
        (w.inspector,
        (l = c.default),
        i(C, l),
        (C.prototype.initView = function () {
            y.default.inst.setPrompt(), (y.default.inst.isEject = !0), this.init();
        }),
        (C.prototype.updateView = function () {
            var t = this;
            (this.test.active = v.default.showtestBtn),
                h.default.inst.eject(this.panel, this.bg, function () {
                    t.onEvent();
                }),
                this.showContent();
        }),
        (C.prototype.init = function () {
            var o = this;
            this._NoticeData = y.default.inst.NoticeData;
            var t = y.default.inst.text;
            (this._text1 = t[0]), (this._text2 = t[1]), (this._text3 = t[2]);
            t = f.default.inst.PrizeConf.btnDrawBlockPre;
            (this._renew = y.default.inst.renew),
                (this._showContent = this._renew),
                0 == b.GameSetting.inst.use_foresee &&
                    ((this._showContent = 1), (this.btnOk.active = 1 == this._renew)),
                t && (this._btnDrawBlock = t),
                (this.text2.node.active = 0 == this._showContent);
            t = y.default.inst.reward;
            0 == t.length
                ? (this.pic_kuang.active = !1)
                : t.forEach(function (t, e) {
                      o.rewardNode.children[e]
                          ? o.rewardNode.children[e].getComponent(g.default).setData(t.profit, t.type)
                          : ((e = cc.instantiate(o._btnDrawBlock)).getComponent(g.default).setData(t.profit, t.type),
                            (e.parent = o.rewardNode));
                  }),
                this.setBtn();
        }),
        (C.prototype.showContent = function () {
            var t = this._text1.replace(/%n/g, this._wrap + "       ");
            (this.text1.string = "       " + t), (this.text2.string = "" + this._text2);
            t = this._text3.replace(/%n/g, this._wrap);
            this.text3.string = "" + t;
        }),
        (C.prototype.setBtn = function () {
            var t = this._renew,
                e = y.default.inst.reward;
            1 == b.GameSetting.inst.use_foresee &&
                (0 == e.length && 1 == this._showContent ? (this.btnOk.active = !1) : (this.btnOk.active = !0)),
                (this.okBg.getComponent(cc.Sprite).spriteFrame = this.okIconSpr[t + 2]),
                1 == this._NoticeData.reward && (t = 4),
                (this.okIcon.getComponent(cc.Sprite).spriteFrame = this.okIconSpr[t]),
                this.setGray(this.btnOk, 1 == this._NoticeData.reward),
                this.interactable(this.btnOk, 0 == this._NoticeData.reward);
        }),
        (C.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    t.cloesView();
                },
                this
            ),
                this.panel.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        l.prototype.cloesView.call(t);
                    },
                    this
                );
        }),
        (C.prototype.cloesView = function () {
            return a(this, void 0, Promise, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return m.EverydayRewardController.inst.isEject
                                ? [3, 3]
                                : [4, d.app.gui.openUI(u.UIEnum.WaitingView, _.LayerEnum.TOP_LAYER)];
                        case 1:
                            return t.sent(), [4, d.app.gui.openUI(u.UIEnum.EverydayRewardView, _.LayerEnum.VIEW_LAYER)];
                        case 2:
                            t.sent(), d.app.gui.closeUI(u.UIEnum.WaitingView), (t.label = 3);
                        case 3:
                            return (
                                this.bg.off(cc.Node.EventType.TOUCH_START),
                                this.panel.off(cc.Node.EventType.TOUCH_START),
                                l.prototype.cloesView.call(this),
                                d.app.gui.closeUI(u.UIEnum.NoticeView),
                                [2]
                            );
                    }
                });
            });
        }),
        (C.prototype.getReward = function () {
            console.log("领取"), y.default.inst.getReward(), (this._NoticeData.reward = 1), this.setBtn();
        }),
        (C.prototype.onBtnCloseClick = function () {
            this.cloesView();
        }),
        (C.prototype.onBtnOkClick = function () {
            this.text2.node.active
                ? this.cloesView()
                : 0 == this._NoticeData.reward && 1 == this._renew && this.getReward();
        }),
        (C.prototype.onBtnSetClick = function () {
            var t = this.EditBox.string;
            y.default.inst.setNoticeVersion(t), this.initView(), this.showContent();
        }),
        r([p.autoBind("cc.Node", "panel/jn_dk/pic_kuang")], C.prototype, "pic_kuang", void 0),
        r([p.autoBind("cc.Node", "test/btnSet")], C.prototype, "btnSet", void 0),
        r([p.autoBind("cc.EditBox", "test/EditBox")], C.prototype, "EditBox", void 0),
        r([p.autoBind("cc.Node", "test")], C.prototype, "test", void 0),
        r([p.autoBind("cc.Node", "panel/btnOk/okBg")], C.prototype, "okBg", void 0),
        r([p.autoBind("cc.Node", "panel/btnOk/okIcon")], C.prototype, "okIcon", void 0),
        r([p.autoBind("cc.Node", "panel/btnOk")], C.prototype, "btnOk", void 0),
        r([p.autoBind("cc.Node", "panel/rewardNode")], C.prototype, "rewardNode", void 0),
        r([p.autoBind("cc.Label", "panel/ScrollView3/view/textNode/text1")], C.prototype, "text1", void 0),
        r([p.autoBind("cc.Label", "panel/ScrollView3/view/textNode/text2")], C.prototype, "text2", void 0),
        r([p.autoBind("cc.Label", "panel/ScrollView3/view/textNode/text3")], C.prototype, "text3", void 0),
        r([p.autoBind("cc.Node", "bg")], C.prototype, "bg", void 0),
        r([p.autoBind("cc.Node", "panel")], C.prototype, "panel", void 0),
        r([p.autoBind("cc.Node", "panel/btnClose")], C.prototype, "btnClose", void 0),
        r([t([cc.SpriteFrame])], C.prototype, "okIconSpr", void 0),
        r([e], C));
function C() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.pic_kuang = null),
        (t.btnSet = null),
        (t.EditBox = null),
        (t.test = null),
        (t.okBg = null),
        (t.okIcon = null),
        (t.btnOk = null),
        (t.rewardNode = null),
        (t.text1 = null),
        (t.text2 = null),
        (t.text3 = null),
        (t.bg = null),
        (t.panel = null),
        (t.btnClose = null),
        (t.okIconSpr = []),
        (t._text1 = ""),
        (t._text2 = ""),
        (t._text3 = ""),
        (t._wrap = "\n"),
        (t._renew = 0),
        (t._showContent = 0),
        (t._btnDrawBlock = null),
        (t._NoticeData = null),
        t
    );
}
o.default = e;
