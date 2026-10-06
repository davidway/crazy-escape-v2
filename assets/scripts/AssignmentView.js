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
    u = t("App"),
    p = t("MultipleController"),
    h = t("AssignmentController"),
    d = t("ConfData"),
    f = t("assignItem"),
    y = t("dayBtn"),
    g = t("chestItem"),
    m = t("EventTypes"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(_, a),
        (_.prototype.initView = function () {
            var o = this;
            (this.addAssDayBtn.active = cc.sys.isBrowser),
                (this.addAssDayBtn.active = !(7 == h.default.inst.deblockingDay) && cc.sys.isBrowser),
                (this.resettingBtn.active = cc.sys.isBrowser),
                (this.onceGetBtn.active = cc.sys.isBrowser),
                (this.accomplishBtn.active = cc.sys.isBrowser),
                (this.nowShowDay = h.default.inst.deblockingDay),
                this.init();
            var t = d.default.inst.assignmentConf.allDay;
            this.dayBtnNode.children.forEach(function (t) {
                t.off("click");
            });
            for (var n = this, e = 0; e < t; e++)
                !(function (t) {
                    var e = null;
                    n.dayBtnNode.children[t]
                        ? (e = n.dayBtnNode.children[t])
                        : ((e = cc.instantiate(n.dayBtn)).parent = n.dayBtnNode),
                        e.getComponent(y.default).setData(t),
                        e.on(
                            "click",
                            function () {
                                o.dayClick(t + 1);
                            },
                            n
                        ),
                        (e.scale = 1);
                })(e);
            this.dayBtnNode.children[this.nowShowDay - 1].scale = 1.2;
            function i() {
                var t = h.default.inst.day,
                    e = h.default.inst.hour;
                (o.downTime.string = "剩余时间:" + (9 < t ? t : "0" + t) + "天" + (9 < e ? e : "0" + e) + "时"),
                    console.log("剩余时间:" + (9 < t ? t : "0" + t) + "天" + (9 < e ? e : "0" + e) + "时");
            }
            i(), (h.default.inst.renovateFun = i.bind(this));
        }),
        (_.prototype.updateView = function () {
            var t = this;
            p.default.inst.eject(this.panel, this.bg, function () {
                t.onEvent();
            }),
                (this.dayBtnNode.children[this.nowShowDay - 1].scale = 1),
                (this.nowShowDay = h.default.inst.deblockingDay),
                (this.dayBtnNode.children[this.nowShowDay - 1].scale = 1.2),
                this._isInit && this.init(),
                (this._isInit = !0);
        }),
        (_.prototype.init = function () {
            var o = this;
            (this.Assignment = h.default.inst.getStorage()),
                this.setDayData(this.nowShowDay),
                (this.toothLab.string = this.Assignment.assignReward.quantity + ""),
                this.chestNode.children.forEach(function (t, e) {
                    t.getComponent(g.default).setData(e, o.Assignment.assignReward);
                });
        }),
        (_.prototype.dayClick = function (t) {
            cc
                .tween(this.dayBtnNode.children[this.nowShowDay - 1])
                .to(0.1, {scale: 1}, cc.easeOut(3))
                .start(),
                cc
                    .tween(this.dayBtnNode.children[t - 1])
                    .to(0.1, {scale: 1.2}, cc.easeOut(3))
                    .start(),
                (this.nowShowDay = t),
                this.setDayData(t);
        }),
        (_.prototype.setDayData = function (t) {
            (this.RewardNode.y = 0), console.log(t);
            for (
                var e = d.default.inst.assignmentConf.getDayAssign(t),
                    o = this.Assignment.progData,
                    n = [],
                    i = [],
                    r = 0;
                r < o.length;
                r++
            )
                2 == o[r].alreadyGet[t - 1]
                    ? n.unshift(o[r])
                    : 0 == o[r].alreadyGet[t - 1]
                    ? n.push(o[r])
                    : 1 == o[r].alreadyGet[t - 1] && i.push(o[r]);
            var n = n.concat(i),
                a = d.default.inst.assignmentConf.maxProg,
                s = this.Assignment.assignReward.quantity;
            for (this.ProgressBar.progress = s / a, r = 0; r < n.length; r++) {
                var l = null;
                this.RewardNode.children[r]
                    ? (l = this.RewardNode.children[r]).getComponent(f.default).setData(n[r], e.get(n[r].type))
                    : ((l = cc.instantiate(this.assignItem)).getComponent(f.default).setData(n[r], e.get(n[r].type)),
                      (l.parent = this.RewardNode)),
                    (l.scale = 1),
                    (l.active = !0);
            }
            if (n.length < this.RewardNode.childrenCount)
                for (r = this.RewardNode.childrenCount; r > n.length; r--) this.RewardNode.children[r - 1].active = !1;
        }),
        (_.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    u.app.gui.closeUI(l.UIEnum.AssignmentView),
                        t.bg.off(cc.Node.EventType.TOUCH_START),
                        t.panel.off(cc.Node.EventType.TOUCH_START),
                        t.cloesView();
                },
                this
            ),
                this.panel.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        t.cloesView();
                    },
                    this
                );
        }),
        (_.prototype.cloesView = function () {
            a.prototype.cloesView.call(this);
        }),
        (_.prototype.onAssignmentChange = function () {
            this.init();
        }),
        (_.prototype.onBtnCloseClick = function () {
            a.prototype.cloesView.call(this), u.app.gui.closeUI(l.UIEnum.AssignmentView);
        }),
        (_.prototype.onResettingBtnClick = function () {
            h.default.inst.initAssignRewardData(), (this.nowShowDay = h.default.inst.deblockingDay), this.initView();
        }),
        (_.prototype.onAddAssDayBtnClick = function () {
            h.default.inst.addDay(), (this.nowShowDay = h.default.inst.deblockingDay), this.initView();
        }),
        (_.prototype.onAccomplishBtnClick = function () {
            h.default.inst.accomplish(),
                (this.nowShowDay = h.default.inst.deblockingDay),
                this.initView(),
                (this.onceGetBtn.active = cc.sys.isBrowser);
        }),
        (_.prototype.onOnceGetBtnClick = function () {
            h.default.inst.onceGet(), this.initView();
        }),
        r([c.autoBind("cc.Node", "panel/btn/onceGetBtn")], _.prototype, "onceGetBtn", void 0),
        r([c.autoBind("cc.Node", "panel/btn/accomplishBtn")], _.prototype, "accomplishBtn", void 0),
        r([c.autoBind("cc.Node", "panel/btn/addAssDayBtn")], _.prototype, "addAssDayBtn", void 0),
        r([c.autoBind("cc.Node", "panel/btn/resettingBtn")], _.prototype, "resettingBtn", void 0),
        r([c.autoBind("cc.Node", "panel/assign/chestNode")], _.prototype, "chestNode", void 0),
        r([c.autoBind("cc.ProgressBar", "panel/assign/ProgressBar")], _.prototype, "ProgressBar", void 0),
        r([c.autoBind("cc.Label", "panel/assign/labNode/toothLab")], _.prototype, "toothLab", void 0),
        r([c.autoBind("cc.Label", "panel/tips/downTime")], _.prototype, "downTime", void 0),
        r([c.autoBind("cc.Node", "panel/btn/dayBtnNode")], _.prototype, "dayBtnNode", void 0),
        r([c.autoBind("cc.Node", "panel/btn/dayBtnNode/dayBtn")], _.prototype, "dayBtn", void 0),
        r([c.autoBind("cc.Node", "panel/ScrollView/view/RewardNode")], _.prototype, "RewardNode", void 0),
        r([c.autoBind("cc.Node", "panel/ScrollView/view/RewardNode/assignItem")], _.prototype, "assignItem", void 0),
        r([c.autoBind("cc.Node", "bg")], _.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], _.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/btnClose")], _.prototype, "btnClose", void 0),
        r([c.gameEvent(m.EventType.Assignment_Change)], _.prototype, "onAssignmentChange", null),
        r([t], _));
function _() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.onceGetBtn = null),
        (t.accomplishBtn = null),
        (t.addAssDayBtn = null),
        (t.resettingBtn = null),
        (t.chestNode = null),
        (t.ProgressBar = null),
        (t.toothLab = null),
        (t.downTime = null),
        (t.dayBtnNode = null),
        (t.dayBtn = null),
        (t.RewardNode = null),
        (t.assignItem = null),
        (t.bg = null),
        (t.panel = null),
        (t.btnClose = null),
        (t.Assignment = null),
        (t.nowShowDay = 0),
        (t._isInit = !1),
        t
    );
}
o.default = t;
