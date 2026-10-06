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
    u = t("LayerMgr"),
    p = t("EventTypes"),
    h = t("Activity51Controller"),
    d = t("ActivityController"),
    f = t("AssignmentController"),
    y = t("CleanController"),
    g = t("CodeRewardsController"),
    m = t("DrawingController"),
    _ = t("EquipController"),
    v = t("EverydayRewardController"),
    b = t("EvolveController"),
    w = t("GameDataController"),
    C = t("GetGemController"),
    k = t("GoodsDataController"),
    E = t("GuideController"),
    S = t("HellDataController"),
    M = t("HolidayController"),
    R = t("InviteController"),
    T = t("NoticeController"),
    D = t("ShopController"),
    P = t("TaskController"),
    O = t("UserDataController"),
    A = t("GameSetting"),
    L = t("EffectMgr"),
    x = t("GameMgr"),
    B = t("LoginMgr"),
    I = t("NetHelper"),
    G = t("UIEnum"),
    N = t("UIHelper"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (l = cc.Component),
        i(U, l),
        (U.prototype.onLoad = function () {
            try {
                cc.director.setDisplayStats(!1);
            } catch (e) {}
            c.app.initialize(),
                N.default.initialize(),
                I.default.initialize(),
                B.default.inst.login(),
                c.app.platform.hideLoading(),
                this.initEvent(),
                (x.default.inst.mapCamera = this.node.getChildByName("mapCamera")),
                L.default.inst.init(u.default.inst.getLayerNode(u.LayerEnum.TIPS_LAYER));
        }),
        (U.prototype.initEvent = function () {
            var t = this;
            c.app.event.on(
                p.EventType.Launch_Load_Complete,
                function () {
                    t.initData(), t.gameStart();
                },
                this
            );
        }),
        (U.prototype.initData = function () {
            O.default.inst.initData(),
                k.default.inst.initData(),
                w.default.inst.initData(),
                _.EquipController.inst.initEquip(),
                m.DrawingController.inst.initDrawing(),
                d.default.inst.initData(),
                b.default.inst.initData(),
                v.EverydayRewardController.inst.initData(),
                R.InviteController.inst.initData(),
                P.default.inst.initData(),
                D.default.inst.initData(),
                C.default.inst.initData(),
                S.default.inst.initData(),
                A.GameSetting.inst.initAds(),
                f.default.inst.initData(),
                y.CleanController.inst.initData(),
                g.default.inst.initData(),
                M.default.inst.init(),
                h.default.inst.initData(),
                T.default.inst.initData();
        }),
        (U.prototype.gameStart = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (x.default.inst.stageWidth = cc.winSize.width),
                                (x.default.inst.stageHeight = cc.winSize.height),
                                (x.default.inst.halfWidth = cc.winSize.width >> 1),
                                (x.default.inst.halfHeight = cc.winSize.height >> 1),
                                (x.default.inst.inSightRadius = cc.Vec3.distance(
                                    cc.v3(),
                                    cc.v3(x.default.inst.halfWidth, x.default.inst.halfHeight)
                                )),
                                console.log("[AppStart]-->[line:57]:", E.GuideController.isNewPlayer),
                                E.GuideController.isNewPlayer
                                    ? ((x.default.inst.chapter = 1),
                                      [4, x.default.inst.playGame(x.default.inst.chapter, !1)])
                                    : [3, 2]
                            );
                        case 1:
                            return t.sent(), [3, 4];
                        case 2:
                            return [4, c.app.gui.openUI(G.UIEnum.HomeView, u.LayerEnum.VIEW_LAYER)];
                        case 3:
                            t.sent(), (t.label = 4);
                        case 4:
                            return c.app.gui.closeUI(G.UIEnum.LoadingView), [2];
                    }
                });
            });
        }),
        (U.prototype.onEnable = function () {}),
        r([t], U));
function U() {
    return (null !== l && l.apply(this, arguments)) || this;
}
o.default = t;
