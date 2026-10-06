var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var r = t("EquipController"),
    a = t("UserDataController"),
    s = t("DualEvolveRegistry"),
    t =
        ((n.prototype.parseJson = function (t, e) {
            var o,
                n,
                i = e.skillLevelConf,
                r = e.skillInfoConf;
            for (n in i) (o = i[n].skill_id + "_" + i[n].level), this._levelList.set(o, i[n]);
            for (n in r)
                this._infoList.set(r[n].id, r[n]),
                    0 < r[n].weapon && this._weaponList.set(r[n].weapon, r[n]),
                    0 < r[n].top_id && this._topList.set(r[n].top_id, r[n]),
                    r[n].id < 1e3 &&
                        1 < r[n].chapter &&
                        (null == this._skillList[r[n].chapter] && (this._skillList[r[n].chapter] = []),
                        this._skillList[r[n].chapter].push(r[n]));
            for (var a = s.getAllBranchIds(), c = 0; c < a.length; c++) {
                var u = s.getBaseSkillId(a[c]),
                    p = this._infoList.get(u);
                p && this._topList.set(a[c], p);
            }
        }),
        (n.prototype.getPlayerSkillLevelConfVo = function (t, e) {
            var o = t + "_" + e;
            return this._levelList.has(o) || console.error("不存在技能：", o, t, e), this._levelList.get(o);
        }),
        (n.prototype.calcRoundSkills = function () {
            var e = a.default.inst.chapter,
                o = [],
                n = r.EquipController.inst.getMainSkillId(),
                i = [],
                l = s.getAllBranchIds();
            (this.roundList.length = 0),
                this._infoList.forEach(function (t) {
                    if (0 < t.weapon && t.id != n) {
                        i.push(t.id), 0 < t.top_id && i.push(t.top_id);
                        var e = s.getRoute(t.id);
                        e && (i.push(e.a), i.push(e.b));
                    }
                    t.chapter <= e && !i.includes(t.id) && !l.includes(t.id) && o.push(t.id);
                }),
                console.log("[PlayerSkillConf]-->[line:71]:", o, i),
                (this.roundList = o);
        }),
        (n.prototype.getRoundSkills = function () {
            return this.roundList;
        }),
        (n.prototype.getSkillInfoVo = function (t) {
            return this._infoList.get(t);
        }),
        (n.prototype.getOrdinarySkillInfoVo = function () {
            return this._skillList;
        }),
        (n.prototype.getSkillIdByTopId = function (t) {
            var e = s.getBaseSkillId(t);
            if (e) return e;
            t = this._topList.get(t);
            return t ? t.id : 0;
        }),
        (n.prototype.getSkillByWeapon = function (t) {
            t = this._weaponList.get(t);
            return t ? t.id : 0;
        }),
        (n.prototype.isUltimateSkill = function (t) {
            t = this.getSkillInfoVo(t);
            return !!t && 1 == t.isUltimate;
        }),
        (n.prototype.isSkillGroup = function (t, e) {
            t = this.getSkillInfoVo(t);
            return !(!t || t.type != e);
        }),
        n);
function n() {
    (this._levelList = new Map()),
        (this._infoList = new Map()),
        (this._weaponList = new Map()),
        (this._topList = new Map()),
        (this._skillList = [[]]),
        (this.roundList = []);
}
o.default = t;
