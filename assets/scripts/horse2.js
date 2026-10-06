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
    c = t("GameSetting"),
    u = t("LoadResources"),
    p = t("formwork"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = p.default),
        i(h, l),
        (h.prototype.onLoad = function () {
            this.btnClose.on("click", this.closeView, this),
                this.horse.on(cc.Node.EventType.TOUCH_START, this.clickHorse, this),
                (this.imageNum = c.GameSetting.inst.seek_horse2);
            for (var t = 0; t < this.imageNum; t++) 0 == t || this.imageArr.push(t);
        }),
        (h.prototype.start = function () {}),
        (h.prototype.onEnable = function () {
            this.init();
        }),
        (h.prototype.onDisable = function () {
            this.unschedule(this.init);
        }),
        (h.prototype.init = function () {
            return a(this, void 0, void 0, function () {
                var e, o, n;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.err
                                ? (this.showTipe("出错了，试试其他游戏吧"), [2])
                                : (this.horse.setPosition(this.randomPos()),
                                  (e = this.randomArray(this.imageArr)),
                                  this.showWait(),
                                  [4, this.getImage(0)]);
                        case 1:
                            return (o = t.sent()), [4, this.getImage(e[0])];
                        case 2:
                            return (
                                (n = t.sent()),
                                this.closeWait(),
                                n && o
                                    ? ((this.map.getComponent(cc.Sprite).spriteFrame = n),
                                      (this.horse.getComponent(cc.Sprite).spriteFrame = o),
                                      (this.label.string = "找出图中的小马"))
                                    : (this.showTipe("出错了，试试其他游戏吧"), this.closeWait(), (this.err = !0)),
                                [2]
                            );
                    }
                });
            });
        }),
        (h.prototype.clickHorse = function () {
            (this.label.string = "找到了"), this.scheduleOnce(this.init, 0.5);
        }),
        (h.prototype.randomPos = function () {
            var t = Math.floor(this.map.width / 2 - this.horse.width / 2) + this.map.x,
                e = Math.floor(this.map.height / 2 - this.horse.height / 2) + this.map.y,
                t = this.getRandom(-t, t),
                e = this.getRandom(-e, e);
            return cc.v2(t, e);
        }),
        (h.prototype.getRandom = function (t, e) {
            return t + Math.random() * (e - t);
        }),
        (h.prototype.randomArray = function (t) {
            for (var e = t.length - 1; 0 <= e; e--) {
                var o = Math.floor(Math.random() * (e + 1)),
                    n = t[o];
                (t[o] = t[e]), (t[e] = n);
            }
            return t;
        }),
        (h.prototype.getImage = function (n) {
            return a(this, void 0, void 0, function () {
                var e, o;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.imageData.get(n) ? (console.log("have"), [2, this.imageData.get(n)]) : [3, 1];
                        case 1:
                            return [4, u.LoadResources.inst.loadImage(this.url, n + "", "png")];
                        case 2:
                            return (
                                (e = t.sent()),
                                (o = new cc.SpriteFrame(e)),
                                e ? [3, 4] : [4, u.LoadResources.inst.loadImage(this.url, n + "", "jpg")]
                            );
                        case 3:
                            (e = t.sent()), o.setTexture(e), (t.label = 4);
                        case 4:
                            return e ? (this.imageData.set(n, o), [2, o]) : [2, null];
                    }
                });
            });
        }),
        r([e(cc.Node)], h.prototype, "horse", void 0),
        r([e(cc.Node)], h.prototype, "map", void 0),
        r([e(cc.Label)], h.prototype, "label", void 0),
        r([t], h));
function h() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.horse = null),
        (t.map = null),
        (t.label = null),
        (t.url = "https://cdn-wxgame.328vip.com/fkdts/seekhorse2/"),
        (t.imageData = new Map()),
        (t.imageArr = []),
        (t.imageNum = 30),
        (t.err = !1),
        t
    );
}
o.default = t;
