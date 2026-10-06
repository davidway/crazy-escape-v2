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
    u = t("DelayUtil"),
    p = t("EventTypes"),
    h = t("UIEnum"),
    d = t("GameController"),
    f = t("GameDataController"),
    y = t("GoddessController"),
    g = t("HeroController"),
    m = t("HolidayController"),
    _ = t("UserDataController"),
    v = t("ConfData"),
    b = t("GameSetting"),
    w = t("GameEnums"),
    C = t("ValueTypes"),
    k = t("GameResLoader"),
    i =
        ((s = e.Singleton()),
        i(E, s),
        Object.defineProperty(E.prototype, "timeScale", {
            get: function () {
                return this._timeScale;
            },
            set: function (t) {
                (this._timeScale = t), l.app.event.emit(p.EventType.Game_Time_Scale);
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(E.prototype, "gameMode", {
            get: function () {
                return this._gameMode;
            },
            set: function (t) {
                (this._gameMode = t), l.app.event.emit(p.EventType.Game_Mode_Change);
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(E.prototype, "isAtkHero", {
            get: function () {
                return 2 == this.deathMode;
            },
            enumerable: !1,
            configurable: !0
        }),
        (E.prototype.mapCameraMove = function (t) {
            var e,
                o = this.mapCamera.position;
            d.GameController.inst.mapType == w.MapType.VERTICAL_MAP
                ? ((e = g.HeroController.getHeroPos()), (e = cc.misc.clampf(e.x, -20, 20)), (o.x = e), (o.y += t.y))
                : o.addSelf(t),
                (this.mapCamera.position = o);
        }),
        (E.prototype.getMapCameraPos = function () {
            return this.mapCamera.position;
        }),
        (E.prototype.getZindex = function (t) {
            return this.getMapCameraPos().y - t.y;
        }),
        (E.prototype.cameraTween = function (e, o) {
            var n = this;
            return new Promise(function (t) {
                cc.tween(n.camera.node)
                    .to(o, {position: e})
                    .call(function () {
                        t();
                    })
                    .start();
            });
        }),
        (E.prototype.cameraScale = function (t, e) {
            this.camera || (this.camera = this.mapCamera.getComponent(cc.Camera)),
                (t < 1 && 1 < E.inst.timeScale) ||
                    ((this.cameraObj.from = this.camera.zoomRatio),
                    (this.cameraObj.to = t),
                    (this.cameraObj.duation = e),
                    (this.cameraObj.time = 0) == e && ((this.camera.zoomRatio = t), this.calcVisibleSize()));
        }),
        (E.prototype.updateCamerScale = function (t) {
            this.camera &&
                0 != this.cameraObj.duation &&
                ((this.cameraObj.time += t), this.cameraObj.to != this.camera.zoomRatio) &&
                ((t = cc.misc.lerp(
                    this.cameraObj.from,
                    this.cameraObj.to,
                    this.cameraObj.time / this.cameraObj.duation
                )),
                (this.camera.zoomRatio = t),
                this.cameraObj.time >= this.cameraObj.duation &&
                    ((this.cameraObj.duation = 0),
                    (this.camera.zoomRatio = this.cameraObj.to),
                    this.calcVisibleSize()));
        }),
        (E.prototype.calcVisibleSize = function () {
            var t = this.camera.zoomRatio;
            (E.inst.stageWidth = cc.winSize.width / t),
                (E.inst.stageHeight = cc.winSize.height / t),
                (E.inst.halfWidth = E.inst.stageWidth >> 1),
                (E.inst.halfHeight = E.inst.stageHeight >> 1),
                (E.inst.inSightRadius = cc.Vec3.distance(cc.v3(), cc.v3(E.inst.halfWidth, E.inst.halfHeight))),
                console.log("可见范围:", E.inst.stageWidth, E.inst.stageHeight, E.inst.inSightRadius);
        }),
        (E.prototype.checkMapType = function (t) {
            return !(!this.chapterVo || !t.includes(this.chapterVo.type));
        }),
        (E.prototype.isMainGame = function (t) {
            t = v.default.inst.chapterConf.getChapterVo(t);
            return !!t && (t.type == w.Map_Group.NORMAL || t.type == w.Map_Group.HELL);
        }),
        (E.prototype.gamePlaying = function () {
            l.app.sound.playMusic(E.inst.checkMapType([w.Map_Group.DEATH]) ? "死神Bgm" : "森林地图bgm"),
                (this._status = w.GameStatus.PLAYING);
        }),
        (E.prototype.gamePause = function () {
            this._status != w.GameStatus.PAUSE &&
                ((this.pre_status = this._status), (this._status = w.GameStatus.PAUSE));
        }),
        (E.prototype.gameResume = function () {
            this._status == w.GameStatus.PAUSE && (this._status = this.pre_status);
        }),
        (E.prototype.gameOver = function () {
            this._status = w.GameStatus.OVER;
        }),
        (E.prototype.gameBoss = function () {
            this._status = w.GameStatus.BOSS;
        }),
        (E.prototype.onStatus = function (t) {
            return 0 < (t & this._status);
        }),
        (E.prototype.playGame = function (o, n) {
            var i;
            return (
                void 0 === n && (n = !0),
                r(this, void 0, void 0, function () {
                    var e;
                    return a(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return n && !_.default.inst.useEnergy()
                                    ? [2]
                                    : ((this.playTime = 0),
                                      (this.isDeathWin = !1),
                                      (E.inst.isNewGame = !0),
                                      l.app.sound.stopMusic(),
                                      (E.inst.chapter = o),
                                      (E.inst.lotteryCount = 0),
                                      (m.default.inst.dropNum = 0),
                                      f.default.inst.setChapter(o),
                                      (this.killNum = 0),
                                      (this.bossNum = 0),
                                      (this.chapterVo = v.default.inst.chapterConf.getChapterVo(o)),
                                      this.chapterVo
                                          ? ((this._gameMode =
                                                this.chapterVo.type == w.Map_Group.HELL
                                                    ? w.GameMode.HELL
                                                    : w.GameMode.NORMAL),
                                            (this.isEndlessGame = this.checkMapType([w.Map_Group.ENDLESS])),
                                            console.log("是否为boss战:", this.isEndlessGame),
                                            E.inst.checkMapType([w.Map_Group.DEATH]) &&
                                                ((e = v.default.inst.deathConf.getDeathConfVoByChapter(o)) &&
                                                    ((this.deathMode = e.mode),
                                                    (this.seedDis = e.seedDis),
                                                    (this.maxTime = e.time)),
                                                console.log("死神来了", this.deathMode, this.seedDis)),
                                            [4, k.GameResLoader.loadRes()])
                                          : (console.error("占不到章节配置：", o),
                                            l.app.gui.openUI(h.UIEnum.HomeView, c.LayerEnum.VIEW_LAYER),
                                            [2]));
                            case 1:
                                return t.sent(), [4, l.app.gui.openUI(h.UIEnum.GameView, c.LayerEnum.GAME_LAYER)];
                            case 2:
                                return t.sent(), [4, u.default.delay(0.2, this)];
                            case 3:
                                return (
                                    t.sent(),
                                    null === (i = l.app.track) ||
                                        void 0 === i ||
                                        i.onStageStart("level" + o, "关卡" + o),
                                    l.app.gui.closeUI(h.UIEnum.HomeView),
                                    l.app.gui.closeUI(h.UIEnum.ActivityView),
                                    [2]
                                );
                        }
                    });
                })
            );
        }),
        (E.prototype.onChestCollect = function () {
            var t = b.GameSetting.inst.getLottery(E.inst.chapter);
            console.log("拾取到宝箱:", this.lotteryCount, t),
                !(this.lotteryCount < t.before) && this.lotteryCount < t.before + t.count
                    ? l.app.gui.openUI(h.UIEnum.LotteryView, c.LayerEnum.VIEW_LAYER)
                    : l.app.gui.openUI(h.UIEnum.SkillView, c.LayerEnum.VIEW_LAYER),
                (this.lotteryCount += 1);
        }),
        (E.prototype.findPath = function (t) {
            t = this.find(t);
            return cc.sys.isBrowser && console.warn(t), t;
        }),
        (E.prototype.find = function (t) {
            return t.parent && "New Node" != t.parent.name && "Main" != t.parent.name
                ? this.find(t.parent) + "/" + t.name
                : t.name;
        }),
        (E.prototype.gameStart = function () {
            this.clear(),
                (this.skill_refresh_count = 0),
                (this.skill_draft_pity_count = 0),
                (this.gameTime = 0),
                (this.equip_count = 0),
                this.cameraScale(1, 0);
        }),
        (E.prototype.registerFixedEvent = function (t) {
            this.fixedEvents.push(t);
        }),
        (E.prototype.sortFixedEvent = function () {
            if (
                (this.fixedEvents.sort(function (t, e) {
                    return t.time - e.time;
                }),
                !this.isNewGame)
            ) {
                (this.gameTime = f.default.inst.getValue("time")),
                    (this.killNum = f.default.inst.getValue("killNum") || 0),
                    (this.bossNum = f.default.inst.getValue("bossNum") || 0),
                    (this.timeScaleFlag = f.default.inst.getValue("speed_flag") || 0);
                var t,
                    e = null;
                if (this.isEndlessGame)
                    for (; 0 < this.fixedEvents.length; ) {
                        var o = this.fixedEvents[0];
                        if (!(o.time < this.gameTime)) {
                            e && this.fixedEvents.unshift(e);
                            break;
                        }
                        o.type == C.FixedType.NONE && (e = o), this.fixedEvents.shift();
                    }
                else
                    for (var n = 0, i = this.fixedEvents.length; n < i; n++)
                        if (this.fixedEvents[n].time >= this.gameTime) {
                            0 < (t = n) && this.fixedEvents.splice(0, t),
                                console.log("[GameMgr]-->[line:339]:", t, n, this.gameTime);
                            break;
                        }
                l.app.event.emit(p.EventType.Game_On_Monster_Die);
            }
            (this.isIint = !0), console.log("[GameMgr]-->[line:196]:", this.fixedEvents, this.fixedEvents[0]);
        }),
        (E.prototype.getFixedLen = function () {
            return this.fixedEvents.length;
        }),
        (E.prototype.nextBoss = function () {
            if (this.isEndlessGame) {
                for (
                    var t, e = !1, o = 0, n = 0, i = this.fixedEvents.length;
                    n < i && (t = this.fixedEvents[n]).round_type != C.FixedType.BOSS;
                    n++
                )
                    if (t.type == C.FixedType.BOSS) {
                        (e = !0), (o = t.time - this.gameTime - 0.5), this.fixedEvents.splice(0, n);
                        break;
                    }
                if (e) for (n = 0, i = this.fixedEvents.length; n < i; n++) (t = this.fixedEvents[n]).time -= o;
                console.log(
                    "下一个boss:",
                    this.fixedEvents,
                    this.fixedEvents[0],
                    this.fixedEvents[1],
                    this.fixedEvents[2],
                    this.gameTime
                );
            }
        }),
        (E.prototype.onUpdate = function (t) {
            if (
                this.isIint &&
                this._status != w.GameStatus.PAUSE &&
                this._status != w.GameStatus.OVER &&
                this._status != w.GameStatus.BOSS
            ) {
                if ((this.updateCamerScale(t), this.isEndlessGame)) {
                    if (0 == this.fixedEvents.length && d.GameController.inst.getMonsterNum() <= 0)
                        return void l.app.event.emit(p.EventType.Game_Win);
                } else if (E.inst.checkMapType([w.Map_Group.DEATH])) {
                    if (this.gameTime > E.inst.maxTime + 5 && 0 == d.GameController.inst.getBossCount())
                        return void l.app.event.emit(p.EventType.Goddess_Win);
                } else
                    0 == this.fixedEvents.length &&
                        d.GameController.inst.getMonsterNum() <= 0 &&
                        l.app.event.emit(p.EventType.Game_Win);
                for (
                    this.gameTime += t,
                        f.default.inst.setTime(this.gameTime),
                        l.app.event.emit(p.EventType.Game_Time_Update, this.gameTime);
                    0 < this.fixedEvents.length && this.fixedEvents[0].time <= this.gameTime;

                ) {
                    var e = this.fixedEvents.shift();
                    l.app.event.emit(p.EventType.Trigger_Fixed_Event, e);
                }
            }
        }),
        Object.defineProperty(E.prototype, "roundTime", {
            get: function () {
                return this.gameTime;
            },
            enumerable: !1,
            configurable: !0
        }),
        (E.prototype.clear = function () {
            (this.isIint = !1), (this.fixedEvents.length = 0), (this.timeScale = 1), (this.timeScaleFlag = 0);
        }),
        (E.prototype.calcChapter = function () {
            var t,
                e = E.inst.chapter;
            return (
                this.checkMapType([w.Map_Group.CHALLENGE])
                    ? (e = (t = v.default.inst.challengeConf.getFbByChapter(e)) ? t.chapter : 1)
                    : this.checkMapType([w.Map_Group.HELL])
                    ? (e = (t = v.default.inst.hellConf.getHellVoByFb(e)) ? t.chapter : 1)
                    : this.checkMapType([w.Map_Group.NORMAL]) || (e = 1),
                e
            );
        }),
        (E.prototype.getSkillEnhance = function (t) {
            if (!t || 0 == t.length) return null;
            var e = {
                atk: 0,
                hp: 0,
                speed: 0,
                pickUp: 0,
                skillLv: 0,
                atkRate: 0,
                hpRate: 0,
                expRate: 0,
                skillUseRate: 0,
                skillHurtRate: 0,
                defenseRate: 0,
                areaRate: 0,
                durationRate: 0,
                heroSpeedRate: 0,
                angularRate: 0,
                skillSpeedRate: 0,
                pickupRate: 0,
                goldRate: 0,
                critRate: 0,
                critHurtRate: 0,
                add_hp_rate: 0,
                hurt_rate: 0,
                rebound_rate: 0,
                dodge_rate: 0,
                seckill_rate: 0
            };
            return (
                t.forEach(function (t) {
                    !(function (t) {
                        switch (t.type) {
                            case w.AuxiliaryType.Type1:
                                e.atkRate += t.value;
                                break;
                            case w.AuxiliaryType.Type2:
                                e.hpRate += t.value;
                                break;
                            case w.AuxiliaryType.Type3:
                                e.skillUseRate = t.value;
                                break;
                            case w.AuxiliaryType.Type4:
                                e.skillHurtRate = t.value;
                                break;
                            case w.AuxiliaryType.Type5:
                                e.defenseRate += t.value;
                                break;
                            case w.AuxiliaryType.Type6:
                                e.expRate += t.value;
                                break;
                            case w.AuxiliaryType.Type7:
                                e.areaRate += t.value;
                                break;
                            case w.AuxiliaryType.Type8:
                                break;
                            case w.AuxiliaryType.Type9:
                                e.durationRate += t.value;
                                break;
                            case w.AuxiliaryType.Type10:
                                e.heroSpeedRate += t.value;
                                break;
                            case w.AuxiliaryType.Type11:
                                e.angularRate += t.value;
                                break;
                            case w.AuxiliaryType.Type12:
                                e.skillSpeedRate += t.value;
                                break;
                            case w.AuxiliaryType.Type13:
                                e.pickupRate += t.value;
                                break;
                            case w.AuxiliaryType.Type14:
                                e.goldRate += t.value;
                                break;
                            case w.AuxiliaryType.Type15:
                                e.critRate += t.value;
                                break;
                            case w.AuxiliaryType.Type16:
                                e.critHurtRate += t.value;
                        }
                    })(t);
                }),
                e
            );
        }),
        (E.prototype.seekTarget = function (t) {
            return !this.checkMapType([w.Map_Group.DEATH]) || (E.inst.isAtkHero && t <= this.seedDis) ? 0 : 1;
        }),
        (E.prototype.getTargetCenterPos = function (t) {
            return (
                void 0 === t && (t = 0),
                this.checkMapType([w.Map_Group.DEATH]) && 1 == t
                    ? y.GoddessController.getCenter()
                    : g.HeroController.getHeroCenter()
            );
        }),
        (E.prototype.getTargetPos = function (t) {
            return (
                void 0 === t && (t = 0),
                this.checkMapType([w.Map_Group.DEATH]) && 1 == t
                    ? y.GoddessController.getPos()
                    : g.HeroController.getHeroPos()
            );
        }),
        (E.prototype.getVideoShareReward = function (o, t, n) {
            var e = this;
            if (b.GameSetting.inst.videoTest) return o();
            l.app.platform.showVideoAd(
                function () {
                    o();
                },
                function () {
                    t && t();
                },
                function () {
                    return r(e, void 0, void 0, function () {
                        var e;
                        return a(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return this.share_count >= b.GameSetting.inst.share_count
                                        ? (n && n(), [2])
                                        : [4, l.app.platform.shareForReward({})];
                                case 1:
                                    return (
                                        (e = t.sent()),
                                        console.log("分享结果", e, this.share_count),
                                        e ? ((this.share_count += 1), o()) : n && n(),
                                        [2]
                                    );
                            }
                        });
                    });
                }
            );
        }),
        (E.prototype.clearHurtMap = function () {
            this.hurtMap.clear();
        }),
        (E.prototype.addHurt = function (t, e, o) {
            t = this.hurtMap.get(t);
            ((t = t || {id: e, value: 0}).id = e), (t.value += o), this.hurtMap.set(e, t);
        }),
        (E.prototype.getHurtRecord = function () {
            return 0 < this.hurtMap.size ? Array.from(this.hurtMap.values()) : [];
        }),
        E);
function E() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t.gameTime = 0),
        (t.playTime = 0),
        (t.mapCamera = null),
        (t.camera = null),
        (t.moveVector = cc.v3()),
        (t.oldVertor = cc.v3()),
        (t.stageWidth = 0),
        (t.stageHeight = 0),
        (t.halfWidth = 0),
        (t.halfHeight = 0),
        (t.inSightRadius = 0),
        (t.less_energy = 30),
        (t.recover_energy = 1),
        (t.recover_energy_count = 1),
        (t.recover_energy_time = 600),
        (t.max_recover_energy = 30),
        (t.guide_skin_id = 0),
        (t.isContinue = !1),
        (t.isOldGuide = !1),
        (t.chapter = 1),
        (t.lotteryCount = 0),
        (t.chapterVo = null),
        (t.equip_count = 0),
        (t.killNum = 0),
        (t.bossNum = 0),
        (t.isNewGame = !1),
        (t.isEndlessGame = !1),
        (t.isDeathWin = !1),
        (t.reward_num = 0),
        (t.hell_pass_chapter = 0),
        (t.deathMode = 1),
        (t.seedDis = 300),
        (t.maxTime = 300),
        (t.eggIndex = 1),
        (t._timeScale = 1),
        (t.timeScaleFlag = 0),
        (t.cameraObj = {from: 1, to: 1, duation: 0, time: 0}),
        (t._gameMode = w.GameMode.NORMAL),
        (t.challengeData = null),
        (t.trackData = {first_skill: 0, bossStatus: 0, patrol: 0}),
        (t.topNode = null),
        (t._status = w.GameStatus.NONE),
        (t.pre_status = w.GameStatus.NONE),
        (t.fixedEvents = []),
        (t.isIint = !1),
        (t.share_count = 0),
        (t.hurtMap = new Map()),
        (t.skill_refresh_count = 0),
        (t.skill_draft_pity_count = 0),
        t
    );
}
o.default = i;
