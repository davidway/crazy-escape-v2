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
        };
Object.defineProperty(o, "__esModule", {value: !0});
var a,
    s = t("App"),
    l = t("MathUtil"),
    c = t("EventTypes"),
    u = t("GetGemController"),
    p = t("MultipleController"),
    h = t("UserDataController"),
    d = t("ConfData"),
    f = t("ShopConf"),
    y = t("GameSetting"),
    g = t("Prop"),
    m = t("EffectMgr"),
    _ = t("GameMgr"),
    v = t("btnDrawBlock"),
    b = t("CloseUI"),
    w = t("Font"),
    C = ["武器", "盔甲", "项链", "腰带", "手套", "战靴"],
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(k, a),
        (k.prototype.initView = function () {}),
        (k.prototype.updateView = function () {}),
        (k.prototype.start = function () {
            null != this._content && (this.init(), (this.isInit = !0)),
                cc.director.on(c.EventType.Shop_Commodity, this.init, this),
                this.getBtn.on("click", this.getCommodity, this),
                this.node.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        b.default.inst.closeNode();
                    },
                    this
                ),
                p.default.inst.Breathing(this.xts, 1.1, 1, 0.9);
        }),
        (k.prototype.setData = function (t, e, o, n) {
            (this.isVoluntarily = n),
                (this._BigIndex = o),
                (this._content = t),
                (this._index = e),
                ((this.isInit && this.isRenovate) || this.isVoluntarily) && this.init();
        }),
        (k.prototype.init = function () {
            var t = 0,
                e = null;
            (this.xts.active = !1), (this.discount.active = !0);
            var o = 0;
            (this.isGet.active = !1), (this.getBtn.active = !0);
            var n = null;
            switch (this._content.type) {
                case f.commodityTableType.regularCommodity:
                    (this.discount.active = !1),
                        (this.isRenovate = !1),
                        (t = 0),
                        (e = this.addRegularCommodity().commodity),
                        (n = cc.color(153, 84, 20, 255));
                    break;
                case f.commodityTableType.randomCommodity:
                    this.isRenovate = !0;
                    var i,
                        r,
                        t = 1,
                        a = d.default.inst.shopConf.getIsNewCommodity(this._index, this._BigIndex);
                    a.isNew
                        ? (o =
                              0 == d.default.inst.shopConf.draw_commodity_random.length ||
                              l.default.randomRangeInt(0, 100) < 25
                                  ? ((e = (i = this.addEquip()).commodity), i.discount)
                                  : ((e = (r = this.addDraw()).commodity), r.discount))
                        : a.type == g.Prop.equip
                        ? ((e = (i = this.addEquip()).commodity), (o = i.discount))
                        : (a.type != g.Prop.drawing && a.type != g.Prop.randomDrawing) ||
                          ((e = (r = this.addDraw()).commodity), (o = r.discount)),
                        (n = cc.color(86, 129, 28, 255));
            }
            (this.priceLab.node.color = n),
                (this.money_type = e.money_type),
                e.money_type < 3 ? (this.icon.spriteFrame = this.icons[e.money_type]) : (this.icon.spriteFrame = null),
                1 == o ? (this.discount.active = !1) : (this.discountLab.string = 10 * o + "折"),
                (this.discountLab.node.active = this.discount.active),
                (this.Item.spriteFrame = this.itemBgSp[t]),
                (this.getBtnBg.spriteFrame = this.getBtnBgSp[t]);
        }),
        (k.prototype.addRegularCommodity = function () {
            var t = d.default.inst.shopConf.getRegularCommodity(this._index, this._BigIndex);
            this.commodityData = d.default.inst.shopConf.getRegularCommodityTable(t.commodityData.id);
            var e = d.default.inst.shopConf.getCommodity(this.commodityData.commodity_id);
            (this.canBuy = y.GameSetting.inst.dailyGemCount), (this.xts.active = !0);
            var o = null;
            (this.alreadyBuy = h.default.inst.gemCount),
                (this.priceLab.string = this.canBuy - this.alreadyBuy + "/" + this.canBuy);
            var n = "";
            switch (this.commodityData.commodity_id) {
                case f.commodityType.diamond:
                    (o = g.Prop.Gem), (n = "免费钻石");
                    break;
                case f.commodityType.species:
                    (o = g.Prop.gold), (n = "免费金币");
            }
            t = {type: o, profit: {num: this.commodityData.quantity}};
            return (
                (this.commodityName.string = n),
                this.alreadyBuy == this.canBuy &&
                    ((this.isGet.active = !0), (this.getBtn.active = !1), (this.xts.active = !1)),
                (this.money = this.commodityData.money),
                console.log(u.default.inst.gem_time),
                0 != u.default.inst.gem_time && (this.lockBtn(!0), this.downTime(), this.schedule(this.downTime, 1)),
                this.addCommodity(t),
                {commodity: e}
            );
        }),
        (k.prototype.lockBtn = function (t) {
            t
                ? ((this.xts.active = !1), (this.getBtn.getComponent(cc.Button).interactable = !1))
                : ((this.xts.active = !0), (this.getBtn.getComponent(cc.Button).interactable = !0));
        }),
        (k.prototype.downTime = function () {
            var t = new Date().getTime() - 1e3,
                e = 1e3 * y.GameSetting.inst.wealth_cd,
                o = u.default.inst.gem_time;
            console.log(t - o, e),
                e <= t - o
                    ? (this.unschedule(this.downTime),
                      this.lockBtn(!1),
                      u.default.inst.set_Gem_time(0),
                      (this.priceLab.string = this.canBuy - this.alreadyBuy + "/" + this.canBuy))
                    : ((t = Math.floor((e - (t - o)) / 1e3)),
                      (o = Math.floor(t / 60)),
                      (this.priceLab.string = (o < 10 ? "0" + o : o) + ":" + ((t = t % 60) < 10 ? "0" + t : t)));
        }),
        (k.prototype.addEquip = function () {
            var t = d.default.inst.shopConf.getRandomEquipCommodity(this._index, this._BigIndex);
            this.EquipCommodityData = d.default.inst.shopConf.getEquipCommodityTable(t.commodityData.id);
            var e = d.default.inst.shopConf.getCommodity(this.EquipCommodityData.commodity_id),
                o = t.commodityData.discount;
            (this.canBuy = this.EquipCommodityData.buy), (this.alreadyBuy = t.commodityData.buy);
            var n = Math.ceil(this.EquipCommodityData.money[t.commodityData.data.equip.equipType] * o);
            this.priceLab.string = w.default.getFon().change(n);
            var i = {type: t.commodityData.type, profit: {equip: t.commodityData.data.equip}},
                r = d.default.inst.equipConf.getEquipQualityVo(
                    t.commodityData.data.equip.id,
                    t.commodityData.data.equip.quality
                );
            return (
                (this.commodityName.string = r.name),
                this.addCommodity(i),
                (this.money = n),
                t.commodityData.buy == this.EquipCommodityData.buy &&
                    ((this.isGet.active = !0), (this.getBtn.active = !1)),
                {commodity: e, discount: o}
            );
        }),
        (k.prototype.addDraw = function () {
            var t = d.default.inst.shopConf.getRandomDrawCommodity(this._index, this._BigIndex);
            (this.commodityData = d.default.inst.shopConf.getDrawCommodityTable(t.commodityData.id)),
                (this.canBuy = this.commodityData.buy);
            var e = d.default.inst.shopConf.getCommodity(this.commodityData.commodity_id),
                o = t.commodityData.discount;
            this.alreadyBuy = t.commodityData.buy;
            var n,
                i = Math.ceil(this.commodityData.money * o);
            switch (((this.priceLab.string = w.default.getFon().change(i)), t.commodityData.type)) {
                case g.Prop.drawing:
                    n = {type: t.commodityData.type, profit: {draw: t.commodityData.data.draw}};
                    break;
                case g.Prop.randomDrawing:
                    n = {type: t.commodityData.type, profit: {num: t.commodityData.data.num}};
            }
            return (
                t.commodityData.type == g.Prop.drawing
                    ? (this.commodityName.string = C[t.commodityData.data.draw.id - 1] + "图纸")
                    : t.commodityData.type == g.Prop.randomDrawing && (this.commodityName.string = "随机图纸"),
                t.commodityData.buy == this.commodityData.buy && ((this.isGet.active = !0), (this.getBtn.active = !1)),
                (this.money = i),
                this.addCommodity(n),
                {commodity: e, discount: o}
            );
        }),
        (k.prototype.addCommodity = function (t) {
            var e;
            null == this.commodity.children[0]
                ? ((e = cc.instantiate(this.btnDrawBlock)).getComponent(v.default).setData(t.profit, t.type, !1),
                  (e.parent = this.commodity))
                : this.commodity.children[0].getComponent(v.default).setData(t.profit, t.type, !1),
                (this.commodityProfit[0] = t);
        }),
        (k.prototype.getCommodity = function () {
            var t,
                e = this;
            0 < this.money
                ? (console.log("购买"),
                  d.default.inst.shopConf.buyCommodity(
                      this._index,
                      this._BigIndex,
                      this.money,
                      this.commodityProfit,
                      this.money_type
                  ),
                  (this.commodityProfit = []),
                  this.init())
                : (console.log("看视频"),
                  null === (t = s.app.track) || void 0 === t || t.trackEvent("new_dia_update"),
                  _.default.inst.getVideoShareReward(
                      function () {
                          null === (t = s.app.track) || void 0 === t || t.trackEvent("new_suc_dia_update"),
                              h.default.inst.addGemCount(),
                              d.default.inst.shopConf.buyCommodity(
                                  e._index,
                                  e._BigIndex,
                                  0,
                                  e.commodityProfit,
                                  e.money_type
                              );
                          var t = Date.now();
                          u.default.inst.set_Gem_time(t),
                              s.app.event.emit(c.EventType.Home_Shop_Change_Page),
                              (e.commodityProfit = []),
                              e.init();
                      },
                      null,
                      function () {
                          m.default.inst.showTips("获取视频失败，请稍候再试！");
                      }
                  ));
        }),
        r([e(cc.Node)], k.prototype, "commodity", void 0),
        r([e(cc.Node)], k.prototype, "xts", void 0),
        r([e(cc.Node)], k.prototype, "discount", void 0),
        r([e(cc.Label)], k.prototype, "discountLab", void 0),
        r([e(cc.Node)], k.prototype, "getBtn", void 0),
        r([e(cc.Node)], k.prototype, "isGet", void 0),
        r([e(cc.Label)], k.prototype, "commodityName", void 0),
        r([e(cc.Label)], k.prototype, "priceLab", void 0),
        r([e(cc.Sprite)], k.prototype, "icon", void 0),
        r([e(cc.Sprite)], k.prototype, "Item", void 0),
        r([e(cc.Sprite)], k.prototype, "getBtnBg", void 0),
        r([e(cc.Prefab)], k.prototype, "btnDrawBlock", void 0),
        r([e([cc.SpriteFrame])], k.prototype, "icons", void 0),
        r([e([cc.SpriteFrame])], k.prototype, "itemBgSp", void 0),
        r([e([cc.SpriteFrame])], k.prototype, "getBtnBgSp", void 0),
        r([t], k));
function k() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.commodity = null),
        (t.xts = null),
        (t.discount = null),
        (t.discountLab = null),
        (t.getBtn = null),
        (t.isGet = null),
        (t.commodityName = null),
        (t.priceLab = null),
        (t.icon = null),
        (t.Item = null),
        (t.getBtnBg = null),
        (t.btnDrawBlock = null),
        (t.icons = []),
        (t.itemBgSp = []),
        (t.getBtnBgSp = []),
        (t._content = null),
        (t.isInit = !1),
        (t.commodityData = null),
        (t.EquipCommodityData = null),
        (t.isRenovate = !1),
        (t.canBuy = 0),
        (t.alreadyBuy = 0),
        (t._index = 0),
        (t.isVoluntarily = !1),
        (t.money_type = 0),
        (t.commodityProfit = []),
        t
    );
}
o.default = t;
