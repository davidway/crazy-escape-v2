var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("ConfData"),
    t =
        ((i.prototype.parseJson = function (t, e) {
            var o = this,
                n = e.everydayReward;
            n.forEach(function (t) {
                o.everydayReward.set(t.id, t);
            }),
                (this._useRewardData = e.useRewardData),
                (this._maxRewardDay = this._useRewardData.length),
                console.log(n, this._useRewardData);
            for (var i = 0, r = this._useRewardData; i < r.length; i++) {
                var a = r[i];
                this._everydayRewardDatas[a.useId] = this.everydayReward.get(a.useId);
            }
            this._everydayRewardDatas.splice(0, 1),
                console.log("[EverydayRewardConf]-->[line:36]:", this._everydayRewardDatas, this._useRewardData);
        }),
        (i.prototype.getAllReward = function () {
            return this._everydayRewardDatas;
        }),
        (i.prototype.getRewardData = function (t) {
            t = this._everydayRewardDatas[t - 1].reward;
            return n.default.inst.PrizeConf.getRewardData(t);
        }),
        (i.prototype.getAbundantRewardData = function (t) {
            t = this._everydayRewardDatas[t - 1].abundantReward;
            return n.default.inst.PrizeConf.getRewardData(t);
        }),
        (i.prototype.getMaxRewardDay = function () {
            return this._maxRewardDay;
        }),
        i);
function i() {
    (this._everydayRewardDatas = []),
        (this.everydayReward = new Map()),
        (this._useRewardData = null),
        (this._maxRewardDay = 0);
}
o.default = t;
