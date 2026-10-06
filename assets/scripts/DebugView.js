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
    s,
    l = t("BasePanel"),
    c = t("UIEnum"),
    u = t("decorator"),
    p = t("ConfData"),
    h = t("EquipController"),
    d = t("EffectMgr"),
    f = t("DrawingController"),
    y = t("UserDataController"),
    g = t("App"),
    m = t("GameMgr"),
    _ = t("HeroController"),
    v = t("GameSetting"),
    b = t("SkillEnum"),
    w = t("LayerMgr"),
    C = t("EventTypes"),
    k = t("GameController"),
    E = t("ActivityController"),
    S = t("GoddessController"),
    M = t("GameEnums"),
    R = t("CleanController"),
    T = t("GoodsDataController"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = l.default),
        i(D, a),
        (s = D),
        Object.defineProperty(D, "showtestBtn", {
            get: function () {
                return this._showtestBtn;
            },
            enumerable: !1,
            configurable: !0
        }),
        (D.prototype.initView = function () {}),
        (D.prototype.updateView = function () {
            this.toggle.isChecked = v.GameSetting.inst.isDebug;
            var t = this._viewData && null != this._viewData.page ? this._viewData.page : 1;
            (this.home.active = 1 == t),
                (this.game.active = 2 == t),
                (this.openLab.string = "角色openid:" + g.app.http.getOpenid());
        }),
        (D.prototype.onBtnEquipClick = function () {
            var t = parseInt(this.equipid.string),
                e = parseInt(this.quality.string),
                o = parseInt(this.level.string);
            p.default.inst.equipConf.getEquipQualityVo(t, e) &&
                0 < o &&
                (d.default.inst.showTips("添加成功"), h.EquipController.inst.addEquip(t, e, o));
        }),
        (D.prototype.onBtnDrawingClick = function () {
            var t = parseInt(this.drawing.string),
                e = parseInt(this.count.string);
            p.default.inst.drawingConf.getDrawingVoById(t) &&
                (d.default.inst.showTips("添加成功"), f.DrawingController.inst.addDrawing(t, e));
        }),
        (D.prototype.onBtnGoldClick = function () {
            var t = parseInt(this.gold.string);
            0 < t && (d.default.inst.showTips("添加成功"), y.default.inst.addGold(t));
        }),
        (D.prototype.onBtnGemClick = function () {
            var t = parseInt(this.gem.string);
            0 < t && (d.default.inst.showTips("添加成功"), y.default.inst.addGem(t));
        }),
        (D.prototype.onBtnCloseClick = function () {
            g.app.gui.closeUI(c.UIEnum.DebugView), this.game.active && m.default.inst.gameResume();
        }),
        (D.prototype.onBtnSkillClick = function () {
            var t = parseInt(this.skillid.string),
                e = 1,
                o = p.default.inst.playerSkillConf.getSkillInfoVo(t);
            if (o && 0 < e) {
                var e = o.isUltimate ? 1 : Math.min(e, 5),
                    e = _.HeroController.getHeroSkills(),
                    n = [],
                    i = [];
                if (
                    (e.forEach(function (t) {
                        (t.confVo.type == b.SkillGroup.ACTIVE_SKILL ? n : i).push(t);
                    }),
                    ((o.type == b.SkillGroup.ACTIVE_SKILL && 6 == n.length) ||
                        (o.type == b.SkillGroup.AUXILIARY_SKILL && 6 == i.length)) &&
                        !_.HeroController.hasSkill(t))
                ) {
                    if (!o.isUltimate) return void d.default.inst.showTips("添加失败，技能满了");
                    o = p.default.inst.playerSkillConf.getSkillIdByTopId(t);
                    if (!_.HeroController.hasSkill(o)) return void d.default.inst.showTips("添加失败，技能满了");
                }
                d.default.inst.showTips("添加成功"), _.HeroController.addSkill(t, 1);
            }
        }),
        (D.prototype.onSkillDebug = function () {
            v.GameSetting.inst.isDebug = this.toggle.isChecked;
        }),
        (D.prototype.onBtnLevelClick = function () {
            var t = parseInt(this.userLevel.string);
            t > y.default.inst.level && (y.default.inst.setLevel(t), d.default.inst.showTips("升级成功"));
        }),
        (D.prototype.onBtnGeneClick = function () {
            var t = parseInt(this.gene.string);
            0 < t && (y.default.inst.addGene(t), d.default.inst.showTips("添加成功"));
        }),
        (D.prototype.onBtnBigClick = function () {
            m.default.inst.cameraScale(1, 0.1);
        }),
        (D.prototype.onBtnSmallClick = function () {
            m.default.inst.cameraScale(0.5, 1);
        }),
        (D.prototype.onBtnWinClick = function () {
            g.app.gui.closeUI(c.UIEnum.DebugView),
                g.app.event.emit(
                    m.default.inst.checkMapType([M.Map_Group.DEATH]) ? C.EventType.Goddess_Win : C.EventType.Game_Win
                );
        }),
        (D.prototype.onBtnBoxClick = function () {
            g.app.gui.closeUI(c.UIEnum.DebugView),
                m.default.inst.gamePause(),
                g.app.gui.openUI(c.UIEnum.LotteryView, w.LayerEnum.VIEW_LAYER);
        }),
        (D.prototype.onBtnNewAbilityClick = function () {
            g.app.gui.closeUI(c.UIEnum.DebugView), g.app.gui.openUI(c.UIEnum.NewAbilityView);
        }),
        (D.prototype.onBtnChallengeClick = function () {
            y.default.inst.passChallengeFb(m.default.inst.chapter);
        }),
        (D.prototype.onBtnFailClick = function () {
            g.app.gui.closeUI(c.UIEnum.DebugView), g.app.event.emit(C.EventType.Game_Fail);
        }),
        (D.prototype.onBtnUpgradeClick = function () {
            g.app.event.emit(C.EventType.Game_Level_Up, {level: this.Uplevel++});
        }),
        (D.prototype.onBtnFreeClick = function (t) {
            k.GameController.inst.enqueue(this, function () {
                m.default.inst.gamePause(), g.app.gui.openUI(c.UIEnum.GameFreeRewardView, w.LayerEnum.VIEW_LAYER);
            }),
                this.onBtnCloseClick(t);
        }),
        (D.prototype.onBtnSkinClick = function () {
            var t = parseInt(this.skins.string),
                e = parseInt(this.skinNum.string);
            p.default.inst.playerSkinConf.getPlayerSkinVoById(t)
                ? (y.default.inst.addSkinDebris(t, e), d.default.inst.showTips("添加成功"))
                : d.default.inst.showTips("没有该皮肤");
        }),
        (D.prototype.onBtnActivityClick = function () {
            E.default.inst.clear();
        }),
        (D.prototype.onBtnKillClick = function () {
            this.game.active && m.default.inst.gameResume(),
                g.app.gui.closeUI(c.UIEnum.DebugView),
                _.HeroController.lostHp(1e4);
        }),
        (D.prototype.onBtnKillEggClick = function () {
            this.game.active && m.default.inst.gameResume(),
                g.app.gui.closeUI(c.UIEnum.DebugView),
                S.GoddessController.lostHp(1e4);
        }),
        (D.prototype.onBtnCleanClick = function () {
            R.CleanController.inst.refreshData();
        }),
        (D.prototype.onBtnGoodsClick = function () {
            var t = parseInt(this.goods.string),
                e = parseInt(this.goodsCount.string) || 1;
            p.default.inst.goodsConf.getGoodsById(t) &&
                (T.default.inst.addGoods(t, e), d.default.inst.showTips("添加成功"));
        }),
        (D.prototype.onBtnIdClick = function () {
            cc.sys.platform == cc.sys.WECHAT_GAME && wx.setClipboardData({data: g.app.http.getOpenid()});
        }),
        (D.prototype.onBtnShowTestClick = function () {
            s._showtestBtn = !0;
        }),
        (D._showtestBtn = !1),
        r([u.autoBind("cc.Label", "home/角色id/openLab")], D.prototype, "openLab", void 0),
        r([u.autoBind("cc.Node", "home/角色id/btnId")], D.prototype, "btnId", void 0),
        r([u.autoBind("cc.Node", "home/升级/btnShowTest")], D.prototype, "btnShowTest", void 0),
        r([u.autoBind("cc.EditBox", "home/道具/goods")], D.prototype, "goods", void 0),
        r([u.autoBind("cc.EditBox", "home/道具/goodsCount")], D.prototype, "goodsCount", void 0),
        r([u.autoBind("cc.Node", "home/道具/btnGoods")], D.prototype, "btnGoods", void 0),
        r([u.autoBind("cc.Node", "home/升级/btnClean")], D.prototype, "btnClean", void 0),
        r([u.autoBind("cc.Node", "game/镜头/btnKillEgg")], D.prototype, "btnKillEgg", void 0),
        r([u.autoBind("cc.Node", "home/升级/btnActivity")], D.prototype, "btnActivity", void 0),
        r([u.autoBind("cc.EditBox", "home/图纸/skins")], D.prototype, "skins", void 0),
        r([u.autoBind("cc.EditBox", "home/图纸/skinNum")], D.prototype, "skinNum", void 0),
        r([u.autoBind("cc.Node", "home/图纸/btnSkin")], D.prototype, "btnSkin", void 0),
        r([u.autoBind("cc.Node", "game/镜头/btnFree")], D.prototype, "btnFree", void 0),
        r([u.autoBind("cc.Node", "game/镜头/btnUpgrade")], D.prototype, "btnUpgrade", void 0),
        r([u.autoBind("cc.Node", "game/镜头/btnFail")], D.prototype, "btnFail", void 0),
        r([u.autoBind("cc.Node", "home/升级/btnChallenge")], D.prototype, "btnChallenge", void 0),
        r([u.autoBind("cc.Node", "home/升级/btnNewAbility")], D.prototype, "btnNewAbility", void 0),
        r([u.autoBind("cc.Node", "game/镜头/btnBox")], D.prototype, "btnBox", void 0),
        r([u.autoBind("cc.Node", "game/镜头/btnWin")], D.prototype, "btnWin", void 0),
        r([u.autoBind("cc.Node", "game/镜头/btnBig")], D.prototype, "btnBig", void 0),
        r([u.autoBind("cc.Node", "game/镜头/btnSmall")], D.prototype, "btnSmall", void 0),
        r([u.autoBind("cc.EditBox", "home/天赋/gene")], D.prototype, "gene", void 0),
        r([u.autoBind("cc.Node", "home/天赋/btnGene")], D.prototype, "btnGene", void 0),
        r([u.autoBind("cc.EditBox", "home/升级/userLevel")], D.prototype, "userLevel", void 0),
        r([u.autoBind("cc.Node", "home/升级/btnLevel")], D.prototype, "btnLevel", void 0),
        r([u.autoBind("cc.Toggle", "game/调试/toggle")], D.prototype, "toggle", void 0),
        r([u.autoBind("cc.EditBox", "game/技能/skillid")], D.prototype, "skillid", void 0),
        r([u.autoBind("cc.EditBox", "game/技能/skillLevel")], D.prototype, "skillLevel", void 0),
        r([u.autoBind("cc.Node", "game/技能/btnSkill")], D.prototype, "btnSkill", void 0),
        r([u.autoBind("cc.Node", "home")], D.prototype, "home", void 0),
        r([u.autoBind("cc.Node", "game")], D.prototype, "game", void 0),
        r([u.autoBind("cc.Node", "btnClose")], D.prototype, "btnClose", void 0),
        r([u.autoBind("cc.EditBox", "home/装备/equipid")], D.prototype, "equipid", void 0),
        r([u.autoBind("cc.EditBox", "home/装备/quality")], D.prototype, "quality", void 0),
        r([u.autoBind("cc.EditBox", "home/装备/level")], D.prototype, "level", void 0),
        r([u.autoBind("cc.Node", "home/装备/btnEquip")], D.prototype, "btnEquip", void 0),
        r([u.autoBind("cc.EditBox", "home/图纸/drawing")], D.prototype, "drawing", void 0),
        r([u.autoBind("cc.EditBox", "home/图纸/count")], D.prototype, "count", void 0),
        r([u.autoBind("cc.Node", "home/图纸/btnDrawing")], D.prototype, "btnDrawing", void 0),
        r([u.autoBind("cc.EditBox", "home/金币/gold")], D.prototype, "gold", void 0),
        r([u.autoBind("cc.Node", "home/金币/btnGold")], D.prototype, "btnGold", void 0),
        r([u.autoBind("cc.EditBox", "home/钻石/gem")], D.prototype, "gem", void 0),
        r([u.autoBind("cc.Node", "home/钻石/btnGem")], D.prototype, "btnGem", void 0),
        (s = r([t], D)));
