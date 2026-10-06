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
    c = t("App"),
    u = t("decorator"),
    p = t("LayerMgr"),
    h = t("ResMgr"),
    d = t("DateUtil"),
    f = t("BasePanel"),
    y = t("EventTypes"),
    g = t("ResUtils"),
    m = t("UIEnum"),
    _ = t("GameConst"),
    v = t("DropController"),
    b = t("FloatController"),
    w = t("GameController"),
    C = t("GameDataController"),
    k = t("GuideController"),
    E = t("HeroController"),
    S = t("UserDataController"),
    M = t("GameSetting"),
    R = t("GameEnums"),
    T = t("ValueTypes"),
    D = t("GameWarn"),
    P = t("HeroLostHpWarn"),
    O = t("GameMgr"),
    A = t("GameDirNode"),
    CHA = t("CombatHudArcade"),
    UiStyle = t("UiStyle"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (l = f.default),
        i(L, l),
        (L.prototype.onEnable = function () {
            l.prototype.onEnable.call(this),
                (this.isWarning = !1),
                cc.sys.isBrowser && cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        }),
        (L.prototype.onDisable = function () {
            l.prototype.onDisable.call(this),
                this.clearView(),
                (this.isOneKey = !1),
                cc.sys.isBrowser && cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        }),
        (L.prototype.onKeyDown = function (t) {
            t.keyCode != cc.macro.KEY.g ? this.onAddTestSkill(t.keyCode) : this.onBtnGMClick(null);
        }),
        (L.prototype.initView = function () {
            for (var t = 1; t < this.bosss.childrenCount; t++) {
                var e = this.bosss.getChildByName("b" + t);
                if (!e) break;
                this.boss.push(e);
            }
        }),
        (L.prototype.updateView = function () {
            (this.progressBar.progress = 0),
                (this.isInitProgress = !1),
                (this.bossCome = 0),
                (this.btnGM.active = UiStyle.isGmEnabled()),
                (this.btnPause.active = !k.GuideController.isNewPlayer),
                (this.expBar.node.active = !0),
                (this.levelLab.node.active = !0),
                (this.bossBar.node.active = !1),
                (this.timeLab.string = "00:00"),
                (this.goddessLab.node.active =
                    this.btnGoddess.active =
                    this.goddess.active =
                        O.default.inst.checkMapType([R.Map_Group.DEATH])),
                (this.goddessLab.string = "Lv" + S.default.inst.deathPass),
                (this.hammer.active = this.hammerLab.node.active = !1),
                (this.hammer.position = cc.v3(
                    295,
                    O.default.inst.checkMapType([R.Map_Group.DEATH, R.Map_Group.ENDLESS]) ? -230 : -174
                )),
                (this.hammerLab.node.position = cc.v3(
                    308,
                    O.default.inst.checkMapType([R.Map_Group.DEATH, R.Map_Group.ENDLESS]) ? -227 : -171
                )),
                this.boss.forEach(function (t) {
                    t.active = !1;
                }),
                O.default.inst.isEndlessGame
                    ? ((this.bossLab.node.active = this.bossNode.active = !0), (this.bottom.active = !1))
                    : ((this.bottom.active = !0), (this.bossLab.node.active = this.bossNode.active = !1)),
                this.updateTimeScaleBtn(),
                this.updateData(),
                this.onExpProgress(0);
            try {
                CHA.apply(this);
            } catch (err) {
                console.error("[GameUI] CombatHudArcade.apply failed", err);
            }
        }),
        (L.prototype.clearView = function () {
            for (var t = this.dirContent.childrenCount, e = 0; e < t; e++) {
                var o = this.dirContent.children[0];
                h.default.inst.putNodeToPool(o);
            }
            this._arcadeFog && ((this._arcadeFog.active = !1), (this._arcadeFog = null)),
                this._arcadeMod &&
                    ((this._arcadeMod.badge.active = !1),
                    (this._arcadeMod.banner.active = !1),
                    (this._arcadeMod.banner.opacity = 255));
        }),
        (L.prototype.updateData = function () {
            var t = E.HeroController.getAtrr("level");
            (this.levelLab.string = t + ""),
                (this.killLab.string = O.default.inst.killNum + ""),
                this.onAddGold(E.HeroController.getAtrr("gold")),
                (this.bossLab.string = "Lv" + (O.default.inst.bossNum + 1)),
                (this.monsterLab.string =
                    "怪物个数:" + w.GameController.inst.getMonsterNum() + "\n经验点个数:" + v.default.inst.getExpNum());
        }),
        (L.prototype.onUpdate = function (t) {
            O.default.inst.isEndlessGame || (this.isInitProgress ? this.updateProgress(t) : this.initProgress()),
                this.updateHammer(),
                CHA.tickHp(this);
        }),
        (L.prototype.initProgress = function () {
            if (0 < w.GameController.inst.bossTimes.length) {
                var t = w.GameController.inst.bossTimes.length;
                (this.max_progress_time = w.GameController.inst.bossTimes[t - 1]), (this.isInitProgress = !0);
                for (var e = 0; e < t - 1; e++)
                    (this.boss[e].active = !0),
                        (this.boss[e].position = cc.v3(
                            (w.GameController.inst.bossTimes[e] / this.max_progress_time) * 600 - 300,
                            0
                        ));
            }
        }),
        (L.prototype.updateProgress = function () {
            this.progressBar.progress = cc.misc.clamp01(O.default.inst.roundTime / this.max_progress_time);
        }),
        (L.prototype.updateHammer = function () {
            0 < E.HeroController.getGoodsNum() &&
                ((this.hammer.active = this.hammerLab.node.active = !0),
                (this.hammerLab.string = "" + E.HeroController.getGoodsNum()));
        }),
        (L.prototype.showBossWarn = function () {
            var i;
            return a(this, void 0, void 0, function () {
                var e,
                    o,
                    n = this;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (O.default.inst.checkMapType([R.Map_Group.ENDLESS, R.Map_Group.DEATH]) &&
                                3 <= w.GameController.inst.getBossCount()) ||
                                this.isWarning
                                ? [2]
                                : ((this.isWarning = !0),
                                  this.playWarnSound(),
                                  (e = O.default.inst.checkMapType([R.Map_Group.DEATH])
                                      ? g.ResUtils.Prefabs.deathWarn
                                      : g.ResUtils.Prefabs.bossWarn),
                                  [4, h.default.inst.getNodeFromPool(e.url, e.bundle)]);
                        case 1:
                            return (
                                ((e = t.sent()).position = cc.v3(0, 115)),
                                (e.parent = this.warnLayer),
                                (o = e.getComponent(D.default)).playAnim(function () {
                                    (n.isWarning = !1), h.default.inst.putNodeToPool(o.node);
                                }),
                                (this.bossCome += 1),
                                1 == this.bossCome && (O.default.inst.trackData.bossStatus += 1),
                                O.default.inst.chapter <= 5 &&
                                    this.bossCome == w.GameController.inst.bossRound &&
                                    (null === (i = c.app.track) ||
                                        void 0 === i ||
                                        i.trackEvent("last_boss_come" + O.default.inst.chapter)),
                                [2]
                            );
                    }
                });
            });
        }),
        (L.prototype.showMobWarn = function () {
            return a(this, void 0, void 0, function () {
                var e,
                    o = this;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                this.playWarnSound(),
                                this.mobWarn
                                    ? [3, 2]
                                    : [
                                          4,
                                          h.default.inst.getNodeFromPool(
                                              g.ResUtils.Prefabs.mobWarn.url,
                                              g.ResUtils.Prefabs.mobWarn.bundle
                                          )
                                      ]
                            );
                        case 1:
                            ((e = t.sent()).position = cc.v3(0, 115)),
                                (e.parent = this.warnLayer),
                                (this.mobWarn = e.getComponent(D.default)),
                                (t.label = 2);
                        case 2:
                            return (
                                (this.mobWarn.node.active = !0),
                                this.mobWarn.playAnim(function () {
                                    o.mobWarn.node.active = !1;
                                }),
                                [2]
                            );
                    }
                });
            });
        }),
        (L.prototype.showHeroHpWarn = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.heroWarn
                                ? [3, 2]
                                : [
                                      4,
                                      h.default.inst.getNodeFromPool(
                                          g.ResUtils.Prefabs.heroWarn.url,
                                          g.ResUtils.Prefabs.heroWarn.bundle
                                      )
                                  ];
                        case 1:
                            ((e = t.sent()).parent = this.warnLayer),
                                (this.heroWarn = e.getComponent(P.default)),
                                (t.label = 2);
                        case 2:
                            return (this.heroWarn.node.active = !0), [2];
                    }
                });
            });
        }),
        (L.prototype.playWarnSound = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, c.app.sound.playEffect("怪物潮或BOSS出现警告")];
                        case 1:
                        case 2:
                            return t.sent(), [4, c.app.sound.playEffect("怪物潮或BOSS出现警告")];
                        case 3:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (L.prototype.addDirNode = function (o) {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [
                                4,
                                h.default.inst.getNodeFromPool(
                                    g.ResUtils.Prefabs.DirNode.url,
                                    g.ResUtils.Prefabs.DirNode.bundle
                                )
                            ];
                        case 1:
                            return (
                                (e = t.sent()),
                                o.target.isNodeValid()
                                    ? (e.getComponent(A.default).setTarget(o), (e.parent = this.dirContent))
                                    : h.default.inst.putNodeToPool(e),
                                [2]
                            );
                    }
                });
            });
        }),
        (L.prototype.updateTimeScaleBtn = function () {
            O.default.inst.checkMapType([R.Map_Group.ACTIVITY])
                ? ((this.btnTimeScale1.active = !1), (this.btnTimeScale2.active = !1))
                : ((this.btnTimeScale1.active =
                      1 < O.default.inst.timeScale && S.default.inst.chapter >= _.GameConst.Game_TimeScale_Chapter),
                  (this.btnTimeScale2.active =
                      1 == O.default.inst.timeScale && S.default.inst.chapter >= _.GameConst.Game_TimeScale_Chapter)),
                console.log("倍率:", O.default.inst.timeScale);
        }),
        (L.prototype.onGameTimeScale = function () {
            this.updateTimeScaleBtn();
        }),
        (L.prototype.onGameEvent = function (t) {
            O.default.inst.checkMapType([R.Map_Group.DEATH]) &&
                (t = cc.misc.clampf(O.default.inst.maxTime - t, 0, O.default.inst.maxTime)),
                (this.timeLab.string = d.default.secondFormat3(t)),
                this.updateData();
        }),
        (L.prototype.onLevelUp = function () {
            return a(this, void 0, void 0, function () {
                var t = this;
                return s(this, function () {
                    return (
                        this.onExpProgress(1),
                        b.default.inst.addLevelUp(),
                        c.app.timer.once(
                            this,
                            function () {
                                c.app.timer.off(t),
                                    O.default.inst.onStatus(R.GameStatus.OVER) ||
                                        w.GameController.inst.enqueue(t, function () {
                                            O.default.inst.gamePause(),
                                                c.app.gui.openUI(m.UIEnum.SkillView, p.LayerEnum.VIEW_LAYER);
                                        });
                            },
                            1
                        ),
                        [2]
                    );
                });
            });
        }),
        (L.prototype.onExpProgress = function (t) {
            this.expBar.progress = t;
        }),
        (L.prototype.onSelectedSkill = function () {
            try {
                CHA.refreshSkills(this);
            } catch (err) {
                console.error("[GameUI] onSelectedSkill refresh failed", err);
            }
        }),
        (L.prototype.onAddGold = function (t) {
            this.goldLab.string = t + "";
        }),
        (L.prototype.updateKillNum = function () {
            this.killLab.string = O.default.inst.killNum + "";
        }),
        (L.prototype.onBossEnd = function () {
            (this.expBar.node.active = !0), (this.levelLab.node.active = !0), (this.bossBar.node.active = !1);
        }),
        (L.prototype.onBossStart = function () {
            (this.expBar.node.active = !1),
                (this.levelLab.node.active = !1),
                (this.bossBar.node.active = !0),
                (this.bossBar.progress = 1);
        }),
        (L.prototype.onBossHp = function (t) {
            this.bossBar.progress = t;
        }),
        (L.prototype.onHeroLostHp = function () {
            CHA.tickHp(this), this.showHeroHpWarn();
        }),
        (L.prototype.onAddDirNode = function (t) {
            this.addDirNode(t);
        }),
        (L.prototype.onGameWarn = function (t) {
            t.type == T.FixedType.CROWD
                ? (console.log("一大波怪即将来临"), this.showMobWarn())
                : t.type == T.FixedType.BOSS
                ? (console.log("BOSS即将来临"), this.showBossWarn())
                : t.type == T.FixedType.Camera_Scale
                ? O.default.inst.cameraScale(t.value, 1)
                : t.type == T.FixedType.MODIFIER &&
                  (O.default.inst.cameraScale(t.value || 1.32, 1.2),
                  CHA.showModifier(this, {title: t.title, badge: t.badge, id: t.modifierId}));
        }),
        (L.prototype.onAddTestSkill = function (t) {
            this.isOneKey ||
                ((this.isOneKey = !0),
                t == cc.macro.KEY.a &&
                    (E.HeroController.addSkill(1, 1),
                    E.HeroController.addSkill(2, 1),
                    E.HeroController.addSkill(3, 1),
                    E.HeroController.addSkill(4, 1),
                    E.HeroController.addSkill(5, 1)),
                t == cc.macro.KEY.s &&
                    (E.HeroController.addSkill(6, 1),
                    E.HeroController.addSkill(7, 1),
                    E.HeroController.addSkill(8, 1),
                    E.HeroController.addSkill(9, 1),
                    E.HeroController.addSkill(10, 1)),
                t == cc.macro.KEY.d &&
                    (E.HeroController.addSkill(11, 1),
                    E.HeroController.addSkill(12, 1),
                    E.HeroController.addSkill(13, 1),
                    E.HeroController.addSkill(14, 1),
                    E.HeroController.addSkill(15, 1),
                    E.HeroController.addSkill(16, 1)),
                t == cc.macro.KEY.q &&
                    (E.HeroController.addSkill(1001, 1),
                    E.HeroController.addSkill(1002, 1),
                    E.HeroController.addSkill(1003, 1),
                    E.HeroController.addSkill(1004, 1),
                    E.HeroController.addSkill(1005, 1)),
                t == cc.macro.KEY.w &&
                    (E.HeroController.addSkill(1006, 1),
                    E.HeroController.addSkill(1007, 1),
                    E.HeroController.addSkill(1008, 1),
                    E.HeroController.addSkill(1009, 1),
                    E.HeroController.addSkill(1010, 1)),
                t == cc.macro.KEY.e &&
                    (E.HeroController.addSkill(1011, 1),
                    E.HeroController.addSkill(1012, 1),
                    E.HeroController.addSkill(1013, 1),
                    E.HeroController.addSkill(1014, 1),
                    E.HeroController.addSkill(1015, 1),
                    E.HeroController.addSkill(1016, 1)));
        }),
        (L.prototype.onBtnPauseClick = function () {
            w.GameController.inst.enqueue(this, function () {
                O.default.inst.gamePause(), c.app.gui.openUI(m.UIEnum.PauseView, p.LayerEnum.VIEW_LAYER);
            });
        }),
        (L.prototype.onBtnGMClick = function () {
            w.GameController.inst.enqueue(this, function () {
                O.default.inst.gamePause(), c.app.gui.openUI(m.UIEnum.DebugView, p.LayerEnum.TOP_LAYER, {page: 2});
            });
        }),
        (L.prototype.onBtnGoddessClick = function () {
            w.GameController.inst.enqueue(this, function () {
                O.default.inst.gamePause(), c.app.gui.openUI(m.UIEnum.DeathTipsView, p.LayerEnum.TOP_LAYER);
            });
        }),
        (L.prototype.onBtnTimeScale1Click = function () {
            O.default.inst.timeScale = 1;
        }),
        (L.prototype.onBtnTimeScale2Click = function () {
            var t;
            Date.now() - this.click_time < 1 ||
                (O.default.inst.timeScaleFlag
                    ? (O.default.inst.timeScale = M.GameSetting.inst.Game_Speed_Rate)
                    : M.GameSetting.inst.game_speed_window < 1
                    ? (null === (t = c.app.track) || void 0 === t || t.trackEvent("click_speed"),
                      (O.default.inst.timeScaleFlag = 1),
                      (O.default.inst.timeScale = M.GameSetting.inst.Game_Speed_Rate),
                      C.default.inst.setSpeedFlag(1))
                    : w.GameController.inst.enqueue(
                          this,
                          function () {
                              O.default.inst.gamePause(),
                                  c.app.gui.openUI(m.UIEnum.GameSpeedView, p.LayerEnum.TOP_LAYER);
                          },
                          !0
                      ));
        }),
        r([u.autoBind("cc.Node", "top/btnTimeScale1")], L.prototype, "btnTimeScale1", void 0),
        r([u.autoBind("cc.Node", "top/btnTimeScale2")], L.prototype, "btnTimeScale2", void 0),
        r([u.autoBind("cc.Label", "top/hammerLab")], L.prototype, "hammerLab", void 0),
        r([u.autoBind("cc.Node", "top/hammer")], L.prototype, "hammer", void 0),
        r([u.autoBind("cc.Node", "top/btnGoddess")], L.prototype, "btnGoddess", void 0),
        r([u.autoBind("cc.Node", "top/goddess")], L.prototype, "goddess", void 0),
        r([u.autoBind("cc.Label", "top/goddessLab")], L.prototype, "goddessLab", void 0),
        r([u.autoBind("cc.Node", "top/bossNode")], L.prototype, "bossNode", void 0),
        r([u.autoBind("cc.Label", "top/bossLab")], L.prototype, "bossLab", void 0),
        r([u.autoBind("cc.Node", "dirContent")], L.prototype, "dirContent", void 0),
        r([u.autoBind("cc.Node", "bottom")], L.prototype, "bottom", void 0),
        r([u.autoBind("cc.ProgressBar", "bottom/progressBar")], L.prototype, "progressBar", void 0),
        r([u.autoBind("cc.Node", "bottom/progressBar/bosss")], L.prototype, "bosss", void 0),
        r([u.autoBind("cc.Node", "bottom/progressBar/bosss/lastBoss")], L.prototype, "lastBoss", void 0),
        r([u.autoBind("cc.Label", "top/btnGM/monsterLab")], L.prototype, "monsterLab", void 0),
        r([u.autoBind("cc.Node", "top/btnGM")], L.prototype, "btnGM", void 0),
        r([u.autoBind("cc.Node", "top/btnPause")], L.prototype, "btnPause", void 0),
        r([u.autoBind("cc.Node", "warnLayer")], L.prototype, "warnLayer", void 0),
        r([u.autoBind("cc.ProgressBar", "top/bossBar")], L.prototype, "bossBar", void 0),
        r([u.autoBind("cc.Label", "top/levelLab")], L.prototype, "levelLab", void 0),
        r([u.autoBind("cc.Label", "top/killLab")], L.prototype, "killLab", void 0),
        r([u.autoBind("cc.Label", "top/goldLab")], L.prototype, "goldLab", void 0),
        r([u.autoBind("cc.ProgressBar", "top/expBar")], L.prototype, "expBar", void 0),
        r([u.autoBind("cc.Label", "top/timeLab")], L.prototype, "timeLab", void 0),
        r([u.gameEvent(y.EventType.Game_Time_Scale)], L.prototype, "onGameTimeScale", null),
        r([u.gameEvent(y.EventType.Game_Time_Update)], L.prototype, "onGameEvent", null),
        r([u.gameEvent(y.EventType.Game_Level_Up)], L.prototype, "onLevelUp", null),
        r([u.gameEvent(y.EventType.Game_Add_Exp)], L.prototype, "onExpProgress", null),
        r([u.gameEvent(y.EventType.Game_Selected_Skill)], L.prototype, "onSelectedSkill", null),
        r([u.gameEvent(y.EventType.Game_Add_Gold)], L.prototype, "onAddGold", null),
        r([u.gameEvent(y.EventType.Game_On_Monster_Die)], L.prototype, "updateKillNum", null),
        r([u.gameEvent(y.EventType.On_Boss_End)], L.prototype, "onBossEnd", null),
        r([u.gameEvent(y.EventType.On_Boss_Start)], L.prototype, "onBossStart", null),
        r([u.gameEvent(y.EventType.On_Boss_Hp_Change)], L.prototype, "onBossHp", null),
        r([u.gameEvent(y.EventType.Game_Hero_Lost_Hp)], L.prototype, "onHeroLostHp", null),
        r([u.gameEvent(y.EventType.Game_Show_Dir_Guide)], L.prototype, "onAddDirNode", null),
        r([u.gameEvent(y.EventType.Trigger_Fixed_Event)], L.prototype, "onGameWarn", null),
        r([t], L));
function L() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.btnTimeScale1 = null),
        (t.btnTimeScale2 = null),
        (t.hammerLab = null),
        (t.hammer = null),
        (t.btnGoddess = null),
        (t.goddess = null),
        (t.goddessLab = null),
        (t.bossNode = null),
        (t.bossLab = null),
        (t.dirContent = null),
        (t.bottom = null),
        (t.progressBar = null),
        (t.bosss = null),
        (t.lastBoss = null),
        (t.monsterLab = null),
        (t.btnGM = null),
        (t.btnPause = null),
        (t.warnLayer = null),
        (t.bossBar = null),
        (t.levelLab = null),
        (t.killLab = null),
        (t.goldLab = null),
        (t.expBar = null),
        (t.timeLab = null),
        (t.refresh_delay = 0.4),
        (t.mobWarn = null),
        (t.heroWarn = null),
        (t.bossCome = 0),
        (t.isInitProgress = !1),
        (t.max_progress_time = 0),
        (t.boss = []),
        (t.isWarning = !1),
        (t.isOneKey = !1),
        (t.click_time = 0),
        t
    );
}
o.default = t;
