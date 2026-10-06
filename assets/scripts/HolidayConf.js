var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var u = t("GameSetting"),
    t =
        (Object.defineProperty(n.prototype, "Activity51", {
            get: function () {
                return this.activity51;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "holidayNum", {
            get: function () {
                return this._holidayNum;
            },
            enumerable: !1,
            configurable: !0
        }),
        (n.prototype.parseJson = function (t, e) {
            for (var o = 0, n = e.holidayConf; o < n.length; o++) {
                var i = n[o];
                this.holidays.set(i.type, i), (this[i.activityID] = e[i.activityID]), this._holidayNum.push(i.type);
            }
            var r = u.GameSetting.inst.holiday_details;
            if ("[object Array]" === Object.prototype.toString.call(r) && 0 < r.length)
                for (var a = 0, s = r; a < s.length; a++) {
                    var i = s[a],
                        l = this.getHolidayByType(i.type);
                    if (l) for (var c in l) void 0 !== i[c] && (l[c] = i[c]);
                }
            console.log("[HolidayConf]-->[line:20]:", this.holidays, r, Object.prototype.toString.call(r));
        }),
        (n.prototype.getHolidayByType = function (t) {
            return this.holidays.has(t) || console.warn("找不到活动", t), this.holidays.get(t);
        }),
        n);
function n() {
    (this.holidays = new Map()), (this._holidayNum = []), (this.activity51 = []);
}
o.default = t;
