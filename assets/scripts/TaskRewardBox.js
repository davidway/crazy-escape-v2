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
    s = t("BaseUI"),
    l = t("MultipleController"),
    c = t("TaskController"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = s.default),
        i(u, a),
        (u.prototype.onEnable = function () {
            this.on(this.node, this.onItemClick, this);
        }),
        (u.prototype.onDisable = function () {
            this.off(this.node);
        }),
        (u.prototype.setData = function (t) {
            (this._data = t),
                (this.valueLab.string = "" + t.data.count),
                this.updateView(),
                console.log("任务宝箱:", t),
                1 == (null === (t = this._data) || void 0 === t ? void 0 : t.status)
                    ? null == this.Breathing
                        ? (this.Breathing = l.default.inst.Breathing(this.close, 1.15, 1, 0.5))
                        : this.Breathing.start()
                    : null != this.Breathing && (this.Breathing.stop(), (this.close.scale = 1));
        }),
        (u.prototype.updateView = function () {
            this._data &&
                (0 == this._data.status
                    ? ((this.open.active = !1), (this.light.active = !1), (this.close.active = !0))
                    : 1 == this._data.status
                    ? ((this.open.active = !1), (this.light.active = !0), (this.close.active = !0))
                    : 2 == this._data.status &&
                      ((this.open.active = !0),
                      (this.light.active = !1),
                      (this.close.active = !1),
                      null != this.Breathing && this.Breathing.stop()));
        }),
        (u.prototype.update = function () {
            var t;
            1 == (null === (t = this._data) || void 0 === t ? void 0 : t.status) && (this.light.angle -= 2);
        }),
        (u.prototype.onItemClick = function () {
            var t;
            1 == (null === (t = this._data) || void 0 === t ? void 0 : t.status) &&
                (c.default.inst.getTaskProgressAward(this._data.data.id), this.updateView());
        }),
        r([e(cc.Node)], u.prototype, "light", void 0),
        r([e(cc.Node)], u.prototype, "close", void 0),
        r([e(cc.Node)], u.prototype, "open", void 0),
        r([e(cc.Label)], u.prototype, "valueLab", void 0),
        r([t], u));
function u() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.light = null),
        (t.close = null),
        (t.open = null),
        (t.valueLab = null),
        (t._data = null),
        (t.Breathing = null),
        t
    );
}
o.default = t;
