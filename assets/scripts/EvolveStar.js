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
    s = t("BaseUI"),
    l = t("EvolveController"),
    c = t("ConfData"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = s.default),
        i(u, a),
        (u.prototype.setLevel = function (t) {
            (this.level = t), (this.levelLab.string = "" + t), this.updateView();
        }),
        (u.prototype.onEnable = function () {
            this.updateView();
        }),
        (u.prototype.onDisable = function () {
            this.off(this.node);
        }),
        (u.prototype.updateView = function () {
            var t;
            0 != this.level &&
                ((t = l.default.inst.getNormalid()),
                !(t = c.default.inst.evolveConf.getEvolveConfVo(t)) || t.level > this.level
                    ? this.setGray(this.node, !1)
                    : this.setGray(this.node, !0));
        }),
        r([e(cc.Label)], u.prototype, "levelLab", void 0),
        r([t], u));
function u() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.levelLab = null), (t.level = 0), t;
}
o.default = t;
