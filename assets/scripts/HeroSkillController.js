var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var r = t("GameEnums"),
    a = t("GameMgr"),
    n = t("SkillFactory"),
    t =
        ((i.prototype.setLayer = function (t, e) {
            (this.bottomLayer = t), (this.topLayer = e);
        }),
        (i.prototype.addSkill = function (t) {
            var e;
            !t ||
                ((e = n.default.inst.getHeroSkill(t.id)) &&
                    (e.setData(t),
                    e.setSkillLayer(this.bottomLayer, this.topLayer),
                    (e.isValid = !0),
                    this.skills.set(t.id, e)));
        }),
        (i.prototype.updateSkill = function (t) {
            t = this.skills.get(t);
            t && t.updateSkill();
        }),
        (i.prototype.delSkill = function (t) {
            var e = this.skills.get(t);
            e && ((e.isValid = !1), e.clear()), this.skills.delete(t);
        }),
        (i.prototype.levelUp = function (t) {
            t = this.skills.get(t);
            t && t.levelUp();
        }),
        (i.prototype.onUpdate = function (t) {
            if (!a.default.inst.onStatus(r.GameStatus.PAUSE | r.GameStatus.OVER)) {
                this.time += t;
                for (var e = Array.from(this.skills.values()), o = 0, n = e.length; o < n; o++) {
                    var i = e[o];
                    i.isValid && i.onUpdate(this.time, t);
                }
            }
        }),
        (i.prototype.pauseSkills = function () {
            this.skills.forEach(function (t) {
                t.clear();
            });
        }),
        (i.prototype.clearSkills = function () {
            console.warn("[HeroSkillController]-->[line:70]:清空技能"),
                (this.time = 0),
                this.skills.forEach(function (t) {
                    t.clear();
                }),
                this.skills.clear(),
                this.bottomLayer.removeAllChildren(!1),
                this.topLayer.removeAllChildren(!1);
        }),
        i);
function i() {
    (this.skills = new Map()), (this.bottomLayer = null), (this.topLayer = null), (this.time = 0);
}
o.default = t;
