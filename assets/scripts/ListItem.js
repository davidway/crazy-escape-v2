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
    l = s.ccclass,
    c = s.property,
    u = s.disallowMultiple,
    p = s.menu,
    e = s.executionOrder;
((s = a = a || {})[(s.NONE = 0)] = "NONE"), (s[(s.TOGGLE = 1)] = "TOGGLE"), (s[(s.SWITCH = 2)] = "SWITCH");
var h,
    e =
        ((h = cc.Component),
        i(d, h),
        Object.defineProperty(d.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (t) {
                if (((this._selected = t), this.selectedFlag))
                    switch (this.selectedMode) {
                        case a.TOGGLE:
                            this.selectedFlag.active = t;
                            break;
                        case a.SWITCH:
                            var e = this.selectedFlag.getComponent(cc.Sprite);
                            e && (e.spriteFrame = t ? this.selectedSpriteFrame : this._unselectedSpriteFrame);
                    }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(d.prototype, "btnCom", {
            get: function () {
                return this._btnCom || (this._btnCom = this.node.getComponent(cc.Button)), this._btnCom;
            },
            enumerable: !1,
            configurable: !0
        }),
        (d.prototype.onLoad = function () {
            var t;
            this.selectedMode == a.SWITCH &&
                ((t = this.selectedFlag.getComponent(cc.Sprite)), (this._unselectedSpriteFrame = t.spriteFrame));
        }),
        (d.prototype.onDestroy = function () {
            this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
        }),
        (d.prototype._registerEvent = function () {
            this._eventReg ||
                (this.btnCom &&
                    0 < this.list.selectedMode &&
                    this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis")),
                this.adaptiveSize && this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this),
                (this._eventReg = !0));
        }),
        (d.prototype._onSizeChange = function () {
            this.list._onItemAdaptive(this.node);
        }),
        (d.prototype.createEvt = function (t, e, o) {
            if ((void 0 === o && (o = null), t.isValid)) {
                t.comName =
                    t.comName ||
                    t.name
                        .match(/\<(.*?)\>/g)
                        .pop()
                        .replace(/\<|>/g, "");
                var n = new cc.Component.EventHandler();
                return (n.target = o || t.node), (n.component = t.comName), (n.handler = e), n;
            }
        }),
        (d.prototype.showAni = function (t, e, o) {
            var n,
                i = this;
            switch (t) {
                case 0:
                    n = cc
                        .tween(i.node)
                        .to(0.2, {scale: 0.7})
                        .by(0.3, {y: 2 * i.node.height});
                    break;
                case 1:
                    n = cc
                        .tween(i.node)
                        .to(0.2, {scale: 0.7})
                        .by(0.3, {x: 2 * i.node.width});
                    break;
                case 2:
                    n = cc
                        .tween(i.node)
                        .to(0.2, {scale: 0.7})
                        .by(0.3, {y: -2 * i.node.height});
                    break;
                case 3:
                    n = cc
                        .tween(i.node)
                        .to(0.2, {scale: 0.7})
                        .by(0.3, {x: -2 * i.node.width});
                    break;
                default:
                    n = cc.tween(i.node).to(0.3, {scale: 0.1});
            }
            (e || o) &&
                n.call(function () {
                    if (o) {
                        i.list._delSingleItem(i.node);
                        for (var t = i.list.displayData.length - 1; 0 <= t; t--)
                            if (i.list.displayData[t].id == i.listId) {
                                i.list.displayData.splice(t, 1);
                                break;
                            }
                    }
                    e();
                }),
                n.start();
        }),
        (d.prototype.onClickThis = function () {
            this.list.selectedId = this.listId;
        }),
        r([c({type: cc.Sprite})], d.prototype, "icon", void 0),
        r([c({type: cc.Node})], d.prototype, "title", void 0),
        r([c({type: cc.Enum(a)})], d.prototype, "selectedMode", void 0),
        r(
            [
                c({
                    type: cc.Node,
                    visible: function () {
                        return this.selectedMode > a.NONE;
                    }
                })
            ],
            d.prototype,
            "selectedFlag",
            void 0
        ),
        r(
            [
                c({
                    type: cc.SpriteFrame,
                    visible: function () {
                        return this.selectedMode == a.SWITCH;
                    }
                })
            ],
            d.prototype,
            "selectedSpriteFrame",
            void 0
        ),
        r([c({})], d.prototype, "adaptiveSize", void 0),
        r([l, u(), p("自定义组件/List Item"), e(-5001)], d));
function d() {
    var t = (null !== h && h.apply(this, arguments)) || this;
    return (
        (t.icon = null),
        (t.title = null),
        (t.selectedMode = a.NONE),
        (t.selectedFlag = null),
        (t.selectedSpriteFrame = null),
        (t._unselectedSpriteFrame = null),
        (t.adaptiveSize = !1),
        (t._selected = !1),
        (t._eventReg = !1),
        t
    );
}
o.default = e;
