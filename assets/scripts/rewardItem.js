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
    s = t("ConfData"),
    l = t("Prop"),
    c = t("btnDrawBlock"),
    u = t("CloseUI"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(p, a),
        (p.prototype.onLoad = function () {
            this.init();
        }),
        (p.prototype.start = function () {}),
        (p.prototype.onEnable = function () {
            this.node.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    u.default.inst.closeNode();
                },
                this
            );
        }),
        (p.prototype.onDisable = function () {
            this.node.off(cc.Node.EventType.TOUCH_START);
        }),
        (p.prototype.setData = function (t, e) {
            (this._everydayRewardData = e),
                (this._reward = t.reward),
                (this._abundantReward = t.abundantReward),
                (this._day = t.day),
                this.change();
        }),
        (p.prototype.init = function () {
            var t,
                e = this;
            this.labNode.children[this._day - 1]
                ? (this.labNode.children[this._day - 1].getComponent(cc.Label).string = "第" + this._day + "天")
                : (((t = cc.instantiate(this.dayLab)).getComponent(cc.Label).string = "第" + this._day + "天"),
                  this.labNode.addChild(t)),
                this.setReward(this._reward, this.reward),
                this.setReward(this._abundantReward, this.abundantReward),
                this.scheduleOnce(function () {
                    (e.rewardMack.width = e.reward.width), (e.abundantMack.width = e.abundantReward.width);
                });
        }),
        (p.prototype.change = function () {
            var t = !1;
            this._everydayRewardData.abundantDay <= this._day && this._everydayRewardData.rewardDay >= this._day
                ? (1 == this._everydayRewardData.abundantReward
                      ? (this.abundantMack.active = !0)
                      : (this.abundantMack.active = !1),
                  (this.abundantGetIcom.spriteFrame = this.getIcoms[1]))
                : (this._everydayRewardData.abundantDay < this._day
                      ? (this.abundantGetIcom.spriteFrame = this.getIcoms[0])
                      : (this.abundantGetIcom.spriteFrame = this.getIcoms[1]),
                  (this.abundantMack.active = !0)),
                this._everydayRewardData.rewardDay == this._day
                    ? (1 == this._everydayRewardData.reward
                          ? (this.rewardMack.active = !0)
                          : (this.rewardMack.active = !1),
                      (this.rewardGetIcom.spriteFrame = this.getIcoms[1]))
                    : (this._everydayRewardData.rewardDay < this._day
                          ? (this.rewardGetIcom.spriteFrame = this.getIcoms[0])
                          : (this.rewardGetIcom.spriteFrame = this.getIcoms[1]),
                      (this.rewardMack.active = !0)),
                this._everydayRewardData.rewardDay >= this._day && this._everydayRewardData.abundantDay <= this._day
                    ? (this._everydayRewardData.rewardDay == this._everydayRewardData.abundantDay ||
                          this._everydayRewardData.abundantDay < this._everydayRewardData.rewardDay) &&
                      (t = 0 == this._everydayRewardData.reward || 0 == this._everydayRewardData.abundantReward)
                    : (t = !1),
                t
                    ? ((this.node.getComponent(cc.Sprite).spriteFrame = this.bgs[1]),
                      (this.dayBg.spriteFrame = this.dayBgs[1]))
                    : ((this.node.getComponent(cc.Sprite).spriteFrame = this.bgs[0]),
                      (this.dayBg.spriteFrame = this.dayBgs[0]));
        }),
        (p.prototype.setReward = function (t, e) {
            for (var o = 0; o < t.length; o++) {
                var n,
                    i = s.default.inst.PrizeConf.getPrize(t[o].id),
                    r = {};
                switch (i.type) {
                    case l.Prop.equip:
                        var a = s.default.inst.equipConf.getEquipVo(t[o].appoint);
                        r.equip = {id: t[o].appoint, quality: i.quality, level: 1, status: 0, equipType: a.type};
                        break;
                    case l.Prop.drawing:
                        r.draw = {id: t[o].appoint, quantity: t[o].count};
                        break;
                    case l.Prop.randomEquip:
                    case l.Prop.randomGreenEquip:
                    case l.Prop.randomBlueEquip:
                    case l.Prop.randomPurpleEquip:
                    case l.Prop.randomRedeEquip:
                        (r.num = t[o].count), (r.EquipType = 0);
                        break;
                    default:
                        r.num = t[o].count;
                }
                null == e.children[o]
                    ? ((n = cc.instantiate(this.Block)).getComponent(c.default).setData(r, i.type, !1, 2),
                      (n.parent = e))
                    : ((e.children[o].active = !0), e.children[o].getComponent(c.default).setData(r, i.type, !1, 2)),
                    (e.children[o].y = -3);
            }
            if (t.length < e.childrenCount)
                for (o = e.childrenCount - 1; o != t.length - 1; o--) e.children[o].active = !1;
        }),
        r([e(cc.Node)], p.prototype, "dayLab", void 0),
        r([e(cc.Node)], p.prototype, "reward", void 0),
        r([e(cc.Node)], p.prototype, "abundantReward", void 0),
        r([e(cc.Node)], p.prototype, "rewardMack", void 0),
        r([e(cc.Node)], p.prototype, "labNode", void 0),
        r([e(cc.Node)], p.prototype, "abundantMack", void 0),
        r([e(cc.Sprite)], p.prototype, "rewardGetIcom", void 0),
        r([e(cc.Sprite)], p.prototype, "abundantGetIcom", void 0),
        r([e(cc.Sprite)], p.prototype, "dayBg", void 0),
        r([e([cc.SpriteFrame])], p.prototype, "getIcoms", void 0),
        r([e([cc.SpriteFrame])], p.prototype, "bgs", void 0),
        r([e([cc.SpriteFrame])], p.prototype, "dayBgs", void 0),
        r([e(cc.Prefab)], p.prototype, "Block", void 0),
        r([t], p));
function p() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.dayLab = null),
        (t.reward = null),
        (t.abundantReward = null),
        (t.rewardMack = null),
        (t.labNode = null),
        (t.abundantMack = null),
        (t.rewardGetIcom = null),
        (t.abundantGetIcom = null),
        (t.dayBg = null),
        (t.getIcoms = []),
        (t.bgs = []),
        (t.dayBgs = []),
        (t.Block = null),
        (t._everydayRewardData = null),
        (t._reward = []),
        (t._abundantReward = []),
        (t._day = 0),
        t
    );
}
o.default = t;
