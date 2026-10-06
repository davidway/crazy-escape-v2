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
        (l.prototype.start = function () {
            var t = this,
                e = cc
                    .tween(this.obj)
                    .call(function () {
                        (t.obj.value = 1), (t.node.opacity = t.obj.value);
                    })
                    .to(
                        this.duration,
                        {value: 255},
                        {
                            onUpdate: function () {
                                t.node.opacity = t.obj.value;
                            }
                        }
                    )
                    .delay(0.01)
                    .to(
                        this.duration,
                        {value: 1},
                        {
                            onUpdate: function () {
                                t.node.opacity = t.obj.value;
                            }
                        }
                    );
            this.tween = cc.tween(this.obj).then(e);
        }),
        (l.prototype.play = function () {
            this.tween && (this.tween.stop(), this.tween.start());
        }),
        r([e], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.obj = {value: 1}), (t.tween = null), (t.duration = 0.06), t;
}
o.default = e;
