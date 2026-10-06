var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("HeroController"),
    i = t("SkinAttrController"),
    t =
        (Object.defineProperty(r.prototype, "hurtValue", {
            get: function () {
                return this._hurtValue;
            },
            enumerable: !1,
            configurable: !0
        }),
        (r.prototype.setSkillLayer = function (t, e) {
            (this._bottomLayer = t), (this._topLayer = e);
        }),
        (r.prototype.setData = function (t) {
            this._data = t;
        }),
        (r.prototype.getData = function () {
            return this._data;
        }),
        (r.prototype.levelUp = function () {}),
        (r.prototype.updateSkill = function () {
            (this.speedValue = this._data.confVo.speed * n.HeroController.getAtrr("skillSpeedRate")),
                (this.duration = this._data.confVo.duration * n.HeroController.getAtrr("durationRate")),
                (this.exeTime = this._data.confVo.atk_interval * n.HeroController.getAtrr("skillUseRate")),
                (this._hurtValue = Math.round(
                    (1 + this._data.confVo.atk_value + i.default.inst.getAttr("atk", this._data.id)) *
                        n.HeroController.getAtrr("atk")
                )),
                (this.radius = this._data.confVo.radius * n.HeroController.getAtrr("areaRate")),
                (this.angular = this._data.confVo.angular);
        }),
        (r.prototype.spliceCloseList = function (t) {
            this.closeList &&
                this.closeList.includes(t.uuid) &&
                ((t = this.closeList.indexOf(t.uuid)), this.closeList.splice(t, 1));
        }),
        r);
function r() {
    (this._data = null),
        (this._bottomLayer = null),
        (this._topLayer = null),
        (this._hurtValue = 0),
        (this.angular = 0),
        (this.speedValue = 3),
        (this.duration = 3),
        (this.exeTime = 1),
        (this.radius = 10),
        (this.closeList = []),
        (this.isValid = !0);
}
o.default = t;
