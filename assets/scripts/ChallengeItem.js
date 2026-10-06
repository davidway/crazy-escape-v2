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
    s = t("CCImage"),
    l = t("ChallengeFb"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(c, a),
        (c.prototype.setData = function (t, e) {
            for (var o = 0, n = t.length; o < n; o++) this.fbs[o].setData(t[o]);
            this.titleIcon.setSource("texture/chapter/name_" + (e + 1)),
                (this.lockLab.string = "通关第" + (e + 1) + "章\n解锁");
        }),
        r([e(s.default)], c.prototype, "titleIcon", void 0),
        r([e(cc.Label)], c.prototype, "lockLab", void 0),
        r([e([l.default])], c.prototype, "fbs", void 0),
        r([t], c));
function c() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.titleIcon = null), (t.lockLab = null), (t.fbs = []), t;
}
o.default = t;
