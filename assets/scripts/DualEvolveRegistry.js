var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var n = t("EquipController"),
    i = t("UserDataController"),
    r = {
        12: {a: 1012, b: 2012, weapon: 1, name_a: "幽灵匕首", name_b: "分裂飞刀"},
        9: {a: 1009, b: 2009, weapon: 2, name_a: "混沌双剑", name_b: "处决大剑"},
        10: {a: 1010, b: 2010, weapon: 8, name_a: "魔法巨弩", name_b: "连弩风暴"},
        16: {a: 1016, b: 2016, weapon: 14, name_a: "黄金旋转镖", name_b: "锯刃回旋"}
    },
    a = {};
for (var s in r) a[r[s].a] = +s, a[r[s].b] = +s;
(o.ROUTES = r),
    (o.getRoute = function (t) {
        return r[t] || null;
    }),
    (o.getBaseSkillId = function (t) {
        return a[t] || 0;
    }),
    (o.isDualEvolveSkill = function (t) {
        return !!a[t];
    }),
    (o.isRouteB = function (t) {
        var e = a[t];
        return !!e && r[e].b == t;
    }),
    (o.canOfferRouteB = function (t) {
        var e = r[t];
        return (
            !!e &&
            i.default.inst.hasBranchAwakening() &&
            n.EquipController.inst.getMainSkillId() == t
        );
    }),
    (o.getEligibleEvolveIds = function (t, e, o) {
        void 0 === o && (o = null);
        var n = o || (e && e.top_id ? [e.top_id] : []);
        if (!e) return [];
        if (e.relation && 0 < e.relation.length) {
            for (var i = !1, a = 0; a < e.relation.length; a++)
                if (t.has(e.relation[a])) {
                    i = !0;
                    break;
                }
            if (!i) return [];
        }
        var s = r[e.id];
        if (!s) return e.top_id ? [e.top_id] : n.filter(Boolean);
        var l = [];
        return s.a && l.push(s.a), this.canOfferRouteB(e.id) && l.push(s.b), l;
    }),
    (o.getAllBranchIds = function () {
        for (var t = [], e = Object.keys(r), o = 0; o < e.length; o++) t.push(r[e[o]].a), t.push(r[e[o]].b);
        return t;
    });
