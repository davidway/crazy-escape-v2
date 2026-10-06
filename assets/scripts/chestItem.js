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
    s = t("AssignmentController"),
    l = t("MultipleController"),
    c = t("ConfData"),
    u = t("Prop"),
    p = t("btnDrawBlock"),
    h = t("CloseUI"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(d, a),
        (d.prototype.onLoad = function () {
            (this._chestBtn = this.node.getChildByName("chestBtn")),
                (this._light = this.node.getChildByName("light")),
                (this._chestGet = this.node.getChildByName("chestGet")),
                (this._rewardNode = this.node.getChildByName("rewardNode")),
                l.default.inst.rotate(this._light, 3),
                (this._oldScale = this.node.scale),
                this.onEvent(),
                this.init(),
                this._isEquip
                    ? (this.Breathing = l.default.inst.Breathing(this._rewardNode, 1.05, 1, 0.5))
                    : (this.Breathing = l.default.inst.Breathing(this.node, 0.4, 0.35, 0.5)),
                2 != this._assignReward.acquire[this._Assign.id - 1] && this.Breathing.stop(),
                (this._isInit = !0);
        }),
        (d.prototype.start = function () {}),
        (d.prototype.setData = function (t, e) {
            (this._assignReward = e),
                (this._chestIndex = t),
                (this._chestId = t + 1),
                (this._Assign = c.default.inst.assignmentConf.getAssigns(t + 1)),
                (this._reward = this._Assign.reward),
                this._isInit && this.init();
        }),
        (d.prototype.onEvent = function () {
            this._chestBtn.on("click", this.getReward, this);
        }),
        (d.prototype.init = function () {
            8 != this._chestId && (this.node.x = 50 * this._chestId - 210),
                (this.chestLab.string = this._Assign.quantity + ""),
                (this.chestLab.node.x = this.node.x),
                (this._chestBtn.active = !0),
                (this._chestGet.active = !1),
                (this._light.active = !1),
                (this._isEquip = !1);
            for (var t = c.default.inst.PrizeConf.getRewardData(this._reward), e = 0; e < t.length; e++) {
                var o = t[e].type,
                    n = null;
                o == u.Prop.equip &&
                    ((this._isEquip = !0),
                    this._rewardNode.children[e]
                        ? (n = this._rewardNode.children[e]).getComponent(p.default).setData(t[e].profit, o, !1, 3)
                        : ((n = cc.instantiate(this.block)).getComponent(p.default).setData(t[e].profit, o, !1, 3),
                          (n.parent = this._rewardNode)));
            }
            this._Assign.quantity <= this._assignReward.quantity
                ? 2 == this._assignReward.acquire[this._Assign.id - 1]
                    ? (this.node.getChildByName("yellow") && (this.node.getChildByName("yellow").active = !0),
                      (this._chestBtn.getComponent(cc.Button).interactable = !0),
                      (this._light.active = !0),
                      this.Breathing && this.Breathing.start())
                    : 1 == this._assignReward.acquire[this._Assign.id - 1] &&
                      ((this._chestBtn.active = !1),
                      (this._chestBtn.getComponent(cc.Button).interactable = !1),
                      (this._chestGet.active = !0),
                      this.Breathing && this.Breathing.stop(),
                      (this.node.scale = this._oldScale))
                : (this.node.getChildByName("yellow") && (this.node.getChildByName("yellow").active = !1),
                  (this._chestBtn.getComponent(cc.Button).interactable = !1),
                  this._isEquip && (this._chestBtn.active = !1),
                  this.Breathing && this.Breathing.stop(),
                  (this.node.scale = this._oldScale));
        }),
        (d.prototype.getReward = function () {
            h.default.inst.closeNode(),
                s.default.inst.getAllProgReward(this._chestIndex),
                this.init(),
                console.log("领取");
        }),
        r([e(cc.Label)], d.prototype, "chestLab", void 0),
        r([e(cc.Prefab)], d.prototype, "block", void 0),
        r([t], d));
function d() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.chestLab = null),
        (t.block = null),
        (t._chestBtn = null),
        (t._light = null),
        (t._chestGet = null),
        (t._assignReward = null),
        (t._reward = null),
        (t._Assign = null),
        (t._isEquip = !1),
        (t._rewardNode = null),
        (t._isInit = !1),
        (t._chestIndex = 0),
        (t._chestId = 0),
        (t.Breathing = null),
        (t._oldScale = 0),
        t
    );
}
o.default = t;
