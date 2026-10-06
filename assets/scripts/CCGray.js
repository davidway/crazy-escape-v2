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
    s,
    e = cc._decorator.ccclass,
    e =
        ((a = cc.Component),
        i(l, a),
        ((s = l).prototype.onLoad = function () {
            (this.normal = cc.Material.getBuiltinMaterial(cc.Material.BUILTIN_NAME.SPRITE)),
                (this.gray = cc.Material.getBuiltinMaterial(cc.Material.BUILTIN_NAME.GRAY_SPRITE));
        }),
        (l.prototype.onEnable = function () {
            this.setGray(this.isGray);
        }),
        (l.prototype.onDisable = function () {}),
        (l.prototype.setGray = function (o) {
            var n = this;
            this.isGray = o;
            function t(t) {
                var e;
                t.getComponent(s) ||
                    ((e = t.getComponent(cc.Sprite)) && e.setMaterial(0, o ? n.gray : n.normal),
                    (t = t.getComponent(cc.Label)) && t.setMaterial(0, o ? n.gray : n.normal));
            }
            t(this.node);
            for (var e = 0, i = this.node.children; e < i.length; e++) t(i[e]);
        }),
        (s = r([e], l)));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.normal = null), (t.gray = null), (t.isGray = !1), t;
}
o.default = e;
