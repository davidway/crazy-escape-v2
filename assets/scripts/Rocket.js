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
    s = t("App"),
    l = t("ResMgr"),
    c = t("FrameComp"),
    u = t("HeroController"),
    p = t("GameSetting"),
    h = t("BulletType"),
    d = t("EffectMgr"),
    f = t("GameMgr"),
    y = t("BaseElement"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = y.default),
        i(g, a),
        Object.defineProperty(g.prototype, "bulletType", {
            get: function () {
                return h.BulletType.Rocket;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(g.prototype, "isMax", {
            set: function (t) {
                var e;
                (this._isMax = t),
                    null === (e = this.animComp) || void 0 === e || e.play(t ? "max" : "normal"),
                    (this.bodySp.node.scale = t ? 1 : 0.8),
                    (this.tw.active = t);
            },
            enumerable: !1,
            configurable: !0
        }),
        (g.prototype.onLoad = function () {
            var r = this;
            a.prototype.onLoad.call(this), (this.animComp = new c.FrameComp(this.node, this.bodySp));
            function t(t, e, o) {
                for (var n = [], i = 1; i <= 6; i++) n.push(t.getSpriteFrame(e + i));
                r.animComp.setData({name: o, frames: n, interval: 0.06, loop: !0});
            }
            t(this.rocketAtlas, "rocket_", "normal"),
                t(this.rocketAtlas, "rocketet_max_", "max"),
                (this.isMax = this._isMax);
        }),
        (g.prototype.setData = function (t, e, o) {
            (this.speed = t.speed),
                (this.duration = t.duration),
                (this.radius = t.radius),
                (this.bombRadius = t.bombRadius),
                (this.bombCount = t.bombCount),
                (this._hurtValue = e),
                (this.curr_interval = 1),
                (this.bombDelay = 0),
                (this.isBomb = !1),
                (this.hurt_interval = Math.ceil(
                    o.getData().confVo.hurt_interval * u.HeroController.getAtrr("skillHurtRate")
                )),
                (this._skill = o),
                (this.node.opacity = 255);
        }),
        (g.prototype.onUpdate = function (t) {
            if ((this.animComp.onUpdate(t), 0 < this.bombDelay))
                return (this.bombDelay -= t), void (this.bombDelay <= 0 && this.onBomb());
            this.isBomb ||
                ((this.duration -= t),
                this.duration <= 0
                    ? this.onBomb()
                    : ((t =
                          1 == f.default.inst.timeScale
                              ? this.node.position.addSelf(this.speed)
                              : this.node.position.addSelf(this.speed.mul(f.default.inst.timeScale))),
                      this.node.setPosition(t),
                      this.calcCircleHurt(t, this.radius),
                      this._hitNum <= 0 &&
                          ((t = null), 0 < this.hitPos.length && (t = this.hitPos[0]), this.onBomb(t))));
        }),
        (g.prototype.onBomb = function (t) {
            (this._hitNum = Number.MAX_SAFE_INTEGER),
                (this.node.opacity = p.GameSetting.inst.isDebug ? 255 : 0),
                (this.isBomb = !0),
                --this.bombCount,
                this.calcCircleHurt(this.node.position, this.bombRadius, !0),
                s.app.sound.playEffect("火焰箭爆炸音效"),
                d.default.inst.playRockerBomb(
                    this._isMax ? 2 : 1,
                    t || this.node.position,
                    this.bombRadius / 90,
                    this.node.parent
                ),
                this.bombCount <= 0 ? this.recycle() : (this.bombDelay = 0.5);
        }),
        (g.prototype.recycle = function () {
            this.skill && (this.skill.del(this.node), (this._skill = null)), l.default.inst.putNodeToPool(this.node);
        }),
        r([e(cc.Node)], g.prototype, "tw", void 0),
        r([e(cc.Sprite)], g.prototype, "bodySp", void 0),
        r([e(cc.SpriteAtlas)], g.prototype, "rocketAtlas", void 0),
        r([t], g));
function g() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.tw = null),
        (t.bodySp = null),
        (t.rocketAtlas = null),
        (t.speed = null),
        (t.duration = 0),
        (t.radius = 0),
        (t.bombRadius = 0),
        (t.bombCount = 0),
        (t.bombDelay = 0),
        (t.isBomb = !1),
        (t.animComp = null),
        t
    );
}
o.default = t;
