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
        });
Object.defineProperty(o, "__esModule", {value: !0});
var r,
    l = t("App"),
    c = t("LayerMgr"),
    e = t("Singleton"),
    u = t("MathUtil"),
    p = t("EventTypes"),
    h = t("UIEnum"),
    d = t("ConfData"),
    f = t("EquipType"),
    y = t("Prop"),
    g = t("DrawingController"),
    m = t("EquipController"),
    _ = t("UserDataController"),
    i =
        ((r = e.Singleton()),
        i(a, r),
        (a.prototype.initData = function () {
            this._hellData = l.app.local.getValue("hellData");
        }),
        (a.prototype.getRewardStatus = function (t) {
            return this._hellData[t] || 1;
        }),
        (a.prototype.getReward = function (t, e, o) {
            if ((void 0 === o && (o = !0), 1 == this.getRewardStatus(t))) {
                var n,
                    i = [];
                if (
                    (0 < e.coin && (_.default.inst.addGold(e.coin), i.push({type: y.Prop.gold, profit: {num: e.coin}})),
                    0 < e.gem && (_.default.inst.addGem(e.gem), i.push({type: y.Prop.Gem, profit: {num: e.gem}})),
                    0 < e.drawings &&
                        ((n = g.DrawingController.inst.getRandomDraw(e.drawings)).getLists.forEach(function (t) {
                            g.DrawingController.inst.addDrawing(t.id, t.quantity);
                        }),
                        n.showDatas.forEach(function (t) {
                            i.push(t);
                        })),
                    e.equips && 0 < e.equips.num)
                )
                    for (var r = 0; r < e.equips.num; r++) {
                        var a = d.default.inst.equipConf.getRandomEquip(),
                            s = cc.misc.clampf(
                                e.equips.min >= e.equips.max
                                    ? e.equips.min
                                    : u.default.randomRangeInt(e.equips.min, e.equips.max + 1),
                                f.EquipQualityType.GRAY,
                                f.EquipQualityType.RED
                            );
                        m.EquipController.inst.addEquip(a.equip_id, s, 1);
                        a = {id: a.equip_id, quality: s, level: 1, status: 0, equipType: a.type};
                        i.push({type: y.Prop.equip, profit: {equip: a}});
                    }
                0 < i.length &&
                    l.app.gui.openUI(h.UIEnum.ReturnMaterialView, c.LayerEnum.VIEW_LAYER, {
                        type: 1,
                        profitList: i,
                        iconType: 2
                    }),
                    (this._hellData[t] = 2),
                    l.app.local.setValue("hellData", this._hellData),
                    o && l.app.event.emit(p.EventType.On_Get_Hell_Box_Reward);
            }
        }),
        a);
function a() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t._hellData = null), t;
}
o.default = i;
