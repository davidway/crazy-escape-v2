var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var a = t("App"),
    s = t("ArrayUtil"),
    t =
        ((n.prototype._createAd = function () {
            if (!s.default.isEmpty(this._adUnitIds)) {
                var t = wx.getSystemInfoSync(),
                    e = a.app.platform.getMenuButtonBoundingClientRect(),
                    o = [
                        {left: 6, top: e.bottom + 180},
                        {left: t.windowWidth - 6, top: e.bottom + 180}
                    ];
                console.warn("对联格子", o);
                for (var n = Math.min(this._adUnitIds.length, 2), i = 0; i < n; i++) {
                    var r = {
                        customAd: null,
                        adUnitId: this._adUnitIds[i],
                        isLoad: !1,
                        isError: !1,
                        errorCount: 0,
                        style: o[i]
                    };
                    this._customAd.push(r), this._create(r);
                }
            }
        }),
        (n.prototype._create = function (e) {
            var o = this;
            console.warn("对联格子 _create", e.adUnitId),
                (e.isError = !1),
                (e.isLoad = !1),
                (e.customAd = wx.createCustomAd({adUnitId: e.adUnitId, adIntervals: 30, style: e.style})),
                e.customAd.onLoad(function () {
                    console.warn("对联格子:成功", e.adUnitId), (e.isLoad = !0), o.isShow && e.customAd.show();
                }),
                e.customAd.onError(function (t) {
                    console.warn("对联格子:失败", e.adUnitId, t),
                        e.customAd && e.customAd.destroy(),
                        (e.customAd = null),
                        (e.errorCount += 1),
                        e.errorCount < 3 ? o._create(e) : (e.isError = !0);
                });
        }),
        (n.prototype.show = function () {
            var e = this;
            this.isShow ||
                (console.warn("对联格子:show"),
                (this.isShow = !0),
                this._customAd.forEach(function (t) {
                    t.isLoad ? t.customAd && t.customAd.show() : t.isError && ((t.errorCount = 0), e._create(t));
                }));
        }),
        (n.prototype.hide = function () {
            console.warn("对联格子:hide"),
                (this.isShow = !1),
                this._customAd.forEach(function (t) {
                    t.customAd && t.customAd.hide();
                });
        }),
        n);
function n(t) {
    (this._adUnitIds = null), (this._customAd = []), (this.isShow = !1), (this._adUnitIds = t), this._createAd();
}
o.default = t;
