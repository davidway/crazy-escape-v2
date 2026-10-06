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
    c = t("Easing"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        (a = cc.Component),
        i(u, a),
        (u.prototype.onEnable = function () {
            this._isNodeValid = !0;
        }),
        (u.prototype.onDisable = function () {
            this._isNodeValid = !1;
        }),
        (u.prototype.jump = function (t) {
            var e = this,
                o = cc.jumpBy(0.35, cc.v2(Math.random() < 0.5 ? -30 : 30), 100, 1);
            cc.tween(this.node)
                .then(o)
                .call(function () {
                    t(), e.onJumpComplete();
                })
                .start();
        }),
        (u.prototype.setPos = function (t) {
            (this.pos = t),
                (this.time = 0),
                (this.target = this.pos.add(
                    this.pos.sub(l.HeroController.getHeroCenter()).normalizeSelf().mulSelf(100)
                )),
                (this.dis = cc.misc.clampf(
                    s.default.getDistance(this.pos, l.HeroController.getHeroCenter()),
                    100,
                    this.maxDis
                )),
                (this.duration =
                    this.dis <= this.maxDis
                        ? c.default.quadOut(this.dis / this.maxDis)
                        : c.default.quadOut(1) + (this.dis - this.maxDis) / this.maxDis);
        }),
        (u.prototype.onUpdate = function (t) {
            if (this.target) {
                this.time = cc.misc.clampf(this.time + t, 0, this.backDuration);
                var e = this.time / this.backDuration,
                    o = this.pos.lerp(this.target, e);
                return (
                    this.node.setPosition(o),
                    void (this.time == this.backDuration && ((this.pos = o), (this.target = null), (this.time = 0)))
                );
            }
            this.time < this.duration
                ? ((this.time = cc.misc.clampf(this.time + t, 0, this.duration)),
                  (e = this.time / this.duration),
                  (t = l.HeroController.getHeroCenter()),
                  (o = this.pos.lerp(t, e)),
                  this.node.setPosition(o))
                : ((this.node.position = l.HeroController.getHeroCenter()), this.onCollect());
        }),
        (u.prototype.onJumpComplete = function () {}),
        (u.prototype.isNodeValid = function () {
            return this._isNodeValid;
        }),
        (u.prototype.getPos = function () {
            return this.node.position;
        }),
        r([t], u));
function u() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.time = 0),
        (t.pos = null),
        (t.target = null),
        (t.duration = 0),
        (t.backDuration = 0.3),
        (t.dis = 0),
        (t.maxDis = 1500),
        (t._isNodeValid = !1),
        t
    );
}
o.default = t;
