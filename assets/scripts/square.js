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
    s = t("formwork"),
    c = t("squareBlock"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = s.default),
        i(l, a),
        (l.prototype.onLoad = function () {
            this.btnClose.on("click", this.closeView, this),
                this.clickNode.on(cc.Node.EventType.TOUCH_START, this.clickNodeFun, this);
        }),
        (l.prototype.start = function () {}),
        (l.prototype.onEnable = function () {
            this.init();
        }),
        (l.prototype.init = function () {
            (this.isClick = !1), (this.moveNum = 0), this.addBlock();
        }),
        (l.prototype.addBlock = function () {
            for (var t = 0; t < this.maxStorey; t++) {
                var e = t * this.addY * 2;
                this.blocks[t] || (this.blocks[t] = []);
                for (var o = 0; o < this.maxRowW; o++) {
                    var n = 0 - o * this.addX,
                        i = e - o * this.addY;
                    this.blocks[t][o] || (this.blocks[t][o] = []);
                    for (var r = 0; r < this.maxRowH; r++) {
                        var a = n + r * this.addX,
                            s = i + r * this.addY * -1,
                            l = null;
                        this.blocks[t][o][r]
                            ? (l = this.blocks[t][o][r]).setPosition(cc.v2(a, s))
                            : ((l = cc.instantiate(this.block))
                                  .getComponent(c.default)
                                  .setDirection(this.direction[t][o][r]),
                              (this.blocks[t][o][r] = l).setPosition(cc.v2(a, s))),
                            (l.parent = this.blockNode),
                            (l.active = !0),
                            (l.opacity = 255),
                            (l.zIndex = t + o + r);
                    }
                }
            }
        }),
        (l.prototype.clickNodeFun = function () {
            this.isClick ||
                this.moveNum == this.maxRowH * this.maxRowW * this.maxStorey ||
                ((this.isClick = !0), this.moveRole());
        }),
        (l.prototype.moveRole = function () {
            var t = this,
                e = this.move[this.moveNum][0],
                o = this.move[this.moveNum][1],
                n = this.move[this.moveNum][2];
            this.blocks[e][o][n].getComponent(c.default).move(function () {
                t.isClick = !1;
            }),
                this.moveNum++;
        }),
        r([e(cc.Prefab)], l.prototype, "block", void 0),
        r([e(cc.Node)], l.prototype, "blockNode", void 0),
        r([e(cc.Node)], l.prototype, "moveing", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.block = null),
        (t.blockNode = null),
        (t.moveing = null),
        (t.addX = 54),
        (t.addY = 28),
        (t.isClick = !1),
        (t.moveNum = 0),
        (t.maxRowH = 3),
        (t.maxRowW = 3),
        (t.maxStorey = 3),
        (t.blocks = [[[]]]),
        (t.direction = [
            [
                [2, 3, 5],
                [3, 0, 4],
                [1, 3, 4]
            ],
            [
                [1, 4, 1],
                [0, 3, 3],
                [2, 4, 0]
            ],
            [
                [0, 5, 3],
                [2, 4, 1],
                [4, 3, 0]
            ]
        ]),
        (t.move = [
            [2, 2, 2],
            [1, 2, 2],
            [2, 2, 1],
            [2, 2, 0],
            [1, 2, 0],
            [2, 1, 1],
            [2, 0, 1],
            [2, 0, 0],
            [2, 1, 0],
            [1, 2, 1],
            [0, 2, 0],
            [0, 2, 2],
            [0, 2, 1],
            [0, 1, 2],
            [0, 0, 2],
            [1, 1, 2],
            [1, 1, 1],
            [1, 1, 0],
            [0, 1, 1],
            [0, 1, 0],
            [1, 0, 2],
            [2, 1, 2],
            [2, 0, 2],
            [1, 0, 1],
            [0, 0, 1],
            [0, 0, 0],
            [1, 0, 0]
        ]),
        t
    );
}
o.default = t;
