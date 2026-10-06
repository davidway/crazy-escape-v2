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
    s = t("ArrayUtil"),
    l = t("MathUtil"),
    c = t("FrameComp"),
    u = t("HeroController"),
    p = t("MoveSys"),
    h = t("DragonSub"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(d, a),
        (d.prototype.onLoad = function () {
            var r = this;
            (this.circle.node.active = !1), (this.subItem.active = !1);
            var t = this.subItem.getComponent(h.default);
            this.subs.push(t),
                this.createSub(10),
                (this.normalSp = this.atlas.getSpriteFrame("jingling_1")),
                (this.maxSp = this.atlas.getSpriteFrame("jingling_2")),
                (this.circleAnim = new c.FrameComp(this.node, this.circle));
            t = function (t, e, o) {
                for (var n = [], i = 1; i <= e; i++) n.push(r.atlas.getSpriteFrame(t + i));
                r.circleAnim.setData({name: o, frames: n, interval: 0.06, loop: !0});
            };
            t("circle", 2, "normal"), t("circle_max", 2, "max"), (this.isMax = this._isMax);
        }),
        Object.defineProperty(d.prototype, "isMax", {
            set: function (e) {
                var t;
                (this._isMax = e),
                    this.circleAnim &&
                        ((this.body.spriteFrame = e ? this.maxSp : this.normalSp),
                        (this.circle.node.scale = 0.7),
                        this.subs.forEach(function (t) {
                            t.isMax = e;
                        }),
                        null === (t = this.circleAnim) || void 0 === t || t.play(e ? "max" : "normal"));
            },
            enumerable: !1,
            configurable: !0
        }),
        (d.prototype.setHurt = function (e) {
            (this.hurtValue = e),
                this.subs.forEach(function (t) {
                    t.setHurt(e);
                });
        }),
        (d.prototype.onEnable = function () {
            this.pos = this.node.position;
            var t = l.default.randomRangeInt(-80, 80),
                e = l.default.randomRangeInt(100, 150);
            (this.content.position = cc.v3(cc.v3(t, e))), (this.delay = 1), this.calcRandomPos();
        }),
        (d.prototype.createSub = function (t) {
            for (var e = 0; e < t; e++) {
                var o = cc.instantiate(this.subItem);
                (o.parent = this.lights), (o.active = !1);
                o = o.getComponent(h.default);
                this.subs.push(o);
            }
        }),
        (d.prototype.setData = function (t, e, o) {
            (this.hurtValue = e),
                (this.attack_dis = t.attack_dis),
                (this.duration = t.duration),
                (this.circle.node.active = !1),
                this.subs.length < t.count && this.createSub(t.count - this.subs.length);
            var n = this.findTargets(t.count);
            if (0 < n.length) {
                for (var i = [], r = 0, a = this.subs; r < a.length; r++) {
                    var s = a[r];
                    s.target && i.push(s.target);
                }
                for (var l = 0; l < t.count; l++)
                    if (!this.subs[l].node.active) {
                        var c = (function () {
                            for (var t = n.length; 0 <= t; t--) {
                                var e = n.pop();
                                if (!i.includes(e)) return e;
                            }
                            return null;
                        })();
                        if (!c) break;
                        (this.subs[l].isMax = this._isMax),
                            (this.subs[l].node.active = !0),
                            this.subs[l].setData({duration: this.duration, target: c}, this.hurtValue, o);
                    }
            }
        }),
        (d.prototype.onUpdate = function (t) {
            this.circleAnim.onUpdate(t),
                this.updatePos(t),
                (this.bodyPos.y += this.sign),
                (this.bodyPos.y < -10 || 10 < this.bodyPos.y) && (this.sign = -this.sign),
                (this.body.node.position = this.bodyPos),
                (this.circle.node.position = this.bodyPos);
            for (var e = !1, o = 0, n = this.subs; o < n.length; o++) {
                var i = n[o];
                i.node.active && i.onUpdate(t, this.node.position.add(this.content.position).sub(this.bodyPos)),
                    i.node.active && (e = !0);
            }
            this.circle.node.active = e;
        }),
        (d.prototype.findTargets = function () {
            for (var t = [], e = p.MoveSys.nearList, o = 0; o < e.length; o++) {
                var n = e[o];
                n.distance <= this.attack_dis && t.push(n.monster);
            }
            return s.default.shuffle(t);
        }),
        (d.prototype.updatePos = function (t) {
            var e;
            l.default.copy(this.pos, u.HeroController.getHeroPos()),
                (this.node.position = this.pos),
                (this.delay -= t),
                this.delay < 0 &&
                    ((this.now_time += t),
                    (e = cc.misc.clamp01(this.now_time / this.move_time)),
                    (t = cc.v3()),
                    this.start_pos.lerp(this.target_pos, e, t),
                    (this.content.position = t),
                    (this.body.node.scaleX = this.target_pos.x > this.start_pos.x ? -this.bodyScale : this.bodyScale),
                    1 == e && (this.calcRandomPos(), (this.delay = l.default.randomRangeFloat(0.2, 2))));
        }),
        (d.prototype.calcRandomPos = function () {
            var t = l.default.randomRangeInt(-80, 80),
                e = l.default.randomRangeInt(100, 180);
            (this.target_pos.x = t),
                (this.target_pos.y = e),
                l.default.copy(this.start_pos, this.content.position),
                (this.now_time = 0),
                (this.move_time = cc.Vec3.distance(this.start_pos, this.target_pos) / 40);
        }),
        (d.prototype.recycle = function () {
            for (var t = 0, e = this.subs; t < e.length; t++) e[t].recycle();
            this.circle.node.active = !1;
        }),
        r([e(cc.Node)], d.prototype, "content", void 0),
        r([e(cc.Sprite)], d.prototype, "body", void 0),
        r([e(cc.Sprite)], d.prototype, "circle", void 0),
        r([e(cc.Node)], d.prototype, "lights", void 0),
        r([e(cc.Node)], d.prototype, "subItem", void 0),
        r([e(cc.SpriteAtlas)], d.prototype, "atlas", void 0),
        r([t], d));
function d() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.content = null),
        (t.body = null),
        (t.circle = null),
        (t.lights = null),
        (t.subItem = null),
        (t.atlas = null),
        (t.normalSp = null),
        (t.maxSp = null),
        (t.attack_dis = 0),
        (t.duration = null),
        (t.pos = null),
        (t.delay = 1),
        (t.start_pos = cc.v3()),
        (t.target_pos = cc.v3()),
        (t.move_time = 0),
        (t.now_time = 0),
        (t.bodyScale = 0.5),
        (t.sign = -0.3),
        (t.bodyPos = cc.v3()),
        (t.subs = []),
        (t._isMax = !1),
        (t.circleAnim = null),
        (t.hurtValue = 0),
        t
    );
}
o.default = t;
