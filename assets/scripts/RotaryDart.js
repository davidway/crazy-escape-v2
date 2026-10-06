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
    l = t("MathUtil"),
    c = t("HeroController"),
    u = t("BulletType"),
    p = t("GameMgr"),
    h = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = h.default),
        i(d, a),
        Object.defineProperty(d.prototype, "isMax", {
            set: function (t) {
                this._isMax = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(d.prototype, "bulletType", {
            get: function () {
                return u.BulletType.RotaryDart;
            },
            enumerable: !1,
            configurable: !0
        }),
        (d.prototype.setData = function (t, e, o) {
            (this.bodySp.spriteFrame = t.isMax ? this.maxSpf : this.norSpf),
                (this.pointSp.spriteFrame = t.isMax ? this.pointMaxSpf : this.pointNorSpf),
                (this.duration = t.duration),
                (this.angular = null == t.angular ? 0 : t.angular),
                (this.targetPos = t.targetPos),
                (this.radius = t.radius),
                (this.bodySp.node.scale = this.radius / 45),
                (this._hurtValue = e),
                (this.curr_interval = 1),
                (this.moveTime = t.dis / (60 * t.speedValue)),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * c.HeroController.getAtrr("skillHurtRate")
                )),
                (this._skill = o),
                l.default.copy(this.startPos, this.node.position),
                (this.passTime = 0);
        }),
        (d.prototype.onUpdate = function (t) {
            (this.duration -= t),
                this.duration <= 0
                    ? this.recycle()
                    : ((this.passTime += t),
                      (t = cc.misc.clamp01(this.passTime / this.moveTime)),
                      (t = this.startPos.lerp(this.targetPos, t)),
                      this.node.setPosition(t),
                      (this.bodySp.node.angle += this.angular * p.default.inst.timeScale),
                      this.calcCircleHurt(t, this.radius));
        }),
        (d.prototype.recycle = function () {
            this._isMax && this.skill.split(this.node.position),
                this.skill && (this.skill.del(this.node), (this._skill = null)),
                s.default.inst.putNodeToPool(this.node);
        }),
        r([e(cc.Sprite)], d.prototype, "pointSp", void 0),
        r([e(cc.Sprite)], d.prototype, "bodySp", void 0),
        r([e(cc.SpriteFrame)], d.prototype, "norSpf", void 0),
        r([e(cc.SpriteFrame)], d.prototype, "maxSpf", void 0),
        r([e(cc.SpriteFrame)], d.prototype, "pointNorSpf", void 0),
        r([e(cc.SpriteFrame)], d.prototype, "pointMaxSpf", void 0),
        r([t], d));
function d() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.pointSp = null),
        (t.bodySp = null),
        (t.norSpf = null),
        (t.maxSpf = null),
        (t.pointNorSpf = null),
        (t.pointMaxSpf = null),
        (t.startPos = cc.v3()),
        (t.targetPos = null),
        (t.duration = 0),
        (t.angular = 0),
        (t.radius = 0),
        (t.moveTime = 0),
        (t.passTime = 0),
        t
    );
}
o.default = t;
