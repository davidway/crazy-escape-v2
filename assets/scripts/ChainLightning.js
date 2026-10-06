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
    u = t("BulletType"),
    p = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = p.default),
        i(h, a),
        Object.defineProperty(h.prototype, "bulletType", {
            get: function () {
                return u.BulletType.ChainLightning;
            },
            enumerable: !1,
            configurable: !0
        }),
        (h.prototype.recycle = function () {
            this._skill && (this._skill.del(this.node), (this._skill = null)),
                (this.target = null),
                s.default.inst.putNodeToPool(this.node);
        }),
        (h.prototype.onLoad = function () {
            a.prototype.onLoad.call(this), (this.animComp = new c.FrameComp(this.node, this.bodySp));
            for (var t = [], e = 0; e <= 7; e++) t.push(this.lightAtlas.getSpriteFrame("" + e));
            this.animComp.setData({name: "light", frames: t, interval: 0.08, loop: !0});
        }),
        (h.prototype.onEnable = function () {
            this.animComp && this.animComp.play("light");
        }),
        (h.prototype.setData = function (t, e, o) {
            this.target = t.target;
            var n = l.default.getDistance(t.pre_pos, t.to_pos);
            this.bodySp.node.scaleY = n / 300;
            n = l.default.getAngleTwoPoint(t.pre_pos, t.to_pos);
            (this.node.angle = n),
                (this._hurtValue = e),
                (this._skill = o),
                (this.curr_interval = this.hurt_interval = 0),
                (this.duration = 0.6),
                (this.hurt_delay = t.hurt_delay || 0.3);
        }),
        (h.prototype.onUpdate = function (t) {
            this.node.parent &&
                (this.animComp.onUpdate(t),
                (this.duration -= t),
                this.duration <= 0
                    ? this.recycle()
                    : ((this.hurt_delay -= t),
                      this.target &&
                          this.hurt_delay <= 0 &&
                          ((t = this.calcValue()),
                          this.target.onLostHp(t, this.skill.getData().confVo),
                          (this.target = null))));
        }),
        r([e(cc.Sprite)], h.prototype, "bodySp", void 0),
        r([e(cc.SpriteAtlas)], h.prototype, "lightAtlas", void 0),
        r([t], h));
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.bodySp = null),
        (t.lightAtlas = null),
        (t.animComp = null),
        (t.duration = 0.3),
        (t.hurt_delay = 0),
        (t.target = null),
        t
    );
}
o.default = t;
