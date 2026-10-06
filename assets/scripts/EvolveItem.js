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
    l = t("BaseUI"),
    c = t("EventTypes"),
    u = t("EvolveController"),
    p = t("UserDataController"),
    TCA = t("TalentChapterArcade"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = l.default),
        i(h, a),
        (h.prototype.setSprite = function (t) {
            this.icon.spriteFrame = t;
        }),
        (h.prototype.setData = function (t) {
            (this.data = t), this.updateView();
        }),
        (h.prototype.updateView = function (t) {
            var e;
            this.data &&
                ((e = 1 == this.data.group ? u.default.inst.getNormalid() : u.default.inst.getSpecialid()),
                null != t && t == this.data.id && this.EvolutionSuccess(),
                this.data.id < e ? this.setGray(this.node, !1) : this.setGray(this.node, !0),
                (this.upIcon.active = !1),
                (t = p.default.inst.level),
                this.data.id == e &&
                    t >= this.data.level &&
                    ((e = 0),
                    (t = !1),
                    1 == this.data.group
                        ? ((t = !0), (e = p.default.inst.gold))
                        : ((e = p.default.inst.gene), (t = u.default.inst.getNormalid() > this.data.need)),
                    e >= this.data.cost && t && (this.upIcon.active = !0)));
            TCA.applyEvolveItem(this);
        }),
        (h.prototype.EvolutionSuccess = function () {
            this.border.play();
        }),
        (h.prototype.onEnable = function () {
            this.on(this.node, this.onItemClick, this), this.updateView();
        }),
        (h.prototype.onDisable = function () {
            this.off(this.node);
        }),
        (h.prototype.onItemClick = function () {
            s.app.event.emit(c.EventType.On_Evolve_Item_Click, {data: this.data, pos: this.node.position});
        }),
        r([e(cc.Sprite)], h.prototype, "icon", void 0),
        r([e(cc.Node)], h.prototype, "upIcon", void 0),
        r([e(cc.Animation)], h.prototype, "border", void 0),
        r([t], h));
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.icon = null), (t.upIcon = null), (t.border = null), t;
}
o.default = t;
