var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
(n.getFon = function () {
    return null == this.ints && (this.ints = new n()), this.ints;
}),
    (n.prototype.getNum = function (t) {
        return t.toString();
    }),
    (n.prototype.change = function (t, e) {
        var n = this;
        if ((void 0 === e && (e = !0), null == t)) return "";
        var i = "",
            r = 0,
            a = !1;
        9999 < t && e && ((t = Math.floor(t / 100)), (a = !0));
        var s = function (t, e) {
            var o;
            void 0 === e && (e = ""),
                t < 10 && "" == e
                    ? (i = n.getNum(t))
                    : 1 <= (o = Math.floor(t / 10))
                    ? ((e = n.getNum(t % 10) + e), a && 0 == r && ((e = "0" != e ? "." + e : ""), r++), s(o, e))
                    : (i = n.getNum(t) + e);
        };
        return s(t, ""), a && (i += "k"), i;
    }),
    (n.prototype.formatDate = function (t) {
        t = new Date(t);
        return (
            t.getFullYear() +
            "/" +
            (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) +
            "/" +
            (t.getDate() < 10 ? "0" + t.getDate() : t.getDate()) +
            "/" +
            (t.getHours() < 10 ? "0" + t.getHours() : t.getHours()) +
            "/" +
            (t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()) +
            "/" +
            (t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds())
        );
    }),
    (n.prototype.getDateTimeStamp = function (t) {
        t = t.split("/");
        return new Date(
            parseInt(t[0]),
            parseInt(t[1]) - 1,
            parseInt(t[2]),
            parseInt(t[3]),
            parseInt(t[4]),
            parseInt(t[5])
        ).getTime();
    }),
    (n.prototype.getMonthDays = function (t) {
        t = new Date((t + "-01").replace(/\-/g, "/").replace(/\./g, "/"));
        return t.setMonth(t.getMonth() + 1), t.setDate(0), t.getDate();
    }),
    (n.prototype.time = function (t) {
        return {
            second: Math.floor(t / 1e3) % 60,
            minute: Math.floor(t / 1e3 / 60) % 60,
            hour: Math.floor(t / 1e3 / 60 / 60)
        };
    }),
    (n.prototype.roll = function (i, t, e, o) {
        void 0 === o && (o = 0.5),
            t != e
                ? cc
                      .tween({a: t})
                      .to(
                          o,
                          {a: e},
                          {
                              progress: function (t, e, o, n) {
                                  i.string = Math.round(t + (e - t) * n) + "";
                              }
                          }
                      )
                      .call(function () {})
                      .start()
                : (i.string = e + "");
    }),
    (n.ints = null),
    (e = n);
function n() {}
o.default = e;
