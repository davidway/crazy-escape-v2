var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.parseJson = function (t, e) {
    var o,
        n = e.evolveConf;
    for (o in n)
        this._list.set(n[o].id, n[o]),
            1 == n[o].group
                ? (this.normalList.push(n[o]), (this.normalStart = Math.min(this.normalStart, n[o].id)))
                : (this.specialList.push(n[o]), (this.specialStart = Math.min(this.specialStart, n[o].id)));
}),
    (n.prototype.getNormalList = function () {
        return this.normalList;
    }),
    (n.prototype.getSpecialList = function () {
        return this.specialList;
    }),
    (n.prototype.getEvolveConfVo = function (t) {
        return this._list.get(t);
    }),
    (e = n);
function n() {
    (this._list = new Map()),
        (this.normalList = []),
        (this.specialList = []),
        (this.normalStart = Number.MAX_SAFE_INTEGER),
        (this.specialStart = Number.MAX_SAFE_INTEGER);
}
o.default = e;
