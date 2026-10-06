var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var r = t("App"),
    i = t("MathUtil"),
    a = t("EventTypes"),
    t =
        ((n.prototype.setUid = function (t) {
            this.uid = t;
        }),
        (n.prototype.initShare = function (t, e) {
            void 0 === e && (e = 3), (this.share_info = t), (this.share_scuss_sec = e), this.onShareAppMessage();
        }),
        (n.prototype.share = function (t) {
            var e, o, n;
            cc.sys.platform === cc.sys.WECHAT_GAME &&
                0 < this.share_info.length &&
                (wx.updateShareMenu && wx.updateShareMenu({withShareTicket: !0}),
                (e = (n = this.getShareTiltleThumb()).title),
                (o = n.imageUrl),
                n.id,
                (t = void 0 === (n = (t || {}).query) ? "" : n),
                ((n = Object.create({})).title = e),
                (n.imageUrl = o),
                "" == t ? (t = "inviter_id=" + this.uid) : (t += "&inviter_id=" + this.uid),
                (n.query = t),
                r.app.track && (n = r.app.track.trackShare(n)),
                console.log("分享数据:", n, t),
                wx.shareAppMessage(n));
        }),
        (n.prototype.shareForReward = function (n) {
            var i = this;
            return (
                console.log("发起邀请"),
                new Promise(function (t, e) {
                    var o;
                    cc.sys.platform == cc.sys.WECHAT_GAME && 0 != i.share_info.length
                        ? (r.app.event.targetOff(i.shareObj),
                          (o = Date.now()),
                          r.app.event.on(
                              a.EventType.User_Share,
                              function () {
                                  console.log("分享返回时间：" + (Date.now() - o)),
                                      t(Date.now() - o >= i.share_scuss_sec),
                                      r.app.event.targetOff(i.shareObj);
                              },
                              i.shareObj
                          ),
                          i.share(n))
                        : e();
                })
            );
        }),
        (n.prototype.onShareAppMessage = function () {
            var t,
                e,
                o,
                n,
                i = this;
            cc.sys.platform == cc.sys.WECHAT_GAME &&
                0 != this.share_info.length &&
                ((t = this.getShareTiltleThumb()),
                (e = t.title),
                (o = t.imageUrl),
                (n = ""),
                wx.onShareAppMessage(function () {
                    "" == n ? (n = "inviter_id=" + i.uid) : (n += "&inviter_id=" + i.uid);
                    var t = {title: e, imageUrl: o, query: n};
                    return r.app.track && (t = r.app.track.trackShare(t)), console.log("分享数据2:", t), t;
                }));
        }),
        (n.prototype.getShareTiltleThumb = function () {
            var t = this.share_info,
                e = "",
                o = "",
                n = 0;
            return (
                0 < t.length &&
                    ((e = (t = t[i.default.randomRangeInt(0, t.length)]).title), (o = t.images), (n = t.id)),
                console.log("分享数据：", e, o),
                {title: e, imageUrl: o, id: n}
            );
        }),
        (n.prototype.getLostShareMsg = function () {
            return ["本次分享无效，请分享到其他群", "分享失败，请重试", "请分享到不同的群"][
                Math.floor(3 * Math.random())
            ];
        }),
        n);
function n() {
    (this.shareObj = {}), (this.share_info = []), (this.share_index = 0), (this.uid = 0), (this.share_scuss_sec = 3e3);
}
o.default = t;
