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
    l = t("FrameComp"),
    c = t("HeroController"),
    u = t("BulletType"),
    p = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = p.default),
        i(h, a),
        (h.prototype.recycle = function () {
            this.skill && (this.skill.del(this.node), (this._skill = null)), s.default.inst.putNodeToPool(this.node);
        }),
        Object.defineProperty(h.prototype, "bulletType", {
            get: function () {
                return u.BulletType.Fuel_Bottle;
            },
            enumerable: !1,
            configurable: !0
        }),
        (h.prototype.setData = function (t, e, o) {
            (this.duration = t.duration),
                (this.radius = t.radius),
                (this.defence = null != t.defence ? t.defence : 0),
                (this.body.node.scale = this.radius / this.frame_width),
                (this._hurtValue = e),
                (this.curr_interval = 1),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * c.HeroController.getAtrr("skillHurtRate")
                )),
                (this._skill = o),
                this.appear();
        }),
        (h.prototype.onLoad = function () {
            a.prototype.onLoad.call(this);
            for (var t = [], e = 1; e <= this.frame_count; e++)
                t.push(this.fireAtlas.getSpriteFrame("bottle_fire_" + e));
            var o = new l.FrameComp(this.node, this.body);
            o.setData({name: "fire", frames: t, interval: 0.15, loop: !0}), o.play("fire"), (this.anim = o);
        }),
        (h.prototype.onUpdate = function (t) {
            if (((this.duration -= t), this.duration < this.disappear_time && this.disappear(), this.duration <= 0))
                this.recycle();
            else {
                if ((this.calcCircleHurt(this.node.position, this.radius), 0 < this.defence))
                    for (var e = 0, o = this.monsters; e < o.length; e++) {
                        var n = o[e];
                        n.isDie || n.onDefense(this.defence);
                    }
                this.anim.onUpdate(t);
            }
        }),
        (h.prototype.appear = function () {
            (this.node.opacity = 255), (this.node.scale = 1);
        }),
        (h.prototype.disappear = function () {
            var t = cc.misc.clamp01(this.duration) / this.disappear_time;
            (this.node.opacity = 255 * t), (this.node.scale = t);
        }),
        r([e(cc.Sprite)], h.prototype, "body", void 0),
        r([e(cc.SpriteAtlas)], h.prototype, "fireAtlas", void 0),
        r([e], h.prototype, "frame_count", void 0),
        r([e], h.prototype, "frame_width", void 0),
        r([t], h));
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.body = null),
        (t.fireAtlas = null),
        (t.frame_count = 8),
        (t.frame_width = 40),
        (t.anim = null),
        (t.duration = null),
        (t.radius = null),
        (t.defence = 0),
        (t.disappear_time = 0.6),
        t
    );
}
o.default = t;
