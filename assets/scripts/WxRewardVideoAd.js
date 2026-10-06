var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("App"),
    i = t("TaskController"),
    t =
        ((r.prototype.createVideoAd = function () {
            var t;
            wx.createRewardedVideoAd &&
                !this._rewardAd &&
                ((t = this.adUnitId[this.ad_index / this.adUnitId.length]),
                console.log("创建视频AD", t),
                (this._rewardAd = wx.createRewardedVideoAd({adUnitId: t})),
                this.isInit ||
                    ((this.isInit = !0),
                    this._rewardAd.onError(this.videoError),
                    this._rewardAd.onClose(this.videoClose),
                    this._rewardAd.onLoad(this.videoLoad)),
                (this.ad_index += 1));
        }),
        (r.prototype.showVideoAd = function (t) {
            var e = this;
            this._rewardAd || this.createVideoAd(),
                (this.onSuccessCallBack = t.success),
                (this.onFailCallback = t.fail),
                (this.onErrorCallback = t.error),
                (n.app.platform.isShowingVideoAd = !0),
                this._rewardAd.show().catch(function () {
                    e._rewardAd
                        .load()
                        .then(function () {
                            return e._rewardAd.show();
                        })
                        .catch(function () {
                            (n.app.platform.isShowingVideoAd = !1), e.onErrorCallback && e.onErrorCallback();
                        });
                });
        }),
        (r.prototype.destroy = function () {
            this._rewardAd &&
                (this._rewardAd.offError(this.videoError),
                this._rewardAd.offClose(this.videoClose),
                this._rewardAd.offLoad(this.videoLoad),
                this._rewardAd.destroy(),
                (this._rewardAd = null),
                (this.onSuccessCallBack = null),
                (this.onFailCallback = null),
                (this.onErrorCallback = null));
        }),
        r);
function r(t) {
    var e = this;
    (this.adUnitId = t),
        (this._rewardAd = null),
        (this.onSuccessCallBack = null),
        (this.onFailCallback = null),
        (this.onErrorCallback = null),
        (this.isInit = !1),
        (this.ad_index = 0),
        (this.videoError = function (t) {
            console.log("视频失败：" + JSON.stringify(t)),
                e.onErrorCallback && e.onErrorCallback(t),
                (n.app.platform.isShowingVideoAd = !1),
                e.destroy();
        }),
        (this.videoLoad = function () {
            console.log("加载视频完成");
        }),
        (this.videoClose = function (t) {
            (n.app.platform.isShowingVideoAd = !1),
                (t && t.isEnded) || void 0 === t
                    ? (console.log("正常播放结束，可以下发游戏奖励"),
                      i.default.inst.addDaily("video", 1),
                      i.default.inst.addWeek("video", 1),
                      e.onSuccessCallBack && e.onSuccessCallBack(t))
                    : (console.log("播放中途退出，不下发游戏奖励"), e.onFailCallback && e.onFailCallback(t));
        }),
        0 < t.length && this.createVideoAd();
}
o.default = t;
