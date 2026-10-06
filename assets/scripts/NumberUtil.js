var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.format = function (t) {
    var e = (t = -1 != (t + "").indexOf("e+") ? this.convertNum(t + "") : Math.floor(t) + "") + "";
    if (e.length <= 3) return e;
    var o = Math.floor((e.length - 1) / 3),
        n = [
            "",
            "K",
            "M",
            "B",
            "T",
            "aa",
            "bb",
            "cc",
            "dd",
            "ee",
            "ff",
            "gg",
            "hh",
            "ii",
            "jj",
            "kk",
            "ll",
            "mm",
            "nn",
            "oo",
            "pp",
            "qq",
            "rr",
            "ss",
            "tt",
            "uu",
            "vv",
            "ww",
            "xx",
            "yy",
            "zz"
        ][o],
        t = 3 * o,
        o = parseInt(e.substring(0, e.length - t));
    return 0 == parseInt(e.substr(e.length - t, 2))
        ? o + n
        : e.substring(0, e.length - t) + "." + e.substr(e.length - t, 2) + n;
}),
    (n.convertNum = function (t) {
        var t = t.split("e+"),
            e = t[0].split(".").join(""),
            o = parseInt(t[1]) + 1 - e.length;
        if (0 < o) for (var n = 0; n < o; n++) e += "0";
        return e;
    }),
    (e = n);
function n() {}
o.default = e;
