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
Object.defineProperty(o, "__esModule", {value: !0}), (o.WidgetPosEnum = void 0);
var a,
    s = t("App"),
    l = cc._decorator,
    e = l.ccclass,
    t = l.property;
((l = a = o.WidgetPosEnum || (o.WidgetPosEnum = {}))[(l.TOP = 0)] = "TOP"),
    (l[(l.CENTER = 1)] = "CENTER"),
    (l[(l.BOTTOM = 2)] = "BOTTOM");
var c,
    e =
        ((c = cc.Component),
        i(u, c),
        (u.prototype.start = function () {
            var t = 0,
                e = s.app.platform.getMenuButtonBoundingClientRect();
            e &&
                (this.pos == a.TOP
                    ? (t = e.top * e.ratio)
                    : this.pos == a.CENTER
                    ? (t = e.center * e.ratio)
                    : this.pos == a.BOTTOM && (t = e.bottom * e.ratio)),
                (t += this.offsetY);
            e = this.node.position;
            (e.y = (cc.winSize.height >> 1) - t), (this.node.position = e), console.warn("this.topWidget", t);
        }),
        r([t], u.prototype, "offsetY", void 0),
        r([t({type: cc.Enum(a)})], u.prototype, "pos", void 0),
        r([e], u));
function u() {
    var t = (null !== c && c.apply(this, arguments)) || this;
    return (t.offsetY = 0), (t.pos = a.TOP), t;
}
o.default = e;
