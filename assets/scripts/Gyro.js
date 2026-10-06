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
    s = t("MathUtil"),
    l = t("HeroController"),
    c = t("GameMgr"),
    u = t("GyroSub"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(p, a),
        (p.prototype.setData = function (t, e, o) {
            (this.speed = t.speed),
                (this.angular = t.angular),
                (this.duration = t.duration),
                (this.radius = o.getData().confVo.radius),
                (this.startPos.x = this.radius),
                (this.isDiappear = !1);
            var n = 360 / t.count;
            (this.subs[0].node.position = cc.v3()),
                (this.subs[0].node.active = !0),
                this.subs[0].setData(null, e, o),
                (this.subs[0].hitNum = Number.MAX_SAFE_INTEGER),
                this.subs[0].appear(this.startPos);
            for (var i, r = 1; r < this.subs.length; r++)
                r < t.count
                    ? ((i = s.default.rotatePoint(this.startPos, n * r, cc.v3())),
                      (this.subs[r].node.angle = n * r),
                      (this.subs[r].node.position = cc.v3()),
                      (this.subs[r].node.active = !0),
                      this.subs[r].setData(null, e, o),
                      (this.subs[r].hitNum = Number.MAX_SAFE_INTEGER),
                      this.subs[r].appear(i))
                    : (this.subs[r].node.active = !1);
        }),
        (p.prototype.onUpdate = function (t) {
            if (((this.duration -= t), this.duration <= 0 && !this.isDiappear))
                return (this.isDiappear = !0), (this.disapper_time = 1), void this.disappear();
            if (this.isDiappear && ((this.disapper_time -= t), this.disapper_time <= 0)) this.recycle();
            else {
                (this.content.angle -= this.speed * c.default.inst.timeScale), this.updatePos();
                for (var e, o = 0; o < this.subs.length; o++)
                    this.subs[o].node.active &&
                        (this.subs[o].onUpdate(t),
                        (e = this.node.position.add(
                            this.node.convertToNodeSpaceAR(this.subs[o].node.convertToWorldSpaceAR(cc.v3()))
                        )),
                        this.subs[o].calcHurt(e, 30));
            }
        }),
        (p.prototype.updatePos = function () {
            this.node.position = l.HeroController.getHeroCenter();
        }),
        (p.prototype.disappear = function () {
            for (var t = 0; t < this.subs.length; t++) this.subs[t].node.active && this.subs[t].disappear(cc.v3());
        }),
        (p.prototype.recycle = function () {
            this.node.parent = null;
        }),
        r([e(cc.Node)], p.prototype, "content", void 0),
        r([e([u.default])], p.prototype, "subs", void 0),
        r([t], p));
function p() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.content = null),
        (t.subs = []),
        (t.speed = 0),
        (t.angular = 0),
        (t.duration = null),
        (t.startPos = cc.v3(0, 0)),
        (t.isDiappear = !1),
        (t.disapper_time = 0.4),
        (t.radius = 0),
        t
    );
}
o.default = t;
