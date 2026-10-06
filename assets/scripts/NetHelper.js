var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("App"),
    i = t("GameSetting"),
    r = t("ServerData"),
    a = t("ShareData"),
    t =
        ((s.initialize = function () {
            n.app.http.initialize({host: n.app.platform.host_url}),
                n.app.http.register(this.config, i.GameSetting.inst),
                n.app.http.register(this.login, i.GameSetting.inst),
                n.app.http.register(this.getInviterInfo, a.default.inst),
                n.app.http.register(this.getData, r.default.inst);
        }),
        (s.login = "api/user/login"),
        (s.config = "api/setting/config"),
        (s.dau = "stat/index/initV2"),
        (s.getInviterInfo = "api/user/getInviterInfo"),
        (s.setData = "api/user/setData"),
        (s.getData = "api/user/getData"),
        s);
function s() {}
o.default = t;
