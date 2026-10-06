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
    s = t("MultipleController"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(l, a),
        (l.prototype.onLoad = function () {
            var o = this;
            this.btnClose.on("click", this.closeView, this),
                this.addGameFun(),
                this.gameBtns.forEach(function (t, e) {
                    t.on("click", o.btnGameFun[e], o);
                }),
                this.waitNode ||
                    ((this.waitNode = cc.instantiate(this.wait)),
                    (this.waitNode.parent = this.gameView),
                    (this.waitNode.active = !1),
                    (this.waitNode.zIndex = 999)),
                this.tipeNode ||
                    ((this.tipeNode = cc.instantiate(this.tipe)),
                    (this.tipeNode.parent = this.gameView),
                    (this.tipeNode.active = !1),
                    (this.tipeNode.zIndex = 998));
        }),
        (l.prototype.start = function () {}),
        (l.prototype.onEnable = function () {
            (this.btnClose.active = !0), this.frameFun();
        }),
        (l.prototype.closeView = function () {
            this.node.active = !1;
        }),
        (l.prototype.addGameFun = function () {
            for (var o = this, t = this, e = 0; e < this.gameBtns.length; e++)
                !(function (e) {
                    t.btnGameFun.push(function () {
                        var t = e;
                        console.log("game" + t), o.openGame(t);
                    });
                })(e);
        }),
        (l.prototype.openGame = function (t) {
            var e;
            (this.btnClose.active = !1),
                this.gameNode.get(t)
                    ? ((e = this.gameNode.get(t)).active = !0)
                    : this.gameNodes[t]
                    ? ((e = cc.instantiate(this.gameNodes[t])),
                      this.gameNode.set(t, e),
                      (e.parent = this.gameView),
                      console.log(e.x, e.y))
                    : console.error("not game->" + t);
        }),
        (l.prototype.showCloseBtn = function () {
            (this.btnClose.active = !0), (this.node.active = !1);
        }),
        (l.prototype.frameFun = function () {
            var t = this;
            null == this.panel && (this.panel = this.node.getChildByName("panel")),
                null == this.bg && (this.bg = this.node.getChildByName("bg")),
                s.default.inst.eject(this.panel, this.bg, function () {
                    t.onEvent();
                });
        }),
        (l.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    t.closeView();
                },
                this
            );
        }),
        r([e(cc.Node)], l.prototype, "btnClose", void 0),
        r([e(cc.Node)], l.prototype, "gameView", void 0),
        r([e(cc.Prefab)], l.prototype, "wait", void 0),
        r([e(cc.Prefab)], l.prototype, "tipe", void 0),
        r([e([cc.Node])], l.prototype, "gameBtns", void 0),
        r([e([cc.Prefab])], l.prototype, "gameNodes", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.btnClose = null),
        (t.gameView = null),
        (t.wait = null),
        (t.tipe = null),
        (t.gameBtns = []),
        (t.gameNodes = []),
        (t.btnGameFun = []),
        (t.gameNode = new Map()),
        (t.waitNode = null),
        (t.tipeNode = null),
        (t.panel = null),
        (t.bg = null),
        t
    );
}
o.default = t;
