var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(r.absSq = function (t) {
    return t.multiply(t);
}),
    (r.normalize = function (t) {
        return t.scale(1 / r.abs(t));
    }),
    (r.distSqPointLineSegment = function (t, e, o) {
        var n = o.minus(t),
            i = e.minus(t),
            e = n.multiply(i) / r.absSq(i);
        return r.absSq(e < 0 ? n : 1 < e ? i : o.minus(t.plus(i.scale(e))));
    }),
    (r.sqr = function (t) {
        return t * t;
    }),
    (r.det = function (t, e) {
        return t.x * e.y - t.y * e.x;
    }),
    (r.abs = function (t) {
        return Math.sqrt(r.absSq(t));
    }),
    (r.leftOf = function (t, e, o) {
        return r.det(t.minus(o), e.minus(t));
    }),
    (r.RVO_EPSILON = 2),
    (e = r);
function r() {}
o.default = e;
