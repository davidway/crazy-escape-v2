var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.request = function (s) {
    var l = this;
    if (!this.isMultiLogin)
        return new Promise(function (e, o) {
            var t = Object.create({});
            (t.url = s.host ? s.host + s.url : l.host + s.url),
                (t.method = s.method || "GET"),
                (t.header = s.header || {}),
                (t.data = s.data || {}),
                (t.data.openid = l.openid),
                l.isInit || o();
            var n = "";
            if ("GET" == t.method) {
                for (var i in ((n = "?"), t.data))
                    "?" != n && "" != n && (n += "&"), (n += i + "=" + encodeURIComponent(t.data[i]));
                "?" == n && (n = "");
            }
            var r = t.url + ("GET" != t.method ? "" : encodeURI(n)),
                a = new XMLHttpRequest();
            (a.timeout = 5e3),
                a.open(t.method, r, !0),
                (a.withCredentials = !0),
                "POST" == t.method && a.setRequestHeader("Content-Type", "application/json"),
                a.setRequestHeader("version", l.version),
                a.setRequestHeader("authorization", l.getAuthorization()),
                a.setRequestHeader("platform", l.platform + ""),
                a.setRequestHeader("server-id", l.serverID || "1"),
                a.setRequestHeader("token", l.token),
                a.setRequestHeader("appid", l.appid),
                a.setRequestHeader("app-id", l.miniID);
            r = function (t) {
                console.warn("onError", t ? JSON.stringify(t) : ""), o();
            };
            return (
                (a.ontimeout = r),
                (a.onerror = r),
                (a.onreadystatechange = function () {
                    var t;
                    4 === a.readyState &&
                        (200 == a.status
                            ? (t = l.parseToJson(a.responseText))
                                ? (s.isLoginURL && l.setSessionID(a), 200 == t.code ? e(t.data) : o(t))
                                : (console.warn("err", a.responseText), o(null))
                            : (console.log(s.url + " error: " + a.status), o("status=" + a.status)));
                }),
                "GET" == t.method ? a.send() : a.send(JSON.stringify(t.data)),
                a
            );
        });
}),
    (n.prototype.getAuthorization = function () {
        return "";
    }),
    (n.prototype.parseToJson = function (t) {
        try {
            return JSON.parse(t);
        } catch (t) {
            return console.log(t), null;
        }
    }),
    (n.prototype.setSessionID = function (t) {
        t = (t.getResponseHeader("Set-Cookie") || "").match(/PHPSESSID\=(.*)\;/);
        null != t && (this.sessionId = t[1]), console.log("setSessionID：", this.sessionId);
    }),
    (e = n);
function n() {
    (this.host = ""),
        (this.version = ""),
        (this.appid = ""),
        (this.openid = ""),
        (this.miniID = ""),
        (this.platform = 0),
        (this.serverID = ""),
        (this.token = ""),
        (this.isInit = !0),
        (this.sessionId = ""),
        (this.isMultiLogin = !1);
}
o.default = e;
