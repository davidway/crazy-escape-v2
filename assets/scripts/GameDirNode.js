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
    s = t("ResMgr"),
    l = t("IntersectUtil"),
    c = t("MathUtil"),
    u = t("HeroController"),
    p = t("GameMgr"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(h, a),
        (h.prototype.setTarget = function (t) {
            (this.target = t.target),
                (this.check_delay = 0),
                (this.node.opacity = 0),
                (this.chest.active = 1 == t.type),
                (this.dragon.active = 2 == t.type);
        }),
        (h.prototype.onLoad = function () {
            var t = cc.winSize.width >> 1,
                e = cc.winSize.height >> 1,
                o = -t,
                n = t,
                t = -e,
                e = e;
            (this.rect.left = o - 50),
                (this.rect.right = 50 + n),
                (this.rect.bottom = t - 50),
                (this.rect.top = 50 + e),
                (n -= 60),
                (t += 100),
                (e -= 100),
                (this.left_bottom.x = o += 60),
                (this.left_bottom.y = t),
                (this.right_bottom.x = n),
                (this.right_bottom.y = t),
                (this.left_top.x = o),
                (this.left_top.y = e),
                (this.right_top.x = n),
                (this.right_top.y = e);
        }),
        (h.prototype.update = function () {
            var t, e, o;
            this.target && this.target.isNodeValid()
                ? p.default.inst.moveVector.equals(cc.Vec3.ZERO) ||
                  ((e = p.default.inst.getMapCameraPos()),
                  (t = this.target.getPos()),
                  ((o = cc.v3()).x = t.x - e.x),
                  (o.y = t.y - e.y),
                  c.default.pointInRect(o, this.rect)
                      ? (this.node.opacity = 0)
                      : (0 == this.node.opacity && (this.node.opacity = 255),
                        (t = u.HeroController.getHeroCenter().sub(e)),
                        (e = this.calePoint(t, o)) &&
                            ((this.node.position = e), (o = c.default.getAngleTwoPoint(t, o)), (this.dir.angle = o))))
                : this.recycle();
        }),
        (h.prototype.calePoint = function (t, e) {
            var o = null;
            return (o = l.default.segmentsIntr(this.left_bottom, this.left_top, t, e)) ||
                (o = l.default.segmentsIntr(this.right_bottom, this.right_top, t, e)) ||
                (o = l.default.segmentsIntr(this.left_top, this.right_top, t, e))
                ? o
                : l.default.segmentsIntr(this.left_bottom, this.right_bottom, t, e) || null;
        }),
        (h.prototype.recycle = function () {
            (this.target = null), s.default.inst.putNodeToPool(this.node);
        }),
        r([e(cc.Node)], h.prototype, "dir", void 0),
        r([e(cc.Node)], h.prototype, "chest", void 0),
        r([e(cc.Node)], h.prototype, "dragon", void 0),
        r([t], h));
function h() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.dir = null),
        (t.chest = null),
        (t.dragon = null),
        (t.rect = {left: 0, right: 0, bottom: 0, top: 0}),
        (t.left_bottom = cc.v3()),
        (t.left_top = cc.v3()),
        (t.right_bottom = cc.v3()),
        (t.right_top = cc.v3()),
        (t.check_delay = 0),
        (t.target = null),
        t
    );
}
o.default = t;
