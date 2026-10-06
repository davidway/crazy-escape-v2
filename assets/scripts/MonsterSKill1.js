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
    e =
        ((i = t("MonsterSkillBase").default),
        e(r, i),
        (r.prototype.startSkill = function (t) {
            (this.ower.speedRate = this.calcValue("speedRate", this.data.value.speedRate)),
                (this.data.useTime = t),
                (this.ower.isAllowMove = !0),
                console.log("[MonsterSKill1]-->[line:8]:", this.calcValue("speedRate", this.data.value.speedRate));
        }),
        (r.prototype.playSkill = function (t) {
            this.isFinish ||
                (this.data.useTime + this.data.duration < t && ((this.ower.speedRate = 1), (this.isFinish = !0)));
        }),
        (r.prototype.del = function () {}),
        (r.prototype.clear = function () {
            (this.ower = null), (this.data = null);
        }),
        r);
function r() {
    return (null !== i && i.apply(this, arguments)) || this;
}
o.default = e;
