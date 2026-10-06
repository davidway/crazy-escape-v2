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
    s = cc._decorator,
    e = s.ccclass,
    e =
        (s.property,
        (a = cc.Component),
        i(l, a),
        (l.prototype.onLoad = function () {
            var t = this;
            (this.scaleX = this.node.scaleX), (this.scaleY = this.node.scaleY);
            var e = cc
                .tween(this.node)
                .call(function () {
                    (t.isPlaying = !0), (t.node.scaleX = t.scaleX), (t.node.scaleY = t.scaleY);
                })
                .to(0.05, {scaleX: this.scaleX - 0.15, scaleY: this.scaleY + 0.15})
                .to(0.05, {scaleX: this.scaleX, scaleY: this.scaleY})
                .to(0.05, {scaleX: this.scaleX + 0.15, scaleY: this.scaleY - 0.15})
                .to(0.05, {scaleX: this.scaleX, scaleY: this.scaleY});
            this.tween = cc
                .tween(this.node)
                .then(e)
                .call(function () {
                    t.isPlaying = !1;
                });
        }),
        (l.prototype.onEnable = function () {
            var t;
            (this.isPlaying = !1),
                null === (t = this.tween) || void 0 === t || t.stop(),
                (this.node.scaleX = this.scaleX),
                (this.node.scaleY = this.scaleY);
        }),
        (l.prototype.play = function () {
            var t;
            this.isPlaying || null === (t = this.tween) || void 0 === t || t.start();
        }),
        r([e], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.tween = null), (t.isPlaying = !1), (t.scaleX = 1), (t.scaleY = 1), t;
}
o.default = e;
