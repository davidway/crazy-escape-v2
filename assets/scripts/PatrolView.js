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
    g = t("App"),
    c = t("decorator"),
    u = t("LayerMgr"),
    m = t("MathUtil"),
    p = t("BasePanel"),
    h = t("EventTypes"),
    d = t("DrawingController"),
    f = t("EquipController"),
    y = t("GuideController"),
    _ = t("TaskController"),
    v = t("UserDataController"),
    b = t("ConfData"),
    w = t("Prop"),
    C = t("TrackType"),
    k = t("GameMgr"),
    E = t("UIEnum"),
    S = t("CloseUI"),
    M = t("Lines"),
    R = t("Font"),
    T = cc._decorator,
    e = T.ccclass,
    t = T.property,
    e =
        (T.inspector,
        (l = p.default),
        i(D, l),
        (D.prototype.initView = function () {
            this.onEvent(),
                (this.nowSlideContentHeght = this.slideContent.height),
                (this.btnAddTime.active = cc.sys.isBrowser),
                (this.btnAddTime2.active = cc.sys.isBrowser);
        }),
        (D.prototype.updateView = function () {
            var t;
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return (
                        null === (t = g.app.track) || void 0 === t || t.trackEvent(C.TrackType.Open_Patro),
                        (this.monster.node.active = !1),
                        (this.darts.node.active = !1),
                        (this.maxtime = b.default.inst.chapterConf.max_patrol_time),
                        (this.maxTimeLab.string = "最长巡逻" + this.maxtime / 60 / 60 / 1e3 + "小时"),
                        this.init(),
                        this.showGuide(),
                        [2]
                    );
                });
            });
        }),
        (D.prototype.show = function () {}),
        (D.prototype.showGuide = function () {
            var t;
            41 == (null === (t = y.GuideController.guideVo) || void 0 === t ? void 0 : t.idx) &&
                (null === (t = g.app.track) || void 0 === t || t.trackEvent(C.TrackType.Patrol_View),
                y.GuideController.guideStart());
        }),
        (D.prototype.battle = function () {
            this.showMonster();
        }),
        (D.prototype.showMonster = function () {
            this.monster.show();
        }),
        (D.prototype.showDarts = function () {
            this.darts.show();
        }),
        (D.prototype.onDisable = function () {
            l.prototype.onDisable.call(this), S.default.inst.closeNode();
        }),
        (D.prototype.closeNode = function () {
            S.default.inst.closeNode();
        }),
        (D.prototype.onEvent = function () {
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    S.default.inst.closeNode();
                },
                this
            ),
                this.patrolLine.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        S.default.inst.closeNode();
                    },
                    this
                );
        }),
        (D.prototype.init = function () {
            this.unschedule(this.FastPatrolanimationTime),
                (this.btnAddTime2.active = !1),
                (this.patrolLine.anchorY = 1),
                this.showTop(),
                (this.profitDrawings = g.app.local.getValue("profitDrawings")),
                null == this.profitDrawings && (this.profitDrawings = []),
                (this.profitEquips = g.app.local.getValue("profitEquips")),
                null == this.profitEquips && (this.profitEquips = []),
                (this.chapterData = b.default.inst.chapterConf.getChapterVo(k.default.inst.chapter)),
                (this.goldLab.string = R.default
                    .getFon()
                    .change(this.chapterData.patrol_coin * (60 / this.chapterData.patrol_settlement_time))),
                (this.expLab.string = R.default
                    .getFon()
                    .change(this.chapterData.patrol_exp * (60 / this.chapterData.patrol_settlement_time))),
                (this.oldtime = this.getTime()),
                (this.oldFastPatroltime = this.getFastPatrolTime());
            var t = Date.now() - this.oldtime;
            (this.isFastPatrolDownTime = !0),
                0 < Math.floor(t / 1e3 / 60 / this.chapterData.patrol_settlement_time) * this.chapterData.patrol_coin
                    ? this.btnReceiveBg(0)
                    : this.btnReceiveBg(1),
                this.btnFastPatrolBg(1),
                this.FastPatrolanimationTime(),
                this.animationTime(),
                this.addProfitList(),
                this.calculationTime();
        }),
        (D.prototype.calculationTime = function () {
            this.schedule(this.animationTime, 1);
        }),
        (D.prototype.btnFastPatrolBg = function (t) {
            this.interactable(this.btnFastPatrol, 2 == t),
                (this.FastdownTime.active = 1 == t),
                (this.Fasticon.active = 2 == t),
                (this.btnFastPatrol.getComponent(cc.Sprite).spriteFrame = this.btnReceiveBgs[t]);
        }),
        (D.prototype.btnReceiveBg = function (t) {
            this.interactable(this.btnReceive, 0 == t),
                (this.downTime.active = 1 == t),
                (this.xl_xwz1.active = 0 == t),
                (this.btnReceive.getComponent(cc.Sprite).spriteFrame = this.btnReceiveBgs[t]);
        }),
        (D.prototype.FastPatrolanimationTime = function () {
            var t;
            this.isFastPatrolDownTime &&
                ((t = Date.now() - this.oldFastPatroltime) < this.downFastTimeNum
                    ? ((t = R.default.getFon().time(this.downFastTimeNum - t + 1e3)).minute < 10
                          ? (this.FastdownHourLab.string = "0" + t.minute)
                          : (this.FastdownHourLab.string = t.minute + ""),
                      t.second < 10
                          ? (this.FastdownMinuteLab.string = "0" + t.second)
                          : (this.FastdownMinuteLab.string = t.second + ""))
                    : (this.unschedule(this.FastPatrolanimationTime),
                      (this.isFastPatrolDownTime = !1),
                      this.btnFastPatrolBg(2)));
        }),
        (D.prototype.animationTime = function () {
            var t = Date.now() - this.oldtime;
            this.FastPatrolanimationTime(),
                t >= this.maxtime
                    ? (this.unschedule(this.animationTime),
                      this.schedule(this.FastPatrolanimationTime, 1),
                      (t = this.maxtime),
                      this.btnReceiveBg(0),
                      (this.battle_time = 0))
                    : ((this.battle_time += 1), 5 <= this.battle_time && ((this.battle_time = 0), this.battle()));
            var e,
                o = R.default.getFon().time(t);
            if (
                (0 != o.hour
                    ? ((this.hour.getComponent(cc.Sprite).spriteFrame = this.timeIcons[2]),
                      (this.minute.getComponent(cc.Sprite).spriteFrame = this.timeIcons[1]),
                      o.hour < 10 ? (this.hourLab.string = "0" + o.hour) : (this.hourLab.string = o.hour + ""),
                      o.minute < 10
                          ? (this.minuteLab.string = "0" + o.minute)
                          : (this.minuteLab.string = o.minute + ""))
                    : 0 == o.hour &&
                      ((this.hour.getComponent(cc.Sprite).spriteFrame = this.timeIcons[1]),
                      (this.minute.getComponent(cc.Sprite).spriteFrame = this.timeIcons[0]),
                      o.minute < 10 ? (this.hourLab.string = "0" + o.minute) : (this.hourLab.string = o.minute + ""),
                      o.second < 10
                          ? (this.minuteLab.string = "0" + o.second)
                          : (this.minuteLab.string = o.second + "")),
                t < this.downTimeNum * this.chapterData.patrol_settlement_time &&
                    ((e = R.default.getFon().time(this.downTimeNum * this.chapterData.patrol_settlement_time - t + 1e3))
                        .minute < 10
                        ? (this.downHourLab.string = "0" + e.minute)
                        : (this.downHourLab.string = e.minute + ""),
                    e.second < 10
                        ? (this.downMinuteLab.string = "0" + e.second)
                        : (this.downMinuteLab.string = e.second + "")),
                (this.profitGold =
                    Math.floor(t / 1e3 / 60 / this.chapterData.patrol_settlement_time) * this.chapterData.patrol_coin),
                (this.profitExp =
                    Math.floor(t / 1e3 / 60 / this.chapterData.patrol_settlement_time) * this.chapterData.patrol_exp),
                (0 == this.profitGold ||
                    this.lastTime <= Math.floor(t / 1e3 / 60 / this.chapterData.patrol_settlement_time)) &&
                    1 <= Math.floor(t / 1e3 / 60 / this.chapterData.patrol_settlement_time))
            ) {
                console.log(9999, this.lastTime, Math.ceil(t / 1e3 / 60 / this.chapterData.patrol_settlement_time));
                var n = Math.floor(t / 1e3 / 60 / this.chapterData.patrol_settlement_time);
                this.lastTime = Math.ceil(t / 1e3 / 60 / this.chapterData.patrol_settlement_time);
                for (var i = 0, r = 0, a = 1; a <= n; a++)
                    (i += this.chapterData.patrol_coin), (r += this.chapterData.patrol_exp);
                (this.profitGold = i),
                    (this.profitExp = r),
                    (this.profitList[0] = {type: w.Prop.gold, profit: {num: this.profitGold}}),
                    (this.profitList[1] = {type: w.Prop.Exp, profit: {num: this.profitExp}}),
                    this.addProfitList(),
                    this.btnReceiveBg(0);
            }
            var s = this.chapterData.patrol_drawings,
                l = this.chapterData.patrol_equip,
                c = this.chapterData.material_settlement_time;
            if (this.chapterData.patrol_drawings && 0 != o.hour && o.hour >= c * this.profitDrawings.length) {
                for (a = 1; a <= Math.floor(o.hour / c); a++)
                    if (c <= o.hour && null == this.profitDrawings[a]) {
                        this.profitDrawings[a] = {id: 0, quantity: 0};
                        var u = m.default.randomRangeInt(1, 7),
                            p = s.count;
                        (this.profitDrawings[a] = {id: 0, quantity: 0}),
                            (this.profitDrawings[a].id = u),
                            m.default.randomRangeInt(0, 100) > 100 * s.probability && (p = 0),
                            (this.profitDrawings[a].quantity = p),
                            g.app.local.setValue("profitDrawings", this.profitDrawings);
                        var h,
                            d = this.chapterData.max_equip_num;
                        if (d > this.profitEquips.length)
                            for (
                                var f = m.default.randomRangeInt(0, 100), y = 0;
                                y < l.count && d > this.profitEquips.length;
                                y++
                            )
                                f < 100 * l.probability &&
                                    ((h = b.default.inst.equipConf.getRandomEquip()),
                                    this.profitEquips.push({
                                        id: h.equip_id,
                                        quality: 1,
                                        level: 1,
                                        status: 0,
                                        equipType: h.type
                                    })),
                                    g.app.local.setValue("profitEquips", this.profitEquips);
                    }
                this.addProfitList();
            }
        }),
        (D.prototype.addProfitList = function () {
            for (var t = 0; t < 6; t++) {
                for (var e = {id: t + 1, quantity: 0}, o = 1; o < this.profitDrawings.length; o++)
                    this.profitDrawings[o].id == e.id &&
                        0 != this.profitDrawings[o].quantity &&
                        (e.quantity += this.profitDrawings[o].quantity);
                this.profitList[t + 2] = {type: w.Prop.drawing, profit: {draw: e}};
            }
            for (t = 8; t < this.profitEquips.length + 8; t++)
                this.profitList[t] = {type: w.Prop.equip, profit: {equip: this.profitEquips[t - 8]}};
            var n = 0;
            if (
                (null != this.profitList[0] &&
                    0 != this.profitList[0].profit.num &&
                    (n = this.addLine(this.patrolLine, this.profitList)),
                this.patrolLine.childrenCount > n)
            )
                for (t = this.patrolLine.childrenCount; n < t; t--) this.patrolLine.children[t - 1].active = !1;
        }),
        (D.prototype.addLine = function (t, e) {
            var o = [];
            0 != e[0].profit.num && ((o[0] = e[0]), (o[1] = e[1]));
            for (var n = 2; n < e.length; n++)
                (e[n].type == w.Prop.drawing && 0 == e[n].profit.draw.quantity) ||
                    o.push({type: e[n].type, profit: e[n].profit});
            var i = 0,
                r = 0,
                a = [];
            for (a.length, n = 0; n < o.length; n++)
                (a[r] = o[n]),
                    5 == ++r && ((r = 0), this.showProfit(t, i, a), i++, (a = [])),
                    n == o.length - 1 && this.showProfit(t, i, a);
            return (
                (this.slideContent.height = this.nowSlideContentHeght + this.lineHeght * Math.ceil(o.length / 5 - 2)),
                this.slideContent.height < this.slideContent.parent.height &&
                    (this.slideContent.height = this.slideContent.parent.height),
                Math.ceil(o.length / 5)
            );
        }),
        (D.prototype.showProfit = function (t, e, o) {
            var n;
            null == t.children[e]
                ? ((n = cc.instantiate(this.line)).getComponent(M.default).setBlock(o, w.Prop.drawing),
                  t.addChild(n),
                  (this.lineHeght = n.height))
                : ((t.children[e].active = !0), t.children[e].getComponent(M.default).setBlock(o, w.Prop.drawing));
        }),
        (D.prototype.showTop = function () {
            k.default.inst.topNode && (k.default.inst.topNode.node.parent = this.top);
        }),
        (D.prototype.setTime = function (t) {
            g.app.local.setValue("startTime", t);
        }),
        (D.prototype.getTime = function () {
            var t = g.app.local.getValue("startTime");
            return null == t && ((t = Date.now()), g.app.local.setValue("startTime", t)), t;
        }),
        (D.prototype.setFastPatrolTime = function (t) {
            g.app.local.setValue("startFastTime", t);
        }),
        (D.prototype.getFastPatrolTime = function () {
            var t = g.app.local.getValue("startFastTime");
            return (t = null == t ? 0 : t);
        }),
        (D.prototype.onConfirmFastPatrol = function () {
            (this.oldFastPatroltime = Date.now()),
                this.setFastPatrolTime(this.oldFastPatroltime),
                (this.isFastPatrolDownTime = !0),
                this.init();
        }),
        (D.prototype.onMonsterCome = function () {
            this.hero.onAttack(), this.showDarts();
        }),
        (D.prototype.onMonsterDie = function () {
            this.monster.die();
        }),
        (D.prototype.onBtnFastPatrolClick = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                S.default.inst.closeNode(),
                                (e = this.chapterData),
                                [4, g.app.gui.openUI(E.UIEnum.FastPatrolView, u.LayerEnum.VIEW_LAYER, e)]
                            );
                        case 1:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (D.prototype.onBtnReceiveClick = function () {
            var i;
            return a(this, void 0, void 0, function () {
                var e, o, n;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (null == this.profitList[0] || 0 == this.profitList[0].profit.num) return [2];
                            for (this.patrolLine.anchorY = 0.5, e = 2; e < 5; e++)
                                null == this.patrolLine.children[0].children[e].children[0] &&
                                    (this.patrolLine.children[0].children[e].active = !1);
                            return (
                                (o = this.profitList[0].profit.num),
                                (n = this.profitList[1].profit.num),
                                v.default.inst.addGold(o, !0),
                                v.default.inst.addExp(n, !0),
                                (n = {type: 1, profitList: this.profitList, iconType: 1}),
                                this.GetProfit(),
                                [4, g.app.gui.openUI(E.UIEnum.ReturnMaterialView, u.LayerEnum.VIEW_LAYER, n)]
                            );
                        case 1:
                            return (
                                t.sent(),
                                S.default.inst.closeNode(),
                                _.default.inst.addDaily("patrol", 1),
                                _.default.inst.addWeek("patrol", 1),
                                null === (i = g.app.track) || void 0 === i || i.trackEvent(C.TrackType.Normal_Patrol),
                                [2]
                            );
                    }
                });
            });
        }),
        (D.prototype.GetProfit = function () {
            for (var t = 2; t < 8; t++)
                0 != this.profitList[t].profit.draw.quantity &&
                    d.DrawingController.inst.addDrawing(
                        this.profitList[t].profit.draw.id,
                        this.profitList[t].profit.draw.quantity
                    );
            for (t = 0; t < this.profitEquips.length; t++)
                f.EquipController.inst.addEquip(
                    this.profitEquips[t].id,
                    this.profitEquips[t].quality,
                    this.profitEquips[t].level
                );
            (this.profitDrawings = []),
                g.app.local.setValue("profitDrawings", this.profitDrawings),
                (this.profitEquips = []),
                g.app.local.setValue("profitEquips", this.profitEquips),
                (this.lastTime = 1),
                (this.oldtime = Date.now()),
                this.setTime(this.oldtime),
                (this.profitList = []),
                (this.profitList[0] = {type: w.Prop.gold, profit: {num: 0}}),
                (this.profitList[1] = {type: w.Prop.Exp, profit: {num: 0}}),
                this.init();
        }),
        (D.prototype.onBtnBackClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, g.app.gui.openUI(E.UIEnum.HomeView, u.LayerEnum.VIEW_LAYER)];
                        case 1:
                            return t.sent(), g.app.gui.closeUI(E.UIEnum.PatrolView), [2];
                    }
                });
            });
        }),
        (D.prototype.onBtnAddTimeClick = function () {
            (this.oldtime -= 6e5),
                this.setTime(this.oldtime),
                (this.oldFastPatroltime -= 6e5),
                this.setFastPatrolTime(this.oldFastPatroltime),
                (this.btnAddTime2.active = !0),
                this.animationTime();
        }),
        (D.prototype.onBtnAddTime2Click = function () {
            (this.oldtime -= 36e5), this.setTime(this.oldtime), this.animationTime();
        }),
        r([c.autoBind("cc.Node", "content/btn/btnFastPatrol/Fasticon")], D.prototype, "Fasticon", void 0),
        r([c.autoBind("cc.Node", "content/btn/btnFastPatrol/FastdownTime")], D.prototype, "FastdownTime", void 0),
        r(
            [c.autoBind("cc.Label", "content/btn/btnFastPatrol/FastdownTime/FastdownHourLab")],
            D.prototype,
            "FastdownHourLab",
            void 0
        ),
        r(
            [c.autoBind("cc.Label", "content/btn/btnFastPatrol/FastdownTime/FastdownMinuteLab")],
            D.prototype,
            "FastdownMinuteLab",
            void 0
        ),
        r([c.autoBind("PatrolMonster", "content/monster")], D.prototype, "monster", void 0),
        r([c.autoBind("cc.Label", "content/maxTimeLab")], D.prototype, "maxTimeLab", void 0),
        r([c.autoBind("cc.Node", "top")], D.prototype, "top", void 0),
        r([c.autoBind("cc.Label", "content/btn/btnReceive/downTime/downHourLab")], D.prototype, "downHourLab", void 0),
        r(
            [c.autoBind("cc.Label", "content/btn/btnReceive/downTime/downMinuteLab")],
            D.prototype,
            "downMinuteLab",
            void 0
        ),
        r([c.autoBind("cc.Node", "content/btn/btnReceive/xl_xwz1")], D.prototype, "xl_xwz1", void 0),
        r([c.autoBind("cc.Node", "content/btn/btnReceive/downTime")], D.prototype, "downTime", void 0),
        r([c.autoBind("cc.Node", "content/getProfit/view/slideContent")], D.prototype, "slideContent", void 0),
        r([c.autoBind("cc.Node", "bg")], D.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "btnBack")], D.prototype, "btnBack", void 0),
        r([c.autoBind("cc.Node", "content/getProfit/view/slideContent/patrolLine")], D.prototype, "patrolLine", void 0),
        r([c.autoBind("cc.Label", "content/profitList/gold/goldLab")], D.prototype, "goldLab", void 0),
        r([c.autoBind("cc.Label", "content/profitList/exp/expLab")], D.prototype, "expLab", void 0),
        r([c.autoBind("cc.Node", "content/btn/btnFastPatrol")], D.prototype, "btnFastPatrol", void 0),
        r([c.autoBind("cc.Node", "content/btn/btnReceive")], D.prototype, "btnReceive", void 0),
        r([c.autoBind("cc.Label", "content/patrolTime/time/hourLab")], D.prototype, "hourLab", void 0),
        r([c.autoBind("cc.Node", "content/patrolTime/time/hour")], D.prototype, "hour", void 0),
        r([c.autoBind("cc.Label", "content/patrolTime/time/minuteLab")], D.prototype, "minuteLab", void 0),
        r([c.autoBind("cc.Node", "content/patrolTime/time/minute")], D.prototype, "minute", void 0),
        r([c.autoBind("cc.Node", "content")], D.prototype, "content", void 0),
        r([c.autoBind("PatrolHero", "content/hero")], D.prototype, "hero", void 0),
        r([c.autoBind("PatrolDarts", "content/darts")], D.prototype, "darts", void 0),
        r([c.autoBind("cc.Node", "test/btnAddTime")], D.prototype, "btnAddTime", void 0),
        r([c.autoBind("cc.Node", "test/btnAddTime2")], D.prototype, "btnAddTime2", void 0),
        r([t([cc.SpriteFrame])], D.prototype, "timeIcons", void 0),
        r([t([cc.SpriteFrame])], D.prototype, "btnReceiveBgs", void 0),
        r([t(cc.Prefab)], D.prototype, "line", void 0),
        r([c.gameEvent(h.EventType.Confirm_Fast_Patrol)], D.prototype, "onConfirmFastPatrol", null),
        r([c.gameEvent(h.EventType.Monster_Come)], D.prototype, "onMonsterCome", null),
        r([c.gameEvent(h.EventType.Monster_Die)], D.prototype, "onMonsterDie", null),
        r([e], D));
