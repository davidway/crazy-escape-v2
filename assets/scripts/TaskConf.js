var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.parseJson = function (t, e) {
    for (
        var o = e.dailyTaskConf, n = e.weekTaskConf, i = e.honourTaskConf, e = e.taskRewardsConf, r = 0, a = o;
        r < a.length;
        r++
    ) {
        var s = a[r];
        this.dailyTask.set(s.type, s);
    }
    for (var l = 0, c = n; l < c.length; l++) (s = c[l]), this.weekTask.set(s.type, s);
    for (var u = 0, p = i; u < p.length; u++)
        (s = p[u]), this.honourTask.set(s.type, s), (this.maxHonourType = Math.max(this.maxHonourType, s.type));
    for (var h = 0, d = e; h < d.length; h++) {
        var s = d[h],
            f = this.rewards.get(s.type);
        (f = f || []).push(s),
            this.rewards.set(s.type, f),
            this.allRewards.set(s.id, s),
            1 == s.type
                ? (this.maxDailyValue = Math.max(this.maxDailyValue, s.count))
                : (this.maxWeekValue = Math.max(this.maxWeekValue, s.count));
    }
}),
    (n.prototype.getDailyTask = function (t) {
        return this.dailyTask.get(t);
    }),
    (n.prototype.getDailyList = function () {
        return Array.from(this.dailyTask.values());
    }),
    (n.prototype.getWeekTask = function (t) {
        return this.weekTask.get(t);
    }),
    (n.prototype.getWeakList = function () {
        return Array.from(this.weekTask.values());
    }),
    (n.prototype.getHonourByType = function (t) {
        return this.honourTask.get(t);
    }),
    (n.prototype.getRewardsListByType = function (t) {
        return this.rewards.get(t);
    }),
    (n.prototype.getRewardById = function (t) {
        return this.allRewards.get(t);
    }),
    (e = n);
function n() {
    (this.dailyTask = new Map()),
        (this.weekTask = new Map()),
        (this.honourTask = new Map()),
        (this.rewards = new Map()),
        (this.allRewards = new Map()),
        (this.maxHonourType = 0),
        (this.maxDailyValue = 0),
        (this.maxWeekValue = 0);
}
o.default = e;
