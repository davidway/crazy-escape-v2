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
    s = t("DropController"),
    l = t("HeroController"),
    c = t("DropType"),
    u = t("Drop"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (a = u.default),
        i(p, a),
        Object.defineProperty(p.prototype, "type", {
            get: function () {
                return c.DropType.Drawing;
            },
            enumerable: !1,
            configurable: !0
        }),
        (p.prototype.setData = function (t) {
            this._data = t;
        }),
        (p.prototype.onCollect = function () {
            s.default.inst.delDrop(this), l.HeroController.addDrawings(this._data.id, 1);
        }),
        r([t], p));
function p() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t._data = null), t;
}
o.default = t;
