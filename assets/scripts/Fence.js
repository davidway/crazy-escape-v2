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
    u = t("ResMgr"),
    p = t("MathUtil"),
    h = t("EventTypes"),
    d = t("Flash"),
    f = t("MobHit"),
    y = t("DropType"),
    g = t("GameEnums"),
    m = t("Monster"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = m.default),
        i(_, l),
        Object.defineProperty(_.prototype, "canMove", {
            get: function () {
                return !1;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(_.prototype, "type", {
            get: function () {
                return g.MonsterType.FENCE;
            },
            enumerable: !1,
            configurable: !0
        }),
        (_.prototype.onLoad = function () {
            l.prototype.onLoad.call(this),
                (this.flashComp = this.body.node.addComponent(d.default)),
                (this.hitComp = this.node.addComponent(f.default));
        }),
        (_.prototype.onEnable = function () {
            l.prototype.onEnable.call(this), this.initAmins();
        }),
        (_.prototype.onDisable = function () {
            l.prototype.onDisable.call(this), (this.body.spriteFrame = null);
        }),
        (_.prototype.onIdle = function () {}),
        (_.prototype.onMove = function () {}),
        (_.prototype.onAttack = function () {}),
        (_.prototype.setScale = function (t) {
            this.body.node.scale = t;
        }),
        (_.prototype.initAmins = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, u.default.inst.getAsset(this.mSkin.url, cc.Texture2D, "actors")];
                        case 1:
                            return (e = t.sent()), (this.body.spriteFrame = new cc.SpriteFrame(e)), [2];
                    }
                });
            });
        }),
        (_.prototype.onLostHp = function () {
            this.flashComp.play(), this.hitComp.play();
        }),
        (_.prototype.onDie = function () {
            l.prototype.onDie.call(this);
        }),
        (_.prototype.onUpdate = function (t) {
            l.prototype.onUpdate.call(this, t);
        }),
        (_.prototype.setDir = function (t) {
            this.body.node.scaleX = t;
        }),
        (_.prototype.checkDrop = function () {
            if (this.mConf.exp) {
                var e = 0;
                this.mConf.exp.forEach(function (t) {
                    e += t.ratio;
                });
                for (var t = p.default.randomRangeInt(0, e), o = 0, n = 0; n < this.mConf.exp.length; n++) {
                    var i = this.mConf.exp[n];
                    if (t <= (o += i.ratio)) {
                        i.type != y.ExpType.None &&
                            c.app.event.emit(h.EventType.On_Exp_Drop, {
                                pt: this.moveComp.getPosition(),
                                type: i.type,
                                value: i.value
                            });
                        break;
                    }
                }
            }
        }),
        r([e(cc.Sprite)], _.prototype, "body", void 0),
        r([t], _));
function _() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (t.body = null), (t.flashComp = null), (t.hitComp = null), t;
}
o.default = t;
