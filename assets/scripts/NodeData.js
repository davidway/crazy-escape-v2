var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.prototype.getDistance = function (t, e) {
    var o = t.x - e.x,
        e = t.y - e.y;
    return Math.sqrt(o * o + e * e);
}),
    (n.prototype.getAngle = function (t, e) {
        var o = (180 * Math.atan((e.y - t.y) / (e.x - t.x))) / Math.PI;
        return t.x > e.x && (o += 180), o;
    }),
    (n.prototype.worldConvertLocalPointAR = function (t, e) {
        return t ? t.convertToNodeSpaceAR(e) : (console.error("世界坐标转换失败，数据为空！"), null);
    }),
    (n.prototype.nodeConvertLocalPointAR = function (t, e) {
        if (t && e) {
            t = t.parent.convertToWorldSpaceAR(t.getPosition());
            return this.worldConvertLocalPointAR(e, t);
        }
        return console.error("节点坐标转换失败，数据为空！"), cc.v2(0, 0);
    }),
    (n.prototype.getCoordinate = function (t, e, o) {
        void 0 === o && (o = cc.v2(0, 0));
        var n = cc.v2(0, 0);
        return (n.x = Math.cos((Math.PI / 180) * t) * e + o.x), (n.y = Math.sin((Math.PI / 180) * t) * e + o.y), n;
    }),
    (n.inst = new n()),
    (e = n);
function n() {}
o.default = e;
