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
    l = t("FrameComp"),
    c = t("BulletType"),
    u = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = u.default),
        i(p, a),
        Object.defineProperty(p.prototype, "isMax", {
            set: function (t) {
                var e;
                (this._isMax = t), null === (e = this.animComp) || void 0 === e || e.play(t ? "max" : "light");
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "bulletType", {
            get: function () {
                return c.BulletType.Lightning;
            },
            enumerable: !1,
            configurable: !0
        }),
        (p.prototype.recycle = function () {
            this._skill && (this._skill.del(this.node), (this._skill = null)), s.default.inst.putNodeToPool(this.node);
        }),
        (p.prototype.onLoad = function () {
            var i = this;
            a.prototype.onLoad.call(this), (this.animComp = new l.FrameComp(this.node, this.bodySp));
            function t(t, e) {
                for (var o = [], n = 1; n <= 5; n++) o.push(t.getSpriteFrame("lightning_" + n));
                i.animComp.setData({name: e, frames: o, interval: 0.06, loop: !0});
            }
            t(this.lightAtlas, "light"), t(this.maxAtlas, "max"), (this.isMax = this._isMax);
        }),
        (p.prototype.setData = function (t, e, o) {
            (this.duration = t.duration),
                (this._hurtValue = e),
                (this._skill = o),
                (this.curr_interval = this.hurt_interval = 0),
                this.calcCircleHurt(t.pos, t.radius);
        }),
        (p.prototype.onUpdate = function (t) {
            (this.duration -= t), this.duration <= 0 ? this.recycle() : this.animComp.onUpdate(t);
        }),
        r([e(cc.Sprite)], p.prototype, "bodySp", void 0),
        r([e(cc.SpriteAtlas)], p.prototype, "lightAtlas", void 0),
        r([e(cc.SpriteAtlas)], p.prototype, "maxAtlas", void 0),
        r([t], p));
function p() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.bodySp = null), (t.lightAtlas = null), (t.maxAtlas = null), (t.animComp = null), (t.duration = null), t;
}
o.default = t;
