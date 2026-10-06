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
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(p, a),
        (p.prototype.recycle = function () {
            l.default.inst.putNodeToPool(this.node);
        }),
        (p.prototype.onLoad = function () {
            var t = this;
            this.animComp = new u.FrameComp(this.node, this.bodySp);
            for (var e = [], o = 1; o <= 16; o++) e.push(this.bombAtlas.getSpriteFrame("bomb_all_" + o));
            this.animComp.setData({
                name: "bomb_all",
                frames: e,
                interval: 0.06,
                loop: !1,
                complete: function () {
                    t.recycle();
                }
            });
        }),
        (p.prototype.onEnable = function () {
            (this.node.scale = 3), (this.count = 0), (this.isSendBomb = !1), this.animComp.play("bomb_all");
        }),
        (p.prototype.update = function (t) {
            var e = this.animComp.getFrameIndex();
            7 != e || this.isSendBomb || ((this.isSendBomb = !0), s.app.event.emit(c.EventType.Game_Bomb_Kill_All)),
                7 <= e && ((this.node.scale = cc.misc.lerp(3, 10, this.count / 0.4)), (this.count += t)),
                this.animComp.onUpdate(t);
        }),
        r([e(cc.Sprite)], p.prototype, "bodySp", void 0),
        r([e(cc.SpriteAtlas)], p.prototype, "bombAtlas", void 0),
        r([t], p));
function p() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (t.bodySp = null), (t.bombAtlas = null), (t.animComp = null), (t.isSendBomb = !1), (t.count = 0), t;
}
o.default = t;
