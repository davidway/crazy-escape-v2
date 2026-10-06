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
    u = t("HeroController"),
    p = t("GameSetting"),
    h = t("BulletType"),
    d = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = d.default),
        i(f, a),
        Object.defineProperty(f.prototype, "isMax", {
            set: function (t) {
                var e;
                (this._isMax = t), null === (e = this.animComp) || void 0 === e || e.play(t ? "max" : "normal");
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "bulletType", {
            get: function () {
                return h.BulletType.Greatsword;
            },
            enumerable: !1,
            configurable: !0
        }),
        (f.prototype.recycle = function () {
            this.skill && (this.skill.del(this.node), (this._skill = null)), s.default.inst.putNodeToPool(this.node);
        }),
        (f.prototype.onLoad = function () {
            var r = this;
            a.prototype.onLoad.call(this), (this.animComp = new c.FrameComp(this.node, this.effectSp));
            function t(t, e, o) {
                for (var n = [], i = 1; i <= 6; i++) n.push(t.getSpriteFrame(e + i));
                for (i = 0; i < 5; i++) n.unshift(t.getSpriteFrame(e + 1));
                r.animComp.setData({name: o, frames: n, interval: 0.03, loop: !1});
            }
            t(this.fireAtlas, "Knife_light_", "normal"), t(this.fireAtlas, "Knife_light_max_", "max");
        }),
        (f.prototype.setData = function (t, e, o) {
            (this.dir = t.dir),
                (this.max_time = this.duration = 0.33),
                (this.radius = t.radius),
                (this.angle = t.angle),
                (this.effectSp.node.position = cc.v3(this.radius - 20, 0)),
                (this._hurtValue = e),
                (this.curr_interval = this.hurt_interval =
                    Math.ceil(o.getData().confVo.hurt_interval * u.HeroController.getAtrr("skillHurtRate"))),
                (this._skill = o),
                l.default.copy(this.pos, this.node.position),
                this.playSound("大剑音效"),
                this.play(this.dir),
                (this.isMax = this._isMax);
        }),
        (f.prototype.play = function (t) {
            var e = l.default.getAngleTwoPoint(cc.v3(), t),
                o = this.angle >> 1,
                n = e + o,
                t = e - o;
            (this.points.length = 0), p.GameSetting.inst.isDebug && this.drawSector(n, t, this.radius);
            var n = l.default.getRadian(n),
                i = this.getPos(n);
            l.default.copy(this.startPoint, i), this.points.push(this.pos);
            for (var r = Math.ceil(this.angle / 5), a = 0; a <= r; a++) {
                var s = l.default.rotatePoint(i, 5 * -a, this.pos);
                this.points.push(s);
            }
            (this.to_pos.x = this.radius + 20), (this.body.angle = e), (this.effectSp.node.position = cc.v3(0, 0));
            (n = l.default.getRadian(o)), (n = (this.radius * Math.sin(n)) / 90);
            (this.to_scale = n),
                (this.effectSp.node.scaleX = 0),
                (this.effectSp.node.scaleY = 0),
                (this.appear_time = 0);
        }),
        (f.prototype.getPos = function (t) {
            var e = this.radius * Math.cos(t),
                t = this.radius * Math.sin(t);
            return cc.v3(this.pos.x + e, this.pos.y + t);
        }),
        (f.prototype.appear = function (t) {
            var e;
            this.appear_time < 0.1 &&
                ((this.appear_time += t),
                (e = cc.misc.clamp01(this.appear_time / 0.1)),
                (t = cc.v3().lerp(this.to_pos, e)),
                (this.effectSp.node.position = t),
                (e = cc.misc.lerp(0, this.to_scale, e)),
                (this.effectSp.node.scaleX = -e),
                (this.effectSp.node.scaleY = e));
        }),
        (f.prototype.onUpdate = function (t) {
            this.appear(t),
                this.animComp.onUpdate(t),
                (this.duration -= t),
                this.duration <= 0
                    ? this.recycle()
                    : ((t = u.HeroController.getHeroCenter()),
                      this.node.setPosition(t),
                      (t = null),
                      (t = 0.5 <= this.duration / this.max_time ? this.points : t) &&
                          0 < t.length &&
                          this.calcPolygonHurt(t) &&
                          (this.points.length = 0));
        }),
        r([e(cc.Node)], f.prototype, "body", void 0),
        r([e(cc.Sprite)], f.prototype, "effectSp", void 0),
        r([e(cc.SpriteAtlas)], f.prototype, "fireAtlas", void 0),
        r([t], f));
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.body = null),
        (t.effectSp = null),
        (t.fireAtlas = null),
        (t.animComp = null),
        (t.duration = 0),
        (t.angle = 100),
        (t.startPoint = cc.v3()),
        (t.pos = cc.v3()),
        (t.points = []),
        (t.to_pos = cc.v3()),
        (t.to_scale = 0),
        (t.appear_time = 0),
        (t.max_time = 0),
        t
    );
}
o.default = t;
