var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
/**
 * Purple (quality 4) secondary affix pool — Phase3.
 * Small stats only; no legendary-rule affixes (wayfinder ticket 11/12).
 */
var n = [
    {id: "crit_s", attr: "critRate", value: 0.02, name: "小暴击 +2%"},
    {id: "area_s", attr: "areaRate", value: 0.04, name: "小范围 +4%"},
    {id: "gold_s", attr: "goldRate", value: 0.05, name: "小金币 +5%"},
    {id: "speed_s", attr: "heroSpeedRate", value: 0.03, name: "小移速 +3%"},
    {id: "pickup_s", attr: "pickupRate", value: 0.05, name: "拾取范围 +5%"},
    {id: "crit_hurt_s", attr: "critHurtRate", value: 0.05, name: "小暴伤 +5%"}
];
(o.AFFIX_POOL = n),
    (o.getById = function (t) {
        if (!t) return null;
        for (var e = 0; e < n.length; e++) if (n[e].id === t) return n[e];
        return null;
    }),
    (o.roll = function (t) {
        void 0 === t && (t = null);
        for (var e = [], o = 0; o < n.length; o++) n[o].id !== t && e.push(n[o]);
        if (!e.length) e = n.slice();
        return e[Math.floor(Math.random() * e.length)];
    });
