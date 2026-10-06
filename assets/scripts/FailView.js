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
    l = t("decorator"),
    v = t("GameMgr"),
    c = t("DateUtil"),
    b = t("UserDataController"),
    w = t("ConfData"),
    u = t("RewardItem"),
    C = t("App"),
    p = t("UIEnum"),
    h = t("LayerMgr"),
    k = t("HeroController"),
    E = t("ArrayUtil"),
    S = t("MathUtil"),
    M = t("EquipType"),
    R = t("ResUtils"),
    T = t("DrawingController"),
    D = t("EquipController"),
    d = t("MultipleController"),
    P = t("GameEnums"),
    O = t("TrackType"),
    f = t("AssignmentController"),
    y = t("AssignmentConf"),
    g = t("MainPageType"),
    A = t("GoodsDataController"),
    L = t("BundleType"),
    x = t("ResultRewardType"),
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
                C.app.sound.pauseMusic(),
                C.app.sound.playEffect("失败结算"),
                (this.timeLab.string = c.default.secondFormat3(v.default.inst.roundTime)),
                (this.killLab.string = v.default.inst.killNum + "");
            var t = b.default.inst.getUserChapterVo(v.default.inst.chapter);
            this.bestLab.string = c.default.secondFormat3(t.best_time);
            t = w.default.inst.chapterConf.getChapterVo(v.default.inst.chapter);
            (this.chapterLab.string = "" + t.name),
                SPA.applyFailSettle(this),
                this.updateRewards(),
                this.anNode.forEach(function (t) {
                    (t.scale = 2), (t.opacity = 0);
                });
            t = f.default.inst.kill_boss + v.default.inst.bossNum;
            f.default.inst.setProg(t, y.DayAssign.kill_boss);
            t = f.default.inst.kill_monster + v.default.inst.killNum;
            f.default.inst.setProg(t, y.DayAssign.kill_monster), this.anNodeFun();
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
                                    (e = []), (t.btnHome.active = !0);
                                }.bind(t)
                            );
                    }.bind(t)
                );
            });
        }),
        (_.prototype.updateRewards = function () {
            var t = [],
                e = v.default.inst.chapterVo;
            e.type == P.Map_Group.ACTIVITY &&
                (null === (n = C.app.track) || void 0 === n || n.trackEvent(O.TrackType.Activity_Rewards));
            var o = Math.floor(e.settle_coin * v.default.inst.roundTime);
            t.push({type: 1, value: o, url: R.ResUtils.Textures.Props_Coin.url, isFlag: !0}), b.default.inst.addGold(o);
            var n = Math.floor(e.settle_exp * v.default.inst.roundTime);
            t.push({type: 2, value: n, url: R.ResUtils.Textures.Props_Exp.url, isFlag: !0}), b.default.inst.addExp(n);
            (o = k.HeroController.getAtrr("gold")), (n = k.HeroController.getAtrr("gold_rate"));
            if (
                (0 < o &&
                    ((o = Math.floor(o * n)),
                    t.push({type: 1, value: o, url: R.ResUtils.Textures.Props_Coin.url, isFlag: !1}),
                    b.default.inst.addGold(o)),
                e.settle_drawings)
            )
                for (var i = 0; i < e.settle_drawings.length; i++) {
                    var r = e.settle_drawings[i];
                    if (v.default.inst.roundTime <= r.time) {
                        if (0 < r.count)
                            for (var a = 0; a < r.variety; a++) {
                                var s = w.default.inst.drawingConf.getRandomDrawing(),
                                    l = S.default.randomRangeInt(1, r.count);
                                t.push({type: 3, value: l, url: s.icon, isFlag: !1}),
                                    T.DrawingController.inst.addDrawing(s.id, l);
                            }
                        break;
                    }
                }
            o = k.HeroController.getDrawings();
            if (0 < o.length)
                for (var c = 0, u = o; c < u.length; c++) {
                    var p = u[c],
                        s = w.default.inst.drawingConf.getDrawingVoById(p.id);
                    t.push({type: 3, value: p.count, url: s.icon, isFlag: !1}),
                        T.DrawingController.inst.addDrawing(p.id, p.count);
                }
            if (e.settle_equip)
                for (i = 0; i < e.settle_equip.length; i++)
                    if (((r = e.settle_equip[i]), v.default.inst.roundTime <= r.time)) {
                        E.default.shuffle(r.id);
                        for (var h = 0; h < r.variety; h++) {
                            var d = r.id[h],
                                f = ((l = 1), w.default.inst.equipConf.getEquipQualityVo(d, M.EquipQualityType.GRAY));
                            t.push({type: 4, value: l, url: "equips/" + f.icon, isFlag: !1}),
                                D.EquipController.inst.addEquip(d, M.EquipQualityType.GRAY, 1);
                        }
                        break;
                    }
            o = k.HeroController.getEquips();
            if (0 < o.length)
                for (var y = 0, g = o; y < g.length; y++)
                    (p = g[y]),
                        (f = w.default.inst.equipConf.getEquipQualityVo(p.id, p.quality)),
                        t.push({type: 4, value: 1, url: "equips/" + f.icon, isFlag: !1}),
                        D.EquipController.inst.addEquip(p.id, p.quality, 1);
            var m = k.HeroController.getGoods();
            if (0 < m.length)
                for (i = 0; i < m.length; i++) {
                    var _ = w.default.inst.goodsConf.getGoodsById(m[i].id);
                    t.push({
                        type: x.ResultRewardType.Goods,
                        value: m[i].count,
                        url: _.url,
                        isFlag: !1,
                        bundle: L.BundleType.Goods
                    }),
                        A.default.inst.addGoods(m[i].id, m[i].count);
                }
            (this.items = t), (this.rewards.numItems = t.length);
        }),
        (_.prototype.onItemRender = function (t, e) {
            t.getComponent(u.default).setData(this.items[e]), (t.active = 0 < this.items[e].value);
        }),
        (_.prototype.onBtnRecordClick = function () {
            C.app.gui.openUI(p.UIEnum.RoundRecordView, h.LayerEnum.VIEW_LAYER);
        }),
        (_.prototype.onBtnHomeClick = function () {
            var t;
            C.app.gui.closeUI(p.UIEnum.GameView), C.app.gui.closeUI(p.UIEnum.FailView);
            var e = g.MainPageType.Battle;
            (null === (t = v.default.inst.chapterVo) || void 0 === t ? void 0 : t.type) == P.Map_Group.CHALLENGE &&
                (e = g.MainPageType.Challenge),
                C.app.platform.triggerGC(),
                C.app.gui.openUI(p.UIEnum.HomeView, h.LayerEnum.VIEW_LAYER, {page: e});
        }),
        r([l.autoBind("cc.Node", "panel/sb_dg")], _.prototype, "sb_dg", void 0),
        r([l.autoBind("cc.Node", "panel/rewards/view/content")], _.prototype, "content", void 0),
        r([l.autoBind("cc.Node", "bg")], _.prototype, "bg", void 0),
        r([l.autoBind("cc.Node", "panel")], _.prototype, "panel", void 0),
        r([l.autoBind("cc.Node", "btnRecord")], _.prototype, "btnRecord", void 0),
        r([l.autoBind("cc.Node", "btnHome")], _.prototype, "btnHome", void 0),
        r([l.autoBind("cc.Label", "panel/timeLab")], _.prototype, "timeLab", void 0),
        r([l.autoBind("cc.Label", "panel/sb_dk1/bestLab")], _.prototype, "bestLab", void 0),
        r([l.autoBind("cc.Label", "panel/sb_dk2/killLab")], _.prototype, "killLab", void 0),
        r([l.autoBind("List", "panel/rewards")], _.prototype, "rewards", void 0),
        r([l.autoBind("cc.Label", "panel/chapterNode/chapterLab")], _.prototype, "chapterLab", void 0),
        r([t([cc.Node])], _.prototype, "anNode", void 0),
        r([e], _));
function _() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.sb_dg = null),
        (t.content = null),
        (t.bg = null),
        (t.panel = null),
        (t.btnRecord = null),
        (t.btnHome = null),
        (t.timeLab = null),
        (t.bestLab = null),
        (t.killLab = null),
        (t.rewards = null),
        (t.chapterLab = null),
        (t.anNode = []),
        (t.items = null),
        (t.anNodeSpeed = 0.2),
        t
    );
}
o.default = e;
