var t = require;
var e = module;
var o = exports;
var n,
    i =
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
        }),
    r =
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var i,
                r = arguments.length,
                a = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else
                for (var s = t.length - 1; 0 <= s; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : 3 < r ? i(e, o, a) : i(e, o)) || a);
            return 3 < r && a && Object.defineProperty(e, o, a), a;
        };
Object.defineProperty(o, "__esModule", {value: !0});
var a,
    s = t("ResMgr"),
    l = t("SkillItem"),
    c = t("HeroController"),
    u = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(p, a),
        (p.prototype.onEnable = function () {
            var t = this;
            this.scheduleOnce(function () {
                (c.HeroController.canAddExp = !0), u.default.inst.gameResume(), s.default.inst.putNodeToPool(t.node);
            }, 1);
        }),
        (p.prototype.setData = function (t) {
            if (
                (this.skills.forEach(function (t) {
                    t.node.active = !1;
                }),
                1 == t.length)
            )
                (this.skills[1].node.active = !0), this.skills[1].setData(t[0]);
            else
                for (var e = 0, o = Math.min(t.length, 3); e < o; e++)
                    (this.skills[e].node.active = !0), this.skills[e].setData(t[e]);
        }),
        r([e([l.default])], p.prototype, "skills", void 0),
        r([t], p));
function p() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.skills = []), t;
}
o.default = t;
