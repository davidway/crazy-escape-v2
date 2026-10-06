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
    s = t("CCImage"),
    l = t("BundleType"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(c, a),
        (c.prototype.onEnable = function () {
            this.bg && null != this.quality && (this.node.getComponent(cc.Sprite).spriteFrame = this.bg[this.quality]);
        }),
        (c.prototype.setData = function (t) {
            switch (((this.quality = null), t.type)) {
                case 1:
                    this.icon.node.scale = 1.1;
                    break;
                case 2:
                case 3:
                    this.icon.node.scale = 0.7;
                    break;
                case 4:
                    this.icon.node.scale = 0.3;
                    break;
                case 5:
                    this.icon.node.scale = 1;
                    break;
                case 6:
                    this.icon.node.scale = 0.9;
            }
            t.quality && (this.quality = t.quality - 1),
                this.chapterFlag && (this.chapterFlag.active = t.isFlag),
                this.icon.setSource(t.url, t.bundle || l.BundleType.Resources),
                (this.numLab.string = "x" + t.value);
        }),
        r([e(s.default)], c.prototype, "icon", void 0),
        r([e(cc.Label)], c.prototype, "numLab", void 0),
        r([e(cc.Node)], c.prototype, "chapterFlag", void 0),
        r([e([cc.SpriteFrame])], c.prototype, "bg", void 0),
        r([t], c));
function c() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.icon = null), (t.numLab = null), (t.chapterFlag = null), (t.bg = []), (t.quality = null), t;
}
o.default = t;
