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
    s = t("App"),
    l = t("ArrayUtil"),
    c = t("EventTypes"),
    u = t("GuideController"),
    p = t("HeroController"),
    h = t("ConfData"),
    d = t("SkillEnum"),
    f = t("TrackType"),
    y = t("EffectMgr"),
    g = t("GameMgr"),
    m = t("UIEnum"),
    _ = t("SkillView"),
    P = t("SkillDraftController"),
    v = t("SkillIcon"),
    SPA = t("SkillPickSettleArcade"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(b, a),
        (b.prototype.onLoad = function () {
            for (var t = 0; t < this.stars.childrenCount; t++) {
                var e = this.stars.children[t];
                this.starList.push(e.getComponent(cc.Sprite));
            }
            (this.laye1Y = this.laye1.y), (this.laye2Y = this.laye2.y), (this.rollSpeed = this.laye1.height / 4);
        }),
        (b.prototype.setData = function (t, e, o, n, i, r, a) {
            (e = void 0 === e ? !1 : e)
                ? ((this.laye1.parent.active = !0), (this.iconSp.node.opacity = 0))
                : ((this.laye1.parent.active = !1), (this.iconSp.node.opacity = 255), this.tweenAn(n, i)),
                (this._data = t),
                this._data.skill && 3 < o.length && e ? this.init(o, n, r, a) : this.updateView();
        }),
        (b.prototype.tweenAn = function (t, e) {
            var o = this;
            (this.node.scale = 2),
                (this.node.opacity = 0),
                this.scheduleOnce(function () {
                    cc.tween(o.node)
                        .to(0.2, {scale: 1, opacity: 255})
                        .call(function () {
                            s.app.sound.playEffect("技能盖"), t == e && (_.default.rollOver = !0);
                        })
                        .start();
                }, 0.2 * t);
        }),
        (b.prototype.init = function (t, e, o, n) {
            var i = this;
            if (
                (null != n && 2 == e && (this._fun = n),
                (this._showSlillNum = 0),
                (this.isFirst = o),
                (this.interval = e),
                (this._maxRound = this._round),
                (this.laye1.y = this.laye1Y),
                (this.laye2.y = this.laye2Y),
                this.tween && this.tween.stop(),
                this.starList.forEach(function (t) {
                    (t.node.opacity = 255), (t.spriteFrame = i.starIcons[0]);
                }),
                (this.bg.spriteFrame = this.bgSpf[0]),
                (this._rollList = []),
                (this.maxStar.active = !1),
                (this.nameLab.string = "？？？？"),
                (this.descLab.string = "？？？？？？？？？？？？？？"),
                (this.nameLab.node.color = cc.Color.WHITE.fromHEX("#FFFFFF")),
                (this.descLab.node.color = cc.Color.WHITE.fromHEX("#FFFFFF")),
                (this.tupo.active = !1),
                (this.newFlag.active = !1),
                t)
            ) {
                l.default.shuffle(t);
                for (var r = 0; r < 4; r++)
                    this._data.skill.id == t[r].id ? this._rollList.push(t[t.length - 1]) : this._rollList.push(t[r]);
                this._rollList.push(this._data.skill),
                    this.setSkill(this.laye1, this._showSlillNum),
                    this.setSkill(this.laye2, this._showSlillNum),
                    this.isFirst
                        ? ((this.bg.spriteFrame = this.laye1.getComponent(cc.Sprite).spriteFrame),
                          this.scheduleOnce(function () {
                              s.app.sound.playEffect("技能选择界面奖励轮播时的音效"), i.schedule(i.startRoll, 0.01);
                          }, 0.5))
                        : this.schedule(this.startRoll, 0.01);
            }
        }),
        (b.prototype.setSkill = function (t, e) {
            t.children[0].getComponent(v.default).setData(this._rollList[e].id, this._rollList[e].level);
            e = h.default.inst.playerSkillConf.getSkillInfoVo(this._rollList[e].id);
            e.isUltimate
                ? (t.getComponent(cc.Sprite).spriteFrame = this.bgSpf[2])
                : e.type == d.SkillGroup.ACTIVE_SKILL
                ? (t.getComponent(cc.Sprite).spriteFrame = this.bgSpf[1])
                : (t.getComponent(cc.Sprite).spriteFrame = this.bgSpf[0]),
                this._showSlillNum++,
                4 < this._showSlillNum && (this._showSlillNum = 0);
        }),
        (b.prototype.stopRoll = function (t) {
            var e,
                o = this,
                t = 1 == t ? ((e = this.laye1), this.laye2) : ((e = this.laye2), this.laye1);
            this.setSkill(e, 4),
                cc.tween(e).to(0.5, {y: 151}, cc.easeOut(3)).start(),
                cc
                    .tween(t)
                    .to(0.5, {y: 0}, cc.easeOut(3))
                    .call(function () {
                        o.updateView(), o._fun && o._fun(), (o._fun = null);
                    })
                    .start(),
                this.unschedule(this.startRoll),
                (this._nowRound = 0);
        }),
        (b.prototype.startRoll = function () {
            (this.laye1.y -= this.rollSpeed),
                (this.laye2.y -= this.rollSpeed),
                this.laye1.y <= 0 &&
                    ((this.laye1.y = this.laye2.y + this.laye1.height),
                    this._nowRound++,
                    this._showSlillNum++,
                    4 < this._showSlillNum && (this._showSlillNum = 0),
                    this._nowRound == this._maxRound - 1 && this.stopRoll(1)),
                this.laye2.y <= 0 &&
                    ((this.laye2.y = this.laye1.y + this.laye2.height),
                    this._nowRound++,
                    this._showSlillNum++,
                    4 < this._showSlillNum && (this._showSlillNum = 0),
                    this._nowRound == this._maxRound - 1 && this.stopRoll(2));
        }),
        (b.prototype.updateView = function () {
            this.tween && this.tween.stop(), this._data.skill ? this.initSkills() : this.initGolds();
        }),
        (b.prototype.initSkills = function () {
            var t = this._data.skill;
            this.newFlag.active = 1 == t.level;
            var e = h.default.inst.playerSkillConf.getPlayerSkillLevelConfVo(t.id, t.level),
                o = h.default.inst.playerSkillConf.getSkillInfoVo(t.id);
            if (
                ((this.nameLab.string = o.name),
                (this.descLab.string = e.desc),
                this.iconSp.setData(t.id, t.level),
                this.updateTp(e, o),
                e.isUltimate)
            )
                (this.maxStar.active = !0), (this.stars.active = !1);
            else {
                (this.maxStar.active = !1),
                    (this.stars.active = !0),
                    this.starList.forEach(function (t) {
                        t.node.opacity = 255;
                    });
                for (var n = 0; n < 5; n++)
                    n <= t.level - 1
                        ? ((this.starList[n].spriteFrame = this.starIcons[1]),
                          n == t.level - 1 && this.blink(this.starList[n].node))
                        : (this.starList[n].spriteFrame = this.starIcons[0]);
            }
            o.isUltimate
                ? ((this.bg.spriteFrame = this.bgSpf[2]),
                  (this.nameLab.node.color = cc.Color.WHITE.fromHEX("#D34B4B")),
                  (this.descLab.node.color = cc.Color.WHITE.fromHEX("#C15656")))
                : o.type == d.SkillGroup.ACTIVE_SKILL
                ? ((this.bg.spriteFrame = this.bgSpf[1]),
                  (this.nameLab.node.color = cc.Color.WHITE.fromHEX("#E0922B")),
                  (this.descLab.node.color = cc.Color.WHITE.fromHEX("#A16C51")))
                : ((this.bg.spriteFrame = this.bgSpf[0]),
                  (this.nameLab.node.color = cc.Color.WHITE.fromHEX("#7CA83F")),
                  (this.descLab.node.color = cc.Color.WHITE.fromHEX("#7C8D65")));
            SPA.styleSkillCard(this, o);
        }),
        (b.prototype.initGolds = function () {
            var t = this._data.gold;
            (this.newFlag.active = !1),
                (this.tupo.active = !1),
                (this.stars.active = !1),
                (this.maxStar.active = !1),
                (this.nameLab.string = "金币"),
                (this.descLab.string = "可获得" + t.value + "金币"),
                this.iconSp.setIcon(t.spf),
                (this.bg.spriteFrame = this.bgSpf[1]),
                (this.nameLab.node.color = cc.Color.WHITE.fromHEX("#E0922B")),
                (this.descLab.node.color = cc.Color.WHITE.fromHEX("#A16C51"));
        }),
        (b.prototype.updateTp = function (t, e) {
            if (
                ((this.tupo.active = !1),
                t.type != d.SkillGroup.ACTIVE_SKILL &&
                    e.relation &&
                    0 != e.relation.length &&
                    t.type == d.SkillGroup.AUXILIARY_SKILL)
            )
                for (var o = h.default.inst.playerSkillConf.getRoundSkills(), n = 0; n < 2; n++) {
                    var i = e.relation[n];
                    o.includes(i)
                        ? ((this.tupo.active = !0), this.tpskills[n].setData(i, 1), (this.tpskills[n].node.active = !0))
                        : (this.tpskills[n].node.active = !1);
                }
            this.iconSp.node.position = cc.v3(-175, this.tupo.active ? 10 : 0);
        }),
        (b.prototype.blink = function (t) {
            this.tween = cc
                .tween(t)
                .sequence(cc.tween(t).to(0.5, {opacity: 0}), cc.tween(t).to(0.5, {opacity: 255}))
                .repeatForever()
                .start();
        }),
        (b.prototype.onEnable = function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.onItemClick, this);
        }),
        (b.prototype.onDisable = function () {
            (this._data = null),
                this.tween && this.tween.stop(),
                this.node.off(cc.Node.EventType.TOUCH_END, this.onItemClick, this);
        }),
        (b.prototype.getFloatData = function () {
            return this._data
                ? this._data.skill
                    ? {skill: {id: this._data.skill.id, spf: this.iconSp.getIcon()}}
                    : {gold: {value: this._data.gold.value, spf: this.iconSp.getIcon()}}
                : null;
        }),
        (b.prototype.onItemClick = function (t) {
            var e, o, n;
            if (!(t || this._data)) return;
            if (!_.default.rollOver) return void (t && y.default.inst.showTips("请稍后选择..."));
            s.app.sound.playEffect("技能选择");
            try {
                t && y.default.inst.showSkill([this.getFloatData()]),
                    0 == g.default.inst.chapter
                        ? null === (e = s.app.track) || void 0 === e || e.trackEvent(f.TrackType.Skill_Click_New)
                        : null === (o = s.app.track) || void 0 === o || o.trackEvent(f.TrackType.Skill_Click),
                    2 == (null === (o = u.GuideController.guideVo) || void 0 === o ? void 0 : o.idx)
                        ? (u.GuideController.guideFinish(),
                          null === (o = s.app.track) || void 0 === o || o.trackEvent(f.TrackType.First_Skill_New))
                        : 0 == g.default.inst.trackData.first_skill &&
                          ((g.default.inst.trackData.first_skill = 1),
                          null === (n = s.app.track) || void 0 === n || n.trackEvent(f.TrackType.First_Skill)),
                    this._data.skill
                        ? (p.HeroController.addSkill(this._data.skill.id, this._data.skill.level),
                          this._data.skill.id < 100 &&
                              1 == this._data.skill.level &&
                              (null === (n = s.app.track) ||
                                  void 0 === n ||
                                  n.trackEvent("skill" + this._data.skill.id)),
                          s.app.event.emit(c.EventType.Game_Selected_Skill))
                        : p.HeroController.addGold(this._data.gold.value),
                    _.default.lastDraftChoices && P.default.onDraftResolved(_.default.lastDraftChoices);
            } catch (err) {
                console.error("[SkillSelectedItem] select failed", err);
            }
            t && s.app.gui.closeUI(m.UIEnum.SkillView);
        }),
        r([e(cc.Node)], b.prototype, "stars", void 0),
        r([e(cc.Node)], b.prototype, "maxStar", void 0),
        r([e(cc.Node)], b.prototype, "newFlag", void 0),
        r([e(v.default)], b.prototype, "iconSp", void 0),
        r([e(cc.Label)], b.prototype, "nameLab", void 0),
        r([e(cc.Label)], b.prototype, "descLab", void 0),
        r([e(cc.Node)], b.prototype, "tupo", void 0),
        r([e(cc.Node)], b.prototype, "laye1", void 0),
        r([e(cc.Node)], b.prototype, "laye2", void 0),
        r([e([v.default])], b.prototype, "tpskills", void 0),
        r([e(cc.Sprite)], b.prototype, "bg", void 0),
        r([e([cc.SpriteFrame])], b.prototype, "bgSpf", void 0),
        r([e([cc.SpriteFrame])], b.prototype, "starIcons", void 0),
        r([t], b));
function b() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.stars = null),
        (t.maxStar = null),
        (t.newFlag = null),
        (t.iconSp = null),
        (t.nameLab = null),
        (t.descLab = null),
        (t.tupo = null),
        (t.laye1 = null),
        (t.laye2 = null),
        (t.tpskills = []),
        (t.bg = null),
        (t.bgSpf = []),
        (t.starIcons = []),
        (t.starList = []),
        (t.tween = null),
        (t._rollList = []),
        (t._maxRound = 0),
        (t._round = 9),
        (t._nowRound = 0),
        (t.rollSpeed = 20),
        (t.laye1Y = 0),
        (t.laye2Y = 0),
        (t.interval = 0),
        (t.isFirst = !0),
        (t._fun = null),
        (t._showSlillNum = 0),
        (t._data = null),
        t
    );
}
o.default = t;
