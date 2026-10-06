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
    l = t("DropController"),
    c = t("HeroController"),
    u = t("ConfData"),
    p = t("BundleType"),
    h = t("DropType"),
    d = t("Drop"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = d.default),
        i(f, a),
        Object.defineProperty(f.prototype, "type", {
            get: function () {
                return h.DropType.Goods;
            },
            enumerable: !1,
            configurable: !0
        }),
        (f.prototype.onEnable = function () {
            var t;
            this._data && this._data.id
                ? ((t = u.default.inst.goodsConf.getGoodsById(this._data.id)),
                  this.icon.setSource(t.url, p.BundleType.Goods))
                : l.default.inst.delDrop(this);
        }),
        (f.prototype.setData = function (t) {
            (this._data = t), console.log("[Goods]-->[line:33]:", this._data);
        }),
        (f.prototype.onCollect = function () {
            l.default.inst.delDrop(this), c.HeroController.addGoods(this._data.id, 1);
        }),
        r([e(s.default)], f.prototype, "icon", void 0),
        r([t], f));
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.icon = null), (t._data = null), t;
}
o.default = t;
