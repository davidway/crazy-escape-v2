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
    l = t("HeroController"),
    c = t("BulletType"),
    u = t("GameMgr"),
    p = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = p.default),
        i(h, a),
        Object.defineProperty(h.prototype, "bulletType", {
            get: function () {
                return c.BulletType.Fuel_Bottle;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "isMax", {
            set: function (t) {
                (this._isMax = t), (this.bodySp.spriteFrame = t ? this.maxSpf : this.normalSpf);
            },
            enumerable: !1,
            configurable: !0
        }),
        (h.prototype.setData = function (t, e, o) {
            (this.speed = t.speed),
                (this.duration = t.duration),
                (this.radius = t.radius),
                (this._hurtValue = e),
                (this.curr_interval = 1),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * l.HeroController.getAtrr("skillHurtRate")
                )),
                (this.fly_time = t.fly_time || 1),
                (this._skill = o);
        }),
        (h.prototype.onUpdate = function (t) {
            if (((this.fly_time -= t), this.fly_time <= 0))
                return this.playSound("魔法瓶破碎音效"), void this.recycle();
            (this.node.angle += 4),
                (t =
                    1 == u.default.inst.timeScale
                        ? this.node.position.addSelf(this.speed)
                        : this.node.position.addSelf(this.speed.mul(u.default.inst.timeScale))),
                this.node.setPosition(t);
        }),
        (h.prototype.recycle = function () {
            this.skill && (this.skill.addFire(this.node.position), this.skill.del(this.node), (this._skill = null)),
                s.default.inst.putNodeToPool(this.node);
        }),
        r([e(cc.Sprite)], h.prototype, "bodySp", void 0),
        r([e(cc.SpriteFrame)], h.prototype, "normalSpf", void 0),
        r([e(cc.SpriteFrame)], h.prototype, "maxSpf", void 0),
        r([t], h));
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.bodySp = null),
        (t.normalSpf = null),
        (t.maxSpf = null),
        (t.speed = null),
        (t.duration = null),
        (t.fly_time = 1),
        (t.radius = null),
        t
    );
}
o.default = t;
