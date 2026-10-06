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
    u = t("CCSkeleton"),
    p = t("ArrayUtil"),
    h = t("MathUtil"),
    d = t("EventTypes"),
    f = t("DropController"),
    y = t("GameController"),
    g = t("GameDataController"),
    m = t("GoddessController"),
    _ = t("TaskController"),
    v = t("ConfData"),
    b = t("GameSetting"),
    w = t("Flash"),
    C = t("DropType"),
    k = t("FloatFontType"),
    E = t("GameEnums"),
    S = t("TrackType"),
    M = t("GameMgr"),
    R = t("Monster"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = R.default),
        i(T, l),
        Object.defineProperty(T.prototype, "type", {
            get: function () {
                return E.MonsterType.BOSS;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(T.prototype, "canMove", {
            get: function () {
                return this.move_delay < cc.director.getTotalTime() && this.isAllowMove;
            },
            enumerable: !1,
            configurable: !0
        }),
        (T.prototype.onLoad = function () {
            l.prototype.onLoad.call(this),
                (this.body.autoClear = !0),
                (this.flashComp = this.body.node.addComponent(w.default)),
                this.flashComp.setColor(cc.Color.WHITE.fromHEX("#EAEAEA"));
        }),
        (T.prototype.onEnable = function () {
            var t,
                e = this;
            l.prototype.onEnable.call(this),
                (this.arrow.active = !1),
                (this.circle = this.node.getChildByName("circle")),
                (this.move_delay = cc.director.getTotalTime() + 500),
                this.scheduleOnce(function () {
                    return a(e, void 0, void 0, function () {
                        return s(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.body.setSource(this.mSkin.url, "actors")];
                                case 1:
                                    return (
                                        t.sent(),
                                        this.body.setSkin("default"),
                                        (this.isReady = !0),
                                        this.onIdle(),
                                        M.default.inst.checkMapType([E.Map_Group.ENDLESS, E.Map_Group.DEATH]) &&
                                            c.app.event.emit(d.EventType.Game_Show_Dir_Guide, {
                                                type: 2,
                                                target: this,
                                                iconUrl: this.mSkin.head,
                                                bundle: "icons"
                                            }),
                                        [2]
                                    );
                            }
                        });
                    });
                }, 0.1),
                b.GameSetting.inst.isDebug &&
                    this.circle &&
                    ((this.circle.active = !0),
                    this.scheduleOnce(function () {
                        return a(e, void 0, void 0, function () {
                            var t;
                            return s(this, function () {
                                return (
                                    (t = this.getCircle()),
                                    (this.circle.position = this.offset),
                                    (this.circle.width = this.circle.height = 2 * t.raduis),
                                    [2]
                                );
                            });
                        });
                    }, 3)),
                1 == M.default.inst.trackData.bossStatus &&
                    (console.log("本次游戏第一个boss来临"),
                    null === (t = c.app.track) || void 0 === t || t.trackEvent(S.TrackType.First_Boss_Come));
        }),
        (T.prototype.setScale = function (t) {
            (this.bodyScale = t), (this.body.node.scale = t);
        }),
        (T.prototype.setDir = function (t) {
            this.body.node.scaleX = -t * this.bodyScale * (1 == this.mSkin.mirror ? -1 : 1);
        }),
        (T.prototype.onIdle = function () {
            this.isReady &&
                !this._isDie &&
                this.body.setAnimation({act: E.BossActs.WALK, loop: !0, timeScale: M.default.inst.timeScale});
        }),
        (T.prototype.onMove = function () {
            this.isReady &&
                !this._isDie &&
                this.body.setAnimation({act: E.BossActs.WALK, loop: !0, timeScale: M.default.inst.timeScale});
        }),
        (T.prototype.onAttack = function () {
            var e = this;
            return new Promise(function (t) {
                e.isReady && !e._isDie
                    ? e.body.setAnimation({
                          act: E.BossActs.ATTACK,
                          loop: !1,
                          timeScale: 1.5 * M.default.inst.timeScale,
                          complete: function () {
                              e.onIdle(), t();
                          }
                      })
                    : t();
            });
        }),
        (T.prototype.showArrow = function () {
            var t = M.default.inst.getTargetCenterPos(this.target),
                t = h.default.getAngleTwoPoint(this.moveComp.getPosition(), t);
            (this.arrow.active = !0), (this.arrow.angle = t);
        }),
        (T.prototype.hideArrow = function () {
            this.arrow.active = !1;
        }),
        (T.prototype.onLostHp = function (t, e) {
            l.prototype.onLostHp.call(this, t, e),
                c.app.event.emit(d.EventType.On_Boss_Hp_Change, cc.misc.clamp01(this.hp / this.maxHp)),
                this.isDie || this.flashComp.play();
        }),
        (T.prototype.onDie = function () {
            var t,
                e = this;
            _.default.inst.addWeek("kill_boss", 1),
                c.app.sound.playEffect("BOSS死亡音效"),
                (M.default.inst.bossNum += 1),
                g.default.inst.setBossNum(M.default.inst.bossNum),
                1 == M.default.inst.trackData.bossStatus &&
                    (console.log("本次游戏第一个boss死亡"),
                    (M.default.inst.trackData.bossStatus = 2),
                    null === (t = c.app.track) || void 0 === t || t.trackEvent(S.TrackType.First_Boss_Die)),
                this.body.setAnimation({
                    act: E.BossActs.DIE,
                    loop: !1,
                    timeScale: M.default.inst.timeScale,
                    complete: function () {
                        l.prototype.onDie.call(e),
                            e.node.uuid == y.GameController.inst.bossid && M.default.inst.nextBoss(),
                            c.app.event.emit(d.EventType.Boss_Die, e.node.position);
                    }
                });
        }),
        (T.prototype.onUpdate = function (t) {
            var e;
            l.prototype.onUpdate.call(this, t),
                M.default.inst.checkMapType([E.Map_Group.DEATH]) &&
                    null !== (e = m.GoddessController.attrData) &&
                    void 0 !== e &&
                    e.boss_hp_add &&
                    ((this.hp_time -= t),
                    this.hp_time <= 0 &&
                        ((this.hp_time = 1),
                        this.addHp(
                            Math.floor(
                                this.maxHp *
                                    (null === (t = m.GoddessController.attrData) || void 0 === t
                                        ? void 0
                                        : t.boss_hp_add)
                            )
                        )));
        }),
        (T.prototype.addHp = function (t) {
            (this.hp += t),
                c.app.event.emit(d.EventType.On_Boss_Hp_Change, cc.misc.clamp01(this.hp / this.maxHp)),
                c.app.event.emit(d.EventType.On_Float, {
                    pt: this.moveComp.getPosition(),
                    msg: "" + t,
                    type: k.FloatFontType.hp
                });
        }),
        (T.prototype.checkDrop = function () {
            var t, e, o, n, i, r;
            0 != M.default.inst.getFixedLen() &&
                ((o = this.node.position),
                (t = [C.DropType.Magnet, C.DropType.Chest, C.DropType.Smked]),
                (e = []),
                (n = o.add(cc.v3(h.default.randomRangeInt(20, 60), h.default.randomRangeInt(20, 60)))),
                e.push(n),
                (n = o.add(cc.v3(h.default.randomRangeInt(-60, -20), h.default.randomRangeInt(20, 60)))),
                e.push(n),
                (n = o.add(cc.v3(h.default.randomRangeInt(-60, -20), h.default.randomRangeInt(-60, -20)))),
                e.push(n),
                (n = o.add(cc.v3(h.default.randomRangeInt(20, 60), h.default.randomRangeInt(-60, -20)))),
                e.push(n),
                p.default.shuffle(e),
                (n = o = r = !0),
                M.default.inst.checkMapType([E.Map_Group.NORMAL])
                    ? 10 < M.default.inst.chapter && (n = !1)
                    : M.default.inst.checkMapType([E.Map_Group.CHALLENGE])
                    ? (i = v.default.inst.challengeConf.getFbByChapter(M.default.inst.chapter)) &&
                      10 < i.chapter &&
                      (n = !1)
                    : M.default.inst.checkMapType([E.Map_Group.HELL])
                    ? (n = !1)
                    : M.default.inst.checkMapType([E.Map_Group.ENDLESS])
                    ? ((r = n = !1), (o = h.default.randomRangeInt(0, 100) <= b.GameSetting.inst.endless_chest_rate))
                    : M.default.inst.checkMapType([E.Map_Group.DEATH]) &&
                      ((n = !1),
                      (i = (null === (i = m.GoddessController.attrData) || void 0 === i ? void 0 : i.Magnet_rate) || 1),
                      (r = Math.random() < i)),
                r && f.default.inst.addDrop({type: t[0], data: {pt: e[0], type: 0, value: 0}}),
                o && f.default.inst.addDrop({type: t[1], data: {pt: e[1], type: 0, value: 0}}),
                n && f.default.inst.addDrop({type: t[2], data: {pt: e[2], type: 0, value: 0.5}}));
        }),
        r([e(u.default)], T.prototype, "body", void 0),
        r([e(cc.Node)], T.prototype, "arrow", void 0),
        r([t], T));
function T() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.body = null),
        (t.arrow = null),
        (t.isReady = !1),
        (t.flashComp = null),
        (t.move_delay = 0),
        (t.circle = null),
        (t.hp_time = 1),
        t
    );
}
o.default = t;
