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
    c = t("GameMgr"),
    u = t("UserDataController"),
    p = t("ConfData"),
    h = t("RewardItem"),
    d = t("App"),
    f = t("UIEnum"),
    y = t("LayerMgr"),
    g = t("HeroController"),
    m = t("ResUtils"),
    _ = t("MultipleController"),
    v = t("GameEnums"),
    b = t("TrackType"),
    w = t("AssignmentController"),
    C = t("AssignmentConf"),
    k = t("MainPageType"),
    E = t("GoodsDataController"),
    S = t("BundleType"),
    M = t("ResultRewardType"),
    SPA = t("SkillPickSettleArcade"),
    R = cc._decorator,
    e = R.ccclass,
    t = R.property,
    e =
        (R.inspector,
        (a = s.default),
        i(T, a),
        (T.prototype.initView = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    (t.anNodeSpeed = 0.05), console.log(t.anNodeSpeed), _.default.inst.setAnNodeSpeed(t.anNodeSpeed);
                },
                this
            ),
                this.sb_dg.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        (t.anNodeSpeed = 0.05),
                            console.log(t.anNodeSpeed),
                            _.default.inst.setAnNodeSpeed(t.anNodeSpeed);
                    },
                    this
                );
        }),
        (T.prototype.updateView = function () {
            (this.anNodeSpeed = 0.2),
                (this.btnHome.active = !1),
                d.app.sound.pauseMusic(),
                d.app.sound.playEffect("失败结算"),
                SPA.applyFailSettle(this),
                this.updateRewards(),
                this.anNode.forEach(function (t) {
                    (t.scale = 2), (t.opacity = 0);
                });
            var t = w.default.inst.kill_boss + c.default.inst.bossNum;
            w.default.inst.setProg(t, C.DayAssign.kill_boss);
            t = w.default.inst.kill_monster + c.default.inst.killNum;
            w.default.inst.setProg(t, C.DayAssign.kill_monster), this.anNodeFun();
        }),
        (T.prototype.anNodeFun = function () {
            var t = this;
            (this.panel.scaleY = 0.3), (this.panel.scaleX = 0);
            for (var e = [], o = 0, n = 0; n < this.content.childrenCount; n++)
                this.content.children[n].active &&
                    ((this.content.children[n].active = !1),
                    (o = this.content.children[n].scale),
                    (this.content.children[n].scale = o + 1.8),
                    e.push(this.content.children[n]));
            _.default.inst.finishEject(this.panel, 0.2, function () {
                _.default.inst.showBlock(
                    t.anNode,
                    1,
                    t.anNodeSpeed,
                    function () {
                        (t.content.getComponent(cc.Layout).enabled = !0),
                            _.default.inst.showBlock(
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
        (T.prototype.updateRewards = function () {
            var t = [];
            null === (n = d.app.track) || void 0 === n || n.trackEvent(b.TrackType.Death_Fail);
            var e = c.default.inst.roundTime,
                o = Math.floor(e / 60) / Math.floor(c.default.inst.maxTime / 60);
            console.log("死神失败 结算比例", o, e);
            var n = p.default.inst.deathConf.calcRewards(u.default.inst.deathPass),
                e = Math.floor(n.gem * o);
            0 < e &&
                (t.push({id: 0, type: 5, value: e, url: m.ResUtils.Textures.Props_Gem.url, isFlag: !0}),
                u.default.inst.addGem(e)),
                0 < (n = Math.floor(n.gold * o)) &&
                    (t.push({id: 0, type: 1, value: n, url: m.ResUtils.Textures.Props_Coin.url, isFlag: !0}),
                    u.default.inst.addGold(n));
            (n = g.HeroController.getAtrr("gold")), (o = g.HeroController.getAtrr("gold_rate"));
            0 < n &&
                ((n = Math.floor(n * o)),
                t.push({id: 0, type: 1, value: n, url: m.ResUtils.Textures.Props_Coin.url, isFlag: !1}),
                u.default.inst.addGold(n));
            var i = g.HeroController.getGoods();
            if (0 < i.length)
                for (var r = 0; r < i.length; r++) {
                    var a = p.default.inst.goodsConf.getGoodsById(i[r].id);
                    t.push({
                        id: i[r].id,
                        type: M.ResultRewardType.Goods,
                        value: i[r].count,
                        url: a.url,
                        isFlag: !1,
                        bundle: S.BundleType.Goods
                    }),
                        E.default.inst.addGoods(i[r].id, i[r].count);
                }
            (this.items = t), (this.rewards.numItems = t.length);
        }),
        (T.prototype.onItemRender = function (t, e) {
            t.getComponent(h.default).setData(this.items[e]), (t.active = 0 < this.items[e].value);
        }),
        (T.prototype.onBtnRecordClick = function () {
            d.app.gui.openUI(f.UIEnum.RoundRecordView, y.LayerEnum.VIEW_LAYER);
        }),
        (T.prototype.onBtnHomeClick = function () {
            var t;
            d.app.gui.closeUI(f.UIEnum.GameView), d.app.gui.closeUI(f.UIEnum.FailDeathView);
            var e = k.MainPageType.Battle;
            (null === (t = c.default.inst.chapterVo) || void 0 === t ? void 0 : t.type) == v.Map_Group.CHALLENGE &&
                (e = k.MainPageType.Challenge),
                d.app.gui.openUI(f.UIEnum.HomeView, y.LayerEnum.VIEW_LAYER, {page: e});
        }),
        r([l.autoBind("cc.Node", "panel/sb_dg")], T.prototype, "sb_dg", void 0),
        r([l.autoBind("cc.Node", "panel/rewards/view/content")], T.prototype, "content", void 0),
        r([l.autoBind("cc.Node", "bg")], T.prototype, "bg", void 0),
        r([l.autoBind("cc.Node", "panel")], T.prototype, "panel", void 0),
        r([l.autoBind("cc.Node", "btnRecord")], T.prototype, "btnRecord", void 0),
        r([l.autoBind("cc.Node", "btnHome")], T.prototype, "btnHome", void 0),
        r([l.autoBind("List", "panel/rewards")], T.prototype, "rewards", void 0),
        r([t([cc.Node])], T.prototype, "anNode", void 0),
        r([e], T));
function T() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.sb_dg = null),
        (t.content = null),
        (t.bg = null),
        (t.panel = null),
        (t.btnRecord = null),
        (t.btnHome = null),
        (t.rewards = null),
        (t.anNode = []),
        (t.items = null),
        (t.anNodeSpeed = 0.2),
        t
    );
}
o.default = e;
