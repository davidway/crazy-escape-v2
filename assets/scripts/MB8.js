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
    l = t("GameController"),
    c = t("GameMgr"),
    u = t("MonsterBullet"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (a = u.default),
        i(p, a),
        (p.prototype.setData = function (t, e) {
            a.prototype.setData.call(this, t, e),
                (this.node.scale = this.radius / 32),
                (this.track = t.track),
                (this.speedValue = t.speedValue),
                (this.speed = cc.v3()),
                (this.target = e.getOwer().target);
        }),
        (p.prototype.onUpdate = function (t) {
            var e, o;
            (this.pass_time += t),
                this.defaultSpeed.equals(cc.Vec3.ZERO) &&
                    ((e = (o = c.default.inst.getTargetCenterPos(this.target)).sub(this.node.position).normalize()),
                    (this.defaultSpeed = e.mul(this.speedValue))),
                1 == c.default.inst.timeScale
                    ? s.default.copy(this.speed, this.defaultSpeed)
                    : (this.speed = this.defaultSpeed.mul(c.default.inst.timeScale)),
                0.2 < this.pass_time && l.GameController.inst.checkBounce(this.speed, this.node.position, this.radius)
                    ? this.recycle()
                    : ((this.duration -= t),
                      this.duration <= 0
                          ? this.recycle()
                          : (0 < this.track &&
                                ((this.track -= t),
                                (o = c.default.inst.getTargetCenterPos(this.target)),
                                this.isHurtHero
                                    ? (this.track = 0)
                                    : ((e = o.sub(this.node.position).normalize()),
                                      (this.defaultSpeed = e.mul(this.speedValue)))),
                            (this.node.angle -= 2),
                            a.prototype.onUpdate.call(this, t)));
        }),
        r([t], p));
function p() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.track = 0), (t.speedValue = 0), (t.target = 0), t;
}
o.default = t;
