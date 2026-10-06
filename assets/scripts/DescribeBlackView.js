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
    l = t("decorator"),
    c = t("Prop"),
    u = ["", "武器", "盔甲", "项链", "腰带", "手套", "战靴"],
    p = cc._decorator,
    e = p.ccclass,
    t = p.property,
    e =
        (p.inspector,
        (a = s.default),
        i(h, a),
        (h.prototype.initView = function () {}),
        (h.prototype.updateView = function () {
            this.init();
        }),
        (h.prototype.show = function (t) {
            this.param = t;
        }),
        (h.prototype.init = function () {
            this.node.setPosition(
                this.node.parent.convertToNodeSpaceAR(this.param.pos).x,
                this.node.parent.convertToNodeSpaceAR(this.param.pos).y
            ),
                (this.title.scale = 1);
            var t = "";
            switch (this.param.type) {
                case c.Prop.equip:
                    (this.title.getComponent(cc.Label).string = "装备"), (this.describe.string = this.param.text);
                    break;
                case c.Prop.drawing:
                    (this.title.getComponent(cc.Label).string = "装备图纸"),
                        (this.describe.string = "用于" + this.param.text + "升级的图纸材料");
                    break;
                case c.Prop.gold:
                    (this.title.getComponent(cc.Label).string = "金币"),
                        (this.describe.string = "疯狂大逃杀世界的通行货币");
                    break;
                case c.Prop.Exp:
                    (this.title.getComponent(cc.Label).string = "经验"), (this.describe.string = "可以提升玩家等级");
                    break;
                case c.Prop.randomDrawing:
                    (this.title.getComponent(cc.Label).string = "随机图纸"),
                        (this.describe.string = "用于强化武器装备的图纸");
                    break;
                case c.Prop.randomEquip:
                    (t = "随机白色装备"),
                        null != this.param.EquipType && (t = "随机" + u[this.param.EquipType] + "装备"),
                        (this.title.getComponent(cc.Label).string = t),
                        (this.describe.string = "武器装备能加强各种属性");
                    break;
                case c.Prop.Gem:
                    (this.title.getComponent(cc.Label).string = "钻石"),
                        (this.describe.string = "疯狂大逃杀世界的通行货币");
                    break;
                case c.Prop.gene:
                    (this.title.getComponent(cc.Label).string = "基因"), (this.describe.string = "用于进化技能");
                    break;
                case c.Prop.energy:
                    (this.title.getComponent(cc.Label).string = "食物"),
                        (this.describe.string = "大逃杀世界用于战斗的能量");
                    break;
                case c.Prop.randomGreenEquip:
                    (t = "随机普通装备"),
                        null != this.param.EquipType && (t = "随机普通" + u[this.param.EquipType] + "装备"),
                        (this.title.getComponent(cc.Label).string = t),
                        (this.describe.string = "武器装备能加强各种属性");
                    break;
                case c.Prop.randomBlueEquip:
                    (t = "随机优秀装备"),
                        null != this.param.EquipType && (t = "随机优秀" + u[this.param.EquipType] + "装备"),
                        (this.title.getComponent(cc.Label).string = t),
                        (this.describe.string = "武器装备能加强各种属性");
                    break;
                case c.Prop.randomPurpleEquip:
                    (t = "随机精良装备"),
                        null != this.param.EquipType && (t = "随机精良" + u[this.param.EquipType] + "装备"),
                        (this.title.getComponent(cc.Label).string = t),
                        (this.describe.string = "武器装备能加强各种属性");
                    break;
                case c.Prop.randomRedeEquip:
                    (t = "随机史诗装备"),
                        null != this.param.EquipType && (t = "随机史诗" + u[this.param.EquipType] + "装备"),
                        (this.title.getComponent(cc.Label).string = t),
                        (this.describe.string = "武器装备能加强各种属性");
            }
        }),
        r([l.autoBind("cc.Node", "title")], h.prototype, "title", void 0),
        r([l.autoBind("cc.Label", "describe")], h.prototype, "describe", void 0),
        r([t([cc.SpriteFrame])], h.prototype, "titles", void 0),
        r([e], h));
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.title = null), (t.describe = null), (t.titles = []), (t.param = null), t;
}
o.default = e;
