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
            for (var t = 0; t < this.sphereNumWith * this.sphereNumHeght; t++) {
                var e = cc.instantiate(this.block);
                this.blockPool.put(e);
            }
            this.btnClose.on("click", this.closeView, this), (this.fishScaleY = this.fish.scaleY);
        }),
        (l.prototype.start = function () {}),
        (l.prototype.onEnable = function () {
            this.init();
        }),
        (l.prototype.init = function () {
            var t = this;
            if (
                ((cc.director.getCollisionManager().enabled = !1),
                (cc.director.getCollisionManager().enabledDebugDraw = !1),
                (this.sphereNode.getComponent(cc.Layout).enabled = !0),
                this.sphereNode.childrenCount < this.sphereNumWith * this.sphereNumHeght)
            ) {
                for (
                    var e, o = 0;
                    o < this.sphereNumHeght && this.sphereNode.childrenCount < this.sphereNumWith * this.sphereNumHeght;
                    o++
                )
                    for (
                        var n = 0;
                        n < this.sphereNumWith &&
                        this.sphereNode.childrenCount < this.sphereNumWith * this.sphereNumHeght;
                        n++
                    )
                        0 < this.blockPool.size()
                            ? (((e = this.blockPool.get()).parent = this.sphereNode), (e.scale = 1))
                            : ((e = cc.instantiate(this.block)).parent = this.sphereNode);
                this.scheduleOnce(function () {
                    (t.sphereNode.getComponent(cc.Layout).enabled = !1),
                        (cc.director.getCollisionManager().enabled = !0);
                });
            }
            (this.fish.x = 0), (this.fish.y = 0), (this.fish.angle = 0), (this.fish.scaleY = this.fishScaleY);
        }),
        (l.prototype.putBlock = function (t) {
            this.blockPool.size() < this.sphereNumWith * this.sphereNumHeght
                ? this.blockPool.put(t)
                : t.parent.removeAllChildren();
        }),
        r([e(cc.Node)], l.prototype, "fish", void 0),
        r([e(cc.Prefab)], l.prototype, "block", void 0),
        r([e(cc.Node)], l.prototype, "sphereNode", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.fish = null),
        (t.block = null),
        (t.sphereNode = null),
        (t.fishScaleY = 0),
        (t.sphereNumWith = 10),
        (t.sphereNumHeght = 10),
        (t.mapWith = 500),
        (t.mapHeght = 500),
        (t.blockPool = new cc.NodePool()),
        t
    );
}
o.default = t;
