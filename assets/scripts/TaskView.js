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
        }),
    r =
        (this && this.__decorate) ||
        function (t, e, o, n) {
            var i,
                r = arguments.length,
                a = r < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
            else
                for (var s = t.length - 1; 0 <= s; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : 3 < r ? i(e, o, a) : i(e, o)) || a);
            return 3 < r && a && Object.defineProperty(e, o, a), a;
        };
Object.defineProperty(o, "__esModule", {value: !0});
var a,
    s = t("BasePanel"),
    l = t("UIEnum"),
    c = t("decorator"),
    u = t("TaskController"),
    p = t("TaskItem"),
    h = t("EventTypes"),
    d = t("App"),
    f = t("TaskRewardBox"),
    y = t("ConfData"),
    g = t("TaskButton"),
    m = t("MultipleController"),
    _ = t("CloseUI"),
    v = t("TrackType"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(b, a),
        (b.prototype.onDisable = function () {
            a.prototype.onDisable.call(this), (this.curr_page = 0);
        }),
        (b.prototype.initView = function () {
            this.timeLab.string = "";
            for (var t = 0, e = this.boxs.childrenCount; t < e; t++) {
                var o = this.boxs.children[t];
                this.boxItems.push(o.getComponent(f.default));
            }
            this.btns.push(this.btnDaily.getComponent(g.default)),
                this.btns.push(this.btnWeek.getComponent(g.default)),
                this.btns.push(this.btnHonour.getComponent(g.default));
        }),
        (b.prototype.updateView = function () {
            var t,
                e = this;
            null === (t = d.app.track) || void 0 === t || t.trackEvent(v.TrackType.Open_Task),
                this.setPage(1),
                this.checkRp(),
                m.default.inst.eject(this.panel, this.bg, function () {
                    e.onEvent();
                });
        }),
        (b.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    t.closeView();
                },
                this
            ),
                this.panel.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        _.default.inst.closeNode();
                    },
                    this
                );
        }),
        (b.prototype.closeView = function () {
            d.app.gui.closeUI(l.UIEnum.TaskView);
        }),
        (b.prototype.setPage = function (t) {
            if (t != this.curr_page) {
                this.curr_page = t;
                for (var e = 0; e < 3; e++) this.btns[e].setStatus(t == e + 1);
                1 == t
                    ? ((this.datas = u.default.inst.dailyList),
                      (this.task.active = !0),
                      (this.honour.active = !1),
                      this.updateTask())
                    : 2 == t
                    ? ((this.datas = u.default.inst.weekList),
                      (this.task.active = !0),
                      (this.honour.active = !1),
                      this.updateTask())
                    : 3 == t &&
                      ((this.datas = u.default.inst.honourList),
                      (this.task.active = !1),
                      (this.honour.active = !0),
                      this.updateHonour());
            }
        }),
        (b.prototype.updateTask = function () {
            this.taskList.numItems = this.datas.length;
            var t = 0,
                e = 0,
                o = null;
            1 == this.curr_page
                ? ((t = u.default.inst.dailyStar),
                  (o = u.default.inst.dailyRewardList),
                  (e = y.default.inst.taskConf.maxDailyValue))
                : 2 == this.curr_page &&
                  ((t = u.default.inst.weekStar),
                  (o = u.default.inst.weekRewardList),
                  (e = y.default.inst.taskConf.maxWeekValue)),
                console.log("[TaskView]-->[line:100]:", e),
                (this.totalLab.string = "" + t),
                (this.progress.progress = t / e);
            for (var n = 0, i = o.length; n < i; n++) this.boxItems[n].setData(o[n]);
        }),
        (b.prototype.updateHonour = function () {
            this.honourList.numItems = this.datas.length;
        }),
        (b.prototype.onTaskRender = function (t, e) {
            t.getComponent(p.default).setData(this.datas[e], e);
        }),
        (b.prototype.onHonourRender = function (t, e) {
            t.getComponent(p.default).setData(this.datas[e], e);
        }),
        (b.prototype.checkRp = function () {
            this.btns[0].showRedPoint(u.default.inst.isDailyRp),
                this.btns[1].showRedPoint(u.default.inst.isWeekRp),
                this.btns[2].showRedPoint(u.default.inst.isHonourRp);
        }),
        (b.prototype.onTaskUpdate = function () {
            var t = this.curr_page;
            (this.curr_page = 0), this.setPage(t), this.checkRp();
        }),
        (b.prototype.onBtnCloseClick = function () {
            this.closeView();
        }),
        (b.prototype.onBtnDailyClick = function () {
            this.setPage(1);
        }),
        (b.prototype.onBtnWeekClick = function () {
            this.setPage(2);
        }),
        (b.prototype.onBtnHonourClick = function () {
            this.setPage(3);
        }),
        r([c.autoBind("cc.Node", "bg")], b.prototype, "bg", void 0),
        r([c.autoBind("cc.Label", "panel/task/reward/timeLab")], b.prototype, "timeLab", void 0),
        r([c.autoBind("cc.Node", "panel/btns/btnDaily")], b.prototype, "btnDaily", void 0),
        r([c.autoBind("cc.Node", "panel/btns/btnWeek")], b.prototype, "btnWeek", void 0),
        r([c.autoBind("cc.Node", "panel/btns/btnHonour")], b.prototype, "btnHonour", void 0),
        r([c.autoBind("cc.ProgressBar", "panel/task/reward/progress")], b.prototype, "progress", void 0),
        r([c.autoBind("cc.Node", "panel/task/reward/boxs")], b.prototype, "boxs", void 0),
        r([c.autoBind("cc.Label", "panel/task/reward/totalLab")], b.prototype, "totalLab", void 0),
        r([c.autoBind("List", "panel/honour/honourList")], b.prototype, "honourList", void 0),
        r([c.autoBind("List", "panel/task/taskList")], b.prototype, "taskList", void 0),
        r([c.autoBind("cc.Node", "panel")], b.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/btnClose")], b.prototype, "btnClose", void 0),
        r([c.autoBind("cc.Node", "panel/task")], b.prototype, "task", void 0),
        r([c.autoBind("cc.Node", "panel/honour")], b.prototype, "honour", void 0),
        r([c.gameEvent(h.EventType.On_Task_Update)], b.prototype, "onTaskUpdate", null),
        r([t], b));
function b() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.bg = null),
        (t.timeLab = null),
        (t.btnDaily = null),
        (t.btnWeek = null),
        (t.btnHonour = null),
        (t.progress = null),
        (t.boxs = null),
        (t.totalLab = null),
        (t.honourList = null),
        (t.taskList = null),
        (t.panel = null),
        (t.btnClose = null),
        (t.task = null),
        (t.honour = null),
        (t.datas = null),
        (t.curr_page = 0),
        (t.boxItems = []),
        (t.btns = []),
        t
    );
}
o.default = t;
