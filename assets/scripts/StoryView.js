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
        },
    a =
        (this && this.__awaiter) ||
        function (t, a, s, l) {
            return new (s = s || Promise)(function (o, e) {
                function n(t) {
                    try {
                        r(l.next(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function i(t) {
                    try {
                        r(l.throw(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function r(t) {
                    var e;
                    t.done
                        ? o(t.value)
                        : ((e = t.value) instanceof s
                              ? e
                              : new s(function (t) {
                                    t(e);
                                })
                          ).then(n, i);
                }
                r((l = l.apply(t, a || [])).next());
            });
        },
    s =
        (this && this.__generator) ||
        function (o, n) {
            var i,
                r,
                a,
                s = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                },
                t = {next: e(0), throw: e(1), return: e(2)};
            return (
                "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                        return this;
                    }),
                t
            );
            function e(e) {
                return function (t) {
                    return (function (e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (
                                    ((i = 1),
                                    r &&
                                        (a =
                                            2 & e[0]
                                                ? r.return
                                                : e[0]
                                                ? r.throw || ((a = r.return) && a.call(r), 0)
                                                : r.next) &&
                                        !(a = a.call(r, e[1])).done)
                                )
                                    return a;
                                switch (((r = 0), (e = a ? [2 & e[0], a.value] : e)[0])) {
                                    case 0:
                                    case 1:
                                        a = e;
                                        break;
                                    case 4:
                                        return s.label++, {value: e[1], done: !1};
                                    case 5:
                                        s.label++, (r = e[1]), (e = [0]);
                                        continue;
                                    case 7:
                                        (e = s.ops.pop()), s.trys.pop();
                                        continue;
                                    default:
                                        if (
                                            !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                                            (6 === e[0] || 2 === e[0])
                                        ) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                                            s.label = e[1];
                                            break;
                                        }
                                        if (6 === e[0] && s.label < a[1]) {
                                            (s.label = a[1]), (a = e);
                                            break;
                                        }
                                        if (a && s.label < a[2]) {
                                            (s.label = a[2]), s.ops.push(e);
                                            break;
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                e = n.call(o, s);
                            } catch (t) {
                                (e = [6, t]), (r = 0);
                            } finally {
                                i = a = 0;
                            }
                        if (5 & e[0]) throw e[1];
                        return {value: e[0] ? e[1] : void 0, done: !0};
                    })([e, t]);
                };
            }
        };
Object.defineProperty(o, "__esModule", {value: !0});
var l,
    c = t("BasePanel"),
    u = t("UIEnum"),
    p = t("decorator"),
    h = t("GameMgr"),
    d = t("App"),
    f = t("TrackType"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (l = c.default),
        i(y, l),
        (y.prototype.initView = function () {
            var t;
            null === (t = d.app.track) || void 0 === t || t.trackEvent(f.TrackType.Story_Start);
        }),
        (y.prototype.updateView = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (h.default.inst.chapter = 0),
                                h.default.inst.playGame(h.default.inst.chapter, !1),
                                d.app.sound.stopMusic(),
                                d.app.sound.playEffect("新手指引第一张图片飞出音效"),
                                [4, this.move(this.step1, 0.3, cc.v3(-600, 155.12), cc.v3(-180, 155.12))]
                            );
                        case 1:
                            return t.sent(), this.blink(this.step1, 3), [4, this.delay(0.5)];
                        case 2:
                            return (
                                t.sent(),
                                d.app.sound.playEffect("新手指引第一张图片飞出音效"),
                                [4, this.move(this.step2, 0.3, cc.v3(600, 149.12), cc.v3(172, 149.12))]
                            );
                        case 3:
                            return t.sent(), [4, this.delay(0.5)];
                        case 4:
                            return (
                                t.sent(),
                                [
                                    4,
                                    this.move(
                                        this.step3,
                                        0.3,
                                        cc.v3(0, -(cc.winSize.height >> 1) - 160),
                                        cc.v3(0, -115)
                                    )
                                ]
                            );
                        case 5:
                            return t.sent(), d.app.sound.playEffect("新手指引吃肉图片出现音效"), [4, this.delay(0.5)];
                        case 6:
                            return t.sent(), [4, this.appear(this.step3_1, 0.3)];
                        case 7:
                            return t.sent(), [4, this.delay(0.5)];
                        case 8:
                            return (
                                t.sent(),
                                (this.dragon1.active = !0),
                                (this.dragon2.active = !0),
                                (this.dragon3.active = !0),
                                (this.dragon4.active = !0),
                                [4, this.delay(2.5)]
                            );
                        case 9:
                            return (
                                t.sent(),
                                (this.step4.active = !0),
                                (this.s1.active = !0),
                                this.move(this.content1, 0.3, cc.v3(), cc.v3(-750, 0)),
                                this.move(this.step4, 0.3, cc.v3(750, 21), cc.v3(0, 21)),
                                [4, this.delay(1)]
                            );
                        case 10:
                            return (
                                t.sent(),
                                (this.content1.active = !1),
                                (this.s1.active = !1),
                                (this.s2.active = !0),
                                d.app.sound.playEffect("新手指引中，第二页图片切换时的音效"),
                                this.blink(this.step4, 5),
                                [4, this.delay(0.8)]
                            );
                        case 11:
                            return (
                                t.sent(),
                                (this.bg.active = !1),
                                d.app.sound.playMusic("森林地图bgm"),
                                cc
                                    .tween(this.node)
                                    .to(0.1, {position: cc.v3(0, -100), scale: 0.2})
                                    .call(function () {
                                        var t;
                                        d.app.gui.closeUI(u.UIEnum.StoryView),
                                            null === (t = d.app.track) ||
                                                void 0 === t ||
                                                t.trackEvent(f.TrackType.Story_End);
                                    })
                                    .start(),
                                [2]
                            );
                    }
                });
            });
        }),
        (y.prototype.blink = function (t, e) {
            cc.tween(t)
                .sequence(
                    cc.tween().to(0.05, {angle: -5}),
                    cc.tween().to(0.05, {angle: 0}),
                    cc.tween().to(0.05, {angle: 5}),
                    cc.tween().to(0.05, {angle: 0})
                )
                .repeat(e)
                .start();
        }),
        (y.prototype.move = function (e, o, n, i) {
            return new Promise(function (t) {
                (e.active = !0),
                    (e.position = n),
                    cc
                        .tween(e)
                        .to(o, {position: i})
                        .call(function () {
                            t();
                        })
                        .start();
            });
        }),
        (y.prototype.delay = function (e) {
            var o = this;
            return new Promise(function (t) {
                cc.tween(o.node)
                    .delay(e)
                    .call(function () {
                        t();
                    })
                    .start();
            });
        }),
        (y.prototype.appear = function (e, o) {
            return new Promise(function (t) {
                cc.tween(e)
                    .to(o, {opacity: 255})
                    .call(function () {
                        t();
                    })
                    .start();
            });
        }),
        r([p.autoBind("cc.Node", "bg")], y.prototype, "bg", void 0),
        r([p.autoBind("cc.Node", "content/content1")], y.prototype, "content1", void 0),
        r([p.autoBind("cc.Node", "content/content1/step1")], y.prototype, "step1", void 0),
        r([p.autoBind("cc.Node", "content/content1/step2")], y.prototype, "step2", void 0),
        r([p.autoBind("cc.Node", "content/content1/step3")], y.prototype, "step3", void 0),
        r([p.autoBind("cc.Node", "content/content1/step3/step3_1")], y.prototype, "step3_1", void 0),
        r([p.autoBind("cc.Node", "content")], y.prototype, "content", void 0),
        r([p.autoBind("cc.Node", "content/step4")], y.prototype, "step4", void 0),
        r([p.autoBind("cc.Node", "content/dragon1")], y.prototype, "dragon1", void 0),
        r([p.autoBind("cc.Node", "content/dragon2")], y.prototype, "dragon2", void 0),
        r([p.autoBind("cc.Node", "content/dragon3")], y.prototype, "dragon3", void 0),
        r([p.autoBind("cc.Node", "content/dragon4")], y.prototype, "dragon4", void 0),
        r([p.autoBind("cc.Node", "content/step4/s1")], y.prototype, "s1", void 0),
        r([p.autoBind("cc.Node", "content/step4/s2")], y.prototype, "s2", void 0),
        r([t], y));
function y() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.bg = null),
        (t.content1 = null),
        (t.step1 = null),
        (t.step2 = null),
        (t.step3 = null),
        (t.step3_1 = null),
        (t.content = null),
        (t.step4 = null),
        (t.dragon1 = null),
        (t.dragon2 = null),
        (t.dragon3 = null),
        (t.dragon4 = null),
        (t.s1 = null),
        (t.s2 = null),
        t
    );
}
o.default = t;
