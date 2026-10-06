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
    u =
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
var s,
    l,
    c = t("BasePanel"),
    p = t("decorator"),
    d = t("SkillIcon"),
    f = t("SkillSelectedItem"),
    h = t("HeroController"),
    y = t("SkillEnum"),
    g = t("ConfData"),
    m = t("ArrayUtil"),
    _ = t("GameMgr"),
    v = t("MathUtil"),
    b = t("App"),
    w = t("EffectMgr"),
    C = t("UIEnum"),
    k = t("ResMgr"),
    E = t("ResUtils"),
    S = t("GuideController"),
    M = t("TrackType"),
    R = t("SkinAttrController"),
    P = t("SkillDraftController"),
    SPA = t("SkillPickSettleArcade"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (s = c.default),
        i(T, s),
        ((l = T).prototype.initView = function () {
            for (var t = this, e = 0, o = this.icon1.children; e < o.length; e++) {
                var n = o[e];
                this.iconLeft.push(n.getComponent(d.default));
            }
            for (var i = 0, r = this.icon2.children; i < r.length; i++)
                (n = r[i]), this.iconRight.push(n.getComponent(d.default));
            for (var a = 0, s = this.level1.children; a < s.length; a++)
                ((n = s[a]).getComponent(cc.Label).string = ""), this.level1Lab.push(n.getComponent(cc.Label));
            for (var l = 0, c = this.level2.children; l < c.length; l++)
                ((n = c[l]).getComponent(cc.Label).string = ""), this.level2Lab.push(n.getComponent(cc.Label));
            for (var u, p = 0, h = this.skills.children; p < h.length; p++)
                (n = h[p]), this.items.push(n.getComponent(f.default));
            S.GuideController.isNewPlayer &&
                ((u = g.default.inst.constConf.getValue("guide_skills")), (this.guide_skills = m.default.clone(u))),
                (this.tween = cc
                    .tween(this.content)
                    .call(function () {
                        t.content.scale = 0;
                    })
                    .to(0.2, {scale: 1.2})
                    .to(0.1, {scale: 1})
                    .call(function () {
                        t.showGuide();
                    }));
        }),
        (T.prototype.updateView = function () {
            (l.rollOver = !1),
                (this.isFirst = !0),
                (this.skillList = h.HeroController.getUpgradeSkillList()),
                SPA.applySkillPick(this),
                this.tween.start(),
                (this.active_skills.length = 0),
                (this.auxiliary_skills.length = 0),
                this.updateRefreshBtn(),
                this.updateHasSkill(),
                this.updateUpgradeSkill();
        }),
        (T.prototype.showGuide = function () {
            var t;
            0 == _.default.inst.chapter
                ? null === (t = b.app.track) || void 0 === t || t.trackEvent(M.TrackType.Skill_View_New)
                : null === (t = b.app.track) || void 0 === t || t.trackEvent(M.TrackType.Skill_View),
                0 == S.GuideController.getGuide("Novicepass") &&
                    S.GuideController.guideVo &&
                    S.GuideController.guideVo.view == C.UIEnum.SkillView &&
                    S.GuideController.guideStart();
        }),
        (T.prototype.updateRefreshBtn = function () {
            this.unscheduleAllCallbacks();
            var t = h.HeroController.getEvolveAtrr("Flexible");
            (this.btnRefresh.active = 1 != this.useRoll),
                (this.refreshVideo.active = t <= _.default.inst.skill_refresh_count),
                (this.btnAll.active = this.active_skills.length < 6 && this.auxiliary_skills.length < 6),
                console.log("[SkillView]-->[line:157]:", this.active_skills.length, this.auxiliary_skills.length);
        }),
        (T.prototype.showBtn = function () {
            (this.btnRefresh.active = !0), (l.rollOver = !0);
        }),
        (T.prototype.updateHasSkill = function () {
            var e = this,
                o = [],
                n = [];
            h.HeroController.getHeroSkills().forEach(function (t) {
                t.confVo.type == y.SkillGroup.ACTIVE_SKILL
                    ? (o.push(t), e.active_skills.push(t.id))
                    : (n.push(t), e.auxiliary_skills.push(t.id));
            });
            for (var t = o.length; t < this.level1Lab.length; t++) this.level1Lab[t].string = "";
            for (var t = 0, i = cc.misc.clampf(o.length, 0, 6); t < i; t++)
                this.iconLeft[t].setData(o[t].id, o[t].level),
                    1e3 < o[t].id
                        ? (this.level1Lab[t].string = "6")
                        : (this.level1Lab[t].string = o[t].level.toString());
            for (t = n.length; t < this.level2Lab.length; t++) this.level2Lab[t].string = "";
            for (t = 0, i = n.length; t < i; t++)
                this.iconRight[t].setData(n[t].id, n[t].level), (this.level2Lab[t].string = n[t].level.toString());
        }),
        (T.prototype.updateUpgradeSkill = function () {
            var t = null;
            if (S.GuideController.isNewPlayer && 0 < this.guide_skills.length)
                for (var t = [], e = this.guide_skills.shift(), o = 0; o < e.length; o++) {
                    var n = h.HeroController.getHeroSkill(e[o]);
                    n ? t.push({id: e[o], level: n.level + 1}) : t.push({id: e[o], level: 1});
                }
            0 == (t = !t || 0 == t.length ? this.skillList : t).length ? this.initGolds() : this.initSkills(t);
        }),
        (T.prototype.initSkills = function (t) {
            console.log("[SkillView]-->[line:107]:", t);
            var e,
                o,
                n = null;
            (n = 0 == t.length ? t : 3 < t.length ? P.default.pickThree(t) : t),
                (l.lastDraftChoices = n),
                m.default.shuffle(n);
            for (var s = 0; s < 3; s++)
                n[s]
                    ? ((this.items[s].node.active = !0),
                      this.items[s].setData(
                          {skill: n[s]},
                          this.useRoll,
                          this.skillList,
                          s + 1,
                          n.length,
                          this.isFirst,
                          this.showBtn.bind(this)
                      ),
                      (e = g.default.inst.playerSkillConf.getSkillInfoVo(n[s].id)).type == y.SkillGroup.ACTIVE_SKILL
                          ? (e.isUltimate &&
                                ((o = g.default.inst.playerSkillConf.getSkillIdByTopId(e.id)),
                                -1 != (o = this.active_skills.indexOf(o)) && this.active_skills.splice(o, 1)),
                            this.active_skills.includes(e.id) || this.active_skills.push(e.id))
                          : this.auxiliary_skills.includes(e.id) || this.auxiliary_skills.push(e.id))
                    : (this.items[s].node.active = !1);
            (6 < this.active_skills.length || 6 < this.auxiliary_skills.length) && (this.btnAll.active = !1),
                (this.isFirst = !1);
        }),
        (T.prototype.initGolds = function () {
            return a(this, void 0, void 0, function () {
                var i, r, e, o, n, a, s, l, c;
                return u(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (n = _.default.inst.chapterVo),
                                (i = 0),
                                (r = n.gold_turntable).forEach(function (t) {
                                    i += t.ratio;
                                }),
                                [
                                    4,
                                    k.default.inst.getAsset(
                                        E.ResUtils.Textures.Props_Gold1.url,
                                        cc.SpriteFrame,
                                        E.ResUtils.Textures.Props_Gold1.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (
                                (e = t.sent()),
                                [
                                    4,
                                    k.default.inst.getAsset(
                                        E.ResUtils.Textures.Props_Gold2.url,
                                        cc.SpriteFrame,
                                        E.ResUtils.Textures.Props_Gold2.bundle
                                    )
                                ]
                            );
                        case 2:
                            return (
                                (o = t.sent()),
                                [
                                    4,
                                    k.default.inst.getAsset(
                                        E.ResUtils.Textures.Props_Gold3.url,
                                        cc.SpriteFrame,
                                        E.ResUtils.Textures.Props_Gold3.bundle
                                    )
                                ]
                            );
                        case 3:
                            for (
                                n = t.sent(),
                                    a = [e, o, n],
                                    s = function () {
                                        for (
                                            var t = 0, e = v.default.randomRangeInt(0, i), o = 0, n = r.length;
                                            o < n;
                                            o++
                                        )
                                            if (e <= (t += r[o].ratio))
                                                return {
                                                    value: v.default.randomRangeInt(r[o].range[0], r[o].range[1]),
                                                    spf: a[o]
                                                };
                                    },
                                    l = 0;
                                l < 3;
                                l++
                            )
                                (c = s()),
                                    (this.items[l].node.active = !0),
                                    this.items[l].setData({gold: c}, !1, null, l + 1, 3);
                            return [2];
                    }
                });
            });
        }),
        (T.prototype.onBtnRefreshClick = function () {
            function e() {
                (_.default.inst.skill_refresh_count += 1),
                    (o.btnRefresh.active = !1),
                    (o.active_skills.length = 0),
                    (o.auxiliary_skills.length = 0),
                    o.updateRefreshBtn(),
                    o.updateHasSkill(),
                    o.updateUpgradeSkill(),
                    (l.rollOver = !1);
            }
            var t,
                o = this;
            h.HeroController.getEvolveAtrr("Flexible") > _.default.inst.skill_refresh_count
                ? e()
                : (null === (t = b.app.track) || void 0 === t || t.trackEvent("new_skill_update"),
                  _.default.inst.getVideoShareReward(
                      function () {
                          var t;
                          null === (t = b.app.track) || void 0 === t || t.trackEvent("new_suc_skill_update"), e();
                      },
                      null,
                      function () {
                          w.default.inst.showTips("获取视频失败，请稍候再试！");
                      }
                  ));
        }),
        (T.prototype.onBtnAllClick = function () {
            var t,
                o = this;
            null === (t = b.app.track) || void 0 === t || t.trackEvent("new_skill_all"),
                _.default.inst.getVideoShareReward(
                    function () {
                        var t;
                        null === (t = b.app.track) || void 0 === t || t.trackEvent("new_suc_skill_all");
                        var e = [];
                        o.items.forEach(function (t) {
                            t.onItemClick();
                            t = t.getFloatData();
                            t && e.push(t);
                        }),
                            l.lastDraftChoices && P.default.onDraftResolved(l.lastDraftChoices),
                            w.default.inst.showSkill(e),
                            b.app.gui.closeUI(C.UIEnum.SkillView);
                    },
                    null,
                    function () {
                        w.default.inst.showTips("获取视频失败，请稍候再试！");
                    }
                );
        }),
        (T.rollOver = !1),
        (T.lastDraftChoices = null),
        r([p.autoBind("cc.Node", "content/guide")], T.prototype, "guide", void 0),
        r([p.autoBind("cc.Node", "content/layout/btnRefresh/refreshVideo")], T.prototype, "refreshVideo", void 0),
        r([p.autoBind("cc.Node", "content/layout/btnRefresh")], T.prototype, "btnRefresh", void 0),
        r([p.autoBind("cc.Node", "content/layout/btnAll")], T.prototype, "btnAll", void 0),
        r([p.autoBind("cc.Node", "content")], T.prototype, "content", void 0),
        r([p.autoBind("cc.Node", "content/skills")], T.prototype, "skills", void 0),
        r([p.autoBind("cc.Node", "content/mySkill/icon1")], T.prototype, "icon1", void 0),
        r([p.autoBind("cc.Node", "content/mySkill/icon2")], T.prototype, "icon2", void 0),
        r([p.autoBind("cc.Node", "content/mySkill/level1")], T.prototype, "level1", void 0),
        r([p.autoBind("cc.Node", "content/mySkill/level2")], T.prototype, "level2", void 0),
        (l = r([t], T)));
function T() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t.guide = null),
        (t.refreshVideo = null),
        (t.btnRefresh = null),
        (t.btnAll = null),
        (t.content = null),
        (t.skills = null),
        (t.icon1 = null),
        (t.icon2 = null),
        (t.level1 = null),
        (t.level2 = null),
        (t.iconLeft = []),
        (t.iconRight = []),
        (t.level1Lab = []),
        (t.level2Lab = []),
        (t.items = []),
        (t.isFirst = !0),
        (t.guide_skills = null),
        (t.useRoll = !1),
        (t.active_skills = []),
        (t.auxiliary_skills = []),
        (t.skillList = null),
        (t.tween = null),
        t
    );
}
o.default = t;
