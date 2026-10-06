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
        };
Object.defineProperty(o, "__esModule", {value: !0});
var a,
    s = t("BasePanel"),
    l = t("UIEnum"),
    c = t("decorator"),
    u = t("GuideSkinItem"),
    p = t("EventTypes"),
    h = t("UserDataController"),
    d = t("App"),
    f = t("GuideController"),
    y = t("GameMgr"),
    g = t("GameSetting"),
    m = cc._decorator,
    e = m.ccclass,
    t = m.property,
    e =
        (m.inspector,
        (a = s.default),
        i(_, a),
        (_.prototype.initView = function () {
            var o = 11 == h.default.inst.skin ? g.GameSetting.inst.skull_ids : g.GameSetting.inst.mouse_ids;
            this.items.forEach(function (t, e) {
                t.setData(o[e]);
            });
        }),
        (_.prototype.updateView = function () {
            (this.panel.active = !0), (this.resultNode.active = !1);
        }),
        (_.prototype.onSkinSelected = function (t) {
            h.default.inst.unlockHero(t, !0),
                (y.default.inst.guide_skin_id = t),
                this.resultItem.setData(t),
                (this.panel.active = !1),
                (this.resultNode.active = !0),
                f.GuideController.setGuide("skin", 1),
                this.bg.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                        d.app.gui.closeUI(l.UIEnum.GuideSkinView),
                            f.GuideController.guideNext(),
                            f.GuideController.guideStart();
                    },
                    this
                );
        }),
        r([t(cc.Node)], _.prototype, "bg", void 0),
        r([t(cc.Node)], _.prototype, "panel", void 0),
        r([t(cc.Node)], _.prototype, "resultNode", void 0),
        r([t([u.default])], _.prototype, "items", void 0),
        r([t(u.default)], _.prototype, "resultItem", void 0),
        r([c.gameEvent(p.EventType.On_Guide_Skin)], _.prototype, "onSkinSelected", null),
        r([e], _));
function _() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.bg = null), (t.panel = null), (t.resultNode = null), (t.items = []), (t.resultItem = null), t;
}
o.default = e;
