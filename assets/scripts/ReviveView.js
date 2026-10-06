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
    p = t("HeroController"),
    h = t("GameSetting"),
    d = t("UserDataController"),
    f = t("EffectMgr"),
    y = t("MathUtil"),
    g = t("GameDataController"),
    m = t("TrackType"),
    _ = t("GoddessController"),
    v = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(b, a),
        (b.prototype.onDisable = function () {
            a.prototype.onDisable.call(this), u.app.timer.off(this);
        }),
        (b.prototype.initView = function () {}),
        (b.prototype.updateView = function () {
            (this.record = y.default.copyObj(g.default.inst.game)),
                g.default.inst.clear(),
                (this.is_pause = !1),
                (this.revive_time = 11),
                (this.gemLab.string = h.GameSetting.inst.revive_gem + ""),
                u.app.timer.on(this, this.onReviveTimeUpdate, 1, 0, !0);
        }),
        (b.prototype.onReviveTimeUpdate = function () {
            this.is_pause ||
                (--this.revive_time,
                (this.timeLab.string = this.revive_time + ""),
                this.revive_time <= 3 && 0 != this.revive_time && u.app.sound.playEffect("复活界面倒计时"),
                this.revive_time <= 0 && this.onNoRevive());
        }),
        (b.prototype.onNoRevive = function () {
            u.app.timer.off(this), u.app.gui.closeUI(l.UIEnum.ReviveView), this.onRevive(!1);
        }),
        (b.prototype.onRevive = function (t) {
            p.HeroController.onRevive(t), _.GoddessController.onRevive(t);
        }),
        (b.prototype.onBtnReviveClick = function () {
            d.default.inst.useGem(h.GameSetting.inst.revive_gem) &&
                (u.app.gui.closeUI(l.UIEnum.ReviveView), this.onRevive(!0));
        }),
        (b.prototype.onBtnCloseClick = function () {
            this.onNoRevive();
        }),
        (b.prototype.onBtnVideoClick = function () {
            var t,
                e = this;
            null === (t = u.app.track) || void 0 === t || t.trackEvent(m.TrackType.Revive_Click),
                (this.is_pause = !0),
                null === (t = u.app.track) || void 0 === t || t.trackEvent("new_fuhuo"),
                v.default.inst.getVideoShareReward(
                    function () {
                        var t;
                        null === (t = u.app.track) || void 0 === t || t.trackEvent("new_suc_fuhuo"),
                            u.app.gui.closeUI(l.UIEnum.ReviveView),
                            (g.default.inst.game = e.record),
                            null === (t = u.app.track) || void 0 === t || t.trackEvent(m.TrackType.Revive_Succ),
                            e.onRevive(!0);
                    },
                    function () {
                        e.is_pause = !1;
                    },
                    function () {
                        (e.is_pause = !1), f.default.inst.showTips("获取视频失败，请稍候再试！");
                    }
                );
        }),
        r([c.autoBind("cc.Node", "panel/btnRevive")], b.prototype, "btnRevive", void 0),
        r([c.autoBind("cc.Node", "panel/btnClose")], b.prototype, "btnClose", void 0),
        r([c.autoBind("cc.Node", "panel/btnVideo")], b.prototype, "btnVideo", void 0),
        r([c.autoBind("cc.Label", "panel/timeLab")], b.prototype, "timeLab", void 0),
        r([c.autoBind("cc.Label", "panel/btnRevive/gemLab")], b.prototype, "gemLab", void 0),
        r([t], b));
function b() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.btnRevive = null),
        (t.btnClose = null),
        (t.btnVideo = null),
        (t.timeLab = null),
        (t.gemLab = null),
        (t.revive_time = 10),
        (t.is_pause = !1),
        (t.record = null),
        t
    );
}
o.default = t;
