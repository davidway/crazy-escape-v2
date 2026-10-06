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
    h = t("Activity51Controller"),
    d = t("loongEggItem"),
    f = t("ConfData"),
    y = t("Font"),
    g = t("btnDrawBlock"),
    m = t("EventTypes"),
    _ = t("DebugView"),
    v = t("EffectMgr"),
    b = t("GoodsDataController"),
    w = t("PropType"),
    C = cc._decorator,
    e = C.ccclass,
    t = C.property,
    e =
        (C.inspector,
        (a = s.default),
        i(k, a),
        (k.prototype.initView = function () {
            (h.default.inst.openTime = 0),
                (this._LoongEggNum = h.default.inst.LoongEggNum),
                (this.propType = h.default.inst.getPropType()),
                (h.default.inst.LoongEggFun = this.addLoongEgg.bind(this)),
                this.init();
        }),
        (k.prototype.updateView = function () {
            var t = this;
            p.default.inst.eject(this.panel, this.bg, function () {
                t.onEvent();
            }),
                this.showData(),
                (this.test.active = _.default.showtestBtn);
        }),
        (k.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    t.cloesView();
                },
                this
            ),
                this.panel.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        a.prototype.cloesView.call(t);
                    },
                    this
                );
        }),
        (k.prototype.cloesView = function () {
            h.default.inst.isClick
                ? v.default.inst.showTips("正在砸蛋，请稍后...")
                : (a.prototype.cloesView.call(this),
                  this.bg.off(cc.Node.EventType.TOUCH_START),
                  this.panel.off(cc.Node.EventType.TOUCH_START),
                  u.app.gui.closeUI(l.UIEnum.Activity51View));
        }),
        (k.prototype.init = function () {
            var t,
                e,
                o = this,
                n = f.default.inst.holidayConf.getHolidayByType(1);
            n &&
                ((t = y.default
                    .getFon()
                    .formatDate(1e3 * n.start)
                    .split("/")),
                (e = y.default
                    .getFon()
                    .formatDate(1e3 * n.end - 1e3)
                    .split("/")),
                (this.activityTimeLab.string =
                    t[0] +
                    "/" +
                    (10 < parseInt(t[1]) ? t : t[1])[1] +
                    "/" +
                    (10 < parseInt(t[2]) ? t[2] : t[2][1]) +
                    "~" +
                    e[0] +
                    "/" +
                    (10 < parseInt(e[1]) ? e : e[1])[1] +
                    "." +
                    (10 < parseInt(e[2]) ? e[2] : e[2][1])),
                (this.illustrateLab.string = n.introduce));
            var n = n.show_reward,
                i = null;
            5 < n.length
                ? ((i = this.ScrollRewardNode), (this.ScrollView.active = !0))
                : ((i = this.rewardNode), (this.ScrollView.active = !1)),
                n.forEach(function (t, e) {
                    t = f.default.inst.PrizeConf.getRewardData([{id: t, count: 1}]);
                    i.children[e] ||
                        ((e = cc.instantiate(o.btnDrawBlock))
                            .getComponent(g.default)
                            .setData(t[0].profit, t[0].type, !0, 3),
                        (e.parent = i));
                }),
                this.addLoongEgg();
        }),
        (k.prototype.closeNode = function () {
            a.prototype.cloesView.call(this);
        }),
        (k.prototype.addLoongEgg = function () {
            console.log("龙蛋更新");
            for (var t = h.default.inst.getStorageData(), e = 0; e < this._LoongEggNum; e++) {
                var o,
                    n = h.default.inst.getLoongEggData(e + 1),
                    i = 1 == t.already[e];
                this.loongEggNode.children[e]
                    ? this.loongEggNode.children[e].getComponent(d.default).setData(n, i, this.propType)
                    : ((o = cc.instantiate(this.loongEggItem)).getComponent(d.default).setData(n, i, this.propType),
                      (o.parent = this.loongEggNode));
            }
        }),
        (k.prototype.showData = function () {
            var t = b.default.inst.getGoodsNumByID(this.propType);
            this.countLab.string = "" + t;
        }),
        (k.prototype.onActivity51Page = function () {
            var t = this;
            this.scheduleOnce(function () {
                t.addLoongEgg();
            }, 0.3);
        }),
        (k.prototype.onActivity51ShowDataPage = function () {
            this.addLoongEgg(), this.showData();
        }),
        (k.prototype.onBtnCloseClick = function () {
            this.cloesView();
        }),
        (k.prototype.onAddBtnClick = function () {
            b.default.inst.addGoods(this.propType, 100), this.showData(), this.addLoongEgg();
        }),
        (k.prototype.onRefreshBtnClick = function () {
            h.default.inst.refresh(), this.addLoongEgg();
        }),
        r([c.autoBind("cc.Node", "test/RefreshBtn")], k.prototype, "RefreshBtn", void 0),
        r([c.autoBind("cc.Node", "panel/ScrollView")], k.prototype, "ScrollView", void 0),
        r([c.autoBind("cc.Node", "panel/ScrollView/view/ScrollRewardNode")], k.prototype, "ScrollRewardNode", void 0),
        r([c.autoBind("cc.Node", "test")], k.prototype, "test", void 0),
        r([c.autoBind("cc.Node", "test/addBtn")], k.prototype, "addBtn", void 0),
        r([c.autoBind("cc.Label", "panel/prop/countLab")], k.prototype, "countLab", void 0),
        r([c.autoBind("cc.Label", "panel/tips/tipsLab/activityTimeLab")], k.prototype, "activityTimeLab", void 0),
        r([c.autoBind("cc.Label", "panel/tips/tipsLab/illustrateLab")], k.prototype, "illustrateLab", void 0),
        r([c.autoBind("cc.Node", "panel/rewardNode")], k.prototype, "rewardNode", void 0),
        r([c.autoBind("cc.Node", "panel/loongEggNode")], k.prototype, "loongEggNode", void 0),
        r([c.autoBind("cc.Node", "panel/loongEggNode/loongEggItem")], k.prototype, "loongEggItem", void 0),
        r([c.autoBind("cc.Node", "bg")], k.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], k.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/btnClose")], k.prototype, "btnClose", void 0),
        r([t(cc.Prefab)], k.prototype, "btnDrawBlock", void 0),
        r([c.gameEvent(m.EventType.Activity51_Page)], k.prototype, "onActivity51Page", null),
        r([c.gameEvent(m.EventType.Activity51_ShowData_Page)], k.prototype, "onActivity51ShowDataPage", null),
        r([e], k));
function k() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.RefreshBtn = null),
        (t.ScrollView = null),
        (t.ScrollRewardNode = null),
        (t.test = null),
        (t.addBtn = null),
        (t.countLab = null),
        (t.activityTimeLab = null),
        (t.illustrateLab = null),
        (t.rewardNode = null),
        (t.loongEggNode = null),
        (t.loongEggItem = null),
        (t.bg = null),
        (t.panel = null),
        (t.btnClose = null),
        (t.btnDrawBlock = null),
        (t._LoongEggNum = 0),
        (t.propType = w.PropType.none),
        t
    );
}
o.default = e;
