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
Object.defineProperty(o, "__esModule", {value: !0}), (o.loongEgg = void 0);
var r,
    a = t("App"),
    e = t("Singleton"),
    s = t("ArrayUtil"),
    l = t("EventTypes"),
    c = t("ConfData"),
    u = t("GameSetting"),
    p = t("PropType"),
    h = t("GoodsDataController"),
    d = t("HolidayController"),
    i =
        ((r = e.Singleton()),
        i(f, r),
        Object.defineProperty(f.prototype, "completeRefresh", {
            get: function () {
                return this._completeRefresh;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "openTime", {
            get: function () {
                return this._openTime;
            },
            set: function (t) {
                this._openTime = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "residue", {
            get: function () {
                return this._residue;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "isClick", {
            get: function () {
                return this._isClick;
            },
            set: function (t) {
                this._isClick = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "LoongEggNum", {
            get: function () {
                return this._LoongEggNum;
            },
            enumerable: !1,
            configurable: !0
        }),
        (f.prototype.initData = function () {
            var e = this,
                t = d.default.inst.holidayStatus(this.ActivityId);
            2 == t
                ? 0 == this._LoongEggNum &&
                  (console.warn("初始化数据"),
                  c.default.inst.holidayConf.Activity51.forEach(function (t) {
                      e._LoongEggNum++, e._Activity51.set(t.id, t);
                  }),
                  (this._LoongEggData = this.getStorageData()))
                : 3 == t &&
                  ((t = h.default.inst.getGoodsNumByID(this.getPropType())),
                  h.default.inst.addGoods(this.getPropType(), -t),
                  c.default.inst.holidayConf.Activity51.forEach(function () {
                      e._LoongEggNum++;
                  }),
                  (this._LoongEggData = this.refreshData()),
                  this.setStorageData(this._LoongEggData)),
                console.log(this._LoongEggNum),
                (this._completeRefresh = 1 == u.GameSetting.inst.complete_refresh);
        }),
        (f.prototype.dawnRefresh = function () {
            0 == this._LoongEggNum ? this.initData() : (this._LoongEggData = this.getStorageData()),
                this.setStorageData(this._LoongEggData),
                this.LoongEggFun && this.LoongEggFun();
        }),
        (f.prototype.getPropType = function () {
            return p.PropType.Hammer;
        }),
        (f.prototype.getLoongEggData = function (t) {
            return 0 == this._LoongEggNum && this.initData(), this._Activity51.get(t);
        }),
        (f.prototype.refreshData = function () {
            var t = new Date(),
                e = {already: [], date: t.getFullYear() + "" + t.getMonth() + t.getDate()};
            this._residue = this._LoongEggNum;
            for (var o = 0; o < this._LoongEggNum; o++) e.already[o] = 0;
            return e;
        }),
        (f.prototype.addReward = function (t) {
            h.default.inst.useGoodsNumByID(p.PropType.Hammer, t.count), this._residue--;
            var e = !1;
            console.log(this._residue),
                (this._LoongEggData.already[t.id - 1] = 1),
                0 == this._residue && this._completeRefresh && ((this._LoongEggData = this.refreshData()), (e = !0)),
                this.setStorageData(this._LoongEggData);
            var o = [],
                n = s.default.shuffle(t.rewardIDs);
            console.log(n), o.push(n[0]);
            o = c.default.inst.PrizeConf.getRewardData(o);
            t.certain &&
                0 < t.certain.length &&
                ((t = c.default.inst.PrizeConf.getRewardData(t.certain)), o.push.apply(o, t)),
                c.default.inst.PrizeConf.addReward(o, !1, 0, 4),
                (this._isClick = !1),
                e && a.app.event.emit(l.EventType.Activity51_Page),
                a.app.event.emit(l.EventType.Activity51_ShowData_Page),
                a.app.event.emit(l.EventType.Battle_Activity_Change);
        }),
        (f.prototype.getStorageData = function () {
            var e = this,
                t = a.app.local.getValue("LoongEggData");
            t || ((t = this.refreshData()), this.setStorageData(t));
            var o = new Date(),
                o = o.getFullYear() + "" + o.getMonth() + o.getDate();
            if (t.date != o) {
                (t.date = o), (this._residue = this._LoongEggNum);
                for (var n = 0; n < this._LoongEggNum; n++) t.already[n] = 0;
            } else
                (this._residue = 0),
                    t.already.forEach(function (t) {
                        0 == t && e._residue++;
                    });
            return t;
        }),
        (f.prototype.setStorageData = function (t) {
            a.app.local.setValue("LoongEggData", t);
        }),
        (f.prototype.refresh = function () {
            (this._LoongEggData = this.refreshData()), this.setStorageData(this._LoongEggData);
        }),
        f);
function f() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t._Activity51 = new Map()),
        (t._LoongEggData = null),
        (t.ActivityId = 1),
        (t._LoongEggNum = 0),
        (t._isClick = !1),
        (t._residue = 0),
        (t.LoongEggFun = null),
        (t._completeRefresh = !1),
        (t._openTime = 0.8),
        t
    );
}
(o.default = i), ((o = o.loongEgg || (o.loongEgg = {}))[(o.ordinary = 1)] = "ordinary"), (o[(o.senior = 2)] = "senior");
