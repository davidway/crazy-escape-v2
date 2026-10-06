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
    s =
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
    l =
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
var a,
    c = t("BasePanel"),
    u = t("UIEnum"),
    p = t("decorator"),
    d = t("UserDataController"),
    f = t("ConfData"),
    h = t("App"),
    y = t("LayerMgr"),
    g = t("ChapterRewardItem"),
    m = t("ArrayUtil"),
    _ = t("ChapterTimeItem"),
    v = t("GameMgr"),
    b = t("CloseUI"),
    w = t("Prop"),
    C = t("MathUtil"),
    k = t("MultipleController"),
    E = t("TaskController"),
    S = cc._decorator,
    e = S.ccclass,
    t = S.property,
    e =
        (S.inspector,
        (a = c.default),
        i(M, a),
        (M.prototype.initView = function () {
            for (var t = 0; t < this.content.childrenCount; t++) {
                var e = this.content.children[t];
                this.chapters.push(e.getComponent(_.default));
            }
            for (t = 0; t < this.rewardNode.childrenCount; t++)
                (e = this.rewardNode.children[t]), this.rewards.push(e.getComponent(g.default));
            this.onEvent(), (this.addBtn.active = cc.sys.isBrowser), k.default.inst.Breathing(this.btnGet, 1.2, 1, 0.9);
        }),
        (M.prototype.updateView = function () {
            var e = this;
            this.addTop();
            var t = Math.min(f.default.inst.chapterRewardConf.max_id, d.default.inst.chest);
            this.isLast = f.default.inst.chapterRewardConf.max_id == d.default.inst.chest;
            for (var o = cc.v2(0), n = 0, i = 0; i < 4; i++) {
                var r,
                    a = null;
                0 < t + i - 1 &&
                    t + i - 1 <= f.default.inst.chapterRewardConf.max_id &&
                    ((r = f.default.inst.chapterRewardConf.getChapterRewardVo(t + i - 1)).chapter < 3
                        ? ((n = 0), (o = cc.v2(18, 78)))
                        : (n = r.chapter < 6 ? ((o = cc.v2(18, 90)), 2) : ((o = cc.v2(30, 92)), 4))),
                    (a =
                        t + i - 1 < t
                            ? this.zjbx_icons[n + 1]
                            : (null == this._current && (this._current = this.chapters[i]),
                              (o = cc.v2(0, 50)),
                              this.zjbx_icons[n])),
                    f.default.inst.chapterRewardConf.max_id < d.default.inst.chest &&
                        ((a = this.zjbx_icons[n + 1]), (o = cc.v2(30, 92))),
                    this.chapters[i].setData(t + i - 1, a, o);
            }
            var s = d.default.inst.checkChapterBoxReward();
            (this.btnGet.active = !1), (this.tipsLab.node.active = !1);
            var l = f.default.inst.chapterRewardConf.getChapterRewardVo(t);
            if (
                (1 == s
                    ? (this.btnGet.active = !0)
                    : 0 == s &&
                      ((this.tipsLab.node.active = !0),
                      l.index < 3
                          ? (this.tipsLab.string = "生存超过" + Math.floor(l.need_time / 60) + "分钟才可领取")
                          : (this.tipsLab.string = "通关章节" + l.chapter + "可领取")),
                (this.rewardList.length = 0),
                (this.rewardEquips.length = 0),
                (this.rewardDraws.length = 0),
                this.rewards.forEach(function (t) {
                    t.node.active = !1;
                }),
                l)
            ) {
                console.log("[ChapterRewardView]-->[line:115]:", l),
                    (this.rewardNode.active = !0),
                    (this.rewardTitle.active = !0);
                var c,
                    u = 0;
                if (
                    ((this.rewards[u].getComponent(cc.Sprite).spriteFrame = this.Icons[0]),
                    0 < l.coin &&
                        ((this.rewards[u].getComponent(cc.Sprite).spriteFrame = this.Icons[1]),
                        (this.rewards[u].node.active = !0),
                        this.rewards[u].setData({type: 1, value: l.coin, id: 0}),
                        (u += 1),
                        this.rewardList.push({type: w.Prop.gold, profit: {num: l.coin}})),
                    0 < l.gem &&
                        ((this.rewards[u].getComponent(cc.Sprite).spriteFrame = this.Icons[1]),
                        (this.rewards[u].node.active = !0),
                        this.rewards[u].setData({type: 2, value: l.gem, id: 0}),
                        (u += 1),
                        this.rewardList.push({type: w.Prop.Gem, profit: {num: l.gem}})),
                    l.drawings &&
                        ((c = l.drawings.variety),
                        (s = l.drawings.count),
                        this.rewards[u] &&
                            ((this.rewards[u].node.active = !0),
                            this.rewards[u].setData({type: 3, value: s, id: 7}),
                            (u += 1)),
                        (s = f.default.inst.drawingConf.getRandomDraw(s)).getLists.forEach(function (t) {
                            e.rewardDraws.push(t);
                        }),
                        s.showDatas.forEach(function (t) {
                            e.rewardList.push(t);
                        })),
                    l.equips)
                )
                    for (
                        0 < (c = l.equips.variety) &&
                            this.rewards[u] &&
                            ((this.rewards[u].node.active = !0),
                            this.rewards[u].setData({type: 4, value: 1, id: 0}),
                            (u += 1)),
                            i = 0;
                        i < c;
                        i++
                    ) {
                        var p,
                            h = function (t) {
                                t = {id: t.equip_id, quality: 1, level: 1, status: 0, equipType: t.type};
                                console.log("装备：", t),
                                    e.rewardEquips.push(t),
                                    e.rewardList.push({type: w.Prop.equip, profit: {equip: t}});
                            };
                        0 == l.equips.id[0]
                            ? h(f.default.inst.equipConf.getRandomEquip())
                            : ((p = l.equips.id.length),
                              (p = C.default.randomRangeInt(0, p)),
                              (p = l.equips.id[p]),
                              h(f.default.inst.equipConf.getEquipVo(p)));
                    }
                console.log("章节奖励：", this.rewardList, this.rewardDraws, this.rewardEquips);
            }
        }),
        (M.prototype.addTop = function () {
            v.default.inst.topNode && (v.default.inst.topNode.node.parent = this.top);
        }),
        (M.prototype.scroll = function () {
            var t = this;
            (this.btnGet.active = !1),
                (this.rewardTitle.active = !1),
                (this.rewardNode.active = !1),
                (this.tipsLab.node.active = !1);
            var e = {x: 0, scale1: 1, scale2: 0.7};
            cc.tween(e)
                .to(
                    0.5,
                    {x: -315, scale1: 0.7, scale2: 1},
                    {
                        onUpdate: function () {
                            (t.content.position = cc.v3(e.x, 95)),
                                (t.chapters[1].node.scale = e.scale1),
                                (t.chapters[2].node.scale = e.scale2);
                        }
                    }
                )
                .call(function () {
                    (t.content.position = cc.v3(0, 95)),
                        (t.chapters[1].node.scale = 1),
                        (t.chapters[2].node.scale = 0.7),
                        t.updateView();
                })
                .start();
        }),
        (M.prototype.onEvent = function () {
            var t = this;
            this.node.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    return s(t, void 0, void 0, function () {
                        return l(this, function () {
                            return b.default.inst.closeNode(), [2];
                        });
                    });
                },
                this
            );
        }),
        (M.prototype.onDisable = function () {
            a.prototype.onDisable.call(this), b.default.inst.closeNode();
        }),
        (M.prototype.onBtnGetClick = function () {
            var a;
            return s(this, void 0, void 0, function () {
                var o,
                    t,
                    e,
                    n,
                    i,
                    r = this;
                return l(this, function () {
                    return (
                        b.default.inst.closeNode(),
                        d.default.inst.getChapterBoxReward(this.rewardDraws, this.rewardEquips),
                        (o = m.default.clone(this.rewardList)),
                        (t = Math.min(f.default.inst.chapterRewardConf.max_id, d.default.inst.chest)),
                        (e = f.default.inst.chapterRewardConf.getChapterRewardVo(t - 1)),
                        (n = 0),
                        (i = cc.v2(0)),
                        (i =
                            e.chapter < 3
                                ? ((n = 0), cc.v2(18, 78))
                                : e.chapter < 6
                                ? ((n = 2), cc.v2(18, 90))
                                : ((n = 4), cc.v2(30, 92))),
                        null === (a = this._current) || void 0 === a || a.setData(t - 1, this.zjbx_icons[n + 1], i),
                        (this._current = null),
                        E.default.inst.addDaily("chapterBox", 1),
                        E.default.inst.addWeek("chapterBox", 1),
                        E.default.inst.addHonour("chapterBox", 1),
                        this.scheduleOnce(function () {
                            return s(r, void 0, void 0, function () {
                                var e;
                                return l(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return (
                                                (e = {type: 1, profitList: o, iconType: 2}),
                                                [
                                                    4,
                                                    h.app.gui.openUI(
                                                        u.UIEnum.ReturnMaterialView,
                                                        y.LayerEnum.VIEW_LAYER,
                                                        e
                                                    )
                                                ]
                                            );
                                        case 1:
                                            return (
                                                t.sent(),
                                                (this.rewardList = []),
                                                (this.rewardDraws = []),
                                                (this.rewardEquips = []),
                                                this.isLast ? this.updateView() : this.scroll(),
                                                [2]
                                            );
                                    }
                                });
                            });
                        }, 0.1),
                        [2]
                    );
                });
            });
        }),
        (M.prototype.onBtnBackClick = function () {
            return s(this, void 0, void 0, function () {
                return l(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, h.app.gui.openUI(u.UIEnum.HomeView, y.LayerEnum.VIEW_LAYER)];
                        case 1:
                            return (
                                t.sent(),
                                h.app.gui.closeUI(u.UIEnum.ChapterRewardView),
                                (this.rewardList = []),
                                (this.rewardDraws = []),
                                (this.rewardEquips = []),
                                [2]
                            );
                    }
                });
            });
        }),
        (M.prototype.onAddBtnClick = function () {
            (this.rewardList = []),
                (this.rewardDraws = []),
                (this.rewardEquips = []),
                d.default.inst.updateChapterBestTime(v.default.inst.chapter, 3e5),
                d.default.inst.passChapter(v.default.inst.chapter),
                this.updateView();
        }),
        r([p.autoBind("cc.Node", "top")], M.prototype, "top", void 0),
        r([p.autoBind("cc.Node", "rewardTitle")], M.prototype, "rewardTitle", void 0),
        r([p.autoBind("cc.Node", "content")], M.prototype, "content", void 0),
        r([p.autoBind("cc.Node", "rewardNode")], M.prototype, "rewardNode", void 0),
        r([p.autoBind("cc.Node", "btnGet")], M.prototype, "btnGet", void 0),
        r([p.autoBind("cc.Node", "btnBack")], M.prototype, "btnBack", void 0),
        r([p.autoBind("cc.Label", "descLab")], M.prototype, "descLab", void 0),
        r([p.autoBind("cc.Label", "tipsLab")], M.prototype, "tipsLab", void 0),
        r([p.autoBind("cc.Node", "test/addBtn")], M.prototype, "addBtn", void 0),
        r([t([cc.SpriteFrame])], M.prototype, "Icons", void 0),
        r([t([cc.SpriteFrame])], M.prototype, "zjbx_icons", void 0),
        r([e], M));
function M() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.top = null),
        (t.rewardTitle = null),
        (t.content = null),
        (t.rewardNode = null),
        (t.btnGet = null),
        (t.btnBack = null),
        (t.descLab = null),
        (t.tipsLab = null),
        (t.addBtn = null),
        (t.Icons = []),
        (t.zjbx_icons = []),
        (t.chapters = []),
        (t.rewards = []),
        (t.rewardList = []),
        (t.rewardDraws = []),
        (t.rewardEquips = []),
        (t.isLast = !1),
        (t._current = null),
        t
    );
}
o.default = e;
