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
    l = t("FrameComp"),
    c = t("HeroController"),
    u = t("BulletType"),
    p = t("GameMgr"),
    h = t("MoveSys"),
    d = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = d.default),
        i(f, a),
        Object.defineProperty(f.prototype, "bulletType", {
            get: function () {
                return u.BulletType.Spell;
            },
            enumerable: !1,
            configurable: !0
        }),
        (f.prototype.recycle = function () {
            (this.target = null), (this.moveComp = null), (this.node.parent = null);
        }),
        (f.prototype.onLoad = function () {
            a.prototype.onLoad.call(this),
                (this._isMax = !0),
                (this.animComp = new l.FrameComp(this.node, this.bodySp));
            for (var t = [], e = 1; e <= 6; e++) t.push(this.spellAtlas.getSpriteFrame("spell_" + e));
            this.animComp.setData({name: "spell", frames: t, interval: 0.06, loop: !0}), this.animComp.play("spell");
        }),
        (f.prototype.updateData = function (t, e) {
            (this.speedValue = t.speedValue),
                (this.radius = t.radius),
                (this.speed = this.speed.normalizeSelf().mulSelf(this.speedValue)),
                (this._hurtValue = e);
        }),
        (f.prototype.setData = function (t, e, o) {
            this.updateData(t, e),
                (this.curr_interval = 1),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * c.HeroController.getAtrr("skillHurtRate")
                )),
                (this._skill = o),
                s.default.copy(this.pos, this.node.position);
        }),
        (f.prototype.findTarget = function () {
            var t,
                e = h.MoveSys.nearList;
            (this.target = null),
                (this.moveComp = null),
                0 < e.length &&
                    ((t = Math.min(10, e.length)),
                    (t = s.default.randomRangeInt(0, t)),
                    (this.moveComp = e[t]),
                    (this.target = this.moveComp.monster),
                    (this.duation = 1.2),
                    (this.sign = s.default.randomRangeInt(0, 100) < 50 ? -1 : 1));
        }),
        (f.prototype.onUpdate = function (t) {
            if (
                (this.animComp.onUpdate(t), (this.duation -= t), this.duation <= 0 || !this.target || this.target.isDie)
            )
                this.findTarget();
            else {
                for (
                    var e,
                        o = this.moveComp.getCenterPos(),
                        n = Math.floor(s.default.getAngleTwoPoint(this.pos, o)),
                        i = Math.floor(s.default.getAngleTwoPoint(cc.v3(), this.speed)),
                        r = 0,
                        a = 0;
                    a < 12;
                    a++
                ) {
                    if (n == i + a * this.sign) {
                        (this.bodySp.node.angle = n),
                            (this.speed = o
                                .sub(this.pos)
                                .normalizeSelf()
                                .mulSelf(this.speedValue * p.default.inst.timeScale));
                        break;
                    }
                    12 == (r += 1) &&
                        ((e = s.default.rotatePoint(this.speed, 12 * this.sign)),
                        (this.speed = e),
                        (this.bodySp.node.angle = i + a * this.sign));
                }
                this.pos.addSelf(this.speed),
                    (this.node.position = this.pos),
                    this.calcCircleHurt(this.pos, this.radius);
            }
        }),
        r([e(cc.Sprite)], f.prototype, "bodySp", void 0),
        r([e(cc.SpriteAtlas)], f.prototype, "spellAtlas", void 0),
        r([t], f));
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.bodySp = null),
        (t.spellAtlas = null),
        (t.animComp = null),
        (t.duration = 0),
        (t.speed = cc.v3(1, 0)),
        (t.sign = -1),
        (t.pos = cc.v3()),
        (t.target = null),
        (t.moveComp = null),
        (t.duation = 1),
        t
    );
}
o.default = t;
