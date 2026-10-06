var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("WxTrack"),
    t =
        ((i.create = function () {
            return cc.sys.platform == cc.sys.WECHAT_GAME
                ? new n.WxTrack()
                : (cc.sys.platform, cc.sys.VIVO_GAME, cc.sys.platform, cc.sys.OPPO_GAME, null);
        }),
        i);
function i() {}
o.default = t;
