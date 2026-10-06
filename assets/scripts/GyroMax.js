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
    s = t("HeroController"),
    l = t("BulletType"),
    c = t("GameMgr"),
    u = t("BaseElement");
((e = a = a || {})[(e.Idle = 0)] = "Idle"), (e[(e.Appear = 1)] = "Appear"), (e[(e.Disappear = 2)] = "Disappear");
var p,
    t = cc._decorator,
    e = t.ccclass,
    t = t.property,
    e =
        ((p = u.default),
        i(h, p),
        Object.defineProperty(h.prototype, "bulletType", {
            get: function () {
                return l.BulletType.Gyro;
            },
            enumerable: !1,
            configurable: !0
        }),
        (h.prototype.setData = function (t, e, o) {
            (this.speed = t.speed),
                (this.angular = t.angular),
                (this.duration = t.duration),
                (this._hurtValue = e),
                (this._skill = o),
                (this.curr_interval = 1),
                (this.radius = o.getData().confVo.radius),
                (this.toScale = this.radius / 96),
                (this.body.scale = 0),
                (this.now_time = 0),
                (this.status = a.Appear),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * s.HeroController.getAtrr("skillHurtRate")
                )),
                console.log("[Gyro]-->[line:68]:", this.bulletType);
        }),
        (h.prototype.onUpdate = function (t) {
            (this.body.angle -= this.speed * c.default.inst.timeScale),
                this.updatePos(),
                (this.duration -= t),
                this.status == a.Appear ? this.appear(t) : this.status == a.Disappear && this.disappear(t),
                this.duration <= 0
                    ? (this.status = a.Disappear)
                    : this.calcAroundHurt(this.node.position, this.hurt_radius);
        }),
        (h.prototype.appear = function (t) {
            this.now_time = cc.misc.clampf(this.now_time + t, 0, this.change_time);
            t = this.now_time / this.change_time;
            (this.body.scale = cc.misc.lerp(0, this.toScale, t)),
                (this.hurt_radius = cc.misc.lerp(10, this.radius, t)),
                this.now_time >= this.change_time && ((this.status = a.Idle), (this.now_time = 0));
        }),
        (h.prototype.disappear = function (t) {
            this.now_time = cc.misc.clampf(this.now_time + t, 0, this.change_time);
            t = 1 - this.now_time / this.change_time;
            (this.body.scale = cc.misc.lerp(0, this.toScale, t)),
                (this.hurt_radius = cc.misc.lerp(this.radius, 10, t)),
                this.now_time >= this.change_time && ((this.status = a.Idle), (this.now_time = 0), this.recycle());
        }),
        (h.prototype.updatePos = function () {
            this.node.position = s.HeroController.getHeroCenter();
        }),
        (h.prototype.recycle = function () {
            this.node.parent = null;
        }),
        r([t(cc.Node)], h.prototype, "body", void 0),
        r([e], h));
function h() {
    var t = (null !== p && p.apply(this, arguments)) || this;
    return (
        (t.body = null),
        (t.speed = 0),
        (t.angular = 0),
        (t.duration = null),
        (t.change_time = 0.4),
        (t.now_time = 0),
        (t.status = a.Idle),
        (t.toScale = 1),
        (t.radius = 0),
        (t.hurt_radius = 0),
        t
    );
}
o.default = e;
