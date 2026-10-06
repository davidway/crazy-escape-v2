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
            var o = this;
            (this.isClick = !1),
                this.player.setPosition(cc.v2(-82.5, -47.5)),
                this.valueNode.children.forEach(function (t, e) {
                    (t.getComponent(cc.Label).string = o.values[e] + ""), (t.active = !0);
                }),
                this.enemyNode.children.forEach(function (t) {
                    t.active = !0;
                }),
                (this.moveNum = 0),
                (this.value = this.values[this.moveNum]);
        }),
        (l.prototype.clickNodeFun = function () {
            this.isClick || this.moveNum == this.maxMove || ((this.isClick = !0), this.moveRole());
        }),
        (l.prototype.moveRole = function () {
            (this.valueNode.children[this.moveNum].active = !1),
                this.player.setPosition(this.enemyNode.children[this.moveNum].getPosition()),
                (this.enemyNode.children[this.moveNum].active = !1),
                this.moveNum++,
                (this.value += this.values[this.moveNum]),
                (this.valueNode.children[this.moveNum].getComponent(cc.Label).string = this.value + ""),
                console.log(this.moveNum),
                (this.isClick = !1);
        }),
        r([e(cc.Node)], l.prototype, "enemyNode", void 0),
        r([e(cc.Node)], l.prototype, "valueNode", void 0),
        r([e(cc.Node)], l.prototype, "player", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.enemyNode = null),
        (t.valueNode = null),
        (t.player = null),
        (t.isClick = !1),
        (t.moveNum = 0),
        (t.maxMove = 6),
        (t.value = 0),
        (t.values = [5, 10, 13, 25, 50, 100, 200]),
        t
    );
}
o.default = t;
