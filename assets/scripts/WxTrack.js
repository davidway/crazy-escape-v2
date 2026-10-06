var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.WxTrack = void 0);
var n = t("GameSetting"),
    t =
        ((i.prototype.setOpenid = function (t) {
            wx.uma.setOpenid(t), console.log("友盟:", t);
        }),
        (i.prototype.trackShare = function (t) {
            return wx.uma.trackShare(t);
        }),
        (i.prototype.onStageStart = function (t, e) {
            wx.uma.stage.onStart({stageId: t, stageName: e}), console.warn("onStageStart:", t, e);
        }),
        (i.prototype.onStageEnd = function (t, e, o) {
            wx.uma.stage.onEnd({stageId: t, stageName: e, event: o}), console.warn("onStageEnd:", t, e, o);
        }),
        (i.prototype.trackEvent = function (t, e, o) {
            (o = void 0 === o ? !1 : o) || this._trackEvent(t, e),
                n.GameSetting.inst.is_new && this._trackEvent((t += "_today"), e),
                console.log("上报事件", t);
        }),
        (i.prototype._trackEvent = function (t, e) {
            e ? wx.uma.trackEvent(t, e) : wx.uma.trackEvent(t);
        }),
        i);
function i() {}
o.WxTrack = t;
