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
    f = t("DrawingController"),
    y = t("EquipController"),
    g = t("HeroController"),
    m = t("UserDataController"),
    _ = t("ConfData"),
    v = t("GameMgr"),
    b = t("ResUtils"),
    w = t("RewardItem"),
    C = t("GameEnums"),
    k = t("TrackType"),
    E = t("EffectMgr"),
    S = t("TaskController"),
    M = t("MultipleController"),
    R = t("AssignmentController"),
    T = t("AssignmentConf"),
    D = t("MainPageType"),
    P = t("GoodsDataController"),
    O = t("BundleType"),
    A = t("ResultRewardType"),
    SPA = t("SkillPickSettleArcade"),
    L = cc._decorator,
    e = L.ccclass,
    t = L.property,
    e =
        (L.inspector,
        (l = c.default),
        i(x, l),
        (x.prototype.initView = function () {
            (this.tween = cc.tween(this.egg.node).to(0.1, {scale: 0.6}).to(0.1, {scale: 0.5})),
                (this.egg.autoClear = !0),
                this.bg.on(cc.Node.EventType.TOUCH_START, function () {}, this),
                this.sb_dg.on(cc.Node.EventType.TOUCH_START, function () {}, this);
        }),
        (x.prototype.updateView = function () {
            (this.btnHome.active = !1),
                (this.btnDouble.active = !1),
                (this.btnRecord.active = !1),
                (v.default.inst.isDeathWin = !0),
                h.app.sound.pauseMusic(),
                h.app.sound.playEffect("通关UI弹出时音效"),
                (this.rewards.numItems = 0);
            SPA.applyWinSettle(this);
            var t = R.default.inst.kill_boss + v.default.inst.bossNum;
            R.default.inst.setProg(t, T.DayAssign.kill_boss);
            t = R.default.inst.kill_monster + v.default.inst.killNum;
            R.default.inst.setProg(t, T.DayAssign.kill_monster), this.anNodeFun();
        }),
        (x.prototype.showEgg = function () {
            var t = this;
            _.default.inst.deathConf.getDeathConfVoByChapter(v.default.inst.chapter) &&
                this.scheduleOnce(function () {
                    return a(t, void 0, void 0, function () {
                        var e,
                            o = this;
                        return s(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return (
                                        (e = "others/egg0" + v.default.inst.eggIndex + "/egg"),
                                        [4, this.egg.setSource(e, "actors")]
                                    );
                                case 1:
                                    return (
                                        t.sent(),
                                        this.egg.setSkin("default"),
                                        this.egg.setAnimation({
                                            act: C.GoddessActs.Win,
                                            loop: !1,
                                            complete: function () {
                                                o.showRewards();
                                            }
                                        }),
                                        [2]
                                    );
                            }
                        });
                    });
                }, 0.1);
        }),
        (x.prototype.showRewards = function () {
            var t = this;
            this.updateRewards();
            for (var e = [], o = 0, n = 0; n < this.content.childrenCount; n++)
                this.content.children[n].active &&
                    ((this.content.children[n].active = !1),
                    (o = this.content.children[n].scale),
                    (this.content.children[n].scale = o + 1.8),
                    e.push(this.content.children[n]));
            M.default.inst.showBlock(
                this.anNode,
                1,
                this.anNodeSpeed,
                function () {
                    (t.content.getComponent(cc.Layout).enabled = !0),
                        cc.tween(t.egg.node).then(t.tween).repeat(e.length).start(),
                        M.default.inst.showBlock(
                            e,
                            o,
                            t.anNodeSpeed,
                            function () {
                                (e = []), (t.btnHome.active = !0), (t.btnDouble.active = !0);
                            }.bind(t)
                        );
                }.bind(this)
            );
        }),
        (x.prototype.anNodeFun = function () {
            (this.panel.scaleY = 0.3),
                (this.panel.scaleX = 0),
                M.default.inst.finishEject(this.panel, 0.2, this.showEgg.bind(this));
        }),
        (x.prototype.updateRewards = function () {
            var e = [];
            null === (o = h.app.track) || void 0 === o || o.trackEvent("death_" + this._viewData.chapter + "_Succ"),
                null === (n = h.app.track) || void 0 === n || n.trackEvent("death_pass_" + m.default.inst.deathPass),
                S.default.inst.addHonour("pass", 1);
            var t = _.default.inst.deathConf.calcRewards(m.default.inst.deathPass);
            console.log("[WinDeathView]-->[line:164]:", m.default.inst.deathPass, t);
            var o = t.gem;
            0 < o &&
                (e.push({
                    id: 0,
                    type: A.ResultRewardType.Gem,
                    value: o,
                    url: b.ResUtils.Textures.Props_Gem.url,
                    isFlag: !0
                }),
                m.default.inst.addGem(o)),
                0 < (n = t.gold) &&
                    (e.push({
                        id: 0,
                        type: A.ResultRewardType.Gold,
                        value: n,
                        url: b.ResUtils.Textures.Props_Coin.url,
                        isFlag: !0
                    }),
                    m.default.inst.addGold(n));
            var n = g.HeroController.getAtrr("gold"),
                o = g.HeroController.getAtrr("gold_rate");
            if (
                (0 < n &&
                    ((n = Math.floor(n * o)),
                    e.push({
                        id: 0,
                        type: A.ResultRewardType.Gold,
                        value: n,
                        url: b.ResUtils.Textures.Props_Coin.url,
                        isFlag: !1
                    }),
                    m.default.inst.addGold(n)),
                0 < t.drawings)
            ) {
                for (var i = new Map(), r = 0; r < t.drawings; r++) {
                    var a = _.default.inst.drawingConf.getRandomDrawing();
                    i.has(a.id)
                        ? (i.get(a.id).value += 1)
                        : i.set(a.id, {id: a.id, type: A.ResultRewardType.Drawings, value: 1, url: a.icon, isFlag: !1});
                }
                console.log("[WinDeathView]-->[line:199]:", Array.from(i.values())),
                    i.forEach(function (t) {
                        e.push(t), f.DrawingController.inst.addDrawing(t.id, t.value);
                    });
            }
            if (t.equips)
                for (var s = 0; s < t.equips; s++) {
                    var l = _.default.inst.equipConf.getRandomEquip(),
                        c = _.default.inst.chapterConf.getEquipDropQuality(),
                        c = _.default.inst.equipConf.getEquipQualityVo(l.equip_id, c);
                    e.push({
                        id: l.equip_id,
                        type: A.ResultRewardType.Equip,
                        value: 1,
                        quality: c.quality,
                        url: "equips/" + c.icon,
                        isFlag: !1
                    }),
                        y.EquipController.inst.addEquip(c.equip_id, c.quality, 1),
                        console.log("[WinDeathView]-->[line:218]:");
                }
            var u = g.HeroController.getGoods();
            if (0 < u.length)
                for (r = 0; r < u.length; r++) {
                    var p = _.default.inst.goodsConf.getGoodsById(u[r].id);
                    e.push({
                        id: u[r].id,
                        type: A.ResultRewardType.Goods,
                        value: u[r].count,
                        url: p.url,
                        isFlag: !1,
                        bundle: O.BundleType.Goods
                    }),
                        P.default.inst.addGoods(u[r].id, u[r].count);
                }
            (this.items = e),
                (this.rewards.numItems = e.length),
                (this.rewards.node.position = cc.v3(0, 8 < e.length ? 78 : 46));
        }),
        (x.prototype.getRewards = function () {
            this.items.forEach(function (t) {
                switch (t.type) {
                    case 1:
                        m.default.inst.addGold(t.value);
                        break;
                    case 2:
                        m.default.inst.addExp(t.value);
                        break;
                    case 3:
                        f.DrawingController.inst.addDrawing(t.id, t.value);
                        break;
                    case 4:
                        null != t.quality && 0 < t.quality
                            ? y.EquipController.inst.addEquip(t.id, t.quality, t.value)
                            : console.error("[WinDeathView] ad double equip missing quality", t.id);
                }
            });
        }),
        (x.prototype.onItemRender = function (t, e) {
            t.getComponent(w.default).setData(this.items[e]), (t.active = 0 < this.items[e].value);
        }),
        (x.prototype.onBtnRecordClick = function () {
            h.app.gui.openUI(u.UIEnum.RoundRecordView, d.LayerEnum.VIEW_LAYER);
        }),
        (x.prototype.onBtnHomeClick = function () {
            h.app.gui.closeUI(u.UIEnum.GameView), h.app.gui.closeUI(u.UIEnum.WinDeathView);
            var t = D.MainPageType.Battle;
            h.app.gui.openUI(u.UIEnum.HomeView, d.LayerEnum.VIEW_LAYER, {page: t});
        }),
        (x.prototype.onBtnDoubleClick = function (e) {
            var t,
                o = this;
            if (this._adDoubleClaimed) return;
            null === (t = h.app.track) || void 0 === t || t.trackEvent(k.TrackType.Death_Reward2_Click),
                this.btnDouble && (this.btnDouble.active = !1),
                v.default.inst.getVideoShareReward(
                    function () {
                        var t;
                        if (o._adDoubleClaimed) return;
                        (o._adDoubleClaimed = !0),
                            o.getRewards(),
                            o.onBtnHomeClick(e),
                            null === (t = h.app.track) || void 0 === t || t.trackEvent(k.TrackType.Death_Reward2_Succ);
                    },
                    null,
                    function () {
                        o.btnDouble && (o.btnDouble.active = !0),
                            E.default.inst.showTips("获取视频失败，请稍候再试！");
                    }
                );
        }),
        r([p.autoBind("CCSkeleton", "egg")], x.prototype, "egg", void 0),
        r([p.autoBind("cc.Node", "panel/sb_dg")], x.prototype, "sb_dg", void 0),
        r([p.autoBind("cc.Node", "panel/rewards/view/content")], x.prototype, "content", void 0),
        r([p.autoBind("cc.Node", "btnDouble")], x.prototype, "btnDouble", void 0),
        r([p.autoBind("cc.Node", "bg")], x.prototype, "bg", void 0),
        r([p.autoBind("cc.Node", "panel")], x.prototype, "panel", void 0),
        r([p.autoBind("cc.Node", "btnRecord")], x.prototype, "btnRecord", void 0),
        r([p.autoBind("cc.Node", "btnHome")], x.prototype, "btnHome", void 0),
        r([p.autoBind("List", "panel/rewards")], x.prototype, "rewards", void 0),
        r([t([cc.Node])], x.prototype, "anNode", void 0),
        r([e], x));
function x() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.egg = null),
        (t.sb_dg = null),
        (t.content = null),
        (t.btnDouble = null),
        (t.bg = null),
        (t.panel = null),
        (t.btnRecord = null),
        (t.btnHome = null),
        (t.rewards = null),
        (t.anNode = []),
        (t.items = null),
        (t.anNodeSpeed = 0.2),
        (t.tween = null),
        t
    );
}
o.default = e;
