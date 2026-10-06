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
    u = t("RewardItem"),
    p = t("MultipleController"),
    h = t("App"),
    d = t("GameMgr"),
    f = t("DateUtil"),
    y = t("UserDataController"),
    g = t("EffectMgr"),
    m = t("DrawingController"),
    _ = t("EquipController"),
    v = t("LayerMgr"),
    b = t("MathUtil"),
    w = t("HeroController"),
    C = t("ConfData"),
    k = t("EquipType"),
    E = t("ResUtils"),
    S = t("AssignmentController"),
    M = t("AssignmentConf"),
    R = t("GameSetting"),
    T = t("GoodsDataController"),
    D = t("BundleType"),
    P = t("ResultRewardType"),
    SPA = t("SkillPickSettleArcade"),
    O = cc._decorator,
    e = O.ccclass,
    t = O.property,
    e =
        (O.inspector,
        (a = s.default),
        i(A, a),
        (A.prototype.initView = function () {
            var t = R.GameSetting.inst.endless_score;
            t.sort(function (t, e) {
                return t.bossNum - e.bossNum;
            }),
                (this.endless_score = t),
                this.bg.on(cc.Node.EventType.TOUCH_START, function () {}, this),
                this.sb_dg.on(cc.Node.EventType.TOUCH_START, function () {}, this),
                (this.treasureChestNodeY = this.bx_icon.y);
        }),
        (A.prototype.updateView = function () {
            (this._adDoubleClaimed = !1),
                (this.anNodeSpeed = 0.2),
                (this.btnHome.active = !1),
                (this.btnDouble.active = !1),
                (this.btnRecord.active = !1),
                SPA.applyWinSettle(this),
                h.app.sound.pauseMusic(),
                h.app.sound.playEffect("通关UI弹出时音效"),
                (this.killTimeLab.string = f.default.secondFormat3(d.default.inst.roundTime)),
                this.anNode.forEach(function (t) {
                    (t.scale = 2), (t.opacity = 0);
                }),
                this.grade(d.default.inst.bossNum),
                (this.score_grade = d.default.inst.bossNum + 1),
                this.updateRewards(),
                this.anNodeFun();
            var t = S.default.inst.kill_boss + d.default.inst.bossNum;
            S.default.inst.setProg(t, M.DayAssign.kill_boss);
            t = S.default.inst.kill_monster + d.default.inst.killNum;
            S.default.inst.setProg(t, M.DayAssign.kill_monster), console.log(this.content.childrenCount);
        }),
        (A.prototype.grade = function (t) {
            this.killBossLab.string = t + "";
            var e = "B",
                o = 0;
            if (0 < t)
                for (var n = this.endless_score.length - 1; 0 <= n; n--) {
                    var i = this.endless_score[n];
                    if (t >= i.bossNum) {
                        (e = i.score), (o = n), (this.chest_grade = i.grade), console.log(this.chest_grade);
                        break;
                    }
                }
            else this.chest_grade = 1;
            this.setSore(e, o);
        }),
        (A.prototype.setSore = function (t) {
            var n = this;
            this._viewData.chapter;
            var i = t.split("");
            (this.zi_pingjia.color = cc.color().fromHEX(this.colors[i[0]])),
                this.score.children.forEach(function (t, e) {
                    if (i[e]) {
                        t.active = !0;
                        var o = 0;
                        switch (i[e]) {
                            case "A":
                                o = 0;
                                break;
                            case "B":
                                o = 1;
                                break;
                            case "S":
                                o = 2;
                                break;
                            case "+":
                                o = 3;
                        }
                        (t.getComponent(cc.Sprite).spriteFrame = n.chapterFlag[o]),
                            (t.active = !1),
                            (t.scale = 1.8),
                            (t.color = cc.color().fromHEX(n.colors[i[0]])),
                            n.scoresArr.push(t);
                    } else t.active = !1;
                });
        }),
        (A.prototype.anNodeFun = function () {
            var t = this;
            (this.bxIconBg.active = !1),
                (this.rewards.node.active = !1),
                (this.panel.scaleY = 0.3),
                (this.panel.scaleX = 0),
                p.default.inst.finishEject(this.panel, 0.2, function () {
                    p.default.inst.showBlock(
                        t.anNode,
                        1,
                        t.anNodeSpeed,
                        function () {
                            p.default.inst.showBlock(
                                t.scoresArr,
                                1,
                                t.anNodeSpeed / 2,
                                function () {
                                    (t.scoresArr = []), t.anChest(t.chest_grade);
                                },
                                0.2
                            );
                        }.bind(t),
                        0.2
                    );
                });
        }),
        (A.prototype.funs2 = function () {
            for (var t = this, e = [], o = 0, n = 0; n < this.content.childrenCount; n++)
                this.content.children[n].active &&
                    ((this.content.children[n].active = !1),
                    (o = this.content.children[n].scale),
                    (this.content.children[n].scale = o + 1.8),
                    e.push(this.content.children[n]));
            (this.rewards.node.active = !0),
                (this.content.getComponent(cc.Layout).enabled = !0),
                p.default.inst.showBlock(
                    e,
                    o,
                    this.anNodeSpeed,
                    function () {
                        (t.wobble = null),
                            t.scheduleOnce(function () {
                                cc
                                    .tween(t.rewards.node)
                                    .to(0.2, {y: -55})
                                    .call(function () {
                                        (e = []),
                                            (t.btnRecord.active = !0),
                                            (t.btnHome.active = !0),
                                            (t.btnDouble.active = !0);
                                    })
                                    .start(),
                                    cc
                                        .tween(t.bx_icon)
                                        .to(0.1, {scale: 1.1})
                                        .to(0.1, {scale: 0})
                                        .call(function () {
                                            t.bxIconBg.active = !1;
                                        })
                                        .start();
                            }, 2 * t.anNodeSpeed);
                    }.bind(this)
                );
        }),
        (A.prototype.anChest = function (t) {
            var e = this;
            (this.Lv.active = !1), (this.rewards.node.y = 150);
            var o = cc.v2(0, this.treasureChestNodeY);
            (this.bxIconBg.active = !0),
                this.bx_icon.setPosition(o),
                (this.bx_icon.opacity = 255),
                (this.bx_icon.getComponent(cc.Sprite).spriteFrame = this.treasureChestIcons[t - 1]),
                (this.bx_icon.angle = 0);
            var n = 1;
            switch (t) {
                case 1:
                    (n = 1), (o = cc.v2(14, this.treasureChestNodeY + 14));
                    break;
                case 2:
                    (n = 1), (o = cc.v2(13, this.treasureChestNodeY + 37));
                    break;
                case 3:
                    (n = 1), (o = cc.v2(30, this.treasureChestNodeY + 42));
            }
            (this.bx_icon.scaleX = 0.1 * n),
                (this.bx_icon.scaleY = 0.1),
                cc
                    .tween(this.bx_icon)
                    .to(this.anNodeSpeed, {scaleX: 1.2 * n, scaleY: 1.2})
                    .to(this.anNodeSpeed, {scaleX: +n, scaleY: 1})
                    .call(function () {
                        (e.Lv.active = !0), (e.LvLab.string = d.default.inst.bossNum + 1 + "");
                    })
                    .delay(2 * this.anNodeSpeed)
                    .to(this.anNodeSpeed / 2, {angle: 5})
                    .to(this.anNodeSpeed / 2, {angle: -5})
                    .to(this.anNodeSpeed / 2, {angle: 5})
                    .to(this.anNodeSpeed / 2, {angle: -5})
                    .to(this.anNodeSpeed / 2, {angle: 0})
                    .delay(0.2)
                    .call(function () {
                        e.funs2(),
                            e.bx_icon.setPosition(o),
                            (e.bx_icon.getComponent(cc.Sprite).spriteFrame = e.treasureChestIconsOpen[t - 1]),
                            null == e.wobble &&
                                (e.wobble = cc
                                    .tween(e.bx_icon)
                                    .to(e.anNodeSpeed / 2, {scaleX: 1.1 * n, scaleY: 1.1})
                                    .to(e.anNodeSpeed / 2, {scaleX: +n, scaleY: 1})
                                    .call(function () {
                                        null != e.wobble
                                            ? e.wobble.start()
                                            : ((e.bx_icon.scaleX = +n), (e.bx_icon.scaleY = 1));
                                    })),
                            e.wobble.start();
                    })
                    .start();
        }),
        (A.prototype.onItem = function (t, e) {
            t.getComponent(u.default).setData(this.items[e]), (t.active = 0 < this.items[e].value);
        }),
        (A.prototype.updateRewards = function () {
            var t,
                e,
                o = [],
                n = C.default.inst.endlessBossConf.getEndlessBoss(this.score_grade),
                i = n.settle_coin;
            o.push({id: 0, type: 1, value: i, url: E.ResUtils.Textures.Props_Coin.url, isFlag: !1}),
                y.default.inst.addGold(i),
                n.settle_gem &&
                    ((r = n.settle_gem),
                    (t = b.default.randomRangeInt(1, 101)),
                    console.log("钻石2", t),
                    (e = 20),
                    n.settle_gem2 && t <= e && (r += n.settle_gem2),
                    o.push({id: 0, type: 5, value: r, url: E.ResUtils.Textures.Props_Gem.url, isFlag: !1}),
                    y.default.inst.addGem(r));
            var r = n.settle_exp;
            o.push({id: 0, type: 2, value: r, url: E.ResUtils.Textures.Props_Exp.url, isFlag: !1}),
                y.default.inst.addExp(r);
            var a,
                s,
                i = w.HeroController.getAtrr("gold"),
                r = w.HeroController.getAtrr("gold_rate");
            if (
                (0 < i &&
                    ((i = Math.floor(i * r)),
                    o.push({id: 0, type: 1, value: i, url: E.ResUtils.Textures.Props_Coin.url, isFlag: !1}),
                    y.default.inst.addGold(i)),
                n.settle_drawings &&
                    ((a = C.default.inst.drawingConf.getRandomDrawing()),
                    (s = n.settle_drawings),
                    o.push({id: a.id, type: 3, value: s, url: a.icon, isFlag: !1}),
                    m.DrawingController.inst.addDrawing(a.id, s)),
                n.settle_drawings2 &&
                    ((a = C.default.inst.drawingConf.getRandomDrawing()),
                    (s = n.settle_drawings2),
                    o.push({id: a.id, type: 3, value: s, url: a.icon, isFlag: !1}),
                    m.DrawingController.inst.addDrawing(a.id, s)),
                n.settle_equip)
            )
                for (var l = 0; l < n.settle_equip; l++) {
                    var c = C.default.inst.equipConf.getRandomEquip().equip_id,
                        u = ((s = 1), C.default.inst.equipConf.getEquipQualityVo(c, k.EquipQualityType.GRAY));
                    o.push({
                        id: c,
                        type: 4,
                        value: s,
                        url: "equips/" + u.icon,
                        isFlag: !1,
                        quality: k.EquipQualityType.GRAY
                    }),
                        _.EquipController.inst.addEquip(c, k.EquipQualityType.GRAY, s);
                }
            if (n.settle_equip2) {
                var p = b.default.randomRangeInt(1, 101);
                if ((console.log("装备2", p), p <= (e = 30)))
                    for (l = 0; l < n.settle_equip2; l++)
                        (c = C.default.inst.equipConf.getRandomEquip().equip_id),
                            (s = 1),
                            (u = C.default.inst.equipConf.getEquipQualityVo(c, k.EquipQualityType.GREEN)),
                            o.push({
                                id: c,
                                type: 4,
                                value: s,
                                url: "equips/" + u.icon,
                                isFlag: !1,
                                quality: k.EquipQualityType.GREEN
                            }),
                            _.EquipController.inst.addEquip(c, k.EquipQualityType.GREEN, s);
            }
            if (n.settle_equip3 && ((p = b.default.randomRangeInt(1, 101)), console.log("装备3", p), p <= (e = 10)))
                for (l = 0; l < n.settle_equip3; l++)
                    (c = C.default.inst.equipConf.getRandomEquip().equip_id),
                        (s = 1),
                        (u = C.default.inst.equipConf.getEquipQualityVo(c, k.EquipQualityType.GREEN)),
                        o.push({
                            id: c,
                            type: 4,
                            value: s,
                            url: "equips/" + u.icon,
                            isFlag: !1,
                            quality: k.EquipQualityType.GREEN
                        }),
                        _.EquipController.inst.addEquip(c, k.EquipQualityType.GREEN, s);
            var h = w.HeroController.getGoods();
            if (0 < h.length)
                for (l = 0; l < h.length; l++) {
                    var d = C.default.inst.goodsConf.getGoodsById(h[l].id);
                    o.push({
                        id: h[l].id,
                        type: P.ResultRewardType.Goods,
                        value: h[l].count,
                        url: d.url,
                        isFlag: !1,
                        bundle: D.BundleType.Goods
                    }),
                        T.default.inst.addGoods(h[l].id, h[l].count);
                }
            (this.items = o), console.log(this.items), console.log(o), (this.rewards.numItems = o.length);
        }),
        (A.prototype.getRewards = function () {
            this.items.forEach(function (t) {
                switch (t.type) {
                    case P.ResultRewardType.Gold:
                        y.default.inst.addGold(t.value);
                        break;
                    case P.ResultRewardType.Exp:
                        y.default.inst.addExp(t.value);
                        break;
                    case P.ResultRewardType.Drawings:
                        m.DrawingController.inst.addDrawing(t.id, t.value);
                        break;
                    case P.ResultRewardType.Equip:
                        null != t.quality && 0 < t.quality
                            ? _.EquipController.inst.addEquip(t.id, t.quality, t.value)
                            : console.error("[WinEndlessView] ad double equip missing quality", t.id);
                        break;
                    case P.ResultRewardType.Gem:
                        y.default.inst.addGem(t.value);
                        break;
                    case P.ResultRewardType.Goods:
                        T.default.inst.addGoods(t.id, t.value);
                }
            });
        }),
        (A.prototype.onBtnHomeClick = function () {
            h.app.gui.closeUI(l.UIEnum.WinEndlessView),
                h.app.gui.closeUI(l.UIEnum.GameView),
                h.app.gui.openUI(l.UIEnum.HomeView, v.LayerEnum.VIEW_LAYER),
                (this.anNodeSpeed = 0.2);
        }),
        (A.prototype.onBtnDoubleClick = function (t) {
            var e = this;
            if (this._adDoubleClaimed) return;
            this.btnDouble && (this.btnDouble.active = !1),
                d.default.inst.getVideoShareReward(
                    function () {
                        if (e._adDoubleClaimed) return;
                        (e._adDoubleClaimed = !0), e.getRewards(), e.onBtnHomeClick(t);
                    },
                    null,
                    function () {
                        e.btnDouble && (e.btnDouble.active = !0),
                            g.default.inst.showTips("获取视频失败，请稍候再试！");
                    }
                );
        }),
        (A.prototype.onBtnRecordClick = function () {
            h.app.gui.openUI(l.UIEnum.RoundRecordView, v.LayerEnum.VIEW_LAYER);
        }),
        r([c.autoBind("cc.Node", "panel/bxIconBg/Lv")], A.prototype, "Lv", void 0),
        r([c.autoBind("cc.Label", "panel/bxIconBg/Lv/LvLab")], A.prototype, "LvLab", void 0),
        r([c.autoBind("cc.Node", "panel/grade/zi_pingjia")], A.prototype, "zi_pingjia", void 0),
        r([c.autoBind("cc.Node", "panel/bxIconBg")], A.prototype, "bxIconBg", void 0),
        r([c.autoBind("cc.Node", "panel/bxIconBg/bx_icon")], A.prototype, "bx_icon", void 0),
        r([c.autoBind("cc.Node", "panel/sb_dg")], A.prototype, "sb_dg", void 0),
        r([c.autoBind("List", "panel/rewards")], A.prototype, "rewards", void 0),
        r([c.autoBind("cc.Label", "panel/sb_dk/killTimeLab")], A.prototype, "killTimeLab", void 0),
        r([c.autoBind("cc.Label", "panel/sb_dk/killBossLab")], A.prototype, "killBossLab", void 0),
        r([c.autoBind("cc.Node", "btnRecord")], A.prototype, "btnRecord", void 0),
        r([c.autoBind("cc.Node", "btnHome")], A.prototype, "btnHome", void 0),
        r([c.autoBind("cc.Node", "btnDouble")], A.prototype, "btnDouble", void 0),
        r([c.autoBind("cc.Node", "panel/rewards/view/content")], A.prototype, "content", void 0),
        r([c.autoBind("cc.Node", "bg")], A.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], A.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/grade/score")], A.prototype, "score", void 0),
        r([c.autoBind("cc.Node", "panel/grade/score/aa")], A.prototype, "aa", void 0),
        r([c.autoBind("cc.Node", "panel/grade/score/bb")], A.prototype, "bb", void 0),
        r([c.autoBind("cc.Node", "panel/grade/score/cc")], A.prototype, "cc", void 0),
        r([t([cc.SpriteFrame])], A.prototype, "chapterFlag", void 0),
        r([t([cc.Node])], A.prototype, "anNode", void 0),
        r([t([cc.SpriteFrame])], A.prototype, "treasureChestIcons", void 0),
        r([t([cc.SpriteFrame])], A.prototype, "treasureChestIconsOpen", void 0),
        r([e], A));
function A() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.Lv = null),
        (t.LvLab = null),
        (t.zi_pingjia = null),
        (t.bxIconBg = null),
        (t.bx_icon = null),
        (t.sb_dg = null),
        (t.rewards = null),
        (t.killTimeLab = null),
        (t.killBossLab = null),
        (t.btnRecord = null),
        (t.btnHome = null),
        (t.btnDouble = null),
        (t.content = null),
        (t.bg = null),
        (t.panel = null),
        (t.score = null),
        (t.aa = null),
        (t.bb = null),
        (t.cc = null),
        (t.chapterFlag = []),
        (t.anNode = []),
        (t.treasureChestIcons = []),
        (t.treasureChestIconsOpen = []),
        (t.items = []),
        (t.anNodeSpeed = 0.2),
        (t.treasureChestNodeY = 0),
        (t.wobble = null),
        (t.scoresArr = []),
        (t.colors = {A: "#3EF400", B: "#00D1E8", S: "#FFF000"}),
        (t.endless_score = null),
        (t.chest_grade = 0),
        (t.score_grade = 0),
        (t._adDoubleClaimed = !1),
        t
    );
}
o.default = e;
