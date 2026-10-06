var t = require;
var e = module;
var o = exports;
var n,
    i =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        });
Object.defineProperty(o, "__esModule", {value: !0}), (o.InviteController = void 0);
var r,
    a = t("App"),
    e = t("Singleton"),
    s = t("ConfData"),
    i =
        ((r = e.Singleton()),
        i(l, r),
        (l.prototype.initData = function () {
            this._inviteData = this.getStorageData();
        }),
        (l.prototype.getReward = function (t) {
            t = s.default.inst.InviteConf.getRewardData(t);
            s.default.inst.PrizeConf.addReward(t);
        }),
        (l.prototype.getStorageData = function () {
            return (
                (this._inviteData = a.app.local.getValue("InviteData")),
                null == this._inviteData &&
                    ((this._inviteData = {id: 1, inviteNum: 0, drawGetId: [null]}),
                    this.setStorageData(this._inviteData)),
                this._inviteData
            );
        }),
        (l.prototype.setStorageData = function (t) {
            a.app.local.setValue("InviteData", t);
        }),
        l);
function l() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t._inviteData = null), t;
}
o.InviteController = i;
