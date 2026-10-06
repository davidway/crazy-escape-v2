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
    r = t("App"),
    a = t("ChainLightningMax"),
    e =
        ((i = t("HeroSkillBase").default),
        e(s, i),
        (s.prototype.updateSkill = function () {
            i.prototype.updateSkill.call(this);
        }),
        (s.prototype.onUpdate = function (t, e) {
            (0 == this._data.useTime || this._data.useTime + this.exeTime < t) &&
                (this.playSkill(), (this._data.useTime = t)),
                this.chainLight && this.chainLight.node.parent && this.chainLight.onUpdate(e);
        }),
        (s.prototype.del = function () {
            this.chainLight && (this.chainLight.node.parent = null);
        }),
        (s.prototype.clear = function () {
            this.chainLight && this.chainLight.recycle();
        }),
        (s.prototype.playSkill = function () {
            var t;
            this.chainLight || ((t = new cc.Node("chainLight")), (this.chainLight = t.addComponent(a.default))),
                r.app.sound.playEffect("终极技连锁闪电"),
                (this.chainLight.node.parent = this._topLayer),
                (this.chainLight.hitNum = Number.MAX_SAFE_INTEGER),
                this.chainLight.setData(
                    {duration: this.duration, dizziness: this._data.confVo.extra_values.dizziness, radius: this.radius},
                    this.hurtValue,
                    this
                );
        }),
        s);
function s() {
    var t = (null !== i && i.apply(this, arguments)) || this;
    return (t.chainLight = null), t;
}
o.default = e;
