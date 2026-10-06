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
    p = t("EventTypes"),
    h = t("MainPageType"),
    d = t("MultipleController"),
    TCA = t("TalentChapterArcade"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(f, a),
        (f.prototype.initView = function () {}),
        (f.prototype.updateView = function () {
            var t = this;
            this._viewData && this._viewData.count && (this.numLab.string = this._viewData.count + ""),
                TCA.applyGeneLack({node: this.node, panel: this.zb_ck1}),
                d.default.inst.eject(this.zb_ck1, this.bg, function () {
                    t.onEvent();
                });
        }),
        (f.prototype.onEvent = function () {
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    u.app.gui.closeUI(l.UIEnum.GeneLackView);
                },
                this
            );
        }),
        (f.prototype.onDisable = function () {
            a.prototype.onDisable.call(this), this.bg.off(cc.Node.EventType.TOUCH_START);
        }),
        (f.prototype.onBtnGoClick = function () {
            u.app.gui.closeUI(l.UIEnum.GeneLackView),
                u.app.event.emit(p.EventType.Home_Change_Page, {page: h.MainPageType.Challenge});
        }),
        (f.prototype.onBtnCloseClick = function () {
            u.app.gui.closeUI(l.UIEnum.GeneLackView);
        }),
        r([c.autoBind("cc.Node", "bg")], f.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "zb_ck1")], f.prototype, "zb_ck1", void 0),
        r([c.autoBind("cc.Node", "zb_ck1/btnGo")], f.prototype, "btnGo", void 0),
        r([c.autoBind("cc.Node", "zb_ck1/btnClose")], f.prototype, "btnClose", void 0),
        r([c.autoBind("cc.Label", "zb_ck1/layout/numLab")], f.prototype, "numLab", void 0),
        r([t], f));
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.bg = null), (t.zb_ck1 = null), (t.btnGo = null), (t.btnClose = null), (t.numLab = null), t;
}
o.default = t;
