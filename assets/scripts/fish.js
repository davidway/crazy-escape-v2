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
    s = t("eatFish"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(l, a),
        (l.prototype.start = function () {}),
        (l.prototype.onEnable = function () {
            this.init();
        }),
        (l.prototype.init = function () {
            (this.isEatAn = !1), (this.Image.spriteFrame = this.fishImages[0]);
        }),
        (l.prototype.onCollisionEnter = function (t) {
            var e = this;
            this.isEatAn ||
                ((this.isEatAn = !0),
                (this.Image.spriteFrame = this.fishImages[1]),
                this.scheduleOnce(function () {
                    (e.Image.spriteFrame = e.fishImages[0]),
                        e.scheduleOnce(function () {
                            e.isEatAn = !1;
                        }, e.eatAnTime);
                }, this.eatAnTime)),
                this.eatFish.putBlock(t.node.parent);
        }),
        r([e(cc.Sprite)], l.prototype, "Image", void 0),
        r([e([cc.SpriteFrame])], l.prototype, "fishImages", void 0),
        r([e(s.default)], l.prototype, "eatFish", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.Image = null),
        (t.fishImages = []),
        (t.eatFish = null),
        (t.isEatAn = !1),
        (t.eatAnTime = 0.3),
        (t.eatsphereTime = 0.2),
        t
    );
}
o.default = t;
