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
    u = t("App"),
    p = t("LayerMgr"),
    h = t("MultipleController"),
    d = t("GameDataController"),
    f = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(y, a),
        (y.prototype.initView = function () {}),
        (y.prototype.updateView = function () {
            var t = this;
            h.default.inst.eject(this.panel, this.bg, function () {
                t.onEvent();
            });
        }),
        (y.prototype.onEvent = function () {
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    u.app.gui.closeUI(l.UIEnum.QuitView);
                },
                this
            );
        }),
        (y.prototype.onDisable = function () {
            a.prototype.onDisable.call(this), this.bg.off(cc.Node.EventType.TOUCH_START);
        }),
        (y.prototype.onBtnOkClick = function () {
            u.app.gui.closeUI(l.UIEnum.QuitView);
        }),
        (y.prototype.onBtnNoClick = function () {
            var t;
            d.default.inst.clear(),
                u.app.gui.closeUI(l.UIEnum.QuitView),
                u.app.gui.closeUI(l.UIEnum.PauseView),
                u.app.gui.closeUI(l.UIEnum.GameView),
                u.app.platform.triggerGC(),
                u.app.gui.openUI(l.UIEnum.HomeView, p.LayerEnum.VIEW_LAYER),
                null === (t = u.app.track) ||
                    void 0 === t ||
                    t.onStageEnd("level" + f.default.inst.chapter, "关卡" + f.default.inst.chapter, "fail");
        }),
        r([c.autoBind("cc.Node", "bg")], y.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], y.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/btnOk")], y.prototype, "btnOk", void 0),
        r([c.autoBind("cc.Node", "panel/btnNo")], y.prototype, "btnNo", void 0),
        r([t], y));
function y() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.bg = null), (t.panel = null), (t.btnOk = null), (t.btnNo = null), t;
}
o.default = t;