function D() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.openLab = null),
        (t.btnId = null),
        (t.btnShowTest = null),
        (t.goods = null),
        (t.goodsCount = null),
        (t.btnGoods = null),
        (t.btnClean = null),
        (t.btnKillEgg = null),
        (t.btnActivity = null),
        (t.skins = null),
        (t.skinNum = null),
        (t.btnSkin = null),
        (t.btnFree = null),
        (t.btnUpgrade = null),
        (t.btnFail = null),
        (t.btnChallenge = null),
        (t.btnNewAbility = null),
        (t.btnBox = null),
        (t.btnWin = null),
        (t.btnBig = null),
        (t.btnSmall = null),
        (t.gene = null),
        (t.btnGene = null),
        (t.userLevel = null),
        (t.btnLevel = null),
        (t.toggle = null),
        (t.skillid = null),
        (t.skillLevel = null),
        (t.btnSkill = null),
        (t.home = null),
        (t.game = null),
        (t.btnClose = null),
        (t.equipid = null),
        (t.quality = null),
        (t.level = null),
        (t.btnEquip = null),
        (t.drawing = null),
        (t.count = null),
        (t.btnDrawing = null),
        (t.gold = null),
        (t.btnGold = null),
        (t.gem = null),
        (t.btnGem = null),
        (t.Uplevel = 1),
        t
    );
}
o.default = t;
