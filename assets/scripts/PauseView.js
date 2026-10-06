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
    p = t("LayerMgr"),
    h = t("HeroController"),
    d = t("SkillEnum"),
    f = t("PauseItem"),
    y = t("GameMgr"),
    g = t("MultipleController"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(m, a),
        (m.prototype.initView = function () {
            var t = this.item.getComponent(f.default);
            this.itemTop.push(t);
            for (var e = 0; e < 6; e++)
                0 < e ? this.createItem(this.skills1, this.itemTop, this.posTop[e]) : t.setIcon(this.iconSp),
                    (this.itemTop[e].node.position = this.posItem[e]),
                    this.createItem(this.skills2, this.itemBottom, this.posBottom[e]),
                    (this.itemBottom[e].node.position = this.posItem[e]);
        }),
        (m.prototype.createItem = function (t, e, o) {
            var n = cc.instantiate(this.item),
                i = n.getComponent(f.default);
            (n.parent = t),
                e.push(i),
                ((n = cc.instantiate(this.iconSp)).parent = this.icons),
                (n.position = o),
                i.setIcon(n);
        }),
        (m.prototype.updateView = function () {
            var t = this,
                e = [],
                o = [];
            h.HeroController.getHeroSkills().forEach(function (t) {
                (t.confVo.type == d.SkillGroup.ACTIVE_SKILL ? e : o).push(t);
            });
            for (var n = 0, i = 6; n < i; n++)
                e[n]
                    ? this.itemTop[n].setData({skill_id: e[n].id, level: e[n].level}, !0)
                    : this.itemTop[n].setData(null, !0);
            for (n = 0, i = 6; n < i; n++)
                o[n]
                    ? this.itemBottom[n].setData({skill_id: o[n].id, level: o[n].level}, !1)
                    : this.itemBottom[n].setData(null, !1);
            g.default.inst.eject(this.panel, this.bg, function () {
                t.onEvent();
            });
        }),
        (m.prototype.onEvent = function () {
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    y.default.inst.gameResume(), u.app.gui.closeUI(l.UIEnum.PauseView);
                },
                this
            );
        }),
        (m.prototype.onDisable = function () {
            a.prototype.onDisable.call(this), this.bg.off(cc.Node.EventType.TOUCH_START);
        }),
        (m.prototype.onBtnRecordClick = function () {
            u.app.gui.openUI(l.UIEnum.RoundRecordView, p.LayerEnum.VIEW_LAYER);
        }),
        (m.prototype.onBtnHomeClick = function () {
            u.app.gui.openUI(l.UIEnum.QuitView, p.LayerEnum.VIEW_LAYER);
        }),
        (m.prototype.onBtnSoundClick = function () {
            u.app.gui.openUI(l.UIEnum.SetupView, p.LayerEnum.VIEW_LAYER);
        }),
        (m.prototype.onBtnOkClick = function () {
            y.default.inst.gameResume(), u.app.gui.closeUI(l.UIEnum.PauseView);
        }),
        r([c.autoBind("cc.Node", "bg")], m.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], m.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/skills1/item")], m.prototype, "item", void 0),
        r([c.autoBind("cc.Node", "panel/icons/iconSp")], m.prototype, "iconSp", void 0),
        r([c.autoBind("cc.Node", "panel/icons")], m.prototype, "icons", void 0),
        r([c.autoBind("cc.Node", "panel/btnRecord")], m.prototype, "btnRecord", void 0),
        r([c.autoBind("cc.Node", "panel/btnHome")], m.prototype, "btnHome", void 0),
        r([c.autoBind("cc.Node", "panel/btnSound")], m.prototype, "btnSound", void 0),
        r([c.autoBind("cc.Node", "panel/btnOk")], m.prototype, "btnOk", void 0),
        r([c.autoBind("cc.Node", "panel/skills1")], m.prototype, "skills1", void 0),
        r([c.autoBind("cc.Node", "panel/skills2")], m.prototype, "skills2", void 0),
        r([t], m));
function m() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.bg = null),
        (t.panel = null),
        (t.item = null),
        (t.iconSp = null),
        (t.icons = null),
        (t.btnRecord = null),
        (t.btnHome = null),
        (t.btnSound = null),
        (t.btnOk = null),
        (t.skills1 = null),
        (t.skills2 = null),
        (t.itemTop = []),
        (t.itemBottom = []),
        (t.posItem = [
            cc.v3(-185, -85),
            cc.v3(0, -85),
            cc.v3(185, -85),
            cc.v3(-185, -255),
            cc.v3(0, -255),
            cc.v3(185, -255)
        ]),
        (t.posTop = [
            cc.v3(-188, 393),
            cc.v3(-3, 393),
            cc.v3(182, 393),
            cc.v3(-188, 222),
            cc.v3(-3, 222),
            cc.v3(182, 222)
        ]),
        (t.posBottom = [
            cc.v3(-188, -33),
            cc.v3(-3, -33),
            cc.v3(182, -33),
            cc.v3(-188, -204),
            cc.v3(-3, -204),
            cc.v3(182, -204)
        ]),
        t
    );
}
o.default = t;
