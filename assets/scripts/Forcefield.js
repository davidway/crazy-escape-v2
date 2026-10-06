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
    u = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = u.default),
        i(p, a),
        Object.defineProperty(p.prototype, "bulletType", {
            get: function () {
                return l.BulletType.Forcefield;
            },
            enumerable: !1,
            configurable: !0
        }),
        (p.prototype.onLoad = function () {
            a.prototype.onLoad.call(this), (this.bodySk = this.body.getComponent(sp.Skeleton));
        }),
        (p.prototype.setData = function (t, e, o) {
            this.setRadius(t.radius),
                (this._hurtValue = e),
                (this.curr_interval = 1),
                (this.add_hp = null != t.add_hp ? t.add_hp : 0),
                (this._hitNum = Number.MAX_SAFE_INTEGER),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * s.HeroController.getAtrr("skillHurtRate")
                )),
                (this._skill = o),
                (this.node.scale = 0),
                (this.time_scale = 0),
                this.bodySk && (this.bodySk.timeScale = c.default.inst.timeScale);
        }),
        (p.prototype.setRadius = function (t) {
            (this.radius = t), (this.body.scale = t / 150);
        }),
        (p.prototype.onEnable = function () {
            this.appear();
        }),
        (p.prototype.onUpdate = function (t) {
            this.updatePos(),
                this.bodySk &&
                    this.time_scale != c.default.inst.timeScale &&
                    ((this.time_scale = c.default.inst.timeScale),
                    this.bodySk && (this.bodySk.timeScale = this.time_scale));
            var e,
                o = this.radius;
            this.curr_time < this.duration &&
                ((this.curr_time = cc.misc.clampf(this.curr_time + t, 0, this.duration)),
                (e = this.curr_time / this.duration),
                (t = cc.misc.lerp(this.now_scale, this.to_scale, e)),
                (this.node.scale = t),
                (o = cc.misc.lerp(0, this.radius, e))),
                this.calcAroundHurt(this.node.position, o),
                0 < this.add_hp &&
                    0 < this.causeDamage &&
                    s.HeroController.addHp(Math.floor(this.add_hp * this.causeDamage));
        }),
        (p.prototype.updatePos = function () {
            this.node.position = s.HeroController.getHeroCenter();
        }),
        (p.prototype.recycle = function () {
            this.node.parent = null;
        }),
        (p.prototype.appear = function () {
            (this.curr_time = 0), (this.now_scale = 0), (this.to_scale = 1);
        }),
        r([e(cc.Node)], p.prototype, "body", void 0),
        r([t], p));
function p() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.body = null),
        (t.angular = 2),
        (t.radius = 0),
        (t.now_scale = 1),
        (t.to_scale = 1),
        (t.curr_time = 0),
        (t.duration = 1),
        (t.add_hp = 0),
        (t.bodySk = null),
        (t.time_scale = 1),
        t
    );
}
o.default = t;
