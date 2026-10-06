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
    s = t("LayerMgr"),
    e = t("Singleton"),
    l = t("EventTypes"),
    c = t("UIEnum"),
    u = t("ConfData"),
    p = t("EquipType"),
    h = t("Prop"),
    d = t("DrawingController"),
    f = t("EquipController"),
    y = t("EvolveController"),
    g = t("UserDataController"),
    GDC = t("GoodsDataController"),
    PT = t("PropType"),
    i =
        ((r = e.Singleton()),
        i(m, r),
        Object.defineProperty(m.prototype, "dailyStar", {
            get: function () {
                return this._dailyStar;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(m.prototype, "weekStar", {
            get: function () {
                return this._weekStar;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(m.prototype, "isDailyRp", {
            get: function () {
                return (
                    console.log("[TaskController]-->[line:61]:", this._isDailyRewardRp, this._isDailyRp),
                    this._isDailyRewardRp || this._isDailyRp
                );
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(m.prototype, "isWeekRp", {
            get: function () {
                return (
                    console.log("[TaskController]-->[line:66]:", this._isWeekRewardRp, this._isWeekRp),
                    this._isWeekRewardRp || this._isWeekRp
                );
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(m.prototype, "isHonourRp", {
            get: function () {
                return console.log("[TaskController]-->[line:71]:", this._isHonourRp), this._isHonourRp;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(m.prototype, "isRedPoint", {
            get: function () {
                return (
                    this._isDailyRewardRp ||
                    this._isDailyRp ||
                    this._isWeekRewardRp ||
                    this._isWeekRp ||
                    this._isHonourRp
                );
            },
            enumerable: !1,
            configurable: !0
        }),
        (m.prototype.initData = function () {
            var e = this;
            (this._dailyTask = a.app.local.getValue("dailyTask")),
                (this._dailyReward = a.app.local.getValue("dailyReward")),
                (this._weekTask = a.app.local.getValue("weekTask")),
                (this._weekReward = a.app.local.getValue("weekReward")),
                (this._honourTask = a.app.local.getValue("honourTask")),
                (this._dailyData = a.app.local.getValue("dailyData")),
                (this._weekData = a.app.local.getValue("weekData")),
                (this._honourData = a.app.local.getValue("honourData")),
                this._dailyTask.forEach(function (t) {
                    e.calcDailyStar(t);
                }),
                this._weekTask.forEach(function (t) {
                    e.calcWeekStar(t);
                }),
                m.inst.setHonour("level", g.default.inst.level),
                m.inst.setHonour("chapter", g.default.inst.chapter - 1),
                y.default.inst.updateTask(),
                this.updateRewards(),
                this.updateDaily(),
                this.updateWeek(),
                this.updateHonour(),
                a.app.event.emit(l.EventType.On_Task_Update);
        }),
        (m.prototype.addDaily = function (t, e) {
            var o = this._dailyData[t] || 0;
            (this._dailyData[t] = o += e),
                a.app.local.setValue("dailyData", this._dailyData),
                this.updateDaily(),
                console.log("日常任务数据:", this._dailyData, t),
                a.app.event.emit(l.EventType.On_Task_Update);
        }),
        (m.prototype.getDaily = function (t) {
            return this._dailyData[t] || 0;
        }),
        (m.prototype.addWeek = function (t, e) {
            var o = this._weekData[t] || 0;
            (this._weekData[t] = o += e),
                a.app.local.setValue("weekData", this._weekData),
                this.updateWeek(),
                a.app.event.emit(l.EventType.On_Task_Update),
                console.log("周任务数据:", this._weekData, t);
        }),
        (m.prototype.getWeek = function (t) {
            return this._weekData[t] || 0;
        }),
        (m.prototype.addHonour = function (t, e) {
            var o = this._honourData[t] || 0;
            (this._honourData[t] = o += e),
                a.app.local.setValue("honourData", this._honourData),
                this.updateHonour(),
                a.app.event.emit(l.EventType.On_Task_Update),
                console.log("成就任务数据1:", this._honourData, t);
        }),
        (m.prototype.getHonour = function (t) {
            return this._honourData[t] || 0;
        }),
        (m.prototype.setHonour = function (t, e) {
            (this._honourData[t] = e),
                a.app.local.setValue("honourData", this._honourData),
                this.updateHonour(),
                a.app.event.emit(l.EventType.On_Task_Update),
                console.log("成就任务数据2:", this._honourData, t, e);
        }),
        (m.prototype.finishDailyTask = function (t) {
            this._dailyTask.includes(t) ||
                (this._dailyTask.push(t),
                this.calcDailyStar(t),
                a.app.local.setValue("dailyTask", this._dailyTask),
                this.updateDaily(),
                this.updateRewards());
        }),
        (m.prototype.calcDailyStar = function (t) {
            t = u.default.inst.taskConf.getDailyTask(t);
            t && (this._dailyStar += t.reward);
        }),
        (m.prototype.finishWeekTask = function (t) {
            this._weekTask.includes(t) ||
                (this._weekTask.push(t),
                this.calcWeekStar(t),
                a.app.local.setValue("weekTask", this._weekTask),
                this.updateWeek(),
                this.updateRewards());
        }),
        (m.prototype.calcWeekStar = function (t) {
            t = u.default.inst.taskConf.getWeekTask(t);
            t && (this._weekStar += t.reward);
        }),
        (m.prototype.isGetTaskReward = function (t) {
            var e = u.default.inst.taskConf.getRewardById(t);
            return 1 == (null == e ? void 0 : e.type)
                ? this._dailyReward.includes(t)
                : 2 != (null == e ? void 0 : e.type) || this._weekReward.includes(t);
        }),
        (m.prototype.getTaskProgressAward = function (t) {
            var e = u.default.inst.taskConf.getRewardById(t),
                o = !1;
            if (
                (1 == (null == e ? void 0 : e.type)
                    ? (o = this.getDailyReward(t))
                    : 2 == (null == e ? void 0 : e.type) && (o = this.getWeekReward(t)),
                o)
            ) {
                var n = [];
                if (
                    (0 < e.gold && (g.default.inst.addGold(e.gold), n.push({type: h.Prop.gold, profit: {num: e.gold}})),
                    0 < e.drawings &&
                        ((o = d.DrawingController.inst.getRandomDraw(e.drawings)).getLists.forEach(function (t) {
                            d.DrawingController.inst.addDrawing(t.id, t.quantity);
                        }),
                        o.showDatas.forEach(function (t) {
                            n.push(t);
                        })),
                    0 < e.equips)
                )
                    for (var i = 0; i < e.equips; i++) {
                        var r = u.default.inst.equipConf.getRandomEquip();
                        f.EquipController.inst.addEquip(r.equip_id, p.EquipQualityType.GRAY, 1);
                        r = {id: r.equip_id, quality: 1, level: 1, status: 0, equipType: r.type};
                        n.push({type: h.Prop.equip, profit: {equip: r}});
                    }
                0 < (e.stones || 0) &&
                    GDC.default.inst.addGoods(PT.PropType.EnchantStone, e.stones),
                0 < n.length &&
                    a.app.gui.openUI(c.UIEnum.ReturnMaterialView, s.LayerEnum.VIEW_LAYER, {
                        type: 1,
                        profitList: n,
                        iconType: 2
                    }),
                    a.app.event.emit(l.EventType.On_Task_Update);
            }
        }),
        (m.prototype.getDailyReward = function (t) {
            return (
                !this._dailyReward.includes(t) &&
                (this._dailyReward.push(t),
                a.app.local.setValue("dailyReward", this._dailyReward),
                this.updateRewards(),
                a.app.event.emit(l.EventType.On_Task_Update),
                !0)
            );
        }),
        (m.prototype.getWeekReward = function (t) {
            return (
                !this._weekReward.includes(t) &&
                (this._weekReward.push(t),
                a.app.local.setValue("weekReward", this._weekReward),
                this.updateRewards(),
                a.app.event.emit(l.EventType.On_Task_Update),
                !0)
            );
        }),
        (m.prototype.updateRewards = function () {
            var e = this;
            0 == this.dailyRewardList.length &&
                u.default.inst.taskConf.getRewardsListByType(1).forEach(function (t) {
                    e.dailyRewardList.push({status: 0, data: t});
                }),
                (this._isDailyRewardRp = !1),
                (this._isWeekRewardRp = !1),
                0 == this.weekRewardList.length &&
                    u.default.inst.taskConf.getRewardsListByType(2).forEach(function (t) {
                        e.weekRewardList.push({status: 0, data: t});
                    });
            for (var t = 0, o = this.dailyRewardList; t < o.length; t++) {
                var n = o[t];
                this._dailyReward.includes(n.data.id)
                    ? (n.status = 2)
                    : (n.status = n.data.count <= this._dailyStar ? 1 : 0),
                    1 == n.status && (this._isDailyRewardRp = !0);
            }
            for (var i = 0, r = this.weekRewardList; i < r.length; i++)
                (n = r[i]),
                    this._weekReward.includes(n.data.id)
                        ? (n.status = 2)
                        : (n.status = n.data.count <= this._weekStar ? 1 : 0),
                    1 == n.status && (this._isWeekRewardRp = !0);
            console.log("宝箱数据:", this.dailyRewardList, this.weekRewardList, this._dailyReward, this._weekReward);
        }),
        (m.prototype.finishHonourTask = function (t) {
            var e = t.data.type,
                o = this._honourTask[e] || 0;
            (this._honourTask[e] = o += 1), a.app.local.setValue("honourTask", this._honourTask);
            var n = [];
            if (0 < t.data.gem)
                g.default.inst.addGem(t.data.gem), n.push({type: h.Prop.Gem, profit: {num: t.data.gem}});
            else if (0 < t.data.coin)
                g.default.inst.addGold(t.data.coin), n.push({type: h.Prop.gold, profit: {num: t.data.coin}});
            else if (0 < t.data.drawings) {
                o = d.DrawingController.inst.getRandomDraw(t.data.drawings);
                o.getLists.forEach(function (t) {
                    d.DrawingController.inst.addDrawing(t.id, t.quantity);
                }),
                    o.showDatas.forEach(function (t) {
                        n.push(t);
                    });
            } else if (0 < t.data.equips)
                for (var i = 0; i < t.data.equips; i++) {
                    var r = u.default.inst.equipConf.getRandomEquip();
                    f.EquipController.inst.addEquip(r.equip_id, p.EquipQualityType.GRAY, 1);
                    r = {id: r.equip_id, quality: 1, level: 1, status: 0, equipType: r.type};
                    n.push({type: h.Prop.equip, profit: {equip: r}});
                }
            a.app.gui.openUI(c.UIEnum.ReturnMaterialView, s.LayerEnum.VIEW_LAYER, {
                type: 1,
                profitList: n,
                iconType: 2
            }),
                this.updateHonour(),
                a.app.event.emit(l.EventType.On_Task_Update);
        }),
        (m.prototype.updateDaily = function () {
            var e = this;
            0 == this.dailyList.length &&
                u.default.inst.taskConf.getDailyList().forEach(function (t) {
                    e.dailyList.push({status: 0, type: 1, data: t, count: 0, needCount: t.count});
                }),
                (this._isDailyRp = !1);
            for (
                var t = [
                        "",
                        "",
                        "signIn",
                        "chapter",
                        "chapterBox",
                        "challenge",
                        "equip_lv_up",
                        "fast_patrol",
                        "patrol",
                        "video",
                        "chest"
                    ],
                    o = 0,
                    n = this.dailyList;
                o < n.length;
                o++
            ) {
                var i,
                    r = n[o];
                this._dailyTask.includes(r.data.id) && (r.status = 2),
                    2 != r.status &&
                        (r.data.type <= 1
                            ? ((r.status = 1), (r.count = 1))
                            : ((i = t[r.data.type]),
                              (i = this._dailyData[i] || 0),
                              (r.status = i >= r.data.count ? 1 : 0),
                              (r.count = i)),
                        1 == r.status && (this._isDailyRp = !0));
            }
            this.sort(this.dailyList), console.log("日常任务数据2:", this.dailyList);
        }),
        (m.prototype.updateWeek = function () {
            var e = this;
            0 == this.weekList.length &&
                u.default.inst.taskConf.getWeakList().forEach(function (t) {
                    e.weekList.push({status: 0, type: 2, data: t, count: 0, needCount: t.count});
                }),
                (this._isWeekRp = !1);
            for (
                var t = [
                        "",
                        "equip_lv_up",
                        "chapter",
                        "challenge",
                        "kill_boss",
                        "chapterBox",
                        "video",
                        "signIn",
                        "patrol",
                        "",
                        "chest"
                    ],
                    o = 0,
                    n = this.weekList;
                o < n.length;
                o++
            ) {
                var i,
                    r = n[o];
                this._weekTask.includes(r.data.id) && (r.status = 2),
                    2 != r.status &&
                        ((i = t[r.data.type]),
                        (i = this._weekData[i] || 0),
                        (r.status = i >= r.data.count ? 1 : 0),
                        (r.count = i),
                        1 == r.status && (this._isWeekRp = !0));
            }
            this.sort(this.weekList);
        }),
        (m.prototype.updateHonour = function () {
            var i = this;
            if (0 == this.honourList.length)
                for (var t = u.default.inst.taskConf.maxHonourType, e = 1; e <= t; e++) {
                    var o = u.default.inst.taskConf.getHonourByType(e);
                    o && ((o = {status: 0, type: 3, data: o, count: 0, needCount: o.count}), this.honourList.push(o));
                }
            this._isHonourRp = !1;
            var n,
                r = null;
            this.honourList.forEach(function (t) {
                var e = i._honourTask[t.data.type] || 0,
                    o = t.data.count + t.data.add * e;
                switch (((t.needCount = o), t.data.type)) {
                    case 8:
                        var n = i.getHonour("use_gem");
                        (t.status = o <= n ? 1 : 0), (t.count = n);
                        break;
                    case 2:
                        (t.status = i._honourData.chapterBox >= o ? 1 : 0), (t.count = i._honourData.chapterBox);
                        break;
                    case 3:
                        o >= u.default.inst.chapterConf.getMaxChapter()
                            ? (((r = t).status = 2), (t.count = u.default.inst.chapterConf.getMaxChapter()))
                            : ((t.status = i._honourData.chapter >= o ? 1 : 0), (t.count = i._honourData.chapter));
                        break;
                    case 4:
                        (t.status = i._honourData.pass >= o ? 1 : 0), (t.count = i._honourData.pass);
                        break;
                    case 5:
                        (t.status = i._honourData.equips >= o ? 1 : 0), (t.count = i._honourData.equips);
                        break;
                    case 6:
                        (t.status = i._honourData.talent >= o ? 1 : 0), (t.count = i._honourData.talent);
                        break;
                    case 7:
                        (t.status = i._honourData.level >= o ? 1 : 0), (t.count = i._honourData.level);
                }
                1 == t.status && (i._isHonourRp = !0);
            }),
                r && ((n = this.honourList.indexOf(r)), this.honourList.splice(n, 1)),
                this.sort(this.honourList);
        }),
        (m.prototype.sort = function (t) {
            t.sort(function (t, e) {
                if (t.status != e.status) return 1 == t.status ? -1 : 1 == e.status ? 1 : t.status - e.status;
                if (0 == t.status) {
                    var o = t.count / t.needCount,
                        n = e.count / e.needCount;
                    if (0 < o || 0 < n) return n - o;
                }
                return t.data.id - e.data.id;
            });
        }),
        m);
function m() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (
        (t._dailyTask = null),
        (t._weekTask = null),
        (t._honourTask = null),
        (t._dailyReward = null),
        (t._weekReward = null),
        (t._dailyData = null),
        (t._weekData = null),
        (t._honourData = null),
        (t._dailyStar = 0),
        (t._weekStar = 0),
        (t._isDailyRp = !1),
        (t._isWeekRp = !1),
        (t._isDailyRewardRp = !1),
        (t._isWeekRewardRp = !1),
        (t._isHonourRp = !1),
        (t.dailyRewardList = []),
        (t.weekRewardList = []),
        (t.dailyList = []),
        (t.weekList = []),
        (t.honourList = []),
        t
    );
}
o.default = i;
