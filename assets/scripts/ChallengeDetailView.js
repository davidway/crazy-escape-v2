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
    h = t("ChallengeDetailItem"),
    d = t("GameMgr"),
    f = t("App"),
    y = t("MultipleController"),
    g = t("CloseUI"),
    m = t("Prop"),
    _ = t("LayerMgr"),
    v = cc._decorator,
    e = v.ccclass,
    t = v.property,
    e =
        (v.inspector,
        (l = c.default),
        i(b, l),
        (b.prototype.initView = function () {
            this.onBtn(this.reward1, m.Prop.Gem),
                this.onBtn(this.reward2, m.Prop.gene),
                this.onBtn(this.reward3, m.Prop.randomEquip),
                this.onBtn(this.reward4, m.Prop.gold),
                this.onBtn(this.reward5, m.Prop.randomDrawing);
        }),
        (b.prototype.updateView = function () {
            var t = this;
            y.default.inst.eject(this.panel, this.bg, function () {
                t.onEvent();
            }),
                (this._data = this._viewData.data),
                (this.status = this._viewData.status),
                0 == this.status
                    ? ((this.tz_wz4.getComponent(cc.Sprite).spriteFrame = this.Icons[0]), this.setBtnGrey(!1))
                    : ((this.tz_wz4.getComponent(cc.Sprite).spriteFrame = this.Icons[1]), this.setBtnGrey(!0)),
                console.log("[ChallengeDetailView]-->[line:37]:", this._data),
                (this.list.numItems = this._data.desc.length),
                (this.reward1.active = 0 < this._data.gem),
                (this.numLab1.string = "x" + this._data.gem),
                (this.reward3.active = 0 < this._data.equip),
                (this.numLab3.string = "x" + this._data.equip),
                (this.reward4.active = 0 < this._data.gold),
                (this.numLab4.string = "x" + this._data.gold),
                (this.reward5.active = 0 < this._data.drawing),
                (this.numLab5.string = "x" + this._data.drawing),
                (this.reward2.active = 0 < this._data.gene),
                (this.numLab2.string = "x" + this._data.gene),
                this.chapterName.setSource("texture/chapter/name_" + this._data.chapter);
        }),
        (b.prototype.setBtnGrey = function (t) {
            for (var e = 1; e < 6; e++)
                this.setGray(this["reward" + e], t),
                    (this["reward" + e].getComponent(cc.Sprite).spriteFrame = t
                        ? this.bgIcons[0]
                        : 4 == e || 2 == e
                        ? this.bgIcons[2]
                        : this.bgIcons[1]);
            this.setGray(this.reward3, t);
        }),
        (b.prototype.onItemRender = function (t, e) {
            t.getComponent(h.default).setData(this._data.desc[e]);
        }),
        (b.prototype.onBtn = function (o, n) {
            var t = this;
            o.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    return a(t, void 0, void 0, function () {
                        var e;
                        return s(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return (
                                        g.default.inst.closeNode(),
                                        (e = o.convertToWorldSpaceAR(cc.v2(0, o.height / 2 + 10))),
                                        (e = {pos: e, type: n}),
                                        [4, f.app.gui.openUI(u.UIEnum.DescribeBlackView, _.LayerEnum.VIEW_LAYER, e)]
                                    );
                                case 1:
                                    return t.sent(), [2];
                            }
                        });
                    });
                },
                this
            );
        }),
        (b.prototype.onEvent = function () {
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    g.default.inst.closeNode(), f.app.gui.closeUI(u.UIEnum.ChallengeDetailView);
                },
                this
            );
        }),
        (b.prototype.onDisable = function () {
            l.prototype.onDisable.call(this), g.default.inst.closeNode(), this.bg.off(cc.Node.EventType.TOUCH_START);
        }),
        (b.prototype.onBtnCloseClick = function () {
            f.app.gui.closeUI(u.UIEnum.ChallengeDetailView);
        }),
        (b.prototype.onBtnStartClick = function () {
            f.app.gui.closeUI(u.UIEnum.ChallengeDetailView), d.default.inst.playGame(this._data.chapter_id, !1);
        }),
        r([p.autoBind("cc.Node", "panel/rewards/tz_wz4")], b.prototype, "tz_wz4", void 0),
        r([p.autoBind("CCImage", "panel/chapterName")], b.prototype, "chapterName", void 0),
        r([p.autoBind("cc.Node", "bg")], b.prototype, "bg", void 0),
        r([p.autoBind("cc.Node", "panel")], b.prototype, "panel", void 0),
        r([p.autoBind("cc.Node", "panel/rewards/layout/reward1")], b.prototype, "reward1", void 0),
        r([p.autoBind("cc.Node", "panel/rewards/layout/reward2")], b.prototype, "reward2", void 0),
        r([p.autoBind("cc.Node", "panel/rewards/layout/reward3")], b.prototype, "reward3", void 0),
        r([p.autoBind("cc.Node", "panel/rewards/layout/reward4")], b.prototype, "reward4", void 0),
        r([p.autoBind("cc.Node", "panel/rewards/layout/reward5")], b.prototype, "reward5", void 0),
        r([p.autoBind("cc.Label", "panel/rewards/layout/reward1/numLab1")], b.prototype, "numLab1", void 0),
        r([p.autoBind("cc.Label", "panel/rewards/layout/reward2/numLab2")], b.prototype, "numLab2", void 0),
        r([p.autoBind("cc.Label", "panel/rewards/layout/reward3/numLab3")], b.prototype, "numLab3", void 0),
        r([p.autoBind("cc.Label", "panel/rewards/layout/reward4/numLab4")], b.prototype, "numLab4", void 0),
        r([p.autoBind("cc.Label", "panel/rewards/layout/reward5/numLab5")], b.prototype, "numLab5", void 0),
        r([p.autoBind("cc.Node", "panel/btnClose")], b.prototype, "btnClose", void 0),
        r([p.autoBind("cc.Node", "panel/btnStart")], b.prototype, "btnStart", void 0),
        r([p.autoBind("List", "panel/list")], b.prototype, "list", void 0),
        r([t([cc.SpriteFrame])], b.prototype, "Icons", void 0),
        r([t([cc.SpriteFrame])], b.prototype, "bgIcons", void 0),
        r([e], b));
function b() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.tz_wz4 = null),
        (t.chapterName = null),
        (t.bg = null),
        (t.panel = null),
        (t.reward1 = null),
        (t.reward2 = null),
        (t.reward3 = null),
        (t.reward4 = null),
        (t.reward5 = null),
        (t.numLab1 = null),
        (t.numLab2 = null),
        (t.numLab3 = null),
        (t.numLab4 = null),
        (t.numLab5 = null),
        (t.btnClose = null),
        (t.btnStart = null),
        (t.list = null),
        (t.Icons = []),
        (t.bgIcons = []),
        (t._data = null),
        (t.status = 0),
        t
    );
}
o.default = e;
