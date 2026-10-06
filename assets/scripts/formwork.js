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
    s = t("MiniGameView"),
    l = t("tipe"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(c, a),
        (c.prototype.onLoad = function () {}),
        (c.prototype.start = function () {}),
        (c.prototype.int = function () {}),
        (c.prototype.getMiniGame = function () {
            this.MiniGameView || (this.MiniGameView = this.node.parent.parent.getComponent(s.default));
        }),
        (c.prototype.showWait = function () {
            this.getMiniGame(), (this.MiniGameView.waitNode.active = !0);
        }),
        (c.prototype.closeWait = function () {
            this.getMiniGame(), (this.MiniGameView.waitNode.active = !1);
        }),
        (c.prototype.showTipe = function (t) {
            this.getMiniGame(),
                this.MiniGameView.tipeNode.getComponent(l.default).setLable(t),
                (this.MiniGameView.tipeNode.active = !0);
        }),
        (c.prototype.closeTipe = function () {
            this.getMiniGame(), (this.MiniGameView.tipeNode.active = !1);
        }),
        (c.prototype.closeView = function () {
            (this.node.active = !1), this.getMiniGame(), this.MiniGameView.showCloseBtn();
        }),
        r([e(cc.Node)], c.prototype, "btnClose", void 0),
        r([e(cc.Node)], c.prototype, "clickNode", void 0),
        r([t], c));
function c() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.btnClose = null), (t.clickNode = null), (t.MiniGameView = null), t;
}
o.default = t;
