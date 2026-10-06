var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("ApiBase"),
    i = t("OppoAPI"),
    r = t("VivoAPI"),
    a = t("WxAPI"),
    t =
        ((s.create = function () {
            return new (
                cc.sys.platform == cc.sys.WECHAT_GAME
                    ? a
                    : cc.sys.platform == cc.sys.VIVO_GAME
                    ? r
                    : cc.sys.platform == cc.sys.OPPO_GAME
                    ? i
                    : n
            ).default();
        }),
        s);
function s() {}
o.default = t;
