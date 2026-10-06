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
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(l, a),
        (l.prototype.onEnable = function () {
            this.stepIndex = 0;
            var t = this.step[this.stepIndex];
            this.icon.position = t.pos;
        }),
        (l.prototype.onUpdate = function (t) {
            var e;
            void 0 === t && (t = 1),
                this.stepIndex < this.step.length
                    ? ((e = this.step[this.stepIndex]),
                      (this.icon.position = e.pos),
                      (this.icon.scale = e.scale),
                      (this.icon.opacity = e.opacity),
                      (this.stepIndex += t))
                    : s.default.inst.delLevelUp();
        }),
        r([e(cc.Node)], l.prototype, "icon", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.icon = null),
        (t.step = [
            {pos: cc.v3(0, -20), scale: 0.5, opacity: 255},
            {pos: cc.v3(0, -18.89), scale: 0.5138733333333334, opacity: 255},
            {pos: cc.v3(0, -17.77), scale: 0.5278591666666671, opacity: 255},
            {pos: cc.v3(0, -16.66), scale: 0.5417075, opacity: 255},
            {pos: cc.v3(0, -15.55), scale: 0.5556116666666663, opacity: 255},
            {pos: cc.v3(0, -14.44), scale: 0.5694599999999999, opacity: 255},
            {pos: cc.v3(0, -13.33), scale: 0.583318333333334, opacity: 255},
            {pos: cc.v3(0, -12.22), scale: 0.5973000000000009, opacity: 255},
            {pos: cc.v3(0, -11.11), scale: 0.6111191666666665, opacity: 255},
            {pos: cc.v3(0, -10), scale: 0.6250258333333333, opacity: 255},
            {pos: cc.v3(0, -8.89), scale: 0.638875833333334, opacity: 255},
            {pos: cc.v3(0, -7.77), scale: 0.6528400000000003, opacity: 255},
            {pos: cc.v3(0, -6.66), scale: 0.666731666666667, opacity: 255},
            {pos: cc.v3(0, -5.56), scale: 0.6805366666666677, opacity: 255},
            {pos: cc.v3(0, -4.44), scale: 0.694499166666667, opacity: 255},
            {pos: cc.v3(0, -3.33), scale: 0.7084316666666662, opacity: 255},
            {pos: cc.v3(0, -2.22), scale: 0.7222925000000009, opacity: 255},
            {pos: cc.v3(0, -1.11), scale: 0.736110833333333, opacity: 255},
            {pos: cc.v3(0, 0.01), scale: 0.7500800000000003, opacity: 255},
            {pos: cc.v3(0, 1.11), scale: 0.7639291666666675, opacity: 255},
            {pos: cc.v3(0, 2.22), scale: 0.7778066666666662, opacity: 255},
            {pos: cc.v3(0, 3.34), scale: 0.791715, opacity: 255},
            {pos: cc.v3(0, 4.45), scale: 0.8056433333333333, opacity: 255},
            {pos: cc.v3(0, 5.56), scale: 0.8195016666666675, opacity: 255},
            {pos: cc.v3(0, 6.67), scale: 0.8333750000000002, opacity: 255},
            {pos: cc.v3(0, 7.78), scale: 0.8473066666666674, opacity: 255},
            {pos: cc.v3(0, 8.89), scale: 0.8611491666666666, opacity: 255},
            {pos: cc.v3(0, 10), scale: 0.8750283333333337, opacity: 255},
            {pos: cc.v3(0, 11.11), scale: 0.8889024999999999, opacity: 255},
            {pos: cc.v3(0, 12.22), scale: 0.9027491666666666, opacity: 255},
            {pos: cc.v3(0, 13.33), scale: 0.9166800000000004, opacity: 255},
            {pos: cc.v3(0, 14.44), scale: 0.9305266666666671, opacity: 255},
            {pos: cc.v3(0, 15.55), scale: 0.9444200000000007, opacity: 255},
            {pos: cc.v3(0, 16.66), scale: 0.9583041666666674, opacity: 255},
            {pos: cc.v3(0, 17.78), scale: 0.9721950000000006, opacity: 255},
            {pos: cc.v3(0, 18.89), scale: 0.9860891666666664, opacity: 255},
            {pos: cc.v3(0, 20), scale: 0.9999883333333331, opacity: 254.98512499999973},
            {pos: cc.v3(0, 20), scale: 0.9944459999999997, opacity: 247.9186499999996},
            {pos: cc.v3(0, 20), scale: 0.9889003333333334, opacity: 240.8479250000001},
            {pos: cc.v3(0, 20), scale: 0.983343, opacity: 233.76232499999992},
            {pos: cc.v3(0, 20), scale: 0.977782333333333, opacity: 226.67247499999957},
            {pos: cc.v3(0, 20), scale: 0.9722326666666665, opacity: 219.5966499999998},
            {pos: cc.v3(0, 20), scale: 0.9666773333333334, opacity: 212.5136000000001},
            {pos: cc.v3(0, 20), scale: 0.9610933333333332, opacity: 205.39399999999992},
            {pos: cc.v3(0, 20), scale: 0.9555663333333332, opacity: 198.34707499999985},
            {pos: cc.v3(0, 20), scale: 0.9499913333333331, opacity: 191.2389499999997},
            {pos: cc.v3(0, 20), scale: 0.944439, opacity: 184.15972500000004},
            {pos: cc.v3(0, 20), scale: 0.9389006666666667, opacity: 177.0983500000001},
            {pos: cc.v3(0, 20), scale: 0.933345333333333, opacity: 170.01529999999968},
            {pos: cc.v3(0, 20), scale: 0.9277833333333332, opacity: 162.9237499999998},
            {pos: cc.v3(0, 20), scale: 0.9222130000000001, opacity: 155.82157500000005},
            {pos: cc.v3(0, 20), scale: 0.9166786666666664, opacity: 148.76529999999968},
            {pos: cc.v3(0, 20), scale: 0.9111159999999997, opacity: 141.6728999999996},
            {pos: cc.v3(0, 20), scale: 0.9055483333333333, opacity: 134.57412499999987},
            {pos: cc.v3(0, 20), scale: 0.9000023333333336, opacity: 127.50297500000025},
            {pos: cc.v3(0, 20), scale: 0.8944399999999997, opacity: 120.41099999999955},
            {pos: cc.v3(0, 20), scale: 0.8888526666666667, opacity: 113.28715000000003},
            {pos: cc.v3(0, 20), scale: 0.8833333333333331, opacity: 106.24999999999969},
            {pos: cc.v3(0, 20), scale: 0.877772, opacity: 99.1593},
            {pos: cc.v3(0, 20), scale: 0.8721780000000002, opacity: 92.02695000000026},
            {pos: cc.v3(0, 20), scale: 0.8666413333333334, opacity: 84.96770000000001},
            {pos: cc.v3(0, 20), scale: 0.8611163333333332, opacity: 77.92332499999972},
            {pos: cc.v3(0, 20), scale: 0.8555263333333331, opacity: 70.79607499999955},
            {pos: cc.v3(0, 20), scale: 0.8499840000000002, opacity: 63.72960000000015},
            {pos: cc.v3(0, 20), scale: 0.8444443333333332, opacity: 56.666524999999865},
            {pos: cc.v3(0, 20), scale: 0.8388823333333334, opacity: 49.574974999999995},
            {pos: cc.v3(0, 20), scale: 0.8333129999999999, opacity: 42.47407499999974},
            {pos: cc.v3(0, 20), scale: 0.8277709999999997, opacity: 35.40802499999958},
            {pos: cc.v3(0, 20), scale: 0.8222326666666665, opacity: 28.3466499999997},
            {pos: cc.v3(0, 20), scale: 0.8166693333333329, opacity: 21.25339999999943},
            {pos: cc.v3(0, 20), scale: 0.8111199999999998, opacity: 14.177999999999741},
            {pos: cc.v3(0, 20), scale: 0.8055500000000001, opacity: 7.076250000000101},
            {pos: cc.v3(0, 20), scale: 0.8, opacity: 0}
        ]),
        (t.stepIndex = 0),
        t
    );
}
o.default = t;
