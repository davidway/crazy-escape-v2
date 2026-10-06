var t = require;
var e = module;
var o = exports;
var n =
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
    i =
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
Object.defineProperty(o, "__esModule", {value: !0}), (o.HeroController = void 0);
var c = t("App"),
    r = t("LayerMgr"),
    a = t("ResMgr"),
    u = t("ArrayUtil"),
    p = t("EventTypes"),
    s = t("ResUtils"),
    l = t("UIEnum"),
    h = t("ConfData"),
    d = t("GameSetting"),
    f = t("FloatFontType"),
    y = t("GameEnums"),
    g = t("SkillEnum"),
    m = t("Hero"),
    _ = t("HeroSkillController"),
    v = t("GameMgr"),
    b = t("EquipController"),
    w = t("EvolveController"),
    C = t("GameController"),
    k = t("GameDataController"),
    E = t("GuideController"),
    S = t("HolidayController"),
    M = t("SkinAttrController"),
    R = t("UserDataController"),
    Q = t("DualEvolveRegistry"),
    Q2 = t("LegendController"),
    t =
        (Object.defineProperty(T.prototype, "isDie", {
            get: function () {
                return this._isDie;
            },
            enumerable: !1,
            configurable: !0
        }),
        (T.prototype.setLayer = function (t, e, o) {
            (this.layer = t),
                this.heroSkill.setLayer(e, o),
                (this._playerVo = {
                    level: 1,
                    atk: 0,
                    baseAtk: 0,
                    hp: 0,
                    maxHp: 0,
                    baseHp: 0,
                    speed: 0,
                    baseSpeed: 0,
                    crit_rate: 0,
                    baseCrit_rate: 0,
                    crit_hurt_rate: 1,
                    skin: 0,
                    pickUp: 0,
                    basePickUp: 0,
                    skills: new Map(),
                    exp: 0,
                    gold: 0,
                    gold_rate: 1,
                    expRate: 0,
                    skillUseRate: 0,
                    skillHurtRate: 0,
                    areaRate: 0,
                    durationRate: 0,
                    skillSpeedRate: 0,
                    angularRate: 0,
                    defenseRate: 0,
                    add_hp_rate: 0,
                    hurt_rate: 0,
                    rebound_rate: 0,
                    dodge_rate: 0,
                    seckill_rate: 0
                });
        }),
        (T.prototype.setHeroUI = function (t) {
            this.heroUI = t;
        }),
        (T.prototype.setHpBar = function (t) {
            this.hpBar = t;
        }),
        (T.prototype.addGoods = function (t, e) {
            var o = 0;
            this.goods.has(t) && (o = this.goods.get(t).count),
                this.goods.set(t, {id: t, count: (o += e)}),
                k.default.inst.setGoods(Array.from(this.goods.values()));
        }),
        (T.prototype.getGoodsNum = function () {
            var e = 0;
            return (
                this.goods.forEach(function (t) {
                    e += t.count;
                }),
                e
            );
        }),
        (T.prototype.addEquips = function (t, e) {
            this.equips.push({id: t, quality: e}), k.default.inst.setEquips(this.equips);
        }),
        (T.prototype.getEquipsNum = function () {
            return this.equips.length;
        }),
        (T.prototype.addDrawings = function (t, e) {
            var o = this.drawings.get(t);
            ((o = o || {id: t, count: 0}).count += e),
                this.drawings.set(t, o),
                k.default.inst.setDrawings(Array.from(this.drawings.values()));
        }),
        (T.prototype.getEquips = function () {
            return this.equips;
        }),
        (T.prototype.getDrawings = function () {
            return 0 < this.drawings.size ? Array.from(this.drawings.values()) : [];
        }),
        (T.prototype.setWudi = function (t) {
            console.log("无敌", t), (this.wudi_time = t), c.app.event.emit(p.EventType.Game_Hero_Wudi_Start);
        }),
        (T.prototype.getGoods = function () {
            return Array.from(this.goods.values());
        }),
        (T.prototype.clearSkills = function () {
            this.heroSkill.clearSkills();
        }),
        (T.prototype.clear = function () {
            this.clearSkills(),
                this.hero && (this.hero.parent = null),
                (this.newExp = 0),
                (this.hurtValue = 0),
                this._playerVo &&
                    (this._playerVo.skills.clear(),
                    (this._playerVo.level = 1),
                    (this._playerVo.exp = 0),
                    (this._playerVo.gold = 0));
        }),
        (T.prototype.addHero = function (e) {
            return n(this, void 0, void 0, function () {
                return i(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.hero ? [3, 2] : [4, this.getHero()];
                        case 1:
                            t.sent(), (t.label = 2);
                        case 2:
                            return (
                                (this.hero.position = e),
                                (this.hero.parent = this.layer),
                                (this._isDie = !1),
                                (this.heroPos.x = e.x),
                                (this.heroPos.y = e.y),
                                (this.hero.zIndex = 0),
                                (this.centerPos.x = this.heroPos.x),
                                (this.centerPos.y = this.heroPos.y + this.offsetY),
                                this.heroUI.setPosition(this.heroPos),
                                this.initPlayerData(),
                                [2]
                            );
                    }
                });
            });
        }),
        (T.prototype.heroMove = function (t) {
            this.hero &&
                !this._isDie &&
                (this.heroPos.addSelf(t),
                this.hero.setPosition(this.heroPos),
                0 != t.x && this.heroComp.setDir(t.x < 0 ? -1 : 1),
                this.heroComp.onMove(),
                (this.hero.zIndex = v.default.inst.getZindex(this.heroPos)),
                (this.centerPos.x = this.heroPos.x),
                (this.centerPos.y = this.heroPos.y + this.offsetY),
                this.heroUI.setPosition(this.heroPos));
        }),
        (T.prototype.HeroStop = function () {
            !this.hero || this._isDie || this._playerVo.hp <= 0 || this.heroComp.onIdle();
        }),
        (T.prototype.heroAttack = function (t) {
            void 0 === t && (t = 1), !this.hero || this._isDie || this._playerVo.hp <= 0 || this.heroComp.onAttack(t);
        }),
        (T.prototype.lostHp = function (t) {
            var e;
            t <= 0 ||
                this._playerVo.hp <= 0 ||
                (0 < this.wudi_time
                    ? console.log("无敌免伤", this.wudi_time.toFixed(2))
                    : (0 < (e = this.getAtrr("dodge_rate")) && Math.random() <= e) ||
                      ((e =
                          this._playerVo.defenseRate - this.evolveAttr.Defense - M.default.inst.getAttr("defenseRate")),
                      (t = cc.misc.clampf(Math.ceil(t * e), 0, Number.MAX_SAFE_INTEGER)),
                      c.app.platform.vibrateShort(),
                      this.heroComp.onHurt(),
                      (this._playerVo.hp -= t),
                      this.hpBar.updateBar(this._playerVo.hp / this._playerVo.maxHp),
                      (this.hurtValue += t),
                      Q2.onHeroHurt(),
                      c.app.event.emit(p.EventType.Game_Hero_Lost_Hp),
                      k.default.inst.setHeroHp(this._playerVo.hp),
                      this._playerVo.hp <= 0 &&
                          (c.app.sound.playEffect("死亡音效"),
                          C.GameController.inst.enqueue(this, this.onGamePause, !0))));
        }),
        (T.prototype.onGamePause = function () {
            this.playHurt(),
                v.default.inst.gamePause(),
                this.heroSkill.pauseSkills(),
                this.heroComp.onDie(),
                this.revive_count <= 0
                    ? ((this.revive_count += 1),
                      k.default.inst.setRevive(this.revive_count),
                      c.app.gui.openUI(l.UIEnum.ReviveView, r.LayerEnum.VIEW_LAYER))
                    : this.onRevive(!1);
        }),
        (T.prototype.onGoddessDie = function () {
            return (
                this.heroSkill.pauseSkills(),
                this.revive_count <= 0
                    ? ((this.revive_count += 1),
                      k.default.inst.setRevive(this.revive_count),
                      c.app.gui.openUI(l.UIEnum.ReviveView, r.LayerEnum.VIEW_LAYER),
                      !0)
                    : (this.onRevive(!1), !1)
            );
        }),
        (T.prototype.onRevive = function (t) {
            if (this._playerVo && !(0 < this._playerVo.hp)) {
                if (t)
                    return (
                        (this._playerVo.hp = this._playerVo.maxHp),
                        this.hpBar.updateBar(this._playerVo.hp / this._playerVo.maxHp),
                        this.heroComp.onIdle(),
                        v.default.inst.gameResume(),
                        c.app.event.emit(p.EventType.Game_Get_Bomb),
                        c.app.sound.playEffect("复活"),
                        void o.HeroController.setWudi(d.GameSetting.inst.wudi_sce)
                    );
                (this._isDie = !0), c.app.event.emit(p.EventType.Game_Fail);
            }
        }),
        (T.prototype.addHp = function (t) {
            0 != (t = Math.floor(t)) &&
                this._playerVo.hp != this._playerVo.maxHp &&
                (0 < this._playerVo.add_hp_rate + M.default.inst.getAttr("addHpRate") &&
                    (console.warn("额外回血", this._playerVo.add_hp_rate, M.default.inst.getAttr("addHpRate")),
                    (t = Math.floor(t * (1 + this._playerVo.add_hp_rate)))),
                (t += M.default.inst.getAttr("addHp")),
                (this._playerVo.hp = cc.misc.clampf(this._playerVo.hp + t, 0, this._playerVo.maxHp)),
                k.default.inst.setHeroHp(this._playerVo.hp),
                this.hpBar.updateBar(this._playerVo.hp / this._playerVo.maxHp),
                c.app.event.emit(p.EventType.On_Float, {pt: this.heroPos, msg: "" + t, type: f.FloatFontType.hp}));
        }),
        (T.prototype.addHpRate = function (t) {
            t = Math.floor(this._playerVo.maxHp * t);
            this.addHp(t);
        }),
        (T.prototype.addFullHp = function () {
            var t = this._playerVo.maxHp - this._playerVo.hp;
            this.addHp(t);
        }),
        (T.prototype.addExp = function (t) {
            this.newExp += Math.floor(t * this._playerVo.expRate);
        }),
        (T.prototype.updateExp = function () {
            var t;
            0 != this.newExp &&
                this.canAddExp &&
                ((t = 0),
                this.newExp >= this.stepExp
                    ? ((t = this.stepExp), (this.newExp -= this.stepExp))
                    : ((t = this.newExp), (this.newExp = 0)),
                (t += this._playerVo.exp) >= this._levelVo.needExp
                    ? (this.addExp(t - this._levelVo.needExp),
                      (this.canAddExp = !1),
                      c.app.event.emit(p.EventType.Game_Level_Up, {level: this._playerVo.level}),
                      (this._playerVo.exp = 0),
                      (this._playerVo.level += 1),
                      (this._levelVo = h.default.inst.playerLevelConf.getPlayerLevelVo(this._playerVo.level)),
                      (this.stepExp = Math.ceil(0.04 * this._levelVo.needExp)))
                    : ((this._playerVo.exp = t), c.app.event.emit(p.EventType.Game_Add_Exp, t / this._levelVo.needExp)),
                k.default.inst.setLevelAndExp(this._playerVo.level, this._playerVo.exp));
        }),
        (T.prototype.addGold = function (t) {
            (this._playerVo.gold += t),
                k.default.inst.setGold(this._playerVo.gold),
                c.app.event.emit(p.EventType.Game_Add_Gold, this._playerVo.gold);
        }),
        (T.prototype.addSkill = function (t, e) {
            var o, n;
            void 0 === e && (e = 1),
                this._playerVo.skills.has(t)
                    ? ((o = this._playerVo.skills.get(t)),
                      (n = cc.misc.clampf(o.level + 1, 1, 5)),
                      (n = h.default.inst.playerSkillConf.getPlayerSkillLevelConfVo(t, n)),
                      (o.level = n.level),
                      (o.useTime = 0),
                      (o.confVo = n),
                      this.heroSkill.levelUp(t),
                      k.default.inst.addSkill(t, n.level))
                    : (0 < (o = h.default.inst.playerSkillConf.getSkillIdByTopId(t)) &&
                          (this._playerVo.skills.delete(o), this.heroSkill.delSkill(o), k.default.inst.delSkill(o)),
                      h.default.inst.playerSkillConf.getSkillInfoVo(t).isUltimate && (e = 1),
                      (n = {
                          id: t,
                          level: (n = h.default.inst.playerSkillConf.getPlayerSkillLevelConfVo(t, e)).level,
                          useTime: 0,
                          confVo: n
                      }),
                      this._playerVo.skills.set(t, n),
                      this.heroSkill.addSkill(n),
                      k.default.inst.addSkill(n.id, n.level)),
                this.calcAttr();
        }),
        (T.prototype.calcAttr = function () {
            var e = this,
                o = [],
                n = [];
            this._playerVo.skills.forEach(function (t) {
                (t.confVo.type == g.SkillGroup.ACTIVE_SKILL ? o : n).push(t);
            });
            var t = R.default.inst.skin,
                i = h.default.inst.playerSkinConf.getPlayerSkinVoById(t),
                r = {
                    atk: 0,
                    hp: 0,
                    speed: 0,
                    pickUp: 0,
                    skillLv: 0,
                    atkRate: this.equipAttr.atkRate,
                    hpRate: this.equipAttr.hpRate,
                    expRate: this.equipAttr.expRate,
                    skillUseRate: this.equipAttr.skillUseRate,
                    skillHurtRate: this.equipAttr.skillHurtRate,
                    defenseRate: this.equipAttr.defenseRate,
                    areaRate: this.equipAttr.areaRate,
                    durationRate: this.equipAttr.durationRate,
                    heroSpeedRate: this.equipAttr.heroSpeedRate,
                    angularRate: this.equipAttr.angularRate,
                    skillSpeedRate: this.equipAttr.skillSpeedRate,
                    pickupRate: this.equipAttr.pickupRate,
                    goldRate: this.equipAttr.goldRate,
                    critRate: this.equipAttr.critRate,
                    critHurtRate: this.equipAttr.critHurtRate,
                    add_hp_rate: this.equipAttr.add_hp_rate,
                    hurt_rate: this.equipAttr.hurt_rate,
                    rebound_rate: this.equipAttr.rebound_rate,
                    dodge_rate: this.equipAttr.dodge_rate,
                    seckill_rate: this.equipAttr.seckill_rate
                };
            n.forEach(function (t) {
                t = v.default.inst.getSkillEnhance(t.confVo.enhance_all);
                t &&
                    ((r.atkRate += t.atkRate),
                    (r.hpRate += t.hpRate),
                    (r.expRate += t.expRate),
                    (r.skillUseRate += t.skillUseRate),
                    (r.skillHurtRate += t.skillHurtRate),
                    (r.defenseRate += t.defenseRate),
                    (r.areaRate += t.areaRate),
                    (r.durationRate += t.durationRate),
                    (r.heroSpeedRate += t.heroSpeedRate),
                    (r.angularRate += t.angularRate),
                    (r.skillSpeedRate += t.skillSpeedRate),
                    (r.pickupRate += t.pickupRate),
                    (r.goldRate += t.goldRate),
                    (r.critRate += t.critRate),
                    (r.critHurtRate += t.critHurtRate));
            }),
                (this._playerVo.atk = Math.floor(this._playerVo.baseAtk * (1 + r.atkRate)));
            t = Math.floor(this._playerVo.baseHp * (1 + r.hpRate + M.default.inst.getAttr("hp")));
            (this._playerVo.hp += t - this._playerVo.maxHp),
                (this._playerVo.maxHp = t),
                (this._playerVo.speed = this._playerVo.baseSpeed * (1 + r.heroSpeedRate)),
                (this._playerVo.pickUp = this._playerVo.basePickUp * (1 + r.pickupRate)),
                (this._playerVo.expRate = 1 + r.expRate),
                (this._playerVo.skillUseRate = cc.misc.clamp01(1 - r.skillUseRate)),
                (this._playerVo.skillHurtRate = cc.misc.clamp01(1 - r.skillHurtRate)),
                (this._playerVo.defenseRate = cc.misc.clamp01(1 - r.defenseRate)),
                (this._playerVo.areaRate = 1 + r.areaRate),
                (this._playerVo.durationRate = 1 + r.durationRate),
                (this._playerVo.angularRate = 1 + r.angularRate),
                (this._playerVo.skillSpeedRate = 1 + r.skillSpeedRate),
                (this._playerVo.crit_rate = this._playerVo.baseCrit_rate + r.critRate),
                (this._playerVo.gold_rate = 1 + r.goldRate),
                (this._playerVo.crit_hurt_rate = i.crit_hurt_rate + r.critHurtRate),
                (this._playerVo.add_hp_rate = r.add_hp_rate),
                (this._playerVo.hurt_rate = r.hurt_rate),
                (this._playerVo.rebound_rate = r.rebound_rate),
                (this._playerVo.dodge_rate = r.dodge_rate),
                (this._playerVo.seckill_rate = r.seckill_rate),
                o.forEach(function (t) {
                    e.heroSkill.updateSkill(t.id);
                });
        }),
        (T.prototype.getAtrr = function (t) {
            return this._playerVo[t];
        }),
        (T.prototype.getEvolveAtrr = function (t) {
            return this.evolveAttr || (this.evolveAttr = w.default.inst.getTalent()), this.evolveAttr[t];
        }),
        (T.prototype.getHeroPos = function () {
            return this.heroPos;
        }),
        (T.prototype.getHeroCenter = function () {
            return this.centerPos;
        }),
        (T.prototype.getHeroRadius = function () {
            return 30;
        }),
        (T.prototype.getHeroSpeed = function () {
            return this._playerVo.speed * v.default.inst.timeScale;
        }),
        (T.prototype.getHeroPickUpDis = function () {
            return this._playerVo.pickUp;
        }),
        (T.prototype.getHeroSkill = function (t) {
            return this._playerVo.skills.get(t);
        }),
        (T.prototype.getHeroSkills = function () {
            return Array.from(this._playerVo.skills.values());
        }),
        (T.prototype.hasSkill = function (t) {
            return this._playerVo.skills.has(t);
        }),
        (T.prototype.getUpgradeSkillList = function () {
            var i = [],
                r = [],
                t = this.getHeroSkills(),
                a = new Map(),
                e = v.default.inst.chapterVo;
            t.forEach(function (t) {
                (t.confVo.type == g.SkillGroup.ACTIVE_SKILL ? i : r).push(t), a.set(t.id, t.level);
            });
            function s(t, e, o) {
                (c = {id: e, level: o}), n.push(c), t == g.SkillGroup.ACTIVE_SKILL && l.push(c);
            }
            var o = h.default.inst.playerSkillConf.getRoundSkills(),
                n = [],
                l = [],
                c = null;
            return (
                o.forEach(function (t) {
                    var e,
                        o,
                        n = null;
                    a.has(t)
                        ? ((e = a.get(t)),
                          (n = h.default.inst.playerSkillConf.getPlayerSkillLevelConfVo(t, e)).isUltimate ||
                              (e < 5
                                  ? s(n.type, t, e + 1)
                                  : n.type != g.SkillGroup.ACTIVE_SKILL ||
                                    ((o = h.default.inst.playerSkillConf.getSkillInfoVo(t)) &&
                                        Q.getEligibleEvolveIds(a, o).forEach(function (e) {
                                            s(n.type, e, 1);
                                        }))))
                        : (n = h.default.inst.playerSkillConf.getPlayerSkillLevelConfVo(t, 1)).isUltimate ||
                          (n.type == g.SkillGroup.ACTIVE_SKILL && i.length < 6
                              ? ((o = h.default.inst.playerSkillConf.getSkillInfoVo(n.skill_id)) &&
                                    0 < o.top_id &&
                                    a.has(o.top_id)) ||
                                s(n.type, t, 1)
                              : n.type == g.SkillGroup.AUXILIARY_SKILL && r.length < 6 && s(n.type, t, 1));
                }),
                console.log("[HeroController]-->[line:631]:", t, e, n),
                this.act_skill_num < e.act_skill_num && 3 <= l.length
                    ? ((this.act_skill_num += 1),
                      console.log("主动技能优先", l.length, this.act_skill_num, e.act_skill_num),
                      l)
                    : n
            );
        }),
        (T.prototype.initPlayerData = function () {
            var e = this;
            (this.revive_count = 0),
                (this.wudi_time = 0),
                (this.act_skill_num = 0),
                (this.equips.length = 0),
                this.drawings.clear(),
                this.goods.clear(),
                Q2.clearCombatState();
            var o,
                t,
                n = 0,
                i = 0,
                r = 0,
                a = 0,
                s = R.default.inst.skin,
                l = h.default.inst.playerSkinConf.getPlayerSkinVoById(s);
            (n += l.hp),
                (i += l.attack),
                (r += l.speed),
                (a += l.pickUp),
                (this.equipAttr = b.EquipController.inst.calcHeroEquipAttr()),
                (this.evolveAttr = w.default.inst.getTalent()),
                (this.canAddExp = !0),
                (i += this.equipAttr.atk + this.evolveAttr.Atk),
                (n += this.equipAttr.hp + this.evolveAttr.Hp),
                (r += this.equipAttr.speed + this.evolveAttr.Speed),
                (a += this.equipAttr.pickUp),
                console.log("[HeroController]-->[line:379]:装备属性", this.equipAttr, this.evolveAttr),
                (this._playerVo.baseAtk = this._playerVo.atk = i),
                (this._playerVo.baseHp = this._playerVo.maxHp = this._playerVo.hp = n),
                (this._playerVo.basePickUp = this._playerVo.pickUp = a),
                (this._playerVo.baseSpeed = this._playerVo.speed = r),
                (this._playerVo.baseCrit_rate = l.crit),
                (this._playerVo.crit_hurt_rate = l.crit_hurt_rate || 2),
                (this._playerVo.skin = s),
                this._playerVo.skills.clear(),
                this.heroSkill.clearSkills(),
                this.heroComp.setSkin(s),
                console.log("[HeroController]-->[line:661]:", this._playerVo),
                v.default.inst.isNewGame
                    ? ((s = b.EquipController.inst.getMainSkillId()),
                      (t = this.equipAttr.skillLv),
                      this.addSkill(s, t),
                      0 == E.GuideController.getGuide("Novicepass") && this.addSkill(g.HeroSkillType.LightDragon, 1))
                    : ((o = 0),
                      k.default.inst.getValue("goods").forEach(function (t) {
                          e.goods.set(t.id, t), (o += t.count);
                      }),
                      (S.default.inst.dropNum = o),
                      k.default.inst.getValue("drawings").forEach(function (t) {
                          e.drawings.set(t.id, t);
                      }),
                      (t = k.default.inst.getValue("equips")),
                      (this.equips = u.default.clone(t)),
                      (t = k.default.inst.getValue("level")),
                      (this._playerVo.level = t),
                      (t = k.default.inst.getValue("exp")),
                      (this._playerVo.exp = t),
                      (t = k.default.inst.getValue("gold")),
                      (this._playerVo.gold = t),
                      (this.revive_count = k.default.inst.getValue("revive")),
                      k.default.inst.getValue("skills").forEach(function (t) {
                          e.addSkill(t.id, t.level);
                      }),
                      0 < (t = k.default.inst.getValue("hp")) &&
                          ((this._playerVo.hp = t), this.hpBar.updateBar(this._playerVo.hp / this._playerVo.maxHp)),
                      (this.act_skill_num = 100)),
                (this._levelVo = h.default.inst.playerLevelConf.getPlayerLevelVo(this._playerVo.level)),
                (this.stepExp = Math.ceil(0.04 * this._levelVo.needExp)),
                v.default.inst.isNewGame ||
                    c.app.event.emit(p.EventType.Game_Add_Exp, this._playerVo.exp / this._levelVo.needExp),
                c.app.event.emit(p.EventType.Game_Hero_Init);
        }),
        (T.prototype.getSkinSkillId = function () {
            var t = R.default.inst.skin,
                e = h.default.inst.playerSkinConf.getPlayerSkinVoById(t),
                o = [e.skill_id];
            return 0 < e.mb_id && R.default.inst.getSkinSkillStatus(t) && o.push(e.mb_id), o;
        }),
        (T.prototype.getHero = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return i(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = this),
                                [
                                    4,
                                    a.default.inst.getNodeFromPool(
                                        s.ResUtils.Prefabs.Hero.url,
                                        s.ResUtils.Prefabs.Hero.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (e.hero = t.sent()), (this.heroComp = this.hero.getComponent(m.default)), [2];
                    }
                });
            });
        }),
        (T.prototype.getHeroNode = function () {
            return this.hero;
        }),
        (T.prototype.onUpdate = function (t) {
            v.default.inst.onStatus(y.GameStatus.PAUSE | y.GameStatus.OVER) ||
                this._isDie ||
                (this.updateWudi(t),
                this.updateExp(),
                this.heroSkill.onUpdate(t),
                (this.hurtTime -= t),
                this.playHurt());
        }),
        (T.prototype.updateWudi = function (t) {
            0 < this.wudi_time &&
                ((this.wudi_time -= t), this.wudi_time <= 0 && c.app.event.emit(p.EventType.Game_Hero_Wudi_End));
        }),
        (T.prototype.playHurt = function () {
            this.hurtTime <= 0 &&
                0 < this.hurtValue &&
                (c.app.event.emit(p.EventType.On_Float, {
                    pt: this.getHeroCenter(),
                    msg: "" + this.hurtValue,
                    type: f.FloatFontType.Normal
                }),
                (this.hurtTime = 0.15),
                (this.hurtValue = 0));
        }),
        T);
function T() {
    (this.layer = null),
        (this.hero = null),
        (this.heroComp = null),
        (this._playerVo = null),
        (this._levelVo = null),
        (this.heroPos = cc.Vec3.ZERO),
        (this.centerPos = cc.Vec3.ZERO),
        (this.offsetY = 30),
        (this.hurtValue = 0),
        (this.hurtTime = 0.1),
        (this.heroSkill = new _.default()),
        (this.hpBar = null),
        (this.heroUI = null),
        (this.equipAttr = null),
        (this.evolveAttr = null),
        (this.goods = new Map()),
        (this.equips = []),
        (this.drawings = new Map()),
        (this.act_skill_num = 0),
        (this.revive_count = 0),
        (this.wudi_time = 0),
        (this.newExp = 0),
        (this.stepExp = 0),
        (this.canAddExp = !0);
}
o.HeroController = new t();
