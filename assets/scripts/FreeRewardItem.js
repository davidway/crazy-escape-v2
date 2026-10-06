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
    l = t("App"),
    c = t("ResMgr"),
    p = t("BaseUI"),
    h = t("EventTypes"),
    d = t("DropController"),
    f = t("HeroController"),
    y = t("ConfData"),
    g = t("SkillEnum"),
    m = t("EffectMgr"),
    _ = t("GameMgr"),
    v = t("ResUtils"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((s = p.default),
        i(b, s),
        (b.prototype.onEnable = function () {
            this.on(this.btnGet, this.onBtnClick, this);
        }),
        (b.prototype.onDisable = function () {
            this.off(this.btnGet);
        }),
        (b.prototype.setData = function (t) {
            (this.data = t).skill ? this.setSkill(t.skill) : this.setReward(t.reward);
        }),
        (b.prototype.setReward = function (t) {
            t.spf && (this.icon.spriteFrame = t.spf),
                (this.nameLab.string = t.name),
                (this.video.active = t.isVideo),
                (this.nameLab.node.active = !0),
                (this.tupo.active = !1),
                (this.tpLab.active = !1);
        }),
        (b.prototype.setSkill = function (c) {
            return a(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s, l;
                return u(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                console.log("[FreeRewardItem]-->[line:61]:", c),
                                (e = this.icon),
                                [4, this.getSkillIcon(c.id)]
                            );
                        case 1:
                            return (
                                (e.spriteFrame = t.sent()),
                                (o = y.default.inst.playerSkillConf.getSkillInfoVo(c.id)).type !=
                                g.SkillGroup.ACTIVE_SKILL
                                    ? [3, 2]
                                    : ((this.nameLab.node.active = !0),
                                      (this.tupo.active = !1),
                                      (this.tpLab.active = !1),
                                      (this.nameLab.string = o.name),
                                      [3, 6])
                            );
                        case 2:
                            return (
                                (n = y.default.inst.playerSkillConf.getRoundSkills()),
                                (i = o.relation[0]),
                                !(1 < o.relation.length) ||
                                    (n.includes(i) && f.HeroController.hasSkill(i)) ||
                                    ((r = o.relation[1]), n.includes(r) && f.HeroController.hasSkill(r) && (i = r)),
                                n.includes(i)
                                    ? ((this.nameLab.node.active = !1),
                                      (this.tupo.active = !0),
                                      (this.tpLab.active = !0),
                                      (a = y.default.inst.playerSkillConf.getSkillInfoVo(i)),
                                      (s = this.icon1),
                                      [4, this.getSkillIcon(a.id)])
                                    : [3, 5]
                            );
                        case 3:
                            return (s.spriteFrame = t.sent()), (l = this.icon2), [4, this.getSkillIcon(a.top_id)];
                        case 4:
                            return (l.spriteFrame = t.sent()), [3, 6];
                        case 5:
                            (this.nameLab.node.active = !0),
                                (this.tupo.active = !1),
                                (this.tpLab.active = !1),
                                (this.nameLab.string = o.name),
                                (t.label = 6);
                        case 6:
                            return [2];
                    }
                });
            });
        }),
        (b.prototype.getSkillIcon = function (n) {
            return a(this, void 0, void 0, function () {
                var e, o;
                return u(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [
                                4,
                                c.default.inst.getAsset(
                                    v.ResUtils.Textures.Skillicons.url,
                                    cc.SpriteAtlas,
                                    v.ResUtils.Textures.Skillicons.bundle
                                )
                            ];
                        case 1:
                            return (
                                (e = t.sent()),
                                (o = y.default.inst.playerSkillConf.getSkillInfoVo(n)),
                                e && o ? [2, e.getSpriteFrame(o.icon)] : [2, null]
                            );
                    }
                });
            });
        }),
        (b.prototype.onBtnClick = function () {
            var t,
                e = this;
            this.data.skill || (null !== (t = this.data.reward) && void 0 !== t && t.isVideo)
                ? (null === (t = l.app.track) || void 0 === t || t.trackEvent("new_skill_monster"),
                  _.default.inst.getVideoShareReward(
                      function () {
                          var t;
                          null === (t = l.app.track) || void 0 === t || t.trackEvent("new_suc_skill_monster"),
                              e.getReward();
                      },
                      null,
                      function () {
                          m.default.inst.showTips("获取视频失败，请稍候再试！");
                      }
                  ))
                : this.getReward();
        }),
        (b.prototype.getReward = function () {
            var t, e;
            if ((l.app.event.emit(h.EventType.Game_Free_Reward), this.data.skill))
                f.HeroController.addSkill(this.data.skill.id),
                    m.default.inst.showSkill([{skill: {id: this.data.skill.id, spf: this.icon.spriteFrame}}]);
            else
                switch (null === (t = this.data.reward) || void 0 === t ? void 0 : t.type) {
                    case 1:
                        f.HeroController.addGold(null === (e = this.data.reward) || void 0 === e ? void 0 : e.value);
                        break;
                    case 2:
                        d.default.inst.collectAllExp();
                        break;
                    case 3:
                        f.HeroController.addFullHp();
                }
        }),
        r([e(cc.Sprite)], b.prototype, "icon", void 0),
        r([e(cc.Sprite)], b.prototype, "icon1", void 0),
        r([e(cc.Sprite)], b.prototype, "icon2", void 0),
        r([e(cc.Label)], b.prototype, "nameLab", void 0),
        r([e(cc.Node)], b.prototype, "video", void 0),
        r([e(cc.Node)], b.prototype, "btnGet", void 0),
        r([e(cc.Node)], b.prototype, "tupo", void 0),
        r([e(cc.Node)], b.prototype, "tpLab", void 0),
        r([t], b));
function b() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t.icon = null),
        (t.icon1 = null),
        (t.icon2 = null),
        (t.nameLab = null),
        (t.video = null),
        (t.btnGet = null),
        (t.tupo = null),
        (t.tpLab = null),
        (t.data = null),
        t
    );
}
o.default = t;
