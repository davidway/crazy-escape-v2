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
    l = t("EventTypes"),
    c = t("MoveComp"),
    u = t("HeroController"),
    p = t("ConfData"),
    h = t("FloatFontType"),
    d = t("GameEnums"),
    f = t("MoveSys"),
    y = t("GameMgr"),
    g = t("ResMgr"),
    m = t("GameController"),
    _ = t("GameSetting"),
    v = t("KillType"),
    b = t("GameDataController"),
    w = t("HurtType"),
    C = t("MonsterSkillController"),
    k = t("MonsterBuffType"),
    E = t("GoddessController"),
    L = t("LegendController"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (a = cc.Component),
        i(S, a),
        Object.defineProperty(S.prototype, "offset", {
            get: function () {
                return this._offset;
            },
            enumerable: !1,
            configurable: !0
        }),
        (S.prototype.getAttack = function () {
            return this.atk;
        }),
        Object.defineProperty(S.prototype, "canMove", {
            get: function () {
                return this.isAllowMove && !this.buffMap.has(k.MonsterBuffType.Dizziness);
            },
            enumerable: !1,
            configurable: !0
        }),
        (S.prototype.useSkill = function (t) {
            return this.usingSkills.set(t, t), console.log("怪物技能使用:", t, Date.now() - this.record_time), !0;
        }),
        (S.prototype.delSkill = function (t) {
            console.log("怪物技能结束:", t, Date.now() - this.record_time), this.usingSkills.delete(t);
        }),
        (S.prototype.clearSkills = function () {
            this.usingSkills.clear();
        }),
        (S.prototype.hasSkill = function (t) {
            return this.usingSkills.has(t);
        }),
        (S.prototype.nextSkill = function () {
            this.addSkillToController();
        }),
        (S.prototype.addSkillToController = function () {
            this.record_time = Date.now();
            var t = this.allSkills[this.skillIdx];
            C.MonsterSkillController.addSkill(this, t),
                (this.skillIdx = (this.skillIdx + 1) % this.allSkills.length),
                console.log("怪物技能添加", t);
        }),
        Object.defineProperty(S.prototype, "isDie", {
            get: function () {
                return this._isDie;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(S.prototype, "distance", {
            get: function () {
                return this.moveComp.distance;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(S.prototype, "targetDis", {
            get: function () {
                return this.moveComp.targetDis;
            },
            enumerable: !1,
            configurable: !0
        }),
        (S.prototype.getMoveComp = function () {
            return this.moveComp;
        }),
        (S.prototype.onLoad = function () {
            (this.moveComp = new c.default(this.node)),
                _.GameSetting.inst.isDebug &&
                    this.type != d.MonsterType.FENCE &&
                    ((this.ctx = this.node.addComponent(cc.Graphics)),
                    (this.ctx.lineWidth = 6),
                    (this.ctx.strokeColor = cc.Color.RED));
        }),
        (S.prototype.onEnable = function () {
            (this._isNodeValid = !0),
                this.moveComp &&
                    this.mConf &&
                    ((this.moveComp.speed = this.speedValue),
                    (this.moveComp.radius = this.mSkin.radius),
                    (this.moveComp.AI_Type = this.mConf.ai_type),
                    (this.moveComp.size = this.size),
                    this.setScale(this.mSkin.scale),
                    this.drawCircle()),
                f.MoveSys.addComp(this.moveComp),
                this.moveComp.reset();
        }),
        (S.prototype.onDisable = function () {
            (this._isNodeValid = !1),
                (this.node.opacity = 255),
                C.MonsterSkillController.delMonsterSkills(this),
                f.MoveSys.delComp(this.moveComp);
        }),
        (S.prototype.onDizziness = function (t) {
            this.buffMap.set(k.MonsterBuffType.Dizziness, t), C.MonsterSkillController.onDizziness(this, t);
        }),
        (S.prototype.onDefense = function (t) {
            (this.defence = 1 + (t = void 0 === t ? 0 : t)), this.buffMap.set(k.MonsterBuffType.Defense, 1);
        }),
        (S.prototype.setData = function (t, e) {
            var o;
            (this.mConf = p.default.inst.monsterConf.getMonserVo(t)),
                this.mConf || console.warn("获取怪物配置失败:", t),
                (this.defalutTime = 0.07);
            var n = e.atk_ratio || 0,
                t = e.hp_ratio || 0,
                e = e.speed_ratio || 0;
            (this.target = y.default.inst.checkMapType([d.Map_Group.DEATH]) ? 1 : 0),
                y.default.inst.challengeData &&
                    ((n += y.default.inst.challengeData.atk_ratio),
                    (t += y.default.inst.challengeData.hp_ratio),
                    (e += y.default.inst.challengeData.speed_ratio)),
                y.default.inst.checkMapType([d.Map_Group.DEATH]) &&
                    (this.type == d.MonsterType.BOSS
                        ? ((t +=
                              (null === (o = E.GoddessController.attrData) || void 0 === o ? void 0 : o.boss_hp) || 0),
                          (e +=
                              (null === (o = E.GoddessController.attrData) || void 0 === o ? void 0 : o.boss_speed) ||
                              0))
                        : ((t +=
                              (null === (o = E.GoddessController.attrData) || void 0 === o ? void 0 : o.mob_hp) || 0),
                          (e +=
                              (null === (o = E.GoddessController.attrData) || void 0 === o ? void 0 : o.mob_speed) ||
                              0),
                          (n +=
                              (null === (o = E.GoddessController.attrData) || void 0 === o ? void 0 : o.mob_atk) ||
                              0))),
                (this.isRewardMoster = 1 == this.mConf.is_reward),
                (this.move_time = 0),
                this.hurtMap.clear(),
                this.buffMap.clear(),
                (this.mSkin = p.default.inst.monsterSkinConf.getMonsterSkinVo(this.mConf.skin_id)),
                (this.maxHp = this.hp = Math.ceil(this.mConf.hp * (1 + t))),
                (this.speedValue = Math.round(this.mConf.speed * (1 + e))),
                (this.atk = Math.ceil(this.mConf.attack * (1 + n))),
                (this._offset.x = this.mSkin.offset.x),
                (this._offset.y = this.mSkin.offset.y),
                (this._isDie = !1),
                this.moveComp && (this.moveComp.targetDis = Number.MAX_SAFE_INTEGER),
                (this.isAllowMove = !0),
                (this.hurtTime = this.defalutTime),
                (this.hurtIndex = 0),
                (this.normalValue = 0),
                (this.critValue = 0),
                (this.speedRate = 1),
                this.usingSkills.clear(),
                (this.allSkills.length = 0),
                (this.skillIdx = 0),
                this.initSkill(),
                this.moveComp &&
                    this.mConf &&
                    ((this.moveComp.speed = this.speedValue),
                    (this.moveComp.radius = this.mSkin.radius),
                    (this.moveComp.AI_Type = this.mConf.ai_type),
                    (this.moveComp.size = this.size),
                    this.setScale(this.mSkin.scale),
                    this.drawCircle());
        }),
        (S.prototype.initSkill = function () {
            if (this.mConf.skill && 0 != this.mConf.skill.length) {
                for (var t = y.default.inst.calcChapter(), e = 0, o = this.mConf.skill; e < o.length; e++) {
                    var n = o[e],
                        i = n.id,
                        r = p.default.inst.monsterSkillConf.getMonsterSkillVo(i);
                    r &&
                        ((i = this.cloneSkill(r)),
                        (r = n.delay || 0),
                        (r += (n.delay_add || 0) * (t - 1)),
                        (i.delay = cc.misc.clampf(r, 0, Number.MAX_SAFE_INTEGER)),
                        (i.next = n.next || 8),
                        (i.finish = n.finish || 9),
                        this.allSkills.push(i));
                }
                this.skill_delay = this.mConf.skill_delay;
            }
        }),
        (S.prototype.canBeHurt = function (t) {
            return !this.hurtMap.has(t) || y.default.inst.playTime >= this.hurtMap.get(t);
        }),
        (S.prototype.kill = function (t) {
            void 0 === t && (t = v.KillType.Die),
                (this.dieType = t),
                (this._isDie = !0),
                this.onDie(),
                f.MoveSys.delComp(this.moveComp),
                C.MonsterSkillController.delMonsterSkills(this);
        }),
        (S.prototype.onLostHpRate = function (t) {
            t = Math.round(this.hp * t);
            this.onLostHp({type: w.HurtType.Normal, value: t}, null);
        }),
        (S.prototype.onLostHp = function (t, e) {
            e && 0 < e.injury_time && this.hurtMap.set(e.skill_id, y.default.inst.playTime + e.injury_time),
                (t = L.modifyHurt(t, e, this, null)),
                (this._lastHitSkill = e),
                this.lostHp(t),
                this.isDie || L.afterHurt(t, e, this);
        }),
        (S.prototype.lostHp = function (t) {
            var e;
            this._isDie ||
                ((e = t.value),
                this.buffMap.has(k.MonsterBuffType.Defense) && (e = Math.floor(e * this.defence)),
                t.type == w.HurtType.Crit ? (this.critValue += e) : (this.normalValue += e),
                this.playHurt(t),
                (this.hp -= e),
                this.hp <= 0 &&
                    ((y.default.inst.killNum += 1),
                    b.default.inst.setKillNum(y.default.inst.killNum),
                    L.onMonsterKilled(this, this._lastHitSkill),
                    this.kill(),
                    (this.hurtTime = 0)));
        }),
        (S.prototype.attack = function (t) {
            (this.atk_time -= t),
                this.atk_time <= 0 &&
                    ((t = !0),
                    y.default.inst.checkMapType([d.Map_Group.DEATH]) &&
                        ((t = y.default.inst.isAtkHero),
                        this.targetDis <= this.mConf.atk_radius + E.GoddessController.radius &&
                            (E.GoddessController.lostHp(this.atk),
                            (this.atk_time = this.mConf.atk_time / y.default.inst.timeScale),
                            this.type == d.MonsterType.BOSS && ((this.isAllowMove = !1), this.onAttack()))),
                    t &&
                        this.distance <= this.mConf.atk_radius &&
                        (u.HeroController.lostHp(this.atk),
                        (this.atk_time = this.mConf.atk_time / y.default.inst.timeScale),
                        0 < (t = u.HeroController.getAtrr("rebound_rate")) &&
                            ((t = Math.floor(this.mConf.attack * t)),
                            this.lostHp({type: w.HurtType.Normal, value: t}))));
        }),
        (S.prototype.onUpdate = function (t) {
            !this._isDie &&
                this.node.parent &&
                (0 < this.skill_delay &&
                    ((this.skill_delay -= t), this.skill_delay <= 0 && this.addSkillToController()),
                this.updateBuff(t),
                this.buffMap.has(k.MonsterBuffType.Dizziness) || this.attack(t));
        }),
        (S.prototype.updateBuff = function (t) {
            if (0 != this.buffMap.size)
                for (var e = 0, o = Array.from(this.buffMap.keys()); e < o.length; e++) {
                    var n = o[e],
                        i = this.buffMap.get(n);
                    (i -= t) <= 0 ? this.buffMap.delete(n) : this.buffMap.set(n, i);
                }
        }),
        (S.prototype.playHurt = function (t) {
            s.app.event.emit(l.EventType.On_Float, {
                pt: this.moveComp.getCenterPos().add(cc.v3(0, 30)),
                msg: "" + t.value,
                type: t.type == w.HurtType.Crit ? h.FloatFontType.Crit : h.FloatFontType.Normal
            });
        }),
        (S.prototype.cloneSkill = function (t) {
            var e,
                o = {};
            for (e in t) o[e] = t[e];
            return (o.duration = t.duration), (o.useTime = 0), (o.ower_hurt = this.mConf.attack), (o.delay = 0), o;
        }),
        (S.prototype.onDie = function () {
            m.GameController.inst.delMonster(this.node), this.checkDrop(), this.recycle();
        }),
        (S.prototype.recycle = function () {
            g.default.inst.putNodeToPool(this.node);
        }),
        (S.prototype.drawCircle = function () {
            this.ctx &&
                (this.ctx.clear(),
                this.ctx.circle(this._offset.x, this._offset.y, this.mSkin.radius),
                (this.ctx.fillColor = cc.Color.RED),
                this.ctx.fill());
        }),
        (S.prototype.getCircle = function () {
            if (!this.moveComp) return null;
            var t = this.moveComp.getCenterPos();
            return {position: cc.v2(t.x, t.y), raduis: this.mSkin.radius};
        }),
        (S.prototype.showArrow = function () {}),
        (S.prototype.hideArrow = function () {}),
        (S.prototype.isNodeValid = function () {
            return this._isNodeValid;
        }),
        (S.prototype.getPos = function () {
            var t;
            return (null === (t = this.moveComp) || void 0 === t ? void 0 : t.getCenterPos()) || cc.v3();
        }),
        r([t], S));
function S() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.moveComp = null),
        (t.mConf = null),
        (t.mSkin = null),
        (t.hp = 0),
        (t.maxHp = 0),
        (t.atk = 0),
        (t.speed = cc.v3()),
        (t.speedValue = 0),
        (t.move_time = 0),
        (t.size = cc.v2()),
        (t.hurtMap = new Map()),
        (t.speedRate = 1),
        (t.isRewardMoster = !1),
        (t.skill_delay = 0),
        (t.usingSkills = new Map()),
        (t.allSkills = []),
        (t.skillIdx = 0),
        (t.target = 0),
        (t._offset = cc.v3(0, 0)),
        (t.atk_time = 0),
        (t.hurtTime = 0),
        (t.defalutTime = 0),
        (t.normalValue = 0),
        (t.critValue = 0),
        (t.hurtIndex = 0),
        (t._isNodeValid = !1),
        (t.dieType = v.KillType.Die),
        (t.defence = 1),
        (t.buffMap = new Map()),
        (t.isAllowMove = !0),
        (t.record_time = 0),
        (t.ctx = null),
        t
    );
}
o.default = t;
