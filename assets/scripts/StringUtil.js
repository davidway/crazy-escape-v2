var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.filterStr = function (t) {
    for (
        var e = new RegExp("[`~!@#$^&*()=|{}':;',[].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]"), o = "", n = 0;
        n < t.length;
        n++
    )
        o += t.substr(n, 1).replace(e, "");
    return o;
}),
    (n.trimSpace = function (t) {
        return t.replace(/^\s*(.*?)[\s\n]*$/g, "$1");
    }),
    (n.getLength = function (t) {
        for (var e, o = t.split(""), n = 0, i = 0, r = o.length; i < r; i++)
            (e = o[i]), this.isChinese(e) ? (n += 2) : (n += 1);
        return n;
    }),
    (n.isChinese = function (t) {
        return /^.*[\u4E00-\u9FA5]+.*$/.test(t);
    }),
    (n.stringToCode16 = function (t) {
        for (var e = t.length, o = "", n = 0; n < e; n++) o += ";" + t.charCodeAt(n).toString(16);
        return o;
    }),
    (n.code16ToString = function (t) {
        for (var e, o, n = "", i = t.split(";"), r = 0, a = i.length; r < a; r++) {
            (e = 0), (o = i[r]).length < 4 && (e = 4 - o.length);
            for (var s = 0; s < e; s++) o = "0" + o;
            n += "\\u" + o;
        }
        return n;
    }),
    (n.cutOutStr = function (t, e) {
        for (var o, n, i = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, r = 0, a = 0, s = 0; s < t.length; s++) {
            if (
                ((o = r),
                (n = a),
                2 < t.charCodeAt(s).toString(16).length ? (r += 2) : (r += 1),
                ++a,
                i.test(t.substr(s, 2)) && (++s, ++a),
                e < r)
            ) {
                (a = n), (r = o);
                break;
            }
            if (r == e) break;
        }
        var l = t.substr(0, a);
        return a < t.length && (l += "..."), l;
    }),
    (e = n);
function n() {}
o.default = e;
