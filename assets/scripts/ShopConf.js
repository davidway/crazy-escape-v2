var t = require;
var e = module;
var o = exports;
var s =
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
Object.defineProperty(o, "__esModule", {value: !0}),
    (o.contentType =
        o.commodityTableType =
        o.interlayerType =
        o.moduleTypeWidth =
        o.moduleBottom =
        o.moduleTop =
        o.commodityType =
            void 0);
var d,
    c = t("App"),
    h = t("ArrayUtil"),
    v = t("MathUtil"),
    n = t("EventTypes"),
    i = t("ShopController"),
    u = t("UserDataController"),
    f = t("EquipType"),
    b = t("Prop"),
    p = t("TrackType"),
    w = t("ConfData"),
    t =
        ((r.prototype.parseJson = function (t, e) {
            for (
                var o = this,
                    n = e.shop_module,
                    i = e.shop_module_type,
                    r = e.equip_commodity,
                    a = e.draw_commodity,
                    s = e.regular_commodity,
                    l = e.commodity,
                    e = e.treasure_chest,
                    c = 0,
                    u = n;
                c < u.length;
                c++
            ) {
                var p = u[c];
                this._use_shop_modules.push(p);
            }
            i.forEach(function (t) {
                o._shop_module_type.set(t.id, t),
                    t.renovate.have &&
                        (o._moduleRenovateStartDate.has(t.type) ||
                            (console.log("读取配置时间============>", t.renovate.startDate),
                            o.setStartDate(t.type, t.renovate.startDate)));
            }),
                r.forEach(function (t) {
                    o._equip_commodity.set(t.id, t);
                }),
                (this._equip_commodity_num = r.length),
                a.forEach(function (t) {
                    o._draw_commodity.set(t.id, t), o.draw_commodity_random.push(t);
                }),
                (this._draw_commodity_random = h.default.deepClone(this.draw_commodity_random)),
                s.forEach(function (t) {
                    o._regular_commodity.set(t.id, t);
                }),
                l.forEach(function (t) {
                    o._commodity.set(t.id, t);
                }),
                e.forEach(function (t) {
                    o._treasure_chest.set(t.id, t);
                }),
                console.log(
                    "[ShopConf]-->[line:17]:",
                    this._use_shop_modules,
                    this._shop_module_type,
                    this._equip_commodity,
                    this._draw_commodity,
                    this._regular_commodity,
                    this._commodity,
                    this._treasure_chest,
                    this.draw_commodity_random
                );
        }),
        (r.prototype.getIsNewCommodity = function (t, e) {
            var o = null;
            return {
                isNew:
                    null == this.sixModuleStorageData[e].commodityData[t] ||
                    ((o = this.sixModuleStorageData[e].commodityData[t].type), !1),
                type: o
            };
        }),
        (r.prototype.getCommodityStorageData = function (t) {
            return (
                (null != this.sixModuleStorageData[t] && null != this.sixModuleStorageData[t]) ||
                    (this.sixModuleStorageData[t] = {id: 0, commodityData: [], startDate: "", renovateNum: 0}),
                this.sixModuleStorageData[t]
            );
        }),
        (r.prototype.setShopStorageData = function (t) {
            console.log(t),
                (this._ShopStorageData = t),
                (this.sixModuleStorageData = this._ShopStorageData.sixModuleStorageData),
                (this.towModuleStorageData = this._ShopStorageData.towModuleStorageData),
                (this.oneModuleStorageData = this._ShopStorageData.oneModuleStorageData);
        }),
        (r.prototype.setSixModuleStorageData = function (t, e) {
            (this.sixModuleStorageData[t] = e),
                (this._ShopStorageData.sixModuleStorageData = this.sixModuleStorageData),
                this.setShopStorageData(this._ShopStorageData);
        }),
        (r.prototype.getTowModuleStorageData = function (t, e, o) {
            return (
                (null != this.towModuleStorageData[t] && null != this.towModuleStorageData[t]) ||
                    (this.towModuleStorageData[t] = {id: t, commodityData: [], startDate: ""}),
                (null != this.towModuleStorageData[t].commodityData[e] &&
                    null != this.towModuleStorageData[t].commodityData[e]) ||
                    ((this.towModuleStorageData[t].commodityData[e] = {
                        id: o.id,
                        adOpen: 0,
                        getOpen: 0,
                        canAdOpen: 0,
                        isLock: 0,
                        LockStartTime: 0
                    }),
                    (o = this.getTreasureChest(this.towModuleStorageData[t].commodityData[e].id)),
                    (this.towModuleStorageData[t].commodityData[e].canAdOpen = o.ad_open.quantity)),
                (null != this.towModuleStorageData[t].commodityData[e].isLock &&
                    null != this.towModuleStorageData[t].commodityData[e].isLock) ||
                    (console.error("没有"),
                    (this.towModuleStorageData[t].commodityData[e].isLock = 0),
                    (this.towModuleStorageData[t].commodityData[e].LockStartTime = 0)),
                console.log(this.towModuleStorageData[t]),
                this.towModuleStorageData[t]
            );
        }),
        (r.prototype.setTowModuleStorageData = function (t, e) {
            (this.towModuleStorageData[t] = e),
                (this._ShopStorageData.towModuleStorageData = this.towModuleStorageData),
                this.setShopStorageData(this._ShopStorageData);
        }),
        (r.prototype.getOneModuleStorageData = function (t) {
            if (null == this.oneModuleStorageData[t] || null == this.oneModuleStorageData[t]) {
                this.oneModuleStorageData[t] = {
                    id: 0,
                    commodityData: [{id: 3, adOpen: 0, getOpen: 0, canAdOpen: 0, isLock: 0, LockStartTime: 0}],
                    startDate: ""
                };
                for (var e = 0; e < this.oneModuleStorageData[t].commodityData.length; e++) {
                    var o = this.getTreasureChest(this.oneModuleStorageData[t].commodityData[e].id);
                    this.oneModuleStorageData[t].commodityData[e].canAdOpen = o.ad_open.quantity;
                }
            }
            return this.oneModuleStorageData[t];
        }),
        (r.prototype.setOneModuleStorageData = function (t, e) {
            (this.oneModuleStorageData[t] = e),
                (this._ShopStorageData.towModuleStorageData = this.towModuleStorageData),
                this.setShopStorageData(this._ShopStorageData);
        }),
        (r.prototype.removeNowCommodity = function (t, e) {
            (this.now_commodity = []),
                (this.draw_commodity_random = h.default.deepClone(this._draw_commodity_random)),
                null == this.sixModuleStorageData[e] &&
                    (this.sixModuleStorageData[e] = {id: 0, commodityData: [], startDate: "", renovateNum: 0});
            for (
                var o = (this.sixModuleStorageData[e].id = 0);
                o < this.sixModuleStorageData[e].commodityData.length;
                o++
            )
                this.sixModuleStorageData[e].commodityData[o].isRenovate
                    ? (this.sixModuleStorageData[e].commodityData[o] = null)
                    : t || (this.sixModuleStorageData[e].commodityData[o].buy = 0);
        }),
        (r.prototype.setStorageData = function () {
            console.log("存储数据"),
                console.log(this._ShopStorageData),
                i.default.inst.setShopStorageData(this._ShopStorageData);
        }),
        (r.prototype.getUseModules = function () {
            return this._use_shop_modules;
        }),
        (r.prototype.getModuleData = function (t) {
            return this._shop_module_type.get(t);
        }),
        (r.prototype.getStartDate = function (t) {
            var e = "";
            if (
                (this._moduleRenovateStartDate.has(t) && (e = this._moduleRenovateStartDate.get(t)),
                console.warn("====================>", e, t),
                "" == e)
            )
                throw console.log("模块开始时间不能为空！！！");
            return e;
        }),
        (r.prototype.setStartDate = function (t, e) {
            console.warn(this._moduleRenovateStartDate, e), this._moduleRenovateStartDate.set(t, e);
        }),
        (r.prototype.setResettingDate = function (t, e) {
            this.setStartDate(t, e), this.setRenovateNum(t, 0);
        }),
        (r.prototype.getRenovateNum = function (t) {
            return this._renovateNum.get(t);
        }),
        (r.prototype.setRenovateNum = function (t, e) {
            this._renovateNum.set(t, e);
        }),
        (r.prototype.setCommodityStorageData = function (t, e, o, n) {
            return (
                0 == t.id ? (t.id = n) : t.id != n && console.error("模块不对应！！"),
                e.isRenovate &&
                    this._moduleRenovateStartDate.has(t.id) &&
                    (t.startDate = this._moduleRenovateStartDate.get(t.id)),
                this._renovateNum.has(t.id) && (t.renovateNum = this.getRenovateNum(t.id)),
                (t.commodityData[o] = e),
                t
            );
        }),
        (r.prototype.buyCommodity = function (o, n, i, r, a) {
            return s(this, void 0, void 0, function () {
                var t,
                    e = this;
                return l(this, function () {
                    switch (
                        ((t = function () {
                            var t;
                            e.sixModuleStorageData[n].commodityData[o].buy++,
                                e.setSixModuleStorageData(n, e.sixModuleStorageData[n]),
                                e.setStorageData(),
                                w.default.inst.PrizeConf.addReward(r),
                                null === (t = c.app.track) || void 0 === t || t.trackEvent(p.TrackType.Suc_Buy_Daily);
                        }),
                        a)
                    ) {
                        case 0:
                            t();
                            break;
                        case 1:
                            u.default.inst.useGold(i) && t();
                            break;
                        case 2:
                            u.default.inst.useGem(i) && t();
                            break;
                        case 3:
                            t();
                    }
                    return [2];
                });
            });
        }),
        (r.prototype.getRegularCommodity = function (t, e) {
            var o = {type: null, data: {}, discount: 0, buy: 0, id: 0, isRenovate: !1, canbuy: 0},
                n = this.getCommodityStorageData(e);
            if (null == n.commodityData[t] || null == n.commodityData[t]) {
                var i = null,
                    r = this.getRegularCommodityTable(e),
                    a = v.default.randomRangeInt(r.discount.min, r.discount.max + 1) / 10;
                switch (r.commodity_id) {
                    case d.diamond:
                        i = b.Prop.Gem;
                        break;
                    case d.species:
                        i = b.Prop.gold;
                }
                (o = {type: i, data: {num: r.quantity}, discount: a, buy: 0, id: r.id, isRenovate: !1, canbuy: r.buy}),
                    (n = this.setCommodityStorageData(n, o, t, e)),
                    (this.now_commodity[t] = o),
                    this.setSixModuleStorageData(e, n),
                    5 == t && this.setStorageData();
            } else (o = n.commodityData[t]), (this.now_commodity[t] = o);
            return console.log(this.now_commodity, t), {commodityData: o};
        }),
        (r.prototype.getRandomDrawCommodity = function (t, e) {
            var o = {type: null, data: {}, discount: 0, buy: 0, id: 0, isRenovate: !0, canbuy: 0},
                n = this.getCommodityStorageData(e);
            if (null != n.commodityData[t] && null != n.commodityData[t])
                return (o = n.commodityData[t]), {commodityData: (this.now_commodity[t] = o)};
            h.default.shuffle(this.draw_commodity_random);
            var i = this.draw_commodity_random.shift();
            switch (i.commodity_id) {
                case 3:
                    o = {
                        type: b.Prop.randomDrawing,
                        data: {num: i.quantity},
                        discount: 0,
                        buy: 0,
                        id: i.id,
                        isRenovate: !0,
                        canbuy: 0
                    };
                    break;
                case 4:
                    var r = {id: w.default.inst.drawingConf.getRandomDrawing().id, quantity: i.quantity},
                        o = {
                            type: b.Prop.drawing,
                            data: {draw: r},
                            discount: 0,
                            buy: 0,
                            id: i.id,
                            isRenovate: !0,
                            canbuy: 0
                        };
            }
            var a = this.getDrawCommodityTable(i.id),
                s = v.default.randomRangeInt(a.discount.min, a.discount.max + 1) / 10;
            return (
                (o.discount = s),
                (o.canbuy = a.buy),
                (this.now_commodity[t] = o),
                (n = this.setCommodityStorageData(n, o, t, e)),
                this.setSixModuleStorageData(e, n),
                5 == t && this.setStorageData(),
                {commodityData: o}
            );
        }),
        (r.prototype.getRandomEquipCommodity = function (t, e) {
            var o = {type: null, data: {}, discount: 0, buy: 0, id: 0, isRenovate: !0, canbuy: 0},
                n = this.getCommodityStorageData(e);
            if (null != n.commodityData[t] && null != n.commodityData[t])
                return (o = n.commodityData[t]), {commodityData: (this.now_commodity[t] = o)};
            console.log("新商品");
            var i = v.default.randomRangeInt(1, this._equip_commodity_num),
                r = this.getEquipCommodityTable(i),
                a = null,
                s = 1,
                l = this.getEquipCommodityTable(i),
                c = function () {
                    (a = w.default.inst.equipConf.getRandomEquip()), -1 == l.money[a.type] && c();
                };
            switch ((c(), r.commodity_id)) {
                case d.GRAYRandom:
                    s = f.EquipQualityType.GRAY;
                    break;
                case d.GREENRandom:
                    s = f.EquipQualityType.GREEN;
                    break;
                case d.BLUERandom:
                    s = f.EquipQualityType.BLUE;
                    break;
                case d.PURPLERandom:
                    s = f.EquipQualityType.PURPLE;
                    break;
                case d.REDRandom:
                    s = f.EquipQualityType.RED;
            }
            for (
                var o = {
                        type: b.Prop.equip,
                        data: {equip: {id: a.equip_id, quality: s, level: 1, status: 0, equipType: a.type}},
                        discount: 0,
                        buy: 0,
                        id: i,
                        isRenovate: !0,
                        canbuy: 0
                    },
                    u = !1,
                    p = 1;
                p < this.now_commodity.length;
                p++
            )
                if (this.now_commodity[p].type == b.Prop.equip) {
                    var h = this.now_commodity[p].data.equip;
                    if (
                        h.id == o.data.equip.id &&
                        h.quality == o.data.equip.quality &&
                        h.equipType == o.data.equip.quality
                    ) {
                        u = !0;
                        break;
                    }
                }
            if (!u) {
                i = v.default.randomRangeInt(l.discount.min, l.discount.max + 1) / 10;
                return (
                    (o.canbuy = o.buy),
                    (o.discount = i),
                    (this.now_commodity[t] = o),
                    (n = this.setCommodityStorageData(n, o, t, e)),
                    this.setSixModuleStorageData(e, n),
                    5 == t && this.setStorageData(),
                    {commodityData: o}
                );
            }
            this.getRandomEquipCommodity(t, e);
        }),
        (r.prototype.setRenovateOneModuleTreasureChest = function (t, e) {
            if (null == this.oneModuleStorageData[t] || null == this.oneModuleStorageData[t]) {
                this.oneModuleStorageData[t] = {
                    id: 0,
                    startDate: "",
                    commodityData: [{id: 3, adOpen: 0, getOpen: 0, canAdOpen: 0, isLock: 0, LockStartTime: 0}]
                };
                for (var o = 0; o < this.oneModuleStorageData[t].commodityData.length; o++) {
                    var n = this.getTreasureChest(this.oneModuleStorageData[t].commodityData[o].id);
                    this.oneModuleStorageData[t].commodityData[o].canAdOpen = n.ad_open.quantity;
                }
            }
            (this.oneModuleStorageData[t].id = t),
                (this.oneModuleStorageData[t].startDate = e),
                (this.oneModuleStorageData[t].commodityData[0].adOpen = 0),
                (this.oneModuleStorageData[t].commodityData[0].isLock = 0),
                this.setOneModuleStorageData(t, this.oneModuleStorageData[t]);
        }),
        (r.prototype.setRenovateTowModuleTreasureChest = function (t, e) {
            if (null == this.towModuleStorageData[t] || null == this.towModuleStorageData[t]) {
                this.towModuleStorageData[t] = {
                    id: 0,
                    startDate: "",
                    commodityData: [
                        {id: 1, adOpen: 0, getOpen: 0, canAdOpen: 0, isLock: 0, LockStartTime: 0},
                        {id: 2, adOpen: 0, getOpen: 0, canAdOpen: 0, isLock: 0, LockStartTime: 0}
                    ]
                };
                for (var o = 0; o < this.towModuleStorageData[t].commodityData.length; o++) {
                    var n = this.getTreasureChest(this.towModuleStorageData[t].commodityData[o].id);
                    this.towModuleStorageData[t].commodityData[o].canAdOpen = n.ad_open.quantity;
                }
            }
            (this.towModuleStorageData[t].id = t),
                (this.towModuleStorageData[t].startDate = e),
                (this.towModuleStorageData[t].commodityData[0].adOpen = 0),
                (this.towModuleStorageData[t].commodityData[0].isLock = 0),
                (this.towModuleStorageData[t].commodityData[1].adOpen = 0),
                (this.towModuleStorageData[t].commodityData[1].isLock = 0),
                this.setTowModuleStorageData(t, this.towModuleStorageData[t]);
        }),
        (r.prototype.setTreasureChestAdLock = function (t, e, o, n) {
            (this.towModuleStorageData[t].commodityData[e].LockStartTime = n),
                (this.towModuleStorageData[t].commodityData[e].isLock = o),
                this.setTowModuleStorageData(t, this.towModuleStorageData[t]);
        }),
        (r.prototype.openTreasureChest = function (t, e, o, n, i, r, a, s, l, c, u) {
            for (var p = [], h = 0; h < o; h++) {
                for (
                    var d,
                        f = v.default.randomRangeInt(1, 101),
                        y = w.default.inst.equipConf.getRandomEquip(),
                        y = {equip: {id: y.equip_id, quality: 0, level: 1, status: 0, equipType: y.type}},
                        g = 0,
                        m = 0,
                        _ = 0;
                    _ < e.length;
                    _++
                )
                    if (((m += d = Math.floor(100 * e[_].probability)), 0 == _)) {
                        if (f <= d) {
                            g = e[_].quality;
                            break;
                        }
                    } else {
                        if (_ < e.length - 1 && d < f && f <= m) {
                            g = e[_].quality;
                            break;
                        }
                        _ == e.length - 1 && (g = e[_].quality);
                    }
                n++,
                    -1 != i && (g = n == i ? r : g) == r && (n = 0),
                    (y.equip.quality = g),
                    p.push({type: b.Prop.equip, profit: y});
            }
            switch ((w.default.inst.PrizeConf.addReward(p, !0, t), a)) {
                case 2:
                    c && (this.towModuleStorageData[s].commodityData[l].adOpen = u),
                        (this.towModuleStorageData[s].commodityData[l].getOpen = n),
                        this.setTowModuleStorageData(s, this.towModuleStorageData[s]);
                    break;
                case 3:
                    (this.oneModuleStorageData[s].commodityData[l].getOpen = n),
                        this.setOneModuleStorageData(s, this.oneModuleStorageData[s]);
            }
            return n;
        }),
        (r.prototype.downTime = function (t, e) {
            var o = this;
            null == this.Timeout &&
                (this.Timeout = setInterval(function () {
                    new Date().getTime() - t >= e &&
                        (clearInterval(o.Timeout),
                        (o.Timeout = null),
                        c.app.event.emit(n.EventType.Home_Shop_Change_Page));
                }, 1e3));
        }),
        (r.prototype.getEquipCommodityTable = function (t) {
            return this._equip_commodity.get(t);
        }),
        (r.prototype.getDrawCommodityTable = function (t) {
            return this._draw_commodity.get(t);
        }),
        (r.prototype.getRegularCommodityTable = function (t) {
            return this._regular_commodity.get(t);
        }),
        (r.prototype.getCommodity = function (t) {
            return this._commodity.get(t);
        }),
        (r.prototype.getTreasureChest = function (t) {
            return this._treasure_chest.get(t);
        }),
        r);
