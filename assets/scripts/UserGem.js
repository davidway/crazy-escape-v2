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
    c = t("BaseUI"),
    u = t("EventTypes"),
    p = t("UserDataController"),
    h = t("UIEnum"),
    d = cc._decorator,
    e = d.ccclass,
    t = d.property,
    e =
        (d.inspector,
        (a = c.default),
        i(f, a),
        (f.prototype.onEnable = function () {
            s.app.event.on(u.EventType.User_Gem_Update, this.updateGem, this),
                this.on(this.node, this.onBtnAddClick, this),
                this.updateGem();
        }),
        (f.prototype.onDisable = function () {
            this.off(this.node), s.app.event.targetOff(this);
        }),
        (f.prototype.updateGem = function () {
            for (var t = p.default.inst.gem, e = 1; 0 < t; ) e++, (t = Math.floor(t / 10));
            this.valueLab.node.x = (6 * (e - 1)) / 10;
            var o = p.default.inst.gem;
            this.valueLab.string = o + "";
        }),
        (f.prototype.onBtnAddClick = function () {
            s.app.gui.openUI(h.UIEnum.FreeWealthView, l.LayerEnum.TOP_LAYER, 2);
        }),
        r([t(cc.Node)], f.prototype, "btnAdd", void 0),
        r([t(cc.Label)], f.prototype, "valueLab", void 0),
        r([e], f));
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.btnAdd = null), (t.valueLab = null), t;
}
o.default = e;
