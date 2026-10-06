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
    s = t("App"),
    l = t("decorator"),
    c = t("LayerMgr"),
    e = t("BasePanel"),
    u = t("GuideController"),
    p = t("ConfData"),
    h = t("TrackType"),
    d = t("GameMgr"),
    f = t("UIEnum"),
    y = t("ActivityItem"),
    t = cc._decorator.ccclass,
    t =
        ((a = e.default),
        i(g, a),
        (g.prototype.initView = function () {
            var t = this;
            this.node.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    a.prototype.cloesView.call(t);
                },
                this
            );
        }),
        (g.prototype.updateView = function () {
            (this.datas = p.default.inst.activityConf.getActivitys()),
                this.datas.push(null),
                console.log(this.datas),
                (this.list.numItems = this.datas.length),
                this.addTop(),
                this.showGuide();
        }),
        (g.prototype.onItemRender = function (t, e) {
            t.getComponent(y.default).setData(this.datas[e]);
        }),
        (g.prototype.addTop = function () {
            d.default.inst.topNode && (d.default.inst.topNode.node.parent = this.top);
        }),
        (g.prototype.showGuide = function () {
            var t;
            51 == (null === (t = u.GuideController.guideVo) || void 0 === t ? void 0 : t.idx) &&
                (null === (t = s.app.track) || void 0 === t || t.trackEvent(h.TrackType.Activity_Open),
                u.GuideController.guideStart(),
                u.GuideController.setGuide("Activity", 1));
        }),
        (g.prototype.onBtnCloseClick = function () {
            s.app.gui.openUI(f.UIEnum.HomeView, c.LayerEnum.VIEW_LAYER), s.app.gui.closeUI(f.UIEnum.ActivityView);
        }),
        r([l.autoBind("cc.Node", "top")], g.prototype, "top", void 0),
        r([l.autoBind("cc.Node", "btnClose")], g.prototype, "btnClose", void 0),
        r([l.autoBind("List", "list")], g.prototype, "list", void 0),
        r([t], g));
function g() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.top = null), (t.btnClose = null), (t.list = null), (t.datas = null), t;
}
o.default = t;
