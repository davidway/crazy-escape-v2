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
    c = t("App"),
    u = t("CCSkeleton"),
    p = t("MathUtil"),
    h = t("EventTypes"),
    d = t("DropController"),
    f = t("GameSetting"),
    y = t("Flash"),
    g = t("DropType"),
    m = t("GameEnums"),
    _ = t("TrackType"),
    v = t("GameMgr"),
    b = t("Monster"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = b.default),
        i(w, l),
        Object.defineProperty(w.prototype, "type", {
            get: function () {
                return m.MonsterType.ELITE;
            },
            enumerable: !1,
            configurable: !0
        }),
        (w.prototype.onLoad = function () {
            l.prototype.onLoad.call(this),
                (this.body.autoClear = !0),
                (this.circle = this.node.getChildByName("circle")),
                (this.flashComp = this.body.node.addComponent(y.default)),
                this.flashComp.setColor(cc.Color.WHITE.fromHEX("#EAEAEA"));
        }),
        (w.prototype.onEnable = function () {
            var t = this;
            l.prototype.onEnable.call(this),
                (this.arrow.active = !1),
                this.scheduleOnce(function () {
                    return a(t, void 0, void 0, function () {
                        return s(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.body.setSource(this.mSkin.url, "actors")];
                                case 1:
                                    return (
                                        t.sent(),
                                        this.body.setSkin("default"),
                                        (this.isReady = !0),
                                        this.onMove(),
                                        c.app.event.emit(h.EventType.Game_Show_Dir_Guide, {
                                            type: 2,
                                            target: this,
                                            iconUrl: this.mSkin.head,
                                            bundle: "icons"
                                        }),
                                        [2]
                                    );
                            }
                        });
                    });
                }, 0.1),
                f.GameSetting.inst.isDebug &&
                    this.circle &&
                    ((this.circle.active = !0),
                    this.scheduleOnce(function () {
                        return a(t, void 0, void 0, function () {
                            var t;
                            return s(this, function () {
                                return (
                                    (t = this.getCircle()),
                                    (this.circle.position = this.offset),
                                    (this.circle.width = this.circle.height = 2 * t.raduis),
                                    [2]
                                );
                            });
                        });
                    }, 3));
        }),
        (w.prototype.setScale = function (t) {
            (this.bodyScale = t), (this.body.node.scale = t);
        }),
        (w.prototype.setDir = function (t) {
            this.body.node.scaleX = -t * this.bodyScale * (1 == this.mSkin.mirror ? -1 : 1);
        }),
        (w.prototype.onIdle = function () {}),
        (w.prototype.onMove = function () {
            this.isReady &&
                !this._isDie &&
                this.body.setAnimation({act: m.EliteActs.WALK, loop: !0, timeScale: v.default.inst.timeScale});
        }),
        (w.prototype.onAttack = function () {}),
        (w.prototype.onLostHp = function (t, e) {
            l.prototype.onLostHp.call(this, t, e), this.isDie || this.flashComp.play();
        }),
        (w.prototype.onDie = function () {
            var t,
                e = this;
            0 == v.default.inst.chapter &&
                (null === (t = c.app.track) || void 0 === t || t.trackEvent(_.TrackType.Kill_Elite)),
                c.app.sound.playEffect("精英怪物死亡音效"),
                this.body.setAnimation({
                    act: m.EliteActs.DIE,
                    loop: !1,
                    timeScale: v.default.inst.timeScale,
                    complete: function () {
                        l.prototype.onDie.call(e);
                    }
                });
        }),
        (w.prototype.onUpdate = function (t) {
            l.prototype.onUpdate.call(this, t);
        }),
        (w.prototype.checkDrop = function () {
            d.default.inst.addDrop({
                type: g.DropType.Chest,
                data: {pt: this.node.position, type: 0, value: 0, index: 0}
            });
        }),
        (w.prototype.showArrow = function () {
            var t = v.default.inst.getTargetCenterPos(this.target),
                t = p.default.getAngleTwoPoint(this.moveComp.getPosition(), t);
            (this.arrow.active = !0), (this.arrow.angle = t);
        }),
        (w.prototype.hideArrow = function () {
            this.arrow.active = !1;
        }),
        r([e(u.default)], w.prototype, "body", void 0),
        r([e(cc.Node)], w.prototype, "arrow", void 0),
        r([t], w));
function w() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (t.body = null), (t.arrow = null), (t.flashComp = null), (t.isReady = !1), t;
}
o.default = t;
