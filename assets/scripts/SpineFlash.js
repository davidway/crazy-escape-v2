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
            var t,
                e = this;
            this.node.getComponent(cc.Sprite)
                ? (this._material = this.node.getComponent(cc.Sprite).getMaterial(0))
                : this.node.getComponent(sp.Skeleton) &&
                  (this._material = this.node.getComponent(sp.Skeleton).getMaterial(0)),
                this._material &&
                    (this._material.setProperty("u_rate", 1),
                    (t = cc
                        .tween(this.obj)
                        .call(function () {
                            (e.obj.value = 1), (e.isTween = !0);
                        })
                        .delay(0.1)
                        .call(function () {
                            (e.obj.value = 0.3), e._material.setProperty("u_rate", e.obj.value);
                        })
                        .delay(0.1)
                        .call(function () {
                            (e.obj.value = 1), e._material.setProperty("u_rate", e.obj.value);
                        })),
                    (this.tween = cc
                        .tween(this.obj)
                        .then(t)
                        .repeat(2)
                        .call(function () {
                            e._material.setProperty("u_rate", 1), (e.isTween = !1);
                        })));
        }),
        (l.prototype.play = function () {
            this.tween && !this.isTween && (this.tween.stop(), this.tween.start());
        }),
        r([e], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t._material = null), (t.obj = {value: 1}), (t.tween = null), (t.duration = 0.05), (t.isTween = !1), t;
}
o.default = e;
