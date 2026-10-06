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
    l = t("App"),
    e = t("Singleton"),
    c = t("EventTypes"),
    a = t("UIEnum"),
    u = t("ConfData"),
    p = t("AssignmentConf"),
    s = t("GuideController"),
    i =
        ((r = e.Singleton()),
        i(h, r),
        Object.defineProperty(h.prototype, "isOpen", {
            get: function () {
                return this._isOpen;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "deblockingDay", {
            get: function () {
                return this._deblockingDay;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "day", {
            get: function () {
                return this._day;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "hour", {
            get: function () {
                return this._hour;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "equip_compose", {
            get: function () {
                return this._equip_compose;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "kill_monster", {
            get: function () {
                return this._kill_monster;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(h.prototype, "kill_boss", {
            get: function () {
                return this._kill_boss;
            },
            enumerable: !1,
            configurable: !0
        }),
        (h.prototype.initData = function () {
            (this._Assignment = this.getStorage()),
                s.GuideController.isNewPlayer && (this._isOpen = !0),
                1 == this._Assignment.isOpen && (this._isOpen = !0),
                this._isOpen &&
                    ((this._equip_compose = this._Assignment.progData[p.DayAssign.equip_compose].prog),
                    (this._kill_monster = this._Assignment.progData[p.DayAssign.kill_monster].prog),
                    (this._kill_boss = this._Assignment.progData[p.DayAssign.kill_boss].prog),
                    this.downTime(),
                    this._deblockingDay < 8
                        ? ((this._isIntTime = !0),
                          (this._downTime = setInterval(this.downTime.bind(this), 1e3 * this._nextRenovate)))
                        : (this._isOpen = !1));
        }),
        (h.prototype.downTime = function () {
            var t = new Date().getTime(),
                e = this._Assignment.startTime,
                o = Math.ceil((t - e) / 864e5),
                n = Math.floor((e + 6048e5 - t) / 864e5);
            this._day = n;
            n = Math.floor(((e + 6048e5 - t) % 864e5) / 60 / 60 / 1e3);
            (this._hour = n),
                (this._nextRenovate = Math.floor(((e + 6048e5 - t) / 1e3) % this._renovateTime) + 1),
                this._isIntTime &&
                    (clearInterval(this._downTime),
                    (this._downTime = setInterval(this.downTime.bind(this), 1e3 * this._nextRenovate)),
                    (this._isIntTime = !1)),
                this._deblockingDay < 8 &&
                    ((this._deblockingDay = o),
                    7 < this._deblockingDay &&
                        (console.log("任务结束"),
                        clearInterval(this._downTime),
                        (this._isOpen = !1),
                        (this._Assignment.isOpen = 0),
                        this.setStorage(this._Assignment),
                        l.app.gui.closeUI(a.UIEnum.AssignmentView),
                        l.app.event.emit(c.EventType.Battle_Assign_Change)),
                    this.renovateFun && this.renovateFun()),
                console.log(
                    "下次刷新",
                    this._nextRenovate,
                    "秒之后",
                    Math.floor(this._nextRenovate / 60) + "分" + (this._nextRenovate % 60) + "秒",
                    "当前第" + this._deblockingDay + "天"
                );
        }),
        (h.prototype.getStorage = function () {
            var t,
                e,
                o,
                n = l.app.local.getValue("Assignment");
            return (
                null == n &&
                    ((t = (o = new Date()).getFullYear()),
                    (e = o.getMonth() + 1),
                    (o = o.getDate()),
                    (t = new Date(t, e - 1, o, 0, 0, 0)),
                    (e = this.initAssignReward()),
                    (this._deblockingDay = o = 1),
                    s.GuideController.isNewPlayer
                        ? ((n = {
                              isOpen: o,
                              startTime: t.getTime(),
                              assignReward: {quantity: 0, acquire: [0, 0, 0, 0, 0, 0, 0, 0]},
                              progData: e
                          }),
                          this.setStorage(n))
                        : ((o = 0),
                          (this._isOpen = !1),
                          (n = {isOpen: o, startTime: 0, assignReward: {quantity: 0, acquire: []}, progData: []}))),
                console.log(n),
                n
            );
        }),
        (h.prototype.getAllProgReward = function (t) {
            this._isOpen &&
                ((this._Assignment.assignReward.acquire[t] = 1),
                (t = u.default.inst.assignmentConf.getAssigns(t + 1).reward),
                (t = u.default.inst.PrizeConf.getRewardData(t)),
                u.default.inst.PrizeConf.addReward(t),
                this.setStorage(this._Assignment),
                l.app.event.emit(c.EventType.Battle_Assign_Change));
        }),
        (h.prototype.getProg = function (t, e) {
            if (this._isOpen) {
                this._Assignment.assignReward.quantity += t.acquire;
                for (
                    var o = u.default.inst.assignmentConf.getAllAssigns(), n = 0;
                    n < o.length && this._Assignment.assignReward.quantity >= o[n].quantity;
                    n++
                )
                    0 == this._Assignment.assignReward.acquire[n] && (this._Assignment.assignReward.acquire[n] = 2);
                (this._Assignment.progData[t.type].alreadyGet[t.day - 1] = 1),
                    u.default.inst.PrizeConf.addReward(e),
                    this.setStorage(this._Assignment),
                    l.app.event.emit(c.EventType.Battle_Assign_Change);
            }
        }),
        (h.prototype.setStorage = function (t) {
            (this._Assignment = t), l.app.local.setValue("Assignment", t);
        }),
        (h.prototype.checkDayRp = function (t) {
            if (h.inst.isOpen)
                for (var e = this.getStorage().progData, o = 0; o < e.length; o++)
                    if (2 == e[o].alreadyGet[t]) return !0;
            return !1;
        }),
        (h.prototype.initAssignReward = function () {
            return [
                {prog: 0, type: p.DayAssign.role_grade, alreadyGet: [0, 0, 0, 0, 0, 0, 0]},
                {prog: 0, type: p.DayAssign.evolution, alreadyGet: [0, 0, 0, 0, 0, 0, 0]},
                {prog: 0, type: p.DayAssign.equip_use, alreadyGet: [0, 0, 0, 0, 0, 0]},
                {prog: 0, type: p.DayAssign.equip_grade, alreadyGet: [0, 0, 0, 0, 0, 0]},
                {prog: 0, type: p.DayAssign.equip_compose, alreadyGet: [0, 0, 0, 0, 0, 0, 0]},
                {prog: 0, type: p.DayAssign.kill_monster, alreadyGet: [0, 0, 0, 0, 0, 0, 0]},
                {prog: 0, type: p.DayAssign.kill_boss, alreadyGet: [0, 0, 0, 0, 0, 0, 0]}
            ];
        }),
        (h.prototype.addDay = function () {
            (this._Assignment.startTime -= 864e5), this.downTime(), this.setStorage(this._Assignment);
        }),
        (h.prototype.initAssignRewardData = function () {
            (this._equip_compose = 0), (this._kill_monster = 0), (this._kill_boss = 0);
            var t = new Date(),
                e = t.getFullYear(),
                o = t.getMonth() + 1,
                t = t.getDate(),
                o = new Date(e, o - 1, t, 0, 0, 0),
                t = this.initAssignReward(),
                t = {
                    isOpen: 1,
                    startTime: o.getTime(),
                    assignReward: {quantity: 0, acquire: [0, 0, 0, 0, 0, 0, 0, 0]},
                    progData: t
                };
            this.setStorage(t), this.downTime(), l.app.event.emit(c.EventType.Battle_Assign_Change);
        }),
        (h.prototype.setProg = function (t, e) {
            if (this._isOpen) {
                this._Assignment.progData[e].prog = t;
                for (
                    var o = u.default.inst.assignmentConf.getEachAssigns(e), n = 0;
                    n < o.length && this._Assignment.progData[e].prog >= o[n].prog;
                    n++
                )
                    0 == this._Assignment.progData[e].alreadyGet[n] && (this._Assignment.progData[e].alreadyGet[n] = 2);
                switch (e) {
                    case p.DayAssign.equip_compose:
                        this._equip_compose = t;
                        break;
                    case p.DayAssign.kill_monster:
                        this._kill_monster = t;
                        break;
                    case p.DayAssign.kill_boss:
                        this._kill_boss = t;
                }
                console.log(this._Assignment),
                    this.setStorage(this._Assignment),
                    l.app.event.emit(c.EventType.Battle_Assign_Change);
            }
        }),
        (h.prototype.accomplish = function () {
            var t = new Date(),
                e = t.getFullYear(),
                o = t.getMonth() + 1,
                n = t.getDate() - 6,
                i = new Date(e, o - 1, n, 0, 0, 0),
                r = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.role_grade),
                a = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.evolution),
                s = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.equip_use),
                t = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.equip_grade),
                e = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.equip_compose),
                o = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.kill_monster),
                n = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.kill_boss),
                n = [
                    {prog: r[r.length - 1].prog, type: p.DayAssign.role_grade, alreadyGet: [2, 2, 2, 2, 2, 2, 2]},
                    {prog: a[a.length - 1].prog, type: p.DayAssign.evolution, alreadyGet: [2, 2, 2, 2, 2, 2, 2]},
                    {prog: s[s.length - 1].prog, type: p.DayAssign.equip_use, alreadyGet: [2, 2, 2, 2, 2, 2]},
                    {prog: t[t.length - 1].prog, type: p.DayAssign.equip_grade, alreadyGet: [2, 2, 2, 2, 2, 2]},
                    {prog: e[e.length - 1].prog, type: p.DayAssign.equip_compose, alreadyGet: [2, 2, 2, 2, 2, 2, 2]},
                    {prog: o[o.length - 1].prog, type: p.DayAssign.kill_monster, alreadyGet: [2, 2, 2, 2, 2, 2, 2]},
                    {prog: n[n.length - 1].prog, type: p.DayAssign.kill_boss, alreadyGet: [2, 2, 2, 2, 2, 2, 2]}
                ],
                n = {
                    isOpen: 1,
                    startTime: i.getTime(),
                    assignReward: {quantity: 0, acquire: [0, 0, 0, 0, 0, 0, 0, 0]},
                    progData: n
                };
            this.setStorage(n), this.downTime(), l.app.event.emit(c.EventType.Battle_Assign_Change);
        }),
        (h.prototype.onceGet = function () {
            var t = new Date(),
                e = t.getFullYear(),
                o = t.getMonth() + 1,
                n = t.getDate() - 6,
                i = new Date(e, o - 1, n, 0, 0, 0),
                r = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.role_grade),
                a = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.evolution),
                s = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.equip_use),
                t = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.equip_grade),
                e = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.equip_compose),
                o = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.kill_monster),
                n = u.default.inst.assignmentConf.getEachAssigns(p.DayAssign.kill_boss),
                n = [
                    {prog: r[r.length - 1].prog, type: p.DayAssign.role_grade, alreadyGet: [1, 1, 1, 1, 1, 1, 1]},
                    {prog: a[a.length - 1].prog, type: p.DayAssign.evolution, alreadyGet: [1, 1, 1, 1, 1, 1, 1]},
                    {prog: s[s.length - 1].prog, type: p.DayAssign.equip_use, alreadyGet: [1, 1, 1, 1, 1, 1]},
                    {prog: t[t.length - 1].prog, type: p.DayAssign.equip_grade, alreadyGet: [1, 1, 1, 1, 1, 1]},
                    {prog: e[e.length - 1].prog, type: p.DayAssign.equip_compose, alreadyGet: [1, 1, 1, 1, 1, 1, 1]},
                    {prog: o[o.length - 1].prog, type: p.DayAssign.kill_monster, alreadyGet: [1, 1, 1, 1, 1, 1, 1]},
                    {prog: n[n.length - 1].prog, type: p.DayAssign.kill_boss, alreadyGet: [1, 1, 1, 1, 1, 1, 1]}
                ],
                n = {
                    isOpen: 1,
                    startTime: i.getTime(),
                    assignReward: {quantity: u.default.inst.assignmentConf.maxProg, acquire: [2, 2, 2, 2, 2, 2, 2, 2]},
                    progData: n
                };
            this.setStorage(n), this.downTime(), l.app.event.emit(c.EventType.Battle_Assign_Change);
        }),
        h);
function h() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t._Assignment = null),
        (t._isOpen = !1),
        (t._downTime = null),
        (t._day = 0),
        (t._hour = 0),
        (t._deblockingDay = 0),
        (t._renovateTime = 3600),
        (t._nextRenovate = 0),
        (t._isIntTime = !1),
        (t.renovateFun = null),
        (t._equip_compose = 0),
        (t._kill_monster = 0),
        (t._kill_boss = 0),
        t
    );
}
o.default = i;
