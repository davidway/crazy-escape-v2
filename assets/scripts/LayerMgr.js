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
        });
Object.defineProperty(o, "__esModule", {value: !0}), (o.LayerEnum = void 0);
var r,
    e = t("Singleton");
((t = r = o.LayerEnum || (o.LayerEnum = {}))[(t.GAME_LAYER = 0)] = "GAME_LAYER"),
    (t[(t.VIEW_LAYER = 1)] = "VIEW_LAYER"),
    (t[(t.TOP_LAYER = 2)] = "TOP_LAYER"),
    (t[(t.TIPS_LAYER = 3)] = "TIPS_LAYER"),
    (t[(t.MAX_LAYER = 4)] = "MAX_LAYER");
var a,
    i =
        ((a = e.Singleton()),
        i(s, a),
        (s.prototype.setup = function (t) {
            this.canvas = cc.find("Canvas");
            for (var e = 0; e < t; ++e) this.createLayer().name = r[e];
            (this.lockNode = this.createLayer()),
                (this.lockNode.active = !1),
                this.lockNode.addComponent(cc.BlockInputEvents),
                cc.log("canvas:" + this.canvas.childrenCount);
        }),
        (s.prototype.createLayer = function () {
            var t = new cc.Node();
            (t.width = this.canvas.width), (t.height = this.canvas.height);
            var e = t.addComponent(cc.Widget);
            return (
                (e.isAlignBottom = !0),
                (e.isAlignTop = !0),
                (e.isAlignLeft = !0),
                (e.isAlignRight = !0),
                (e.left = 0),
                (e.right = 0),
                (e.top = 0),
                (e.bottom = 0),
                (t.parent = this.canvas),
                this.layers.push(t),
                e.updateAlignment(),
                t
            );
        }),
        (s.prototype.addUI = function (t, e) {
            t = this.getLayerNode(t);
            e.parent = t;
        }),
        (s.prototype.getLayerNode = function (t) {
            return this.layers[t] || this.canvas;
        }),
        (s.prototype.getLockNode = function () {
            return this.lockNode;
        }),
        s);
function s() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.canvas = null), (t.layers = []), (t.lockNode = null), t;
}
o.default = i;
