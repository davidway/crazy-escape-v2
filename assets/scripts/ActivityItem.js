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
    l = t("CCImage"),
    c = t("MathUtil"),
    u = t("BaseUI"),
    p = t("ActivityController"),
    h = t("MultipleController"),
    d = t("ConfData"),
    f = t("GameEnums"),
    y = t("Prop"),
    g = t("TrackType"),
    m = t("EffectMgr"),
    _ = t("GameMgr"),
    v = t("btnDrawBlock"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = u.default),
        i(b, a),
        (b.prototype.onLoad = function () {
            h.default.inst.Breathing(this.countNode, 1.2, 1, 0.9);
        }),
        (b.prototype.onEnable = function () {
            var t = this;
            this.on(this.btnStart, this.onBtnStartClick, this),
                this.node.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        a.prototype.cloesView.call(t);
                    },
                    this
                );
        }),
        (b.prototype.onDisable = function () {
            this.off(this.btnStart);
        }),
        (b.prototype.setData = function (t) {
            (this.content.active = null != t),
                (this.noOpen.active = null == t),
                (this._data = t),
                this._data && this.updateView();
        }),
        (b.prototype.updateView = function () {
            var i = this;
            this._data.produce.forEach(function (t, e) {
                var o = null,
                    n = {};
                switch (t) {
                    case y.Prop.randomEquip:
                    case y.Prop.randomGreenEquip:
                    case y.Prop.randomBlueEquip:
                    case y.Prop.randomPurpleEquip:
                    case y.Prop.randomRedeEquip:
                        n = {EquipType: 0};
                }
                i.rewards.children[e]
                    ? (o = i.rewards.children[e]).getComponent(v.default).setData(n, t, !1, 3)
                    : ((o = cc.instantiate(i.Block)).getComponent(v.default).setData(n, t, !1, 3),
                      (o.parent = i.rewards)),
                    (o.scale = 0.7),
                    (o.y = -2);
            }),
                this.icon.setSource("texture/activity/" + this._data.icon),
                this.descIcon.setSource("texture/activity/" + this._data.descIcon),
                this.nameIcon.setSource("texture/activity/" + this._data.nameIcon);
            var t = p.default.inst.getCanPlayCount(this._data.id);
            (this.countLab.string = t + ""), (this.countNode.active = 0 < t);
        }),
        (b.prototype.onBtnStartClick = function () {
            var t, e;
            p.default.inst.getCanPlayCount(this._data.id) <= 0
                ? m.default.inst.showTips("今天副本次数已用完!")
                : (null === (e = s.app.track) || void 0 === e || e.trackEvent(g.TrackType.Enter_Activity),
                  p.default.inst.addPlayCount(this._data.id),
                  (t =
                      1 == this._data.chapter_id.length
                          ? 0
                          : c.default.randomRangeInt(0, this._data.chapter_id.length)),
                  (e = this._data.chapter_id[t]),
                  d.default.inst.chapterConf.getChapterVo(e).type == f.Map_Group.ENDLESS &&
                      (null === (t = s.app.track) || void 0 === t || t.trackEvent("click_endless")),
                  _.default.inst.playGame(e, !1),
                  console.log("活动副本:", e));
        }),
        r([e(cc.Node)], b.prototype, "content", void 0),
        r([e(cc.Node)], b.prototype, "noOpen", void 0),
        r([e(cc.Node)], b.prototype, "btnStart", void 0),
        r([e(cc.Node)], b.prototype, "countNode", void 0),
        r([e(cc.Node)], b.prototype, "rewards", void 0),
        r([e(l.default)], b.prototype, "icon", void 0),
        r([e(l.default)], b.prototype, "descIcon", void 0),
        r([e(l.default)], b.prototype, "nameIcon", void 0),
        r([e(cc.Label)], b.prototype, "countLab", void 0),
        r([e(cc.Prefab)], b.prototype, "Block", void 0),
        r([t], b));
function b() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.content = null),
        (t.noOpen = null),
        (t.btnStart = null),
        (t.countNode = null),
        (t.rewards = null),
        (t.icon = null),
        (t.descIcon = null),
        (t.nameIcon = null),
        (t.countLab = null),
        (t.Block = null),
        (t._data = null),
        t
    );
}
o.default = t;
