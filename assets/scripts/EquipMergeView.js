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
    u = t("IUserEquipVo"),
    p = t("EquipController"),
    h = t("EventTypes"),
    d = t("EquipType"),
    f = t("MathUtil"),
    y = t("ConfData"),
    g = t("App"),
    m = t("UIEnum"),
    _ = t("LayerMgr"),
    v = t("MainPageType"),
    b = cc._decorator,
    e = b.ccclass,
    t = b.property,
    e =
        (b.inspector,
        (a = s.default),
        i(w, a),
        (w.prototype.initView = function () {
            this.mergeResult.node.active = !1;
        }),
        (w.prototype.updateView = function () {
            this.clearMerge();
        }),
        (w.prototype.setSrcEquip = function (t) {
            (this.srcEquip = t),
                (this.tarEquip = f.default.copyObj(t)),
                (this.tarEquip.quality += 1),
                this.equitSrc.setData(this.srcEquip),
                this.equipTarget.setData(this.tarEquip),
                (this.equipTarget.node.active = !0),
                (this.equitSrc.node.active = !0);
            var e = y.default.inst.equipConf.getEquipQualityVo(this.srcEquip.id, this.srcEquip.quality),
                t = y.default.inst.equipConf.getEquipQualityVo(this.tarEquip.id, this.tarEquip.quality);
            (this.levelLab1.string = e.max_level + ""),
                (this.levelLab2.string = t.max_level + ""),
                (this.attrLab.string = e.attr_type == d.EquipAttrType.ATTACK ? "攻击" : "生命"),
                (this.valueLab1.string =
                    p.EquipController.inst.clacAttr(this.srcEquip.id, this.srcEquip.level, !0) + ""),
                (this.valueLab2.string =
                    p.EquipController.inst.clacAttr(this.tarEquip.id, this.tarEquip.level, !0) + ""),
                t.effect_desc
                    ? ((this.infoLab.node.active = !0),
                      (t = t.effect_desc.replace("d%", 100 * t.effect_value + "%")),
                      (this.infoLab.string = t))
                    : ((this.infoLab.node.active = !1), (this.infoLab.string = "")),
                (this.detail.active = !0),
                this.updateList();
        }),
        (w.prototype.setMat = function (t) {
            var e = y.default.inst.equipConf.getEquipMergeConfVo(this.srcEquip.quality + 1);
            this.matEquip1
                ? 2 != e.mat_count ||
                  this.matEquip2 ||
                  ((this.matEquip2 = t),
                  (this.equipMat2.node.active = !0),
                  this.equipMat2.setData(t),
                  this.updateList())
                : ((this.matEquip1 = t),
                  (this.equipMat1.node.active = !0),
                  this.equipMat1.setData(t),
                  this.updateList()),
                ((1 == e.mat_count && this.matEquip1) || (2 == e.mat_count && this.matEquip1 && this.matEquip2)) &&
                    (this.btnMerge.active = !0);
        }),
        (w.prototype.clearMerge = function () {
            (this.equipTarget.node.active = !1),
                (this.equitSrc.node.active = !1),
                (this.equipMat1.node.active = !1),
                (this.equipMat2.node.active = !1),
                (this.detail.active = !1),
                (this.srcEquip = null),
                (this.tarEquip = null),
                (this.matEquip1 = null),
                (this.matEquip2 = null),
                (this.btnMerge.active = !1),
                this.updateList();
        }),
        (w.prototype.cancelMat = function (t) {
            t == this.matEquip1 && ((this.equipMat1.node.active = !1), (this.matEquip1 = null)),
                t == this.matEquip2 && ((this.equipMat2.node.active = !1), (this.matEquip2 = null)),
                (this.btnMerge.active = !1),
                this.updateList();
        }),
        (w.prototype.updateList = function () {
            var i = this;
            if (
                ((this.equips.length = 0),
                p.EquipController.inst.getEquips().forEach(function (t) {
                    var e;
                    t.quality < d.EquipQualityType.MAX - 1 &&
                        (i.srcEquip
                            ? t == i.srcEquip ||
                              t.status == u.EquipStatus.ON ||
                              t.equipType != i.srcEquip.equipType ||
                              t.quality != i.srcEquip.quality ||
                              (((1 ==
                                  (e = y.default.inst.equipConf.getEquipMergeConfVo(i.srcEquip.quality + 1)).mat_type &&
                                  t.id == i.srcEquip.id) ||
                                  2 == e.mat_type) &&
                                  i.equips.push(t))
                            : i.equips.push(t));
                }),
                this.srcEquip || this.equips.length,
                this.equips.sort(function (t, e) {
                    if (!i.srcEquip) {
                        var o = p.EquipController.inst.canMerge(t.id, t.equipType, t.quality),
                            n = p.EquipController.inst.canMerge(e.id, e.equipType, e.quality);
                        if (o && n) return e.quality - t.quality;
                        if (o) return -1;
                        if (n) return 1;
                    }
                    return t.status == e.status ? e.quality - t.quality : e.status - t.status;
                }),
                (this.list.numItems = this.equips.length),
                this.srcEquip)
            )
                this.interactable(this.btnSynthes, !1);
            else {
                for (var t = !1, e = 0, o = this.equips; e < o.length; e++) {
                    var n = o[e];
                    if (
                        n.quality <= d.EquipQualityType.GREEN &&
                        p.EquipController.inst.canMerge(n.id, n.equipType, n.quality)
                    ) {
                        t = !0;
                        break;
                    }
                }
                this.interactable(this.btnSynthes, t);
            }
        }),
        (w.prototype.onItemRender = function (t, e) {
            (t = t.getComponent(c.default)), (e = this.equips[e]);
            t.setData(e),
                (t.selected = e == this.matEquip1 || e == this.matEquip2),
                !this.srcEquip &&
                    e.quality < d.EquipQualityType.MAX - 1 &&
                    (t.isRed = p.EquipController.inst.canMerge(e.id, e.equipType, e.quality));
        }),
        (w.prototype.onOneKeyMerge = function () {
            (this.mergeList.length = 0), this.onMerge();
        }),
        (w.prototype.onMerge = function () {
            var e = [];
            p.EquipController.inst.getEquips().forEach(function (t) {
                t.quality <= d.EquipQualityType.GREEN &&
                    p.EquipController.inst.canMerge(t.id, t.equipType, t.quality) &&
                    e.push(t);
            });
            var t = !1;
            if (1 < e.length) {
                e.sort(function (t, e) {
                    return e.status - t.status;
                });
                for (
                    var o = e[0], n = y.default.inst.equipConf.getEquipMergeConfVo(o.quality + 1), i = [], r = 1;
                    r < e.length;
                    r++
                ) {
                    var a = e[r];
                    if (
                        a.id == o.id &&
                        a.quality == o.quality &&
                        (i.length < n.mat_count && i.push(a), i.length == n.mat_count)
                    ) {
                        (t = !0), p.EquipController.inst.mergeEquip(o, i), this.mergeList.push(o);
                        break;
                    }
                }
            }
            if (t) this.onMerge();
            else {
                e.length = 0;
                for (var s = p.EquipController.inst.getEquips(), l = 0, c = this.mergeList; l < c.length; l++) {
                    var u = c[l];
                    s.includes(u) && !e.includes(u) && e.push(u);
                }
                console.log("[EquipMergeView]-->[line:320]:", e),
                    (this.mergeResult.node.active = !0),
                    this.mergeResult.setEquips(e),
                    this.updateView();
            }
        }),
        (w.prototype.onItemClick = function (t) {
            t != this.equipTarget &&
                (t != this.equitSrc
                    ? (t = t.getData()) != this.matEquip1 && t != this.matEquip2
                        ? this.srcEquip
                            ? this.setMat(t)
                            : this.setSrcEquip(t)
                        : this.cancelMat(t)
                    : this.clearMerge());
        }),
        (w.prototype.onBtnMergeClick = function () {
            var t = [];
            this.matEquip1 && t.push(this.matEquip1),
                this.matEquip2 && t.push(this.matEquip2),
                p.EquipController.inst.mergeEquip(this.srcEquip, t),
                (this.mergeResult.node.active = !0),
                this.mergeResult.setEquips([this.tarEquip]),
                this.updateView();
        }),
        (w.prototype.onBtnBackClick = function () {
            g.app.gui.openUI(m.UIEnum.HomeView, _.LayerEnum.VIEW_LAYER, {page: v.MainPageType.Equip}),
                g.app.gui.closeUI(m.UIEnum.EquipMergeView);
        }),
        (w.prototype.onBtnSortClick = function () {}),
        (w.prototype.onBtnSynthesClick = function () {
            this.onOneKeyMerge();
        }),
        r([l.autoBind("MergeResultView", "mergeResult")], w.prototype, "mergeResult", void 0),
        r([l.autoBind("cc.Node", "detail")], w.prototype, "detail", void 0),
        r([l.autoBind("List", "list")], w.prototype, "list", void 0),
        r([l.autoBind("cc.Node", "bottom/btnMerge")], w.prototype, "btnMerge", void 0),
        r([l.autoBind("cc.Node", "bottom/btnBack")], w.prototype, "btnBack", void 0),
        r([l.autoBind("EquipBlock", "equipTarget")], w.prototype, "equipTarget", void 0),
        r([l.autoBind("EquipBlock", "equitSrc")], w.prototype, "equitSrc", void 0),
        r([l.autoBind("EquipBlock", "layout/equipMat1")], w.prototype, "equipMat1", void 0),
        r([l.autoBind("EquipBlock", "layout/equipMat2")], w.prototype, "equipMat2", void 0),
        r([l.autoBind("cc.Label", "detail/layout/item1/levelLab1")], w.prototype, "levelLab1", void 0),
        r([l.autoBind("cc.Label", "detail/layout/item1/levelLab2")], w.prototype, "levelLab2", void 0),
        r([l.autoBind("cc.Label", "detail/layout/item2/attrLab")], w.prototype, "attrLab", void 0),
        r([l.autoBind("cc.Label", "detail/layout/item2/valueLab1")], w.prototype, "valueLab1", void 0),
        r([l.autoBind("cc.Label", "detail/layout/item2/valueLab2")], w.prototype, "valueLab2", void 0),
        r([l.autoBind("cc.Label", "detail/layout/infoLab")], w.prototype, "infoLab", void 0),
        r([l.autoBind("cc.Node", "middle/btn/btnSort")], w.prototype, "btnSort", void 0),
        r([l.autoBind("cc.Node", "middle/btn/btnSynthes")], w.prototype, "btnSynthes", void 0),
        r([t(cc.Sprite)], w.prototype, "sortIcon", void 0),
        r([t([cc.SpriteFrame])], w.prototype, "sortIcons", void 0),
        r([l.gameEvent(h.EventType.On_EquipBlock_Click)], w.prototype, "onItemClick", null),
        r([e], w));
function w() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.mergeResult = null),
        (t.detail = null),
        (t.list = null),
        (t.btnMerge = null),
        (t.btnBack = null),
        (t.equipTarget = null),
        (t.equitSrc = null),
        (t.equipMat1 = null),
        (t.equipMat2 = null),
        (t.levelLab1 = null),
        (t.levelLab2 = null),
        (t.attrLab = null),
        (t.valueLab1 = null),
        (t.valueLab2 = null),
        (t.infoLab = null),
        (t.btnSort = null),
        (t.btnSynthes = null),
        (t.sortIcon = null),
        (t.sortIcons = []),
        (t.srcEquip = null),
        (t.tarEquip = null),
        (t.matEquip1 = null),
        (t.matEquip2 = null),
        (t.equips = []),
        (t.mergeList = []),
        (t.sortType = 0),
        t
    );
}
o.default = e;
