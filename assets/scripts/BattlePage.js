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
    h = t("ArrayUtil"),
    d = t("LoadUtil"),
    f = t("MathUtil"),
    y = t("BasePanel"),
    g = t("EventTypes"),
    m = t("GameConst"),
    _ = t("ActivityController"),
    v = t("AssignmentController"),
    b = t("CleanController"),
    w = t("EverydayRewardController"),
    C = t("GuideController"),
    k = t("HellDataController"),
    E = t("HolidayController"),
    S = t("InviteController"),
    M = t("MultipleController"),
    R = t("NoticeController"),
    T = t("ShareDataController"),
    D = t("TaskController"),
    P = t("UserDataController"),
    O = t("ConfData"),
    A = t("GameSetting"),
    L = t("ShareData"),
    x = t("GameEnums"),
    B = t("GuideGroup"),
    I = t("MainPageType"),
    G = t("TrackType"),
    N = t("EffectMgr"),
    U = t("GameMgr"),
    V = t("UIEnum"),
    F = t("CloseUI"),
    j = t("Font"),
    H = t("ChapterRewardItem"),
    Z = t("LobbyArcade"),
    UiStyle = t("UiStyle"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = y.default),
        i(q, l),
        (q.prototype.onEnable = function () {
            l.prototype.onEnable.call(this),
                cc.sys.isBrowser && cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.on(this.role, this.onHeadClick, this);
        }),
        (q.prototype.onDisable = function () {
            l.prototype.onDisable.call(this),
                this.unscheduleAllCallbacks(),
                M.default.inst.onDestroy(this.node, this),
                this.wobbleStop(),
                c.app.platform.hideAuthBtn(),
                cc.sys.isBrowser && cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.off(this.role);
        }),
        (q.prototype.update = function (t) {
            this.isAuth ||
                ((this.check_interval -= t), this.check_interval <= 0 && ((this.check_interval = 1), this.checkAuth()));
        }),
        (q.prototype.initView = function () {
            null === (n = c.app.track) || void 0 === n || n.trackEvent(G.TrackType.Home_Page),
                (this.hellBoxs = [this.chest1, this.chest2, this.chest3]),
                (this.hellDian = [null, this.dian1, this.dian2]);
            var t = P.default.inst.chapter;
            this.functionOn.set(V.UIEnum.ActivityView, t >= this.challenge_activity_chapter),
                this.functionOn.set(V.UIEnum.PatrolView, t >= this.evolve_patrol_chapter),
                this.functionOn.set(V.UIEnum.CleanView, t >= this.clean_chapter),
                this.functionOn.set(V.UIEnum.Death, t >= this.mode_Death_chapter),
                this.functionOn.set(this.Game_TimeScale, t >= m.GameConst.Game_TimeScale_Chapter),
                (this.btnGM.active = UiStyle.isGmEnabled()),
                (U.default.inst.chapter = t),
                F.default.inst.setNode("role", this.role);
            for (var e = 0; e < this.loongPos.length; e++) this.spotPos[e] = e;
            h.default.shuffle(this.spotPos);
            var o = this.spotPos.shift(),
                n = this.spotPos.shift();
            this.Loong.setPosition(this.loongPos[o]),
                this.shadow.setPosition(this.loongPos[o].x, this.loongPos[o].y - 100),
                this.LoongAn(o, n),
                M.default.inst.Breathing(this.btnStart, 1.05, 1, 0.8),
                M.default.inst.Breathing(this.Activity_hd, 1.2, 1, 0.9),
                M.default.inst.Breathing(this.zb_hd, 1.2, 1, 0.9),
                M.default.inst.Breathing(this.reward_hd, 1.2, 1, 0.9),
                M.default.inst.Breathing(this.invite_hd, 1.2, 1, 0.9),
                M.default.inst.Breathing(this.task_hd, 1.2, 1, 0.9),
                M.default.inst.Breathing(this.Assign_hd, 1.2, 1, 0.9),
                M.default.inst.Breathing(this.Clean_hd, 1.2, 1, 0.9),
                M.default.inst.Breathing(this.activity_hd, 1.2, 1, 0.9),
                M.default.inst.Breathing(this.Notice_hd, 1.2, 1, 0.9);
            for (var i = this.hellReward.getChildByName("content"), e = 0; e < i.childrenCount; e++) {
                var r = i.children[e];
                this.rewards.push(r.getComponent(H.default));
            }
            (this._isDeblocking = t >= this.mode_activity_chapter),
                this.setGray(this.btnHell, !this._isDeblocking),
                (this.HellStart.active = !1),
                (O.default.inst.PrizeConf.btnDrawBlockPre = this.btnDrawBlock);
        }),
        (q.prototype.updateView = function () {
            var t = O.default.inst.chapterConf.getChapterVo(P.default.inst.chapter);
            (O.default.inst.chapterConf.max_patrol_time = 36e5 * t.max_patrol_time),
                (M.default.inst.nowPage = I.MainPageType.Battle),
                M.default.inst.on(this.bg, this),
                (this.deathLab.node.parent.active = 0 < P.default.inst.deathPass),
                (this.deathLab.string = P.default.inst.deathPass + ""),
                P.default.inst.nickName || (this.nameLab.string = "玩家" + c.app.http.getUid()),
                1 == P.default.inst.checkChapterBoxReward() ? this.wobbleStart() : this.wobbleStop(),
                this.updateMode(),
                this.checkFunctionUnLock(),
                this.setActivityBtn(),
                this.showNotice_hd(),
                this.showActivity_hd(),
                this.showClean_hd(),
                this.showAssign_hd(),
                this.showReward_hd(),
                this.showInvite_hd(),
                this.showTaskRp(),
                this.showGuide(),
                this.boxIcon(),
                this.checkDeath(),
                -1 == A.GameSetting.inst.Notice_everyday_show ||
                U.default.inst.isContinue ||
                T.default.inst.inEject ||
                null != C.GuideController.guideVo ||
                1 != C.GuideController.getGuide("skin") ||
                1 != A.GameSetting.inst.Notice_index ||
                !R.default.inst.showNoticeBtn ||
                R.default.inst.isEject ||
                0 != R.default.inst.NoticeData.reward ||
                (1 != A.GameSetting.inst.Notice_everyday_show &&
                    (0 != A.GameSetting.inst.Notice_everyday_show || 0 != R.default.inst.NoticeData.prompt))
                    ? this.ejectEverydayReward()
                    : this.ejectNotice();
            // Arcade 舞台最后应用：盖过 init 里对 bg/Loong 的激活与滑动绑定副作用
            Z.applyBattleLobby(this);
            this.bg && ((this.bg.active = !1), (this.bg.opacity = 0));
            this.Loong && ((this.Loong.active = !1), (this.Loong.opacity = 0));
            this.shadow && ((this.shadow.active = !1), (this.shadow.opacity = 0));
            this.role && ((this.role.active = !1), (this.role.opacity = 0));
        }),
        (q.prototype.checkDeath = function () {
            U.default.inst.isDeathWin &&
                c.app.gui.openUI(V.UIEnum.DeathLvUpView, p.LayerEnum.TOP_LAYER, {
                    pt: this.btnDeath.convertToWorldSpaceAR(cc.v3(-30, 0))
                });
        }),
        (q.prototype.updateMode = function () {
            return a(this, void 0, void 0, function () {
                var e, o, n;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                U.default.inst.isMainGame(U.default.inst.chapter) ||
                                    ((n =
                                        U.default.inst.gameMode == x.GameMode.NORMAL
                                            ? O.default.inst.chapterConf.getMaxChapter()
                                            : O.default.inst.hellConf.maxChapter),
                                    (e =
                                        U.default.inst.gameMode == x.GameMode.NORMAL
                                            ? P.default.inst.chapter
                                            : P.default.inst.hellChapter),
                                    (o =
                                        U.default.inst.gameMode == x.GameMode.NORMAL
                                            ? this.normalChapter
                                            : this.hellChapter),
                                    (U.default.inst.chapter = cc.misc.clampf(0 == o ? e : o, 1, n))),
                                (n = O.default.inst.chapterConf.getChapterVo(U.default.inst.chapter)).type ==
                                    x.Map_Group.NORMAL &&
                                    U.default.inst.gameMode != x.GameMode.NORMAL &&
                                    (U.default.inst.gameMode = x.GameMode.NORMAL),
                                n.type == x.Map_Group.HELL &&
                                    U.default.inst.gameMode != x.GameMode.HELL &&
                                    (U.default.inst.gameMode = x.GameMode.HELL),
                                console.log(
                                    "[BattlePage]-->[line:318]:",
                                    U.default.inst.chapter,
                                    4e3 + O.default.inst.hellConf.maxLen
                                ),
                                U.default.inst.gameMode == x.GameMode.HELL &&
                                    (U.default.inst.chapter = cc.misc.clampf(
                                        U.default.inst.chapter,
                                        4001,
                                        4e3 + O.default.inst.hellConf.maxLen
                                    )),
                                (this.btnNormal.active = U.default.inst.gameMode == x.GameMode.HELL),
                                (this.btnHell.active = U.default.inst.gameMode == x.GameMode.NORMAL),
                                U.default.inst.gameMode != x.GameMode.NORMAL
                                    ? [3, 1]
                                    : (this.chapter.setChapter(U.default.inst.chapter),
                                      (this.chest.active = !0),
                                      (this.hellChest.active = !1),
                                      (this.hellReward.active = !1),
                                      (this.normalChapter = U.default.inst.chapter),
                                      [3, 4])
                            );
                        case 1:
                            return 0 < U.default.inst.hell_pass_chapter
                                ? (this.showHellView(U.default.inst.hell_pass_chapter), [4, this.autoGetHellReward()])
                                : [3, 3];
                        case 2:
                            t.sent(), (U.default.inst.hell_pass_chapter = 0), (t.label = 3);
                        case 3:
                            this.showHellView(U.default.inst.chapter), (t.label = 4);
                        case 4:
                            return [2];
                    }
                });
            });
        }),
        (q.prototype.showHellView = function (t) {
            this.chapter.setChapter(t), (this.chest.active = !1), (this.hellChapter = t);
            for (
                var e = !0,
                    o = O.default.inst.hellConf.getHellVoByFb(t),
                    n = {coin: 0, gem: 0, drawings: 0, equips: 0},
                    i = 0;
                i < 3;
                i++
            ) {
                var r = o.rewards[i];
                (this.hellBoxs[i].node.active = null != r),
                    this.hellDian[i] && (this.hellDian[i].active = null != r),
                    r &&
                        (this.hellBoxs[i].setData(o.chapter_id, i, r, i + 1 == o.rewards.length),
                        0 < r.coin && (n.coin = 1),
                        0 < r.gem && (n.gem = 1),
                        0 < r.drawings && (n.drawings = 1),
                        r.equips && (n.equips = Math.max(n.equips, r.equips.max)),
                        (r = o.chapter_id + "_" + i),
                        2 != k.default.inst.getRewardStatus(r) && (e = !1));
            }
            (this.hellChest.active = !e),
                (this.hellReward.active = e) &&
                    (this.rewards.forEach(function (t) {
                        t.node.active = !1;
                    }),
                    (this.rewards[(t = 0)].getComponent(cc.Sprite).spriteFrame = this.hellRewardBg[3]),
                    (this.rewards[0].node.active = !0),
                    this.rewards[0].setData({type: 1, value: 0, id: 0}),
                    ++t,
                    (this.rewards[1].getComponent(cc.Sprite).spriteFrame = this.hellRewardBg[3]),
                    (this.rewards[1].node.active = !0),
                    this.rewards[1].setData({type: 2, value: 0, id: 0}),
                    ++t,
                    (this.rewards[2].getComponent(cc.Sprite).spriteFrame = this.hellRewardBg[0]),
                    (this.rewards[2].node.active = !0),
                    this.rewards[2].setData({type: 3, value: 0, id: 7}),
                    ++t,
                    (this.rewards[3].getComponent(cc.Sprite).spriteFrame = this.hellRewardBg[n.equips]),
                    (this.rewards[3].node.active = !0),
                    this.rewards[3].setData({type: 4, value: 0, id: 0}));
        }),
        (q.prototype.autoGetHellReward = function () {
            var n = this;
            return new Promise(function (t) {
                var e;
                console.log("自动领取奖励"), (n.hellIndex = 0), n.getHellReward();
                function o() {
                    3 < n.hellIndex && (c.app.timer.off(n, o), t());
                }
                null === (e = c.app.timer) || void 0 === e || e.on(n, o, 0.1);
            });
        }),
        (q.prototype.getHellReward = function () {
            var t, e, o;
            this.hellIndex < 3
                ? (c.app.gui.isLock(!0),
                  (t = this.hellIndex),
                  (e = U.default.inst.hell_pass_chapter + "_" + t),
                  (o = k.default.inst.getRewardStatus(e)),
                  (this.hellIndex += 1),
                  1 == o
                      ? ((o = O.default.inst.hellConf.getHellVoByFb(U.default.inst.hell_pass_chapter)),
                        k.default.inst.getReward(e, o.rewards[t], !1),
                        null === (t = this.hellBoxs[t]) || void 0 === t || t.autoReward())
                      : this.getHellReward())
                : (this.hellIndex += 1);
        }),
        (q.prototype.checkFunctionUnLock = function () {
            var t,
                e = this.functionOn.get(V.UIEnum.ActivityView),
                o = P.default.inst.chapter;
            if (
                ((this.Activity_hd.active = !1),
                !(this.btnActivity.active = e) &&
                    o >= this.challenge_activity_chapter &&
                    (this.functionOn.set(V.UIEnum.ActivityView, !0),
                    (t = {
                        type: 1,
                        icon: this.btnActivity.getChildByName("tb_icon8").getComponent(cc.Sprite).spriteFrame,
                        describe: "活动",
                        guide: B.GuideGroup.Activity
                    }),
                    T.default.inst.addNewAbilityData(t, !0),
                    (this.btnActivity.active = !0)),
                this.btnActivity.active)
            )
                for (var n = 1; n <= O.default.inst.activityConf.getActivitys().length; n++)
                    if (0 < _.default.inst.getCanPlayCount(n)) {
                        this.Activity_hd.active = !0;
                        break;
                    }
            var i,
                e = this.functionOn.get(V.UIEnum.PatrolView);
            (this.zb_hd.active = !1),
                !(this.btnPatrol.active = e) &&
                    o >= this.evolve_patrol_chapter &&
                    (this.functionOn.set(V.UIEnum.PatrolView, !0),
                    (t = {
                        type: 1,
                        icon: this.btnPatrol.getChildByName("tb_icon1").getComponent(cc.Sprite).spriteFrame,
                        describe: "巡逻",
                        guide: B.GuideGroup.Patrol
                    }),
                    T.default.inst.addNewAbilityData(t, !0),
                    (this.btnPatrol.active = !0)),
                this.btnPatrol.active &&
                    null != (i = c.app.local.getValue("startTime")) &&
                    ((i = Date.now() - i), (this.zb_hd.active = i >= O.default.inst.chapterConf.max_patrol_time)),
                !this._isDeblocking &&
                    o >= this.mode_activity_chapter &&
                    ((this._isDeblocking = !0),
                    this.setGray(this.btnHell, !1),
                    (t = {
                        type: 1,
                        icon: this.btnHell.getChildByName("but-dy1").getComponent(cc.Sprite).spriteFrame,
                        describe: "地狱模式"
                    }),
                    T.default.inst.addNewAbilityData(t, !0)),
                (e = this.functionOn.get(V.UIEnum.Death)),
                o >= this.mode_Death_chapter
                    ? (this.setGray(this.btnDeath, !1),
                      e ||
                          (this.functionOn.set(V.UIEnum.Death, !0),
                          (t = {
                              type: 1,
                              icon: this.btnDeath.getChildByName("but-dy1").getComponent(cc.Sprite).spriteFrame,
                              describe: "死神来了"
                          }),
                          T.default.inst.addNewAbilityData(t, !0)))
                    : this.setGray(this.btnDeath, !0),
                (e = this.functionOn.get(V.UIEnum.CleanView)),
                (this.Clean_hd.active = !1),
                !(this.btnClean.active = e) &&
                    o >= this.clean_chapter &&
                    (this.functionOn.set(V.UIEnum.CleanView, !0),
                    (t = {
                        type: 1,
                        icon: this.btnClean.getChildByName("tb_icon8").getComponent(cc.Sprite).spriteFrame,
                        describe: "扫荡"
                    }),
                    T.default.inst.addNewAbilityData(t, !0),
                    (this.btnClean.active = !0)),
                !(e = this.functionOn.get(this.Game_TimeScale)) &&
                    o >= m.GameConst.Game_TimeScale_Chapter &&
                    (this.functionOn.set(this.Game_TimeScale, !0),
                    T.default.inst.addNewAbilityData(
                        (t = {type: 1, iconURL: "texture/icons/timescale", scale: 1, describe: "加速"}),
                        !0
                    )),
                U.default.inst.isContinue ||
                    0 == T.default.inst.NewAbilityData.length ||
                    ((T.default.inst.inEject = !0), c.app.gui.openUI(V.UIEnum.NewAbilityView, p.LayerEnum.VIEW_LAYER));
        }),
        (q.prototype.ejectNotice = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return this.openNotice(), [2];
                });
            });
        }),
        (q.prototype.ejectEverydayReward = function () {
            console.warn(
                "签到判定",
                U.default.inst.isContinue,
                T.default.inst.inEject,
                w.EverydayRewardController.inst.isEject,
                null != C.GuideController.guideVo,
                1 != C.GuideController.getGuide("skin")
            ),
                U.default.inst.isContinue ||
                    T.default.inst.inEject ||
                    w.EverydayRewardController.inst.isEject ||
                    null != C.GuideController.guideVo ||
                    1 != C.GuideController.getGuide("skin") ||
                    this.openEverydayRewardView();
        }),
        (q.prototype.boxIcon = function () {
            var t = P.default.inst.chest;
            P.default.inst.chest > O.default.inst.chapterRewardConf.max_id &&
                (t = O.default.inst.chapterRewardConf.max_id);
            var t = O.default.inst.chapterRewardConf.getChapterRewardVo(t),
                t = t.chapter < 3 ? 0 : t.chapter < 6 ? 1 : 2;
            this.btnBox.getComponent(cc.Sprite).spriteFrame = this.Icons[t];
        }),
        (q.prototype.LoongAn = function (e, o) {
            var n = this;
            // V2 Arcade 大厅不播共用龙动画，避免穿出夜间舞台
            if (this.Loong) {
                try {
                    cc.Tween.stopAllByTarget(this.Loong);
                } catch (t) {}
                (this.Loong.active = !1), (this.Loong.opacity = 0);
            }
            if (this.shadow) {
                try {
                    cc.Tween.stopAllByTarget(this.shadow);
                } catch (t) {}
                (this.shadow.active = !1), (this.shadow.opacity = 0);
            }
            return;
            this.spotPos.push(e), console.log(e + "去" + o);
            var t = 10,
                i = 10,
                r = 1;
            (1 != Math.abs(e - o) && 3 != Math.abs(e - o)) || ((t = 20), (i = 15), (r = 0.8)),
                1 == e && 3 == o && ((t = -30), (i = 30)),
                3 == e && 1 == o && (i = -(t = 30));
            var a = this.loongPos[e],
                s = this.loongPos[o],
                l = a.x > s.x ? 1 : -1;
            (this.Loong.scaleX = l),
                cc
                    .tween(this.shadow)
                    .to(10 * r, {x: s.x, y: s.y - 100})
                    .start(),
                cc
                    .tween(this.Loong)
                    .to(r, {x: a.x - (a.x - s.x) / 10, y: a.y - (a.y - s.y) / 10 + t})
                    .to(r, {x: a.x - (2 * (a.x - s.x)) / 10, y: a.y - (2 * (a.y - s.y)) / 10})
                    .to(r, {x: a.x - (3 * (a.x - s.x)) / 10, y: a.y - (3 * (a.y - s.y)) / 10 - i})
                    .to(r, {x: a.x - (4 * (a.x - s.x)) / 10, y: a.y - (4 * (a.y - s.y)) / 10})
                    .to(r, {x: a.x - (5 * (a.x - s.x)) / 10, y: a.y - (5 * (a.y - s.y)) / 10 + t})
                    .to(r, {x: a.x - (6 * (a.x - s.x)) / 10, y: a.y - (6 * (a.y - s.y)) / 10})
                    .to(r, {x: a.x - (7 * (a.x - s.x)) / 10, y: a.y - (7 * (a.y - s.y)) / 10 - i})
                    .to(r, {x: a.x - (8 * (a.x - s.x)) / 10, y: a.y - (8 * (a.y - s.y)) / 10})
                    .to(r, {x: a.x - (9 * (a.x - s.x)) / 10, y: a.y - (9 * (a.y - s.y)) / 10 + t})
                    .to(r, {x: a.x - (10 * (a.x - s.x)) / 10, y: a.y - (10 * (a.y - s.y)) / 10})
                    .call(function () {
                        var t;
                        0 == f.default.randomRangeInt(0, 2)
                            ? (h.default.shuffle(n.spotPos), (t = n.spotPos.shift()), n.LoongAn(o, t))
                            : (console.log("悬停"), n.suspension(e, o));
                    })
                    .start();
        }),
        (q.prototype.suspension = function (e, o) {
            // V2 Arcade：共用龙悬停动画整段停用
            if (this.Loong) {
                try {
                    cc.Tween.stopAllByTarget(this.Loong);
                } catch (t) {}
                (this.Loong.active = !1), (this.Loong.opacity = 0);
            }
            if (this.shadow) {
                try {
                    cc.Tween.stopAllByTarget(this.shadow);
                } catch (t) {}
                (this.shadow.active = !1), (this.shadow.opacity = 0);
            }
            return;
            var n = this;
            cc.tween(this.Loong)
                .to(0.8, {y: this.Loong.y + 10})
                .to(0.8, {y: this.Loong.y})
                .to(0.8, {y: this.Loong.y - 10})
                .to(0.8, {y: this.Loong.y})
                .call(function () {
                    var t;
                    n.suspensionNumNow++,
                        n.suspensionNum == n.suspensionNumNow
                            ? ((n.suspensionNumNow = 0),
                              h.default.shuffle(n.spotPos),
                              (t = n.spotPos.shift()),
                              n.LoongAn(o, t))
                            : n.suspension(e, o);
                })
                .start();
        }),
        (q.prototype.onKeyDown = function (t) {
            t.keyCode == cc.macro.KEY.g && this.onBtnGMClick(null);
        }),
        (q.prototype.wobbleStart = function () {
            this.wobbleTwee(), this.schedule(this.wobbleTwee, 1.5);
        }),
        (q.prototype.wobbleStop = function () {
            null != this._wobble &&
                (this._wobble.stop(), this.unschedule(this.wobbleTwee), (this.btnBox.angle = 0), (this._wobble = null));
        }),
        (q.prototype.wobbleTwee = function () {
            null == this._wobble && (this._wobble = M.default.inst.wobble(this.btnBox, 5, -5, 0.1)),
                this._wobble.start();
        }),
        (q.prototype.setActivityBtn = function () {
            var t = E.default.inst.activityID,
                e = E.default.inst.holidayStatus(t),
                t = O.default.inst.holidayConf.getHolidayByType(t);
            (this.activityBtn.active = 1 == e || 2 == e),
                t &&
                    this.activityBtn.active &&
                    (this.playActivityIconEffect(),
                    (this.activity_name.string = t.name),
                    (e = j.default
                        .getFon()
                        .formatDate(1e3 * t.start)
                        .split("/")),
                    (t = j.default
                        .getFon()
                        .formatDate(1e3 * t.end - 1e3)
                        .split("/")),
                    console.log(e, t),
                    (this.activity_time.string =
                        "日期：" +
                        (10 < parseInt(e[1]) ? e : e[1])[1] +
                        "." +
                        (10 < parseInt(e[2]) ? e[2] : e[2][1]) +
                        "~" +
                        (10 < parseInt(t[1]) ? t : t[1])[1] +
                        "." +
                        (10 < parseInt(t[2]) ? t[2] : t[2][1])));
        }),
        (q.prototype.playActivityIconEffect = function () {
            var t = this;
            this.activity_icon.playEff(function () {
                t.activity_icon.stop(),
                    t.scheduleOnce(function () {
                        t.playActivityIconEffect();
                    }, 4);
            });
        }),
        (q.prototype.showNotice_hd = function () {
            this.Notice_hd.active = !1;
            var t = R.default.inst.showNoticeBtn;
            (this.btnNotice.active = t) &&
                (this.activityBtn.active
                    ? ((this.btnNotice.x = 316), (this.btnNotice.y = this.btnCode.y - 100))
                    : (this.btnNotice.y = this.btnCode.y),
                (t = R.default.inst.NoticeData),
                1 == R.default.inst.renew && 0 == t.reward && (this.Notice_hd.active = !0));
        }),
        (q.prototype.showActivity_hd = function () {
            var t = E.default.inst.activityID,
                e = E.default.inst.holidayStatus(t),
                o = !1;
            2 == e
                ? (o = E.default.inst.getShowHd())
                : this.activityBtn.active &&
                  3 == e &&
                  (this.setActivityBtn(), (t = E.default.inst.getActivityView(t)), c.app.gui.closeUI(t)),
                (this.activity_hd.active = o);
        }),
        (q.prototype.showClean_hd = function () {
            this.functionOn.get(V.UIEnum.CleanView) &&
                (this.Clean_hd.active =
                    0 < b.CleanController.inst.cleanData.freeNum ||
                    (0 < b.CleanController.inst.cleanData.surplusNum &&
                        P.default.inst.energy >= A.GameSetting.inst.cleanUseEnergy));
        }),
        (q.prototype.showAssign_hd = function () {
            if (v.default.inst.isOpen) {
                for (var t = !1, e = v.default.inst.getStorage(), o = 0; o < e.assignReward.acquire.length; o++)
                    if (2 == e.assignReward.acquire[o]) {
                        t = !0;
                        break;
                    }
                if (!t)
                    for (o = 0; o < e.progData.length; o++) {
                        for (var n = 0; n < e.progData[o].alreadyGet.length; n++)
                            if (2 == e.progData[o].alreadyGet[n]) {
                                t = !0;
                                break;
                            }
                        if (t) break;
                    }
                this.Assign_hd.active = t;
            } else this.btnAssign.active = !1;
        }),
        (q.prototype.showReward_hd = function () {
            w.EverydayRewardController.inst.isGetReward || w.EverydayRewardController.inst.isGetAbundant
                ? (this.reward_hd.active = !0)
                : (this.reward_hd.active = !1);
        }),
        (q.prototype.showInvite_hd = function () {
            var t = this;
            this._inviteData = S.InviteController.inst.getStorageData();
            var e = O.default.inst.InviteConf.getAllInvite(),
                o =
                    (e.length,
                    function () {
                        e[t._inviteData.id] &&
                            t._inviteData.inviteNum >= e[t._inviteData.id].people &&
                            e[t._inviteData.id] &&
                            (console.log(t._inviteData.drawGetId[t._inviteData.id]),
                            null == t._inviteData.drawGetId[t._inviteData.id] &&
                                (t._inviteData.drawGetId.push({id: t._inviteData.id, isGet: !1}), t._inviteData.id++),
                            e[t._inviteData.id] && o());
                    });
            cc.sys.isBrowser || (this._inviteData.inviteNum = L.default.inst.inviter_num),
                o(),
                S.InviteController.inst.setStorageData(this._inviteData);
            for (var n = this._inviteData, i = !1, r = 1; r < n.drawGetId.length; r++)
                if (!n.drawGetId[r].isGet) {
                    i = !0;
                    break;
                }
            this.invite_hd.active = i;
        }),
        (q.prototype.showTaskRp = function () {
            this.task_hd.active = D.default.inst.isRedPoint;
        }),
        (q.prototype.showGuide = function () {
            var t;
            64 != (null === (t = C.GuideController.guideVo) || void 0 === t ? void 0 : t.idx) ||
                U.default.inst.isOldGuide ||
                C.GuideController.guideStart();
        }),
        (q.prototype.checkAuth = function () {
            P.default.inst.nickName
                ? this.showHead()
                : "HomeView" == c.app.gui.getLastUI().name && c.app.platform.createAuthorizeBtn(this.role);
        }),
        (q.prototype.showHead = function () {
            (this.isAuth = !0),
                (this.nameLab.string = P.default.inst.nickName.substring(0, 6)),
                P.default.inst.avatarUrl && d.default.loadRemote(P.default.inst.avatarUrl, this.head);
        }),
        (q.prototype.onViewHide = function (t) {
            0 < U.default.inst.hell_pass_chapter && t == V.UIEnum.ReturnMaterialView && this.getHellReward();
        }),
        (q.prototype.onViewShow = function () {
            this.isAuth || c.app.platform.hideAuthBtn();
        }),
        (q.prototype.onBattleNoticeChange = function () {
            this.showNotice_hd();
        }),
        (q.prototype.onBattleActivityChange = function () {
            this.showActivity_hd();
        }),
        (q.prototype.onBattleCleanChange = function () {
            this.showClean_hd();
        }),
        (q.prototype.onBattleAssignChange = function () {
            this.showAssign_hd();
        }),
        (q.prototype.onGetHellBox = function () {
            this.updateMode();
        }),
        (q.prototype.onGameModeChange = function () {
            U.default.inst.gameMode == x.GameMode.NORMAL
                ? (U.default.inst.chapter = this.normalChapter || P.default.inst.chapter)
                : (U.default.inst.chapter = this.hellChapter || P.default.inst.hellChapter),
                this.updateMode();
        }),
        (q.prototype.onBattleEverydayRewardChange = function () {
            this.showReward_hd();
        }),
        (q.prototype.onBattleInviteRewardChange = function () {
            this.showInvite_hd();
        }),
        (q.prototype.onTaskUpdate = function () {
            this.showTaskRp();
        }),
        (q.prototype.onUserAuth = function (t) {
            P.default.inst.setUserInfo(t), this.showHead();
        }),
        (q.prototype.onBtnStartClick = function () {
            var e;
            return a(this, void 0, void 0, function () {
                var t;
                return s(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return 0 < U.default.inst.hell_pass_chapter
                                ? [2]
                                : U.default.inst.gameMode == x.GameMode.HELL &&
                                  (t = U.default.inst.chapter - 4e3) > P.default.inst.chapter
                                ? (N.default.inst.showTips("需先通关第" + t + "章普通关卡才可继续挑战"), [2])
                                : (null === (e = c.app.track) || void 0 === e || e.trackEvent(G.TrackType.Start_Click),
                                  [4, c.app.gui.openUI(V.UIEnum.ChoseChapterView)]);
                        case 1:
                            return o.sent(), c.app.gui.closeUI(V.UIEnum.HomeView), [2];
                    }
                });
            });
        }),
        (q.prototype.onBtnBoxClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, c.app.gui.openUI(V.UIEnum.ChapterRewardView, p.LayerEnum.VIEW_LAYER)];
                        case 1:
                            return t.sent(), c.app.gui.closeUI(V.UIEnum.HomeView), [2];
                    }
                });
            });
        }),
        (q.prototype.onBtnSettingClick = function () {
            c.app.gui.openUI(V.UIEnum.SetupView, p.LayerEnum.VIEW_LAYER);
        }),
        (q.prototype.onBtnMailClick = function () {}),
        (q.prototype.onBtnTicketClick = function () {}),
        (q.prototype.openNotice = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, c.app.gui.closeUI(V.UIEnum.WaitingView)];
                        case 1:
                            return t.sent(), [4, c.app.gui.openUI(V.UIEnum.NoticeView, p.LayerEnum.VIEW_LAYER)];
                        case 2:
                            return t.sent(), c.app.gui.closeUI(V.UIEnum.WaitingView), [2];
                    }
                });
            });
        }),
        (q.prototype.openEverydayRewardView = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, c.app.gui.openUI(V.UIEnum.WaitingView, p.LayerEnum.TOP_LAYER)];
                        case 1:
                            return t.sent(), [4, c.app.gui.openUI(V.UIEnum.EverydayRewardView, p.LayerEnum.VIEW_LAYER)];
                        case 2:
                            return t.sent(), c.app.gui.closeUI(V.UIEnum.WaitingView), [2];
                    }
                });
            });
        }),
        (q.prototype.onBtnActivityClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.functionOn.get(V.UIEnum.ActivityView)
                                ? [4, c.app.gui.openUI(V.UIEnum.WaitingView, p.LayerEnum.TOP_LAYER)]
                                : (N.default.inst.showTips(
                                      "通关章节" + (this.challenge_activity_chapter - 1) + "后解锁"
                                  ),
                                  [2]);
                        case 1:
                            return t.sent(), [4, c.app.gui.openUI(V.UIEnum.ActivityView, p.LayerEnum.VIEW_LAYER)];
                        case 2:
                            return (
                                t.sent(),
                                c.app.gui.closeUI(V.UIEnum.WaitingView),
                                c.app.gui.closeUI(V.UIEnum.HomeView),
                                [2]
                            );
                    }
                });
            });
        }),
        (q.prototype.onBtnWealClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return [2];
                });
            });
        }),
        (q.prototype.onBtnGMClick = function () {
            c.app.gui.openUI(V.UIEnum.DebugView, p.LayerEnum.TOP_LAYER, {page: 1});
        }),
        (q.prototype.onBtnPatrolClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.functionOn.get(V.UIEnum.PatrolView)
                                ? [4, c.app.gui.openUI(V.UIEnum.WaitingView, p.LayerEnum.TOP_LAYER)]
                                : (N.default.inst.showTips("通关章节" + this.evolve_patrol_chapter + "后解锁"), [2]);
                        case 1:
                            return t.sent(), [4, c.app.gui.openUI(V.UIEnum.PatrolView, p.LayerEnum.VIEW_LAYER)];
                        case 2:
                            return (
                                t.sent(),
                                c.app.gui.closeUI(V.UIEnum.WaitingView),
                                c.app.gui.closeUI(V.UIEnum.HomeView),
                                [2]
                            );
                    }
                });
            });
        }),
        (q.prototype.onBtnRewardClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    return this.openEverydayRewardView(), [2];
                });
            });
        }),
        (q.prototype.onBtnInviteClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, c.app.gui.openUI(V.UIEnum.WaitingView, p.LayerEnum.TOP_LAYER)];
                        case 1:
                            return t.sent(), [4, c.app.gui.openUI(V.UIEnum.InviteView, p.LayerEnum.VIEW_LAYER)];
                        case 2:
                            return t.sent(), c.app.gui.closeUI(V.UIEnum.WaitingView), [2];
                    }
                });
            });
        }),
        (q.prototype.onBtnTaskClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, c.app.gui.openUI(V.UIEnum.WaitingView, p.LayerEnum.TOP_LAYER)];
                        case 1:
                            return t.sent(), [4, c.app.gui.openUI(V.UIEnum.TaskView, p.LayerEnum.VIEW_LAYER)];
                        case 2:
                            return t.sent(), c.app.gui.closeUI(V.UIEnum.WaitingView), [2];
                    }
                });
            });
        }),
        (q.prototype.onBtnAssignClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, c.app.gui.openUI(V.UIEnum.WaitingView, p.LayerEnum.TOP_LAYER)];
                        case 1:
                            return t.sent(), [4, c.app.gui.openUI(V.UIEnum.AssignmentView, p.LayerEnum.VIEW_LAYER)];
                        case 2:
                            return t.sent(), c.app.gui.closeUI(V.UIEnum.WaitingView), [2];
                    }
                });
            });
        }),
        (q.prototype.onBtnNormalClick = function () {
            c.app.gui.closeUI(V.UIEnum.DescribeBlackView),
                (this.HellStart.active = !1),
                U.default.inst.gameMode != x.GameMode.NORMAL && (U.default.inst.gameMode = x.GameMode.NORMAL);
        }),
        (q.prototype.onBtnHellClick = function () {
            P.default.inst.chapter >= this.mode_activity_chapter
                ? ((this.HellStart.active = !0),
                  c.app.gui.closeUI(V.UIEnum.DescribeBlackView),
                  U.default.inst.gameMode != x.GameMode.HELL && (U.default.inst.gameMode = x.GameMode.HELL))
                : N.default.inst.showTips("通关章节" + (this.mode_activity_chapter - 1) + "后解锁");
        }),
        (q.prototype.onBtnDeathClick = function () {
            var t;
            P.default.inst.chapter < this.mode_Death_chapter
                ? N.default.inst.showTips("通关章节" + (this.mode_Death_chapter - 1) + "后解锁")
                : (null === (t = c.app.track) || void 0 === t || t.trackEvent("click_death"),
                  (U.default.inst.chapter = 5001),
                  U.default.inst.playGame(U.default.inst.chapter, !0));
        }),
        (q.prototype.onHeadClick = function () {
            (cc.sys.isBrowser || P.default.inst.nickName) &&
                c.app.gui.openUI(V.UIEnum.UserInfoView, p.LayerEnum.TOP_LAYER);
        }),
        (q.prototype.onBtnCleanClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.functionOn.get(V.UIEnum.CleanView)
                                ? [4, c.app.gui.openUI(V.UIEnum.WaitingView, p.LayerEnum.TOP_LAYER)]
                                : (N.default.inst.showTips("通关章节" + this.clean_chapter + "后解锁"), [2]);
                        case 1:
                            return t.sent(), [4, c.app.gui.openUI(V.UIEnum.CleanView, p.LayerEnum.VIEW_LAYER)];
                        case 2:
                            return t.sent(), c.app.gui.closeUI(V.UIEnum.WaitingView), [2];
                    }
                });
            });
        }),
        (q.prototype.onActivityBtnClick = function () {
            return a(this, void 0, void 0, function () {
                var e, o, n, i, r;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = E.default.inst.activityID),
                                (o = E.default.inst.holidayStatus(e)),
                                (n = E.default.inst.isRefresh()),
                                1 != o ? [3, 1] : (N.default.inst.showTips("尚未达到活动开启时间"), [3, 4])
                            );
                        case 1:
                            return 2 != o
                                ? [3, 4]
                                : n
                                ? ((i = E.default.inst.getActivityView()),
                                  (r = E.default.inst.getOpenTime(e)),
                                  [4, c.app.gui.openUI(V.UIEnum.WaitingView, p.LayerEnum.TOP_LAYER)])
                                : (N.default.inst.showTips("尚未刷新，请稍后..."), [2]);
                        case 2:
                            return t.sent(), [4, c.app.gui.openUI(i, p.LayerEnum.VIEW_LAYER)];
                        case 3:
                            t.sent(),
                                console.log(r),
                                0 == r
                                    ? c.app.gui.closeUI(V.UIEnum.WaitingView)
                                    : this.scheduleOnce(function () {
                                          c.app.gui.closeUI(V.UIEnum.WaitingView);
                                      }, r),
                                (t.label = 4);
                        case 4:
                            return [2];
                    }
                });
            });
        }),
        (q.prototype.onBtnCodeClick = function () {
            c.app.gui.openUI(V.UIEnum.CodeRewardsView, p.LayerEnum.VIEW_LAYER);
        }),
        (q.prototype.onBtnNoticeClick = function () {
            this.openNotice();
        }),
        r([u.autoBind("cc.Node", "top/btnNotice")], q.prototype, "btnNotice", void 0),
        r([u.autoBind("cc.Node", "top/btnNotice/Notice_hd")], q.prototype, "Notice_hd", void 0),
        r([u.autoBind("cc.Node", "top/btnCode")], q.prototype, "btnCode", void 0),
        r([u.autoBind("cc.Node", "festivalActivityBtn/activityBtn")], q.prototype, "activityBtn", void 0),
        r(
            [u.autoBind("SpineEffect", "festivalActivityBtn/activityBtn/activity_icon")],
            q.prototype,
            "activity_icon",
            void 0
        ),
        r([u.autoBind("cc.Node", "festivalActivityBtn/activityBtn/activity_hd")], q.prototype, "activity_hd", void 0),
        r(
            [u.autoBind("cc.Label", "festivalActivityBtn/activityBtn/activity_name")],
            q.prototype,
            "activity_name",
            void 0
        ),
        r(
            [u.autoBind("cc.Label", "festivalActivityBtn/activityBtn/activity_time")],
            q.prototype,
            "activity_time",
            void 0
        ),
        r([u.autoBind("cc.Label", "modes/btnDeath/layout/deathLab")], q.prototype, "deathLab", void 0),
        r([u.autoBind("cc.Label", "top/role/nameLab")], q.prototype, "nameLab", void 0),
        r([u.autoBind("cc.Node", "top/btnClean/Clean_hd")], q.prototype, "Clean_hd", void 0),
        r([u.autoBind("cc.Node", "top/btnClean")], q.prototype, "btnClean", void 0),
        r([u.autoBind("cc.Node", "btnStart/HellStart")], q.prototype, "HellStart", void 0),
        r([u.autoBind("cc.Node", "top/btnAssign")], q.prototype, "btnAssign", void 0),
        r([u.autoBind("cc.Node", "top/btnAssign/Assign_hd")], q.prototype, "Assign_hd", void 0),
        r([u.autoBind("cc.Node", "hellReward")], q.prototype, "hellReward", void 0),
        r([u.autoBind("cc.Node", "modes/btnNormal")], q.prototype, "btnNormal", void 0),
        r([u.autoBind("cc.Node", "modes/btnHell")], q.prototype, "btnHell", void 0),
        r([u.autoBind("cc.Node", "modes/btnDeath")], q.prototype, "btnDeath", void 0),
        r([u.autoBind("cc.Node", "chest")], q.prototype, "chest", void 0),
        r([u.autoBind("cc.Node", "hellChest")], q.prototype, "hellChest", void 0),
        r([u.autoBind("HellChestBox", "hellChest/chest1")], q.prototype, "chest1", void 0),
        r([u.autoBind("HellChestBox", "hellChest/chest2")], q.prototype, "chest2", void 0),
        r([u.autoBind("HellChestBox", "hellChest/chest3")], q.prototype, "chest3", void 0),
        r([u.autoBind("cc.Node", "hellChest/dian1")], q.prototype, "dian1", void 0),
        r([u.autoBind("cc.Node", "hellChest/dian2")], q.prototype, "dian2", void 0),
        r([u.autoBind("cc.Sprite", "top/role/mask/head")], q.prototype, "head", void 0),
        r([u.autoBind("cc.Node", "top/btnTask")], q.prototype, "btnTask", void 0),
        r([u.autoBind("cc.Node", "top/btnTask/task_hd")], q.prototype, "task_hd", void 0),
        r([u.autoBind("cc.Node", "top/btnReward")], q.prototype, "btnReward", void 0),
        r([u.autoBind("cc.Node", "top/btnInvite")], q.prototype, "btnInvite", void 0),
        r([u.autoBind("cc.Node", "top/btnReward/reward_hd")], q.prototype, "reward_hd", void 0),
        r([u.autoBind("cc.Node", "top/btnInvite/invite_hd")], q.prototype, "invite_hd", void 0),
        r([u.autoBind("cc.Node", "bg")], q.prototype, "bg", void 0),
        r([u.autoBind("cc.Node", "shadow")], q.prototype, "shadow", void 0),
        r([u.autoBind("cc.Node", "Loong")], q.prototype, "Loong", void 0),
        r([u.autoBind("cc.Node", "top/btnActivity/Activity_hd")], q.prototype, "Activity_hd", void 0),
        r([u.autoBind("cc.Node", "btnPatrol/zb_hd")], q.prototype, "zb_hd", void 0),
        r([u.autoBind("cc.Node", "btnPatrol")], q.prototype, "btnPatrol", void 0),
        r([u.autoBind("cc.Node", "top/btnGM")], q.prototype, "btnGM", void 0),
        r([u.autoBind("cc.Node", "btnStart")], q.prototype, "btnStart", void 0),
        r([u.autoBind("ChapterNode", "chapter")], q.prototype, "chapter", void 0),
        r([u.autoBind("cc.Node", "top")], q.prototype, "top", void 0),
        r([u.autoBind("cc.Node", "chest/btnBox")], q.prototype, "btnBox", void 0),
        r([u.autoBind("cc.Node", "top/role")], q.prototype, "role", void 0),
        r([u.autoBind("cc.Node", "top/btnSetting")], q.prototype, "btnSetting", void 0),
        r([u.autoBind("cc.Node", "top/btnMail")], q.prototype, "btnMail", void 0),
        r([u.autoBind("cc.Node", "top/btnTicket")], q.prototype, "btnTicket", void 0),
        r([u.autoBind("cc.Node", "top/btnActivity")], q.prototype, "btnActivity", void 0),
        r([u.autoBind("cc.Node", "top/btnWeal")], q.prototype, "btnWeal", void 0),
        r([e([cc.SpriteFrame])], q.prototype, "Icons", void 0),
        r([e([cc.SpriteFrame])], q.prototype, "hellRewardBg", void 0),
        r([e(cc.Prefab)], q.prototype, "btnDrawBlock", void 0),
        r([u.gameEvent(g.EventType.On_View_Hide)], q.prototype, "onViewHide", null),
        r([u.gameEvent(g.EventType.On_View_Show)], q.prototype, "onViewShow", null),
        r([u.gameEvent(g.EventType.Battle_Notice_Change)], q.prototype, "onBattleNoticeChange", null),
        r([u.gameEvent(g.EventType.Battle_Activity_Change)], q.prototype, "onBattleActivityChange", null),
        r([u.gameEvent(g.EventType.Battle_Clean_Change)], q.prototype, "onBattleCleanChange", null),
        r([u.gameEvent(g.EventType.Battle_Assign_Change)], q.prototype, "onBattleAssignChange", null),
        r([u.gameEvent(g.EventType.On_Get_Hell_Box_Reward)], q.prototype, "onGetHellBox", null),
        r([u.gameEvent(g.EventType.Game_Mode_Change)], q.prototype, "onGameModeChange", null),
        r([u.gameEvent(g.EventType.Battle_Everyday_Reward_Change)], q.prototype, "onBattleEverydayRewardChange", null),
        r([u.gameEvent(g.EventType.Battle_Invite_Reward_Change)], q.prototype, "onBattleInviteRewardChange", null),
        r([u.gameEvent(g.EventType.On_Task_Update)], q.prototype, "onTaskUpdate", null),
        r([u.gameEvent(g.EventType.User_Auth)], q.prototype, "onUserAuth", null),
        r([t], q));
