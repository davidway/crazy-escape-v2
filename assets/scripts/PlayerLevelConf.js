var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.parseJson = function (t, e) {
    var o,
        n = e.playerLevelConf;
    for (o in n) this._levels.set(n[o].level, n[o]);
}),
    (n.prototype.getPlayerLevelVo = function (t) {
        return this._levels.get(t);
    }),
    (e = n);
function n() {
    this._levels = new Map();
}
o.default = e;
