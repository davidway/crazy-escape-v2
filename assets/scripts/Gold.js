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
    l = t("DropController"),
    c = t("HeroController"),
    u = t("DropType"),
    p = t("Drop"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = p.default),
        i(h, a),
        Object.defineProperty(h.prototype, "type", {
            get: function () {
                return u.DropType.Gold;
            },
            enumerable: !1,
            configurable: !0
        }),
        (h.prototype.setData = function (t) {
            switch (((this._data = t), this._data.type)) {
                case u.GoldType.Mini:
                    this.img.spriteFrame = this.icons[0];
                    break;
                case u.GoldType.Middle:
                    this.img.spriteFrame = this.icons[1];
                    break;
                case u.GoldType.Big:
                    this.img.spriteFrame = this.icons[2];
            }
        }),
        (h.prototype.onCollect = function () {
            l.default.inst.delDrop(this),
                c.HeroController.addGold(this._data.value),
                s.app.sound.playEffect("拾取金钱音效");
        }),
        r([e(cc.Sprite)], h.prototype, "img", void 0),
        r([e([cc.SpriteFrame])], h.prototype, "icons", void 0),
        r([t], h));
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.img = null), (t.icons = []), (t._data = null), t;
}
o.default = t;
