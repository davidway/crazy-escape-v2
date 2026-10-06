var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("ConfData"),
    i = t("GameEnums"),
    r = t("GameMgr"),
    a = t("MonsterSkillController"),
    t =
        (Object.defineProperty(s.prototype, "hurtValue", {
            get: function () {
                return this._hurtValue;
            },
            enumerable: !1,
            configurable: !0
        }),
        (s.prototype.getOwer = function () {
            return this.ower;
        }),
        (s.prototype.setSkillLayer = function (t) {
            this._layer = t;
        }),
        (s.prototype.setData = function (t, e) {
            (this._hurtValue = t.getAttack()),
                (this.ower = t),
                (this.data = e),
                (this.next_time = e.next),
                (this.finish_time = e.finish),
                (this.play_time = 0),
                (this.isFinish = !1);
            var o,
                e = r.default.inst.calcChapter();
            r.default.inst.checkMapType([i.Map_Group.CHALLENGE])
                ? (e = (o = n.default.inst.challengeConf.getFbByChapter(e)) ? o.chapter : 1)
                : r.default.inst.checkMapType([i.Map_Group.HELL])
                ? (e = (o = n.default.inst.hellConf.getHellVoByFb(e)) ? o.chapter : 1)
                : r.default.inst.checkMapType([i.Map_Group.NORMAL]) || (e = 1),
                (this.chapter = e);
        }),
        (s.prototype.onUpdate = function (t, e) {
            if (this.data && this.ower) {
                if ((0 == this.data.useTime && (this.data.useTime = t), (this.finish_time -= e), this.finish_time <= 0))
                    return (
                        console.log("技能结束"),
                        this.ower.delSkill(this.id),
                        void a.MonsterSkillController.delSkill(this.ower, this)
                    );
                0 < this.next_time &&
                    ((this.next_time -= e),
                    this.next_time <= 0 &&
                        (this.ower.nextSkill(), console.log("怪物技能 下一个技能", this.data.next, this.id))),
                    this.ower.hasSkill(this.id) ? this.canPlaySkill(t) && this.playSkill(t, e) : this.useSkill(t, e);
            }
        }),
        (s.prototype.canPlaySkill = function (t) {
            return (
                0 == this.play_time ||
                (!(this.play_time > t) &&
                    (0 < this.play_time ? ((this.play_time = 0), this.startSkill(t), !0) : void 0))
            );
        }),
        (s.prototype.useSkill = function (t) {
            this.ower.useSkill(this.id),
                0 < this.data.delay
                    ? ((this.play_time = t + this.data.delay), this.ower.getMoveComp().stopMove())
                    : ((this.play_time = 0), this.startSkill(t));
        }),
        (s.prototype.calcValue = function (t, e) {
            var o = t + "",
                n = (e = void 0 === e ? 0 : e),
                i = (this.data.value_change && this.data.value_change[o]) || 0;
            return (
                null != i
                    ? ((t = (this.chapter - 1) * i),
                      "speed" == o
                          ? (n = this.data.speed + t)
                          : !this.data.value || (null != (i = this.data.value[o]) && (n = i + t)))
                    : "speed" == o
                    ? (n = this.data.speed)
                    : this.data.value && (n = this.data.value[o] || e),
                cc.misc.clampf(n, 0, Number.MAX_SAFE_INTEGER)
            );
        }),
        Object.defineProperty(s, "uuid", {
            get: function () {
                return (this._uuid += 1), this._uuid;
            },
            enumerable: !1,
            configurable: !0
        }),
        (s._uuid = 0),
        s);
function s() {
    (this.id = 0),
        (this.data = null),
        (this.ower = null),
        (this._layer = null),
        (this.play_time = 0),
        (this.finish_time = 0),
        (this.next_time = 0),
        (this.isFinish = !1),
        (this._hurtValue = 0),
        (this.chapter = 0),
        (this.id = s.uuid);
}
o.default = t;
