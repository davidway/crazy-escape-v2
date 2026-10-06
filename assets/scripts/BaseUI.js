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
    s = t("CloseUI"),
    l = t("CCButton"),
    c = t("CCGray"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (a = cc.Component),
        i(u, a),
        (u.prototype.setGray = function (t, e) {
            (t.getComponent(c.default) || t.addComponent(c.default)).setGray(e);
        }),
        (u.prototype.interactable = function (t, e, o) {
            void 0 === o && (o = !0), console.log("[BaseUI]-->[line:22]:", e);
            var n = t.getComponent(l.default);
            n
                ? (n.interactable(e), o && this.setGray(t, !e))
                : console.log("[BaseUI]-->[line:18]:", t.name + " 没有CCButton组件");
        }),
        (u.prototype.on = function (t, e, o, n) {
            var i;
            t && e
                ? this._btns.has(t.uuid)
                    ? console.warn("[BaseUI]-->[line:43]:重复设置", t.name)
                    : ((i = (i = t.getComponent(l.default)) || t.addComponent(l.default)),
                      this._btns.set(t.uuid, i),
                      i.on(cc.Node.EventType.TOUCH_END, e, o || this, n))
                : console.error(t ? "handler为空" : "button为空");
        }),
        (u.prototype.off = function (t) {
            var e;
            t
                ? ((e = t.getComponent(l.default)) && e.clear(), this._btns.delete(t.uuid))
                : console.error("target 为空");
        }),
        (u.prototype.clear = function () {
            this._btns.forEach(function (t) {
                t.clear();
            }),
                this._btns.clear();
        }),
        (u.prototype.onDestroy = function () {
            this.clear();
        }),
        (u.prototype.cloesView = function () {
            s.default.inst.closeNode();
        }),
        r([t], u));
function u() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t._btns = new Map()), t;
}
o.default = t;
