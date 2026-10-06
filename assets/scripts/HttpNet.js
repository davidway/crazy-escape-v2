var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var l = t("EventTypes"),
    a = t("NetHelper"),
    c = t("App"),
    n = t("NetBase"),
    t =
        ((i.prototype.initialize = function (t) {
            for (var e in t) this.hasOwnProperty(e) && (this[e] = t[e]);
            (this.netBase.host = this.host), console.warn("host", this.host);
            var o,
                n,
                i = c.app.platform.getLaunchOptionsSync();
            i &&
                ((o = (i.query && i.query.channel_id) || ""),
                (n = (i.referrerInfo && i.referrerInfo.appId) || ""),
                (this.channel_id = o || n),
                (this.scene = i.scene || ""),
                (this.inviter_id = parseInt(i.query && i.query.inviter_id) || 0));
        }),
        (i.prototype.setOpenId = function (t) {
            var e;
            (this.openid = t),
                (this.netBase.openid = t),
                null === (e = c.app.track) || void 0 === e || e.setOpenid(t),
                console.log("openid:", t);
        }),
        (i.prototype.setServerID = function (t) {
            this.netBase.serverID = t;
        }),
        (i.prototype.setUID = function (t) {
            (this.uid = t), c.app.platform.setUid(t), console.log("uid:", t);
        }),
        (i.prototype.getUid = function () {
            return this.uid || 1;
        }),
        (i.prototype.getOpenid = function () {
            return cc.sys.isBrowser ? "user_1" : this.openid;
        }),
        (i.prototype.register = function (t, e) {
            this.parsers.has(t) ? console.warn("已注册解析器" + t) : this.parsers.set(t, e);
        }),
        (i.prototype.send = function (n, i, r, a) {
            var s = this;
            return new Promise(function (e, o) {
                if (s.reqList[n]) return console.warn("已在请求：" + n), void o();
                var t = s.makeReqBody(n, r, i, a);
                s.netBase.request(t).then(
                    function (t) {
                        null != t && t.openid && s.setOpenId(t.openid),
                            null != t && t.id && s.setUID(t.id),
                            s.parsers.has(n) && s.parsers.get(n).parse(n, t),
                            e(t),
                            console.log("[HttpNet]-->[line:108]:", n, t),
                            c.app.event.emit(l.EventType.Request_Data_Complete, n);
                    },
                    function (t) {
                        t.msg && console.warn("err.msg:" + t.msg), o(t);
                    }
                );
            });
        }),
        (i.prototype.makeReqBody = function (t, e, o, n) {
            var i = {};
            if (
                ((i.url = t),
                (i.method = null != e ? e : "POST"),
                n && (i.host = n),
                (i.data = {
                    openid: this.openid,
                    uid: this.uid,
                    appid: this.appId,
                    channel_id: this.channel_id,
                    scene_id: this.scene,
                    inviter_id: this.inviter_id,
                    source_appid: this.appId
                }),
                t == a.default.dau && (i.data.uid = this.openid),
                o)
            )
                for (var r in o) i.data[r] = o[r];
            return i;
        }),
        i);
function i() {
    (this.netBase = new n.default()),
        (this.version = "1.0.1"),
        (this.host = ""),
        (this.channel_id = ""),
        (this.scene = ""),
        (this.inviter_id = 0),
        (this.miniID = "3620"),
        (this.appId = "wxad56d005ec7ccef9"),
        (this.parsers = new Map()),
        (this.reqList = {}),
        (this.netBase.host = this.host),
        (this.netBase.version = window.sdkVersion || this.version),
        (this.netBase.appid = this.appId),
        (this.netBase.isInit = !0),
        (this.netBase.miniID = this.miniID);
}
o.default = t;
