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
    h = t("AssignmentController"),
    d = t("MultipleController"),
    f = t("ConfData"),
    y = t("AssignmentConf"),
    g = t("EffectMgr"),
    m = t("UIEnum"),
    _ = t("btnDrawBlock"),
    v = t("CloseUI"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = cc.Component),
        i(b, l),
        (b.prototype.onLoad = function () {
            this.init(), (this.isInit = !0), this.onEvent(), d.default.inst.Breathing(this.reward_hd, 1.2, 1, 0.9);
        }),
        (b.prototype.start = function () {}),
        (b.prototype.setData = function (t, e) {
            (this._Assign = t), (this._DayAssign = e.type), (this._AssignDispose = e), this.isInit && this.init();
        }),
        (b.prototype.init = function () {
            if (
                ((this._isGet = !1),
                (this.alreadyGet.active = !1),
                (this.btnInvite.active = !1),
                (this.reward_hd.active = !1),
                this._AssignDispose)
            ) {
                this.setLab();
                var t = null,
                    e = this._AssignDispose.reward,
                    o = f.default.inst.PrizeConf.getRewardData(e);
                this._rewardData = o;
                for (var n = 0; n < o.length; n++) {
                    var i = o[n].type;
                    this.reward.children[n]
                        ? (t = this.reward.children[n]).getComponent(_.default).setData(o[n].profit, i, !1, 2)
                        : ((t = cc.instantiate(this.block)).getComponent(_.default).setData(o[n].profit, i, !1, 2),
                          (t.parent = this.reward));
                }
            }
        }),
        (b.prototype.onEvent = function () {
            this.node.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    v.default.inst.closeNode();
                },
                this
            ),
                this.btnInvite.on("click", this._btnInvite, this);
        }),
        (b.prototype.setLab = function () {
            this.toothLab.string = this._AssignDispose.acquire + "";
            var t = this._Assign.prog;
            t >= this._AssignDispose.prog
                ? (2 == this._Assign.alreadyGet[this._AssignDispose.day - 1]
                      ? ((this._isGet = !0),
                        (this.btnInvite.active = !0),
                        (this.btnInvite.getComponent(cc.Sprite).spriteFrame = this.btnInviteBgs[1]),
                        (this.getLab.string = "领取"),
                        (this.getLab.node.color = cc.color().fromHEX(this._colors[1])),
                        (this.reward_hd.active = !0))
                      : 1 == this._Assign.alreadyGet[this._AssignDispose.day - 1] &&
                        ((this.btnInvite.active = !1), (this.alreadyGet.active = !0)),
                  (t = this._AssignDispose.prog))
                : ((this.btnInvite.active = !0),
                  (this.btnInvite.getComponent(cc.Sprite).spriteFrame = this.btnInviteBgs[0]),
                  (this.getLab.string = "前往"),
                  (this.getLab.node.color = cc.color().fromHEX(this._colors[0]))),
                (this.progLab.string = t + "/" + this._AssignDispose.prog),
                (this.describeLab.string = this._AssignDispose.describe + ""),
                (this.ProgressBar.progress = t / this._AssignDispose.prog);
        }),
        (b.prototype.reduce = function (t) {
            cc.tween(t)
                .to(0.1, {scale: 1.05})
                .to(0.1, {scale: 0})
                .call(function () {
                    c.app.event.emit(p.EventType.Assignment_Change);
                })
                .start();
        }),
        (b.prototype._btnInvite = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this._isGet
                                ? (console.log("领取"),
                                  h.default.inst.getProg(this._AssignDispose, this._rewardData),
                                  this.reduce(this.node),
                                  [3, 11])
                                : [3, 1];
                        case 1:
                            switch ((console.log("前往"), this._DayAssign)) {
                                case y.DayAssign.role_grade:
                                    return [3, 2];
                                case y.DayAssign.evolution:
                                    return [3, 3];
                                case y.DayAssign.equip_use:
                                    return [3, 4];
                                case y.DayAssign.equip_grade:
                                    return [3, 5];
                                case y.DayAssign.equip_compose:
                                    return [3, 6];
                                case y.DayAssign.kill_monster:
                                    return [3, 9];
                                case y.DayAssign.kill_boss:
                                    return [3, 10];
                            }
                            return [3, 11];
                        case 2:
                            return c.app.gui.closeUI(m.UIEnum.AssignmentView), [3, 11];
                        case 3:
                            return (
                                c.app.gui.closeUI(m.UIEnum.AssignmentView),
                                d.default.inst.openList[5]
                                    ? (c.app.gui.closeUI(m.UIEnum.AssignmentView), d.default.inst.openList[5]())
                                    : g.default.inst.showTips("进化功能未解锁"),
                                [3, 11]
                            );
                        case 4:
                        case 5:
                            return c.app.gui.closeUI(m.UIEnum.AssignmentView), d.default.inst.openList[2](), [3, 11];
                        case 6:
                            return (
                                c.app.gui.closeUI(m.UIEnum.AssignmentView),
                                [4, c.app.gui.openUI(m.UIEnum.WaitingView, u.LayerEnum.TOP_LAYER)]
                            );
                        case 7:
                            return t.sent(), [4, c.app.gui.openUI(m.UIEnum.EquipMergeView, u.LayerEnum.VIEW_LAYER)];
                        case 8:
                            return (
                                t.sent(),
                                c.app.gui.closeUI(m.UIEnum.HomeView),
                                c.app.gui.closeUI(m.UIEnum.WaitingView),
                                [3, 11]
                            );
                        case 9:
                        case 10:
                            return c.app.gui.closeUI(m.UIEnum.AssignmentView), [3, 11];
                        case 11:
                            return [2];
                    }
                });
            });
        }),
        r([e(cc.Label)], b.prototype, "toothLab", void 0),
        r([e(cc.Label)], b.prototype, "progLab", void 0),
        r([e(cc.Label)], b.prototype, "describeLab", void 0),
        r([e(cc.Label)], b.prototype, "getLab", void 0),
        r([e(cc.ProgressBar)], b.prototype, "ProgressBar", void 0),
        r([e(cc.Node)], b.prototype, "reward", void 0),
        r([e(cc.Node)], b.prototype, "alreadyGet", void 0),
        r([e(cc.Node)], b.prototype, "btnInvite", void 0),
        r([e(cc.Node)], b.prototype, "reward_hd", void 0),
        r([e(cc.Prefab)], b.prototype, "block", void 0),
        r([e([cc.SpriteFrame])], b.prototype, "btnInviteBgs", void 0),
        r([t], b));
function b() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.toothLab = null),
        (t.progLab = null),
        (t.describeLab = null),
        (t.getLab = null),
        (t.ProgressBar = null),
        (t.reward = null),
        (t.alreadyGet = null),
        (t.btnInvite = null),
        (t.reward_hd = null),
        (t.block = null),
        (t.btnInviteBgs = []),
        (t.isInit = !1),
        (t._Assign = null),
        (t._AssignDispose = null),
        (t._isGet = !1),
        (t._rewardData = []),
        (t._colors = {0: "#56811C", 1: "#995414"}),
        (t._DayAssign = null),
        t
    );
}
o.default = t;
