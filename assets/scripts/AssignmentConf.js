var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.DayAssign = void 0);
var d,
    e =
        (Object.defineProperty(n.prototype, "allDay", {
            get: function () {
                return this._allDay;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "maxProg", {
            get: function () {
                return this._maxProg;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "equip_grade", {
            get: function () {
                return this._equip_grade;
            },
            enumerable: !1,
            configurable: !0
        }),
        (n.prototype.parseJson = function (t, e) {
            var o = this,
                n = e.assign;
            (this._allAssigns = n).forEach(function (t) {
                (o._maxProg = t.quantity), o._assigns.set(t.id, t);
            });
            var i = e.role_grade,
                r = e.evolution,
                a = e.equip_use,
                s = e.equip_grade,
                l = e.equip_compose,
                c = e.kill_monster,
                u = e.kill_boss;
            this._eachAssigns.set(d.role_grade, i),
                this._eachAssigns.set(d.evolution, r),
                this._eachAssigns.set(d.equip_use, a),
                this._eachAssigns.set(d.equip_grade, s),
                this._eachAssigns.set(d.equip_compose, l),
                this._eachAssigns.set(d.kill_monster, c),
                this._eachAssigns.set(d.kill_boss, u);
            (n = s[0].describe), (e = n.indexOf("级"));
            this._equip_grade = parseInt(n.slice(e - 1, e)) - 1;
            for (var p = 0; p < 7; p++) {
                this._allDay++;
                var h = new Map();
                i[p] && h.set(0, i[p]),
                    r[p] && h.set(1, r[p]),
                    a[p] && h.set(2, a[p]),
                    s[p] && h.set(3, s[p]),
                    l[p] && h.set(4, l[p]),
                    c[p] && h.set(5, c[p]),
                    u[p] && h.set(6, u[p]),
                    this._SevenDaysAssigns.set(p + 1, h);
            }
            console.log("[AssignmentConf]-->[line:145]:", this._SevenDaysAssigns, this._assigns);
        }),
        (n.prototype.getEachAssigns = function (t) {
            return this._eachAssigns.get(t);
        }),
        (n.prototype.getDayAssign = function (t) {
            return this._SevenDaysAssigns.get(t);
        }),
        (n.prototype.getAllAssigns = function () {
            return this._allAssigns;
        }),
        (n.prototype.getAssigns = function (t) {
            return this._assigns.get(t);
        }),
        n);
function n() {
    (this._SevenDaysAssigns = new Map()),
        (this._assigns = new Map()),
        (this._eachAssigns = new Map()),
        (this._equip_grade = 0),
        (this._allAssigns = []),
        (this._allDay = 0),
        (this._maxProg = 0);
}
(o.default = e),
    ((o = d = o.DayAssign || (o.DayAssign = {}))[(o.role_grade = 0)] = "role_grade"),
    (o[(o.evolution = 1)] = "evolution"),
    (o[(o.equip_use = 2)] = "equip_use"),
    (o[(o.equip_grade = 3)] = "equip_grade"),
    (o[(o.equip_compose = 4)] = "equip_compose"),
    (o[(o.kill_monster = 5)] = "kill_monster"),
    (o[(o.kill_boss = 6)] = "kill_boss");
