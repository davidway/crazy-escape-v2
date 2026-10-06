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
    p = t("EventTypes"),
    h = t("MultipleController"),
    d = t("TaskController"),
    f = t("UserDataController"),
    y = t("ConfData"),
    g = t("GameSetting"),
    m = t("TrackType"),
    _ = t("EffectMgr"),
    v = t("GameMgr"),
    b = t("UIEnum"),
    w = {2: "普通", 3: "优秀", 4: "精良"},
    C = {2: "#12770B", 3: "#3250BA", 4: "#9328E7"},
    ECA = t("EquipChestArcade"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = cc.Component),
        i(k, l),
        (k.prototype.start = function () {
            (this._treasure_chest = y.default.inst.shopConf.getTreasureChest(this._content.id)),
                (this.chest_ad_down_time = 1e3 * g.GameSetting.inst.chest_ad_down_time),
                this.init(),
                (this.isInit = !0),
                this.onBtn(),
                h.default.inst.Breathing(this.xts, 1.1, 1, 0.9);
        }),
        (k.prototype.setData = function (t, e, o) {
            console.log(t), (this._content = t), (this._BigIndex = o), (this._index = e), this.isInit && this.init();
        }),
        (k.prototype.init = function () {
            switch (
                (console.log(this._treasure_chest),
                (this.towModuleStorageData = y.default.inst.shopConf.getTowModuleStorageData(
                    this._BigIndex,
                    this._index,
                    this._treasure_chest
                )),
                (this.adGet = this.towModuleStorageData.commodityData[this._index].adOpen),
                this._treasure_chest.type)
            ) {
                case 1:
                    this.canAdGet = g.GameSetting.inst.plain_chest_ad;
                    break;
                case 2:
                    this.canAdGet = g.GameSetting.inst.epic_chest_ad;
            }
            this.adGet >= this.canAdGet &&
                ((this.adGet = this.canAdGet),
                (this.isLock = 0),
                y.default.inst.shopConf.setTreasureChestAdLock(this._BigIndex, this._index, this.isLock, 0)),
                (this.alreadyNum = this.towModuleStorageData.commodityData[this._index].getOpen),
                (this.bg.spriteFrame = this.itemBg[this._treasure_chest.icom]),
                (this.Item.spriteFrame = this.itemBgSp[this._treasure_chest.icom]),
                (this.ItemName.string = this._treasure_chest.name),
                this.setLable();
            var t = (t = (t = this._treasure_chest.describe.replace(
                "%2",
                "<color=" + C[2] + ">" + w[2] + "</color>"
            )).replace("%3", "<color=" + C[3] + ">" + w[3] + "</color>")).replace(
                "%4",
                "<color=" + C[4] + ">" + w[4] + "</color>"
            );
            (this.describe.string = "<b>" + t + "</b>"),
                (this.getBtnLab.string = "抽" + this._treasure_chest.money_open[0].num + "次"),
                (this.useMoney =
                    this._treasure_chest.money * this._treasure_chest.money_open[0].num -
                    this._treasure_chest.money_open[0].reduce),
                (this.moneyLab.string = this.useMoney + ""),
                (this.LockStartTime = this.towModuleStorageData.commodityData[this._index].LockStartTime),
                (this.isLock = this.towModuleStorageData.commodityData[this._index].isLock),
                1 == this.isLock && (this.lockAdBtn(!0), this.downTime(), this.schedule(this.downTime, 1)),
                ECA.applyTreasureChest(this);
        }),
        (k.prototype.downTime = function () {
            var t,
                e = new Date().getTime();
            0 == this.adGet || e - this.LockStartTime >= this.chest_ad_down_time
                ? (this.unschedule(this.downTime),
                  this.setLable(),
                  (this.isLock = 0),
                  y.default.inst.shopConf.setTreasureChestAdLock(this._BigIndex, this._index, this.isLock, 0),
                  c.app.event.emit(p.EventType.Home_Shop_Change_Page))
                : ((t = Math.floor((this.chest_ad_down_time - (e - this.LockStartTime)) / 1e3)),
                  (e = Math.floor(t / 60)),
                  (this.adLabel.string = (e < 10 ? "0" + e : e) + ":" + ((t = t % 60) < 10 ? "0" + t : t)));
        }),
        (k.prototype.setLable = function () {
            var t;
            1 == this._treasure_chest.ad_open.isOpen
                ? ((this.adBtn.active = !0), (this.adLabel.string = this.canAdGet - this.adGet + "/" + this.canAdGet))
                : (this.adBtn.active = !1),
                (t = this.adGet >= this.canAdGet),
                this.lockAdBtn(t),
                -1 == this._treasure_chest.fixed.num
                    ? (this.fixedLab.node.active = !1)
                    : ((this.fixedLab.node.active = !0),
                      (t =
                          this._treasure_chest.fixed.num -
                          this.alreadyNum +
                          "次内必出<color=" +
                          C[this._treasure_chest.fixed.quality] +
                          ">" +
                          w[this._treasure_chest.fixed.quality] +
                          "</color>装备"),
                      (this.fixedLab.string = "<b>" + t + "</b>"));
        }),
        (k.prototype.lockAdBtn = function (t) {
            t
                ? (console.log("锁定"),
                  (this.adLabel.node.color = cc.color(153, 84, 20, 255)),
                  (this.adBtn.getComponent(cc.Button).interactable = !1),
                  (this.xts.active = !1),
                  (this.adIcon.spriteFrame = this.adIcons[0]))
                : (console.warn("解锁"),
                  (this.adLabel.node.color = cc.color(86, 129, 28, 255)),
                  (this.adIcon.spriteFrame = this.adIcons[1]),
                  (this.xts.active = !0),
                  (this.adBtn.getComponent(cc.Button).interactable = !0));
        }),
        (k.prototype.onBtn = function () {
            this.adBtn.on("click", this._adBtn, this),
                this.getBtn.on("click", this._getBtn, this),
                this.probabilityBtn.on("click", this._probabilityBtn, this);
        }),
        (k.prototype._adBtn = function () {
            var t,
                r = this;
            console.log("看广告获得"), null === (t = c.app.track) || void 0 === t || t.trackEvent("new_putong_update");
            v.default.inst.getVideoShareReward(
                function () {
                    !(function () {
                        null === (i = c.app.track) || void 0 === i || i.trackEvent("new_suc_putong_update"),
                            d.default.inst.addDaily("chest", 1),
                            d.default.inst.addWeek("chest", 1),
                            r.adGet++;
                        var t = r._treasure_chest.id,
                            e = r._treasure_chest.probability,
                            o = r._treasure_chest.fixed.num,
                            n = r._treasure_chest.fixed.quality,
                            i = r._treasure_chest.module_type;
                        r.alreadyNum = y.default.inst.shopConf.openTreasureChest(
                            t,
                            e,
                            1,
                            r.alreadyNum,
                            o,
                            n,
                            i,
                            r._BigIndex,
                            r._index,
                            !0,
                            r.adGet
                        );
                        var i = new Date().getTime();
                        (r.LockStartTime = i),
                            (r.isLock = 1),
                            y.default.inst.shopConf.setTreasureChestAdLock(r._BigIndex, r._index, r.isLock, i),
                            r.setLable(),
                            r.adGet < r.canAdGet && (r.lockAdBtn(!0), r.downTime(), r.schedule(r.downTime, 1)),
                            c.app.event.emit(p.EventType.Home_Shop_Change_Page),
                            null === (i = c.app.track) ||
                                void 0 === i ||
                                i.trackEvent(
                                    0 == r._treasure_chest.icom
                                        ? m.TrackType.Open_Normal_Chest
                                        : m.TrackType.Open_Epic_Chest
                                );
                    })();
                },
                null,
                function () {
                    _.default.inst.showTips("获取视频失败，请稍候再试！");
                }
            );
        }),
        (k.prototype._getBtn = function () {
            var a = this;
            console.log("钻石打开获得");
            function t() {
                d.default.inst.addDaily("chest", 1), d.default.inst.addWeek("chest", 1);
                var t = a._treasure_chest.id,
                    e = a._treasure_chest.probability,
                    o = a._treasure_chest.fixed.num,
                    n = a._treasure_chest.fixed.quality,
                    i = a._treasure_chest.money_open[0].num,
                    r = a._treasure_chest.module_type;
                (a.alreadyNum = y.default.inst.shopConf.openTreasureChest(
                    t,
                    e,
                    i,
                    a.alreadyNum,
                    o,
                    n,
                    r,
                    a._BigIndex,
                    a._index,
                    !1
                )),
                    a.setLable(),
                    null === (r = c.app.track) ||
                        void 0 === r ||
                        r.trackEvent(
                            0 == a._treasure_chest.icom ? m.TrackType.Open_Normal_Chest : m.TrackType.Open_Epic_Chest
                        );
            }
            switch (this._treasure_chest.money_type) {
                case 1:
                    f.default.inst.useGold(this.useMoney) && t();
                    break;
                case 2:
                    f.default.inst.useGem(this.useMoney) && t();
            }
        }),
        (k.prototype._probabilityBtn = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                console.log("获得"),
                                (e = {probability: this._treasure_chest.probability, name: this._treasure_chest.name}),
                                [4, c.app.gui.openUI(b.UIEnum.WaitingView, u.LayerEnum.TOP_LAYER)]
                            );
                        case 1:
                            return t.sent(), [4, c.app.gui.openUI(b.UIEnum.ProbabilityView, u.LayerEnum.VIEW_LAYER, e)];
                        case 2:
                            return t.sent(), c.app.gui.closeUI(b.UIEnum.WaitingView), [2];
                    }
                });
            });
        }),
        r([e(cc.Label)], k.prototype, "ItemName", void 0),
        r([e(cc.RichText)], k.prototype, "describe", void 0),
        r([e(cc.RichText)], k.prototype, "fixedLab", void 0),
        r([e(cc.Label)], k.prototype, "adLabel", void 0),
        r([e(cc.Label)], k.prototype, "getBtnLab", void 0),
        r([e(cc.Label)], k.prototype, "moneyLab", void 0),
        r([e(cc.Node)], k.prototype, "adBtn", void 0),
        r([e(cc.Node)], k.prototype, "getBtn", void 0),
        r([e(cc.Node)], k.prototype, "probabilityBtn", void 0),
        r([e(cc.Node)], k.prototype, "xts", void 0),
        r([e(cc.Sprite)], k.prototype, "adIcon", void 0),
        r([e(cc.Sprite)], k.prototype, "Item", void 0),
        r([e(cc.Sprite)], k.prototype, "bg", void 0),
        r([e([cc.SpriteFrame])], k.prototype, "adIcons", void 0),
        r([e([cc.SpriteFrame])], k.prototype, "itemBgSp", void 0),
        r([e([cc.SpriteFrame])], k.prototype, "itemBg", void 0),
        r([t], k));
function k() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.ItemName = null),
        (t.describe = null),
        (t.fixedLab = null),
        (t.adLabel = null),
        (t.getBtnLab = null),
        (t.moneyLab = null),
        (t.adBtn = null),
        (t.getBtn = null),
        (t.probabilityBtn = null),
        (t.xts = null),
        (t.adIcon = null),
        (t.Item = null),
        (t.bg = null),
        (t.adIcons = []),
        (t.itemBgSp = []),
        (t.itemBg = []),
        (t._index = 0),
        (t._BigIndex = 0),
        (t._treasure_chest = null),
        (t._content = null),
        (t.adGet = 0),
        (t.canAdGet = 0),
        (t.alreadyNum = 0),
        (t.isLock = 0),
        (t.chest_ad_down_time = 0),
        (t.LockStartTime = 0),
        (t.towModuleStorageData = null),
        (t.isInit = !1),
        (t.useMoney = 0),
        t
    );
}
o.default = t;
