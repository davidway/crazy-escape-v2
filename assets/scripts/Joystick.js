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
    c = t("MathUtil"),
    u = t("BasePanel"),
    p = t("EventTypes"),
    h = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (a = u.default),
        i(d, a),
        (d.prototype.start = function () {}),
        (d.prototype.onEnable = function () {
            a.prototype.onEnable.call(this),
                (this.basePos = cc.v3(-Math.min(220, (cc.winSize.width >> 2) + 40), 330 - (cc.winSize.height >> 1))),
                (this.node.position = this.basePos);
        }),
        (d.prototype.setStartLocation = function (t) {
            (this.startLocation = t),
                (this.node.position = t ? this.startLocation : this.basePos),
                (this.slider.position = cc.v3()),
                t ||
                    ((this.isJoy = !1),
                    c.default.copy(h.default.inst.oldVertor, h.default.inst.moveVector),
                    (h.default.inst.moveVector.x = h.default.inst.moveVector.y = 0),
                    s.app.event.emit(p.EventType.JoyStick_Stop));
        }),
        (d.prototype.updateLocation = function (t) {
            var e;
            t &&
                this.startLocation &&
                ((this.isJoy = !0),
                (t = (e = t.sub(this.startLocation)).mag()),
                (e = e.normalize()),
                (this.slider.position = e.mul(cc.misc.clampf(t, 0, this.radius))),
                (h.default.inst.moveVector.x = e.x),
                (h.default.inst.moveVector.y = e.y),
                c.default.copy(h.default.inst.oldVertor, h.default.inst.moveVector));
        }),
        (d.prototype.update = function () {
            this.isJoy && s.app.event.emit(p.EventType.JoyStick_Start);
        }),
        (d.prototype.onGamePause = function () {
            this.setStartLocation(null);
        }),
        r([l.autoBind("cc.Node", "slider")], d.prototype, "slider", void 0),
        r([l.gameEvent(p.EventType.Game_Pause)], d.prototype, "onGamePause", null),
        r([t], d));
function d() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.slider = null), (t.startLocation = null), (t.radius = 75), (t.basePos = null), (t.isJoy = !1), t;
}
o.default = t;
