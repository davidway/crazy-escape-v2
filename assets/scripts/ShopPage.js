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
    p = t("GetGemController"),
    h = t("MultipleController"),
    d = t("UserDataController"),
    f = t("ConfData"),
    y = t("TrackType"),
    g = t("CloseUI"),
    m = t("moduleItem"),
    ECA = t("EquipChestArcade"),
    _ = cc._decorator,
    e = _.ccclass,
    t = _.property,
    e =
        (_.inspector,
        (a = c.default),
        i(v, a),
        (v.prototype.initView = function () {
            (this.renovateBtn.active = cc.sys.isBrowser),
                (this._use_shop_modules = f.default.inst.shopConf.getUseModules()),
                this.init();
        }),
        (v.prototype.updateView = function () {
            var t;
            null === (t = s.app.track) || void 0 === t || t.trackEvent(y.TrackType.Open_Shop),
                ECA.applyShopPage(this);
        }),
        (v.prototype.init = function () {
            var n = this;
            this._use_shop_modules.forEach(function (t, e) {
                var o = f.default.inst.shopConf.getModuleData(t.type_id);
                null != n.module.children[e] && "moduleItem" == n.module.children[e].name
                    ? n.module.children[e].getComponent(m.default).setData(o, t.id)
                    : (n.module.children[e] &&
                          "moduleBottom" == n.module.children[e].name &&
                          n.module.removeChild(n.module.children[e]),
                      (e = cc.instantiate(n.moduleItem)).getComponent(m.default).setData(o, t.id),
                      (e.parent = n.module));
            });
        }),
        (v.prototype.closeNode = function () {
            g.default.inst.closeNode();
        }),
        (v.prototype.onDisable = function () {
            a.prototype.onDisable.call(this), g.default.inst.closeNode(), h.default.inst.onDestroy(this.node, this);
        }),
        (v.prototype.onRenovateBtnClick = function () {
            d.default.inst.initGemCount(),
                s.app.local.setValue("gemCount", 0),
                p.default.inst.set_Gem_time(0),
                this.module.children.forEach(function (t) {
                    "moduleItem" == t.name &&
                        (t.getComponent(m.default).isRenovateModule(),
                        s.app.event.emit(u.EventType.Home_Shop_Change_Page));
                });
        }),
        r([l.autoBind("cc.Node", "renovateBtn")], v.prototype, "renovateBtn", void 0),
        r([l.autoBind("cc.Node", "ScrollView/view/content/module")], v.prototype, "module", void 0),
        r([t(cc.Node)], v.prototype, "moduleItem", void 0),
        r([t(cc.Prefab)], v.prototype, "moduleBottom", void 0),
        r([e], v));
function v() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.renovateBtn = null),
        (t.module = null),
        (t.moduleItem = null),
        (t.moduleBottom = null),
        (t._use_shop_modules = []),
        t
    );
}
o.default = e;
