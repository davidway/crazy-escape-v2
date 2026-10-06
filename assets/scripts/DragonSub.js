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
    c = t("HeroController"),
    u = t("BulletType"),
    p = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = p.default),
        i(h, a),
        (h.prototype.onLoad = function () {
            var r = this;
            a.prototype.onLoad.call(this),
                (this.bodySp.node.scaleY = 0.9),
                (this.sparkAnim = new l.FrameComp(this.node, this.spark)),
                (this.laserAnim = new l.FrameComp(this.node, this.bodySp));
            function t(t, e, o) {
                for (var n = [], i = 1; i <= e; i++) n.push(r.atlas.getSpriteFrame(t + i));
                return {name: o, frames: n, interval: 0.06, loop: !0};
            }
            var e = t("spark_", 4, "normal");
            this.sparkAnim.setData(e),
                (e = t("spark_max_", 4, "max")),
                this.sparkAnim.setData(e),
                (e = t("laser", 2, "normal")),
                this.laserAnim.setData(e),
                (e = t("laser_max", 2, "max")),
                this.laserAnim.setData(e),
                (this.isMax = this._isMax);
        }),
        Object.defineProperty(h.prototype, "bulletType", {
            get: function () {
                return u.BulletType.LightDragon;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "isMax", {
            set: function (t) {
                var e;
                (this._isMax = t),
                    this.laserAnim &&
                        ((this.offset = t ? 20 : 16),
                        (this.bodySp.node.position = cc.v3(this.offset, 0)),
                        null === (e = this.sparkAnim) || void 0 === e || e.play(t ? "max" : "normal"),
                        null === (e = this.laserAnim) || void 0 === e || e.play(t ? "max" : "normal"));
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "target", {
            get: function () {
                return this._target;
            },
            enumerable: !1,
            configurable: !0
        }),
        (h.prototype.setData = function (t, e, o) {
            (this._hurtValue = e),
                (this.duration = t.duration + this.lasing_time),
                (this._target = t.target),
                (this.moveComp = this._target.getMoveComp()),
                (this._skill = o),
                (this.curr_interval = 1),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * c.HeroController.getAtrr("skillHurtRate")
                )),
                (this.node.opacity = 0),
                (this.hit_time = 0),
                (this.isHit = !1);
        }),
        (h.prototype.onUpdate = function (t, e) {
            var o;
            this.laserAnim.onUpdate(t),
                this.sparkAnim.onUpdate(t),
                (this.duration -= t),
                this.duration <= 0 || !this.moveComp || !this._target || this._target.isDie
                    ? this.recycle()
                    : this.isHit
                    ? (this.updateLine(e),
                      this.isHurtFrame() &&
                          ((o = this.calcValue()), this._target.onLostHp(o, this.skill.getData().confVo)))
                    : this.lasing(t, e);
        }),
        (h.prototype.updateLine = function (t, e) {
            void 0 === e && (e = 1), (this.node.opacity = 255);
            var o = this.moveComp.getCenterPos(),
                n = s.default.getAngleTwoPoint(t, o);
            this.node.angle = n;
            o = s.default.getDistance(t, o);
            (this.node.width = o * e),
                (this.bodySp.node.width = Math.max(0, this.node.width - this.offset)),
                (this.spark.node.position = cc.v3(this.node.width, 0));
        }),
        (h.prototype.lasing = function (t, e) {
            this.hit_time += t;
            t = cc.misc.clamp01(this.hit_time / this.lasing_time);
            this.updateLine(e, t), 1 == t && (this.isHit = !0);
        }),
        (h.prototype.recycle = function () {
            (this._target = null), (this.moveComp = null), (this.node.active = !1);
        }),
        r([e(cc.Sprite)], h.prototype, "bodySp", void 0),
        r([e(cc.Sprite)], h.prototype, "spark", void 0),
        r([e(cc.SpriteAtlas)], h.prototype, "atlas", void 0),
        r([t], h));
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.bodySp = null),
        (t.spark = null),
        (t.atlas = null),
        (t.sparkAnim = null),
        (t.laserAnim = null),
        (t.duration = 1),
        (t.curr_time = 0),
        (t._target = null),
        (t.moveComp = null),
        (t.isMoving = !1),
        (t.hit_time = 0),
        (t.lasing_time = 0.4),
        (t.isHit = !1),
        (t.offset = 0),
        t
    );
}
o.default = t;