function D() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.Fasticon = null),
        (t.FastdownTime = null),
        (t.FastdownHourLab = null),
        (t.FastdownMinuteLab = null),
        (t.monster = null),
        (t.maxTimeLab = null),
        (t.top = null),
        (t.downHourLab = null),
        (t.downMinuteLab = null),
        (t.xl_xwz1 = null),
        (t.downTime = null),
        (t.slideContent = null),
        (t.bg = null),
        (t.btnBack = null),
        (t.patrolLine = null),
        (t.goldLab = null),
        (t.expLab = null),
        (t.btnFastPatrol = null),
        (t.btnReceive = null),
        (t.hourLab = null),
        (t.hour = null),
        (t.minuteLab = null),
        (t.minute = null),
        (t.content = null),
        (t.hero = null),
        (t.darts = null),
        (t.btnAddTime = null),
        (t.btnAddTime2 = null),
        (t.timeIcons = []),
        (t.btnReceiveBgs = []),
        (t.line = null),
        (t.maxtime = 576e5),
        (t.chapterData = null),
        (t.profitGold = 0),
        (t.profitExp = 0),
        (t.oldtime = 0),
        (t.profitList = []),
        (t.profitDrawings = []),
        (t.profitEquips = []),
        (t.lastTime = 1),
        (t.lineHeght = 150),
        (t.nowSlideContentHeght = 0),
        (t.downTimeNum = 6e4),
        (t.battle_time = 5),
        (t.downFastTimeNum = 18e4),
        (t.oldFastPatroltime = 0),
        (t.isFastPatrolDownTime = !1),
        t
    );
}
o.default = e;
