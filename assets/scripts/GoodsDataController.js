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
    a = t("App"),
    e = t("Singleton"),
    s = t("EventTypes"),
    l = t("ConfData"),
    c = t("DropType"),
    u = t("GameMgr"),
    p = t("DropController"),
    i =
        ((r = e.Singleton()),
        i(h, r),
        (h.prototype.initData = function () {
            (this._goods = a.app.local.getValue("goods")), console.log("道具数据", this._goods);
        }),
        (h.prototype.getGoods = function () {
            return this._goods;
        }),
        (h.prototype.addGoods = function (t, e) {
            var o = 0;
            null != this._goods[t + ""] && (o = this._goods[t + ""] || 0),
                (this._goods[t + ""] = o += e),
                a.app.local.setValue("goods", this._goods),
                a.app.event.emit(s.EventType.Battle_Activity_Change);
        }),
        (h.prototype.getGoodsNumByID = function (t) {
            return this._goods[t + ""] || 0;
        }),
        (h.prototype.useGoodsNumByID = function (t, e) {
            return (
                this._goods[t + ""] >= e &&
                ((this._goods[t + ""] -= e),
                a.app.local.setValue("goods", this._goods),
                a.app.event.emit(s.EventType.Battle_Activity_Change),
                !0)
            );
        }),
        (h.prototype.checkGoodsDrop = function (t, e) {
            var o = l.default.inst.goodsConf.getGoodsById(t);
            return !(
                !o ||
                (o.drop_map_type &&
                    0 != o.drop_map_type.length &&
                    !o.drop_map_type.includes(u.default.inst.chapterVo.type)) ||
                !(Math.random() <= o.drop_rate) ||
                (p.default.inst.addDrop({type: c.DropType.Goods, data: {pt: e, type: 0, value: 0, id: t}}), 0)
            );
        }),
        h);
function h() {
    return (null !== r && r.apply(this, arguments)) || this;
}
o.default = i;
