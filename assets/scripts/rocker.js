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
        (l.prototype.start = function () {
            this.rocker.parent.on(cc.Node.EventType.TOUCH_MOVE, this._touchmove, this),
                this.rocker.parent.on(cc.Node.EventType.TOUCH_END, this._touchcancel, this),
                this.rocker.parent.on(cc.Node.EventType.TOUCH_CANCEL, this._touchcancel, this),
                this.init();
        }),
        (l.prototype.init = function () {
            this.rigidBody ? (this.distance = this.distance) : (this.distance = Math.floor(this.distance / 50)),
                (this.controlNodeScaleY = this.controlNode.scaleY);
        }),
        (l.prototype._touchmove = function (t) {
            var e = this.node.convertToNodeSpaceAR(t.getLocation()),
                t = this.nodeData.getAngle(cc.v2(0, 0), e);
            this.rocker.setPosition(e),
                this.nodeData.getDistance(cc.v2(0, 0), this.rocker.getPosition()) > this.maxR &&
                    ((e = this.nodeData.getCoordinate(t, this.maxR)), this.rocker.setPosition(e)),
                (this.nodeGngle = t),
                (this.isMove = !0);
        }),
        (l.prototype._touchcancel = function () {
            this.rocker.setPosition(0, 0),
                (this.isMove = !1),
                this.rigidBody && (this.controlNode.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0));
        }),
        (l.prototype.moveFun = function () {
            this.isMove &&
                (this.rigidBody
                    ? (this.controlNode.getComponent(cc.RigidBody).linearVelocity = this.nodeData.getCoordinate(
                          this.nodeGngle,
                          this.distance
                      ))
                    : (Math.abs(this.controlNode.x + this.nodeData.getCoordinate(this.nodeGngle, this.distance).x) <
                          this.controlNode.parent.parent.width / 2 &&
                          (this.controlNode.x += this.nodeData.getCoordinate(this.nodeGngle, this.distance).x),
                      Math.abs(this.controlNode.y + this.nodeData.getCoordinate(this.nodeGngle, this.distance).y) <
                          this.controlNode.parent.parent.height / 2 &&
                          (this.controlNode.y += this.nodeData.getCoordinate(this.nodeGngle, this.distance).y)),
                (this.controlNode.angle = this.nodeGngle),
                this.reversal &&
                    (90 < this.nodeGngle
                        ? (this.controlNode.scaleY = -1 * this.controlNodeScaleY)
                        : (this.controlNode.scaleY = this.controlNodeScaleY)));
        }),
        (l.prototype.update = function () {
            this.moveFun();
        }),
        r([e(cc.Node)], l.prototype, "rocker", void 0),
        r([e(cc.Node)], l.prototype, "controlNode", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.rocker = null),
        (t.controlNode = null),
        (t.maxR = 100),
        (t.distance = 250),
        (t.isMove = !1),
        (t.nodeData = new s.default()),
        (t.rigidBody = !1),
        (t.reversal = !0),
        (t.controlNodeScaleY = 0),
        t
    );
}
o.default = t;
