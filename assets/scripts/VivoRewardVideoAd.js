var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.createVideoAd = function (t) {
    qg.createRewardedVideoAd &&
        (this._rewardAd ||
            (console.log("创建视频AD", t),
            (this._rewardAd = qg.createRewardedVideoAd({posId: t})),
            this._rewardAd.onError(this.videoError),
            this._rewardAd.onClose(this.videoClose),
            this._rewardAd.onLoad(this.videoLoad)));
}),
    (n.prototype.showVideoAd = function (t) {
        this._rewardAd ||
            (this.createVideoAd(t.adUnitId),
            (this.onSuccessCallBack = t.success),
            (this.onFailCallback = t.fail),
            (this.onErrorCallback = t.error));
    }),
    (n.prototype.destroy = function () {
        this._rewardAd &&
            ((this._rewardAd = null),
            (this.onSuccessCallBack = null),
            (this.onFailCallback = null),
            (this.onErrorCallback = null));
    }),
    (e = n);
function n() {
    var e = this;
    (this._rewardAd = null),
        (this.onSuccessCallBack = null),
        (this.onFailCallback = null),
        (this.onErrorCallback = null),
        (this.videoError = function (t) {
            console.log("视频失败：" + JSON.stringify(t)), e.onErrorCallback && e.onErrorCallback(t), e.destroy();
        }),
        (this.videoLoad = function (t) {
            console.warn("加载视频完成", t ? JSON.stringify(t) : ""), e._rewardAd.show();
        }),
        (this.videoClose = function (t) {
            (t && t.isEnded) || void 0 === t
                ? (console.log("正常播放结束，可以下发游戏奖励"), e.onSuccessCallBack && e.onSuccessCallBack(t))
                : (console.log("播放中途退出，不下发游戏奖励"), e.onFailCallback && e.onFailCallback(t)),
                e.destroy();
        });
}
o.default = e;
