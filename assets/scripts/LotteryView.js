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
    p =
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
    l = t("BasePanel"),
    c = t("UIEnum"),
    u = t("decorator"),
    h = t("LotteryItem"),
    d = t("ConfData"),
    f = t("MathUtil"),
    y = t("HeroController"),
    g = t("SkillEnum"),
    m = t("ResMgr"),
    _ = t("ResUtils"),
    v = t("ArrayUtil"),
    b = t("App"),
    w = t("GameMgr"),
    C = t("LotteryResultItem"),
    k = t("MultipleController"),
    E = t("EffectMgr"),
    S = t("GameEnums"),
    ECA = t("EquipChestArcade"),
    M = cc._decorator,
    e = M.ccclass,
    t = M.property,
    e =
        (M.inspector,
        (s = l.default),
        i(R, s),
        (R.prototype.onEnable = function () {
            s.prototype.onEnable.call(this);
        }),
        (R.prototype.update = function (t) {
            this.onLottery(t), (this.lc_dk3.angle += 1);
        }),
        (R.prototype.initView = function () {
            for (var e = this, t = 0; t < this.content.childrenCount; t++) {
                var o = this.content.children[t];
                this.items.push(o.getComponent(h.default));
            }
            for (t = 0; t < this.results.childrenCount; t++)
                (o = this.results.children[t]), this.resultItems.push(o.getComponent(C.default));
            var n = d.default.inst.constConf.getValue("lottery");
            (this.lottery_ratios = n).forEach(function (t) {
                e.maxLottery += t;
            }),
                (this.btnCloseTween = cc
                    .tween(this.btnClose)
                    .call(function () {
                        e.btnClose.scale = 0;
                    })
                    .to(0.2, {scale: 1})),
                k.default.inst.Breathing(this.lc_dk23, 1.05, 1, 3),
                this.schedule(this.circleMove, 0.01);
        }),
        (R.prototype.circleMove = function (t) {
            this.radian += t * (this.carSpeed / 100);
            var e = this.circleRadius * Math.cos(this.radian) + this.circleCenter.x,
                t = this.circleRadius * Math.sin(this.radian) + this.circleCenter.y;
            Math.atan2(t, e), Math.PI, this.lc_dk23.setPosition(cc.v3(e, t, 0));
        }),
        (R.prototype.updateView = function () {
            b.app.sound.playMusic("幸运转盘bgm"),
                (this.panel.scale = 0),
                cc.tween(this.panel).to(0.2, {scale: 1.2}).to(0.1, {scale: 1}).start(),
                (this.chapterVo = w.default.inst.chapterVo),
                (this.tips.active = !1),
                (this.btnClose.active = !1),
                (this.btnLottery.active = !0),
                (this.btnLucky.active = !0),
                (this.resultNode.active = !1);
            for (var t = 0; t < this.results.childrenCount; t++) this.results.children[t].active = !1;
            this.resultItems.forEach(function (t) {
                t.node.active = !1;
            }),
                this.initLottery(),
                ECA.applyLottery(this);
        }),
        (R.prototype.initLottery = function () {
            return a(this, void 0, void 0, function () {
                var e, o;
                return p(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (this.lottery_status = 0),
                                (this.curr_time = 0),
                                (this.list.length = 0),
                                (this.curr_one = null),
                                (this.coinLab.string = "0"),
                                (this.btnFast.active = !0),
                                (e = this.chapterVo.lottery_coin),
                                (this.goldNode.active = !0),
                                (this.end_gold = f.default.randomRangeInt(e[0], e[1])),
                                [4, this.initSkills()]
                            );
                        case 1:
                            return t.sent(), this.list.length < 16 ? [4, this.initGolds()] : [3, 3];
                        case 2:
                            t.sent(), (t.label = 3);
                        case 3:
                            for (
                                console.log("[LotteryView]-->[line:185]:", this.list),
                                    v.default.shuffle(this.list),
                                    this.lottery_skills.length = 0,
                                    this.lottery_golds.length = 0,
                                    o = 0;
                                o < 16;
                                o++
                            )
                                this.items[o].setData(this.list[o]),
                                    (1 == this.list[o].type ? this.lottery_skills : this.lottery_golds).push(o);
                            return [2];
                    }
                });
            });
        }),
        (R.prototype.initGolds = function () {
            return a(this, void 0, void 0, function () {
                var r,
                    a,
                    e,
                    o,
                    n,
                    s,
                    i,
                    l,
                    c = this;
                return p(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (r = 0),
                                (a = this.chapterVo.gold_turntable).forEach(function (t) {
                                    r += t.ratio;
                                }),
                                [
                                    4,
                                    m.default.inst.getAsset(
                                        _.ResUtils.Textures.Props_Gold1.url,
                                        cc.SpriteFrame,
                                        _.ResUtils.Textures.Props_Gold1.bundle
                                    )
                                ]
                            );
                        case 1:
                            return (
                                (e = t.sent()),
                                [
                                    4,
                                    m.default.inst.getAsset(
                                        _.ResUtils.Textures.Props_Gold2.url,
                                        cc.SpriteFrame,
                                        _.ResUtils.Textures.Props_Gold2.bundle
                                    )
                                ]
                            );
                        case 2:
                            return (
                                (o = t.sent()),
                                [
                                    4,
                                    m.default.inst.getAsset(
                                        _.ResUtils.Textures.Props_Gold3.url,
                                        cc.SpriteFrame,
                                        _.ResUtils.Textures.Props_Gold3.bundle
                                    )
                                ]
                            );
                        case 3:
                            for (
                                n = t.sent(),
                                    s = [e, o, n],
                                    i = function () {
                                        for (
                                            var t = 0, e = f.default.randomRangeInt(0, r), o = 0, n = a.length;
                                            o < n;
                                            o++
                                        )
                                            if (e <= (t += a[o].ratio)) {
                                                var i = f.default.randomRangeInt(a[o].range[0], a[o].range[1]);
                                                c.list.push({
                                                    type: 2,
                                                    id: 0,
                                                    value: i,
                                                    spf: s[o],
                                                    iconBg: c.iconBgs[0]
                                                });
                                                break;
                                            }
                                    },
                                    l = this.list.length;
                                l < 16;
                                l++
                            )
                                i();
                            return [2];
                    }
                });
            });
        }),
        (R.prototype.initSkills = function () {
            var u;
            return a(this, void 0, void 0, function () {
                var e, o, n, i, r, a, s, l, c;
                return p(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.atlas
                                ? [3, 2]
                                : ((e = this),
                                  [
                                      4,
                                      m.default.inst.getAsset(
                                          _.ResUtils.Textures.Skillicons.url,
                                          cc.SpriteAtlas,
                                          _.ResUtils.Textures.Skillicons.bundle
                                      )
                                  ]);
                        case 1:
                            (e.atlas = t.sent()), (t.label = 2);
                        case 2:
                            for (o = y.HeroController.getHeroSkills(), n = 0, i = o; n < i.length; n++)
                                if (
                                    ((r = i[n]),
                                    (c = d.default.inst.playerSkillConf.getSkillInfoVo(r.id)),
                                    !r.confVo.isUltimate)
                                )
                                    if (r.level < 5)
                                        for (a = this.atlas.getSpriteFrame(c.icon), s = r.level + 1; s <= 5; s++)
                                            r.id < 100
                                                ? this.list.push({
                                                      type: 1,
                                                      id: r.id,
                                                      value: 0,
                                                      spf: a,
                                                      iconBg: this.iconBgs[0]
                                                  })
                                                : this.list.push({
                                                      type: 1,
                                                      id: r.id,
                                                      value: 0,
                                                      spf: a,
                                                      iconBg: this.iconBgs[1]
                                                  });
                                    else
                                        c.type == g.SkillGroup.ACTIVE_SKILL &&
                                            0 < c.top_id &&
                                            0 < (null === (u = c.relation) || void 0 === u ? void 0 : u.length) &&
                                            y.HeroController.hasSkill(c.relation[0]) &&
                                            ((l = d.default.inst.playerSkillConf.getSkillInfoVo(c.top_id)),
                                            (c = this.atlas.getSpriteFrame(l.icon)),
                                            this.list.push({
                                                type: 1,
                                                id: l.id,
                                                value: 0,
                                                spf: c,
                                                iconBg: this.iconBgs[2]
                                            }));
                            return [2];
                    }
                });
            });
        }),
        (R.prototype.updateLottery = function () {
            if (
                ((this.btnLottery.active = !1),
                (this.btnLucky.active = !1),
                (this.lottery_status = 1),
                b.app.sound.playMusic("幸运转盘转动时音效"),
                this.isLucky)
            ) {
                var t = Math.random() < 0.5 ? 1 : 2;
                this.lottery_count = this.countArr[t];
            } else
                for (
                    var e = f.default.randomRangeInt(0, this.maxLottery), o = 0, n = 0;
                    n < this.lottery_ratios.length;
                    n++
                )
                    if (e <= (o += this.lottery_ratios[n])) {
                        this.lottery_count = this.countArr[n];
                        break;
                    }
            if (
                (0 < this.lottery_skills.length && v.default.shuffle(this.lottery_skills),
                0 < this.lottery_golds.length && v.default.shuffle(this.lottery_golds),
                1 == this.lottery_count)
            )
                (this.start_one = f.default.randomRangeInt(0, 16)),
                    (this.end_one =
                        64 +
                        (0 < this.lottery_skills.length ? this.lottery_skills[0] : f.default.randomRangeInt(0, 16)));
            else if (3 == this.lottery_count) {
                if (
                    ((this.start_three = [0, 6, 11]),
                    (this.end_three.length = 0) < this.lottery_skills.length &&
                        (this.end_three = this.lottery_skills.slice(0, 3)),
                    this.end_three.length < 3)
                )
                    for (var n = 0, i = 3 - this.end_three.length; n < i; n++)
                        this.end_three.push(this.lottery_golds[n]);
                v.default.shuffle(this.end_three),
                    (this.end_three[0] += 64),
                    (this.end_three[1] += 96),
                    (this.end_three[2] += 128),
                    console.log("[LotteryView]-->[line:320]:", this.end_three);
            } else if (5 == this.lottery_count)
                for (
                    this.start_five.length = 0,
                        this.end_five.length = 0,
                        this.start_five = [1, 2, 3, 4, 5],
                        t =
                            (t = 0) < this.lottery_skills.length
                                ? this.lottery_skills[0] + f.default.randomRangeInt(0, 5)
                                : f.default.randomRangeInt(0, 16),
                        n = 0;
                    n < 5;
                    n++
                )
                    this.end_five.push(96 + (t - n));
        }),
        (R.prototype.onLottery = function (t) {
            var e = this;
            if (0 != this.lottery_status)
                if (2 != this.lottery_status) {
                    this.curr_time += t;
                    var o,
                        n,
                        i,
                        r,
                        a,
                        t = 0;
                    if (((this.tips.active = 1.5 <= this.curr_time), 1 == this.lottery_count)) {
                        (t = this.time_one), (this.curr_time = Math.min(this.curr_time, this.time_one));
                        var s = this.curr_time / this.time_one,
                            l = Math.floor(cc.misc.lerp(this.start_one, this.end_one, s));
                        this.curr_one && this.curr_one.setStatus(0),
                            this.curr_time == this.time_one && ((this.lottery_status = 2), (l = this.end_one)),
                            (this.curr_one = this.items[l % 16]),
                            this.curr_time == this.time_one ? this.curr_one.setStatus(2) : this.curr_one.setStatus(1);
                    } else if (3 == this.lottery_count) {
                        if (((t = this.time_three), this.curr_time < 2)) {
                            for (
                                var s = this.curr_time / 2, l = Math.floor(cc.misc.lerp(0, 24, s)), c = [], u = 0;
                                u < 3;
                                u++
                            )
                                c[u] = (this.start_three[u] + l) % 16;
                            this.items.forEach(function (t, e) {
                                c.includes(e) ? t.setStatus(1) : t.setStatus(0);
                            });
                        } else
                            this.curr_time < 3.5
                                ? ((s = (this.curr_time - 2) / 1.5),
                                  (o = Math.floor(cc.misc.lerp(24, this.end_three[0], s)) % 16),
                                  this.items.forEach(function (t, e) {
                                      o == e ? t.setStatus(1) : t.setStatus(0);
                                  }))
                                : this.curr_time < 5
                                ? ((n = this.end_three[0] % 16),
                                  this.items[n].setStatus(2),
                                  (s = (this.curr_time - 3.5) / 1.5),
                                  (i = Math.floor(cc.misc.lerp(64, this.end_three[1], s)) % 16),
                                  this.items.forEach(function (t, e) {
                                      i == e ? t.setStatus(1) : t.setStatus(0);
                                  }))
                                : this.curr_time < 6.5
                                ? ((n = this.end_three[0] % 16),
                                  this.items[n].setStatus(2),
                                  (n = this.end_three[1] % 16),
                                  this.items[n].setStatus(2),
                                  (s = (this.curr_time - 5) / 1.5),
                                  (r = Math.floor(cc.misc.lerp(96, this.end_three[2], s)) % 16),
                                  this.items.forEach(function (t, e) {
                                      r == e ? t.setStatus(1) : t.setStatus(0);
                                  }))
                                : ((this.lottery_status = 2),
                                  this.items.forEach(function (t) {
                                      t.setStatus(0);
                                  }),
                                  this.end_three.forEach(function (t) {
                                      e.items[t % 16].setStatus(2);
                                  }));
                    } else
                        5 == this.lottery_count &&
                            ((t = this.time_five),
                            (this.curr_time = Math.min(this.curr_time, this.time_five)),
                            this.curr_time < this.time_five
                                ? ((s = this.curr_time / this.time_five),
                                  (a = Math.floor(cc.misc.lerp(this.start_five[0], this.end_five[0], s))),
                                  this.items.forEach(function (t) {
                                      t.setStatus(0);
                                  }),
                                  this.start_five.forEach(function (t) {
                                      e.items[(t + a) % 16].setStatus(1);
                                  }))
                                : ((this.lottery_status = 2),
                                  this.items.forEach(function (t) {
                                      t.setStatus(0);
                                  }),
                                  this.end_five.forEach(function (t) {
                                      e.items[t % 16].setStatus(2);
                                  })));
                    0 < this.end_gold &&
                        ((l = cc.misc.lerp(0, this.end_gold, this.curr_time / t)),
                        (this.coinLab.string = "" + Math.floor(l)));
                } else this.onLotteryResult();
        }),
        (R.prototype.onLotteryFast = function () {
            1 == this.lottery_count
                ? (this.curr_time = this.time_one)
                : 3 == this.lottery_count
                ? (this.curr_time = this.time_three)
                : 5 == this.lottery_count && (this.curr_time = this.time_five);
        }),
        (R.prototype.onLotteryResult = function () {
            return a(this, void 0, void 0, function () {
                var e, o, n;
                return p(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (this.lottery_status = 0) < this.end_gold && y.HeroController.addGold(this.end_gold),
                                [4, this.delay(0.3)]
                            );
                        case 1:
                            return (
                                t.sent(),
                                b.app.sound.playEffect("幸运转盘转动后停下在奖励时音效"),
                                b.app.sound.playMusic("幸运转盘bgm"),
                                (this.resultNode.active = !0),
                                1 != this.lottery_count
                                    ? [3, 2]
                                    : ((n = this.items[this.end_one % 16].getData()),
                                      (this.resultItems[2].node.active = !0),
                                      this.resultItems[2].setData(n),
                                      [3, 11])
                            );
                        case 2:
                            if (3 != this.lottery_count) return [3, 7];
                            (e = 1), (t.label = 3);
                        case 3:
                            return e < 4
                                ? ((o = this.end_three[e - 1]),
                                  (n = this.items[o % 16].getData()),
                                  (this.resultItems[e].node.active = !0),
                                  this.resultItems[e].setData(n),
                                  [4, this.delay(0.15)])
                                : [3, 6];
                        case 4:
                            t.sent(), (t.label = 5);
                        case 5:
                            return e++, [3, 3];
                        case 6:
                            return [3, 11];
                        case 7:
                            if (5 != this.lottery_count) return [3, 11];
                            (e = 0), (t.label = 8);
                        case 8:
                            return e < 5
                                ? ((o = this.end_five[e]),
                                  (n = this.items[o % 16].getData()),
                                  (this.resultItems[e].node.active = !0),
                                  this.resultItems[e].setData(n),
                                  [4, this.delay(0.15)])
                                : [3, 11];
                        case 9:
                            t.sent(), (t.label = 10);
                        case 10:
                            return e++, [3, 8];
                        case 11:
                            return [4, this.delay(0.3)];
                        case 12:
                            return t.sent(), (this.btnClose.active = !0), this.btnCloseTween.start(), [2];
                    }
                });
            });
        }),
        (R.prototype.delay = function (e) {
            var o = this;
            return new Promise(function (t) {
                o.scheduleOnce(function () {
                    t();
                }, e);
            });
        }),
        (R.prototype.onBtnLotteryClick = function () {
            (this.isLucky = !1), this.updateLottery();
        }),
        (R.prototype.onBtnFastClick = function () {
            1 == this.lottery_status && this.tips.active && (this.onLotteryFast(), (this.btnFast.active = !1));
        }),
        (R.prototype.onBtnCloseClick = function () {
            b.app.sound.stopMusic(),
                b.app.gui.closeUI(c.UIEnum.LotteryView),
                b.app.sound.playMusic(w.default.inst.checkMapType([S.Map_Group.DEATH]) ? "死神Bgm" : "森林地图bgm"),
                w.default.inst.gameResume();
        }),
        (R.prototype.onBtnLuckyClick = function () {
            var t,
                e = this;
            null === (t = b.app.track) || void 0 === t || t.trackEvent("new_lucky_zhuanpan"),
                w.default.inst.getVideoShareReward(
                    function () {
                        var t;
                        null === (t = b.app.track) || void 0 === t || t.trackEvent("new_suc_lucky_zhuanpan"),
                            (e.isLucky = !0),
                            e.updateLottery();
                    },
                    null,
                    function () {
                        E.default.inst.showTips("获取视频失败，请稍候再试！");
                    }
                );
        }),
        r([u.autoBind("cc.Node", "panel/lc_dk1/lc_dk2/lc_dk23")], R.prototype, "lc_dk23", void 0),
        r([u.autoBind("cc.Node", "panel/btnLucky")], R.prototype, "btnLucky", void 0),
        r([u.autoBind("cc.Node", "panel/lc_dk3")], R.prototype, "lc_dk3", void 0),
        r([u.autoBind("cc.Node", "panel")], R.prototype, "panel", void 0),
        r([u.autoBind("cc.Node", "panel/goldNode")], R.prototype, "goldNode", void 0),
        r([u.autoBind("cc.Label", "panel/goldNode/coinLab")], R.prototype, "coinLab", void 0),
        r([u.autoBind("cc.Node", "resultNode")], R.prototype, "resultNode", void 0),
        r([u.autoBind("cc.Node", "resultNode/btnClose")], R.prototype, "btnClose", void 0),
        r([u.autoBind("cc.Node", "resultNode/results")], R.prototype, "results", void 0),
        r([u.autoBind("cc.Node", "panel/btnFast")], R.prototype, "btnFast", void 0),
        r([u.autoBind("cc.Node", "panel/tips")], R.prototype, "tips", void 0),
        r([u.autoBind("cc.Node", "panel/btnLottery")], R.prototype, "btnLottery", void 0),
        r([u.autoBind("cc.Node", "panel/content")], R.prototype, "content", void 0),
        r([t([cc.SpriteFrame])], R.prototype, "iconBgs", void 0),
        r([e], R));
