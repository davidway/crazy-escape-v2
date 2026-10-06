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
    p = t("TaskController"),
    h = t("UserDataController"),
    d = t("ConfData"),
    f = t("TrackType"),
    y = t("EffectMgr"),
    g = t("GameMgr"),
    m = t("UIEnum"),
    _ = {2: "普通", 3: "优秀", 4: "精良"},
    v = {2: "#12770B", 3: "#3250BA", 4: "#9328E7"},
    ECA = t("EquipChestArcade"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((l = cc.Component),
        i(b, l),
        (b.prototype.start = function () {
            this.init(), (this.isInit = !0), this.onBtn();
        }),
        (b.prototype.setData = function (t, e, o) {
            console.log(t), (this._content = t), (this._BigIndex = o), (this._index = e), this.isInit && this.init();
        }),
        (b.prototype.init = function () {
            (this.oneModuleStorageData = d.default.inst.shopConf.getOneModuleStorageData(this._BigIndex)),
                (this.adGet = this.oneModuleStorageData.commodityData[this._index].adOpen),
                (this.alreadyNum = this.oneModuleStorageData.commodityData[this._index].getOpen),
                (this._treasure_chest = d.default.inst.shopConf.getTreasureChest(this._content.id)),
                (this.bg.spriteFrame = this.itemBg[this._treasure_chest.icom]),
                (this.Item.spriteFrame = this.itemBgSp[this._treasure_chest.icom]),
                this.setLable();
            var t = (t = (t = this._treasure_chest.describe.replace(
                "%2",
                "<color=" + v[2] + ">" + _[2] + "</color>"
            )).replace("%3", "<color=" + v[3] + ">" + _[3] + "</color>")).replace(
                "%4",
                "<color=" + v[4] + ">" + _[4] + "</color>"
            );
            (this.describe.string = "<b>" + t + "</b>"),
                (this.getBtnLab.string = "抽" + this._treasure_chest.money_open[0].num + "次"),
                (this.useMoney =
                    this._treasure_chest.money * this._treasure_chest.money_open[0].num -
                    this._treasure_chest.money_open[0].reduce),
                (this.moneyLab.string = this.useMoney + ""),
                ECA.applyTreasureChest(this);
        }),
        (b.prototype.onBtn = function () {
            this.adBtn.on("click", this._adBtn, this),
                this.getBtn.on("click", this._getBtn, this),
                this.probabilityBtn.on("click", this._probabilityBtn, this);
        }),
        (b.prototype._adBtn = function () {
            console.log("获得"),
                g.default.inst.getVideoShareReward(
                    function () {},
                    null,
                    function () {
                        y.default.inst.showTips("获取视频失败，请稍候再试！");
                    }
                );
        }),
        (b.prototype._getBtn = function () {
            var a = this;
            console.log("获得", this._treasure_chest.module_type);
            function t() {
                p.default.inst.addDaily("chest", 1),
                    p.default.inst.addWeek("chest", 1),
                    null === (r = c.app.track) || void 0 === r || r.trackEvent(f.TrackType.Open_Super_Chest),
                    a.adGet++;
                var t = a._treasure_chest.id,
                    e = a._treasure_chest.probability,
                    o = a._treasure_chest.fixed.num,
                    n = a._treasure_chest.fixed.quality,
                    i = a._treasure_chest.money_open[0].num,
                    r = a._treasure_chest.module_type;
                (a.alreadyNum = d.default.inst.shopConf.openTreasureChest(
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
                    a.setLable();
            }
            switch (this._treasure_chest.money_type) {
                case 1:
                    h.default.inst.useGold(this.useMoney) && t();
                    break;
                case 2:
                    h.default.inst.useGem(this.useMoney) && t();
            }
        }),
        (b.prototype.setLable = function () {
            var t;
            1 == this._treasure_chest.ad_open.isOpen
                ? ((this.adBtn.active = !0),
                  (this.adLabel.string = this.adGet + "/" + this._treasure_chest.ad_open.quantity))
                : (this.adBtn.active = !1),
                -1 == this._treasure_chest.fixed.num
                    ? (this.fixedLab.node.active = !1)
                    : ((this.fixedLab.node.active = !0),
                      (t =
                          this._treasure_chest.fixed.num -
                          this.alreadyNum +
                          "次内必出<color=" +
                          v[this._treasure_chest.fixed.quality] +
                          ">" +
                          _[this._treasure_chest.fixed.quality] +
                          "</color>装备"),
                      (this.fixedLab.string = "<b>" + t + "</b>"));
        }),
        (b.prototype._probabilityBtn = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = {probability: this._treasure_chest.probability, name: this._treasure_chest.name}),
                                [4, c.app.gui.openUI(m.UIEnum.WaitingView, u.LayerEnum.TOP_LAYER)]
                            );
                        case 1:
                            return t.sent(), [4, c.app.gui.openUI(m.UIEnum.ProbabilityView, u.LayerEnum.VIEW_LAYER, e)];
                        case 2:
                            return t.sent(), c.app.gui.closeUI(m.UIEnum.WaitingView), [2];
                    }
                });
            });
        }),
        r([e(cc.RichText)], b.prototype, "describe", void 0),
        r([e(cc.RichText)], b.prototype, "fixedLab", void 0),
        r([e(cc.Label)], b.prototype, "adLabel", void 0),
        r([e(cc.Label)], b.prototype, "getBtnLab", void 0),
        r([e(cc.Label)], b.prototype, "moneyLab", void 0),
        r([e(cc.Node)], b.prototype, "adBtn", void 0),
        r([e(cc.Node)], b.prototype, "getBtn", void 0),
        r([e(cc.Node)], b.prototype, "probabilityBtn", void 0),
        r([e(cc.Node)], b.prototype, "xts", void 0),
        r([e(cc.Sprite)], b.prototype, "Item", void 0),
        r([e(cc.Sprite)], b.prototype, "bg", void 0),
        r([e([cc.SpriteFrame])], b.prototype, "itemBgSp", void 0),
        r([e([cc.SpriteFrame])], b.prototype, "itemBg", void 0),
        r([t], b));
function b() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.describe = null),
        (t.fixedLab = null),
        (t.adLabel = null),
        (t.getBtnLab = null),
        (t.moneyLab = null),
        (t.adBtn = null),
        (t.getBtn = null),
        (t.probabilityBtn = null),
        (t.xts = null),
        (t.Item = null),
        (t.bg = null),
        (t.itemBgSp = []),
        (t.itemBg = []),
        (t._index = 0),
        (t._treasure_chest = null),
        (t._content = null),
        (t.adGet = 0),
        (t.alreadyNum = 0),
        (t.oneModuleStorageData = null),
        (t.isInit = !1),
        (t.useMoney = 0),
        t
    );
}
o.default = t;
