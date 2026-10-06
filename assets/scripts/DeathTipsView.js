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
    h = t("UserDataController"),
    d = t("ConfData"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(f, a),
        (f.prototype.initView = function () {}),
        (f.prototype.updateView = function () {
            for (var t = "", e = h.default.inst.deathPass, o = 1; o <= e; o++) {
                var n = d.default.inst.deathConf.getDeathInfo(o);
                n
                    ? (t += n.desc + "\n")
                    : ((n = d.default.inst.deathConf.getExtraVo()),
                      (t +=
                          o +
                          " 小怪血量+" +
                          Math.floor(100 * n.attr.t2) +
                          "%，死神血量+" +
                          Math.floor(100 * n.attr.t5) +
                          "%\n"));
            }
            (this.wenhao.active = e < 1), (this.infoLab.string = t), this.content.updateLayout();
        }),
        (f.prototype.onBtnOkClick = function () {
            u.app.gui.closeUI(l.UIEnum.DeathTipsView), p.default.inst.gameResume();
        }),
        r([c.autoBind("cc.Node", "panel/wenhao")], f.prototype, "wenhao", void 0),
        r([c.autoBind("cc.Node", "panel/btnOk")], f.prototype, "btnOk", void 0),
        r([c.autoBind("cc.Layout", "panel/list/view/content")], f.prototype, "content", void 0),
        r([c.autoBind("cc.Label", "panel/list/view/content/infoLab")], f.prototype, "infoLab", void 0),
        r([t], f));
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.wenhao = null), (t.btnOk = null), (t.content = null), (t.infoLab = null), t;
}
o.default = t;
