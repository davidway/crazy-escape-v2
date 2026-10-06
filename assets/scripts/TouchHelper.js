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
Object.defineProperty(o, "__esModule", {value: !0}), (o.TouchHelper = void 0);
var a,
    s = cc._decorator,
    e = s.ccclass,
    s = s.property,
    e =
        ((a = cc.Component),
        i(l, a),
        (l.prototype.start = function () {
            (this.comp_btn = this.node.getComponent(cc.Button) || this.node.addComponent(cc.Button)),
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }),
        (l.prototype.onTouchEnd = function (t) {
            this.canTouch &&
                this.needPolygon &&
                3 <= this.points.length &&
                ((t = t.getLocation()),
                (t = this.node.convertToNodeSpaceAR(new cc.Vec2(t.x, t.y))),
                (t = this.pointInPoly(t, this.points)),
                this.isMoved ||
                    (t
                        ? this.canTouch && this.onInPolygon && this.onInPolygon.emit([this.comp_btn])
                        : this.canTouch && this.onOutPolygon && this.onOutPolygon.emit([this.comp_btn]))),
                this.canTouch &&
                    (this.isMoved || (this.canTouch && this.onTouchTap && this.onTouchTap.emit([this.comp_btn]))),
                (this.isMoved = !1);
        }),
        (l.prototype.onTouchMove = function (t) {
            1 < t.getTouches().length
                ? (this.isMoved = !0)
                : (this.isMoved = 20 < t.getStartLocation().sub(t.getLocation()).mag());
        }),
        (l.prototype.onTouchCancel = function () {
            this.isMoved = !1;
        }),
        (l.prototype.pointInPoly = function (t, e) {
            for (var o = !1, n = -1, i = e.length, r = i - 1; ++n < i; r = n)
                ((e[n].y <= t.y && t.y < e[r].y) || (e[r].y <= t.y && t.y < e[n].y)) &&
                    t.x < ((e[r].x - e[n].x) * (t.y - e[n].y)) / (e[r].y - e[n].y) + e[n].x &&
                    (o = !o);
            return o;
        }),
        r([s({tooltip: "是否可以点击"})], l.prototype, "canTouch", void 0),
        r(
            [s({tooltip: "在多边形范围内产生点击", type: cc.Component.EventHandler})],
            l.prototype,
            "onInPolygon",
            void 0
        ),
        r(
            [s({tooltip: "在多边形范围外产生点击", type: cc.Component.EventHandler})],
            l.prototype,
            "onOutPolygon",
            void 0
        ),
        r([s({tooltip: "在节点范围内产生点击", type: cc.Component.EventHandler})], l.prototype, "onTouchTap", void 0),
        r([s({tooltip: "是否与需要多边形检查"})], l.prototype, "needPolygon", void 0),
        r([s({type: [cc.Vec2], tooltip: "多边形定点位置信息（局部坐标，至少3个点）"})], l.prototype, "points", void 0),
        r([e], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.canTouch = !0),
        (t.onInPolygon = new cc.Component.EventHandler()),
        (t.onOutPolygon = new cc.Component.EventHandler()),
        (t.onTouchTap = new cc.Component.EventHandler()),
        (t.needPolygon = !1),
        (t.points = []),
        (t.isMoved = !1),
        (t.comp_btn = null),
        t
    );
}
o.TouchHelper = e;
