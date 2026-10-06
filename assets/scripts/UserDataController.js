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
    a =
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
    c = t("LayerMgr"),
    e = t("Singleton"),
    u = t("EventTypes"),
    p = t("UIEnum"),
    h = t("ConfData"),
    d = t("AssignmentConf"),
    f = t("GameSetting"),
    y = t("GameEnums"),
    g = t("Prop"),
    m = t("EffectMgr"),
    _ = t("GameMgr"),
    v = t("AssignmentController"),
    b = t("DrawingController"),
    w = t("EquipController"),
    C = t("GuideController"),
    k = t("ShareDataController"),
    E = t("SkinAttrController"),
    S = t("TaskController"),
    GDC = t("GoodsDataController"),
    PT = t("PropType"),
    i =
        ((s = e.Singleton()),
        i(M, s),
        Object.defineProperty(M.prototype, "addEnergyPlay", {
            get: function () {
                return this._addEnergyPlay;
            },
            set: function (t) {
                this._addEnergyPlay = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "addGemPlay", {
            get: function () {
                return this._addGemPlay;
            },
            set: function (t) {
                this._addGemPlay = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "addExpPlay", {
            get: function () {
                return this._addExpPlay;
            },
            set: function (t) {
                this._addExpPlay = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "addGoldPlay", {
            get: function () {
                return this._addGoldPlay;
            },
            set: function (t) {
                this._addGoldPlay = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "level", {
            get: function () {
                return this._level;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "totalExp", {
            get: function () {
                return this._totalExp;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "gold", {
            get: function () {
                return this._gold;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "energy", {
            get: function () {
                return this._energy;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "energy_time", {
            get: function () {
                return this._energy_time;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "gem", {
            get: function () {
                return this._gem;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "gene", {
            get: function () {
                return this._gene;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "skin", {
            get: function () {
                return this._skin;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "chest", {
            get: function () {
                return this._chest;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "hellChapter", {
            get: function () {
                return this._hellChapter;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "chapter", {
            get: function () {
                return this._chapter;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "setup", {
            get: function () {
                return this._setup;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "nickName", {
            get: function () {
                return this._nickName;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "avatarUrl", {
            get: function () {
                return this._avatarUrl;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "gemCount", {
            get: function () {
                return this._gemCount;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "goldCount", {
            get: function () {
                return this._goldCount;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(M.prototype, "deathPass", {
            get: function () {
                return this._deathPass;
            },
            enumerable: !1,
            configurable: !0
        }),
        (M.prototype.initData = function () {
            if (
                ((this._level = l.app.local.getValue("level")),
                (this._totalExp = l.app.local.getValue("totalExp")),
                (this._gold = l.app.local.getValue("gold")),
                (this._energy = l.app.local.getValue("energy")),
                (this._energy_time = l.app.local.getValue("energy_time")),
                (this._gem = l.app.local.getValue("gem")),
                (this._gene = l.app.local.getValue("gene")),
                (this._skin = l.app.local.getValue("skin")),
                (this._skins = l.app.local.getValue("skins")),
                (this._skinSkills = l.app.local.getValue("skinSkills")),
                (this._skins_debris = l.app.local.getValue("skins_debris")),
                (this._hellChapter = l.app.local.getValue("hellChapter")),
                (this._chapter = l.app.local.getValue("chapter")),
                (this._chapters = l.app.local.getValue("chapters")),
                (this._chest = l.app.local.getValue("chest")),
                (this._challenges = l.app.local.getValue("challenges")),
                (this._setup = l.app.local.getValue("setup")),
                (this._nickName = l.app.local.getValue("nickName")),
                (this._avatarUrl = l.app.local.getValue("avatarUrl")),
                (this._gemCount = l.app.local.getValue("gemCount")),
                (this._goldCount = l.app.local.getValue("goldCount")),
                (this._deathPass = l.app.local.getValue("deathPass")),
                (this._unlocked_content_ids = l.app.local.getValue("unlocked_content_ids")),
                this._unlocked_content_ids || (this._unlocked_content_ids = []),
                this.backfillUnlockContentFromChapters(),
                l.app.sound.setVoice(this._setup.Music, this._setup.Voice),
                (l.app.platform.isVibrate = this._setup.Shock),
                E.default.inst.calcAttrById(this._skin),
                this._challenges || (this._challenges = []),
                0 < this._challenges.length)
            )
                for (var t = 0, e = this._challenges; t < e.length; t++) {
                    var o = e[t];
                    this._challengeMap.set(o.id, o);
                }
            if (
                (0 == this._energy && 0 == this._energy_time && this.addEnergy(f.GameSetting.inst.energy_default_value),
                0 < this._energy_time)
            )
                for (var n = 0; n < 1e3; n++) {
                    var i = Date.now() - this._energy_time;
                    if (
                        !(
                            this._energy < f.GameSetting.inst.energy_default_value &&
                            i >= f.GameSetting.inst.energy_recovery_mil_sec
                        )
                    )
                        break;
                    this.recoveryEnergy();
                }
            var r = this.getUserChapterVo(this._chapter);
            r &&
                r.isPass &&
                this._chapter < h.default.inst.chapterConf.getMaxChapter() &&
                ((this._chapter += 1),
                l.app.local.setValue("chapter", this._chapter),
                console.log("重置1:", this._chapter)),
                (r = this.getUserChapterVo(this._hellChapter)) &&
                    r.isPass &&
                    this._hellChapter < h.default.inst.hellConf.maxChapter &&
                    ((this._hellChapter += 1),
                    l.app.local.setValue("hellChapter", this._hellChapter),
                    console.log("重置2:", this._hellChapter)),
                this.unlockHeroByChapter();
        }),
        (M.prototype.checkCheat = function () {
            var t = !1;
            return (
                1e6 < this._gold && ((t = !0), (this._gold = 1e5), l.app.local.setValue("gold", this._gold)),
                1e4 < this._gem && ((t = !0), (this._gold = 1e3), l.app.local.setValue("gem", this._gem)),
                100 < this._energy && ((t = !0), (this._energy = 50), l.app.local.setValue("gem", this._energy)),
                t
            );
        }),
        (M.prototype.setLevel = function (t) {
            var e = h.default.inst.userLevelConf.getUserLevelVo(t);
            e &&
                ((this._totalExp = e.totalExp - e.needExp + 10),
                l.app.local.setValue("totalExp", this._totalExp),
                (this._level = t),
                l.app.local.setValue("level", this._level),
                l.app.event.emit(u.EventType.User_Exp_Change),
                l.app.event.emit(u.EventType.User_Level_Up),
                (t = h.default.inst.userLevelConf.maxLevel),
                S.default.inst.setHonour("level", cc.misc.clampf(this._level, 1, t)),
                v.default.inst.setProg(this._level, d.DayAssign.role_grade));
        }),
        (M.prototype.addExp = function (t, e, o) {
            void 0 === e && (e = !1), void 0 === o && (o = !1);
            var n = h.default.inst.userLevelConf.maxLevel,
                i = h.default.inst.userLevelConf.maxExp;
            if (
                ((this._totalExp = cc.misc.clampf(this._totalExp + t, 0, i)),
                l.app.local.setValue("totalExp", this._totalExp),
                h.default.inst.userLevelConf.getUserLevelVo(this._level).totalExp <= this._totalExp)
            ) {
                if (this._level < n) {
                    for (var r = this._level, a = n; r <= a; r++)
                        h.default.inst.userLevelConf.getUserLevelVo(r).totalExp <= this._totalExp && (this._level += 1);
                    S.default.inst.setHonour("level", cc.misc.clampf(this._level, 1, n)),
                        l.app.local.setValue("level", cc.misc.clampf(this._level, 1, n)),
                        l.app.event.emit(u.EventType.User_Level_Up);
                }
                v.default.inst.setProg(this._level, d.DayAssign.role_grade);
            }
            (this._addExpPlay = e)
                ? o &&
                  ((this._addExpPlay = !1),
                  l.app.event.emit(u.EventType.Exp_Animation, function () {
                      l.app.event.emit(u.EventType.User_Exp_Change);
                  }))
                : l.app.event.emit(u.EventType.User_Exp_Change);
        }),
        (M.prototype.addGold = function (t, e, o) {
            void 0 === e && (e = !1),
                void 0 === o && (o = !1),
                (this._gold += t),
                l.app.local.setValue("gold", this._gold),
                (this._addGoldPlay = e)
                    ? o &&
                      ((this._addGoldPlay = !1),
                      l.app.event.emit(u.EventType.Gold_Animation, function () {
                          l.app.event.emit(u.EventType.User_Gold_Update);
                      }))
                    : l.app.event.emit(u.EventType.User_Gold_Update),
                l.app.event.emit(u.EventType.Home_Equip_Change_Page),
                l.app.event.emit(u.EventType.Home_Evolve_Change_Page);
        }),
        (M.prototype.useGold = function (t) {
            return this._gold < t
                ? (console.log("金币不足"), m.default.inst.showTips("金币不足"), !1)
                : (S.default.inst.addHonour("use_gold", t),
                  (this._gold -= t),
                  l.app.local.setValue("gold", this._gold),
                  l.app.event.emit(u.EventType.User_Gold_Update),
                  l.app.event.emit(u.EventType.Home_Equip_Change_Page),
                  l.app.event.emit(u.EventType.Home_Evolve_Change_Page),
                  !0);
        }),
        (M.prototype.addGem = function (t, e, o) {
            void 0 === e && (e = !1),
                void 0 === o && (o = !1),
                (this._gem += t),
                l.app.local.setValue("gem", this._gem),
                (this._addGemPlay = e)
                    ? o &&
                      ((this._addGemPlay = !1),
                      l.app.event.emit(u.EventType.Gem_Animation, function () {
                          l.app.event.emit(u.EventType.User_Gem_Update);
                      }))
                    : l.app.event.emit(u.EventType.User_Gem_Update);
        }),
        (M.prototype.useGem = function (t, e) {
            return (
                void 0 === e && (e = "钻石不足"),
                this._gem < t
                    ? (m.default.inst.showTips(e), !1)
                    : (S.default.inst.addHonour("use_gem", t),
                      (this._gem -= t),
                      l.app.local.setValue("gem", this._gem),
                      l.app.event.emit(u.EventType.User_Gem_Update),
                      !0)
            );
        }),
        (M.prototype.initGemCount = function () {
            (this._gemCount = 0), l.app.local.setValue("gemCount", this._gemCount);
        }),
        (M.prototype.addGemCount = function () {
            (this._gemCount += 1), l.app.local.setValue("gemCount", this._gemCount);
        }),
        (M.prototype.addGoldCount = function () {
            (this._goldCount += 1), l.app.local.setValue("goldCount", this._goldCount);
        }),
        (M.prototype.addDeathPass = function () {
            (this._deathPass += 1), l.app.local.setValue("deathPass", this._deathPass);
        }),
        (M.prototype.addGene = function (t) {
            (this._gene += t),
                l.app.local.setValue("gene", this._gene),
                l.app.event.emit(u.EventType.User_Gene_Update),
                l.app.event.emit(u.EventType.Home_Evolve_Change_Page);
        }),
        (M.prototype.useGene = function (t) {
            return !(
                this._gene < t ||
                ((this._gene -= t),
                l.app.local.setValue("gene", this._gene),
                l.app.event.emit(u.EventType.User_Gene_Update),
                l.app.event.emit(u.EventType.Home_Evolve_Change_Page),
                0)
            );
        }),
        (M.prototype.recoveryEnergy = function () {
            Date.now() - this._energy_time >= f.GameSetting.inst.energy_recovery_mil_sec &&
                ((this._energy_time += f.GameSetting.inst.energy_recovery_mil_sec),
                l.app.local.setValue("energy_time", this._energy_time),
                this.addEnergy(f.GameSetting.inst.energy_recovery_value));
        }),
        (M.prototype.addEnergy = function (t, e, o) {
            void 0 === e && (e = !1),
                void 0 === o && (o = !1),
                (this._energy += t),
                l.app.local.setValue("energy", this._energy),
                this._energy >= f.GameSetting.inst.energy_default_value &&
                    0 < this._energy_time &&
                    ((this._energy_time = 0), l.app.local.setValue("energy_time", this._energy_time)),
                (this._addEnergyPlay = e),
                l.app.event.emit(u.EventType.Battle_Clean_Change),
                e
                    ? o &&
                      ((this._addEnergyPlay = !1),
                      l.app.event.emit(u.EventType.Energy_Animation, function () {
                          l.app.event.emit(u.EventType.User_Energy_Update);
                      }))
                    : l.app.event.emit(u.EventType.User_Energy_Update);
        }),
        (M.prototype.useEnergy = function (t) {
            t = t || f.GameSetting.inst.energy_use_value;
            return this._energy < t
                ? (l.app.gui.openUI(p.UIEnum.GetEnergyView, c.LayerEnum.VIEW_LAYER), !1)
                : ((this._energy -= t),
                  this._energy < f.GameSetting.inst.energy_default_value &&
                      0 == this._energy_time &&
                      ((this._energy_time = Date.now()), l.app.local.setValue("energy_time", this._energy_time)),
                  l.app.local.setValue("energy", this._energy),
                  l.app.event.emit(u.EventType.User_Energy_Update),
                  l.app.event.emit(u.EventType.Battle_Clean_Change),
                  !0);
        }),
        (M.prototype.setSkin = function (t) {
            var e;
            if (!this.hasSkin(t)) return console.log("尚未获得皮肤：", t), !1;
            (this._skin = t),
                null === (e = l.app.track) || void 0 === e || e.trackEvent("use_kulou" + t),
                E.default.inst.calcAttrById(this._skin),
                l.app.local.setValue("skin", this._skin),
                l.app.event.emit(u.EventType.User_Selected_Skin);
        }),
        (M.prototype.hasSkin = function (t) {
            return this._skins.includes(t);
        }),
        (M.prototype.addSkin = function (t) {
            var e;
            this.hasSkin(t)
                ? console.log("已获得皮肤：", t)
                : (null === (e = l.app.track) || void 0 === e || e.trackEvent("get_kulou" + t),
                  console.warn("解锁皮肤:", t, C.GuideController.getGuide("skin")),
                  this._skins.push(t),
                  l.app.local.setValue("skins", this._skins),
                  0 != C.GuideController.getGuide("skin") && this.setSkin(t));
        }),
        (M.prototype.unlockHeroByChapter = function () {
            var e = this;
            h.default.inst.playerSkinConf.getPlayerSkins().forEach(function (t) {
                e.hasSkin(t.id) || 3 != t.unlock_type || e.unlockHero(t.id);
            });
        }),
        (M.prototype.unlockHero = function (t, e) {
            if ((void 0 === e && (e = !1), this.hasSkin(t))) return !1;
            if (e) return this.addSkin(t), !0;
            var o = h.default.inst.playerSkinConf.getPlayerSkinVoById(t);
            if (1 == o.unlock_type) {
                e = this.getSkinDebrisNum(t);
                if (o.unlock_num <= e) return this.addSkin(t), this.addSkinDebris(t, -o.unlock_num), !0;
                m.default.inst.showTips("碎片不足，解锁失败");
            } else if (2 == o.unlock_type) {
                if (this.useGem(o.unlock_num, "钻石不足，解锁失败")) return this.addSkin(t), !0;
            } else if (3 == o.unlock_type && M.inst.chapter >= o.unlock_num) return this.addSkin(t), !0;
            return !1;
        }),
        (M.prototype.addSkinDebris = function (t, e) {
            for (var o = !1, n = 0, i = this._skins_debris; n < i.length; n++) {
                var r = i[n];
                if (r.id == t) {
                    (r.num += e), (o = !0);
                    break;
                }
            }
            o || this._skins_debris.push({id: t, num: e}), l.app.local.setValue("skins_debris", this._skins_debris);
        }),
        (M.prototype.getSkinDebrisNum = function (t) {
            for (var e = 0, o = 0, n = this._skins_debris; o < n.length; o++) {
                var i = n[o];
                if (i.id == t) {
                    e = i.num;
                    break;
                }
            }
            return e;
        }),
        (M.prototype.unlockSkinSkill = function (t) {
            if (this.getSkinSkillStatus(t)) return !0;
            var e = h.default.inst.playerSkinConf.getPlayerSkinVoById(t);
            return (
                !!this.useGem(e.skill_unlock_value, "钻石不足，解锁失败") &&
                (this._skinSkills.push(t),
                l.app.local.setValue("skinSkills", this._skinSkills),
                m.default.inst.showTips("解锁成功"),
                E.default.inst.calcAttrById(this._skin),
                l.app.event.emit(u.EventType.On_Hero_Skin_Skill_Unlock),
                !0)
            );
        }),
        (M.prototype.getSkinSkillStatus = function (t) {
            return this._skinSkills.includes(t);
        }),
        (M.prototype.checkSkinRedPoint = function () {
            for (var t = !1, e = 0; e < h.default.inst.playerSkinConf.skinNum; e++) {
                var o = e + 1;
                if (!this.hasSkin(o)) {
                    var n = 0,
                        i = h.default.inst.playerSkinConf.getPlayerSkinVoById(o);
                    if (
                        (1 == i.unlock_type ? (n = this.getSkinDebrisNum(o)) : 2 == i.unlock_type && (n = this._gem),
                        n >= i.unlock_num)
                    ) {
                        t = !0;
                        break;
                    }
                }
            }
            return t;
        }),
        (M.prototype.setUserInfo = function (t) {
            (this._nickName = t.nickName),
                (this._avatarUrl = t.avatarUrl),
                l.app.local.setValue("nickName", this._nickName),
                l.app.local.setValue("avatarUrl", this._avatarUrl);
        }),
        (M.prototype.updateChapterBestTime = function (t, e) {
            t = this.getUserChapterVo(t);
            t.best_time >= e ||
                ((t.best_time = e),
                this._chapters.includes(t) || this._chapters.push(t),
                l.app.local.setValue("chapters", this._chapters));
        }),
        (M.prototype.hasUnlockContent = function (t) {
            return -1 < this._unlocked_content_ids.indexOf(t);
        }),
        (M.prototype.hasBranchAwakening = function () {
            return this.hasUnlockContent("branch_awakening");
        }),
        (M.prototype.unlockContent = function (t, e) {
            return (
                !(!t || this.hasUnlockContent(t)) &&
                (this._unlocked_content_ids.push(t),
                e || l.app.local.setValue("unlocked_content_ids", this._unlocked_content_ids),
                !0)
            );
        }),
        (M.prototype.backfillUnlockContentFromChapters = function () {
            if (!this._chapters) return;
            for (var t = !1, e = 0, o = this._chapters; e < o.length; e++) {
                var n = o[e];
                if (n.isPass) {
                    var i = h.default.inst.chapterConf.getChapterVo(n.id);
                    i && i.unlock_content_id && this.unlockContent(i.unlock_content_id, !0) && (t = !0);
                }
            }
            t && l.app.local.setValue("unlocked_content_ids", this._unlocked_content_ids);
        }),
        (M.prototype.passChapter = function (o) {
            return r(this, void 0, void 0, function () {
                var e;
                var n;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                ((e = this.getUserChapterVo(o)).isPass = 1),
                                this._chapters.includes(e) || this._chapters.push(e),
                                (n = h.default.inst.chapterConf.getChapterVo(o)) &&
                                    n.unlock_content_id &&
                                    this.unlockContent(n.unlock_content_id),
                                _.default.inst.gameMode != y.GameMode.NORMAL
                                    ? [3, 3]
                                    : o == this._chapter && o < h.default.inst.chapterConf.getMaxChapter()
                                    ? ((this._chapter += 1),
                                      this.unlockHeroByChapter(),
                                      l.app.local.setValue("chapter", this._chapter),
                                      (_.default.inst.chapter = this._chapter),
                                      [4, k.default.inst.onUnLockChapter()])
                                    : [3, 2]
                            );
                        case 1:
                            t.sent(), S.default.inst.setHonour("chapter", this._chapter - 1), (t.label = 2);
                        case 2:
                            return [3, 4];
                        case 3:
                            _.default.inst.gameMode == y.GameMode.HELL &&
                                o == this._hellChapter &&
                                o < h.default.inst.hellConf.maxChapter &&
                                ((_.default.inst.hell_pass_chapter = this._hellChapter),
                                (this._hellChapter += 1),
                                l.app.local.setValue("hellChapter", this._hellChapter),
                                (_.default.inst.chapter = this._hellChapter)),
                                (t.label = 4);
                        case 4:
                            return l.app.local.setValue("chapters", this._chapters), [2];
                    }
                });
            });
        }),
        (M.prototype.checkChapterBoxReward = function () {
            var t = h.default.inst.chapterRewardConf.getChapterRewardVo(this._chest);
            if (!t) return 2;
            var e = this.getUserChapterVo(t.chapter);
            return e.isPass || e.best_time > t.need_time ? 1 : 0;
        }),
        (M.prototype.getChapterBoxReward = function (t, e) {
            if (1 == this.checkChapterBoxReward()) {
                var o = h.default.inst.chapterRewardConf.getChapterRewardVo(this._chest);
                if (0 != t.length)
                    for (var n = 0; n < t.length; n++) b.DrawingController.inst.addDrawing(t[n].id, t[n].quantity);
                if (0 != e.length)
                    for (n = 0; n < e.length; n++) w.EquipController.inst.addEquip(e[n].id, e[n].quality, e[n].level);
                0 < o.coin && this.addGold(o.coin, !0),
                    0 < o.gem && this.addGem(o.gem, !0),
                    (this._chest += 1),
                    l.app.local.setValue("chest", this._chest);
            }
        }),
        (M.prototype.getUserChapterVo = function (t) {
            for (var e = null, o = 0, n = this._chapters; o < n.length; o++) {
                var i = n[o];
                if (i.id == t) {
                    e = i;
                    break;
                }
            }
            return (e = e || {id: t, best_time: 0, isPass: 0});
        }),
        (M.prototype.passChallengeFb = function (t) {
            var e = h.default.inst.challengeConf.getFbByChapter(t);
            e &&
                ((t = this._challengeMap.get(e.id))
                    ? 0 == t.status && (t.status = 1)
                    : ((t = {id: e.id, status: 1}), this._challenges.push(t), this._challengeMap.set(t.id, t)),
                l.app.local.setValue("challenges", this._challenges));
        }),
        (M.prototype.getChallengeFbData = function (t) {
            return this._challengeMap.get(t);
        }),
        (M.prototype.getChallengeReward = function (t) {
            var e = this._challengeMap.get(t.id);
            if (e) {
                var o,
                    n = [];
                if (
                    (0 < t.gem && (this.addGem(t.gem, !0), n.push({type: g.Prop.Gem, profit: {num: t.gem}})),
                    console.log(t),
                    0 < t.drawing &&
                        ((o = h.default.inst.drawingConf.getRandomDraw(t.drawing)).getLists.forEach(function (t) {
                            b.DrawingController.inst.addDrawing(t.id, t.quantity);
                        }),
                        o.showDatas.forEach(function (t) {
                            n.push(t);
                        })),
                    0 < t.equip)
                )
                    for (var i = 0; i < t.equip; i++) {
                        var r = h.default.inst.equipConf.getRandomEquip();
                        n.push({
                            type: g.Prop.equip,
                            profit: {equip: {id: r.equip_id, quality: 1, level: 1, status: 0, equipType: r.type}}
                        }),
                            w.EquipController.inst.addEquip(r.equip_id, 1, 1);
                    }
                0 < t.gene && (n.push({type: g.Prop.gene, profit: {num: t.gene}}), this.addGene(t.gene)),
                    (function () {
                        var stoneN = t.stones || Math.max(1, Math.floor((t.gem || 0) / 40) || 2);
                        0 < stoneN && GDC.default.inst.addGoods(PT.PropType.EnchantStone, stoneN);
                    })(),
                    0 < n.length &&
                        l.app.gui.openUI(p.UIEnum.ReturnMaterialView, c.LayerEnum.VIEW_LAYER, {
                            type: 1,
                            profitList: n,
                            iconType: 2
                        }),
                    (e.status = 2),
                    l.app.local.setValue("challenges", this._challenges);
            }
        }),
        (M.prototype.saveSetUp = function () {
            l.app.sound.setVoice(this._setup.Music, this._setup.Voice),
                (l.app.platform.isVibrate = this._setup.Shock),
                l.app.local.setValue("setup", this._setup);
        }),
        (M.prototype.onUpdate = function () {}),
        M);
function M() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t._level = 0),
        (t._totalExp = 0),
        (t._gold = 0),
        (t._energy = 0),
        (t._energy_time = 0),
        (t._gem = 0),
        (t._gene = 0),
        (t._skin = 0),
        (t._skins = null),
        (t._skinSkills = null),
        (t._skins_debris = null),
        (t._chapter = 1),
        (t._hellChapter = 1),
        (t._chapters = null),
        (t._chest = 1),
        (t._addGoldPlay = !1),
        (t._addExpPlay = !1),
        (t._addGemPlay = !1),
        (t._addEnergyPlay = !1),
        (t._nickName = ""),
        (t._avatarUrl = ""),
        (t._gemCount = 0),
        (t._goldCount = 0),
        (t._deathPass = 0),
        (t._unlocked_content_ids = []),
        (t._challenges = null),
        (t._challengeMap = new Map()),
        (t.gemArr = []),
        (t.goldArr = []),
        t
    );
}
o.default = i;
