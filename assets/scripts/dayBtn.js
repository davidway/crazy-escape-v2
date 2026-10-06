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
    l = t("EventTypes"),
    c = t("AssignmentController"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(u, a),
        (u.prototype.onLoad = function () {
            this.updateNode(),
                this.init(),
                (this._isInit = !0),
                s.app.event.on(l.EventType.Battle_Assign_Change, this.updateNode, this);
        }),
        (u.prototype.onEnable = function () {}),
        (u.prototype.onDisable = function () {
            s.app.event.targetOff(this);
        }),
        (u.prototype.setData = function (t) {
            (this._day = t), this._isInit && (this.init(), this.updateNode());
        }),
        (u.prototype.init = function () {
            (this.bg.spriteFrame = this.bgs[this._day]), (this._isInit = !0);
        }),
        (u.prototype.updateNode = function () {
            (this.qd_xdks.active = !(this._day < c.default.inst.deblockingDay)),
                (this.btn.interactable = this._day < c.default.inst.deblockingDay),
                (this.hd.active = this._day < c.default.inst.deblockingDay && c.default.inst.checkDayRp(this._day));
        }),
        r([e(cc.Button)], u.prototype, "btn", void 0),
        r([e(cc.Node)], u.prototype, "hd", void 0),
        r([e(cc.Node)], u.prototype, "qd_xdks", void 0),
        r([e(cc.Sprite)], u.prototype, "bg", void 0),
        r([e([cc.SpriteFrame])], u.prototype, "bgs", void 0),
        r([t], u));
function u() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.btn = null),
        (t.hd = null),
        (t.qd_xdks = null),
        (t.bg = null),
        (t.bgs = []),
        (t._day = 0),
        (t._isInit = !1),
        t
    );
}
o.default = t;
