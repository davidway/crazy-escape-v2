var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var s = t("ArrayUtil"),
    t =
        ((r.randomRangeInt = function (t, e) {
            var o = Math.random();
            return t + Math.floor(o * (e - t));
        }),
        (r.randomRangeFloat = function (t, e) {
            return t + Math.random() * (e - t);
        }),
        (r.randomArray = function (t) {
            return t[0 | this.randomRangeInt(0, t.length)];
        }),
        (r.RandomIntBoth = function (t, e, o) {
            if ((t = Math.floor(t)) >= (e = Math.floor(e)) || e - t < o || 0 == o)
                return console.error("min > max ||  max - min < num || num == 0"), null;
            for (var n = [], i = t; i < e; i++) n.push(i);
            s.default.shuffle(n);
            for (var r = Math.min(n.length, o), a = [], i = 0; i < r; i++) a.push(n.shift());
            return a;
        }),
        (r.getAngle = function (t) {
            return (180 * t) / Math.PI;
        }),
        (r.getRadian = function (t) {
            return (t / 180) * Math.PI;
        }),
        (r.getRadianTwoPoint = function (t, e) {
            var o = e.x - t.x,
                t = e.y - t.y;
            return Math.atan2(t, o);
        }),
        (r.getAngleTwoPoint = function (t, e) {
            var o,
                n = e.y - t.y,
                t = e.x - t.x;
            return 0 == n
                ? t < 0
                    ? 180
                    : 0
                : (0 == t
                      ? 0 < n
                          ? (o = 90)
                          : n < 0 && (o = 270)
                      : ((o = this.getAngle(Math.atan(Math.abs(n) / Math.abs(t)))),
                        0 < t ? n < 0 && (o = 360 - o) : (o = 0 < n ? 180 - o : 180 + o)),
                  o);
        }),
        (r.getDistance = function (t, e) {
            if (!t || !e) return 1e4;
            var o = e.x - t.x,
                t = e.y - t.y,
                t = Math.pow(o, 2) + Math.pow(t, 2);
            return Math.sqrt(t);
        }),
        (r.getDistanceSq = function (t, e) {
            if (!t || !e) return 0;
            var o = e.x - t.x,
                t = e.y - t.y;
            return Math.pow(o, 2) + Math.pow(t, 2);
        }),
        (r.exactCount = function (t, e) {
            void 0 === e && (e = 0);
            e = Math.pow(10, e);
            return ((t * e) | 0) / e;
        }),
        (r.getBezierCutAngle = function (t, e, o, n) {
            var i = 2 * (t.x * (n - 1) + e.x * (1 - 2 * n) + o.x * n),
                n = 2 * (t.y * (n - 1) + e.y * (1 - 2 * n) + o.y * n);
            return this.getAngle(Math.atan2(n, i));
        }),
        (r.getBezierPoint = function (t, e, o, n, i) {
            return (
                ((i = (i = void 0 === i ? null : i) || new cc.Vec2()).x =
                    (1 - n) * (1 - n) * t.x + 2 * n * (1 - n) * e.x + n * n * o.x),
                (i.y = (1 - n) * (1 - n) * t.y + 2 * n * (1 - n) * e.y + n * n * o.y),
                i
            );
        }),
        (r.getBezier3Point = function (t, e, o, n, i, r) {
            r = (r = void 0 === r ? null : r) || new cc.Vec2();
            var a = 3 * (e.x - t.x),
                s = 3 * (o.x - e.x) - a,
                l = n.x - t.x - a - s,
                c = 3 * (e.y - t.y),
                e = 3 * (o.y - e.y) - c,
                n = n.y - t.y - c - e;
            return (r.x = l * i * i * i + s * i * i + a * i + t.x), (r.y = n * i * i * i + e * i * i + c * i + t.y), r;
        }),
        (r.getBezier3CutAngle = function (t, e, o, n, i) {
            var r =
                    3 * t.x * (1 - i) * (1 - i) * -1 +
                    3 * e.x * ((1 - i) * (1 - i) + 2 * i * (1 - i) * -1) +
                    3 * o.x * (2 * i * (1 - i) + i * i * -1) +
                    3 * n.x * i * i,
                i =
                    3 * t.y * (1 - i) * (1 - i) * -1 +
                    3 * e.y * ((1 - i) * (1 - i) + 2 * i * (1 - i) * -1) +
                    3 * o.y * (2 * i * (1 - i) + i * i * -1) +
                    3 * n.y * i * i;
            return this.getAngle(Math.atan2(i, r));
        }),
        (r.randomString = function (t) {
            for (var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", o = e.length, n = "", i = 0; i < t; i++)
                n += e.charAt(Math.floor(Math.random() * o));
            return n;
        }),
        (r.isInRange = function (t, e, o) {
            return t <= o && o <= e;
        }),
        (r.rotatePoint = function (t, e, o, n) {
            if ((void 0 === o && (o = cc.v3()), 0 == e)) return t;
            var i = r.getRadian(e),
                e = (t.x - o.x) * Math.cos(i) - (t.y - o.y) * Math.sin(i) + o.x,
                o = (t.x - o.x) * Math.sin(i) + (t.y - o.y) * Math.cos(i) + o.y;
            return n ? ((n.x = e), (n.y = o), n) : cc.v3(e, o);
        }),
        (r.copyObj = function (t) {
            return JSON.parse(JSON.stringify(t));
        }),
        (r.copy = function (t, e) {
            (t.x = e.x), (t.y = e.y);
        }),
        (r.pointInCircle = function (t, e, o) {
            if (0 === o) return !1;
            var n = e.x - t.x,
                t = e.y - t.y;
            return n * n + t * t <= o * o;
        }),
        (r.pointInRect = function (t, e) {
            return !(t.x <= e.left || t.x >= e.right || t.y <= e.bottom || t.y >= e.top);
        }),
        (r.merger = function () {
            for (var i = this, t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (0 == t.length) return null;
            if (1 == t.length) return t[0];
            for (var o = {}, n = 0; n < t.length; n++)
                !(function (t, e) {
                    for (var o in e) {
                        var n = Object.prototype.toString.call(e[o]);
                        t[o] = "[object Object]" == n ? i.merger(t[o], e[o]) : e[o];
                    }
                })(o, t[n]);
            return o;
        }),
        r);
function r() {}
o.default = t;
