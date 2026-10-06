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
    s = t("App"),
    l = t("ResMgr"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(c, a),
        (c.prototype.onLoad = function () {
            var t = this;
            this.body.setCompleteListener(function () {
                console.timeEnd("bossCome"), l.default.inst.putNodeToPool(t.node);
            });
        }),
        (c.prototype.onEnable = function () {
            s.app.sound.playEffect("BOSS出现前的光柱音效");
        }),
        (c.prototype.playAnim = function (t) {
            console.time("bossCome"),
                (this._complete = t),
                (this._delay = 2),
                this.body.setAnimation(0, "animation", !1);
        }),
        (c.prototype.update = function (t) {
            (this._delay -= t),
                this._complete && this._delay <= 0 && (this._complete && this._complete(), (this._complete = null));
        }),
        r([e(sp.Skeleton)], c.prototype, "body", void 0),
        r([t], c));
function c() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.body = null), (t._delay = 2), t;
}
o.default = t;
