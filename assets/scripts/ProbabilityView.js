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
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(h, a),
        (h.prototype.show = function (t) {
            (this.param = t), console.log(this.param);
        }),
        (h.prototype.initView = function () {}),
        (h.prototype.updateView = function () {
            var t = this;
            p.default.inst.eject(this.panel, this.bg, function () {
                t.onEvent();
            }),
                this.init();
        }),
        (h.prototype.init = function () {
            (this.ptItem.active = !1), (this.yxItem.active = !1), (this.jlItem.active = !1);
            for (var t = 0; t < this.param.probability.length; t++)
                switch (this.param.probability[t].quality) {
                    case 2:
                        (this.ptItem.active = !0),
                            (this.ptLab.string = Math.floor(100 * this.param.probability[t].probability) + "%");
                        break;
                    case 3:
                        (this.yxItem.active = !0),
                            (this.yxLab.string = Math.floor(100 * this.param.probability[t].probability) + "%");
                        break;
                    case 4:
                        (this.jlItem.active = !0),
                            (this.jlLab.string = Math.floor(100 * this.param.probability[t].probability) + "%");
                }
            this.NameLab.string = this.param.name + "概率详情";
        }),
        (h.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    t.closeView();
                },
                this
            );
        }),
        (h.prototype.closeView = function () {
            u.app.gui.closeUI(l.UIEnum.ProbabilityView);
        }),
        (h.prototype.onCloseBtnClick = function () {
            this.closeView();
        }),
        r([c.autoBind("cc.Label", "panel/NameLab")], h.prototype, "NameLab", void 0),
        r([c.autoBind("cc.Node", "bg")], h.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], h.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/closeBtn")], h.prototype, "closeBtn", void 0),
        r([c.autoBind("cc.Node", "panel/Layout/jlItem")], h.prototype, "jlItem", void 0),
        r([c.autoBind("cc.Node", "panel/Layout/yxItem")], h.prototype, "yxItem", void 0),
        r([c.autoBind("cc.Node", "panel/Layout/ptItem")], h.prototype, "ptItem", void 0),
        r([c.autoBind("cc.Label", "panel/Layout/jlItem/jlLab")], h.prototype, "jlLab", void 0),
        r([c.autoBind("cc.Label", "panel/Layout/yxItem/yxLab")], h.prototype, "yxLab", void 0),
        r([c.autoBind("cc.Label", "panel/Layout/ptItem/ptLab")], h.prototype, "ptLab", void 0),
        r([t], h));
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.NameLab = null),
        (t.bg = null),
        (t.panel = null),
        (t.closeBtn = null),
        (t.jlItem = null),
        (t.yxItem = null),
        (t.ptItem = null),
        (t.jlLab = null),
        (t.yxLab = null),
        (t.ptLab = null),
        t
    );
}
o.default = t;
