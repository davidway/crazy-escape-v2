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
    s = t("App"),
    l = t("LayerMgr"),
    c = t("DateUtil"),
    u = t("BaseUI"),
    p = t("EventTypes"),
    h = t("UserDataController"),
    d = t("GameSetting"),
    f = t("UIEnum"),
    y = cc._decorator,
    e = y.ccclass,
    t = y.property,
    e =
        (y.inspector,
        (a = u.default),
        i(g, a),
        (g.prototype.onEnable = function () {
            s.app.event.on(p.EventType.User_Energy_Update, this.updateEnergy, this),
                this.on(this.node, this.onBtnAddClick, this),
                this.updateEnergy();
        }),
        (g.prototype.onDisable = function () {
            this.off(this.node), s.app.event.targetOff(this);
        }),
        (g.prototype.updateEnergy = function () {
            var t = h.default.inst.energy;
            this.valueLab.string = t + "";
            var e = h.default.inst.energy_time;
            t < d.GameSetting.inst.energy_default_value && 0 < e
                ? ((this.isRecover = !0), this.updateRecover())
                : ((this.isRecover = !1), (this.recoverLab.string = ""));
        }),
        (g.prototype.onBtnAddClick = function () {
            s.app.gui.openUI(f.UIEnum.GetEnergyView, l.LayerEnum.VIEW_LAYER);
        }),
        (g.prototype.update = function (t) {
            this.isRecover && ((this.delay -= t), this.delay <= 0 && this.updateRecover());
        }),
        (g.prototype.updateRecover = function () {
            var t = h.default.inst.energy_time,
                e = Date.now() - t;
            this.delay = 0.5;
            t = Math.ceil(0.001 * (d.GameSetting.inst.energy_recovery_mil_sec - e));
            (this.recoverLab.string = c.default.secondFormat3(t)),
                e >= d.GameSetting.inst.energy_recovery_mil_sec && h.default.inst.recoveryEnergy();
        }),
        r([t(cc.Node)], g.prototype, "btnAdd", void 0),
        r([t(cc.Label)], g.prototype, "valueLab", void 0),
        r([t(cc.Label)], g.prototype, "recoverLab", void 0),
        r([e], g));
function g() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.btnAdd = null), (t.valueLab = null), (t.recoverLab = null), (t.isRecover = !1), (t.delay = 0.5), t;
}
o.default = e;
