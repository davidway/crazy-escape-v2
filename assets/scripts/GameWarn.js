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
    s = s.property,
    e =
        ((a = cc.Component),
        i(l, a),
        (l.prototype.onLoad = function () {
            var t = this;
            this.body.setCompleteListener(function () {
                t._complete && t._complete(), (t._complete = null);
            });
        }),
        (l.prototype.playAnim = function (t) {
            (this._complete = t), this.body.setAnimation(0, "animation", !1);
        }),
        r([s(sp.Skeleton)], l.prototype, "body", void 0),
        r([e], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.body = null), t;
}
o.default = e;
