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
            this.clickNode.on(cc.Node.EventType.TOUCH_START, this.clickNodeFun, this),
                this.btnClose.on("click", this.closeView, this);
        }),
        (l.prototype.start = function () {}),
        (l.prototype.onEnable = function () {
            this.init();
        }),
        (l.prototype.onDisable = function () {
            this.map.removeAllChildren(), this.unschedule(this.downFun), this.unschedule(this.downAll);
        }),
        (l.prototype.init = function () {
            (this.mahjongBlock = [[]]), (this.gamStart = !1), (this.mahjongNum = 0), this.setMahjong();
            for (var t = 0; t < 3; t++) {
                this.mahjongBlock[2 - t] = [];
                for (var e, o = 0; o < 3; o++)
                    1 != o &&
                        (((e = cc.instantiate(this.mahjongBlockPre)).getComponent(cc.Sprite).spriteFrame =
                            this.mahjongImages[2 - t]),
                        e.setPosition(cc.v2(this.BlockPosX[2 - o], this.BlockPosY[2 - t])),
                        (e.parent = this.map),
                        (this.mahjongBlock[2 - t][o] = e));
            }
        }),
        (l.prototype.setMahjong = function () {
            (this.down.active = !0),
                (this.down.y = 297),
                (this.down.getComponent(cc.Sprite).spriteFrame = this.mahjongImages[this.mahjongNum]),
                (this.downNum = 4);
        }),
        (l.prototype.clickNodeFun = function () {
            console.log(999),
                this.gamStart ||
                    0 == this.mahjongBlock.length ||
                    ((this.gamStart = !0), this.schedule(this.downFun, 0.3));
        }),
        (l.prototype.downFun = function () {
            var t;
            0 == this.downNum
                ? (this.unschedule(this.downFun),
                  (t = this.mahjongBlock.shift()),
                  (this.down.active = !1),
                  t.forEach(function (t) {
                      t.parent.removeChild(t);
                  }),
                  this.scheduleOnce(this.downAll, 0.3))
                : ((this.down.y -= 119), this.downNum--);
        }),
        (l.prototype.downAll = function () {
            var e = this;
            this.mahjongBlock.forEach(function (t) {
                t.forEach(function (t) {
                    e.downOne(t);
                });
            }),
                (this.gamStart = !1),
                this.mahjongNum++,
                this.setMahjong();
        }),
        (l.prototype.downOne = function (t) {
            t.y -= 119;
        }),
        r([e(cc.Node)], l.prototype, "down", void 0),
        r([e(cc.Node)], l.prototype, "map", void 0),
        r([e(cc.Prefab)], l.prototype, "mahjongBlockPre", void 0),
        r([e([cc.SpriteFrame])], l.prototype, "mahjongImages", void 0),
        r([t], l));
function l() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.down = null),
        (t.map = null),
        (t.mahjongBlockPre = null),
        (t.mahjongImages = []),
        (t.gamStart = !1),
        (t.mahjongNum = 0),
        (t.downNum = 4),
        (t.mahjongBlock = [[]]),
        (t.BlockPosX = [-114, 0, 114]),
        (t.BlockPosY = [-179, -60, 59]),
        t
    );
}
o.default = t;
