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
    s = t("BaseUI"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = s.default),
        i(l, a),
        Object.defineProperty(l.prototype, "selected", {
            set: function (t) {
                (this.bg.active = t),
                    (this.name1.active = !t),
                    (this.name2.active = t),
                    (this.icon.position = cc.v3(0, t ? 20 : 15)),
                    (this.node.width = t ? 170 : 120);
            },
            enumerable: !1,
            configurable: !0
        }),
        r([e(cc.Node)], l.prototype, "bg", void 0),
        r([e(cc.Node)], l.prototype, "icon", void 0),
        r([e(cc.Node)], l.prototype, "name1", void 0),
        r([e(cc.Node)], l.prototype, "name2", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.bg = null), (t.icon = null), (t.name1 = null), (t.name2 = null), t;
}
o.default = t;
