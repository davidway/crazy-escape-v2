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
    c = t("BasePanel"),
    u = t("GuideController"),
    p = t("MultipleController"),
    h = t("ConfData"),
    d = t("MainPageType"),
    f = t("TrackType"),
    y = t("ChallengeItem"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = c.default),
        i(g, a),
        (g.prototype.initView = function () {}),
        (g.prototype.updateView = function () {
            var t;
            null === (t = s.app.track) || void 0 === t || t.trackEvent(f.TrackType.Open_Challenge),
                (this.datas = h.default.inst.challengeConf.getFbs()),
                (this.list.numItems = this.datas.length),
                (p.default.inst.nowPage = d.MainPageType.Challenge),
                p.default.inst.on(this.node, this),
                p.default.inst.on(this.list.node, this),
                this.showGuide();
        }),
        (g.prototype.onItemRender = function (t, e) {
            t.getComponent(y.default).setData(this.datas[e], e);
        }),
        (g.prototype.showGuide = function () {
            var t;
            31 == (null === (t = u.GuideController.guideVo) || void 0 === t ? void 0 : t.idx) &&
                (null === (t = s.app.track) || void 0 === t || t.trackEvent(f.TrackType.Challenge_Page),
                u.GuideController.guideStart(),
                u.GuideController.setGuide("Challenge", 1));
        }),
        (g.prototype.onDisable = function () {
            a.prototype.onDisable.call(this),
                p.default.inst.onDestroy(this.node, this),
                p.default.inst.onDestroy(this.list.node, this);
        }),
        r([l.autoBind("List", "list")], g.prototype, "list", void 0),
        r([t], g));
function g() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.list = null), (t.datas = null), t;
}
o.default = t;
