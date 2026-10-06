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
    c = t("EquipBlock"),
    u = t("ConfData"),
    p = t("EquipType"),
    h = t("EquipController"),
    d = t("App"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(f, a),
        (f.prototype.initView = function () {
            (this.itemPre = this.mul.node.children[0]), this.items.push(this.itemPre.getComponent(c.default));
        }),
        (f.prototype.updateView = function () {}),
        (f.prototype.setEquips = function (t) {
            (this.equips = t),
                (this.one.active = 1 == t.length),
                (this.mul.node.active = 1 < t.length),
                d.app.sound.playEffect("装备合成成功时音效"),
                1 == t.length ? this.updateOne(t[0]) : this.updateMul(t);
        }),
        (f.prototype.tweenPlay = function (t, e) {
            function o(t) {
                n.scheduleOnce(function () {
                    t[e].start(), null != t[e + 1] && (e++, o(t));
                }, 0.2);
            }
            var n = this;
            o(t);
        }),
        (f.prototype.updateOne = function (t) {
            this.equip.setData(t),
                (this.equip.node.scale = 0),
                (this.zb_fg2.scale = 3),
                (this.zb_fg2.opacity = 0),
                (this.detail.scale = 2),
                (this.detail.opacity = 0),
                (this.btd_1.scale = 3),
                (this.btd_1.opacity = 0),
                (this.twe[0] = cc.tween(this.btd_1).to(0.2, {scale: 1, opacity: 255}, cc.easeIn(3))),
                (this.twe[1] = cc.tween(this.equip.node).to(0.1, {scale: 2}, cc.easeOut(3)).to(0.1, {scale: 1})),
                (this.twe[2] = cc.tween(this.zb_fg2).to(0.2, {scale: 1, opacity: 255}, cc.easeIn(3))),
                (this.twe[3] = cc.tween(this.detail).to(0.2, {scale: 1, opacity: 255}, cc.easeIn(3))),
                this.tweenPlay(this.twe, 0),
                u.default.inst.equipConf.getEquipVo(t.id);
            var e = u.default.inst.equipConf.getEquipQualityVo(t.id, t.quality - 1),
                o = u.default.inst.equipConf.getEquipQualityVo(t.id, t.quality);
            (this.nameLab.string = o.name),
                (this.levelLab1.string = e.max_level + ""),
                (this.levelLab2.string = o.max_level + ""),
                (this.attrLab.string = e.attr_type == p.EquipAttrType.ATTACK ? "攻击" : "生命"),
                (this.valueLab1.string = h.EquipController.inst.clacAttr(t.id, t.level - 1, !0) + ""),
                (this.valueLab2.string = h.EquipController.inst.clacAttr(t.id, t.level, !0) + ""),
                o.effect_desc
                    ? ((o = o.effect_desc.replace("d%", 100 * o.effect_value + "%")), (this.infoLab.string = o))
                    : (this.infoLab.string = "");
        }),
        (f.prototype.updateMul = function (t) {
            t.length <= 4
                ? (this.mul.type = cc.Layout.Type.HORIZONTAL)
                : ((this.mul.node.width = 564), (this.mul.type = cc.Layout.Type.GRID)),
                this.items.forEach(function (t) {
                    t.node.active = !1;
                });
            for (var e = 0, o = t.length; e < o; e++) {
                var n,
                    i = this.items[e];
                i ||
                    (((n = cc.instantiate(this.itemPre)).parent = this.mul.node),
                    (i = n.getComponent(c.default)),
                    this.items.push(i)),
                    i.setData(t[e]),
                    (i.node.active = !0);
            }
            (this.btd_1.scale = 3),
                (this.btd_1.opacity = 0),
                (this.mul.node.scale = 3),
                (this.mul.node.opacity = 0),
                (this.twe[0] = cc.tween(this.btd_1).to(0.2, {scale: 1, opacity: 255}, cc.easeIn(3))),
                (this.twe[1] = cc.tween(this.mul.node).to(0.2, {scale: 1, opacity: 255}, cc.easeIn(3))),
                this.tweenPlay(this.twe, 0);
        }),
        (f.prototype.onBtnBgClick = function () {
            (this.node.active = !1), (this.twe = []);
        }),
        r([l.autoBind("cc.Node", "one/zb_fg2")], f.prototype, "zb_fg2", void 0),
        r([l.autoBind("cc.Node", "one/detail")], f.prototype, "detail", void 0),
        r([l.autoBind("cc.Node", "btd_1")], f.prototype, "btd_1", void 0),
        r([l.autoBind("cc.Node", "btnBg")], f.prototype, "btnBg", void 0),
        r([l.autoBind("cc.Node", "one")], f.prototype, "one", void 0),
        r([l.autoBind("EquipBlock", "one/equip")], f.prototype, "equip", void 0),
        r([l.autoBind("cc.Label", "one/zb_fg2/nameLab")], f.prototype, "nameLab", void 0),
        r([l.autoBind("cc.Label", "one/detail/attrLab")], f.prototype, "attrLab", void 0),
        r([l.autoBind("cc.Label", "one/detail/levelLab1")], f.prototype, "levelLab1", void 0),
        r([l.autoBind("cc.Label", "one/detail/levelLab2")], f.prototype, "levelLab2", void 0),
        r([l.autoBind("cc.Label", "one/detail/valueLab1")], f.prototype, "valueLab1", void 0),
        r([l.autoBind("cc.Label", "one/detail/valueLab2")], f.prototype, "valueLab2", void 0),
        r([l.autoBind("cc.Label", "one/detail/infoLab")], f.prototype, "infoLab", void 0),
        r([l.autoBind("cc.Layout", "mul")], f.prototype, "mul", void 0),
        r([t], f));
function f() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.zb_fg2 = null),
        (t.detail = null),
        (t.btd_1 = null),
        (t.btnBg = null),
        (t.one = null),
        (t.equip = null),
        (t.nameLab = null),
        (t.attrLab = null),
        (t.levelLab1 = null),
        (t.levelLab2 = null),
        (t.valueLab1 = null),
        (t.valueLab2 = null),
        (t.infoLab = null),
        (t.mul = null),
        (t.equips = null),
        (t.items = []),
        (t.itemPre = null),
        (t.mulWidth = 564),
        (t.twe = []),
        t
    );
}
o.default = t;