function r() {
    (this._use_shop_modules = []),
        (this._shop_module_type = new Map()),
        (this._equip_commodity = new Map()),
        (this._equip_commodity_num = 0),
        (this._draw_commodity = new Map()),
        (this._regular_commodity = new Map()),
        (this._commodity = new Map()),
        (this._treasure_chest = new Map()),
        (this._draw_commodity_random = []),
        (this.draw_commodity_random = []),
        (this.now_commodity = []),
        (this.sixModuleStorageData = null),
        (this.towModuleStorageData = null),
        (this.oneModuleStorageData = null),
        (this._ShopStorageData = null),
        (this._moduleRenovateStartDate = new Map()),
        (this._renovateNum = new Map()),
        (this.Timeout = null);
}
(o.default = t),
    ((t = d = o.commodityType || (o.commodityType = {}))[(t.diamond = 1)] = "diamond"),
    (t[(t.species = 2)] = "species"),
    (t[(t.drawingRandom = 3)] = "drawingRandom"),
    (t[(t.drawingOne = 4)] = "drawingOne"),
    (t[(t.GRAYRandom = 5)] = "GRAYRandom"),
    (t[(t.GREENRandom = 6)] = "GREENRandom"),
    (t[(t.BLUERandom = 7)] = "BLUERandom"),
    (t[(t.PURPLERandom = 8)] = "PURPLERandom"),
    (t[(t.dressRandom = 9)] = "dressRandom"),
    (t[(t.buy_diamond = 10)] = "buy_diamond"),
    (t[(t.diamond_species = 11)] = "diamond_species"),
    (t[(t.REDRandom = 12)] = "REDRandom"),
    (o.moduleTop = {NONE: 0, HAVE_TETLE: 120, HAVE_TITLE_DTIME: 150}),
    (o.moduleBottom = {NONE: 50, HAVE: 0}),
    (o.moduleTypeWidth = {1: 728, 2: 720, 3: 713}),
    ((t = o.interlayerType || (o.interlayerType = {}))[(t.min = 0)] = "min"),
    (t[(t.big = 1)] = "big"),
    ((t = o.commodityTableType || (o.commodityTableType = {}))[(t.regularCommodity = 0)] = "regularCommodity"),
    (t[(t.randomCommodity = 1)] = "randomCommodity"),
    (t[(t.treasureChest = 2)] = "treasureChest"),
    ((o = o.contentType || (o.contentType = {}))[(o.sixContent = 1)] = "sixContent"),
    (o[(o.twoContent = 2)] = "twoContent"),
    (o[(o.oneContent = 3)] = "oneContent");
