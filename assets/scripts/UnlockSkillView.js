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
    p = t("ConfData"),
    h = t("UserDataController"),
    d = t("MultipleController"),
    f = t("CloseUI"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(y, a),
        (y.prototype.initView = function () {}),
        (y.prototype.updateView = function () {
            var t = this,
                e = this._viewData;
            console.log("[UnlockSkillView]-->[line:31]:", e);
            e = p.default.inst.playerSkinConf.getPlayerSkinVoById(e);
            (this.infoLab.string = "解锁技能需要消耗" + e.skill_unlock_value + "钻石"),
                d.default.inst.eject(this.panel, this.bg, function () {
                    t.onEvent();
                });
        }),
        (y.prototype.onEvent = function () {
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
                        f.default.inst.closeNode();
                    },
                    this
                );
        }),
        (y.prototype.closeView = function () {
            u.app.gui.closeUI(l.UIEnum.UnlockSkillView);
        }),
        (y.prototype.onBtnOkClick = function () {
            h.default.inst.unlockSkinSkill(this._viewData) && u.app.gui.closeUI(l.UIEnum.UnlockSkillView);
        }),
        (y.prototype.onBtnNoClick = function () {
            u.app.gui.closeUI(l.UIEnum.UnlockSkillView);
        }),
        r([c.autoBind("cc.Node", "bg")], y.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], y.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/btnOk")], y.prototype, "btnOk", void 0),
        r([c.autoBind("cc.Node", "panel/btnNo")], y.prototype, "btnNo", void 0),
        r([c.autoBind("cc.Label", "panel/infoLab")], y.prototype, "infoLab", void 0),
        r([t], y));
function y() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.bg = null), (t.panel = null), (t.btnOk = null), (t.btnNo = null), (t.infoLab = null), t;
}
o.default = t;
