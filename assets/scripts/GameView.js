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
    u = t("UIEnum"),
    e = t("decorator"),
    p = t("App"),
    h = t("EventTypes"),
    d = t("GameMgr"),
    f = t("HeroController"),
    y = t("MonsterController"),
    g = t("GameEnums"),
    m = t("GameController"),
    _ = t("DropType"),
    v = t("FloatController"),
    b = t("DropController"),
    w = t("ConfData"),
    C = t("ResMgr"),
    k = t("MapController"),
    E = t("ResUtils"),
    S = t("UserDataController"),
    M = t("LayerMgr"),
    R = t("GridMgr"),
    T = t("MonsterSkillController"),
    D = t("GuideController"),
    P = t("GuideGroup"),
    O = t("EquipType"),
    A = t("TrackType"),
    L = t("GameDataController"),
    x = t("GameResLoader"),
    B = t("GoddessController"),
    I = t("GameSetting"),
    t = cc._decorator.ccclass,
    t =
        ((l = c.default),
        i(G, l),
        (G.prototype.onLoad = function () {
            l.prototype.onLoad.call(this),
                b.default.inst.setLayer(this.dropLayer, this.floatLayer),
                v.default.inst.setLayer(this.fontLayer),
                f.HeroController.setLayer(this.actorLayer, this.effectLayer1, this.effectLayer2),
                f.HeroController.setHeroUI(this.hero),
                f.HeroController.setHpBar(this.heroBar),
                y.MonsterController.setLayer(this.actorLayer, this.effectLayer1, this.effectLayer2),
                B.GoddessController.setLayer(this.actorLayer),
                B.GoddessController.setGoddessUI(this.goddess),
                B.GoddessController.setHpBar(this.goddessBar);
        }),
        (G.prototype.onEnable = function () {
            l.prototype.onEnable.call(this), this.onEvents();
        }),
        (G.prototype.onDisable = function () {
            l.prototype.onDisable.call(this), this.offEvents(), this.clearGame(), d.default.inst.clear();
        }),
        (G.prototype.onEvents = function () {
            this.joystickLayer.on(cc.Node.EventType.TOUCH_START, this.onJoystickEvent, this),
                this.joystickLayer.on(cc.Node.EventType.TOUCH_MOVE, this.onJoystickEvent, this),
                this.joystickLayer.on(cc.Node.EventType.TOUCH_END, this.onJoystickEvent, this),
                this.joystickLayer.on(cc.Node.EventType.TOUCH_CANCEL, this.onJoystickEvent, this);
        }),
        (G.prototype.offEvents = function () {
            this.joystickLayer.off(cc.Node.EventType.TOUCH_START, this.onJoystickEvent, this),
                this.joystickLayer.off(cc.Node.EventType.TOUCH_MOVE, this.onJoystickEvent, this),
                this.joystickLayer.off(cc.Node.EventType.TOUCH_END, this.onJoystickEvent, this),
                this.joystickLayer.off(cc.Node.EventType.TOUCH_CANCEL, this.onJoystickEvent, this);
        }),
        (G.prototype.update = function (t) {
            (t *= d.default.inst.timeScale), m.GameController.inst.onUpdate(t), this.ui.onUpdate(t);
        }),
        (G.prototype.initView = function () {
            this.bgMask.node.active = !1;
        }),
        (G.prototype.updateView = function () {
            return a(this, void 0, void 0, function () {
                var t;
                return s(this, function () {
                    return (
                        (t = d.default.inst.mapCamera.position),
                        d.default.inst.checkMapType([g.Map_Group.DEATH])
                            ? ((t.x = 100), (t.y = -110))
                            : ((t.x = 0), (t.y = 0)),
                        d.default.inst.mapCamera.setPosition(t),
                        this.clearGame(),
                        w.default.inst.playerSkillConf.calcRoundSkills(),
                        this.initMap(),
                        this.initHero(),
                        this.initGoddess(),
                        this.initDark(),
                        d.default.inst.clearHurtMap(),
                        d.default.inst.gameStart(),
                        m.GameController.inst.gameStart(),
                        d.default.inst.gamePlaying(),
                        [2]
                    );
                });
            });
        }),
        (G.prototype.initHero = function () {
            (this.heroBar.node.active = !0),
                d.default.inst.checkMapType([g.Map_Group.DEATH])
                    ? f.HeroController.addHero(cc.v3(100, -100))
                    : f.HeroController.addHero(cc.v3(0, 10));
        }),
        (G.prototype.initGoddess = function () {
            var t, e;
            (m.GameController.inst.eggSize = null),
                d.default.inst.checkMapType([g.Map_Group.DEATH])
                    ? (B.GoddessController.calcAttr(),
                      (this.heroBar.node.active = d.default.inst.isAtkHero),
                      (e = w.default.inst.deathConf.getDeathConfVoByChapter(d.default.inst.chapter)) &&
                          ((t = {hp: e.hp, maxHp: e.hp}),
                          B.GoddessController.addGoddess(t, cc.v3(0, 0)),
                          (e = (t = e.size).width >> 1),
                          (m.GameController.inst.eggSize = cc.rect(-e, 0, t.width, t.height))))
                    : (this.goddess.active = !1);
        }),
        (G.prototype.initDark = function () {
            1 == d.default.inst.chapterVo.dark
                ? (this.dark.setSource(E.ResUtils.Textures.Dark.url, E.ResUtils.Textures.Dark.bundle),
                  (this.dark.node.active = !0))
                : (this.dark.node.active = !1);
        }),
        (G.prototype.clearGame = function () {
            p.app.sound.stopMusic(),
                f.HeroController.clear(),
                B.GoddessController.clear(),
                v.default.inst.clear(),
                b.default.inst.clear(),
                k.default.inst.clearMap(),
                m.GameController.inst.clear(),
                y.MonsterController.clear(),
                T.MonsterSkillController.clear(),
                R.GridMgr.clear();
        }),
        (G.prototype.initMap = function () {
            return a(this, void 0, void 0, function () {
                var t;
                return s(this, function () {
                    return (
                        k.default.inst.setMapSp(this.mapBg),
                        k.default.inst.setPlantLayer(this.plantLayer, this.borderLayer),
                        k.default.inst.initMap(),
                        d.default.inst.chapterVo.map_type == g.MapType.LIMIT_MAP
                            ? ((this.bgMask.node.active = !0),
                              (this.bgMask.node.width =
                                  d.default.inst.chapterVo.map_size.width + d.default.inst.chapterVo.fence_url.width),
                              (this.bgMask.node.height =
                                  d.default.inst.chapterVo.map_size.heiht + d.default.inst.chapterVo.fence_url.height),
                              (t = this.bgMask.node.children[0]) &&
                                  ((t.width = d.default.inst.chapterVo.map_size.width + cc.winSize.width + 400),
                                  (t.height = d.default.inst.chapterVo.map_size.heiht + cc.winSize.height + 400)))
                            : (this.bgMask.node.active = !1),
                        [2]
                    );
                });
            });
        }),
        (G.prototype.onOverCloseView = function () {
            p.app.gui.closeUI(u.UIEnum.SkillView), p.app.gui.closeUI(u.UIEnum.PauseView);
        }),
        (G.prototype.showGuide = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return 0 != D.GuideController.getGuide("Novicepass")
                                ? [3, 2]
                                : (d.default.inst.gamePause(),
                                  [4, D.GuideController.initGroup(P.GuideGroup.Novicepass)]);
                        case 1:
                            t.sent(), D.GuideController.guideNext(), D.GuideController.guideStart(), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (G.prototype.onHide = function () {
            console.warn("切到后台了");
            var t = p.app.gui.getLastUI();
            !this.isHiding &&
                "GameView" == t.name &&
                I.GameSetting.inst.on_hide_pause &&
                d.default.inst.onStatus(g.GameStatus.PLAYING | g.GameStatus.BOSS) &&
                ((this.isHiding = !0), console.log("暂停游戏:", t.name), d.default.inst.gamePause());
        }),
        (G.prototype.onShow = function () {
            this.isHiding && d.default.inst.gameResume(), (this.isHiding = !1), console.warn("切到前台了");
        }),
        (G.prototype.onDieReward = function () {
            m.GameController.inst.enqueue(this, function () {
                d.default.inst.gamePause(), p.app.gui.openUI(u.UIEnum.GameFreeRewardView, M.LayerEnum.VIEW_LAYER);
            });
        }),
        (G.prototype.onGuideMonster = function () {
            this.showGuide();
        }),
        (G.prototype.onJoyStickStart = function () {}),
        (G.prototype.onJoyStickStop = function () {
            f.HeroController.HeroStop();
        }),
        (G.prototype.onFloatHurt = function (t) {
            v.default.inst.addFloat(t);
        }),
        (G.prototype.onExpDrop = function (t) {
            b.default.inst.addDrop({type: _.DropType.Exp, data: t});
        }),
        (G.prototype.onBombEff = function (o) {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [
                                4,
                                C.default.inst.getNodeFromPool(
                                    E.ResUtils.Prefabs.BombEff.url,
                                    E.ResUtils.Prefabs.BombEff.bundle
                                )
                            ];
                        case 1:
                            return (
                                ((e = t.sent()).parent = this.effectLayer2),
                                (e.position = o || f.HeroController.getHeroCenter()),
                                [2]
                            );
                    }
                });
            });
        }),
        (G.prototype.onGameFail = function () {
            var e;
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                console.log("[GameView]-->[line:168]:游戏失败"),
                                D.GuideController.isNewPlayer &&
                                    (D.GuideController.setGuide("Novicepass", 1),
                                    (D.GuideController.isNewPlayer = !1),
                                    f.HeroController.addEquips(4, O.EquipQualityType.GRAY)),
                                null === (e = p.app.track) ||
                                    void 0 === e ||
                                    e.onStageEnd(
                                        "level" + d.default.inst.chapter,
                                        "关卡" + d.default.inst.chapter,
                                        "fail"
                                    ),
                                d.default.inst.gameOver(),
                                f.HeroController.clearSkills(),
                                L.default.inst.clear(),
                                S.default.inst.updateChapterBestTime(d.default.inst.chapter, d.default.inst.roundTime),
                                this.onOverCloseView(),
                                d.default.inst.chapterVo.type != g.Map_Group.ENDLESS
                                    ? [3, 2]
                                    : [
                                          4,
                                          p.app.gui.openUI(u.UIEnum.WinEndlessView, M.LayerEnum.VIEW_LAYER, {
                                              chapter: d.default.inst.chapter,
                                              bossNum: d.default.inst.bossNum
                                          })
                                      ]
                            );
                        case 1:
                            return t.sent(), [3, 6];
                        case 2:
                            return d.default.inst.chapterVo.type != g.Map_Group.DEATH
                                ? [3, 4]
                                : [
                                      4,
                                      p.app.gui.openUI(u.UIEnum.FailDeathView, M.LayerEnum.VIEW_LAYER, {
                                          chapter: d.default.inst.chapter,
                                          bossNum: d.default.inst.bossNum
                                      })
                                  ];
                        case 3:
                            return t.sent(), [3, 6];
                        case 4:
                            return [4, p.app.gui.openUI(u.UIEnum.FailView, M.LayerEnum.VIEW_LAYER)];
                        case 5:
                            t.sent(), (t.label = 6);
                        case 6:
                            return x.GameResLoader.loadHomeViews(), [2];
                    }
                });
            });
        }),
        (G.prototype.onGoddessWin = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return S.default.inst.addDeathPass(), d.default.inst.gameOver(), B.GoddessController.onWin(), [2];
                });
            });
        }),
        (G.prototype.onGameWin = function () {
            var n;
            return a(this, void 0, void 0, function () {
                var e, o, i;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                console.warn("[GameView]-->[line:174]:游戏胜利"),
                                D.GuideController.isNewPlayer &&
                                    (D.GuideController.setGuide("Novicepass", 1),
                                    (D.GuideController.isNewPlayer = !1),
                                    f.HeroController.addEquips(4, O.EquipQualityType.GRAY)),
                                d.default.inst.chapter <= 5 &&
                                    (null === (n = p.app.track) ||
                                        void 0 === n ||
                                        n.trackEvent("last_boss_die" + d.default.inst.chapter)),
                                null === (n = p.app.track) ||
                                    void 0 === n ||
                                    n.onStageEnd(
                                        "level" + d.default.inst.chapter,
                                        "关卡" + d.default.inst.chapter,
                                        "complete"
                                    ),
                                this.onOverCloseView(),
                                d.default.inst.gameOver(),
                                f.HeroController.clearSkills(),
                                L.default.inst.clear(),
                                (e = d.default.inst.chapter),
                                (o = w.default.inst.chapterConf.getChapterVo(e)),
                                (i = !1),
                                d.default.inst.isMainGame(e)
                                    ? ((i = !S.default.inst.getUserChapterVo(e).isPass),
                                      S.default.inst.updateChapterBestTime(
                                          d.default.inst.chapter,
                                          d.default.inst.roundTime
                                      ),
                                      [4, S.default.inst.passChapter(d.default.inst.chapter)])
                                    : [3, 2]
                            );
                        case 1:
                            return t.sent(), [3, 3];
                        case 2:
                            o.type == g.Map_Group.ACTIVITY ||
                                (o.type == g.Map_Group.CHALLENGE &&
                                    S.default.inst.passChallengeFb(d.default.inst.chapter)),
                                (t.label = 3);
                        case 3:
                            return o.type != g.Map_Group.ENDLESS
                                ? [3, 5]
                                : [
                                      4,
                                      p.app.gui.openUI(u.UIEnum.WinEndlessView, M.LayerEnum.VIEW_LAYER, {
                                          chapter: e,
                                          bossNum: d.default.inst.bossNum
                                      })
                                  ];
                        case 4:
                            return t.sent(), [3, 9];
                        case 5:
                            return o.type != g.Map_Group.DEATH
                                ? [3, 7]
                                : [4, p.app.gui.openUI(u.UIEnum.WinDeathView, M.LayerEnum.VIEW_LAYER, {chapter: e})];
                        case 6:
                            return t.sent(), [3, 9];
                        case 7:
                            return [
                                4,
                                p.app.gui.openUI(u.UIEnum.WinView, M.LayerEnum.VIEW_LAYER, {chapter: e, isFirstClear: i})
                            ];
                        case 8:
                            t.sent(), (t.label = 9);
                        case 9:
                            return x.GameResLoader.loadHomeViews(), [2];
                    }
                });
            });
        }),
        (G.prototype.onBossDie = function () {
            var e = this;
            this.scheduleOnce(function () {
                var t = m.GameController.inst.getBossCount();
                console.log("[GameView]-->[line:181]:击杀boss", t),
                    0 == t && p.app.event.emit(h.EventType.On_Boss_End),
                    d.default.inst.checkMapType([g.Map_Group.ENDLESS, g.Map_Group.DEATH]) ||
                        0 != t ||
                        (m.GameController.inst.clearMoveLimit(),
                        y.MonsterController.killAll(!1),
                        m.GameController.inst.enqueue(e, function () {
                            d.default.inst.gamePlaying();
                        }));
            }, 0.5);
        }),
        (G.prototype.onJoystickEvent = function (t) {
            var e,
                o = t.type,
                n = cc.winSize.width >> 1,
                i = cc.winSize.height >> 1;
            return o == cc.Node.EventType.TOUCH_START
                ? (1 == (null === (e = D.GuideController.guideVo) || void 0 === e ? void 0 : e.idx) &&
                      (p.app.event.emit(h.EventType.Guide_Bg_Click),
                      null === (e = p.app.track) || void 0 === e || e.trackEvent(A.TrackType.First_Move)),
                  (this.joyStartPt.x = -n + t.getLocationX()),
                  (this.joyStartPt.y = -i + t.getLocationY()),
                  void this.joystick.setStartLocation(this.joyStartPt))
                : o == cc.Node.EventType.TOUCH_MOVE
                ? ((this.joyMovePt.x = -n + t.getLocationX()),
                  (this.joyMovePt.y = -i + t.getLocationY()),
                  void this.joystick.updateLocation(this.joyMovePt))
                : void this.joystick.setStartLocation(null);
        }),
        r([e.autoBind("cc.Mask", "map/bgMask")], G.prototype, "bgMask", void 0),
        r([e.autoBind("CCImage", "map/dark")], G.prototype, "dark", void 0),
        r([e.autoBind("cc.Node", "map/plantLayer")], G.prototype, "plantLayer", void 0),
        r([e.autoBind("cc.Node", "map/borderLayer")], G.prototype, "borderLayer", void 0),
        r([e.autoBind("GameUI", "ui")], G.prototype, "ui", void 0),
        r([e.autoBind("cc.Sprite", "map/mapLayer/mapBg")], G.prototype, "mapBg", void 0),
        r([e.autoBind("cc.Node", "map/uiLayer/hero")], G.prototype, "hero", void 0),
        r([e.autoBind("HpBar", "map/uiLayer/hero/heroBar")], G.prototype, "heroBar", void 0),
        r([e.autoBind("cc.Node", "map/uiLayer/goddess")], G.prototype, "goddess", void 0),
        r([e.autoBind("HpBar", "map/uiLayer/goddess/goddessBar")], G.prototype, "goddessBar", void 0),
        r([e.autoBind("cc.Node", "ui/joystickLayer")], G.prototype, "joystickLayer", void 0),
        r([e.autoBind("Joystick", "ui/joystickLayer/joystick")], G.prototype, "joystick", void 0),
        r([e.autoBind("cc.Node", "map/mapLayer")], G.prototype, "mapLayer", void 0),
        r([e.autoBind("cc.Node", "map/dropLayer")], G.prototype, "dropLayer", void 0),
        r([e.autoBind("cc.Node", "map/effectLayer1")], G.prototype, "effectLayer1", void 0),
        r([e.autoBind("cc.Node", "map/actorLayer")], G.prototype, "actorLayer", void 0),
        r([e.autoBind("cc.Node", "map/effectLayer2")], G.prototype, "effectLayer2", void 0),
        r([e.autoBind("cc.Node", "map/uiLayer")], G.prototype, "uiLayer", void 0),
        r([e.autoBind("cc.Node", "map/floatLayer")], G.prototype, "floatLayer", void 0),
        r([e.autoBind("cc.Node", "map/fontLayer")], G.prototype, "fontLayer", void 0),
        r([e.gameEvent(h.EventType.On_Hide)], G.prototype, "onHide", null),
        r([e.gameEvent(h.EventType.On_Show)], G.prototype, "onShow", null),
        r([e.gameEvent(h.EventType.Game_Reward_Monster_Hit)], G.prototype, "onDieReward", null),
        r([e.gameEvent(h.EventType.On_Guide_Monster)], G.prototype, "onGuideMonster", null),
        r([e.gameEvent(h.EventType.JoyStick_Start)], G.prototype, "onJoyStickStart", null),
        r([e.gameEvent(h.EventType.JoyStick_Stop)], G.prototype, "onJoyStickStop", null),
        r([e.gameEvent(h.EventType.On_Float)], G.prototype, "onFloatHurt", null),
        r([e.gameEvent(h.EventType.On_Exp_Drop)], G.prototype, "onExpDrop", null),
        r([e.gameEvent(h.EventType.Game_Get_Bomb)], G.prototype, "onBombEff", null),
        r([e.gameEvent(h.EventType.Game_Fail)], G.prototype, "onGameFail", null),
        r([e.gameEvent(h.EventType.Goddess_Win)], G.prototype, "onGoddessWin", null),
        r([e.gameEvent(h.EventType.Game_Win)], G.prototype, "onGameWin", null),
        r([e.gameEvent(h.EventType.Boss_Die)], G.prototype, "onBossDie", null),
        r([t], G));
function G() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.bgMask = null),
        (t.dark = null),
        (t.plantLayer = null),
        (t.borderLayer = null),
        (t.ui = null),
        (t.mapBg = null),
        (t.hero = null),
        (t.heroBar = null),
        (t.goddess = null),
        (t.goddessBar = null),
        (t.joystickLayer = null),
        (t.joystick = null),
        (t.mapLayer = null),
        (t.dropLayer = null),
        (t.effectLayer1 = null),
        (t.actorLayer = null),
        (t.effectLayer2 = null),
        (t.uiLayer = null),
        (t.floatLayer = null),
        (t.fontLayer = null),
        (t.isHiding = !1),
        (t.joyStartPt = cc.v3()),
        (t.joyMovePt = cc.v3()),
        t
    );
}
o.default = t;
