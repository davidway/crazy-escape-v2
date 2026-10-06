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
    c = t("DropController"),
    u = t("GameController"),
    p = t("DropType"),
    h = t("GameMgr"),
    d = t("Drop"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (a = d.default),
        i(f, a),
        Object.defineProperty(f.prototype, "type", {
            get: function () {
                return p.DropType.Chest;
            },
            enumerable: !1,
            configurable: !0
        }),
        (f.prototype.setData = function () {}),
        (f.prototype.onCollect = function () {
            u.GameController.inst.enqueue(this, this.onGamePause);
        }),
        (f.prototype.onGamePause = function () {
            c.default.inst.delDrop(this), h.default.inst.gamePause(), h.default.inst.onChestCollect();
        }),
        (f.prototype.onJumpComplete = function () {
            s.app.event.emit(l.EventType.Game_Show_Dir_Guide, {type: 1, target: this});
        }),
        r([t], f));
function f() {
    return (null !== a && a.apply(this, arguments)) || this;
}
o.default = t;
