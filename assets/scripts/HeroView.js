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
    p = t("UserDataController"),
    h = t("ConfData"),
    d = t("GameEnums"),
    f = t("App"),
    y = t("LayerMgr"),
    g = t("MainPageType"),
    m = t("UIEnum"),
    _ = t("SkinItem"),
    v = t("EventTypes"),
    b = t("GameMgr"),
    w = t("EffectMgr"),
    C = t("GuideController"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (l = c.default),
        i(k, l),
        (k.prototype.initView = function () {
            this.list.node.height = cc.winSize.height - 820;
        }),
        (k.prototype.updateView = function () {
            (this.currVo = null), this.showTop(), this.updateList(), this.showGuide();
        }),
        (k.prototype.showGuide = function () {
            var t;
            62 == (null === (t = C.GuideController.guideVo) || void 0 === t ? void 0 : t.idx)
                ? (this.setSkin(b.default.inst.guide_skin_id),
                  this.scheduleOnce(function () {
                      C.GuideController.guideStart();
                  }, 0.2))
                : this.setSkin(p.default.inst.skin);
        }),
        (k.prototype.showTop = function () {
            b.default.inst.topNode && (b.default.inst.topNode.node.parent = this.top);
        }),
        (k.prototype.updateList = function () {
            for (var t = (this.skins.length = 0); t < h.default.inst.playerSkinConf.skinNum; t++) {
                var e = h.default.inst.playerSkinConf.skinNum - 1;
                this.skins.push({id: t + 1, weight: e});
            }
            this.list.numItems = h.default.inst.playerSkinConf.skinNum;
        }),
        (k.prototype.setSkin = function (t) {
            t = h.default.inst.playerSkinConf.getPlayerSkinVoById(t);
            t != this.currVo &&
                ((this.currVo = t),
                this.setBody(),
                this.updateHead(),
                this.updateAttr(),
                this.updateUnLock(),
                this.setSkill());
        }),
        (k.prototype.updateAttr = function () {
            (this.attackLab.string = 10 * this.currVo.attack + ""),
                (this.hpLab.string = 10 * this.currVo.hp + ""),
                (this.btnFight.active =
                    p.default.inst.hasSkin(this.currVo.id) && p.default.inst.skin != this.currVo.id);
        }),
        (k.prototype.updateUnLock = function () {
            (this.btnUnlock.active = this.unlock.active = !p.default.inst.hasSkin(this.currVo.id)),
                1 == this.currVo.unlock_type ? p.default.inst.getSkinDebrisNum(this.currVo.id) : p.default.inst.gem,
                (this.debrisLab.string = this.currVo.unlock_num + "");
        }),
        (k.prototype.updateHead = function () {
            1 == this.currVo.unlock_type
                ? ((this.gem.active = !1), (this.icon.node.active = !0), this.icon.setSource(this.currVo.head, "icons"))
                : ((this.gem.active = !0), (this.icon.node.active = !1));
        }),
        (k.prototype.setBody = function () {
            return a(this, void 0, void 0, function () {
                var t = this;
                return s(this, function () {
                    return (
                        this.scheduleOnce(function () {
                            return a(t, void 0, void 0, function () {
                                var e;
                                return s(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return (
                                                (e = this.currVo.id),
                                                (e = h.default.inst.playerSkinConf.getPlayerSkinVoById(e)),
                                                (this.descLab.string = this.currVo.desc),
                                                [4, this.body.setSource(e.url, "actors")]
                                            );
                                        case 1:
                                            return t.sent(), this.body.setSkin(e.skin_name), this.onBodyAmin(), [2];
                                    }
                                });
                            });
                        }),
                        [2]
                    );
                });
            });
        }),
        (k.prototype.onBodyAmin = function () {
            var t = this;
            this.playAnim(d.HeroActs.IDLE3, 3, function () {
                return t.playAnim(d.HeroActs.IDLE4, 1, function () {
                    t.onBodyAmin();
                });
            });
        }),
        (k.prototype.playAnim = function (t, e, o) {
            void 0 === e && (e = 3),
                this.body.setAnimation({
                    act: t,
                    loop: !0,
                    complete: function () {
                        --e <= 0 && o();
                    }
                });
        }),
        (k.prototype.setSkill = function () {
            (this.skill1.node.active = 0 < this.currVo.skill_id),
                0 < this.currVo.skill_id && this.skill1.setData(this.currVo.id, this.currVo.skill_id),
                (this.skill2.node.active = 0 < this.currVo.mb_id),
                0 < this.currVo.mb_id && this.skill2.setData(this.currVo.id, this.currVo.mb_id);
        }),
        (k.prototype.onItemRender = function (t, e) {
            this.skins[e].id;
            var o = t.getComponent(_.default);
            (t.name = "hero_" + (e + 1)), o.setData(e + 1);
        }),
        (k.prototype.onHeroFighting = function () {
            (this.btnFight.active = p.default.inst.hasSkin(this.currVo.id) && p.default.inst.skin != this.currVo.id),
                C.GuideController.setGuide("skin", 1);
        }),
        (k.prototype.onItemSelected = function (t) {
            this.setSkin(t);
        }),
        (k.prototype.onGemUpdate = function () {
            this.updateUnLock();
        }),
        (k.prototype.onBtnFightClick = function () {
            p.default.inst.setSkin(this.currVo.id);
        }),
        (k.prototype.onBtnUnlockClick = function () {
            p.default.inst.unlockHero(this.currVo.id) && (w.default.inst.showTips("解锁成功"), this.updateUnLock());
        }),
        (k.prototype.onBtnBackClick = function () {
            f.app.gui.openUI(m.UIEnum.HomeView, y.LayerEnum.VIEW_LAYER, {
                page: C.GuideController.guideVo ? g.MainPageType.Battle : g.MainPageType.Equip
            }),
                f.app.gui.closeUI(m.UIEnum.HeroView);
        }),
        r([u.autoBind("cc.Node", "top/unlock/gem")], k.prototype, "gem", void 0),
        r([u.autoBind("List", "list")], k.prototype, "list", void 0),
        r([u.autoBind("cc.Node", "top")], k.prototype, "top", void 0),
        r([u.autoBind("CCSkeleton", "content/body")], k.prototype, "body", void 0),
        r([u.autoBind("cc.Label", "content/descLab")], k.prototype, "descLab", void 0),
        r([u.autoBind("cc.Node", "top/unlock")], k.prototype, "unlock", void 0),
        r([u.autoBind("cc.Node", "top/btnFight")], k.prototype, "btnFight", void 0),
        r([u.autoBind("cc.Node", "top/btnUnlock")], k.prototype, "btnUnlock", void 0),
        r([u.autoBind("cc.Node", "bottom/btnBack")], k.prototype, "btnBack", void 0),
        r([u.autoBind("SkinSkillItem", "content/skills/skill1")], k.prototype, "skill1", void 0),
        r([u.autoBind("SkinSkillItem", "content/skills/skill2")], k.prototype, "skill2", void 0),
        r([u.autoBind("cc.Label", "top/attribute/attackLab")], k.prototype, "attackLab", void 0),
        r([u.autoBind("cc.Label", "top/attribute/hpLab")], k.prototype, "hpLab", void 0),
        r([u.autoBind("CCImage", "top/unlock/mask/icon")], k.prototype, "icon", void 0),
        r([u.autoBind("cc.Label", "top/unlock/debrisLab")], k.prototype, "debrisLab", void 0),
        r([u.gameEvent(v.EventType.User_Selected_Skin)], k.prototype, "onHeroFighting", null),
        r([u.gameEvent(v.EventType.On_Hero_Skin_Item_Click)], k.prototype, "onItemSelected", null),
        r([u.gameEvent(v.EventType.User_Gem_Update)], k.prototype, "onGemUpdate", null),
        r([t], k));
function k() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.gem = null),
        (t.list = null),
        (t.top = null),
        (t.body = null),
        (t.descLab = null),
        (t.unlock = null),
        (t.btnFight = null),
        (t.btnUnlock = null),
        (t.btnBack = null),
        (t.skill1 = null),
        (t.skill2 = null),
        (t.attackLab = null),
        (t.hpLab = null),
        (t.icon = null),
        (t.debrisLab = null),
        (t.currVo = null),
        (t.skins = []),
        t
    );
}
o.default = t;
