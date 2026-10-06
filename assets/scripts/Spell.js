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
    c = t("FrameComp"),
    u = t("GameController"),
    p = t("HeroController"),
    h = t("BulletType"),
    d = t("GameMgr"),
    f = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = f.default),
        i(y, a),
        Object.defineProperty(y.prototype, "bulletType", {
            get: function () {
                return h.BulletType.Spell;
            },
            enumerable: !1,
            configurable: !0
        }),
        (y.prototype.recycle = function () {
            this._skill && (this._skill.del(this.node), (this._skill = null)), s.default.inst.putNodeToPool(this.node);
        }),
        (y.prototype.onLoad = function () {
            a.prototype.onLoad.call(this), (this.animComp = new c.FrameComp(this.node, this.bodySp));
            for (var t = [], e = 1; e <= 3; e++) t.push(this.spellAtlas.getSpriteFrame("spell_" + e));
            this.animComp.setData({name: "spell", frames: t, interval: 0.2, loop: !0}), this.animComp.play("spell");
        }),
        (y.prototype.setData = function (t, e, o) {
            (this.speed = t.speed), (this.radius = t.radius), (this.duration = t.duration);
            t = l.default.getAngleTwoPoint(cc.v3(), this.speed);
            (this.node.angle = t),
                (this._hurtValue = e),
                (this.curr_interval = 1),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * p.HeroController.getAtrr("skillHurtRate")
                )),
                (this._skill = o);
        }),
        (y.prototype.onUpdate = function (t) {
            if ((this.animComp.onUpdate(t), (this.duration -= t), this.duration <= 0)) this.recycle();
            else {
                for (var e = this.node.position, o = 0; o < d.default.inst.timeScale; o++) {
                    var n = u.GameController.inst.checkVisibleBounce(this.speed, e, this.radius);
                    if ((e.addSelf(this.speed), n)) {
                        n = l.default.getAngleTwoPoint(cc.v3(), this.speed);
                        this.node.angle = n;
                        break;
                    }
                }
                this.node.setPosition(e), this.calcCircleHurt(e, this.radius);
            }
        }),
        r([e(cc.Sprite)], y.prototype, "bodySp", void 0),
        r([e(cc.SpriteAtlas)], y.prototype, "spellAtlas", void 0),
        r([t], y));
function y() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.bodySp = null), (t.spellAtlas = null), (t.animComp = null), (t.duration = 0), t;
}
o.default = t;
