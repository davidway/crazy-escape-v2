var t = require;
var e = module;
var o = exports;
var n,
    e =
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
Object.defineProperty(o, "__esModule", {value: !0});
var i,
    r = t("GameMgr"),
    e =
        ((i = t("MonsterSkillBase").default),
        e(a, i),
        (a.prototype.setData = function (t, e) {
            i.prototype.setData.call(this, t, e);
        }),
        (a.prototype.startSkill = function (t) {
            (this.ower.speedRate = this.calcValue("speedRate", this.data.value.speedRate)),
                (this.data.useTime = t),
                (this.round = 0),
                (this.duration = 0),
                (this.stay_time = this.calcValue("interval", 1) / r.default.inst.timeScale),
                (this.ower.target = r.default.inst.seekTarget(this.ower.distance));
        }),
        (a.prototype.playSkill = function (t, e) {
            if (!this.isFinish) {
                if (this.round == this.data.round)
                    return (
                        (this.isFinish = !0),
                        (this.ower.speedRate = 1),
                        this.ower.getMoveComp().stopMove(),
                        (this.ower.isAllowMove = !0),
                        this.ower.hideArrow(),
                        void (this.ower.target = r.default.inst.seekTarget(this.ower.distance))
                    );
                0 < this.stay_time
                    ? ((this.stay_time -= e), (this.ower.isAllowMove = !1), (this.duration = 0), this.ower.showArrow())
                    : 0 == this.duration
                    ? (console.log("[MonsterSKill2]-->[line:29]:第" + (this.round + 1) + "次移动开始"),
                      (e = r.default.inst.getTargetPos(this.ower.target)),
                      this.ower.getMoveComp().setOrientation(e),
                      (this.ower.isAllowMove = !0),
                      (this.duration = t + this.data.duration),
                      this.ower.hideArrow())
                    : this.duration < t &&
                      (this.ower.hideArrow(),
                      console.log("[MonsterSKill2]-->[line:37]:第" + (this.round + 1) + "次移动结束"),
                      (this.ower.isAllowMove = !1),
                      (this.round += 1),
                      (this.stay_time = this.calcValue("interval", 1) / r.default.inst.timeScale));
            }
        }),
        (a.prototype.del = function () {}),
        (a.prototype.clear = function () {}),
        a);
function a() {
    var t = (null !== i && i.apply(this, arguments)) || this;
    return (t.stay_time = 0), (t.duration = 0), (t.round = 0), t;
}
o.default = e;
