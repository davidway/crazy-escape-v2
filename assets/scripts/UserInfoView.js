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
    u = t("LoadUtil"),
    p = t("UserDataController"),
    h = t("App"),
    d = t("MultipleController"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(f, a),
        (f.prototype.initView = function () {}),
        (f.prototype.updateView = function () {
            var t = this;
            d.default.inst.eject(this.panel, this.bg, function () {
                t.onEvent();
            });
            var e = "玩家" + h.app.http.getUid();
            p.default.inst.nickName && (e = p.default.inst.nickName.substring(0, 6)),
                (this.nameLab.string = e),
                (this.levelLab.string = "等级：" + p.default.inst.level),
                p.default.inst.avatarUrl && u.default.loadRemote(p.default.inst.avatarUrl, this.icon);
        }),
        (f.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    h.app.gui.closeUI(l.UIEnum.UserInfoView);
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
        (f.prototype.onBtnCloseClick = function () {
            h.app.gui.closeUI(l.UIEnum.UserInfoView);
        }),
        r([c.autoBind("cc.Node", "bg")], f.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], f.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/btnClose")], f.prototype, "btnClose", void 0),
        r([c.autoBind("cc.Label", "panel/nameLab")], f.prototype, "nameLab", void 0),
        r([c.autoBind("cc.Label", "panel/levelLab")], f.prototype, "levelLab", void 0),
        r([c.autoBind("cc.Sprite", "panel/head/icon")], f.prototype, "icon", void 0),
        r([t], f));
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.bg = null),
        (t.panel = null),
        (t.btnClose = null),
        (t.nameLab = null),
        (t.levelLab = null),
        (t.icon = null),
        t
    );
}
o.default = t;
