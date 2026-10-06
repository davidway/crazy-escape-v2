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
    c = t("GameController"),
    u = t("GoddessController"),
    p = t("HeroController"),
    h = t("GameEnums"),
    d = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (a = cc.Component),
        i(f, a),
        (f.prototype.setData = function (t, e) {
            (this.speed = t.speed),
                (this.radius = t.radius),
                (this.duration = t.duration),
                (this.hurtValue = t.hurtValue),
                (this.bounce = t.bounce),
                (this.hit_time = 0),
                (this.injury_time = t.injury_time || 0),
                (this.hurt_interval = this.hurt_interval_base = t.hurt_interval),
                (this.skill = e),
                (this.isHurtHero = !1),
                (this.pass_time = 0),
                (this.speed_scale = 1),
                this.speed
                    ? l.default.copy(this.defaultSpeed, this.speed)
                    : (this.defaultSpeed.x = this.defaultSpeed.y = 0);
        }),
        (f.prototype.checkBounce = function (t) {
            if ((void 0 === t && (t = 1), !this.defaultSpeed || this.defaultSpeed.equals(cc.Vec3.ZERO))) return !1;
            if (
                (this.speed_scale != d.default.inst.timeScale &&
                    ((this.speed_scale = d.default.inst.timeScale),
                    (this.speed = this.defaultSpeed.mul(d.default.inst.timeScale))),
                this.pass_time < 0.2)
            )
                return !1;
            if (
                1 == t &&
                0 < this.bounce &&
                c.GameController.inst.checkBounce(this.speed, this.node.position, this.radius)
            ) {
                --this.bounce;
                var e = 1 < d.default.inst.timeScale ? this.speed.div(d.default.inst.timeScale) : this.speed;
                return l.default.copy(this.defaultSpeed, e), !0;
            }
            return !(2 != t || !c.GameController.inst.checkBounce(this.speed, this.node.position, this.radius));
        }),
        (f.prototype.onUpdate = function (t) {
            this.speed &&
                !this.speed.equals(cc.Vec3.ZERO) &&
                ((this.hit_time -= t),
                (t = this.node.position.addSelf(this.speed)),
                this.node.setPosition(t),
                this.calcCircleHurt());
        }),
        (f.prototype.calcCircleHurt = function () {
            var t, e, o;
            (this.hurt_interval -= +d.default.inst.timeScale),
                0 < this.hurt_interval ||
                    ((this.hurt_interval = this.hurt_interval_base),
                    (t = !0),
                    (t = d.default.inst.checkMapType([h.Map_Group.DEATH]) ? d.default.inst.isAtkHero : t) &&
                        ((e = d.default.inst.getTargetCenterPos(0)),
                        (o = this.radius + p.HeroController.getHeroRadius()),
                        this.hit_time <= 0 &&
                            l.default.pointInCircle(e, this.node.position, o) &&
                            ((this.hit_time = this.injury_time / d.default.inst.timeScale),
                            (this.isHurtHero = !0),
                            p.HeroController.lostHp(this.hurtValue))),
                    d.default.inst.checkMapType([h.Map_Group.DEATH]) &&
                        ((e = d.default.inst.getTargetCenterPos(1)),
                        (o = this.radius + u.GoddessController.radius),
                        this.hit_time <= 0 &&
                            l.default.pointInCircle(e, this.node.position, o) &&
                            ((this.hit_time = this.injury_time / d.default.inst.timeScale),
                            (this.isHurtHero = !0),
                            u.GoddessController.lostHp(this.hurtValue))));
        }),
        (f.prototype.recycle = function () {
            s.default.inst.putNodeToPool(this.node),
                this.skill && (this.skill.del(this.node.uuid), (this.skill = null));
        }),
        r([t], f));
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.speed = null),
        (t.radius = 0),
        (t.hurtValue = 0),
        (t.duration = 0),
        (t.hurt_interval = 0),
        (t.hurt_interval_base = 0),
        (t.skill = null),
        (t.isHurtHero = !1),
        (t.injury_time = 0),
        (t.hit_time = 0),
        (t.pass_time = 0),
        (t.defaultSpeed = cc.v3()),
        (t.speed_scale = 1),
        (t.bounce = 0),
        t
    );
}
o.default = t;
