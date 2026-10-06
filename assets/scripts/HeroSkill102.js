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
    r = t("HeroController"),
    a = t("GameEnums"),
    e =
        ((i = t("HeroSkillBase").default),
        e(s, i),
        (s.prototype.updateSkill = function () {
            var t = this._data.confVo.enhance_all;
            console.log("[HeroSkill102]-->[line:34]:", t, this._data.confVo),
                t && 0 != t.length
                    ? (t = t[0]).type == a.AuxiliaryType.Type8
                        ? ((this.hpData = t), (this.exeTime = t.sec))
                        : console.error("技能错误2")
                    : console.error("技能错误");
        }),
        (s.prototype.setData = function (t) {
            i.prototype.setData.call(this, t), this.updateSkill();
        }),
        (s.prototype.levelUp = function () {
            this.updateSkill();
        }),
        (s.prototype.onUpdate = function (t) {
            this.hpData &&
                (0 == this._data.useTime || this._data.useTime + this.exeTime < t) &&
                (this.playSkill(), (this._data.useTime = t));
        }),
        (s.prototype.del = function () {}),
        (s.prototype.clear = function () {}),
        (s.prototype.playSkill = function () {
            var t = r.HeroController.getEvolveAtrr("Food_Hp");
            r.HeroController.addHpRate(this.hpData.value + t);
        }),
        s);
function s() {
    var t = (null !== i && i.apply(this, arguments)) || this;
    return (t.hpData = null), t;
}
o.default = e;
