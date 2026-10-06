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
Object.defineProperty(o, "__esModule", {value: !0}), (o.EverydayRewardController = void 0);
var r,
    a = t("App"),
    e = t("Singleton"),
    s = t("ConfData"),
    l = t("TaskController"),
    i =
        ((r = e.Singleton()),
        i(c, r),
        (c.prototype.initData = function () {
            (this._everydayRewardData = this.getStorageData()), this.setGetReward();
        }),
        (c.prototype.setGetReward = function () {
            (this.isGetReward = 0 == this._everydayRewardData.reward),
                (this.isGetAbundant = 0 == this._everydayRewardData.abundantReward),
                console.log("每日奖励", this.isGetReward, this.isGetAbundant);
        }),
        (c.prototype.getReward = function () {
            var t;
            l.default.inst.addDaily("signIn", 1),
                l.default.inst.addWeek("signIn", 1),
                0 == this._everydayRewardData.reward
                    ? ((t = s.default.inst.everydayRewardConf.getRewardData(this._everydayRewardData.rewardDay)),
                      s.default.inst.PrizeConf.addReward(t))
                    : 0 == this._everydayRewardData.abundantReward &&
                      ((t = s.default.inst.everydayRewardConf.getAbundantRewardData(
                          this._everydayRewardData.abundantDay
                      )),
                      s.default.inst.PrizeConf.addReward(t)),
                0 == this._everydayRewardData.reward
                    ? (this._everydayRewardData.reward = 1)
                    : 0 == this._everydayRewardData.abundantReward &&
                      (this._everydayRewardData.abundantDay < this._everydayRewardData.rewardDay
                          ? this._everydayRewardData.abundantDay++
                          : (this._everydayRewardData.abundantReward = 1)),
                this.setStorageData(this._everydayRewardData);
        }),
        (c.prototype.getStorageData = function () {
            var t = new Date(),
                e = t.getFullYear() + "" + t.getMonth() + t.getDate();
            return (
                (this._everydayRewardData = a.app.local.getValue("EverydayRewardData")),
                (this.isEject = !1),
                null == this._everydayRewardData
                    ? ((this._everydayRewardData = {
                          date: e,
                          rewardDay: 1,
                          abundantDay: 1,
                          reward: 0,
                          abundantReward: 0
                      }),
                      this.setStorageData(this._everydayRewardData),
                      console.log("初始化签到数据"))
                    : (this._everydayRewardData.date != e
                          ? (console.log("新的一天"),
                            (t = {
                                date: e,
                                rewardDay: this._everydayRewardData.rewardDay,
                                abundantDay: this._everydayRewardData.abundantDay,
                                reward: 0,
                                abundantReward: this._everydayRewardData.abundantReward
                            }),
                            1 == this._everydayRewardData.reward &&
                                (t.abundantDay == t.rewardDay &&
                                    1 == t.abundantReward &&
                                    ((t.abundantDay += 1), (t.abundantReward = 0)),
                                (t.rewardDay += 1),
                                (t.reward = 0)),
                            t.rewardDay > s.default.inst.everydayRewardConf.getMaxRewardDay() &&
                                ((t.rewardDay = 1), (t.abundantDay = 1), (t.abundantReward = 0)),
                            (t.date = e),
                            (this._everydayRewardData = t))
                          : (console.log("今天已登录过"), (this.isEject = !0)),
                      this.setStorageData(this._everydayRewardData)),
                console.log("签到", this.isEject),
                this._everydayRewardData
            );
        }),
        (c.prototype.setStorageData = function (t) {
            (this._everydayRewardData = t), a.app.local.setValue("EverydayRewardData", t), this.setGetReward();
        }),
        c);
function c() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t._everydayRewardData = null), (t.isGetReward = !1), (t.isGetAbundant = !1), (t.isEject = !1), t;
}
o.EverydayRewardController = i;
