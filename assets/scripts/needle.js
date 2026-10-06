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
            for (var t = 0; t < this.sphereNum; t++) {
                var e = cc.instantiate(this.sphere);
                this.spherePool.put(e);
            }
            (this.btnClose.position = cc.v3(235, 180)),
                this.btnClose.on("click", this.closeView, this),
                this.clickNode.on(cc.Node.EventType.TOUCH_START, this.clickNodeFun, this);
        }),
        (l.prototype.start = function () {}),
        (l.prototype.onEnable = function () {
            (cc.director.getPhysicsManager().enabled = !0), this.init();
        }),
        (l.prototype.onDisable = function () {
            for (
                cc.director.getPhysicsManager().enabled = !1,
                    this.unschedule(this.addSphere),
                    this.needleMove && this.needleMove.stop();
                0 < this.spheres.childrenCount;

            )
                this.putBlock(this.spheres.children[0]);
        }),
        (l.prototype.init = function () {
            (this.isClick = !1), (this.needle.x = 70), this.schedule(this.addSphere, 1 / 60, this.sphereNum);
        }),
        (l.prototype.addSphere = function () {
            var t,
                e = cc.v2(30, 240);
            (t = 0 < this.spherePool.size() ? this.spherePool.get() : cc.instantiate(this.sphere)).setPosition(e),
                (t.parent = this.spheres);
        }),
        (l.prototype.clickNodeFun = function () {
            this.isClick ||
                ((this.isClick = !0),
                this.needleMove ||
                    (this.needleMove = cc
                        .tween(this.needle)
                        .to(1, {x: -60})
                        .call(function () {})),
                this.needleMove.start());
        }),
        (l.prototype.putBlock = function (t) {
            this.spherePool.size() < this.sphereNum ? this.spherePool.put(t) : t.parent.removeAllChildren();
        }),
        r([e(cc.Node)], l.prototype, "needle", void 0),
        r([e(cc.Node)], l.prototype, "spheres", void 0),
        r([e(cc.Prefab)], l.prototype, "sphere", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.needle = null),
        (t.spheres = null),
        (t.sphere = null),
        (t.sphereNum = 80),
        (t.spherePool = new cc.NodePool()),
        (t.isClick = !1),
        (t.needleMove = null),
        t
    );
}
o.default = t;
