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
    u = t("LayerMgr"),
    p = t("BaseUI"),
    h = t("EventTypes"),
    d = t("MultipleController"),
    f = t("TaskController"),
    y = t("UserDataController"),
    g = t("MainPageType"),
    m = t("EffectMgr"),
    _ = t("UIEnum"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = p.default),
        i(v, l),
        (v.prototype.onLoad = function () {
            d.default.inst.Breathing(this.reward_hd, 1.2, 1, 0.9);
        }),
        (v.prototype.onEnable = function () {
            (this.node.scale = 1),
                this.on(this.btnGet, this.onGetClick, this),
                this.on(this.btnGo, this.onGoClick, this);
        }),
        (v.prototype.onDisable = function () {
            this.off(this.btnGet), this.off(this.btnGo);
        }),
        (v.prototype.setData = function (t, e) {
            (this._data = t), (this.index = e), (this.node.scale = 1), this.updateView(), console.log("[TaskItem]:", t);
        }),
        (v.prototype.updateView = function () {
            var t;
            3 == this._data.type
                ? ((this.descLab.string = this._data.data.desc.replace("%d", this._data.needCount + "")),
                  (e = t = 0),
                  this.icon &&
                      (0 < this._data.data.gem
                          ? ((t = 0), (e = this._data.data.gem))
                          : 0 < this._data.data.coin
                          ? ((t = 1), (e = this._data.data.coin))
                          : 0 < this._data.data.drawings
                          ? ((t = 2), (e = this._data.data.drawings))
                          : 0 < this._data.data.equips && ((t = 3), (e = this._data.data.equips)),
                      (this.icon.spriteFrame = this.rewardSpf[t])),
                  (this.valueLab.string = e + ""))
                : ((this.valueLab.string = this._data.data.reward + ""), (this.descLab.string = this._data.data.desc));
            var e = this._data.count;
            2 == this._data.status
                ? ((this.progressLab.string = this._data.needCount + "/" + this._data.needCount),
                  (this.progress.progress = 1))
                : ((this.progressLab.string = cc.misc.clampf(e, 0, this._data.needCount) + "/" + this._data.needCount),
                  (this.progress.progress = cc.misc.clamp01(e / this._data.needCount))),
                (this.btnGet.active = 1 == this._data.status),
                (this.btnGo.active = 0 == this._data.status),
                (this.btnGray.active = 2 == this._data.status);
        }),
        (v.prototype.reduce = function (t) {
            var e = this;
            (this.node.parent.getComponent(cc.Layout).enabled = !0),
                cc
                    .tween(t)
                    .to(0.1, {scale: 1.1})
                    .to(0.1, {scale: 0})
                    .call(function () {
                        (1 != e._data.type && 2 != e._data.type && 3 != e._data.type) ||
                            c.app.event.emit(h.EventType.On_Task_Update),
                            (e.node.parent.getComponent(cc.Layout).enabled = !1);
                    })
                    .start();
        }),
        (v.prototype.itemReduce = function () {
            this.reduce(this.node);
        }),
        (v.prototype.onGetClick = function () {
            1 == this._data.type
                ? (f.default.inst.finishDailyTask(this._data.data.id), this.itemReduce())
                : 2 == this._data.type
                ? (f.default.inst.finishWeekTask(this._data.data.id), this.itemReduce())
                : 3 == this._data.type && f.default.inst.finishHonourTask(this._data);
        }),
        (v.prototype.onGoClick = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function () {
                    if (1 == this._data.type)
                        switch (this._data.data.type) {
                            case 1:
                                break;
                            case 2:
                                c.app.gui.openUI(_.UIEnum.EverydayRewardView, u.LayerEnum.VIEW_LAYER);
                                break;
                            case 3:
                                break;
                            case 4:
                                c.app.gui.openUI(_.UIEnum.ChapterRewardView, u.LayerEnum.VIEW_LAYER),
                                    c.app.gui.closeUI(_.UIEnum.HomeView);
                                break;
                            case 5:
                                c.app.event.emit(h.EventType.Home_Change_Page, {page: g.MainPageType.Challenge});
                                break;
                            case 6:
                                c.app.event.emit(h.EventType.Home_Change_Page, {page: g.MainPageType.Equip});
                                break;
                            case 7:
                            case 8:
                                5 <= y.default.inst.chapter
                                    ? (c.app.gui.openUI(_.UIEnum.PatrolView, u.LayerEnum.VIEW_LAYER),
                                      c.app.gui.closeUI(_.UIEnum.HomeView))
                                    : m.default.inst.showTips("通关章节5后解锁");
                                break;
                            case 10:
                                if (y.default.inst.chapter < 2) return m.default.inst.showTips("通关章节1后解锁"), [2];
                                c.app.event.emit(h.EventType.Home_Change_Page, {page: g.MainPageType.Shop});
                        }
                    else if (2 == this._data.type)
                        switch (this._data.data.type) {
                            case 1:
                                c.app.event.emit(h.EventType.Home_Change_Page, {page: g.MainPageType.Equip});
                                break;
                            case 2:
                                break;
                            case 3:
                                c.app.event.emit(h.EventType.Home_Change_Page, {page: g.MainPageType.Challenge});
                                break;
                            case 4:
                                break;
                            case 5:
                                c.app.gui.openUI(_.UIEnum.ChapterRewardView, u.LayerEnum.VIEW_LAYER),
                                    c.app.gui.closeUI(_.UIEnum.HomeView);
                                break;
                            case 10:
                                if (y.default.inst.chapter < 2) return m.default.inst.showTips("通关章节1后解锁"), [2];
                                c.app.event.emit(h.EventType.Home_Change_Page, {page: g.MainPageType.Shop});
                        }
                    else if (3 == this._data.type)
                        switch (this._data.data.type) {
                            case 1:
                                break;
                            case 2:
                                c.app.gui.openUI(_.UIEnum.ChapterRewardView, u.LayerEnum.VIEW_LAYER),
                                    c.app.gui.closeUI(_.UIEnum.HomeView);
                                break;
                            case 3:
                                c.app.event.emit(h.EventType.Home_Change_Page, {page: g.MainPageType.Challenge});
                                break;
                            case 4:
                                break;
                            case 5:
                                c.app.event.emit(h.EventType.Home_Change_Page, {page: g.MainPageType.Equip});
                                break;
                            case 6:
                                c.app.event.emit(h.EventType.Home_Change_Page, {page: g.MainPageType.Evolve});
                                break;
                            case 7:
                                break;
                            case 8:
                                c.app.event.emit(h.EventType.Home_Change_Page, {page: g.MainPageType.Shop});
                        }
                    return c.app.gui.closeUI(_.UIEnum.TaskView), [2];
                });
            });
        }),
        r([e(cc.ProgressBar)], v.prototype, "progress", void 0),
        r([e(cc.Node)], v.prototype, "btnGet", void 0),
        r([e(cc.Node)], v.prototype, "btnGo", void 0),
        r([e(cc.Node)], v.prototype, "btnGray", void 0),
        r([e(cc.Label)], v.prototype, "valueLab", void 0),
        r([e(cc.Label)], v.prototype, "descLab", void 0),
        r([e(cc.Sprite)], v.prototype, "icon", void 0),
        r([e(cc.Label)], v.prototype, "progressLab", void 0),
        r([e(cc.Node)], v.prototype, "reward_hd", void 0),
        r([e([cc.SpriteFrame])], v.prototype, "rewardSpf", void 0),
        r([t], v));
function v() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.progress = null),
        (t.btnGet = null),
        (t.btnGo = null),
        (t.btnGray = null),
        (t.valueLab = null),
        (t.descLab = null),
        (t.icon = null),
        (t.progressLab = null),
        (t.reward_hd = null),
        (t.rewardSpf = []),
        (t._data = null),
        (t.index = 0),
        t
    );
}
o.default = t;
