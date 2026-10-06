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
    s = t("BasePanel"),
    l = t("decorator"),
    p = t("App"),
    c = t("CloseUI"),
    u = t("EventTypes"),
    h = t("MathUtil"),
    d = cc._decorator,
    e = d.ccclass,
    t = d.property,
    e =
        (d.inspector,
        (a = s.default),
        i(f, a),
        (f.prototype.initView = function () {
            for (var e = this, t = 0; t < this.icon.length; t++) {
                this.Pool[t] = new cc.NodePool();
                for (var o = 0; o < 2 * this.num; o++) {
                    var n = cc.instantiate(this.pref);
                    (n.getComponent(cc.Sprite).spriteFrame = this.icon[t]), this.Pool[t].put(n);
                }
            }
            this.scheduleOnce(function () {
                var t = c.default.inst.getNode("top");
                c.default.inst.getNode("role"),
                    (e.Pos[0] = e.showNode.parent.convertToNodeSpaceAR(
                        t.getChildByName("gold").convertToWorldSpaceAR(cc.v2(0))
                    )),
                    (e.Pos[1] = e.Pos[0]),
                    (e.Pos[2] = e.showNode.parent.convertToNodeSpaceAR(
                        t.getChildByName("gem").convertToWorldSpaceAR(cc.v2(0))
                    )),
                    (e.Pos[3] = e.showNode.parent.convertToNodeSpaceAR(
                        t.getChildByName("gene").convertToWorldSpaceAR(cc.v2(0))
                    ));
            }, 0.1);
        }),
        (f.prototype.updateView = function () {}),
        (f.prototype.show = function () {}),
        (f.prototype.onDisable = function () {}),
        (f.prototype.addPref = function (e, o) {
            var n = this;
            console.log(this.Pos);
            for (
                var a = this.getCirclePoints(130, cc.v2(0), this.num),
                    s = null,
                    l = null,
                    c = [],
                    s = this.Pool[e],
                    u = this.pref,
                    i = this.Pos[e],
                    l = this.showNode,
                    t = 0;
                t < a.length;
                t++
            )
                !(function (i) {
                    var r = null;
                    0 < s.size()
                        ? ((r = s.get()), console.log("有"))
                        : (console.log("没有"),
                          ((r = cc.instantiate(u)).getComponent(cc.Sprite).spriteFrame = n.icon[e])),
                        c.push(r),
                        (r.active = !0),
                        l.addChild(r),
                        r.setPosition(cc.v2(0));
                    var t = r.scale;
                    (r.scale = 0),
                        null != a[i] &&
                            cc
                                .tween(r)
                                .to(0.3, {x: a[i].x, y: a[i].y, scale: t}, cc.easeOut(3))
                                .call(function () {
                                    var t = h.default.randomRangeInt(10, 20),
                                        e = cc
                                            .tween()
                                            .to(0.2, {
                                                position: {value: new cc.Vec2(a[i].x, a[i].y + t), easing: "sineOut"}
                                            }),
                                        o = cc
                                            .tween()
                                            .to(0.2, {
                                                position: {value: new cc.Vec2(a[i].x, a[i].y), easing: "sineIn"}
                                            }),
                                        n = cc
                                            .tween()
                                            .to(0.2, {
                                                position: {value: new cc.Vec2(a[i].x, a[i].y - t), easing: "sineOut"}
                                            }),
                                        t = cc
                                            .tween()
                                            .to(0.2, {
                                                position: {value: new cc.Vec2(a[i].x, a[i].y), easing: "sineIn"}
                                            }),
                                        t = cc.tween().sequence(e, o, n, t);
                                    cc.tween(r).then(t).repeatForever().start();
                                })
                                .start();
                })(t);
            this.scheduleOnce(function () {
                var e = 0,
                    t = 0;
                n.schedule(
                    function () {
                        null != c[e] &&
                            (cc.Tween.stopAllByTarget(c[e]),
                            cc
                                .tween(c[e])
                                .to(0.2, {x: i.x, y: i.y}, cc.easeIn(1))
                                .call(function () {
                                    n.isPlayMusic || ((n.isPlayMusic = !0), p.app.sound.playEffect("金币或钻石飞入")),
                                        (c[t].active = !1),
                                        t++,
                                        c.length - 1 == t &&
                                            ((t = 0),
                                            n.scheduleOnce(function () {
                                                for (var t = 0; t < c.length; t++)
                                                    cc.Tween.stopAllByTarget(c[t]),
                                                        c[t].setPosition(cc.v2(0)),
                                                        s.put(c[t]),
                                                        (n.isPlayMusic = !1);
                                                (e = 0), o && o();
                                            }, 0.1));
                                })
                                .start(),
                            e++);
                    },
                    0.05,
                    n.num
                );
            }, 0.3);
        }),
        (f.prototype.getCirclePoints = function (t, e, o, n) {
            void 0 === n && (n = 60);
            for (var i = [], r = (Math.PI / 180) * Math.round(360 / o), a = 0; a < o; a++) {
                var s = e.x + t * Math.sin(r * a),
                    l = e.y + t * Math.cos(r * a);
                i.unshift(cc.v3(s + Math.random() * n, l + Math.random() * n, 0));
            }
            return i;
        }),
        (f.prototype.onGoldAnimation = function (t) {
            this.addPref(0, t);
        }),
        (f.prototype.onExpAnimation = function (t) {
            this.addPref(1, t);
        }),
        (f.prototype.onGemAnimation = function (t) {
            this.addPref(2, t);
        }),
        (f.prototype.onEnergyAnimation = function (t) {
            this.addPref(3, t);
        }),
        r([l.autoBind("cc.Node", "showNode")], f.prototype, "showNode", void 0),
        r([t(cc.Prefab)], f.prototype, "pref", void 0),
        r([t([cc.SpriteFrame])], f.prototype, "icon", void 0),
        r([l.gameEvent(u.EventType.Gold_Animation)], f.prototype, "onGoldAnimation", null),
        r([l.gameEvent(u.EventType.Exp_Animation)], f.prototype, "onExpAnimation", null),
        r([l.gameEvent(u.EventType.Gem_Animation)], f.prototype, "onGemAnimation", null),
        r([l.gameEvent(u.EventType.Energy_Animation)], f.prototype, "onEnergyAnimation", null),
        r([e], f));
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.showNode = null),
        (t.pref = null),
        (t.icon = []),
        (t.Pool = []),
        (t.Pos = []),
        (t.num = 10),
        (t.isPlayMusic = !1),
        t
    );
}
o.default = e;
