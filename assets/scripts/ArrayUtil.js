var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var r = t("MathUtil"),
    t =
        ((n.shuffle = function (t) {
            if (null == t || 0 == t.length) return t;
            for (var e = t.length, o = 0; o < e; o++) {
                var n = r.default.randomRangeInt(0, e),
                    i = t[o];
                (t[o] = t[n]), (t[n] = i);
            }
            return t;
        }),
        (n.clone = function (t) {
            var e = [];
            return (
                t.forEach(function (t) {
                    e.push(t);
                }),
                e
            );
        }),
        (n.isEmpty = function (t) {
            return !t || 0 == t.length;
        }),
        (n.splice = function (t, e) {
            t && 0 < t.length && t.includes(e) && ((e = t.indexOf(e)), t.splice(e, 1));
        }),
        (n.deepClone = function (t) {
            t = JSON.stringify(t);
            return JSON.parse(t);
        }),
        n);
function n() {}
o.default = t;
