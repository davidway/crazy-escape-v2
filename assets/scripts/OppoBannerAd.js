var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n,
    e =
        ((i.prototype.createAd = function (t) {
            if (qg.createBannerAd && 0 != this._ads.length) {
                if (this._banner) return (this._banner.style = t), this._bannerState, n.READY, this._banner;
                var e = this._ads[this._index % this._ads.length],
                    o = {};
                (o.adUnitId = e), (o.style = t), console.warn("广告：createAd", e), (this._bannerState = n.LOADING);
                o = qg.createBannerAd(o);
                return o.onError(this.onBannerError), o.onLoad(this.onBanneronLoad), o.onResize(this.onBannerResize), o;
            }
        }),
        (i.prototype.show = function (t) {
            var e = cc.winSize,
                o = cc.view.getFrameSize(),
                n = t.top,
                n = void 0 === n ? e.height - 170 : n,
                t = t.width,
                e = void 0 === t ? e.width * this.bannerRatio : t,
                t = 0.5 * (o.width - e);
            (n *= this.bannerRatio) + this.readHight > o.height ||
                (console.warn("Banner show"),
                (this._banner = this.createAd({top: n, width: e, left: t})),
                this._banner.show());
        }),
        (i.prototype.hide = function () {
            this._banner && (this._banner.hide(), console.log("广告隐藏")), (this._bannerState = n.HIDE);
        }),
        (i.prototype.destroy = function () {
            this._banner &&
                this._bannerState != n.LOADING &&
                this._bannerState != n.READY &&
                (this._banner.offError(this.onBannerError),
                this._banner.offLoad(this.onBanneronLoad),
                this._banner.offResize(this.onBannerResize),
                this._banner.destroy(),
                (this._banner = null),
                console.log("广告销毁")),
                (this._bannerState = n.DESTROY);
        }),
        i);
function i(t) {
    var o = this;
    (this._ads = []),
        (this._index = 0),
        (this._banner = null),
        (this._bannerState = n.LOADING),
        (this.bannerRatio = -1),
        (this.readHight = 104),
        (this.onBannerError = function () {
            (o._bannerState = n.ERROE), o.destroy();
        }),
        (this.onBanneronLoad = function () {}),
        (this.onBannerResize = function (t) {
            console.warn("banner reszie", t.width, t.height), (o.readHight = Math.max(o.readHight, t.height));
            var e = cc.view.getFrameSize();
            o._banner.style.top = e.height - t.height;
        }),
        (this._ads = t);
    var e = cc.view.getFrameSize(),
        t = cc.winSize;
    this.bannerRatio = e.width / t.width;
}
(o.default = e),
    ((e = n = n || {})[(e.LOADING = 0)] = "LOADING"),
    (e[(e.READY = 1)] = "READY"),
    (e[(e.SHOW = 2)] = "SHOW"),
    (e[(e.HIDE = 3)] = "HIDE"),
    (e[(e.ERROE = 4)] = "ERROE"),
    (e[(e.DESTROY = 5)] = "DESTROY");