function q() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.btnNotice = null),
        (t.Notice_hd = null),
        (t.btnCode = null),
        (t.activityBtn = null),
        (t.activity_icon = null),
        (t.activity_hd = null),
        (t.activity_name = null),
        (t.activity_time = null),
        (t.deathLab = null),
        (t.nameLab = null),
        (t.Clean_hd = null),
        (t.btnClean = null),
        (t.HellStart = null),
        (t.btnAssign = null),
        (t.Assign_hd = null),
        (t.hellReward = null),
        (t.btnNormal = null),
        (t.btnHell = null),
        (t.btnDeath = null),
        (t.chest = null),
        (t.hellChest = null),
        (t.chest1 = null),
        (t.chest2 = null),
        (t.chest3 = null),
        (t.dian1 = null),
        (t.dian2 = null),
        (t.head = null),
        (t.btnTask = null),
        (t.task_hd = null),
        (t.btnReward = null),
        (t.btnInvite = null),
        (t.reward_hd = null),
        (t.invite_hd = null),
        (t.bg = null),
        (t.shadow = null),
        (t.Loong = null),
        (t.Activity_hd = null),
        (t.zb_hd = null),
        (t.btnPatrol = null),
        (t.btnGM = null),
        (t.btnStart = null),
        (t.chapter = null),
        (t.top = null),
        (t.btnBox = null),
        (t.role = null),
        (t.btnSetting = null),
        (t.btnMail = null),
        (t.btnTicket = null),
        (t.btnActivity = null),
        (t.btnWeal = null),
        (t.Icons = []),
        (t.hellRewardBg = []),
        (t.btnDrawBlock = null),
        (t.rewards = []),
        (t.normalChapter = 0),
        (t.hellChapter = 0),
        (t.functionOn = new Map()),
        (t.clean_chapter = 7),
        (t.evolve_patrol_chapter = 4),
        (t.challenge_activity_chapter = 6),
        (t.mode_activity_chapter = 6),
        (t.mode_Death_chapter = 8),
        (t.Game_TimeScale = 501),
        (t._isDeblocking = !1),
        (t._wobble = null),
        (t.loongPos = [
            cc.v2(160, 200),
            cc.v2(100, 95),
            cc.v2(-60, 50),
            cc.v2(-170, 160),
            cc.v2(-90, 260),
            cc.v2(55, 240)
        ]),
        (t.spotPos = []),
        (t.suspensionNum = 2),
        (t.suspensionNumNow = 0),
        (t._inviteData = null),
        (t.hellBoxs = []),
        (t.hellDian = []),
        (t.isAuth = !1),
        (t.check_interval = 1),
        (t.hellIndex = 0),
        t
    );
}
o.default = t;
