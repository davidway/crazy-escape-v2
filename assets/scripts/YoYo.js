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
    s = cc._decorator,
    e = s.ccclass,
    s = s.property,
    e =
        ((a = cc.Component),
        i(l, a),
        (l.prototype.onLoad = function () {
            (this._basePos = this.node.position), (this._scaleX = this.node.scaleX), (this._scaleY = this.node.scaleY);
        }),
        (l.prototype.onEnable = function () {
            (this.node.position = this._basePos),
                (this.node.scaleX = this._scaleX),
                (this.node.scaleY = this._scaleY),
                (this._tween = cc
                    .tween(this.node)
                    .sequence(
                        cc
                            .tween()
                            .to(this.duration, {
                                position: cc.v3(this._basePos.x + this.offsetX, this._basePos.y + this.offsetY),
                                scaleX: this.scaleX,
                                scaleY: this.scaleY
                            }),
                        cc
                            .tween()
                            .to(this.duration, {position: this._basePos, scaleX: this._scaleX, scaleY: this._scaleY})
                    )
                    .repeatForever()
                    .start());
        }),
        (l.prototype.onDisable = function () {
            this._tween && (this._tween.stop(), (this._tween = null));
        }),
        r([s], l.prototype, "scaleX", void 0),
        r([s], l.prototype, "scaleY", void 0),
        r([s], l.prototype, "offsetX", void 0),
        r([s], l.prototype, "offsetY", void 0),
        r([s], l.prototype, "duration", void 0),
        r([e], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.scaleX = 1),
        (t.scaleY = 1),
        (t.offsetX = 0),
        (t.offsetY = 0),
        (t.duration = 1),
        (t._basePos = null),
        (t._scaleX = 1),
        (t._scaleY = 1),
        (t._tween = null),
        t
    );
}
o.default = e;
