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
    c = t("BaseUI"),
    u = t("EventTypes"),
    p = t("UserDataController"),
    h = t("ConfData"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = c.default),
        i(d, a),
        (d.prototype.onEnable = function () {
            s.app.event.on(u.EventType.User_Selected_Skin, this.onHeroFighting, this),
                this.on(this.node, this.onItemClick, this);
        }),
        (d.prototype.onDisable = function () {
            s.app.event.targetOff(this), this.off(this.node);
        }),
        (d.prototype.setData = function (t) {
            t = h.default.inst.playerSkinConf.getPlayerSkinVoByIndex(t);
            (this.skin_id = t.id),
                this.icon.setSource(t.head, "icons"),
                this.onHeroFighting(),
                this.checkGray(),
                this.checkRedPoint();
        }),
        (d.prototype.checkGray = function () {
            this.gray.active = !p.default.inst.hasSkin(this.skin_id);
        }),
        (d.prototype.checkRedPoint = function () {
            var t, e;
            p.default.inst.hasSkin(this.skin_id)
                ? (this.rp.active = !1)
                : ((e =
                      1 == (t = h.default.inst.playerSkinConf.getPlayerSkinVoById(this.skin_id)).unlock_type
                          ? p.default.inst.getSkinDebrisNum(this.skin_id)
                          : p.default.inst.gem),
                  (this.rp.active = e >= t.unlock_num));
        }),
        (d.prototype.onHeroFighting = function () {
            this.checkGray(), this.checkRedPoint(), (this.fighting.active = this.skin_id == p.default.inst.skin);
        }),
        (d.prototype.onItemClick = function () {
            s.app.event.emit(u.EventType.On_Hero_Skin_Item_Click, this.skin_id);
        }),
        r([e(l.default)], d.prototype, "icon", void 0),
        r([e(cc.Node)], d.prototype, "fighting", void 0),
        r([e(cc.Node)], d.prototype, "gray", void 0),
        r([e(cc.Node)], d.prototype, "rp", void 0),
        r([t], d));
function d() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.icon = null), (t.fighting = null), (t.gray = null), (t.rp = null), (t.skin_id = 0), t;
}
o.default = t;
