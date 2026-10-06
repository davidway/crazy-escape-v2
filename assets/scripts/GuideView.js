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
    u = t("GuideController"),
    p = t("GameMgr"),
    h = t("EventTypes"),
    d = t("App"),
    f = cc._decorator,
    e = f.ccclass,
    t = f.property,
    e =
        (f.inspector,
        (a = s.default),
        i(y, a),
        (y.prototype.initView = function () {
            (this.panel.active = !1), (this.ctx = this.mask._graphics), u.GuideController.setView(this);
        }),
        (y.prototype.updateView = function () {
            this.content.position = cc.v3(0, 200 - (cc.winSize.height >> 1));
        }),
        (y.prototype.setData = function (t) {
            (this.hand.node.active = !1),
                (this._data = t),
                (this.rect = null),
                (this.circle = null),
                (this.mask.node.active = "" != t.path && null != t.path),
                (this.panel.active = 1 == t.desc_visible),
                (this.btnBg.active = 1 == t.dark),
                (this.btnBg.opacity = null == t.opacity ? 180 : t.opacity),
                (this.maskRect.opacity = null == t.opacity ? 180 : t.opacity),
                d.app.gui.closeUI(l.UIEnum.ContinueGameView),
                d.app.gui.closeUI(l.UIEnum.EverydayRewardView);
            var e,
                o = 0;
            0 == t.weight
                ? (o = -(cc.winSize.height >> 1) + (0 == t.offsetY ? 200 : t.offsetY))
                : 1 == t.weight
                ? (o = (cc.winSize.height >> 1) + t.offsetY)
                : 2 == t.weight
                ? (o = t.offsetY)
                : 3 == t.weight &&
                  ((e = d.app.platform.getMenuButtonBoundingClientRect()) &&
                      (o = (cc.winSize.height >> 1) - e.center * e.ratio + t.offsetY),
                  console.log("[GuideView]-->[line:90]:", cc.winSize.height >> 1, o)),
                (this.content.position = cc.v3(0, o)),
                t.path && this.initHollow(t),
                t.desc_visible && (this.descLab.string = t.desc),
                this.initEvent();
        }),
        (y.prototype.clearView = function () {
            var t;
            (this._data = null),
                (this.hand.node.active = !1),
                (this.mask.node.active = !1),
                (this.btnBg.active = !1),
                (this.panel.active = !1),
                null === (t = this.ctx) || void 0 === t || t.clear();
        }),
        (y.prototype.initEvent = function () {
            this.btnBg.off(cc.Node.EventType.TOUCH_START),
                this.node.off(cc.Node.EventType.TOUCH_START),
                this.btnBg.active,
                this.node.on(cc.Node.EventType.TOUCH_START, this.addSetSwallowTouchesEventListener, this);
        }),
        (y.prototype.initHollow = function (t) {
            var e, o, n;
            t &&
                ((e = cc.find(t.path))
                    ? ((u.GuideController.uuid = e.uuid),
                      (n = e.getBoundingBoxToWorld()),
                      (e = cc.v3(n.x + n.width - 40, n.y + 5)),
                      1 == t.shape
                          ? ((o = this.node.convertToNodeSpaceAR(cc.v2(n.x, n.y))),
                            (n.x = o.x),
                            (n.y = o.y),
                            this.addRect(n))
                          : 2 == t.shape &&
                            ((o = this.node.convertToNodeSpaceAR(cc.v2(n.x + 0.5 * n.width, n.y + 0.5 * n.height))),
                            (n = 0.5 * Math.max(n.width, n.height)),
                            this.addCircle(o, n)),
                      this._data.isHand &&
                          ((e = this.node.convertToNodeSpaceAR(e.add(cc.v3(30, -10)))), this.showHand(e)))
                    : console.log("指引-->找不到", t.path));
        }),
        (y.prototype.addRect = function (t) {
            (this.rect = t),
                this.ctx && (this.ctx.rect(t.x, t.y, t.width, t.height), this.ctx.stroke(), this.ctx.fill());
        }),
        (y.prototype.addCircle = function (t, e) {
            (this.circle = {pt: t, radius: e}),
                this.ctx && (this.ctx.circle(t.x, t.y, e), this.ctx.stroke(), this.ctx.fill());
        }),
        (y.prototype.showHand = function (t) {
            this._data.hand_offset && t.addSelf(cc.v3(this._data.hand_offset.x, this._data.hand_offset.y)),
                (this.hand.node.angle = this._data.hand_angle || 0),
                (this.hand.node.active = !0),
                (this.hand.node.position = t);
        }),
        (y.prototype.update = function (t) {
            (this.time += t),
                0.2 < this.time &&
                    ((this.idx = (this.idx + 1) % 2), (this.time = 0), (this.hand.spriteFrame = this.hands[this.idx]));
        }),
        (y.prototype.onBgClick = function () {
            this.onBtnBgClick(null);
        }),
        (y.prototype.onBtnBgClick = function () {
            1 == this._data.idx && p.default.inst.gamePlaying(), this.clearView(), u.GuideController.guideNext();
        }),
        (y.prototype.addSetSwallowTouchesEventListener = function (t) {
            this.mask.node.active
                ? (this.node._touchListener.setSwallowTouches(!0),
                  (t = this.node.convertToNodeSpaceAR(t.getLocation())),
                  ((this.circle && this.circle.pt.sub(t).mag() < this.circle.radius) ||
                      (this.rect && this.rect.contains(t))) &&
                      this.node._touchListener.setSwallowTouches(!1))
                : this.node._touchListener.setSwallowTouches(!1);
        }),
        r([c.autoBind("cc.Node", "mask/maskRect")], y.prototype, "maskRect", void 0),
        r([c.autoBind("cc.Sprite", "hand")], y.prototype, "hand", void 0),
        r([c.autoBind("cc.Node", "btnBg")], y.prototype, "btnBg", void 0),
        r([c.autoBind("cc.Node", "panel")], y.prototype, "panel", void 0),
        r([c.autoBind("cc.Node", "panel/content")], y.prototype, "content", void 0),
        r([c.autoBind("cc.Label", "panel/content/descLab")], y.prototype, "descLab", void 0),
        r([c.autoBind("cc.Mask", "mask")], y.prototype, "mask", void 0),
        r([t([cc.SpriteFrame])], y.prototype, "hands", void 0),
        r([c.gameEvent(h.EventType.Guide_Bg_Click)], y.prototype, "onBgClick", null),
        r([e], y));
function y() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.maskRect = null),
        (t.hand = null),
        (t.btnBg = null),
        (t.panel = null),
        (t.content = null),
        (t.descLab = null),
        (t.mask = null),
        (t.hands = []),
        (t.ctx = null),
        (t.rect = null),
        (t.circle = null),
        (t._data = null),
        (t.time = 0),
        (t.idx = 0),
        t
    );
}
o.default = e;
