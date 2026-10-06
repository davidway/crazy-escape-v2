var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.parseJson = function (t, e) {
    var o = this;
    e.endlessBoss.forEach(function (t) {
        o._endlessBoss.set(t.grade, t), (o._maxScore = Math.max(o._maxScore, t.grade));
    }),
        console.log("[EndlessBossConf]-->[line:14]:", this._endlessBoss);
}),
    (n.prototype.getEndlessBoss = function (t) {
        return (t = cc.misc.clampf(t, 1, this._maxScore)), this._endlessBoss.get(t);
    }),
    (e = n);
function n() {
    (this._endlessBoss = new Map()), (this._maxScore = 0);
}
o.default = e;
