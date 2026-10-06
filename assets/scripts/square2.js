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
    u = t("square2Block"),
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
            (this.isClick = !1), (this.moveNum = 0), (this.maxMove = 0), this.addBlock();
        }),
        (l.prototype.addBlock = function () {
            for (var t = 0; t < this.direction.length; t++) {
                var e = this.direction[t][0].length % 2 == 1 ? -110 : -55,
                    o = 15 * t - 55;
                this.blocks[t] || (this.blocks[t] = []);
                for (var n = 0; n < this.direction[t].length; n++) {
                    var i = e,
                        r = o - n * this.addY;
                    this.blocks[t][n] || (this.blocks[t][n] = []);
                    for (var a = 0; a < this.direction[t][n].length; a++) {
                        this.maxMove++;
                        var s = i + a * this.addX,
                            l = r,
                            c = null;
                        this.blocks[t][n][a]
                            ? (c = this.blocks[t][n][a]).setPosition(cc.v2(s, l))
                            : ((c = cc.instantiate(this.block))
                                  .getComponent(u.default)
                                  .setDirection(this.direction[t][n][a]),
                              (this.blocks[t][n][a] = c).setPosition(cc.v2(s, l))),
                            (c.parent = this.blockNode),
                            (c.active = !0),
                            (c.opacity = 255),
                            (c.zIndex = t + n + a);
                    }
                }
            }
        }),
        (l.prototype.clickNodeFun = function () {
            this.isClick || this.moveNum == this.maxMove || ((this.isClick = !0), this.moveRole());
        }),
        (l.prototype.moveRole = function () {
            var t = this,
                e = this.move[this.moveNum][0],
                o = this.move[this.moveNum][1],
                n = this.move[this.moveNum][2];
            this.blocks[e][o][n].getComponent(u.default).move(function () {
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
        (t.isClick = !1),
        (t.moveNum = 0),
        (t.blocks = [[[]]]),
        (t.addX = 110),
        (t.addY = 132),
        (t.maxMove = 0),
        (t.direction = [
            [
                [0, 2, 3],
                [2, 0, 1],
                [1, 2, 2]
            ],
            [
                [3, 1],
                [1, 3],
                [1, 1]
            ],
            [
                [3, 0, 3],
                [3, 3, 0],
                [1, 1, 2]
            ]
        ]),
        (t.move = [
            [2, 0, 2],
            [2, 0, 1],
            [2, 0, 0],
            [2, 2, 0],
            [2, 2, 1],
            [2, 2, 2],
            [2, 1, 2],
            [2, 1, 1],
            [2, 1, 0],
            [1, 2, 1],
            [1, 2, 0],
            [1, 1, 0],
            [1, 1, 1],
            [1, 0, 1],
            [1, 0, 0],
            [0, 2, 0],
            [0, 2, 1],
            [0, 2, 2],
            [0, 1, 0],
            [0, 0, 0],
            [0, 0, 1],
            [0, 0, 2],
            [0, 1, 1],
            [0, 1, 2]
        ]),
        t
    );
}
o.default = t;
