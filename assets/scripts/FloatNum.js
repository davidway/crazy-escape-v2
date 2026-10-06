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
    s = t("FloatController"),
    l = t("FloatFontType"),
    f = t("FontTokens"),
    u = t("UiTokens"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(c, a),
        (c.prototype.setLab = function (t, e) {
            var o,
                n = f.DamageStyle.normal;
            (this.lab.string = t),
                (this.stepIndex = 0),
                (this.isStart = !0),
                (this.ratio = e == l.FloatFontType.Crit ? 1 : 0.8),
                (this.kill.active = e == l.FloatFontType.kill),
                (this.lab.node.active = e != l.FloatFontType.kill),
                e == l.FloatFontType.Crit
                    ? (n = f.DamageStyle.crit)
                    : e == l.FloatFontType.hp
                    ? (n = {size: "damageNormal", color: "cyan"})
                    : e == l.FloatFontType.kill || (n = f.DamageStyle.normal),
                (this.lab.fontSize = f.resolveSize(n.size)),
                (this.lab.node.color = u.hexToColor(f.resolveColor(n.color))),
                (o = this.lab.node.getComponent(cc.LabelOutline) || this.lab.node.addComponent(cc.LabelOutline)),
                e == l.FloatFontType.kill
                    ? (o.enabled = !1)
                    : ((o.enabled = !0), (o.color = u.hexToColor(u.Color.outline)), (o.width = 2));
        }),
        (c.prototype.onUpdate = function (t) {
            void 0 === t && (t = 1),
                this.isStart &&
                    (this.stepIndex < this.step.length
                        ? ((t = this.step[this.stepIndex]),
                          (this.content.position = t.pos),
                          (this.content.scale = t.scale * this.ratio),
                          (this.content.opacity = t.opacity),
                          (this.stepIndex += 1))
                        : ((this.isStart = !1), s.default.inst.delFloat(this)));
        }),
        r([e(cc.Label)], c.prototype, "lab", void 0),
        r([e(cc.Node)], c.prototype, "kill", void 0),
        r([e(cc.Node)], c.prototype, "content", void 0),
        r([t], c));
function c() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.lab = null),
        (t.kill = null),
        (t.content = null),
        (t.step = [
            {pos: cc.v3(0, 0), scale: 0, opacity: 255},
            {pos: cc.v3(0, 0), scale: 0.333, opacity: 255},
            {pos: cc.v3(0, 0), scale: 0.667, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.001, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.335, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.668, opacity: 255},
            {pos: cc.v3(0, 0), scale: 2, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.833, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.666, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.499, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.333, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.167, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.067, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.133, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.2, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.267, opacity: 255},
            {pos: cc.v3(0, 0), scale: 1.334, opacity: 255},
            {pos: cc.v3(0, 0.01), scale: 1.4, opacity: 255},
            {pos: cc.v3(0, 3.35), scale: 1.333, opacity: 255},
            {pos: cc.v3(0, 6.68), scale: 1.266, opacity: 255},
            {pos: cc.v3(0, 10.03), scale: 1.199, opacity: 255},
            {pos: cc.v3(0, 13.34), scale: 1.133, opacity: 255},
            {pos: cc.v3(0, 16.68), scale: 1.066, opacity: 255},
            {pos: cc.v3(0, 20.01), scale: 1, opacity: 254.96},
            {pos: cc.v3(0, 22.23), scale: 1, opacity: 243.58},
            {pos: cc.v3(0, 24.46), scale: 1, opacity: 232.16},
            {pos: cc.v3(0, 26.67), scale: 1, opacity: 220.8},
            {pos: cc.v3(0, 28.89), scale: 1, opacity: 209.42},
            {pos: cc.v3(0, 31.11), scale: 1, opacity: 198.05},
            {pos: cc.v3(0, 33.34), scale: 1, opacity: 186.64},
            {pos: cc.v3(0, 35.56), scale: 1, opacity: 175.26},
            {pos: cc.v3(0, 37.78), scale: 1, opacity: 163.88},
            {pos: cc.v3(0, 40), scale: 1, opacity: 152.49},
            {pos: cc.v3(0, 42.23), scale: 1, opacity: 141.06},
            {pos: cc.v3(0, 44.45), scale: 1, opacity: 129.72},
            {pos: cc.v3(0, 46.67), scale: 1, opacity: 118.34},
            {pos: cc.v3(0, 48.89), scale: 1, opacity: 106.93},
            {pos: cc.v3(0, 51.12), scale: 1, opacity: 95.53},
            {pos: cc.v3(0, 53.34), scale: 1, opacity: 84.15},
            {pos: cc.v3(0, 55.56), scale: 1, opacity: 72.74},
            {pos: cc.v3(0, 57.78), scale: 1, opacity: 61.4},
            {pos: cc.v3(0, 60), scale: 1, opacity: 50.01},
            {pos: cc.v3(0, 60), scale: 0.5, opacity: 100}
        ]),
        (t.isStart = !1),
        (t.stepIndex = 0),
        (t.ratio = 1),
        t
    );
}
o.default = t;
