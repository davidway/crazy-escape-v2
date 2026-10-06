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
    h = t("App"),
    d = t("LayerMgr"),
    f = t("UserDataController"),
    y = t("MultipleController"),
    g = t("ResMgr"),
    m = cc._decorator,
    e = m.ccclass,
    t = m.property,
    e =
        (m.inspector,
        (l = c.default),
        i(_, l),
        (_.prototype.initView = function () {
            var t = f.default.inst.setup;
            console.log(t),
                (this.Voice = t.Voice),
                (this.Music = t.Music),
                (this.Shock = t.Shock),
                this.onSetup(this.btnVoice, this.Voice),
                this.onSetup(this.btnMusic, this.Music),
                this.onSetup(this.btnShock, this.Shock);
        }),
        (_.prototype.updateView = function () {
            var t = this;
            (this.oldVoice = this.Voice),
                (this.oldMusic = this.Music),
                (this.oldShock = this.Shock),
                y.default.inst.eject(this.panel, this.bg, function () {
                    t.onEvent();
                });
        }),
        (_.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    t.closeView();
                },
                this
            );
        }),
        (_.prototype.onSetup = function (t, e) {
            e
                ? ((t.getComponent(cc.Sprite).spriteFrame = this.openIcons[1]),
                  (t.children[0].getComponent(cc.Sprite).spriteFrame = this.openIcons[0]),
                  (t.children[0].x = 34))
                : ((t.getComponent(cc.Sprite).spriteFrame = this.closeIcons[1]),
                  (t.children[0].getComponent(cc.Sprite).spriteFrame = this.closeIcons[0]),
                  (t.children[0].x = -34));
        }),
        (_.prototype.onDisable = function () {
            l.prototype.onDisable.call(this), this.bg.off(cc.Node.EventType.TOUCH_START);
        }),
        (_.prototype.closeView = function () {
            var t = f.default.inst.setup;
            (t.Music = this.Music),
                (t.Voice = this.Voice),
                (t.Shock = this.Shock),
                (this.oldVoice == this.Voice && this.oldMusic == this.Music && this.oldShock == this.Shock) ||
                    f.default.inst.saveSetUp(),
                h.app.gui.closeUI(u.UIEnum.SetupView);
        }),
        (_.prototype.onBtnVoiceClick = function () {
            (this.Voice = !this.Voice),
                this.onSetup(this.btnVoice, this.Voice),
                this.Voice ? console.log("voise open") : console.log("voice close");
        }),
        (_.prototype.onBtnMusicClick = function () {
            (this.Music = !this.Music),
                this.onSetup(this.btnMusic, this.Music),
                this.Music ? console.log("Music open") : console.log("Music close");
        }),
        (_.prototype.onBtnShockClick = function () {
            (this.Shock = !this.Shock),
                this.onSetup(this.btnShock, this.Shock),
                this.Shock ? console.log("Shock open") : console.log("Shock close");
        }),
        (_.prototype.onBtnCloseClick = function () {
            this.closeView();
        }),
        (_.prototype.onBtnMiniGameClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.isLoading
                                ? [2]
                                : 0 != this.miniGameNode.childrenCount
                                ? [3, 4]
                                : [4, h.app.gui.openUI(u.UIEnum.WaitingView, d.LayerEnum.TOP_LAYER)];
                        case 1:
                            return t.sent(), [4, this.loadMiniGame()];
                        case 2:
                            return (t.sent().parent = this.miniGameNode), [4, h.app.gui.closeUI(u.UIEnum.WaitingView)];
                        case 3:
                            return t.sent(), (this.isLoading = !1), [3, 5];
                        case 4:
                            (this.miniGameNode.children[0].active = !0), (t.label = 5);
                        case 5:
                            return [2];
                    }
                });
            });
        }),
        (_.prototype.loadMiniGame = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (this.isLoading = !0),
                                [4, g.default.inst.getNodeFromPool("views/MiniGameView", "miniGame")]
                            );
                        case 1:
                            return [2, t.sent()];
                    }
                });
            });
        }),
        r([p.autoBind("cc.Node", "miniGameNode")], _.prototype, "miniGameNode", void 0),
        r([p.autoBind("cc.Node", "panel/btn/btnMiniGame")], _.prototype, "btnMiniGame", void 0),
        r([p.autoBind("cc.Node", "panel")], _.prototype, "panel", void 0),
        r([p.autoBind("cc.Node", "bg")], _.prototype, "bg", void 0),
        r([p.autoBind("cc.Node", "panel/btnClose")], _.prototype, "btnClose", void 0),
        r([p.autoBind("cc.Node", "panel/btn/btnVoice")], _.prototype, "btnVoice", void 0),
        r([p.autoBind("cc.Node", "panel/btn/btnMusic")], _.prototype, "btnMusic", void 0),
        r([p.autoBind("cc.Node", "panel/btn/btnShock")], _.prototype, "btnShock", void 0),
        r([t([cc.SpriteFrame])], _.prototype, "openIcons", void 0),
        r([t([cc.SpriteFrame])], _.prototype, "closeIcons", void 0),
        r([e], _));
function _() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.miniGameNode = null),
        (t.btnMiniGame = null),
        (t.panel = null),
        (t.bg = null),
        (t.btnClose = null),
        (t.btnVoice = null),
        (t.btnMusic = null),
        (t.btnShock = null),
        (t.openIcons = []),
        (t.closeIcons = []),
        (t.Voice = !0),
        (t.Music = !0),
        (t.Shock = !0),
        (t.oldVoice = !0),
        (t.oldMusic = !0),
        (t.oldShock = !0),
        (t.isLoading = !1),
        t
    );
}
o.default = e;
