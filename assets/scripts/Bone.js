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
    u = t("HeroController"),
    p = t("GameSetting"),
    h = t("BulletType"),
    d = t("GameMgr"),
    f = t("GridMgr"),
    y = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = y.default),
        i(g, a),
        Object.defineProperty(g.prototype, "bulletType", {
            get: function () {
                return h.BulletType.Bone;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(g.prototype, "isMax", {
            set: function (t) {
                (this._isMax = t), (this.body.spriteFrame = t ? this.maxSp : this.normalSp);
            },
            enumerable: !1,
            configurable: !0
        }),
        (g.prototype.setData = function (t, e, o) {
            (this.speed = t.speed),
                (this.duration = t.duration),
                (this.radius = t.radius),
                (this.angular = t.angular),
                (this.body.node.scale = (2 * this.radius) / 102),
                (this._hurtValue = e),
                (this.curr_interval = 1),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * u.HeroController.getAtrr("skillHurtRate")
                )),
                (this._skill = o);
        }),
        (g.prototype.onUpdate = function (t) {
            var e;
            (this.duration -= t),
                this.duration <= 0
                    ? this.recycle()
                    : (c.GameController.inst.checkVisibleBounce(this.speed, this.node.position, this.radius),
                      (this.node.angle -= this.angular * d.default.inst.timeScale),
                      (e =
                          1 == d.default.inst.timeScale
                              ? this.node.position.addSelf(this.speed)
                              : this.node.position.addSelf(this.speed.mul(d.default.inst.timeScale))),
                      this.node.setPosition(e),
                      (t = this.hit_target),
                      this.calcCircleHurt(e, this.radius),
                      this.hit_target && t != this.hit_target && this.speed.mulSelf(-1));
        }),
        (g.prototype.calcCircleHurt = function (o, n) {
            var t,
                e,
                i = this;
            this.isHurtFrame() &&
                ((this.hit_target = null),
                this.checkBoxInCircle(o, n),
                (e = function (t) {
                    var e = t.getCenterPos();
                    l.default.pointInCircle(e, o, n + t.radius) &&
                        (t.monster.onLostHp(i.calcValue(), i.skill.getData().confVo), (i.hit_target = t.monster));
                }),
                (t = c.GameController.inst.getFreeMoveMonsters()),
                this.checkMonster(t, e),
                (this.monsters.length = 0),
                (t = c.GameController.inst.getAgility()),
                this.checkMonster(t, e),
                (e = f.GridMgr.getGrid(o)),
                this.hurtMobsByRadius(e, n),
                !this.hit_target &&
                    0 < this.monsters.length &&
                    (this.hit_target = this.monsters[this.monsters.length - 1]),
                p.GameSetting.inst.isDebug && this.drawCircle(o, n));
        }),
        (g.prototype.recycle = function () {
            this.skill && (this.skill.del(this.node), (this._skill = null)), s.default.inst.putNodeToPool(this.node);
        }),
        r([e(cc.Sprite)], g.prototype, "body", void 0),
        r([e(cc.SpriteFrame)], g.prototype, "normalSp", void 0),
        r([e(cc.SpriteFrame)], g.prototype, "maxSp", void 0),
        r([t], g));
function g() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.body = null),
        (t.normalSp = null),
        (t.maxSp = null),
        (t.speed = null),
        (t.duration = null),
        (t.radius = null),
        (t.angular = null),
        t
    );
}
o.default = t;
