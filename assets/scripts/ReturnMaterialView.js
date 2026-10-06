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
    p = t("EventTypes"),
    h = t("Prop"),
    d = t("Lines"),
    f = t("UserDataController"),
    y = t("CloseUI"),
    g = cc._decorator,
    e = g.ccclass,
    t = g.property,
    e =
        (g.inspector,
        (a = s.default),
        i(m, a),
        (m.prototype.initView = function () {
            (this.oldHeight = this.MateriaNode.parent.height), (this.treasureChestNodeY = this.bx_icon.y);
        }),
        (m.prototype.updateView = function () {
            var t,
                e = this;
            (this.zb_wz10.children[0].active = !1), this.MateriaNode.removeAllChildren();
            var o = 0;
            switch (
                (this.param.iconType &&
                    (this.textUI.getComponent(cc.Sprite).spriteFrame = this.textUIs[this.param.iconType]),
                this.param.type)
            ) {
                case 0:
                    o = 0;
                    break;
                case 1:
                    (o = 0.1),
                        this.showMaterial(this.profitList),
                        (this.showNode = this.MateriaNode.children[0]),
                        console.log(this.showNode.children[0].height);
                    for (var n = 0; n < 5; n++)
                        null == this.showNode.children[0].children[n].children[0] &&
                            ((this.showNode.children[0].children[n].active = !1), console.log("隐藏第一列"));
            }
            if (null !== (t = this.param) && void 0 !== t && t.treasureChestAn) {
                console.log("宝箱动画");
                var i = cc.v2(0, this.treasureChestNodeY);
                (this.treasureChestAn.active = !0),
                    this.bx_icon.setPosition(i),
                    (this.bx_icon.opacity = 255),
                    (this.bx_icon.getComponent(cc.Sprite).spriteFrame = this.treasureChestIcons[this.param.id - 1]),
                    (this.bx_icon.angle = 0);
                var r = 1;
                switch (this.param.id) {
                    case 1:
                        (r = 1), (i = cc.v2(14, this.treasureChestNodeY + 14));
                        break;
                    case 2:
                        (r = 1), (i = cc.v2(13, this.treasureChestNodeY + 37));
                        break;
                    case 3:
                        (r = -1), (i = cc.v2(-30, this.treasureChestNodeY + 42));
                }
                (this.bx_icon.scaleX = 0.1 * r),
                    (this.bx_icon.scaleY = 0.1),
                    cc
                        .tween(this.bx_icon)
                        .to(0.2, {scaleX: 1.2 * r, scaleY: 1.2})
                        .to(0.2, {scaleX: +r, scaleY: 1})
                        .delay(0.2)
                        .to(0.1, {angle: 5})
                        .to(0.1, {angle: -5})
                        .to(0.1, {angle: 5})
                        .to(0.1, {angle: -5})
                        .to(0.1, {angle: 0})
                        .delay(0.2)
                        .call(function () {
                            e.bx_icon.setPosition(i),
                                (e.bx_icon.getComponent(cc.Sprite).spriteFrame =
                                    e.treasureChestIconsOpen[e.param.id - 1]),
                                e.init(e.showNode),
                                null == e.wobble &&
                                    (e.wobble = cc
                                        .tween(e.bx_icon)
                                        .to(0.1, {scaleX: 1.1 * r, scaleY: 1.1})
                                        .to(0.1, {scaleX: +r, scaleY: 1})
                                        .call(function () {
                                            null != e.wobble
                                                ? e.wobble.start()
                                                : ((e.bx_icon.scaleX = +r), (e.bx_icon.scaleY = 1));
                                        })),
                                e.wobble.start();
                        })
                        .start();
            } else
                (this.treasureChestAn.active = !1),
                    this.scheduleOnce(function () {
                        e.init(e.showNode);
                    }, o);
        }),
        (m.prototype.show = function (t) {
            switch (
                ((this.param = t), (this.type = this.param.type), (this.showNode = this.param.node), this.param.type)
            ) {
                case 0:
                    this.showNode = this.param.node;
                    break;
                case 1:
                    (this.profitList = this.param.profitList), console.log(this.profitList);
            }
        }),
        (m.prototype.onDisable = function () {
            a.prototype.onDisable.call(this), y.default.inst.closeNode(), this.bg.off(cc.Node.EventType.TOUCH_START);
        }),
        (m.prototype.onEvent = function () {
            var t = this;
            (this.wobble = null),
                this.bg.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        u.app.sound.playEffect("游戏界面外道具音效"),
                            t.param.fun && t.param.fun(),
                            f.default.inst.addGoldPlay &&
                                ((f.default.inst.addGoldPlay = !1),
                                u.app.event.emit(p.EventType.Gold_Animation, function () {
                                    u.app.event.emit(p.EventType.User_Gold_Update);
                                })),
                            f.default.inst.addExpPlay &&
                                ((f.default.inst.addExpPlay = !1),
                                u.app.event.emit(p.EventType.Exp_Animation, function () {
                                    u.app.event.emit(p.EventType.User_Exp_Change);
                                })),
                            f.default.inst.addGemPlay &&
                                ((f.default.inst.addGemPlay = !1),
                                u.app.event.emit(p.EventType.Gem_Animation, function () {
                                    u.app.event.emit(p.EventType.User_Gem_Update);
                                })),
                            f.default.inst.addEnergyPlay &&
                                ((f.default.inst.addEnergyPlay = !1),
                                u.app.event.emit(p.EventType.Energy_Animation, function () {
                                    u.app.event.emit(p.EventType.User_Energy_Update);
                                })),
                            t.MateriaNode.removeAllChildren(),
                            u.app.gui.closeUI(l.UIEnum.ReturnMaterialView),
                            (t.showNode = null),
                            (t.type = 0),
                            (t.param = null);
                    },
                    this
                );
        }),
        (m.prototype.init = function (t) {
            var e = this;
            if (null != t)
                switch (this.type) {
                    case 0:
                        var o = cc.instantiate(t);
                        (o.y = 0),
                            this.MateriaNode.addChild(o),
                            (this.MateriaNode.parent.height = this.oldHeight),
                            o.height > this.MateriaNode.parent.height && (this.MateriaNode.parent.height = o.height);
                        var n = 1,
                            i = function () {
                                3 == n && e.unschedule(i), n++, u.app.sound.playEffect("数据出现");
                            };
                        o.children[0].getComponent(cc.Animation) && o.children[0].getComponent(cc.Animation).play(),
                            this.schedule(i, 0.15),
                            (this.zb_wz10.children[0].active = !0),
                            this.scheduleOnce(function () {
                                e.onEvent();
                            }, 0.5);
                        break;
                    case 1:
                        this.MateriaNode.children[0].active = !0;
                        for (var r = 0; r < this.MateriaNode.children[0].childrenCount; r++)
                            for (var a = 0; a < this.MateriaNode.children[0].children[r].childrenCount; a++)
                                null != this.MateriaNode.children[0].children[r].children[a].children[0] &&
                                    ((this.MateriaNode.children[0].children[r].children[a].active = !1),
                                    (this.MateriaNode.children[0].children[r].children[a].scale = 1.1),
                                    this.nodes.push(this.MateriaNode.children[0].children[r].children[a]));
                        var s = 0,
                            l = function (t) {
                                (t.active = !0),
                                    cc
                                        .tween(t)
                                        .to(0.1, {scale: 0.8})
                                        .call(function () {
                                            u.app.sound.playEffect("数据出现"),
                                                s++,
                                                null != e.nodes[s]
                                                    ? l(e.nodes[s])
                                                    : ((e.nodes = []),
                                                      (e.zb_wz10.children[0].active = !0),
                                                      e.onEvent());
                                        })
                                        .start();
                            };
                        l(this.nodes[s]),
                            (this.MateriaNode.parent.height = this.oldHeight),
                            this.MateriaNode.parent.height < this.showNodeH &&
                                (this.MateriaNode.parent.height = this.showNodeH);
                }
        }),
        (m.prototype.showMaterial = function (t) {
            var e = new cc.Node(),
                o = e.addComponent(cc.Layout);
            return (
                (o.type = cc.Layout.Type.VERTICAL),
                (o.resizeMode = cc.Layout.ResizeMode.CONTAINER),
                (e.active = !1),
                this.MateriaNode.addChild(e),
                (this.showNodeH = 150 * this.addLine(e, t)),
                e
            );
        }),
        (m.prototype.addLine = function (t, e) {
            for (var o = [], n = 0; n < e.length; n++)
                (e[n].type == h.Prop.drawing && 0 == e[n].profit.draw.quantity) || o.push(e[n]);
            var i = 0,
                r = [];
            for (r.length, n = 0; n < o.length; n++)
                (r[i] = o[n]),
                    5 == ++i && ((i = 0), this.showProfit(t, r), (r = [])),
                    n == o.length - 1 && 0 != i && this.showProfit(t, r);
            return Math.ceil(o.length / 5);
        }),
        (m.prototype.showProfit = function (t, e) {
            var o = cc.instantiate(this.line);
            o.getComponent(d.default).setBlock(e, h.Prop.drawing), t.addChild(o), (o.group = "default");
        }),
        r([c.autoBind("cc.Node", "Layout/treasureChestAn")], m.prototype, "treasureChestAn", void 0),
        r([c.autoBind("cc.Node", "Layout/treasureChestAn/bx_icon")], m.prototype, "bx_icon", void 0),
        r([c.autoBind("cc.Node", "Layout/zb_wz10")], m.prototype, "zb_wz10", void 0),
        r([c.autoBind("cc.Node", "Layout/btd_1/textUI")], m.prototype, "textUI", void 0),
        r([c.autoBind("cc.Node", "Layout/zb_fg1/MateriaNode")], m.prototype, "MateriaNode", void 0),
        r([c.autoBind("cc.Node", "bg")], m.prototype, "bg", void 0),
        r([t([cc.SpriteFrame])], m.prototype, "textUIs", void 0),
        r([t([cc.SpriteFrame])], m.prototype, "treasureChestIcons", void 0),
        r([t([cc.SpriteFrame])], m.prototype, "treasureChestIconsOpen", void 0),
        r([t(cc.Prefab)], m.prototype, "line", void 0),
        r([e], m));
function m() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.treasureChestAn = null),
        (t.bx_icon = null),
        (t.zb_wz10 = null),
        (t.textUI = null),
        (t.MateriaNode = null),
        (t.bg = null),
        (t.textUIs = []),
        (t.treasureChestIcons = []),
        (t.treasureChestIconsOpen = []),
        (t.line = null),
        (t.type = 0),
        (t.showNode = null),
        (t.oldHeight = 0),
        (t.profitList = []),
        (t.nodes = []),
        (t.showNodeH = 0),
        (t.wobble = null),
        (t.treasureChestNodeY = 0),
        t
    );
}
o.default = e;
