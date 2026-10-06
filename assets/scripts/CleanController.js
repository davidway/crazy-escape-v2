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
Object.defineProperty(o, "__esModule", {value: !0}), (o.CleanController = void 0);
var r,
    a = t("App"),
    e = t("Singleton"),
    l = t("MathUtil"),
    s = t("EventTypes"),
    c = t("ConfData"),
    u = t("GameSetting"),
    p = t("Prop"),
    i =
        ((r = e.Singleton()),
        i(h, r),
        Object.defineProperty(h.prototype, "cleanData", {
            get: function () {
                return this._cleanData;
            },
            enumerable: !1,
            configurable: !0
        }),
        (h.prototype.initData = function () {
            this._cleanData = this.getStorageData();
        }),
        (h.prototype.getReward = function (t) {
            var e = [],
                o = c.default.inst.chapterConf.getChapterVo(t),
                n = Math.floor(900 * o.settle_coin);
            e.push({type: p.Prop.gold, profit: {num: n}});
            n = Math.floor(900 * o.settle_exp);
            e.push({type: p.Prop.Exp, profit: {num: n}});
            var i = 0;
            if (o.settle_drawings)
                for (var r = 0; r < o.settle_drawings.length; r++) {
                    var a = o.settle_drawings[r];
                    if (900 <= a.time) {
                        if (0 < a.count) for (var s = 0; s < a.variety; s++) i += l.default.randomRangeInt(1, a.count);
                        break;
                    }
                }
            e.push({type: p.Prop.randomDrawing, profit: {num: i, Layout: 3}});
            n = c.default.inst.chapterConf.getEquipDropNum(10);
            return (
                e.push({type: p.Prop.randomEquip, profit: {num: n, EquipType: t % 6 != 0 ? t % 6 : 6, Layout: 3}}), e
            );
        }),
        (h.prototype.addReward = function (t, e) {
            switch (t) {
                case 0:
                    this._cleanData.freeNum--;
                    break;
                case 1:
                    this._cleanData.surplusNum--;
            }
            this.setStorageData(this._cleanData),
                c.default.inst.PrizeConf.addReward(e, !1, 0, 3),
                a.app.event.emit(s.EventType.Battle_Clean_Change);
        }),
        (h.prototype.isNewDay = function () {
            var t = new Date(),
                t = t.getFullYear() + "" + t.getMonth() + t.getDate();
            this._cleanData.date != t && this.refreshData();
        }),
        (h.prototype.refreshData = function () {
            var t = new Date(),
                t = t.getFullYear() + "" + t.getMonth() + t.getDate(),
                t = {surplusNum: u.GameSetting.inst.surplusNum, freeNum: u.GameSetting.inst.freeNum, date: t};
            return (this._cleanData = t), this.setStorageData(t), a.app.event.emit(s.EventType.Battle_Clean_Change), t;
        }),
        (h.prototype.getStorageData = function () {
            return a.app.local.getValue("cleanData") || this.refreshData();
        }),
        (h.prototype.setStorageData = function (t) {
            a.app.local.setValue("cleanData", t);
        }),
        h);
function h() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t._cleanData = null), t;
}
o.CleanController = i;
