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
    e =
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
var r,
    a = t("GuideController"),
    s = t("App"),
    t = cc._decorator.ccclass,
    t =
        ((r = cc.Component),
        i(l, r),
        (l.prototype.onLoad = function () {
            (this.btn = this.getComponent(cc.Button)),
                this.btn ||
                    ((this.btn = this.addComponent(cc.Button)),
                    (this.btn.transition = cc.Button.Transition.SCALE),
                    (this.btn.zoomScale = 1.2),
                    (this.btn.enableAutoGrayEffect = !0));
        }),
        (l.prototype.onEnable = function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchHandler, this);
        }),
        (l.prototype.onDisable = function () {
            this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchHandler, this);
        }),
        (l.prototype.onTouchHandler = function (t) {
            cc.sys.isBrowser && this.findPath(this.node),
                this.node.uuid == a.GuideController.uuid && a.GuideController.guideNext(),
                this.btn.interactable && this.execute(t);
        }),
        (l.prototype.execute = function (t) {
            var e,
                o,
                n,
                i = this.events.get(t.type);
            i &&
                ((o = i.handler),
                (n = i.owner),
                (i = i.param),
                o.call(n || this, t),
                (i && i.sound && "" == i.sound) ||
                    null === (e = s.app.sound) ||
                    void 0 === e ||
                    e.playEffect((null == i ? void 0 : i.sound) || "btn_click"));
        }),
        (l.prototype.on = function (t, e, o, n) {
            this.events.set(t, {handler: e, owner: o, param: n});
        }),
        (l.prototype.off = function (t) {
            this.events.delete(t);
        }),
        (l.prototype.clear = function () {
            this.events.clear();
        }),
        (l.prototype.interactable = function (t) {
            this.btn && (this.btn.interactable = t);
        }),
        (l.prototype.findPath = function (t) {
            t = this.find(t);
            return cc.sys.isBrowser && console.warn(t), t;
        }),
        (l.prototype.find = function (t) {
            return t.parent && "New Node" != t.parent.name && "Main" != t.parent.name
                ? this.find(t.parent) + "/" + t.name
                : t.name;
        }),
        e([t], l));
function l() {
    var t = (null !== r && r.apply(this, arguments)) || this;
    return (t.btn = null), (t.events = new Map()), t;
}
o.default = t;
