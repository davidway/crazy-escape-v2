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
    s = t("GameEnums"),
    l = t("Mob"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (a = l.default),
        i(c, a),
        Object.defineProperty(c.prototype, "type", {
            get: function () {
                return s.MonsterType.AGILITY_MOB;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(c.prototype, "dir", {
            get: function () {
                return this._dir;
            },
            set: function (t) {
                (this._dir = t), this.setDir(0 < t.x ? 1 : -1);
                t = this.mConf.speed / 60;
                this._dir.mul(t, this.speed);
            },
            enumerable: !1,
            configurable: !0
        }),
        (c.prototype.onEnable = function () {
            a.prototype.onEnable.call(this), (this.isDel = !1);
        }),
        (c.prototype.checkDrop = function () {
            this.isDel || a.prototype.checkDrop.call(this);
        }),
        (c.prototype.onUpdate = function (t) {
            a.prototype.onUpdate.call(this, t);
        }),
        r([t], c));
function c() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t._dir = null), (t.isDel = !1), t;
}
o.default = t;
