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
    h = t("Easing"),
    d = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = d.default),
        i(f, a),
        Object.defineProperty(f.prototype, "bulletType", {
            get: function () {
                return u.BulletType.Boomerang;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "isMax", {
            set: function (t) {
                (this._isMax = t), (this.body.spriteFrame = t ? this.maxSp : this.normalSp);
            },
            enumerable: !1,
            configurable: !0
        }),
        (f.prototype.setData = function (t, e, o) {
            (this.dir = t.dir),
                (this.duration = t.duration),
                (this.radius = t.radius),
                (this.back_dis = t.back_dis),
                (this.angular = t.angular),
                (this._hurtValue = e),
                (this.curr_interval = 1),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * c.HeroController.getAtrr("skillHurtRate")
                )),
                (this._skill = o),
                (this._skill = o),
                l.default.copy(this.startPos, this.node.position),
                l.default.copy(this.pos, this.node.position),
                (this.target = this.startPos.add(this.dir.mulSelf(this.back_dis))),
                (this.body.node.scale = (2 * this.radius) / 95),
                (this.back_time = t.back_time),
                (this.curr_time = 0),
                (this.step = 0);
        }),
        (f.prototype.onUpdate = function (t) {
            (this.duration -= t),
                this.duration <= 0 || 2 == this.step
                    ? this.recycle()
                    : ((this.node.angle -= this.angular * p.default.inst.timeScale),
                      (this.curr_time = cc.misc.clampf(this.curr_time + t, 0, this.back_time)),
                      (t =
                          0 == this.step
                              ? h.default.sineOut(this.curr_time / this.back_time)
                              : h.default.sineIn(this.curr_time / this.back_time)),
                      this.startPos.lerp(this.target, t, this.pos),
                      this.node.setPosition(this.pos),
                      this.curr_time == this.back_time &&
                          ((this.angular += 1),
                          (this.step += 1),
                          (this.back_time = this.duration - this.back_time),
                          (this.curr_time = 0),
                          l.default.copy(this.startPos, this.pos),
                          (this.target = this.startPos.add(this.dir.mulSelf(-12)))),
                      this.calcCircleHurt(this.pos, this.radius));
        }),
        (f.prototype.recycle = function () {
            this.skill && (this.skill.del(this.node), (this._skill = null)), s.default.inst.putNodeToPool(this.node);
        }),
        r([e(cc.Sprite)], f.prototype, "body", void 0),
        r([e(cc.SpriteFrame)], f.prototype, "normalSp", void 0),
        r([e(cc.SpriteFrame)], f.prototype, "maxSp", void 0),
        r([t], f));
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.body = null),
        (t.normalSp = null),
        (t.maxSp = null),
        (t.dir = null),
        (t.duration = 0),
        (t.radius = 0),
        (t.angular = 0),
        (t.back_dis = 0),
        (t.target = cc.v3()),
        (t.startPos = cc.v3()),
        (t.pos = cc.v3()),
        (t.back_time = 0),
        (t.curr_time = 0),
        (t.step = 0),
        t
    );
}
o.default = t;
