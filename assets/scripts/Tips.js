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
    s = t("ResMgr"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(l, a),
        (l.prototype.onLoad = function () {
            var t = this;
            this.tween = cc
                .tween(this.node)
                .call(function () {
                    (t.node.position = cc.v3()), (t.node.opacity = 0);
                })
                .to(0.5, {opacity: 255, position: cc.v3(0, 100)})
                .delay(1)
                .to(0.6, {opacity: 0})
                .call(function () {
                    s.default.inst.putNodeToPool(t.node);
                });
        }),
        (l.prototype.setMsg = function (t) {
            this.msgLab.string = t;
        }),
        (l.prototype.onEnable = function () {
            this.tween.start();
        }),
        r([e(cc.Label)], l.prototype, "msgLab", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.msgLab = null), (t.tween = null), t;
}
o.default = t;
