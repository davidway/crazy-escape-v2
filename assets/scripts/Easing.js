var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.sineOut = function (t) {
    return Math.sin((t * Math.PI) / 2);
}),
    (n.sineIn = function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
    }),
    (n.sineInOut = function (t) {
        return 0.5 * (1 - Math.cos(Math.PI * t));
    }),
    (n.quadOut = function (t) {
        return t * (2 - t);
    }),
    (e = n);
function n() {}
o.default = e;
