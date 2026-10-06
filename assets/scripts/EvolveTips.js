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
    l = t("LayerMgr"),
    c = t("BaseUI"),
    u = t("EventTypes"),
    p = t("EvolveController"),
    h = t("GuideController"),
    d = t("MultipleController"),
    f = t("UserDataController"),
    y = t("TrackType"),
    g = t("EffectMgr"),
    m = t("UIEnum"),
    TCA = t("TalentChapterArcade"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = c.default),
        i(_, a),
        (_.prototype.onLoad = function () {
            var t = this;
            (this.intween = cc
                .tween(this.node)
                .call(function () {
                    t.node.scale = 0;
                })
                .to(0.1, {scale: 1})
                .delay(0.1)
                .call(function () {
                    var t;
                    22 == (null === (t = h.GuideController.guideVo) || void 0 === t ? void 0 : t.idx) &&
                        h.GuideController.guideStart();
                })),
                (this.outtween = cc
                    .tween(this.node)
                    .call(function () {
                        t.node.scale = 1;
                    })
                    .to(0.1, {scale: 0})
                    .call(function () {
                        t.node.active = !1;
                    }));
        }),
        (_.prototype.show = function (t) {
            var e = this.data != t;
            (this.data = t),
                (this.nameLab.string = t.name),
                (this.detailLab.string = t.detail),
                (this.descLab.string = t.desc),
                (this.gold.active = 1 == t.group),
                (this.gene.active = 2 == t.group),
                (this.valueLab.string = "x" + t.cost),
                (this.btnLab.string = 1 == t.group ? "解锁" : "关键进化");
            var o = 0,
                n = 0;
            1 == t.group
                ? ((o = p.default.inst.getNormalid()), (n = f.default.inst.gold))
                : 2 == t.group && ((o = p.default.inst.getSpecialid()), (n = f.default.inst.gene));
            var i,
                r = f.default.inst.level;
            1 == t.group
                ? o == t.id && r >= t.level
                    ? ((this.node.height = 270),
                      (this.btnUnLock.active = !0),
                      (this.valueLab.node.color = n >= t.cost ? cc.Color.WHITE : cc.Color.RED))
                    : ((this.btnUnLock.active = !1), (this.node.height = 220))
                : 2 == t.group &&
                  ((i = p.default.inst.getNormalid() > t.need),
                  o == t.id && r >= t.level && i
                      ? ((this.node.height = 270),
                        (this.btnUnLock.active = !0),
                        (this.valueLab.node.color = n >= t.cost ? cc.Color.WHITE : cc.Color.RED))
                      : ((this.btnUnLock.active = !1), (this.node.height = 220))),
                this.node.children.forEach(function (t) {
                    t = t.getComponent(cc.Widget);
                    t && t.updateAlignment();
                }),
                e && ((this.node.active = !0), this.outtween.stop(), this.intween.start());
            TCA.applyEvolveTips(this);
        }),
        (_.prototype.hide = function () {
            (this.data = null), this.intween.stop(), this.outtween.start();
        }),
        (_.prototype.onEnable = function () {
            this.on(this.btnUnLock, this.onUnlockItem, this);
        }),
        (_.prototype.onDisable = function () {
            this.off(this.btnUnLock);
        }),
        (_.prototype.onUnlockItem = function () {
            var t;
            d.default.inst.prohibit(),
                0 == h.GuideController.getGuide("Evolution") &&
                    (h.GuideController.setGuide("Evolution", 1),
                    null === (t = s.app.track) || void 0 === t || t.trackEvent(y.TrackType.First_Evolve)),
                1 == this.data.group
                    ? p.default.inst.unlockNormal(this.data.id) || g.default.inst.showTips("金币不足")
                    : 2 == this.data.group &&
                      (p.default.inst.unlockSpecial(this.data.id) ||
                          s.app.gui.openUI(m.UIEnum.GeneLackView, l.LayerEnum.VIEW_LAYER, {count: this.data.cost})),
                p.default.inst.updateTask(),
                (this.node.active = !1),
                (this.data = null),
                s.app.event.emit(u.EventType.Home_Evolve_Change_Page);
        }),
        r([e(cc.Label)], _.prototype, "nameLab", void 0),
        r([e(cc.Label)], _.prototype, "detailLab", void 0),
        r([e(cc.Label)], _.prototype, "descLab", void 0),
        r([e(cc.Label)], _.prototype, "valueLab", void 0),
        r([e(cc.Node)], _.prototype, "gold", void 0),
        r([e(cc.Node)], _.prototype, "gene", void 0),
        r([e(cc.Node)], _.prototype, "btnUnLock", void 0),
        r([e(cc.Label)], _.prototype, "btnLab", void 0),
        r([t], _));
function _() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.nameLab = null),
        (t.detailLab = null),
        (t.descLab = null),
        (t.valueLab = null),
        (t.gold = null),
        (t.gene = null),
        (t.btnUnLock = null),
        (t.btnLab = null),
        (t.data = null),
        (t.intween = null),
        (t.outtween = null),
        t
    );
}
o.default = t;
