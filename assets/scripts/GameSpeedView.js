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
    u = t("GameMgr"),
    p = t("EffectMgr"),
    h = t("App"),
    d = t("GameDataController"),
    f = t("GameSetting"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(y, a),
        (y.prototype.initView = function () {}),
        (y.prototype.updateView = function () {}),
        (y.prototype.onBtnCloseClick = function () {
            u.default.inst.gameResume(), h.app.gui.closeUI(l.UIEnum.GameSpeedView);
        }),
        (y.prototype.onBtnVideoClick = function () {
            u.default.inst.getVideoShareReward(
                function () {
                    u.default.inst.gameResume(),
                        (u.default.inst.timeScaleFlag = 1),
                        (u.default.inst.timeScale = f.GameSetting.inst.Game_Speed_Rate),
                        d.default.inst.setSpeedFlag(1),
                        h.app.gui.closeUI(l.UIEnum.GameSpeedView);
                },
                null,
                function () {
                    p.default.inst.showTips("获取视频失败，请稍候再试！");
                }
            );
        }),
        r([c.autoBind("cc.Node", "panel/btnClose")], y.prototype, "btnClose", void 0),
        r([c.autoBind("cc.Node", "panel/btnVideo")], y.prototype, "btnVideo", void 0),
        r([t], y));
function y() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.btnClose = null), (t.btnVideo = null), t;
}
o.default = t;
