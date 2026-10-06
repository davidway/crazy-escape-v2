var t = require;
var e = module;
var o = exports;
var u =
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
    y =
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
Object.defineProperty(o, "__esModule", {value: !0}), (o.MonsterController = void 0);
var p = t("App"),
    c = t("ResMgr"),
    g = t("MathUtil"),
    h = t("EventTypes"),
    d = t("ResUtils"),
    i = t("ConfData"),
    r = t("GameSetting"),
    m = t("GameEnums"),
    a = t("KillType"),
    s = t("AgilityMob"),
    l = t("Monster"),
    f = t("BossCome"),
    n = t("MonsterSkillController"),
    _ = t("GameMgr"),
    v = t("GameController"),
    b = t("GameDataController"),
    w = t("GuideController"),
    C = t("HeroController"),
    t =
        ((k.prototype.setLayer = function (t, e, o) {
            (this.layer = t), (this.bottomLayer = e), (this.topLayer = o), n.MonsterSkillController.setLayer(e, o);
        }),
        (k.prototype.setChapterVo = function (t) {
            var e, o;
            (this.chapterVo = t),
                (this.maptype = t.map_type),
                (this.isBossCome = !1),
                this.maptype == m.MapType.LIMIT_MAP &&
                    ((e = t.map_size.width >> 1),
                    (o = t.map_size.heiht >> 1),
                    (this.limitRect.x = 50 - e),
                    (this.limitRect.y = 50 - o),
                    (this.limitRect.width = t.map_size.width - 100),
                    (this.limitRect.height = t.map_size.heiht - 100),
                    console.warn("[MonsterController]-->[line:70]:", this.limitRect));
        }),
        (k.prototype.addRoundMonster = function (t) {
            t.round_type == m.FixedType.BOSS && ((this.rounds.length = 0), (this.awaitList.length = 0)),
                b.default.inst.setRound(t.index);
            t = this.copyRoundVo(t);
            this.rounds.push(t), this.createMonster(t);
        }),
        (k.prototype.onBossCome = function () {}),
        (k.prototype.clear = function () {
            (this.awaitList.length = 0), (this.rounds.length = 0), (this.time = 0);
            var e = [];
            this.layer.children.forEach(function (t) {
                e.push(t);
            }),
                e.forEach(function (t) {
                    c.default.inst.putNodeToPool(t);
                });
        }),
        (k.prototype.getChildrenNum = function () {
            return this.layer.childrenCount;
        }),
        (k.prototype.killAll = function (t) {
            console.warn("消灭所有:", this.layer.childrenCount, t);
            for (var e = this.layer.childrenCount - 1; 0 <= e; e--) {
                var o,
                    n = this.layer.children[e].getComponent(l.default);
                n &&
                    (t
                        ? n.type == m.MonsterType.BOSS || n.type == m.MonsterType.ELITE
                            ? ((o = i.default.inst.constConf.getValue("bomb_rate")), n.onLostHpRate(o))
                            : n.type != m.MonsterType.FENCE && n.kill(a.KillType.Bomb)
                        : n.kill(a.KillType.Clean));
            }
        }),
        (k.prototype.createLastRound = function () {
            this.lastRound &&
                _.default.inst.onStatus(m.GameStatus.PLAYING) &&
                (console.log("[MonsterController]-->[line:63]:刷新一波"), this.createMonster(this.lastRound));
        }),
        (k.prototype.createMonster = function (e) {
            return u(this, void 0, void 0, function () {
                var t;
                return y(this, function () {
                    if (
                        ((e.count += 1),
                        (e.exeTime = this.time + e.create_interval),
                        (t = i.default.inst.monsterConf.getMonserVo(e.monster_id)))
                    )
                        if ((1 == t.is_reward && (t.type = m.MonsterType.REWARD_MOB), t.type == m.MonsterType.MOB))
                            this.newMob(e),
                                (this.lastRound = this.copyRoundVo(e)),
                                (this.lastRound.count = e.create_count - 1);
                        else if (t.type == m.MonsterType.ELITE) this.addElite(e);
                        else if (t.type == m.MonsterType.AGILITY_MOB) this.createAgilityMob(e);
                        else if (t.type == m.MonsterType.REWARD_MOB) this.addRewardMob(e);
                        else if (t.type == m.MonsterType.BOSS)
                            if ((p.app.event.emit(h.EventType.On_Boss_Start), _.default.inst.isEndlessGame)) {
                                if (v.GameController.inst.getBossCount() >= r.GameSetting.inst.endless_boss_num)
                                    return [2];
                                p.app.sound.playMusic("BOSS战音效"), this.showBossCome(e);
                            } else if (_.default.inst.checkMapType([m.Map_Group.DEATH])) {
                                if (v.GameController.inst.getBossCount() >= r.GameSetting.inst.death_boss_num)
                                    return [2];
                                this.showBossCome(e);
                            } else
                                _.default.inst.gameBoss(),
                                    this.killAll(!1),
                                    this.createFence(e),
                                    p.app.sound.playMusic("BOSS战音效"),
                                    this.showBossCome(e);
                    return [2];
                });
            });
        }),
        (k.prototype.showBossCome = function (l) {
            return u(this, void 0, void 0, function () {
                var e,
                    o,
                    n,
                    i,
                    r,
                    a,
                    s = this;
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.isBossCome
                                ? [2]
                                : ((this.isBossCome = !0),
                                  [
                                      4,
                                      c.default.inst.getNodeFromPool(
                                          d.ResUtils.Prefabs.bossCome.url,
                                          d.ResUtils.Prefabs.bossCome.bundle
                                      )
                                  ]);
                        case 1:
                            return (
                                ((e = t.sent()).parent = this.bottomLayer),
                                (o = e.getComponent(f.default)),
                                (n = C.HeroController.getHeroPos()),
                                (i = cc.v3(0, 0)),
                                this.maptype == m.MapType.BIG_MAP || this.maptype == m.MapType.VERTICAL_MAP
                                    ? (i = n.add(cc.v3(0, 300)))
                                    : this.maptype == m.MapType.LIMIT_MAP &&
                                      _.default.inst.checkMapType([m.Map_Group.DEATH]) &&
                                      ((r = (this.chapterVo.map_size.width >> 1) - 100),
                                      (a = (this.chapterVo.map_size.heiht >> 1) - 100),
                                      (i.x =
                                          Math.random() < 0.5
                                              ? g.default.randomRangeInt(-r, 50 - r)
                                              : g.default.randomRangeInt(r, r - 50)),
                                      (i.y =
                                          Math.random() < 0.5
                                              ? g.default.randomRangeInt(-a, 50 - a)
                                              : g.default.randomRangeInt(a, a - 50))),
                                (e.position = i),
                                o.playAnim(function () {
                                    return u(s, void 0, void 0, function () {
                                        var e;
                                        return y(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return (
                                                        (this.isBossCome = !1),
                                                        0 < _.default.inst.chapterVo.gemini &&
                                                            0 < l.gemini_id &&
                                                            (i.x = n.x - 150),
                                                        [4, this.addBoss(l, i)]
                                                    );
                                                case 1:
                                                    return (
                                                        t.sent(),
                                                        0 < _.default.inst.chapterVo.gemini && 0 < l.gemini_id
                                                            ? ((e = cc.v3()),
                                                              g.default.copy(e, i),
                                                              (e.x = n.x + 150),
                                                              [4, this.addBoss(l, e, l.gemini_id)])
                                                            : [3, 3]
                                                    );
                                                case 2:
                                                    t.sent(), (t.label = 3);
                                                case 3:
                                                    return [2];
                                            }
                                        });
                                    });
                                }),
                                [2]
                            );
                    }
                });
            });
        }),
        (k.prototype.createFence = function (t) {
            var e, o, n;
            t.area &&
                this.maptype != m.MapType.LIMIT_MAP &&
                ((e = C.HeroController.getHeroCenter().add(cc.v3(0, 100))),
                (o = {left: 0, right: 0, bottom: 0, top: 0}),
                t.area.type == m.FenceType.CIRCULAR
                    ? this._createCircle(t, e)
                    : t.area.type == m.FenceType.RECT
                    ? ((n = t.area.value >> 1),
                      (o.left = e.x - n),
                      (o.right = e.x + n),
                      (o.bottom = e.y - n),
                      (o.top = e.y + n),
                      this._createRect(t, o))
                    : t.area.type == m.FenceType.UPANDDOWN &&
                      ((n = t.area ? t.area.value >> 1 : _.default.inst.halfHeight + 200),
                      (o.left = e.x - n),
                      (o.right = e.x + n),
                      (o.bottom = e.y - n),
                      (o.top = e.y + n)),
                (v.GameController.inst.moveLimit = {
                    type: t.area.type,
                    value: t.area.value - 40,
                    pos: e,
                    rect: o ? {left: o.left + 50, right: o.right - 50, bottom: o.bottom + 50, top: o.top - 50} : null
                }));
        }),
        (k.prototype._createCircle = function (a, s) {
            return u(this, void 0, void 0, function () {
                var e, o, n, i, r;
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            (n = 360 / (o = 200)), (i = e = 0), (t.label = 1);
                        case 1:
                            return i < o
                                ? ((r = this.getPosByAngle(s, e, a.area.value)), [4, this.addFence(a, r)])
                                : [3, 4];
                        case 2:
                            t.sent(), (e += n), (t.label = 3);
                        case 3:
                            return i++, [3, 1];
                        case 4:
                            return [2];
                    }
                });
            });
        }),
        (k.prototype._createRect = function (a, s) {
            return u(this, void 0, void 0, function () {
                var e, o, n, i, r;
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            (e = cc.v3()), (o = 50), (n = 0), (i = a.area.value / o), (r = 0), (t.label = 1);
                        case 1:
                            return r < o
                                ? ((n = r * i), (e.x = s.left + r * i), (e.y = s.bottom), [4, this.addFence(a, e)])
                                : [3, 7];
                        case 2:
                            return t.sent(), (e.x = s.left), (e.y = s.bottom + n), [4, this.addFence(a, e)];
                        case 3:
                            return t.sent(), (e.x = s.left + n), (e.y = s.top), [4, this.addFence(a, e)];
                        case 4:
                            return t.sent(), (e.x = s.right), (e.y = s.bottom + n), [4, this.addFence(a, e)];
                        case 5:
                            t.sent(), (t.label = 6);
                        case 6:
                            return r++, [3, 1];
                        case 7:
                            return [2];
                    }
                });
            });
        }),
        (k.prototype.createAgilityMob = function (h) {
            return u(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s, l, c, u, p;
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            (c = 0),
                                _.default.inst.checkMapType([m.Map_Group.DEATH]) && (c = 1),
                                (e = _.default.inst.getTargetCenterPos(c)),
                                (o = 0 < h.angle ? h.angle : g.default.randomRangeInt(0, 360)),
                                (n = h.value && h.value.col ? h.value.col : 6),
                                (u = h.value.dis || 35),
                                (i = Math.ceil(u * h.value.offset)),
                                (r = 2 * u),
                                (a = -n * u),
                                (s = _.default.inst.inSightRadius + 200),
                                (l = 0),
                                (p = g.default.getRadian(o)),
                                (c = cc.v3(-Math.cos(p), -Math.sin(p))),
                                console.log("急速怪", h, h.monster_num),
                                (u = 0),
                                (t.label = 1);
                        case 1:
                            return u < h.monster_num
                                ? ((p = cc.v3(
                                      e.x + s + g.default.randomRangeInt(-i, i),
                                      e.y + a + l * r + g.default.randomRangeInt(-i, i)
                                  )),
                                  g.default.rotatePoint(p, o, e, p),
                                  [4, this.addAgilityMob(h, p, c)])
                                : [3, 4];
                        case 2:
                            t.sent(), (l += 1) == n && ((l = 0), (s += r)), (t.label = 3);
                        case 3:
                            return u++, [3, 1];
                        case 4:
                            return [2];
                    }
                });
            });
        }),
        (k.prototype.newMob = function (t) {
            return u(this, void 0, void 0, function () {
                return y(this, function () {
                    return (
                        w.GuideController.isNewPlayer && !this.isGuide
                            ? ((this.isGuide = !0), this.addGuideMob(t))
                            : (this.maptype == m.MapType.BIG_MAP && t.round == m.FixedType.CROWD && (t.angle = 360),
                              0 == t.angle ? this.addToRandom(t) : this.addToAngle(t)),
                        [2]
                    );
                });
            });
        }),
        (k.prototype.addGuideMob = function (c) {
            return u(this, void 0, void 0, function () {
                var t, e, o, n, i, r, a, s, l;
                return y(this, function () {
                    for (
                        t = C.HeroController.getHeroPos(),
                            o = [cc.v3(150, 150), cc.v3(-150, 150), cc.v3(-150, -150), cc.v3(150, -150)],
                            n = g.default.randomRangeInt(0, 360),
                            s = 0;
                        s < 4;
                        s++
                    )
                        (n += g.default.randomRangeInt(30, 60)),
                            (a = g.default.getRadian(n)),
                            (i = g.default.randomRangeInt(220, 320)),
                            (r = i * Math.cos(a)),
                            (a = i * Math.sin(a)),
                            o.push(cc.v3(r, a));
                    for (s = 0, l = o.length; s < l; s++) (e = t.add(o[s])), this.awaitList.push({data: c, pos: e});
                    return this.createMob(), p.app.event.emit(h.EventType.On_Guide_Monster), [2];
                });
            });
        }),
        (k.prototype.addElite = function (n) {
            return u(this, void 0, void 0, function () {
                var e, o;
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = C.HeroController.getHeroPos()),
                                (o = g.default.randomRangeInt(0, 360)),
                                (o = this.getPosByAngle(e, o)),
                                [4, this.addMonster(d.ResUtils.Prefabs.Elite, n, o)]
                            );
                        case 1:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (k.prototype.addBoss = function (e, o, n) {
            return u(this, void 0, void 0, function () {
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                _.default.inst.checkMapType([m.Map_Group.DEATH]) && p.app.sound.playEffect("死神出生"),
                                [4, this.addMonster(d.ResUtils.Prefabs.Boss, e, o, n)]
                            );
                        case 1:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (k.prototype.addFence = function (o, n) {
            return u(this, void 0, void 0, function () {
                var e;
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.addMonster(d.ResUtils.Prefabs.Fence, o, n, o.fence)];
                        case 1:
                            return ((e = t.sent()).zIndex = _.default.inst.getZindex(e.position)), [2];
                    }
                });
            });
        }),
        (k.prototype.addMob = function (e, o) {
            return u(this, void 0, void 0, function () {
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.addMonster(d.ResUtils.Prefabs.Mob, e, o)];
                        case 1:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (k.prototype.addRewardMob = function (n) {
            return u(this, void 0, void 0, function () {
                var e, o;
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = C.HeroController.getHeroPos()),
                                (o = g.default.randomRangeInt(0, 360)),
                                (o = this.getPosByAngle(e, o, 0, 100)),
                                [4, this.addMonster(d.ResUtils.Prefabs.RewardMob, n, o)]
                            );
                        case 1:
                            return t.sent(), (_.default.inst.reward_num += 1), [2];
                    }
                });
            });
        }),
        (k.prototype.addAgilityMob = function (e, o, n) {
            return u(this, void 0, void 0, function () {
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.addMonster(d.ResUtils.Prefabs.AgilityMob, e, o)];
                        case 1:
                            return (t.sent().getComponent(s.default).dir = n), [2];
                    }
                });
            });
        }),
        (k.prototype.addMonster = function (o, n, i, r) {
            return u(this, void 0, void 0, function () {
                var e;
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (r = r || n.monster_id), [4, c.default.inst.getNodeFromPool(o.url, o.bundle)];
                        case 1:
                            return (
                                (e = t.sent()),
                                v.GameController.inst.addMonster(e),
                                e.getComponent(l.default).setData(r, n),
                                (e.position = i),
                                (e.parent = this.layer),
                                [2, e]
                            );
                    }
                });
            });
        }),
        (k.prototype.addToRandom = function (a) {
            return u(this, void 0, void 0, function () {
                var t, e, o, n, i, r;
                return y(this, function () {
                    if (this.maptype == m.MapType.VERTICAL_MAP && 5 < a.monster_num) return this.addToAngle(a), [2];
                    for (
                        t = C.HeroController.getHeroPos(), e = null, o = 1 < a.count ? 70 * (a.count - 1) : 0, n = 0;
                        n < a.monster_num;
                        n++
                    )
                        this.maptype == m.MapType.BIG_MAP
                            ? ((r = g.default.randomRangeInt(0, 360)),
                              (e = this.getPosByAngle(t, r, 0, o)),
                              0 < n && n % 50 == 0 && (o += 80))
                            : this.maptype == m.MapType.VERTICAL_MAP
                            ? ((i = Math.random()),
                              (r = (this.chapterVo.map_size.width >> 1) - 100),
                              ((e = cc.v3()).x = g.default.randomRangeInt(20 - r, r - 20)),
                              (e.y =
                                  t.y +
                                  (i < 0.5 ? -1 : 1) *
                                      (_.default.inst.halfHeight + g.default.randomRangeInt(200, 400))))
                            : this.maptype == m.MapType.LIMIT_MAP && (e = this.getPosByAngle(t, 0)),
                            this.awaitList.push({data: a, pos: e});
                    return [2];
                });
            });
        }),
        (k.prototype.addToAngle = function (f) {
            return u(this, void 0, void 0, function () {
                var t, e, o, n, i, r, a, s, l, c, u, p, h, d;
                return y(this, function () {
                    if (((t = _.default.inst.getMapCameraPos()), (e = null), this.maptype == m.MapType.BIG_MAP))
                        for (
                            o = g.default.randomRangeInt(0, 360),
                                0 != f.angle &&
                                    360 != f.angle &&
                                    _.default.inst.moveVector &&
                                    !_.default.inst.moveVector.equals(cc.Vec3.ZERO) &&
                                    ((n = g.default.getAngleTwoPoint(cc.v3(), _.default.inst.moveVector)),
                                    (o = n - (f.angle >> 1))),
                                i = o + f.angle,
                                r = o,
                                a = cc.misc.clampf(f.angle / f.monster_num, 6, 360),
                                s = g.default.randomRangeInt(0, 50),
                                h = 0;
                            h < f.monster_num;
                            h++
                        )
                            (e = this.getPosByAngle(t, o, 0, s)),
                                ((o += a) >= i || 61 == h) &&
                                    ((o = r + g.default.randomRangeInt(-10, 10)),
                                    (s += g.default.randomRangeInt(70, 110))),
                                this.awaitList.push({data: f, pos: e});
                    else if (this.maptype == m.MapType.VERTICAL_MAP)
                        for (l = this.chapterVo.map_size.width >> 1, h = u = c = 0; h < f.monster_num; h++)
                            (p = _.default.inst.halfHeight + 200 + 70 * c + g.default.randomRangeInt(-40, 40)),
                                (e = cc.v3()),
                                u % 2 == 0
                                    ? (l - 10 < 30 + (u / 2) * 60 && ((c += 1), (u = 0)),
                                      (e.x = 30 + 60 * Math.floor(u / 2)))
                                    : (e.x = -30 - 60 * Math.floor(u / 2)),
                                (e.y = t.y + p),
                                this.awaitList.push({data: f, pos: e}),
                                ((d = cc.v3()).x = e.x),
                                (d.y = t.y - p),
                                this.awaitList.push({data: f, pos: d}),
                                (u += 1);
                    else if (this.maptype == m.MapType.LIMIT_MAP)
                        for (h = 0; h < f.monster_num; h++)
                            (d = this.getPosByAngle(t, 0)), this.awaitList.push({data: f, pos: d});
                    return [2];
                });
            });
        }),
        (k.prototype.getPosByAngle = function (t, e, o, n) {
            void 0 === n && (n = 0);
            var i,
                r,
                a = g.default.getRadian(e),
                e = null;
            return (
                this.maptype == m.MapType.BIG_MAP
                    ? ((i =
                          (o = o || _.default.inst.inSightRadius + n + g.default.randomRangeInt(80, 120)) *
                          Math.cos(a)),
                      (r = o * Math.sin(a)),
                      (e = t.add(cc.v3(i, r))))
                    : this.maptype == m.MapType.VERTICAL_MAP
                    ? ((i = o * Math.cos(a)), (r = o * Math.sin(a)), (e = t.add(cc.v3(i, r))))
                    : this.maptype == m.MapType.LIMIT_MAP &&
                      ((r = _.default.inst.getMapCameraPos()),
                      (this.visibleRect.x = r.x - _.default.inst.halfWidth),
                      (this.visibleRect.y = r.y - _.default.inst.halfHeight),
                      (this.visibleRect.width = _.default.inst.stageWidth),
                      (this.visibleRect.height = _.default.inst.stageHeight),
                      (e = this.calcLimitPos(0))),
                e
            );
        }),
        (k.prototype.calcLimitPos = function (t) {
            function e() {
                a = 1;
                var t = v.GameController.inst.moveLimit.rect.top - 40,
                    e = g.default.randomRangeInt(
                        v.GameController.inst.moveLimit.rect.left + 40,
                        v.GameController.inst.moveLimit.rect.right - 40
                    );
                r = cc.v3(e, t);
            }
            function o() {
                a = 2;
                var t = v.GameController.inst.moveLimit.rect.bottom + 40,
                    e = g.default.randomRangeInt(
                        v.GameController.inst.moveLimit.rect.left + 40,
                        v.GameController.inst.moveLimit.rect.right - 40
                    );
                r = cc.v3(e, t);
            }
            function n() {
                a = 3;
                var t = g.default.randomRangeInt(
                        v.GameController.inst.moveLimit.rect.bottom + 40,
                        v.GameController.inst.moveLimit.rect.top - 40
                    ),
                    e = v.GameController.inst.moveLimit.rect.left + 40;
                r = cc.v3(e, t);
            }
            function i() {
                a = 4;
                var t = g.default.randomRangeInt(
                        v.GameController.inst.moveLimit.rect.bottom + 40,
                        v.GameController.inst.moveLimit.rect.top - 40
                    ),
                    e = v.GameController.inst.moveLimit.rect.right - 40;
                r = cc.v3(e, t);
            }
            var r = cc.v3(),
                a = 0,
                s = [];
            return (
                0 == t
                    ? (s.push(e), s.push(o), s.push(n), s.push(i))
                    : 1 == t
                    ? (s.push(o), s.push(n), s.push(i))
                    : 2 == t
                    ? (s.push(e), s.push(n), s.push(i))
                    : 3 == t
                    ? (s.push(e), s.push(o), s.push(i))
                    : 4 == t && (s.push(e), s.push(o), s.push(n)),
                (0, s[g.default.randomRangeInt(0, s.length)])(),
                this.visibleRect.contains(r) ? this.calcLimitPos(a) : r
            );
        }),
        (k.prototype.createMob = function () {
            return u(this, void 0, void 0, function () {
                var e, o, n;
                return y(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (_.default.inst.onStatus(m.GameStatus.BOSS) || 0 == this.awaitList.length) return [2];
                            if (
                                ((n = r.GameSetting.inst.max_monster_num),
                                1 < _.default.inst.timeScale && (n = r.GameSetting.inst.max_monster_num2),
                                v.GameController.inst.getMonsterNum() >= n)
                            )
                                return [2];
                            (e = 3), (o = 0), (t.label = 1);
                        case 1:
                            return o < e
                                ? (n = this.awaitList.shift())
                                    ? [4, this.addMob(n.data, n.pos)]
                                    : [3, 3]
                                : [3, 5];
                        case 2:
                            return t.sent(), [3, 4];
                        case 3:
                            return [3, 5];
                        case 4:
                            return o++, [3, 1];
                        case 5:
                            return [2];
                    }
                });
            });
        }),
        (k.prototype.onUpdate = function (t) {
            var e = this;
            (this.time += t),
                (this.timeDelay -= t),
                this.createMob(),
                n.MonsterSkillController.onUpdate(t),
                this.timeDelay <= 0 &&
                    ((this.timeDelay = 0.3),
                    this.rounds.forEach(function (t) {
                        t.count < t.create_count && t.exeTime <= e.time && e.createMonster(t);
                    }));
        }),
        (k.prototype.copyRoundVo = function (t) {
            var e,
                o = {};
            for (e in t) o[e] = t[e];
            return (o.count = 0), (o.isWarn = !1), o;
        }),
        k);
function k() {
    (this.layer = null),
        (this.bottomLayer = null),
        (this.topLayer = null),
        (this.rounds = []),
        (this.time = 0),
        (this.timeDelay = 0.2),
        (this.maptype = m.MapType.NONE),
        (this.limitRect = cc.rect()),
        (this.visibleRect = cc.rect()),
        (this.awaitList = []),
        (this.lastRound = null),
        (this.chapterVo = null),
        (this.isGuide = !1),
        (this.isBossCome = !1);
}
o.MonsterController = new t();
