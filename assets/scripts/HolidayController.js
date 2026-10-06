var t = require;
var e = module;
var o = exports;
var n,
    i =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                })(t, e);
        }),
        function (t, e) {
            function o() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((o.prototype = e.prototype), new o()));
        });
Object.defineProperty(o, "__esModule", {value: !0});
var r,
    a = t("App"),
    e = t("Singleton"),
    s = t("ArrayUtil"),
    l = t("EventTypes"),
    c = t("UIEnum"),
    u = t("ConfData"),
    p = t("HolidayType"),
    h = t("PropType"),
    d = t("Activity51Controller"),
    f = t("GoodsDataController"),
    i =
        ((r = e.Singleton()),
        i(y, r),
        Object.defineProperty(y.prototype, "activityID", {
            get: function () {
                return this._activityID;
            },
            enumerable: !1,
            configurable: !0
        }),
        (y.prototype.init = function () {
            var t = new Date(),
                t = new Date(t.getFullYear(), t.getMonth(), t.getDate());
            (this.next_day_utc = t.getTime() + this.millisecond),
                this.refreshHolidayActivity(),
                a.app.timer.on(this, this.onTimeHandler, 10);
        }),
        (y.prototype.getShowHd = function (t) {
            void 0 === t && (t = y.inst.activityID);
            var e = !1;
            if (t === p.HolidayType.SmashingDragonEggs)
                if (2 == y.inst.holidayStatus(t))
                    for (
                        var o = d.default.inst.getStorageData(),
                            n = f.default.inst.getGoodsNumByID(h.PropType.Hammer),
                            i = 0;
                        i < o.already.length;
                        i++
                    )
                        if (0 == o.already[i] && n >= d.default.inst.getLoongEggData(i + 1).count) {
                            e = !0;
                            break;
                        }
            return e;
        }),
        (y.prototype.getOpenTime = function (t) {
            return (t = void 0 === t ? y.inst.activityID : t) !== p.HolidayType.SmashingDragonEggs
                ? (console.warn("没有设置等待时间！"), 0)
                : d.default.inst.openTime;
        }),
        (y.prototype.getActivityView = function (t) {
            return (t = void 0 === t ? y.inst.activityID : t) !== p.HolidayType.SmashingDragonEggs
                ? (console.error("没有对应的活动页面！"), c.UIEnum.none)
                : c.UIEnum.Activity51View;
        }),
        (y.prototype.onTimeHandler = function () {
            Date.now() > this.next_day_utc &&
                ((this.next_day_utc += this.millisecond),
                this.refreshHolidayActivity(),
                a.app.event.emit(l.EventType.On_New_Date),
                a.app.event.emit(l.EventType.Battle_Activity_Change));
        }),
        (y.prototype.dawnRefresh = function (t) {
            console.log("凌晨刷新"),
                t === p.HolidayType.SmashingDragonEggs
                    ? (d.default.inst.dawnRefresh(), (this._isRefreshData = !0))
                    : ((this._isRefreshData = !1), console.warn("没有需要刷新的活动"));
        }),
        (y.prototype.isRefresh = function (t) {
            var e = !1;
            return (
                (t = void 0 === t ? y.inst.activityID : t) === p.HolidayType.SmashingDragonEggs
                    ? (e = this._isRefreshData)
                    : console.warn("没有需要刷新的活动"),
                e
            );
        }),
        (y.prototype.refreshHolidayActivity = function () {
            this.activitys.length = 0;
            for (var t, e = 1; e < p.HolidayType.Max; e++)
                this.holidayIsOpen(e) &&
                    (this.dawnRefresh(e),
                    (t = u.default.inst.holidayConf.getHolidayByType(e)) && this.activitys.push(t));
        }),
        (y.prototype.getNow = function () {
            return Math.floor(0.001 * Date.now());
        }),
        (y.prototype.holidayStatus = function (t) {
            var e = u.default.inst.holidayConf.getHolidayByType(t);
            if (!e) return 0;
            var o = this.getNow();
            return o >= e.end
                ? 3
                : o >= e.start
                ? ((this._activityID = t), 2)
                : 0 < e.pre_start && o >= e.pre_start
                ? ((this._activityID = t), 1)
                : 0;
        }),
        (y.prototype.holidayIsOpen = function (t) {
            return 2 == this.holidayStatus(t);
        }),
        (y.prototype.getDropActivity = function () {
            if (0 == this.activitys.length) return null;
            s.default.shuffle(this.activitys);
            for (var t = 0; t < this.activitys.length; t++) {
                var e = this.activitys[t];
                if (0 < e.goods_id) return e;
            }
            return null;
        }),
        y);
function y() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t.activitys = []),
        (t._activityID = null),
        (t.next_day_utc = 0),
        (t._isRefreshData = !1),
        (t.dropNum = 0),
        (t.millisecond = 864e5),
        t
    );
}
o.default = i;
