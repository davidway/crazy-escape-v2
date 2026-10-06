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
        Object.defineProperty(d.prototype, "bulletType", {
            get: function () {
                return u.BulletType.Bolt;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(d.prototype, "isMax", {
            set: function (t) {
                (this._isMax = t), (this.body.spriteFrame = t ? this.maxSp : this.normalSp);
            },
            enumerable: !1,
            configurable: !0
        }),
        (d.prototype.recycle = function () {
            this._skill && (this._skill.del(this.node), (this._skill = null)), s.default.inst.putNodeToPool(this.node);
        }),
        (d.prototype.onLoad = function () {
            a.prototype.onLoad.call(this);
        }),
        (d.prototype.setData = function (t, e, o) {
            (this.speed = t.speed), (this.radius = t.radius), (this.duration = t.duration);
            t = l.default.getAngleTwoPoint(cc.v3(), this.speed);
            (this.node.angle = t),
                (this._hurtValue = e),
                (this.curr_interval = 1),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * c.HeroController.getAtrr("skillHurtRate")
                )),
                (this._skill = o);
        }),
        (d.prototype.onUpdate = function (t) {
            (this.duration -= t),
                this.duration <= 0
                    ? this.recycle()
                    : ((t =
                          1 == p.default.inst.timeScale
                              ? this.node.position.addSelf(this.speed)
                              : this.node.position.addSelf(this.speed.mul(p.default.inst.timeScale))),
                      this.node.setPosition(t),
                      this.calcCircleHurt(t, this.radius),
                      this._hitNum <= 0 && this.recycle());
        }),
        r([e(cc.Sprite)], d.prototype, "body", void 0),
        r([e(cc.SpriteFrame)], d.prototype, "normalSp", void 0),
        r([e(cc.SpriteFrame)], d.prototype, "maxSp", void 0),
        r([t], d));
function d() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.body = null), (t.normalSp = null), (t.maxSp = null), (t.duration = 0), t;
}
o.default = t;
