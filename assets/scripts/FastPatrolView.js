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
    d = t("Font"),
    f = t("Prop"),
    y = t("LayerMgr"),
    g = t("CloseUI"),
    m = t("EffectMgr"),
    _ = t("DrawingController"),
    v = t("EquipController"),
    b = t("UserDataController"),
    w = t("ConfData"),
    C = t("MultipleController"),
    k = t("GuideController"),
    E = t("TrackType"),
    S = t("EventTypes"),
    M = t("TaskController"),
    R = t("GameMgr"),
    T = cc._decorator,
    e = T.ccclass,
    t = T.property,
    e =
        (T.inspector,
        (l = c.default),
        i(D, l),
        (D.prototype.initView = function () {}),
        (D.prototype.updateView = function () {
            var t,
                e = this;
            this.init(),
                (this.isFree = 43 == (null === (t = k.GuideController.guideVo) || void 0 === t ? void 0 : t.idx)),
                (this.freeIcon.active = !this.isFree),
                C.default.inst.eject(this.zb_ck1, this.bg, function () {
                    e.onEvent(), e.showGuide();
                });
        }),
        (D.prototype.show = function (t) {
            this.param = t;
        }),
        (D.prototype.showGuide = function () {
            var t;
            43 == (null === (t = k.GuideController.guideVo) || void 0 === t ? void 0 : t.idx) &&
                (k.GuideController.guideStart(), k.GuideController.setGuide("Patrol", 1));
        }),
        (D.prototype.onDisable = function () {
            l.prototype.onDisable.call(this), g.default.inst.closeNode(), this.bg.off(cc.Node.EventType.TOUCH_START);
        }),
        (D.prototype.onEvent = function () {
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    h.app.gui.closeUI(u.UIEnum.FastPatrolView);
                },
                this
            ),
                this.zb_ck1.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        g.default.inst.closeNode();
                    },
                    this
                );
        }),
        (D.prototype.init = function () {
            (this.goldLab.string =
                "x" +
                d.default
                    .getFon()
                    .change(
                        this.param.patrol_coin *
                            ((60 * this.param.fast_patrol.time) / this.param.patrol_settlement_time)
                    )),
                (this.expLab.string =
                    "x" +
                    d.default
                        .getFon()
                        .change(
                            this.param.patrol_exp *
                                ((60 * this.param.fast_patrol.time) / this.param.patrol_settlement_time)
                        )),
                (this.numDraw.string = "x" + d.default.getFon().change(this.param.fast_patrol.draw_count)),
                (this.numEquip.string = "x" + d.default.getFon().change(this.param.fast_patrol.equip_count)),
                (this.introduceLab.string = "立即获得" + 60 * this.param.fast_patrol.time + "分钟巡逻的收益"),
                this.initEnergyNum();
        }),
        (D.prototype.initEnergyNum = function () {
            (this.energyNum = h.app.local.getValue("energyNum")), (this.date = h.app.local.getValue("date"));
            var t = new Date(),
                t = t.getFullYear() + "" + t.getMonth() + t.getDate();
            (null != this.date && this.date == t) || h.app.local.setValue("date", t),
                (null != this.energyNum && this.date == t) ||
                    (h.app.local.setValue("energyNum", 3), (this.energyNum = 3)),
                (this.surplusLab.string = "可用次数：" + this.energyNum),
                (this.surplusLab.node.active = 0 < this.energyNum),
                (this.btnEnergy.active = 0 < this.energyNum);
        }),
        (D.prototype.openView = function (o, n) {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                g.default.inst.closeNode(),
                                (e = o.convertToWorldSpaceAR(cc.v2(0, o.height / 2 + 10))),
                                (e = {pos: e, type: n}),
                                [4, h.app.gui.openUI(u.UIEnum.DescribeBlackView, y.LayerEnum.VIEW_LAYER, e)]
                            );
                        case 1:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (D.prototype.getProfitNode = function () {
            var e = this;
            (this.profitList[0] = {
                type: f.Prop.gold,
                profit: {
                    num:
                        this.param.patrol_coin *
                        ((60 * this.param.fast_patrol.time) / this.param.patrol_settlement_time)
                }
            }),
                (this.profitList[1] = {
                    type: f.Prop.Exp,
                    profit: {
                        num:
                            this.param.patrol_exp *
                            ((60 * this.param.fast_patrol.time) / this.param.patrol_settlement_time)
                    }
                }),
                w.default.inst.drawingConf
                    .getRandomDraw(this.param.fast_patrol.draw_count)
                    .showDatas.forEach(function (t) {
                        e.profitList.push(t);
                    });
            for (var t = 0; t < this.param.fast_patrol.equip_count; t++) {
                var o = w.default.inst.equipConf.getRandomEquip();
                this.profitList.push({
                    type: f.Prop.equip,
                    profit: {equip: {id: o.equip_id, quality: 1, level: 1, status: 0, equipType: o.type}}
                });
            }
        }),
        (D.prototype.addProfit = function () {
            var e;
            return a(this, void 0, void 0, function () {
                var t = this;
                return s(this, function () {
                    return (
                        this.getProfitNode(),
                        this.scheduleOnce(function () {
                            return a(t, void 0, void 0, function () {
                                var e, o, n;
                                return s(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return (
                                                (o = this.profitList[0].profit.num),
                                                (e = this.profitList[1].profit.num),
                                                b.default.inst.addExp(e, !0),
                                                b.default.inst.addGold(o, !0),
                                                (o = {type: 1, profitList: this.profitList, iconType: 1}),
                                                [
                                                    4,
                                                    h.app.gui.openUI(
                                                        u.UIEnum.ReturnMaterialView,
                                                        y.LayerEnum.VIEW_LAYER,
                                                        o
                                                    )
                                                ]
                                            );
                                        case 1:
                                            for (t.sent(), n = 2; this.profitList[n].type == f.Prop.drawing; n++)
                                                0 != this.profitList[n].profit.draw.quantity &&
                                                    _.DrawingController.inst.addDrawing(
                                                        this.profitList[n].profit.draw.id,
                                                        this.profitList[n].profit.draw.quantity
                                                    );
                                            for (
                                                n = this.profitList.length - 1;
                                                this.profitList[n].type == f.Prop.equip;
                                                n--
                                            )
                                                v.EquipController.inst.addEquip(
                                                    this.profitList[n].profit.equip.id,
                                                    this.profitList[n].profit.equip.quality,
                                                    this.profitList[n].profit.equip.level
                                                );
                                            return (
                                                (this.profitList = []),
                                                h.app.event.emit(S.EventType.Confirm_Fast_Patrol),
                                                h.app.gui.closeUI(u.UIEnum.FastPatrolView),
                                                [2]
                                            );
                                    }
                                });
                            });
                        }, 0.1),
                        null === (e = h.app.track) || void 0 === e || e.trackEvent(E.TrackType.Fast_Patrol),
                        M.default.inst.addDaily("fast_patrol", 1),
                        [2]
                    );
                });
            });
        }),
        (D.prototype.onBtnCloseClick = function () {
            h.app.gui.closeUI(u.UIEnum.FastPatrolView);
        }),
        (D.prototype.onBtnGoldClick = function () {
            this.openView(this.btnGold, f.Prop.gold);
        }),
        (D.prototype.onBtnExpClick = function () {
            this.openView(this.btnExp, f.Prop.Exp);
        }),
        (D.prototype.onBtnDrawClick = function () {
            this.openView(this.btnDraw, f.Prop.randomDrawing);
        }),
        (D.prototype.onBtnEquipClick = function () {
            this.openView(this.btnEquip, f.Prop.randomEquip);
        }),
        (D.prototype.onBtnVideoClick = function () {
            var t,
                e = this;
            this.isFree
                ? (console.log("指引免费"), this.addProfit())
                : (console.log("视频免费"),
                  null === (t = h.app.track) || void 0 === t || t.trackEvent("new_kuaisu_xunluo"),
                  R.default.inst.getVideoShareReward(
                      function () {
                          var t;
                          null === (t = h.app.track) || void 0 === t || t.trackEvent("new_suc_kuaisu_xunluo"),
                              e.addProfit();
                      },
                      null,
                      function () {
                          m.default.inst.showTips("获取视频失败，请稍候再试！");
                      }
                  ));
        }),
        (D.prototype.onBtnEnergyClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return (
                        b.default.inst.useEnergy(15) &&
                            (0 < this.energyNum
                                ? (this.energyNum--,
                                  h.app.local.setValue("energyNum", this.energyNum),
                                  (this.surplusLab.string = "可用次数：" + this.energyNum),
                                  this.addProfit())
                                : m.default.inst.showTips("次数不足")),
                        [2]
                    );
                });
            });
        }),
        r([p.autoBind("cc.Node", "zb_ck1/bottom/btn/btnVideo/layout/freeIcon")], D.prototype, "freeIcon", void 0),
        r([p.autoBind("cc.Label", "zb_ck1/top/introduceLab")], D.prototype, "introduceLab", void 0),
        r(
            [p.autoBind("cc.Label", "zb_ck1/middle/introduce/line/2/btnDraw/btnBg/numDraw")],
            D.prototype,
            "numDraw",
            void 0
        ),
        r(
            [p.autoBind("cc.Label", "zb_ck1/middle/introduce/line/3/btnEquip/btnBg/numEquip")],
            D.prototype,
            "numEquip",
            void 0
        ),
        r([p.autoBind("cc.Node", "zb_ck1")], D.prototype, "zb_ck1", void 0),
        r([p.autoBind("cc.Label", "zb_ck1/bottom/surplusLab")], D.prototype, "surplusLab", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/btnClose")], D.prototype, "btnClose", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/bottom/btn/btnVideo")], D.prototype, "btnVideo", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/bottom/btn/btnEnergy")], D.prototype, "btnEnergy", void 0),
        r([p.autoBind("cc.Node", "bg")], D.prototype, "bg", void 0),
        r(
            [p.autoBind("cc.Node", "zb_ck1/btnClose"), p.autoBind("cc.Node", "zb_ck1/middle/introduce/line/0/btnGold")],
            D.prototype,
            "btnGold",
            void 0
        ),
        r([p.autoBind("cc.Node", "zb_ck1/middle/introduce/line/1/btnExp")], D.prototype, "btnExp", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/middle/introduce/line/2/btnDraw")], D.prototype, "btnDraw", void 0),
        r([p.autoBind("cc.Node", "zb_ck1/middle/introduce/line/3/btnEquip")], D.prototype, "btnEquip", void 0),
        r(
            [p.autoBind("cc.Label", "zb_ck1/middle/introduce/line/0/btnGold/btnBg/goldLab")],
            D.prototype,
            "goldLab",
            void 0
        ),
        r(
            [p.autoBind("cc.Label", "zb_ck1/middle/introduce/line/1/btnExp/btnBg/expLab")],
            D.prototype,
            "expLab",
            void 0
        ),
        r([t(cc.Prefab)], D.prototype, "line", void 0),
        r([e], D));
function D() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.freeIcon = null),
        (t.introduceLab = null),
        (t.numDraw = null),
        (t.numEquip = null),
        (t.zb_ck1 = null),
        (t.surplusLab = null),
        (t.btnClose = null),
        (t.btnVideo = null),
        (t.btnEnergy = null),
        (t.bg = null),
        (t.btnGold = null),
        (t.btnExp = null),
        (t.btnDraw = null),
        (t.btnEquip = null),
        (t.goldLab = null),
        (t.expLab = null),
        (t.line = null),
        (t.profitList = []),
        (t.energyNum = 0),
        (t.date = ""),
        (t.isFree = !1),
        t
    );
}
o.default = e;
