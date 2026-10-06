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
    s = t("App"),
    l = t("ResMgr"),
    c = t("EventTypes"),
    u = t("FrameComp"),
    p = t("DropController"),
    h = t("DropType"),
    d = t("GridMgr"),
    f = t("Drop"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = f.default),
        i(y, a),
        Object.defineProperty(y.prototype, "rect", {
            get: function () {
                return this._rect;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(y.prototype, "type", {
            get: function () {
                return h.DropType.Box;
            },
            enumerable: !1,
            configurable: !0
        }),
        (y.prototype.onLoad = function () {
            var t = this;
            this.animComp = new u.FrameComp(this.node, this.bodySp);
            var e = [];
            e.push(this.boxAtlas.getSpriteFrame("idle"));
            e = {name: "idle", frames: e, interval: Number.MAX_SAFE_INTEGER, loop: !1};
            this.animComp.setData(e);
            for (var o = [], n = 1; n <= 5; n++) o.push(this.boxAtlas.getSpriteFrame("broken_" + n));
            this.animComp.setData(
                (e = {
                    name: "broken",
                    frames: o,
                    interval: 0.1,
                    loop: !1,
                    complete: function () {
                        l.default.inst.putNodeToPool(t.node);
                    }
                })
            ),
                this.animComp.play("idle");
        }),
        (y.prototype.onEnable = function () {
            this._rect = this.node.getBoundingBox();
        }),
        (y.prototype.setData = function (t) {
            (this._data = t),
                (this.isBroken = !1),
                d.GridMgr.setWaklable(this.node.position, !1, {left: -5, right: 4, buttom: -4, top: 4}),
                this.animComp && this.animComp.play("idle");
        }),
        (y.prototype.onCollect = function () {}),
        (y.prototype.update = function (t) {
            "idle" != this.animComp.getActName() && this.animComp.onUpdate(t);
        }),
        (y.prototype.broken = function () {
            this.isBroken ||
                (d.GridMgr.setWaklable(this.node.position, !0, {left: -4, right: 4, buttom: -4, top: 4}),
                this.animComp.play("broken"),
                (this.isBroken = !0),
                p.default.inst.delDrop(this),
                s.app.event.emit(c.EventType.Game_Add_Drop_Item, {pos: this.node.position, index: this._data.index}));
        }),
        r([e(cc.Sprite)], y.prototype, "bodySp", void 0),
        r([e(cc.SpriteAtlas)], y.prototype, "boxAtlas", void 0),
        r([t], y));
function y() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.bodySp = null),
        (t.boxAtlas = null),
        (t.animComp = null),
        (t._rect = null),
        (t._data = null),
        (t.isBroken = !1),
        t
    );
}
o.default = t;
