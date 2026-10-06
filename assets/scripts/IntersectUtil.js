var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.judgeLineIntersect = function (t, e, o, n) {
    return (
        Math.min(t.x, e.x) <= Math.max(o.x, n.x) &&
        Math.min(o.y, n.y) <= Math.max(t.y, e.y) &&
        Math.min(o.x, n.x) <= Math.max(t.x, e.x) &&
        Math.min(t.y, e.y) <= Math.max(o.y, n.y) &&
        ((i = (o.x - t.x) * (e.y - t.y) - (e.x - t.x) * (o.y - t.y)),
        (r = (n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)),
        (t = (t.x - o.x) * (n.y - o.y) - (n.x - o.x) * (t.y - o.y)),
        (o = (e.x - o.x) * (n.y - o.y) - (n.x - o.x) * (e.y - o.y)),
        i * r <= 1e-8 && t * o <= 1e-8)
    );
    var i, r;
}),
    (n.segmentsIntr = function (t, e, o, n) {
        if (!this.judgeLineIntersect(t, e, o, n)) return null;
        var i = (t.x - o.x) * (e.y - o.y) - (t.y - o.y) * (e.x - o.x),
            r = (t.x - n.x) * (e.y - n.y) - (t.y - n.y) * (e.x - n.x);
        if (0 <= i * r) return null;
        n = (o.x - t.x) * (n.y - t.y) - (o.y - t.y) * (n.x - t.x);
        if (0 <= n * (n + i - r)) return null;
        (r = n / (r - i)), (i = r * (e.x - t.x)), (e = r * (e.y - t.y));
        return cc.v3(t.x + i, t.y + e);
    }),
    (e = n);
function n() {}
o.default = e;
