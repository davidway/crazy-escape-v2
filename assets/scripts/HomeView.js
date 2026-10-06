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
    u = t("decorator"),
    p = t("GameMgr"),
    h = t("EffectMgr"),
    d = t("MainButton"),
    f = t("MainPageType"),
    y = t("ResUtils"),
    g = t("ResMgr"),
    m = t("ConfData"),
    _ = t("App"),
    v = t("UserDataController"),
    b = t("CloseUI"),
    w = t("EventTypes"),
    C = t("TopNode"),
    k = t("MultipleController"),
    E = t("LayerMgr"),
    S = t("UIEnum"),
    M = t("EvolveController"),
    R = t("ShareDataController"),
    T = t("EquipController"),
    D = t("GuideController"),
    P = t("GuideGroup"),
    O = t("GameDataController"),
    A = t("ShopController"),
    L = t("GameSetting"),
    x = t("GetGemController"),
    LA = t("LobbyArcade"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (l = c.default),
        i(B, l),
        (B.prototype.initView = function () {
            this.mainBtns.set(f.MainPageType.Shop, this.btnShop.getComponent(d.default)),
                this.mainBtns.set(f.MainPageType.Equip, this.btnEquip.getComponent(d.default)),
                this.mainBtns.set(f.MainPageType.Battle, this.btnBattle.getComponent(d.default)),
                this.mainBtns.set(f.MainPageType.Challenge, this.btnModel.getComponent(d.default)),
                this.mainBtns.set(f.MainPageType.Evolve, this.btnEvolve.getComponent(d.default)),
                this.urls.set(f.MainPageType.Battle, y.ResUtils.Prefabs.BattlePage),
                this.urls.set(f.MainPageType.Equip, y.ResUtils.Prefabs.EquipsPage),
                this.urls.set(f.MainPageType.Challenge, y.ResUtils.Prefabs.ChallengePage),
                this.urls.set(f.MainPageType.Evolve, y.ResUtils.Prefabs.EvolvePage),
                this.urls.set(f.MainPageType.Shop, y.ResUtils.Prefabs.ShopPage);
            var t = v.default.inst.chapter;
            this.functionOn.set(f.MainPageType.Shop, !0),
                this.functionOn.set(f.MainPageType.Equip, !0),
                this.functionOn.set(f.MainPageType.Battle, !0),
                this.functionOn.set(f.MainPageType.Challenge, t >= this.challenge_unlock_chapter),
                this.functionOn.set(f.MainPageType.Evolve, t >= this.evolve_unlock_chapter),
                k.default.inst.Breathing(this.Evolve_hd, 1.2, 1, 0.9),
                k.default.inst.Breathing(this.Model_hd, 1.2, 1, 0.9),
                k.default.inst.Breathing(this.Equip_hd, 1.2, 1, 0.9),
                k.default.inst.Breathing(this.Shop_hd, 1.2, 1, 0.9);
            t = O.default.inst.getValue("chapter");
            console.log("[HomeView]-->[line:120]:", t),
                0 < t &&
                    ((p.default.inst.isContinue = !0),
                    _.app.gui.openUI(S.UIEnum.ContinueGameView, E.LayerEnum.VIEW_LAYER));
        }),
        (B.prototype.updateView = function () {
            _.app.sound.playMusic("主界面bgm"),
                _.app.event.emit(w.EventType.User_Level_Up),
                (this.curr_page = f.MainPageType.None);
            var t = f.MainPageType.Battle;
            this._viewData && null != this._viewData.page && (t = this._viewData.page),
                this.checkPageUnLock(),
                this.setPage(t),
                this.addTop(),
                this.updateBtns(),
                this.addSlide(),
                this.showEvolveHd(),
                this.showModelHd(),
                this.showEquipHd(),
                this.showShop_hd(),
                LA.applyHomeChrome(this);
        }),
        (B.prototype.checkPageUnLock = function () {
            var t,
                e = v.default.inst.chapter;
            !this.functionOn.get(f.MainPageType.Challenge) &&
                e >= this.challenge_unlock_chapter &&
                (this.functionOn.set(f.MainPageType.Challenge, !0),
                (t = {
                    type: 1,
                    icon: this.btnModel.getChildByName("icon").getComponent(cc.Sprite).spriteFrame,
                    describe: "挑战",
                    guide: P.GuideGroup.Challenge
                }),
                R.default.inst.addNewAbilityData(t, !0)),
                !this.functionOn.get(f.MainPageType.Evolve) &&
                    v.default.inst.chapter >= this.evolve_unlock_chapter &&
                    (this.functionOn.set(f.MainPageType.Evolve, !0),
                    (t = {
                        type: 1,
                        icon: this.btnEvolve.getChildByName("icon").getComponent(cc.Sprite).spriteFrame,
                        describe: "进化",
                        guide: P.GuideGroup.Evolution
                    }),
                    R.default.inst.addNewAbilityData(t, !0)),
                p.default.inst.isContinue ||
                    0 != D.GuideController.getGuide("skin") ||
                    (1 == D.GuideController.getGuide("Equipment")
                        ? this.onContinueGameViewclose()
                        : ((t = {
                              type: 1,
                              icon: this.btnEquip.getChildByName("icon").getComponent(cc.Sprite).spriteFrame,
                              describe: "装备",
                              guide: P.GuideGroup.Skin
                          }),
                          R.default.inst.addNewAbilityData(t, !0)));
        }),
        (B.prototype.showShop_hd = function () {
            console.log("**************商店红点");
            var t = !1;
            if (this.functionOn.get(f.MainPageType.Shop)) {
                var e = A.default.inst.getShopStorageData();
                if (0 == e.sixModuleStorageData.length) (t = !0), console.log("***************新进入");
                else {
                    for (
                        var o = e.sixModuleStorageData, n = !1, i = new Date().getTime(), r = 0, a = 0, s = 0;
                        s < o.length;
                        s++
                    )
                        if (
                            (o[s] && console.log(o[s].commodityData[0].buy, o[s].commodityData[0].canbuy),
                            o[s] && o[s].commodityData[0].buy < o[s].commodityData[0].canbuy)
                        ) {
                            (a = 1e3 * L.GameSetting.inst.wealth_cd),
                                i - x.default.inst.gem_time >= a &&
                                v.default.inst.gemCount < L.GameSetting.inst.dailyGemCount &&
                                0 == x.default.inst.gem_time
                                    ? ((t = !0), console.log("***************有免费钻石"))
                                    : ((n = !0), (r = x.default.inst.gem_time));
                            break;
                        }
                    var l,
                        c = e.towModuleStorageData;
                    for (e.oneModuleStorageData, s = 0; s < c.length; s++) {
                        if (c[s] && c[s].commodityData[0].adOpen < L.GameSetting.inst.plain_chest_ad) {
                            if (i - (l = c[s].commodityData[0].LockStartTime) >= a) {
                                (t = !0), console.log("***************有免费普通宝箱");
                                break;
                            }
                            (n = !0), (0 == r || l < r) && ((a = 1e3 * L.GameSetting.inst.chest_ad_down_time), (r = l));
                        }
                        if (c[s] && c[s].commodityData[1].adOpen < L.GameSetting.inst.epic_chest_ad) {
                            if (i - (l = c[s].commodityData[1].LockStartTime) >= a) {
                                (t = !0), console.log("***************有免费史诗宝箱");
                                break;
                            }
                            (n = !0), (0 == r || l < r) && ((a = 1e3 * L.GameSetting.inst.chest_ad_down_time), (r = l));
                        }
                    }
                    !t && n && (console.log("有锁"), m.default.inst.shopConf.downTime(r, a));
                }
            } else t = !1;
            this.Shop_hd.active = t;
        }),
        (B.prototype.showEquipHd = function () {
            for (var t = !1, e = 0, o = T.EquipController.inst.getEquips(); e < o.length; e++) {
                var n = o[e];
                if (T.EquipController.inst.canMerge(n.id, n.equipType, n.quality)) {
                    (t = !0), console.log("可以合成");
                    break;
                }
            }
            if (!t)
                for (var i = T.EquipController.inst.getHeroEquips(), r = 0; r < i.length; r++)
                    if ((t = T.EquipController.inst.checkLvUp(i[r], !1))) {
                        console.log("可以升级");
                        break;
                    }
            if (!t)
                for (var a = T.EquipController.inst.getEquips(), r = 0; r < a.length; r++)
                    if (0 == a[r].status) {
                        var s = T.EquipController.inst.getHeroEquipByType(a[r].equipType);
                        if (null == s) {
                            (t = !0), console.log("可以穿着");
                            break;
                        }
                        if (a[r].quality > s.quality) {
                            (t = !0), console.log("可以穿着高级");
                            break;
                        }
                    }
            this.Equip_hd.active = t;
        }),
        (B.prototype.showModelHd = function () {
            for (var t = _.app.local.getValue("challenges"), e = !1, o = 0; o < t.length; o++)
                if (1 == t[o].status) {
                    e = !0;
                    break;
                }
            this.Model_hd.active = e;
        }),
        (B.prototype.showEvolveHd = function () {
            var t, e, o, n, i;
            (this.Evolve_hd.active = !1),
                this.functionOn.get(f.MainPageType.Evolve) &&
                    ((t = v.default.inst.level),
                    (n = m.default.inst.evolveConf.getSpecialList()),
                    (i = !1),
                    (o = v.default.inst.gene),
                    (e = M.default.inst.getNormalid()),
                    (n = n[M.default.inst.special % 1e3]) && ((i = e > n.need), t >= n.level && o >= n.cost && i)
                        ? (this.Evolve_hd.active = !0)
                        : ((o = m.default.inst.evolveConf.getNormalList()),
                          (n = v.default.inst.gold),
                          (i = o[M.default.inst.nomal % 1e3]) &&
                              t >= i.level &&
                              (i = o[M.default.inst.nomal]) &&
                              n >= i.cost &&
                              (this.Evolve_hd.active = !0)));
        }),
        (B.prototype.addSlide = function () {
            var e = this;
            null == this.openList[1] &&
                this.functionOn.get(f.MainPageType.Shop) &&
                (this.openList[1] = function (t) {
                    e.setPage(f.MainPageType.Shop, t);
                }),
                null == this.openList[2] &&
                    (this.openList[2] = function (t) {
                        e.setPage(f.MainPageType.Equip, t);
                    }),
                null == this.openList[3] &&
                    (this.openList[3] = function (t) {
                        e.setPage(f.MainPageType.Battle, t);
                    }),
                null == this.openList[4] &&
                    this.functionOn.get(f.MainPageType.Challenge) &&
                    (this.openList[4] = function (t) {
                        e.setPage(f.MainPageType.Challenge, t);
                    }),
                null == this.openList[5] &&
                    this.functionOn.get(f.MainPageType.Evolve) &&
                    (this.openList[5] = function (t) {
                        e.setPage(f.MainPageType.Evolve, t);
                    }),
                (k.default.inst.openList = this.openList),
                console.log(k.default.inst.openList);
        }),
        (B.prototype.updateBtns = function () {
            var o = this;
            this.mainBtns.forEach(function (t, e) {
                e = o.functionOn.get(e);
                t.setGray(t.node, !e);
            });
        }),
        (B.prototype.setPage = function (t, e) {
            this.functionOn.get(t) &&
                this.curr_page != t &&
                (this.mainBtns.forEach(function (t) {
                    t.selected = !1;
                }),
                (this.mainBtns.get(t).selected = !0),
                this.showPage(t, e));
        }),
        (B.prototype.showPage = function (i, r) {
            return a(this, void 0, void 0, function () {
                var e, o, n;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = this.pages.get(i)),
                                console.time("主页切换"),
                                e ? [3, 3] : [4, _.app.gui.openUI(S.UIEnum.WaitingView, E.LayerEnum.TOP_LAYER)]
                            );
                        case 1:
                            return (
                                t.sent(),
                                (o = this.urls.get(i))
                                    ? [4, g.default.inst.getNodeFromPool(o.url, o.bundle)]
                                    : (_.app.gui.isLock(!1), [2])
                            );
                        case 2:
                            (n = t.sent()),
                                this.pages.set(i, n),
                                (e = n),
                                _.app.gui.closeUI(S.UIEnum.WaitingView),
                                (t.label = 3);
                        case 3:
                            return (
                                (n = !!this.useSlipEffect && null == D.GuideController.guideVo),
                                this.curr_page != f.MainPageType.None && n
                                    ? i != this.curr_page &&
                                      (this.isLock || this.frameMove(e, this.content.children[0], i, this.curr_page, r))
                                    : (this.content.removeAllChildren(!1),
                                      (e.parent = this.content),
                                      (this.curr_page = i),
                                      p.default.inst.topNode && p.default.inst.topNode.setPage(this.curr_page)),
                                [2]
                            );
                    }
                });
            });
        }),
        (B.prototype.frameMove = function (t, e, o, n, i) {
            var r = this;
            this.isLock = !0;
            var a = cc.winSize.width,
                i = null == i ? (n < o ? -1 : 1) : i;
            t.setPosition(a * i * -1, 0),
                this.content.addChild(t),
                (t.getComponent(cc.Widget).isAlignLeft = !1),
                (t.getComponent(cc.Widget).isAlignRight = !1),
                cc.tween(t).to(0.2, {x: 0}).start(),
                cc
                    .tween(e)
                    .to(0.2, {x: a * i})
                    .call(function () {
                        (r.isLock = !1),
                            (t.getComponent(cc.Widget).isAlignLeft = !0),
                            (t.getComponent(cc.Widget).isAlignRight = !0),
                            r.content.removeChild(r.content.children[0], !1),
                            (r.curr_page = o),
                            p.default.inst.topNode && p.default.inst.topNode.setPage(r.curr_page);
                    })
                    .start();
        }),
        (B.prototype.addTop = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return p.default.inst.topNode
                                ? [3, 2]
                                : [
                                      4,
                                      g.default.inst.getNodeFromPool(
                                          y.ResUtils.Prefabs.TopNode.url,
                                          y.ResUtils.Prefabs.TopNode.bundle
                                      )
                                  ];
                        case 1:
                            (e = t.sent()), (p.default.inst.topNode = e.getComponent(C.default)), (t.label = 2);
                        case 2:
                            return (
                                (p.default.inst.topNode.node.parent = this.top),
                                this.curr_page != f.MainPageType.None && p.default.inst.topNode.setPage(this.curr_page),
                                b.default.inst.setNode("top", p.default.inst.topNode.node),
                                this.scheduleOnce(function () {
                                    _.app.gui.openUI(S.UIEnum.GetGoldView, E.LayerEnum.TOP_LAYER);
                                }),
                                [2]
                            );
                    }
                });
            });
        }),
        (B.prototype.onShopEvolveChangePage = function () {
            this.showShop_hd();
        }),
        (B.prototype.onEquipEvolveChangePage = function () {
            this.showEquipHd();
        }),
        (B.prototype.onHomeEvolveChangePage = function () {
            this.showEvolveHd();
        }),
        (B.prototype.onModelEvolveChangePage = function () {
            this.showModelHd();
        }),
        (B.prototype.onPageChange = function (t) {
            this.setPage(t.page);
        }),
        (B.prototype.onContinueGameViewclose = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return p.default.inst.isContinue || 0 != D.GuideController.getGuide("skin")
                                ? [3, 2]
                                : ((p.default.inst.isOldGuide = !0),
                                  (R.default.inst.NewAbilityData.length = 0),
                                  [4, D.GuideController.initGroup(P.GuideGroup.Skin)]);
                        case 1:
                            t.sent(), _.app.gui.openUI(S.UIEnum.GuideSkinView, E.LayerEnum.VIEW_LAYER), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (B.prototype.onLevelUp = function () {}),
        (B.prototype.onBtnShopClick = function () {
            this.functionOn.get(f.MainPageType.Shop) ||
                (this.openShop
                    ? h.default.inst.showTips("通关章节" + (this.challenge_shop_chapter - 1) + "后解锁")
                    : h.default.inst.showTips("敬请期待")),
                this.setPage(f.MainPageType.Shop);
        }),
        (B.prototype.onBtnEquipClick = function () {
            this.functionOn.get(f.MainPageType.Equip)
                ? this.setPage(f.MainPageType.Equip)
                : h.default.inst.showTips("通关章节" + (this.challenge_equip_chapter - 1) + "后解锁");
        }),
        (B.prototype.onBtnBattleClick = function () {
            this.setPage(f.MainPageType.Battle);
        }),
        (B.prototype.onBtnModelClick = function () {
            this.functionOn.get(f.MainPageType.Challenge)
                ? this.setPage(f.MainPageType.Challenge)
                : h.default.inst.showTips("通关章节" + (this.challenge_unlock_chapter - 1) + "后解锁");
        }),
        (B.prototype.onBtnEvolveClick = function () {
            this.functionOn.get(f.MainPageType.Evolve)
                ? this.setPage(f.MainPageType.Evolve)
                : h.default.inst.showTips("通关章节" + (this.evolve_unlock_chapter - 1) + "后解锁");
        }),
        r([u.autoBind("cc.Node", "ui/btns/btnShop/Shop_hd")], B.prototype, "Shop_hd", void 0),
        r([u.autoBind("cc.Node", "ui/btns/btnEquip/Equip_hd")], B.prototype, "Equip_hd", void 0),
        r([u.autoBind("cc.Node", "ui/btns/btnModel/Model_hd")], B.prototype, "Model_hd", void 0),
        r([u.autoBind("cc.Node", "ui/btns/btnEvolve/Evolve_hd")], B.prototype, "Evolve_hd", void 0),
        r([u.autoBind("cc.Node", "content")], B.prototype, "content", void 0),
        r([u.autoBind("cc.Node", "ui/btns")], B.prototype, "btns", void 0),
        r([u.autoBind("cc.Node", "ui/top")], B.prototype, "top", void 0),
        r([u.autoBind("cc.Node", "ui/btns/btnShop")], B.prototype, "btnShop", void 0),
        r([u.autoBind("cc.Node", "ui/btns/btnEquip")], B.prototype, "btnEquip", void 0),
        r([u.autoBind("cc.Node", "ui/btns/btnBattle")], B.prototype, "btnBattle", void 0),
        r([u.autoBind("cc.Node", "ui/btns/btnModel")], B.prototype, "btnModel", void 0),
        r([u.autoBind("cc.Node", "ui/btns/btnEvolve")], B.prototype, "btnEvolve", void 0),
        r([u.gameEvent(w.EventType.Home_Shop_Change_Page)], B.prototype, "onShopEvolveChangePage", null),
        r([u.gameEvent(w.EventType.Home_Equip_Change_Page)], B.prototype, "onEquipEvolveChangePage", null),
        r([u.gameEvent(w.EventType.Home_Evolve_Change_Page)], B.prototype, "onHomeEvolveChangePage", null),
        r([u.gameEvent(w.EventType.Home_Model_Change_Page)], B.prototype, "onModelEvolveChangePage", null),
        r([u.gameEvent(w.EventType.Home_Change_Page)], B.prototype, "onPageChange", null),
        r([u.gameEvent(w.EventType.Continue_GameView_close)], B.prototype, "onContinueGameViewclose", null),
        r([u.gameEvent(w.EventType.User_Level_Up)], B.prototype, "onLevelUp", null),
        r([t], B));
function B() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.Shop_hd = null),
        (t.Equip_hd = null),
        (t.Model_hd = null),
        (t.Evolve_hd = null),
        (t.content = null),
        (t.btns = null),
        (t.top = null),
        (t.btnShop = null),
        (t.btnEquip = null),
        (t.btnBattle = null),
        (t.btnModel = null),
        (t.btnEvolve = null),
        (t.mainBtns = new Map()),
        (t.pages = new Map()),
        (t.urls = new Map()),
        (t.curr_page = f.MainPageType.None),
        (t.functionOn = new Map()),
        (t.evolve_unlock_chapter = 3),
        (t.challenge_unlock_chapter = 5),
        (t.challenge_equip_chapter = 2),
        (t.challenge_shop_chapter = 2),
        (t.useSlipEffect = !1),
        (t.isLock = !1),
        (t.openList = []),
        (t.openShop = !0),
        t
    );
}
o.default = t;
