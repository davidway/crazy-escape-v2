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
    s = t("ConfData"),
    i =
        ((r = e.Singleton()),
        i(l, r),
        (l.prototype.initData = function () {
            (this._ShopStorageData = this.getShopStorageData()),
                s.default.inst.shopConf.setShopStorageData(this._ShopStorageData),
                this._ShopStorageData.sixModuleStorageData.forEach(function (t) {
                    t &&
                        (console.log("读取缓存时间=================>", t.id, t.startDate),
                        s.default.inst.shopConf.setStartDate(t.id, t.startDate),
                        s.default.inst.shopConf.setRenovateNum(t.id, t.renovateNum));
                }),
                this._ShopStorageData.towModuleStorageData.forEach(function (t) {
                    t && s.default.inst.shopConf.setStartDate(t.id, t.startDate);
                }),
                this._ShopStorageData.oneModuleStorageData.forEach(function (t) {
                    t && s.default.inst.shopConf.setStartDate(t.id, t.startDate);
                });
        }),
        (l.prototype.getShopStorageData = function () {
            var t = a.app.local.getValue("ShopStorageData");
            return (
                null != t ||
                    this.setShopStorageData(
                        (t = {sixModuleStorageData: [], towModuleStorageData: [], oneModuleStorageData: []})
                    ),
                t
            );
        }),
        (l.prototype.setShopStorageData = function (t) {
            console.log("存储商店数据"), a.app.local.setValue("ShopStorageData", t);
        }),
        l);
function l() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t._ShopStorageData = null), t;
}
o.default = i;
