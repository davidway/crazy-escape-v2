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
        };
Object.defineProperty(o, "__esModule", {value: !0});
var a,
    s = t("BasePanel"),
    l = t("UIEnum"),
    c = t("decorator"),
    C = t("App"),
    u = t("LayerMgr"),
    k = t("ArrayUtil"),
    E = t("MathUtil"),
    S = t("DrawingController"),
    M = t("EquipController"),
    R = t("HeroController"),
    T = t("UserDataController"),
    D = t("ConfData"),
    P = t("EquipType"),
    O = t("GameMgr"),
    A = t("ResUtils"),
    p = t("RewardItem"),
    L = t("GameEnums"),
    x = t("TrackType"),
    h = t("EffectMgr"),
    B = t("TaskController"),
    d = t("MultipleController"),
    f = t("AssignmentController"),
    y = t("AssignmentConf"),
    g = t("MainPageType"),
    I = t("ResultRewardType"),
    G = t("BundleType"),
    N = t("GoodsDataController"),
    U = t("UnlockContentLabels"),
    UiStyle = t("UiStyle"),
    SPA = t("SkillPickSettleArcade"),
    m = cc._decorator,
    e = m.ccclass,
    t = m.property,
    e =
        (m.inspector,
        (a = s.default),
        i(_, a),
        (_.prototype.initView = function () {
            this.bg.on(cc.Node.EventType.TOUCH_START, function () {}, this),
                this.sb_dg.on(cc.Node.EventType.TOUCH_START, function () {}, this);
        }),
        (_.prototype.updateView = function () {
            (this.anNodeSpeed = 0.2),
                (this.btnHome.active = !1),
                (this.btnDouble.active = !1),
                (this.btnRecord.active = !1),
                C.app.sound.pauseMusic(),
                C.app.sound.playEffect("通关UI弹出时音效"),
                (this.killLab.string = O.default.inst.killNum + "");
            var t = D.default.inst.chapterConf.getChapterVo(this._viewData.chapter);
            console.log(this._viewData, t),
                (this.chapter.string = "章节"),
                (this.chapterLab.string = "" + t.name),
                this._viewData.isFirstClear &&
                    t.unlock_content_id &&
                    U.getUnlockLabel(t.unlock_content_id) &&
                    (this.chapterLab.string = t.name + "\n" + U.getUnlockLabel(t.unlock_content_id)),
                UiStyle.applyLabelStyle(this.chapterLab.node, "h1Gold"),
                UiStyle.applyLabelStyle(this.chapter.node, "caption"),
                SPA.applyWinSettle(this),
                this.anNode.forEach(function (t) {
                    (t.scale = 2), (t.opacity = 0);
                }),
                this.updateRewards(),
                this.anNodeFun();
            t = f.default.inst.kill_boss + O.default.inst.bossNum;
            f.default.inst.setProg(t, y.DayAssign.kill_boss);
            t = f.default.inst.kill_monster + O.default.inst.killNum;
            f.default.inst.setProg(t, y.DayAssign.kill_monster);
        }),
        (_.prototype.anNodeFun = function () {
            var t = this;
            (this.panel.scaleY = 0.3), (this.panel.scaleX = 0);
            for (var e = [], o = 0, n = 0; n < this.content.childrenCount; n++)
                this.content.children[n].active &&
                    ((this.content.children[n].active = !1),
                    (o = this.content.children[n].scale),
                    (this.content.children[n].scale = o + 1.8),
                    e.push(this.content.children[n]));
            d.default.inst.finishEject(this.panel, 0.2, function () {
                d.default.inst.showBlock(
                    t.anNode,
                    1,
                    t.anNodeSpeed,
                    function () {
                        (t.content.getComponent(cc.Layout).enabled = !0),
                            d.default.inst.showBlock(
                                e,
                                o,
                                t.anNodeSpeed,
                                function () {
                                    (e = []), (t.btnHome.active = !0), (t.btnDouble.active = !0);
                                }.bind(t)
                            );
                    }.bind(t)
                );
            });
        }),
        (_.prototype.updateRewards = function () {
            var t,
                e = [],
                o = D.default.inst.chapterConf.getChapterVo(this._viewData.chapter);
            o.type == L.Map_Group.ACTIVITY
                ? null === (t = C.app.track) || void 0 === t || t.trackEvent(x.TrackType.Activity_Rewards)
                : o.type == L.Map_Group.CHALLENGE
                ? (null === (t = C.app.track) ||
                      void 0 === t ||
                      t.trackEvent("Challenge" + this._viewData.chapter + "_Succ"),
                  B.default.inst.addDaily("challenge", 1),
                  B.default.inst.addWeek("challenge", 1))
                : o.type == L.Map_Group.NORMAL
                ? (null === (n = C.app.track) ||
                      void 0 === n ||
                      n.trackEvent("Chapter" + this._viewData.chapter + "_Succ"),
                  B.default.inst.addDaily("chapter", 1),
                  B.default.inst.addWeek("chapter", 1))
                : o.type == L.Map_Group.HELL &&
                  (null === (i = C.app.track) ||
                      void 0 === i ||
                      i.trackEvent("hell_" + this._viewData.chapter + "_Succ")),
                B.default.inst.addHonour("pass", 1);
            var n = Math.floor(o.settle_coin * O.default.inst.roundTime);
            e.push({
                id: 0,
                type: I.ResultRewardType.Gold,
                value: n,
                url: A.ResUtils.Textures.Props_Coin.url,
                isFlag: !0
            }),
                T.default.inst.addGold(n);
            var i = Math.floor(o.settle_exp * O.default.inst.roundTime);
            e.push({id: 0, type: I.ResultRewardType.Exp, value: i, url: A.ResUtils.Textures.Props_Exp.url, isFlag: !0}),
                T.default.inst.addExp(i);
            (n = R.HeroController.getAtrr("gold")), (i = R.HeroController.getAtrr("gold_rate"));
            if (
                (0 < n &&
                    ((n = Math.floor(n * i)),
                    e.push({
                        id: 0,
                        type: I.ResultRewardType.Gold,
                        value: n,
                        url: A.ResUtils.Textures.Props_Coin.url,
                        isFlag: !1
                    }),
                    T.default.inst.addGold(n)),
                o.settle_drawings)
            )
                for (var r = 0; r < o.settle_drawings.length; r++) {
                    var a = o.settle_drawings[r];
                    if (O.default.inst.roundTime <= a.time) {
                        if (0 < a.count)
                            for (var s = 0; s < a.variety; s++) {
                                var l = D.default.inst.drawingConf.getRandomDrawing(),
                                    c = E.default.randomRangeInt(1, a.count);
                                e.push({
                                    id: l.id,
                                    type: I.ResultRewardType.Drawings,
                                    value: c,
                                    url: l.icon,
                                    isFlag: !1
                                }),
                                    S.DrawingController.inst.addDrawing(l.id, c);
                            }
                        break;
                    }
                }
            n = R.HeroController.getDrawings();
            if (0 < n.length)
                for (var u = 0, p = n; u < p.length; u++) {
                    var h = p[u],
                        l = D.default.inst.drawingConf.getDrawingVoById(h.id);
                    e.push({id: h.id, type: I.ResultRewardType.Drawings, value: h.count, url: l.icon, isFlag: !1}),
                        S.DrawingController.inst.addDrawing(h.id, h.count);
                }
            if (o.settle_equip)
                for (r = 0; r < o.settle_equip.length; r++)
                    if (((a = o.settle_equip[r]), O.default.inst.roundTime <= a.time)) {
                        k.default.shuffle(a.id);
                        for (var d = 0; d < a.variety; d++) {
                            var f = a.id[d],
                                y = ((c = 1), D.default.inst.equipConf.getEquipQualityVo(f, P.EquipQualityType.GRAY));
                            e.push({
                                id: f,
                                type: I.ResultRewardType.Equip,
                                value: c,
                                quality: P.EquipQualityType.GRAY,
                                url: "equips/" + y.icon,
                                isFlag: !1
                            }),
                                M.EquipController.inst.addEquip(f, P.EquipQualityType.GRAY, c);
                        }
                        break;
                    }
            n = R.HeroController.getEquips();
            if (0 < n.length)
                for (var g = 0, m = n; g < m.length; g++)
                    (h = m[g]),
                        (y = D.default.inst.equipConf.getEquipQualityVo(h.id, h.quality)),
                        e.push({
                            id: h.id,
                            type: I.ResultRewardType.Equip,
                            value: 1,
                            quality: h.quality,
                            url: "equips/" + y.icon,
                            isFlag: !1
                        }),
                        M.EquipController.inst.addEquip(h.id, h.quality, 1);
            else {
                var _ = D.default.inst.chapterConf.getEquipDropNum(10);
                for (console.log("结算获得装备:", _), r = 0; r < _; r++) {
                    var a = D.default.inst.equipConf.getRandomEquip(),
                        v = D.default.inst.chapterConf.getEquipDropQuality(),
                        y = D.default.inst.equipConf.getEquipQualityVo(a.equip_id, v);
                    e.push({
                        id: a.equip_id,
                        type: I.ResultRewardType.Equip,
                        value: 1,
                        quality: y.quality,
                        url: "equips/" + y.icon,
                        isFlag: !1
                    }),
                        M.EquipController.inst.addEquip(y.equip_id, y.quality, 1),
                        console.log("结算获得装备---->", y.equip_id, y.name);
                }
            }
            var b = R.HeroController.getGoods();
            if (0 < b.length)
                for (r = 0; r < b.length; r++) {
                    var w = D.default.inst.goodsConf.getGoodsById(b[r].id);
                    e.push({
                        id: b[r].id,
                        type: I.ResultRewardType.Goods,
                        value: b[r].count,
                        url: w.url,
                        isFlag: !1,
                        bundle: G.BundleType.Goods
                    }),
                        N.default.inst.addGoods(b[r].id, b[r].count);
                }
            if (this._viewData.isFirstClear && o.type == L.Map_Group.NORMAL) {
                var F = o.first_clear_gem || 0;
                if (0 < F)
                    e.push({
                        id: 0,
                        type: I.ResultRewardType.Gem,
                        value: F,
                        url: A.ResUtils.Textures.Props_Gem.url,
                        isFlag: !0,
                        firstClearOnly: !0
                    }),
                        T.default.inst.addGem(F, !0);
                var W = o.first_clear_drawings_count || 0;
                if (0 < W)
                    for (r = 0; r < W; r++) {
                        var j = D.default.inst.drawingConf.getRandomDrawing();
                        e.push({
                            id: j.id,
                            type: I.ResultRewardType.Drawings,
                            value: 1,
                            url: j.icon,
                            isFlag: !1,
                            firstClearOnly: !0
                        }),
                            S.DrawingController.inst.addDrawing(j.id, 1);
                    }
                (a = o.unlock_content_id) && U.getUnlockLabel(a) && h.default.inst.showTips(U.getUnlockLabel(a));
            }
            (this.items = e), console.log(this.items), (this.rewards.numItems = e.length);
        }),
        (_.prototype.getRewards = function () {
            this.items.forEach(function (t) {
                if (t.firstClearOnly) return;
                switch (t.type) {
                    case I.ResultRewardType.Gold:
                        T.default.inst.addGold(t.value);
                        break;
                    case I.ResultRewardType.Exp:
                        T.default.inst.addExp(t.value);
                        break;
                    case I.ResultRewardType.Drawings:
                        S.DrawingController.inst.addDrawing(t.id, t.value);
                        break;
                    case I.ResultRewardType.Equip:
                        null != t.quality && 0 < t.quality
                            ? M.EquipController.inst.addEquip(t.id, t.quality, t.value)
                            : console.error("[WinView] ad double equip missing quality", t.id);
                        break;
                    case I.ResultRewardType.Goods:
                        N.default.inst.addGoods(t.id, t.value);
                }
            });
        }),
        (_.prototype.onItemRender = function (t, e) {
            t.getComponent(p.default).setData(this.items[e]), (t.active = 0 < this.items[e].value);
        }),
        (_.prototype.onBtnRecordClick = function () {
            C.app.gui.openUI(l.UIEnum.RoundRecordView, u.LayerEnum.VIEW_LAYER);
        }),
        (_.prototype.onBtnHomeClick = function () {
            var t;
            C.app.gui.closeUI(l.UIEnum.GameView), C.app.gui.closeUI(l.UIEnum.WinView);
            var e = g.MainPageType.Battle;
            (null === (t = O.default.inst.chapterVo) || void 0 === t ? void 0 : t.type) == L.Map_Group.CHALLENGE &&
                (e = g.MainPageType.Challenge),
                C.app.platform.triggerGC(),
                C.app.gui.openUI(l.UIEnum.HomeView, u.LayerEnum.VIEW_LAYER, {page: e}),
                (this.anNodeSpeed = 0.2);
        }),
        (_.prototype.onBtnDoubleClick = function (e) {
            var t,
                o = this;
            if (this._adDoubleClaimed) return;
            null === (t = C.app.track) || void 0 === t || t.trackEvent("new_double_reward"),
                this.btnDouble && (this.btnDouble.active = !1),
                O.default.inst.getVideoShareReward(
                    function () {
                        var t;
                        if (o._adDoubleClaimed) return;
                        (o._adDoubleClaimed = !0),
                            o.getRewards(),
                            o.onBtnHomeClick(e),
                            null === (t = C.app.track) || void 0 === t || t.trackEvent("new_suc_double_reward");
                    },
                    null,
                    function () {
                        o.btnDouble && (o.btnDouble.active = !0),
                            h.default.inst.showTips("获取视频失败，请稍候再试！");
                    }
                );
        }),
        r([c.autoBind("cc.Node", "panel/sb_dg")], _.prototype, "sb_dg", void 0),
        r([c.autoBind("cc.Node", "panel/rewards/view/content")], _.prototype, "content", void 0),
        r([c.autoBind("cc.Label", "panel/chapterNode/chapter")], _.prototype, "chapter", void 0),
        r([c.autoBind("cc.Node", "btnDouble")], _.prototype, "btnDouble", void 0),
        r([c.autoBind("cc.Node", "bg")], _.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], _.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "btnRecord")], _.prototype, "btnRecord", void 0),
        r([c.autoBind("cc.Node", "btnHome")], _.prototype, "btnHome", void 0),
        r([c.autoBind("cc.Label", "panel/sb_dk/killLab")], _.prototype, "killLab", void 0),
        r([c.autoBind("List", "panel/rewards")], _.prototype, "rewards", void 0),
        r([c.autoBind("cc.Label", "panel/chapterNode/chapterLab")], _.prototype, "chapterLab", void 0),
        r([t([cc.Node])], _.prototype, "anNode", void 0),
        r([e], _));
function _() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.sb_dg = null),
        (t.content = null),
        (t.chapter = null),
        (t.btnDouble = null),
        (t.bg = null),
        (t.panel = null),
        (t.btnRecord = null),
        (t.btnHome = null),
        (t.killLab = null),
        (t.rewards = null),
        (t.chapterLab = null),
        (t.anNode = []),
        (t.items = null),
        (t.anNodeSpeed = 0.2),
        (t._adDoubleClaimed = !1),
        t
    );
}
o.default = e;