function R() {
    var t = (null !== s && s.apply(this, arguments)) || this;
    return (
        (t.lc_dk23 = null),
        (t.btnLucky = null),
        (t.lc_dk3 = null),
        (t.panel = null),
        (t.goldNode = null),
        (t.coinLab = null),
        (t.resultNode = null),
        (t.btnClose = null),
        (t.results = null),
        (t.btnFast = null),
        (t.tips = null),
        (t.btnLottery = null),
        (t.content = null),
        (t.iconBgs = []),
        (t.items = []),
        (t.resultItems = []),
        (t.start_one = 0),
        (t.end_one = 0),
        (t.time_one = 4),
        (t.curr_one = null),
        (t.start_three = []),
        (t.end_three = []),
        (t.time_three = 6.5),
        (t.start_five = []),
        (t.end_five = []),
        (t.time_five = 4),
        (t.curr_time = 0),
        (t.maxLottery = 0),
        (t.lottery_ratios = null),
        (t.lottery_count = 0),
        (t.countArr = [1, 3, 5]),
        (t.atlas = null),
        (t.list = []),
        (t.lottery_status = 0),
        (t.isLucky = !1),
        (t.end_gold = 0),
        (t.lottery_skills = []),
        (t.lottery_golds = []),
        (t.btnCloseTween = null),
        (t.circleCenter = cc.v2(0, 40)),
        (t.circleRadius = 20),
        (t.carSpeed = 50),
        (t.radian = 0),
        (t.chapterVo = null),
        t
    );
}
o.default = e;
