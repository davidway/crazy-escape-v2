var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.parseJson = function (t, e) {
    var o,
        n = e.userLevelConf;
    for (o in n)
        this._levels.set(n[o].level, n[o]),
            (this._maxLevel = Math.max(this._maxLevel, n[o].level)),
            (this._maxExp = Math.max(this._maxExp, n[o].totalExp));
}),
    (n.prototype.getUserLevelVo = function (t) {
        return this._levels.get(t);
    }),
    Object.defineProperty(n.prototype, "maxLevel", {
        get: function () {
            return this._maxLevel;
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(n.prototype, "maxExp", {
        get: function () {
            return this._maxExp;
        },
        enumerable: !1,
        configurable: !0
    }),
    (e = n);
function n() {
    (this._levels = new Map()), (this._maxLevel = 0), (this._maxExp = 0);
}
o.default = e;
