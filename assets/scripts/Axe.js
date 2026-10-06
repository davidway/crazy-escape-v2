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
                return u.BulletType.Axe;
            },
            enumerable: !1,
            configurable: !0
        }),
        (d.prototype.setData = function (t, e, o) {
            (this.duration = t.duration),
                (this.angular = -t.angular),
                (this.speed.y = t.speedValue),
                (this.speed.x = this.offsetX = l.default.randomRangeFloat(-2, 2)),
                (this.radius = t.radius),
                (this.node.angle = 0),
                (this.node.scaleX = this.speed.x < 0 ? -1 : 1),
                (this.body.scale = (2 * this.radius) / 120),
                (this._hurtValue = e),
                (this.curr_interval = 1),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * c.HeroController.getAtrr("skillHurtRate")
                )),
                (this._skill = o);
        }),
        (d.prototype.onUpdate = function (t) {
            if (((this.duration -= t), this.duration <= 0)) this.recycle();
            else {
                this.node.angle += this.angular * p.default.inst.timeScale;
                for (var e = this.node.position, o = 0; o < p.default.inst.timeScale; o++)
                    (this.speed.y += this.offsetY), (this.speed.x = this.offsetX), e.addSelf(this.speed);
                this.node.setPosition(e), this.calcCircleHurt(e, this.radius), this._hitNum <= 0 && this.recycle();
            }
        }),
        (d.prototype.recycle = function () {
            this.skill && (this.skill.del(this.node), (this._skill = null)), s.default.inst.putNodeToPool(this.node);
        }),
        r([e(cc.Node)], d.prototype, "body", void 0),
        r([t], d));
function d() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.body = null),
        (t.speed = cc.v3()),
        (t.duration = null),
        (t.radius = null),
        (t.offsetY = -0.2),
        (t.offsetX = -0.2),
        (t.angular = 1),
        t
    );
}
o.default = t;
