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
            this.btnClose.on("click", this.closeView, this),
                this.clickNode.on(cc.Node.EventType.TOUCH_START, this.clickNodeFun, this);
        }),
        (l.prototype.start = function () {}),
        (l.prototype.onEnable = function () {
            this.init();
        }),
        (l.prototype.onDisable = function () {
            this.plugMoveTween && this.plugMoveTween.stop(), this.lineMoveTween && this.lineMoveTween.stop();
        }),
        (l.prototype.init = function () {
            var e = this;
            (this.isClick = !1),
                (this.moveNum = 0),
                this.plugs.forEach(function (t) {
                    (t.y = e.startPosY), (t.getComponent(cc.Sprite).spriteFrame = e.plugImages[0]);
                }),
                this.lines.forEach(function (t) {
                    t.height = e.lineStartH;
                }),
                this.lamps.forEach(function (t) {
                    t.color = cc.color().fromHEX("#FFFFFF");
                });
        }),
        (l.prototype.clickNodeFun = function () {
            this.isClick || this.moveNum == this.maxMove || ((this.isClick = !0), this.movePlug());
        }),
        (l.prototype.movePlug = function () {
            var t = this;
            (this.plugMoveTween = cc
                .tween(this.plugs[this.moveNum])
                .to(0.5, {y: this.endPosY})
                .call(function () {
                    (t.plugs[t.moveNum].y = -260),
                        (t.plugs[t.moveNum].getComponent(cc.Sprite).spriteFrame = t.plugImages[1]);
                })),
                (this.lineMoveTween = cc
                    .tween(this.lines[this.moveNum])
                    .to(0.5, {height: this.lineEndH})
                    .call(function () {
                        (t.lamps[t.moveNum].color = cc.color().fromHEX("#FAFF00")), t.moveNum++, (t.isClick = !1);
                    })),
                this.plugMoveTween.start(),
                this.lineMoveTween.start();
        }),
        r([e([cc.Node])], l.prototype, "lamps", void 0),
        r([e([cc.Node])], l.prototype, "lines", void 0),
        r([e([cc.Node])], l.prototype, "plugs", void 0),
        r([e([cc.SpriteFrame])], l.prototype, "plugImages", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.lamps = []),
        (t.lines = []),
        (t.plugs = []),
        (t.plugImages = []),
        (t.isClick = !1),
        (t.lineEndH = 230),
        (t.lineStartH = 60),
        (t.endPosY = -250),
        (t.startPosY = -100),
        (t.moveNum = 0),
        (t.maxMove = 3),
        (t.plugMoveTween = null),
        (t.lineMoveTween = null),
        t
    );
}
o.default = t;
