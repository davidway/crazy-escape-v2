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
    l = t("EventTypes"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (a = cc.Component),
        i(c, a),
        (c.prototype.onLoad = function () {
            cc.director.getCollisionManager().enabled = !0;
        }),
        (c.prototype.start = function () {
            var t = this;
            this.scheduleOnce(function () {
                t.node.getComponent(cc.BoxCollider).size.height = t.node.height;
            });
        }),
        (c.prototype.onEnable = function () {
            (this.exitNum = 0), (this.shouNum = 0);
        }),
        (c.prototype.onCollisionExit = function (t) {
            t.node.children.forEach(function (t) {
                t.active = !1;
            }),
                this.exitNum < this.logNum && (console.log("碰撞隐藏"), this.exitNum++);
        }),
        (c.prototype.onCollisionEnter = function (t) {
            t.node.children.forEach(function (t) {
                t.active = !0;
            }),
                1 == t.tag && s.app.event.emit(l.EventType.Equips_Skin),
                this.shouNum < this.logNum && (console.log("碰撞显示"), this.shouNum++);
        }),
        r([t], c));
function c() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.logNum = 2), (t.shouNum = 0), (t.exitNum = 0), t;
}
o.default = t;
