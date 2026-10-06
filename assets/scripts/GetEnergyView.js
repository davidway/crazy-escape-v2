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
    u = t("MultipleController"),
    p = t("App"),
    h = t("UserDataController"),
    d = t("GameSetting"),
    f = t("EffectMgr"),
    y = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(g, a),
        (g.prototype.initView = function () {
            this.numLab.string = "x" + d.GameSetting.inst.energy_num;
        }),
        (g.prototype.updateView = function () {
            var t = this;
            u.default.inst.eject(this.panel, this.bg, function () {
                t.onEvent();
            });
        }),
        (g.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    t.closeView();
                },
                this
            );
        }),
        (g.prototype.closeView = function () {
            p.app.gui.closeUI(l.UIEnum.GetEnergyView);
        }),
        (g.prototype.onBtnCloseClick = function () {
            this.closeView();
        }),
        (g.prototype.onBtnShockClick = function () {
            var t,
                e = this;
            null === (t = p.app.track) || void 0 === t || t.trackEvent("new_free_tili"),
                y.default.inst.getVideoShareReward(
                    function () {
                        var t;
                        null === (t = p.app.track) || void 0 === t || t.trackEvent("new_suc_free_tili"),
                            h.default.inst.addEnergy(d.GameSetting.inst.energy_num, !0, !0),
                            e.closeView();
                    },
                    null,
                    function () {
                        f.default.inst.showTips("获取视频失败，请稍候再试！");
                    }
                );
        }),
        r([c.autoBind("cc.Node", "bg")], g.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], g.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/btnClose")], g.prototype, "btnClose", void 0),
        r([c.autoBind("cc.Label", "panel/xgn_xk/numLab")], g.prototype, "numLab", void 0),
        r([c.autoBind("cc.Node", "panel/btn/btnShock")], g.prototype, "btnShock", void 0),
        r([t], g));
function g() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.bg = null), (t.panel = null), (t.btnClose = null), (t.numLab = null), (t.btnShock = null), t;
}
o.default = t;
