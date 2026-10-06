var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var s = t("GameSetting"),
    t =
        ((n.prototype.parseJson = function (t, e) {
            var o = s.GameSetting.inst.goods_drop_rate,
                n = new Map();
            o &&
                0 < o.length &&
                o.forEach(function (t) {
                    n.set(t.id, t.rate);
                });
            for (var i = 0, r = e.goodsConf; i < r.length; i++) {
                var a = r[i];
                n.has(a.id) && (a.drop_rate = n.get(a.id)), this.goods.set(a.id, a);
            }
            console.log("[GoodsConf]-->[line:20]:", this.goods, n);
        }),
        (n.prototype.getGoodsById = function (t) {
            return this.goods.has(t) || console.error("找不到道具", t), this.goods.get(t);
        }),
        n);
function n() {
    this.goods = new Map();
}
o.default = t;
