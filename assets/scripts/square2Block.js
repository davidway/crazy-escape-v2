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
    s = t("NodeData"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(l, a),
        (l.prototype.onLoad = function () {
            this.oldPos = this.node.getPosition();
        }),
        (l.prototype.start = function () {}),
        (l.prototype.onEnable = function () {
            this.init();
        }),
        (l.prototype.onDisable = function () {
            this.moveTween && this.moveTween.stop();
        }),
        (l.prototype.init = function () {
            (this.node.x = this.oldPos.x),
                (this.node.y = this.oldPos.y),
                (this.node.opacity = 255),
                this.directionNode.forEach(function (t) {
                    t.active = !1;
                }),
                this.showDirection(this.direction),
                this.getGngle();
        }),
        (l.prototype.showDirection = function (t) {
            this.directionNode[t] && (this.directionNode[t].active = !0);
        }),
        (l.prototype.getGngle = function () {
            switch (this.direction) {
                case 0:
                    this.nodeGngle = 90;
                    break;
                case 1:
                    this.nodeGngle = -90;
                    break;
                case 2:
                    this.nodeGngle = 180;
                    break;
                case 3:
                    this.nodeGngle = 0;
            }
        }),
        (l.prototype.setDirection = function (t) {
            this.direction = t;
        }),
        (l.prototype.move = function (t) {
            var e = this,
                o = this.nodeData.getCoordinate(this.nodeGngle, this.distance, this.node.getPosition());
            (this.moveTween = cc
                .tween(this.node)
                .to(0.5, {x: o.x, y: o.y, opacity: 0})
                .call(function () {
                    console.log(e.nodeGngle), t && t();
                })),
                this.moveTween.start();
        }),
        r([e([cc.Node])], l.prototype, "directionNode", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.directionNode = []),
        (t.direction = 0),
        (t.distance = 200),
        (t.nodeGngle = 64),
        (t.nodeData = new s.default()),
        (t.moveTween = null),
        (t.oldPos = null),
        t
    );
}
o.default = t;
