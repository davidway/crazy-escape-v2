var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.getNodeFromPool = function (t) {
    if (!t) return null;
    var e = t.data.uuid,
        e = this._pools.get(e);
    return 0 == e.length && this.createNode(t, 1), e.pop();
}),
    (n.prototype.putNodeToPool = function (t) {
        var e;
        t && ((e = this._pools.get(t.prefab_uuid)) ? e.push(t) : cc.error("没有找到" + t.name + "的对象池"));
    }),
    (n.prototype.createNode = function (t, e) {
        void 0 === e && (e = 1);
        for (var o = this.getPool(t), n = o.length; n < e; n++) {
            var i = cc.instantiate(t);
            (i.prefab_uuid = t.data.uuid), o.push(i);
        }
        console.warn("Pool createNode:", t.name, t.data.uuid, o.length);
    }),
    (n.prototype.clear = function () {
        this._pools.forEach(function (t) {
            t.length = 0;
        }),
            this._pools.clear();
    }),
    (n.prototype.getPool = function (t) {
        t = t.data.uuid;
        return this._pools.has(t) || this._pools.set(t, []), this._pools.get(t);
    }),
    (e = n);
function n() {
    this._pools = new Map();
}
o.default = e;
