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
            return a(this, void 0, void 0, function () {
                var t;
                return s(this, function () {
                    for (
                        this.imageNum = c.GameSetting.inst.seek_horse,
                            this.initView(),
                            this.btnClose.on("click", this.closeView, this),
                            t = 0;
                        t < this.imageNum;
                        t++
                    )
                        0 == t || this.imageArr.push(t);
                    return [2];
                });
            });
        }),
        (h.prototype.onEnable = function () {
            this.init();
        }),
        (h.prototype.initView = function () {
            for (var e = this, o = this, t = 0; t < this.othergroups.length; t++)
                !(function (t) {
                    o.othergroups[t].on(
                        cc.Node.EventType.TOUCH_START,
                        function () {
                            e.isPlaying &&
                                ((e.isPlaying = !1),
                                e.othergroups[t].name == e.targetId + ""
                                    ? (console.log("yes"), e.isWin(!0))
                                    : (e.isWin(!1), console.log("no")));
                        },
                        o
                    );
                })(t);
            for (t = 0; t < this.othergroupsSp.length; t++) this.ids.push(t);
        }),
        (h.prototype.init = function () {
            this.loadTarget(), this.loadOther();
        }),
        (h.prototype.loadTarget = function () {
            (this.isPlaying = !0), (this.label.string = "找出图中的小马"), (this.targetId = this.randomNum(0, 3));
        }),
        (h.prototype.loadOther = function () {
            return a(this, void 0, void 0, function () {
                var e, o, n, i, r, a;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (!this.loadServer) return [3, 7];
                            (n = this.randomArray(this.imageArr)), this.showWait(), (i = 0), (t.label = 1);
                        case 1:
                            return i < 4 ? ((r = this.othergroups[i]), [4, this.getImage(n[i])]) : [3, 6];
                        case 2:
                            return (
                                (e = t.sent()),
                                console.log(n[i]),
                                (r.name = i + ""),
                                e
                                    ? i != this.targetId
                                        ? [3, 4]
                                        : ((o = r.getComponent(cc.Sprite)), [4, this.getImage(0)])
                                    : ((this.loadServer = !1), this.loadOther(), this.closeWait(), [2])
                            );
                        case 3:
                            return (o.spriteFrame = t.sent()), [3, 5];
                        case 4:
                            (r.getComponent(cc.Sprite).spriteFrame = e), (t.label = 5);
                        case 5:
                            return i++, [3, 1];
                        case 6:
                            return this.closeWait(), [3, 8];
                        case 7:
                            for (n = this.randomArray(this.ids), i = 0; i < 4; i++)
                                (r = this.othergroups[i]),
                                    (a = n[i]),
                                    (r.name = i + ""),
                                    i == this.targetId
                                        ? (r.getComponent(cc.Sprite).spriteFrame = this.sprites[0])
                                        : (r.getComponent(cc.Sprite).spriteFrame = this.othergroupsSp[a]);
                            t.label = 8;
                        case 8:
                            return [2];
                    }
                });
            });
        }),
        (h.prototype.isWin = function (t) {
            var e = this;
            (this.label.string = t ? "选择正确!" : "选择错误!"),
                setTimeout(function () {
                    e.init();
                }, 1e3);
        }),
        (h.prototype.randomNum = function (t, e, o) {
            void 0 === o && (o = !0);
            t = Math.random() * (e - t + 1) + t;
            return o ? Math.floor(t) : t;
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
                            return this.imageData.get(n) ? [2, this.imageData.get(n)] : [3, 1];
                        case 1:
                            return [4, u.LoadResources.inst.loadImage(this.url, n + "", "jpg")];
                        case 2:
                            return (
                                (e = t.sent()),
                                (o = new cc.SpriteFrame(e)),
                                e ? [3, 4] : [4, u.LoadResources.inst.loadImage(this.url, n + "", "png")]
                            );
                        case 3:
                            (e = t.sent()), o.setTexture(e), (t.label = 4);
                        case 4:
                            return e ? (this.imageData.set(n, o), [2, o]) : [2, null];
                    }
                });
            });
        }),
        r([e([cc.SpriteFrame])], h.prototype, "sprites", void 0),
        r([e(cc.Label)], h.prototype, "label", void 0),
        r([e([cc.Node])], h.prototype, "othergroups", void 0),
        r([e([cc.SpriteFrame])], h.prototype, "othergroupsSp", void 0),
        r([t], h));
function h() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.sprites = []),
        (t.label = null),
        (t.othergroups = []),
        (t.othergroupsSp = []),
        (t.ids = []),
        (t.isPlaying = !1),
        (t.targetId = 0),
        (t.imageArr = []),
        (t.imageNum = 30),
        (t.loadServer = !0),
        (t.url = "https://cdn-wxgame.328vip.com/fkdts/seek_horse/"),
        (t.imageData = new Map()),
        t
    );
}
o.default = t;
