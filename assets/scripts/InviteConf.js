var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("ConfData"),
    t =
        ((i.prototype.parseJson = function (t, e) {
            e = e.invite;
            this._invite.push(null);
            for (var o = 0, n = e; o < n.length; o++) {
                var i = n[o];
                this._invite.push(i);
            }
            console.log("[InviteConf]-->[line:18]:", this._invite);
        }),
        (i.prototype.getAllInvite = function () {
            return this._invite;
        }),
        (i.prototype.getRewardData = function (t) {
            t = this._invite[t].reward;
            return n.default.inst.PrizeConf.getRewardData(t);
        }),
        i);
function i() {
    this._invite = [];
}
o.default = t;
