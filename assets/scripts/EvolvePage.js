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
    u = t("EventTypes"),
    p = t("EvolveController"),
    h = t("GuideController"),
    d = t("MultipleController"),
    f = t("ConfData"),
    y = t("MainPageType"),
    g = t("TrackType"),
    m = t("EvolveItem"),
    _ = t("EvolveStar"),
    TCA = t("TalentChapterArcade"),
    v = cc._decorator,
    e = v.ccclass,
    t = v.property,
    e =
        (v.inspector,
        (a = c.default),
        i(b, a),
        (b.prototype.initView = function () {
            var t = cc.winSize.height - 1334;
            0 != t && (this.list.node.height += t >> 1),
                this.items1.push(this.item1),
                this.items2.push(this.item2),
                this.stars.push(this.star);
            var e = null,
                o = f.default.inst.evolveConf.getNormalList(),
                n = 200 * o.length + 330;
            this.list.content.height = n;
            for (var i = 0, r = o.length; i < r; i++) {
                var a = o[i];
                i == this.items1.length
                    ? ((e = cc.instantiate(this.item1.node).getComponent(m.default)), this.items1.push(e))
                    : (e = this.items1[i]);
                var s = this.icons[a.type];
                e.setSprite(s), e.setData(a);
                var l,
                    c,
                    u = cc.v3(-200, 200 - n + 200 * i);
                (e.node.position = u),
                    (e.node.parent = this.container),
                    (e.node.name = "item100" + i),
                    this.normalMap.set(a.id, e),
                    (i + 1) % 3 == 0 &&
                        ((c = null),
                        (l = Math.floor(i / 3)) == this.stars.length
                            ? ((c = cc.instantiate(this.star.node).getComponent(_.default)), this.stars.push(c))
                            : (c = this.stars[l]),
                        (c.node.position = cc.v3(0, u.y - 20)),
                        (c.node.parent = this.container),
                        c.setLevel(a.level));
            }
            for (var p = f.default.inst.evolveConf.getSpecialList(), i = 0, r = p.length; i < r; i++)
                (a = p[i]),
                    i == this.items2.length
                        ? ((e = cc.instantiate(this.item2.node).getComponent(m.default)), this.items2.push(e))
                        : (e = this.items2[i]),
                    (s = this.icons[a.type]),
                    e.setSprite(s),
                    e.setData(a),
                    (e.node.position = cc.v3(170, 250 - n + 200 * (3 * a.level - 1) - 30)),
                    (e.node.parent = this.container);
            (this.evolveTips.node.zIndex = this.container.childrenCount + 1),
                this.list.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this),
                this.list.node.on("scroll-began", this.onScrollStart, this),
                this.list.node.on("scroll-ended", this.onScrollEnd, this);
        }),
        (b.prototype.updateView = function () {
            (this.evolveTips.node.active = !1), (this.isScrollEnd = !0);
            var t = p.default.inst.getNormalid(),
                e = this.normalMap.get(t);
            e &&
                ((e = e.node.position),
                console.log(
                    -e.y - (this.list.node.height >> 1),
                    -e.y,
                    this.list.node.height >> 1,
                    this.list.node.height
                ),
                t < 3
                    ? this.list.setContentPosition(cc.v2(0, this.list.content.height - this.list.node.height))
                    : this.list.setContentPosition(cc.v2(0, -e.y - (this.list.node.height >> 1))),
                console.log(
                    -e.y - (this.list.node.height >> 1),
                    -e.y,
                    this.list.node.height >> 1,
                    this.list.node.height
                ),
                4 <= p.default.inst.nomal
                    ? this.list.setContentPosition(cc.v2(0, -e.y - (this.list.node.height >> 1)))
                    : this.list.setContentPosition(cc.v2(0, this.list.content.height - this.list.node.height))),
                this.updateItems(),
                TCA.applyEvolvePage(this),
                (d.default.inst.nowPage = y.MainPageType.Evolve),
                d.default.inst.on(this.node, this),
                d.default.inst.on(this.list.node, this),
                this.showGuide();
        }),
        (b.prototype.showGuide = function () {
            var t;
            21 == (null === (t = h.GuideController.guideVo) || void 0 === t ? void 0 : t.idx) &&
                (null === (t = s.app.track) || void 0 === t || t.trackEvent(g.TrackType.Evolve_Page),
                this.scheduleOnce(function () {
                    console.log("[EvolvePage]-->[line:170]:", h.GuideController.guideVo),
                        h.GuideController.guideStart();
                }, 0.1));
        }),
        (b.prototype.updateItems = function (e) {
            this.items1.forEach(function (t) {
                t.updateView(e);
            }),
                this.items2.forEach(function (t) {
                    t.updateView(e);
                }),
                this.stars.forEach(function (t) {
                    t.updateView();
                });
        }),
        (b.prototype.onTouchUp = function () {
            console.warn("[EvolvePage]");
        }),
        (b.prototype.onTouchStart = function () {
            this.evolveTips.hide();
        }),
        (b.prototype.onScrollStart = function () {
            this.isScrollEnd = !1;
        }),
        (b.prototype.onScrollEnd = function () {
            this.isScrollEnd = !0;
        }),
        (b.prototype.onDisable = function () {
            this.evolveTips.hide(),
                d.default.inst.onDestroy(this.node, this),
                d.default.inst.onDestroy(this.list.node, this);
        }),
        (b.prototype.onGoldUpdate = function () {
            this.updateItems();
        }),
        (b.prototype.onGeneUpdate = function () {
            this.updateItems();
        }),
        (b.prototype.onEvolveUpdate = function (t) {
            this.updateItems(t);
        }),
        (b.prototype.onItemClick = function (t) {
            21 == (null === (e = h.GuideController.guideVo) || void 0 === e ? void 0 : e.idx) &&
                h.GuideController.guideNext(),
                this.isScrollEnd || this.list.stopAutoScroll(),
                this.evolveTips.show(t.data),
                (this.evolveTips.node.position = cc.v3(t.pos.x, t.pos.y + 45));
            var e = this.evolveTips.node.convertToWorldSpaceAR(cc.v3()),
                t = this.list.node.convertToNodeSpaceAR(e);
            -10 < t.y + this.evolveTips.node.height &&
                ((e = t.y + this.evolveTips.node.height + 10),
                ((t = this.list.getContentPosition()).y -= e),
                this.list.scrollToOffset(cc.v2(0, t.y), 0.2));
        }),
        r([l.autoBind("EvolveTips", "list/view/content/container/evolveTips")], b.prototype, "evolveTips", void 0),
        r([l.autoBind("cc.ScrollView", "list")], b.prototype, "list", void 0),
        r([l.autoBind("cc.Node", "list/view/content/container")], b.prototype, "container", void 0),
        r([l.autoBind("EvolveItem", "list/view/content/container/item1")], b.prototype, "item1", void 0),
        r([l.autoBind("EvolveItem", "list/view/content/container/item2")], b.prototype, "item2", void 0),
        r([l.autoBind("EvolveStar", "list/view/content/container/star")], b.prototype, "star", void 0),
        r([t([cc.SpriteFrame])], b.prototype, "icons", void 0),
        r([l.gameEvent(u.EventType.User_Gold_Update)], b.prototype, "onGoldUpdate", null),
        r([l.gameEvent(u.EventType.User_Gene_Update)], b.prototype, "onGeneUpdate", null),
        r([l.gameEvent(u.EventType.User_Evolve_Change)], b.prototype, "onEvolveUpdate", null),
        r([l.gameEvent(u.EventType.On_Evolve_Item_Click)], b.prototype, "onItemClick", null),
        r([e], b));
function b() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.evolveTips = null),
        (t.list = null),
        (t.container = null),
        (t.item1 = null),
        (t.item2 = null),
        (t.star = null),
        (t.icons = []),
        (t.items1 = []),
        (t.items2 = []),
        (t.stars = []),
        (t.normalMap = new Map()),
        (t.isScrollEnd = !0),
        t
    );
}
o.default = e;
