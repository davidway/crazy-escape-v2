var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("TaskController"),
    t =
        ((i.prototype.createVideoAd = function (t) {
            qg.createRewardedVideoAd &&
                (this._rewardAd ||
                    (console.log("创建视频AD", t),
                    (this._rewardAd = qg.createRewardedVideoAd({adUnitId: t})),
                    this._rewardAd.onError(this.videoError),
                    this._rewardAd.onClose(this.videoClose),
                    this._rewardAd.onLoad(this.videoLoad)));
        }),
        (i.prototype.showVideoAd = function (t) {
            var e = this;
            Date.now() - this.timer < 500 ||
                ((this.onSuccessCallBack = t.success),
                (this.onFailCallback = t.fail),
                (this.onErrorCallback = t.error),
                (this.timer = Date.now()),
                this._rewardAd.load().catch(function () {
                    e.onErrorCallback && e.onErrorCallback();
                }));
        }),
        i);
function i() {
    var e = this;
    (this._rewardAd = null),
        (this.onSuccessCallBack = null),
        (this.onFailCallback = null),
        (this.onErrorCallback = null),
        (this.timer = 0),
        (this.videoError = function (t) {
            console.log("视频失败：" + JSON.stringify(t)), e.onErrorCallback && e.onErrorCallback(t);
        }),
        (this.videoLoad = function (t) {
            console.warn("加载视频完成", t ? JSON.stringify(t) : ""), e._rewardAd.show();
        }),
        (this.videoClose = function (t) {
            (t && t.isEnded) || void 0 === t
                ? (n.default.inst.addDaily("video", 1),
                  n.default.inst.addWeek("video", 1),
                  console.log("正常播放结束，可以下发游戏奖励"),
                  e.onSuccessCallBack && e.onSuccessCallBack(t))
                : (console.log("播放中途退出，不下发游戏奖励"), e.onFailCallback && e.onFailCallback(t));
        });
}
o.default = t;
