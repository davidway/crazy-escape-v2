var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.parseJson = function (t, e) {
    var o,
        n = e.constConf;
    for (o in n) this._map.set(n[o].key, n[o].value);
}),
    (n.prototype.getValue = function (t) {
        return this._map.get(t);
    }),
    (e = n);
function n() {
    this._map = new Map();
}
o.default = e;
