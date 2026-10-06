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
    l = t("BaseUI"),
    c = t("EventTypes"),
    u = t("UserDataController"),
    p = t("ConfData"),
    h = cc._decorator,
    e = h.ccclass,
    t = h.property,
    e =
        (h.inspector,
        (a = l.default),
        i(d, a),
        (d.prototype.onEnable = function () {
            (this.add_exp = 0), -1 == this.nowExp && (this.updateLevel(), this.updateExp());
        }),
        (d.prototype.onDisable = function () {}),
        (d.prototype.updateLevel = function () {
            (this.levelLab.string = "Lv." + u.default.inst.level),
                (this.levelVo = p.default.inst.userLevelConf.getUserLevelVo(u.default.inst.level));
        }),
        (d.prototype.updateExp = function () {
            (this.nowExp = u.default.inst.totalExp), this.upadteExpProgress();
        }),
        (d.prototype.upadteExpProgress = function () {
            var t;
            p.default.inst.userLevelConf.maxExp <= this.nowExp
                ? (this.expBar.progress = 1)
                : ((t = this.nowExp - (this.levelVo.totalExp - this.levelVo.needExp)),
                  (this.expBar.progress = cc.misc.clamp01(t / this.levelVo.needExp)),
                  this.nowExp >= this.levelVo.totalExp &&
                      (s.app.event.emit(c.EventType.Home_Evolve_Change_Page),
                      this.updateLevel(),
                      (this.add_exp = 0),
                      console.warn("[UserInfo]-->[line:52]:弹出升级页面"),
                      this.upadteExpProgress()));
        }),
        (d.prototype.update = function () {
            this.nowExp < u.default.inst.totalExp &&
                (0 == this.add_exp &&
                    (this.add_exp = cc.misc.clampf(Math.ceil(0.05 * (u.default.inst.totalExp - this.nowExp)), 2, 30)),
                (this.nowExp = cc.misc.clampf(this.nowExp + this.add_exp, 0, u.default.inst.totalExp)),
                this.upadteExpProgress());
        }),
        r([t(cc.ProgressBar)], d.prototype, "expBar", void 0),
        r([t(cc.Label)], d.prototype, "levelLab", void 0),
        r([e], d));
function d() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.expBar = null), (t.levelLab = null), (t.nowExp = -1), (t.add_exp = 0), (t.levelVo = null), t;
}
o.default = e;
