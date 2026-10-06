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
            (this.isTween = !0),
                (this.child = this.node.getChildByName("dragon")),
                (this.tween = cc
                    .tween(this.node)
                    .to(2, {position: this.pos})
                    .call(function () {
                        t.isTween = !1;
                    }));
        }),
        (l.prototype.onEnable = function () {
            var t;
            null === (t = this.tween) || void 0 === t || t.start();
        }),
        (l.prototype.update = function () {
            this.isTween &&
                (this.child.position.y,
                (this.child.position = this.child.position.add(cc.v3(0, this.speed))),
                this.child.position.y,
                (10 <= this.child.position.y || this.child.position.y <= -6) && (this.speed = -this.speed));
        }),
        r([s()], l.prototype, "pos", void 0),
        r([s], l.prototype, "sound", void 0),
        r([e], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.pos = cc.v3()), (t.sound = !1), (t.isTween = !1), (t.child = null), (t.tween = null), (t.speed = 2), t;
}
o.default = e;
