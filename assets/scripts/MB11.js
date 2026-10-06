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
    s = t("MathUtil"),
    l = t("FrameComp"),
    c = t("MonsterBullet"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = c.default),
        i(u, a),
        (u.prototype.onLoad = function () {
            this.animComp = new l.FrameComp(this.node, this.body);
            for (var t = [], e = 1; e <= 6; e++) t.push(this.atlas.getSpriteFrame("" + e));
            this.animComp.setData({name: "anim", frames: t, interval: 0.06, loop: !0}), this.animComp.play("anim");
        }),
        (u.prototype.setData = function (t, e) {
            a.prototype.setData.call(this, t, e), (this.bounce = t.bounce), (this.node.scale = t.radius / 28);
        }),
        (u.prototype.onUpdate = function (t) {
            (this.pass_time += t),
                this.checkBounce() && (this.node.angle = s.default.getAngleTwoPoint(cc.v3(), this.speed)),
                this.animComp.onUpdate(t),
                (this.duration -= t),
                this.duration <= 0
                    ? this.recycle()
                    : (a.prototype.onUpdate.call(this, t), this.isHurtHero && this.recycle());
        }),
        r([e(cc.Sprite)], u.prototype, "body", void 0),
        r([e(cc.SpriteAtlas)], u.prototype, "atlas", void 0),
        r([t], u));
function u() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.body = null), (t.atlas = null), (t.animComp = null), t;
}
o.default = t;
