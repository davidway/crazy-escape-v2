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
    p = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(h, a),
        (h.prototype.initView = function () {
            var t = this.node.getChildByName("bg");
            (t.opacity = 80), (this.bg = t), (this.body.node.scale = 2.5), (this.body.node.position = cc.v3(0, -150));
        }),
        (h.prototype.updateView = function () {
            (this.bg.active = !0),
                (this.bg.opacity = 80),
                (p.default.inst.isDeathWin = !1),
                this.body.playEff(function () {
                    u.app.gui.closeUI(l.UIEnum.DeathLvUpView);
                });
        }),
        r([c.autoBind("SpineEffect", "body")], h.prototype, "body", void 0),
        r([t], h));
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.body = null), (t.bg = null), t;
}
o.default = t;
