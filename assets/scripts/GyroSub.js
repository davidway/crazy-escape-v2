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
    s = t("FrameComp"),
    l = t("HeroController"),
    c = t("BulletType"),
    u = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = u.default),
        i(p, a),
        (p.prototype.onLoad = function () {
            a.prototype.onLoad.call(this), (this.animComp = new s.FrameComp(this.node, this.bodySp));
            for (var t = [], e = 1; e <= 16; e++) t.push(this.fireAtlas.getSpriteFrame("fire_" + e));
            this.animComp.setData({name: "fire", frames: t, interval: 0.1, loop: !0}), this.animComp.play("fire");
        }),
        Object.defineProperty(p.prototype, "bulletType", {
            get: function () {
                return c.BulletType.Gyro;
            },
            enumerable: !1,
            configurable: !0
        }),
        (p.prototype.setData = function (t, e, o) {
            (this._hurtValue = e),
                (this._skill = o),
                (this.curr_interval = 1),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * l.HeroController.getAtrr("skillHurtRate")
                ));
        }),
        (p.prototype.calcHurt = function (t, e) {
            this.calcCircleHurt(t, e);
        }),
        (p.prototype.onUpdate = function (t) {
            var e;
            this.animComp.onUpdate(t),
                this.curr_time < this.duration &&
                    ((this.curr_time = cc.misc.clampf(this.curr_time + t, 0, this.duration)),
                    (e = this.curr_time / this.duration),
                    (t = cc.v3()),
                    this.fromPos.lerp(this.toPos, e, t),
                    (this.node.position = t),
                    (t = cc.misc.lerp(this.now_scale, this.to_scale, e)),
                    (this.node.scale = t),
                    1 == e && (this.isMoving = !1));
        }),
        (p.prototype.appear = function (t) {
            (this.toPos = t),
                (this.fromPos = this.node.position.clone()),
                (this.curr_time = 0),
                (this.now_scale = 0),
                (this.to_scale = 1),
                (this.isMoving = !0);
        }),
        (p.prototype.disappear = function (t) {
            (this.toPos = t),
                (this.fromPos = this.node.position.clone()),
                (this.curr_time = 0),
                (this.now_scale = 1),
                (this.to_scale = 0),
                (this.isMoving = !0);
        }),
        (p.prototype.recycle = function () {}),
        r([e(cc.Sprite)], p.prototype, "bodySp", void 0),
        r([e(cc.SpriteAtlas)], p.prototype, "fireAtlas", void 0),
        r([t], p));
function p() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.bodySp = null),
        (t.fireAtlas = null),
        (t.animComp = null),
        (t.fromPos = cc.v3()),
        (t.toPos = cc.v3()),
        (t.duration = 1),
        (t.curr_time = 0),
        (t.now_scale = 1),
        (t.to_scale = 1),
        (t.isMoving = !1),
        t
    );
}
o.default = t;
