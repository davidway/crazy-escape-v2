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
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(l, a),
        (l.prototype.setData = function (t) {
            (this._data = t),
                (this.icon.spriteFrame = this._data.spf),
                (this.status = 0),
                this.setStatus(0),
                (this.selecting.opacity = 0),
                (this.icon.node.scale = 1 == t.type ? 0.9 : 1),
                (this.node.getComponent(cc.Sprite).spriteFrame = this._data.iconBg);
        }),
        (l.prototype.getData = function () {
            return this._data;
        }),
        (l.prototype.setStatus = function (t) {
            if (2 != this.status)
                return 0 == (this.status = t)
                    ? ((this.selected.active = !1), void (this.selecting.active = !1))
                    : 1 == t
                    ? ((this.selected.active = !1), (this.selecting.active = !0), void (this.selecting.opacity = 255))
                    : 2 == t
                    ? (s.app.sound.playEffect("幸运抽奖后奖励框弹出音效"),
                      (this.selected.active = !0),
                      (this.selecting.active = !0),
                      void (this.selecting.opacity = 255))
                    : void 0;
        }),
        r([e(cc.Node)], l.prototype, "selected", void 0),
        r([e(cc.Node)], l.prototype, "selecting", void 0),
        r([e(cc.Sprite)], l.prototype, "icon", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.selected = null), (t.selecting = null), (t.icon = null), (t.status = 0), (t._data = null), t;
}
o.default = t;
