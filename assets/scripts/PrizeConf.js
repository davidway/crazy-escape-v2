var t = require;
var e = module;
var o = exports;
var a =
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
var l = t("App"),
    p = t("LayerMgr"),
    h = t("UIEnum"),
    d = t("DrawingController"),
    f = t("EquipController"),
    y = t("UserDataController"),
    g = t("Prop"),
    m = t("ConfData"),
    t =
        ((n.prototype.parseJson = function (t, e) {
            var o = this;
            e.prize.forEach(function (t) {
                o._prizes.set(t.id, t);
            }),
                console.log("[PrizeConf]-->[line:17]:", this._prizes);
        }),
        (n.prototype.getRewardData = function (t) {
            for (var e = [], o = [], n = 0; n < t.length; n++) {
                var i = this.getPrize(t[n].id),
                    r = 0;
                if (!i) return void console.error(t[n], t[n].id);
                switch (i.type) {
                    case g.Prop.equip:
                        var a = m.default.inst.equipConf.getEquipVo(t[n].appoint),
                            a = {id: t[n].appoint, quality: i.quality, level: 1, status: 0, equipType: a.type};
                        o[n] = {equip: a};
                        break;
                    case g.Prop.drawing:
                        a = {id: t[n].appoint, quantity: t[n].count};
                        o[n] = {draw: a};
                        break;
                    case g.Prop.randomEquip:
                    case g.Prop.randomGreenEquip:
                    case g.Prop.randomBlueEquip:
                    case g.Prop.randomPurpleEquip:
                    case g.Prop.randomRedeEquip:
                        (r = t[n].count), (o[n] = {num: r, EquipType: 0});
                        break;
                    default:
                        (r = t[n].count), (o[n] = {num: r});
                }
                e.push({type: i.type, profit: o[n]});
            }
            return e;
        }),
        (n.prototype.getPrize = function (t) {
            return this._prizes.get(t);
        }),
        (n.prototype.addReward = function (o, n, i, r) {
            return (
                void 0 === r && (r = 2),
                a(this, void 0, void 0, function () {
                    var c,
                        e,
                        u = this;
                    return s(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (
                                    (c = []),
                                    o.forEach(function (t) {
                                        switch (t.type) {
                                            case g.Prop.equip:
                                                f.EquipController.inst.addEquip(
                                                    t.profit.equip.id,
                                                    t.profit.equip.quality,
                                                    t.profit.equip.level
                                                ),
                                                    c.push(t);
                                                break;
                                            case g.Prop.drawing:
                                                d.DrawingController.inst.addDrawing(
                                                    t.profit.draw.id,
                                                    t.profit.draw.quantity
                                                ),
                                                    c.push(t);
                                                break;
                                            case g.Prop.gold:
                                                y.default.inst.addGold(t.profit.num, !0), c.push(t);
                                                break;
                                            case g.Prop.Exp:
                                                y.default.inst.addExp(t.profit.num, !0), c.push(t);
                                                break;
                                            case g.Prop.randomEquip:
                                                for (var e = 0; e < t.profit.num; e++) {
                                                    var o = t.profit.EquipType,
                                                        n = u.addRandomEquip(o, 1);
                                                    c.push({type: g.Prop.equip, profit: n}),
                                                        f.EquipController.inst.addEquip(
                                                            n.equip.id,
                                                            n.equip.quality,
                                                            n.equip.level
                                                        );
                                                }
                                                break;
                                            case g.Prop.randomDrawing:
                                                var i;
                                                0 < t.profit.num &&
                                                    ((i = m.default.inst.drawingConf.getRandomDraw(
                                                        t.profit.num
                                                    )).getLists.forEach(function (t) {
                                                        d.DrawingController.inst.addDrawing(t.id, t.quantity);
                                                    }),
                                                    i.showDatas.forEach(function (t) {
                                                        c.push(t);
                                                    }));
                                                break;
                                            case g.Prop.Gem:
                                                y.default.inst.addGem(t.profit.num, !0), c.push(t);
                                                break;
                                            case g.Prop.gene:
                                                y.default.inst.addGene(t.profit.num), c.push(t);
                                                break;
                                            case g.Prop.energy:
                                                y.default.inst.addEnergy(t.profit.num, !0), c.push(t);
                                                break;
                                            case g.Prop.randomGreenEquip:
                                                for (e = 0; e < t.profit.num; e++) {
                                                    var r = t.profit.EquipType,
                                                        n = u.addRandomEquip(r, 2);
                                                    c.push({type: g.Prop.equip, profit: n}),
                                                        f.EquipController.inst.addEquip(
                                                            n.equip.id,
                                                            n.equip.quality,
                                                            n.equip.level
                                                        );
                                                }
                                                break;
                                            case g.Prop.randomBlueEquip:
                                                for (e = 0; e < t.profit.num; e++) {
                                                    var a = t.profit.EquipType;
                                                    (n = u.addRandomEquip(a, 3)),
                                                        c.push({type: g.Prop.equip, profit: n}),
                                                        f.EquipController.inst.addEquip(
                                                            n.equip.id,
                                                            n.equip.quality,
                                                            n.equip.level
                                                        );
                                                }
                                                break;
                                            case g.Prop.randomPurpleEquip:
                                                for (e = 0; e < t.profit.num; e++) {
                                                    var s = t.profit.EquipType;
                                                    (n = u.addRandomEquip(s, 4)),
                                                        c.push({type: g.Prop.equip, profit: n}),
                                                        f.EquipController.inst.addEquip(
                                                            n.equip.id,
                                                            n.equip.quality,
                                                            n.equip.level
                                                        );
                                                }
                                                break;
                                            case g.Prop.randomRedeEquip:
                                                for (e = 0; e < t.profit.num; e++) {
                                                    var l = t.profit.EquipType;
                                                    (n = u.addRandomEquip(l, 5)),
                                                        c.push({type: g.Prop.equip, profit: n}),
                                                        f.EquipController.inst.addEquip(
                                                            n.equip.id,
                                                            n.equip.quality,
                                                            n.equip.level
                                                        );
                                                }
                                        }
                                    }),
                                    (e = {type: 1, profitList: c, iconType: r, treasureChestAn: n, id: i}),
                                    [4, l.app.gui.openUI(h.UIEnum.ReturnMaterialView, p.LayerEnum.VIEW_LAYER, e)]
                                );
                            case 1:
                                return t.sent(), [2];
                        }
                    });
                })
            );
        }),
        (n.prototype.addRandomEquip = function (t, e) {
            return {
                equip: {
                    id: (t =
                        0 == t
                            ? m.default.inst.equipConf.getRandomEquip()
                            : m.default.inst.equipConf.getClassifyRandomEquips(t)).equip_id,
                    quality: e,
                    level: 1,
                    status: 0,
                    equipType: t.type
                }
            };
        }),
        n);
function n() {
    (this.btnDrawBlockPre = null), (this._prizes = new Map());
}
o.default = t;
