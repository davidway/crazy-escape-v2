var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.compareWeek = function (t, e) {
    var o = new Date(t);
    o.setDate(o.getDate() - o.getDay() + 1);
    t = new Date(o.getFullYear(), o.getMonth(), o.getDate());
    o.setDate(o.getDate() + 7);
    o = new Date(o.getFullYear(), o.getMonth(), o.getDate());
    return e >= t.getTime() && e < o.getTime();
}),
    (n.timeFormat = function (t) {
        var e,
            o = (
                "0" +
                ((e =
                    0 < (t = void 0 === t ? 0 : t)
                        ? new Date(new Date().getTime() + 864e5 * t)
                        : new Date(Number(new Date()) - 864e5 * t)).getMonth() +
                    1)
            ).slice(-2),
            n = ("0" + e.getDate()).slice(-2),
            i = ("0" + e.getHours()).slice(-2),
            r = ("0" + e.getMinutes()).slice(-2),
            t = ("0" + e.getSeconds()).slice(-2);
        return e.getFullYear() + "/" + o + "/" + n + " " + i + ":" + r + ":" + t;
    }),
    (n.secondFormat = function (t) {
        var e = Math.floor(t),
            o = 0,
            t = 0;
        return (
            60 < e &&
                ((o = Math.floor(e / 60)),
                (e = Math.floor(e % 60)),
                60 <= o && ((t = Math.floor(o / 60)), (o = Math.floor(o % 60)))),
            {hour: t, minute: o, second: e}
        );
    }),
    (n.secondFormat2 = function (t) {
        t = Math.round(t);
        t = this.secondFormat(t);
        return 24 < t.hour
            ? Math.floor(t.hour / 24) + "天" + (t.hour % 24) + "时"
            : 0 < t.hour
            ? t.hour + "时" + t.minute + "分"
            : 0 < t.minute
            ? t.minute + "分" + t.second + "秒"
            : t.second + "秒";
    }),
    (n.secondFormat3 = function (t) {
        t = Math.round(t);
        t = this.secondFormat(t);
        return (
            0 < t.hour && (t.hour, t.hour, t.minute, t.minute),
            (9 < t.minute ? t.minute : "0" + t.minute) + ":" + (9 < t.second ? t.second : "0" + t.second)
        );
    }),
    (n.getSecond = function (t, e) {
        return (Number(new Date(t)) - Number(new Date(e))) / 1e3;
    }),
    (n.getDays = function (t, e) {
        var o = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
            n = new Date(e.getFullYear(), e.getMonth(), e.getDate());
        return console.log("[DateUtil]-->[line:138]:", t, o, e, n), Math.floor((o.getTime() - n.getTime()) / 864e5);
    }),
    (n.compareVersion = function (t, e) {
        (t = t.split(".")), (e = e.split("."));
        for (var o = Math.max(t.length, e.length); t.length < o; ) t.push("0");
        for (; e.length < o; ) e.push("0");
        for (var n = 0; n < o; n++) {
            var i = parseInt(t[n]),
                r = parseInt(e[n]);
            if (r < i) return 1;
            if (i < r) return -1;
        }
        return 0;
    }),
    (n.compare = function (t, e) {
        var o = new Date(t),
            n = new Date(e);
        return (
            console.log("compare", o, n),
            o.getFullYear() != n.getFullYear() || o.getMonth() != n.getMonth() || o.getDate() != n.getDate()
                ? e < t
                    ? -1
                    : 1
                : 0
        );
    }),
    (e = n);
function n() {}
o.default = e;
