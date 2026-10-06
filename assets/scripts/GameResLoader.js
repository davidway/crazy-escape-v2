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
Object.defineProperty(o, "__esModule", {value: !0}), (o.GameResLoader = void 0);
var i = t("App"),
    r = t("LayerMgr"),
    s = t("ResMgr"),
    l = t("ResUtils"),
    c = t("UIEnum"),
    u = t("UserDataController"),
    p = t("ConfData"),
    h = t("GameSetting"),
    d = t("GameEnums"),
    f = t("EffectMgr"),
    y = t("GameMgr"),
    t =
        ((g.prototype.loadRes = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                y.default.inst.chapterVo.type == d.Map_Group.CHALLENGE
                                    ? ((e = p.default.inst.challengeConf.getFbByChapter(y.default.inst.chapter)),
                                      (y.default.inst.challengeData = {
                                          atk_ratio: e.atk_ratio,
                                          hp_ratio: e.hp_ratio,
                                          speed_ratio: e.speed_ratio
                                      }),
                                      (this.chapter = e.chapter))
                                    : ((y.default.inst.challengeData = null), (this.chapter = y.default.inst.chapter)),
                                [4, i.app.gui.openUI(c.UIEnum.WaitingView, r.LayerEnum.TOP_LAYER)]
                            );
                        case 1:
                            return t.sent(), (this.time = Date.now()), [4, this.loadViews()];
                        case 2:
                            return t.sent(), [4, this.loadConf()];
                        case 3:
                            return t.sent(), [4, this.loadMap()];
                        case 4:
                            return t.sent(), [4, this.loadHero()];
                        case 5:
                            return t.sent(), [4, this.loadMonsters()];
                        case 6:
                            return t.sent(), [4, i.app.gui.closeUI(c.UIEnum.WaitingView)];
                        case 7:
                            return (
                                t.sent(),
                                console.log("加载完:", Date.now() - this.time),
                                console.log(
                                    "最大怪数：",
                                    h.GameSetting.inst.max_monster_num,
                                    h.GameSetting.inst.max_monster_num2
                                ),
                                [2]
                            );
                    }
                });
            });
        }),
        (g.prototype.loadViews = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.isLoadView
                                ? [3, 2]
                                : ((e = [
                                      {url: "views/GameView", type: cc.Prefab, bundle: "", count: 0},
                                      {url: "views/SkillView", type: cc.Prefab, bundle: "", count: 0},
                                      {url: "views/ReviveView", type: cc.Prefab, bundle: "", count: 0},
                                      {url: "views/LotteryView", type: cc.Prefab, bundle: "", count: 0},
                                      {url: "prefabs/item/floatSkill", type: cc.Prefab, bundle: "", count: 0}
                                  ]),
                                  [4, s.default.inst.loadAssets(e)]);
                        case 1:
                            t.sent(), (this.isLoadView = !0), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (g.prototype.loadConf = function () {
            var t = this;
            return new Promise(function (o) {
                return n(t, void 0, void 0, function () {
                    var e;
                    return a(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return p.default.inst.roundConf.hasRound(this.chapter)
                                    ? (this.chapter != y.default.inst.chapter &&
                                          p.default.inst.roundConf.copyRound(this.chapter, y.default.inst.chapter),
                                      o(),
                                      [2])
                                    : [4, s.default.inst.getAsset("roundConf" + this.chapter, cc.JsonAsset, "round")];
                            case 1:
                                return (
                                    (e = t.sent()),
                                    p.default.inst.roundConf.parseJson("roundConf" + this.chapter, e.json),
                                    this.chapter != y.default.inst.chapter &&
                                        p.default.inst.roundConf.copyRound(this.chapter, y.default.inst.chapter),
                                    o(),
                                    [2]
                                );
                        }
                    });
                });
            });
        }),
        (g.prototype.loadMonsters = function () {
            return n(this, void 0, void 0, function () {
                var e, o, n, i, r;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            (e = p.default.inst.roundConf.getRoundById(y.default.inst.chapter));
                            if (!e || !e.length)
                                return (
                                    f.default.inst.showDebugTips("无法获取章节" + y.default.inst.chapter + "出怪配置"),
                                    [2]
                                );
                            (o = 0),
                                (n = e.length),
                                (t.label = 1);
                        case 1:
                            return o < n
                                ? ((i = e[o]),
                                  (r = i.monster_id),
                                  (r = p.default.inst.monsterConf.getMonserVo(r)),
                                  (r = r && p.default.inst.monsterSkinConf.getMonsterSkinVo(r.skin_id))
                                      ? r.type != d.MonsterType.MOB
                                          ? [3, 3]
                                          : [4, this.loadMob(r)]
                                      : [3, 5])
                                : [3, 6];
                        case 2:
                            t.sent(), (t.label = 3);
                        case 3:
                            return 0 < i.fence
                                ? ((r = p.default.inst.monsterSkinConf.getMonsterSkinVo(i.fence)),
                                  [4, this.loadFence(r)])
                                : [3, 5];
                        case 4:
                            t.sent(), (t.label = 5);
                        case 5:
                            return o++, [3, 1];
                        case 6:
                            return [2];
                    }
                });
            });
        }),
        (g.prototype.loadMob = function (e) {
            return n(this, void 0, void 0, function () {
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.mob.has(e.id)
                                ? [3, 2]
                                : [4, s.default.inst.loadAsset({url: e.url, type: cc.SpriteAtlas, bundle: "actors"})];
                        case 1:
                            t.sent(), this.mob.set(e.id, 1), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (g.prototype.loadElite = function (e) {
            return n(this, void 0, void 0, function () {
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.elite.has(e.id)
                                ? [3, 2]
                                : [4, s.default.inst.loadAsset({url: e.url, type: sp.SkeletonData, bundle: "actors"})];
                        case 1:
                            t.sent(), this.elite.set(e.id, 1), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (g.prototype.loadBoss = function (e) {
            return n(this, void 0, void 0, function () {
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.boss.has(e.id)
                                ? [3, 2]
                                : [4, s.default.inst.loadAsset({url: e.url, type: sp.SkeletonData, bundle: "actors"})];
                        case 1:
                            t.sent(), this.boss.set(e.id, 1), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (g.prototype.loadFence = function (e) {
            return n(this, void 0, void 0, function () {
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return !e || this.fence.has(e.id)
                                ? [3, 2]
                                : [4, s.default.inst.loadAsset({url: e.url, type: cc.Texture2D, bundle: "actors"})];
                        case 1:
                            t.sent(), this.fence.set(e.id, 1), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (g.prototype.loadHero = function () {
            return n(this, void 0, void 0, function () {
                var e, o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = u.default.inst.skin),
                                this.hero.has(e)
                                    ? [3, 2]
                                    : ((o = p.default.inst.playerSkinConf.getPlayerSkinVoById(e)),
                                      [
                                          4,
                                          s.default.inst.loadAsset({
                                              url: o.url,
                                              type: sp.SkeletonData,
                                              bundle: "actors"
                                          })
                                      ])
                            );
                        case 1:
                            t.sent(), this.hero.set(e, 1), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (g.prototype.loadMap = function () {
            var o;
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.map.has(y.default.inst.chapter)
                                ? [3, 4]
                                : ((e = y.default.inst.chapterVo),
                                  [
                                      4,
                                      s.default.inst.loadAsset({url: e.map_url, type: cc.SpriteFrame, bundle: "maps"})
                                  ]);
                        case 1:
                            return t.sent(), this.map.set(y.default.inst.chapter, 1), [4, this.loadPlant(e.plant_url)];
                        case 2:
                            return (
                                t.sent(),
                                [4, this.loadMapFence(null === (o = e.fence_url) || void 0 === o ? void 0 : o.url)]
                            );
                        case 3:
                            t.sent(), (t.label = 4);
                        case 4:
                            return [2];
                    }
                });
            });
        }),
        (g.prototype.loadPlant = function (e) {
            return n(this, void 0, void 0, function () {
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return !e || this.plant.has(e)
                                ? [3, 2]
                                : [4, s.default.inst.loadAsset({url: e, type: cc.SpriteAtlas, bundle: "maps"})];
                        case 1:
                            t.sent(), this.plant.set(e, 1), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (g.prototype.loadMapFence = function (e) {
            return n(this, void 0, void 0, function () {
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return !e || this.plant.has(e)
                                ? [3, 2]
                                : [4, s.default.inst.loadAsset({url: e, type: cc.SpriteFrame, bundle: "maps"})];
                        case 1:
                            t.sent(), this.plant.set(e, 1), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (g.prototype.loadDark = function () {
            return n(this, void 0, void 0, function () {
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return 1 != y.default.inst.chapterVo.dark || this.dark.has(l.ResUtils.Textures.Dark.url)
                                ? [3, 2]
                                : [
                                      4,
                                      s.default.inst.loadAsset({
                                          url: l.ResUtils.Textures.Dark.url,
                                          type: cc.Texture2D,
                                          bundle: l.ResUtils.Textures.Dark.bundle
                                      })
                                  ];
                        case 1:
                            t.sent(), this.dark.set(l.ResUtils.Textures.Dark.url, 1), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        (g.prototype.loadHomeViews = function () {
            return n(this, void 0, void 0, function () {
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.homes.has(1) ? [3, 2] : [4, s.default.inst.loadAssets(l.ResUtils.Preloads)];
                        case 1:
                            t.sent(), this.homes.set(1, 1), (t.label = 2);
                        case 2:
                            return [2];
                    }
                });
            });
        }),
        g);
function g() {
    (this.mob = new Map()),
        (this.hero = new Map()),
        (this.tower = new Map()),
        (this.elite = new Map()),
        (this.boss = new Map()),
        (this.fence = new Map()),
        (this.map = new Map()),
        (this.plant = new Map()),
        (this.dark = new Map()),
        (this.homes = new Map()),
        (this.skills = new Map()),
        (this.isLoadView = !1),
        (this.chapter = 0),
        (this.time = 0);
}
o.GameResLoader = new t();
