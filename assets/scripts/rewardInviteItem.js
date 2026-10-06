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
    l = t("EventTypes"),
    c = t("InviteController"),
    u = t("MultipleController"),
    p = t("ConfData"),
    h = t("Prop"),
    d = t("TrackType"),
    f = t("btnDrawBlock"),
    y = t("CloseUI"),
    e = cc._decorator,
    t = e.ccclass,
    e = e.property,
    t =
        ((a = cc.Component),
        i(g, a),
        (g.prototype.onLoad = function () {
            this.init(), (this._isInit = !0), u.default.inst.Breathing(this.reward_hd, 1.2, 1, 0.9);
        }),
        (g.prototype.start = function () {}),
        (g.prototype.onEnable = function () {
            this.node.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    y.default.inst.closeNode();
                },
                this
            );
        }),
        (g.prototype.setData = function (t, e, o, n, i) {
            (this.node.scale = 1),
                (this.rewardInviteItemBg = i),
                (this.rewardInviteItemBg.scale = 1),
                (this.index = n),
                (this._fun = o),
                (this._Invite = t),
                (this._inviteData = e),
                (this._reward = this._Invite.reward),
                this._isInit && this.change();
        }),
        (g.prototype.init = function () {
            this.btnInvite.on("click", this.inviteFriend, this), this.change();
        }),
        (g.prototype.change = function () {
            (this.btnInvite.active = !0),
                (this.alreadyGet.active = !1),
                (this.reward_hd.active = !1),
                this.setReward(this._reward, this.reward),
                this.describeLabNode.children[this.index]
                    ? (this.describeLabNode.children[this.index].getComponent(cc.Label).string = this._Invite.describe)
                    : (((t = cc.instantiate(this.descrilab)).getComponent(cc.Label).string = this._Invite.describe),
                      (t.parent = this.describeLabNode)),
                (this.describe = this.describeLabNode.children[this.index]),
                (this.describe.scale = 1);
            var t,
                e,
                o = "";
            this._inviteData.inviteNum >= this._Invite.people
                ? ((o = this._Invite.people + "/" + this._Invite.people),
                  (e = !1),
                  (e = this._inviteData.drawGetId[this._Invite.id]
                      ? this._inviteData.drawGetId[this._Invite.id].isGet
                      : e)
                      ? ((this.alreadyGet.active = !0), (this.btnInvite.active = !1))
                      : ((this.reward_hd.active = !0),
                        (this.btnInvite.getComponent(cc.Sprite).spriteFrame = this.btnBg[0]),
                        (this.getIcon.spriteFrame = this.getIcoms[0])),
                  (this.isInvite = !1))
                : ((this.isInvite = !0),
                  (this.btnInvite.getComponent(cc.Sprite).spriteFrame = this.btnBg[1]),
                  (this.getIcon.spriteFrame = this.getIcoms[1]),
                  (o = this._inviteData.inviteNum + "/" + this._Invite.people)),
                this.courseLabNode.children[this.index]
                    ? (this.courseLabNode.children[this.index].getComponent(cc.Label).string = o)
                    : (((t = cc.instantiate(this.courseLab)).getComponent(cc.Label).string = o),
                      (t.parent = this.courseLabNode)),
                (this.course = this.courseLabNode.children[this.index]),
                (this.course.scale = 1),
                (this.progress.progress = this._inviteData.inviteNum / this._Invite.id);
        }),
        (g.prototype.setReward = function (t, e) {
            for (var o = 0; o < t.length; o++) {
                var n,
                    i = p.default.inst.PrizeConf.getPrize(t[o].id),
                    r = {};
                switch (i.type) {
                    case h.Prop.equip:
                        var a = p.default.inst.equipConf.getEquipVo(t[o].appoint);
                        r.equip = {id: t[o].appoint, quality: i.quality, level: 1, status: 0, equipType: a.type};
                        break;
                    case h.Prop.drawing:
                        r.draw = {id: t[o].appoint, quantity: t[o].count};
                        break;
                    case h.Prop.randomEquip:
                    case h.Prop.randomGreenEquip:
                    case h.Prop.randomBlueEquip:
                    case h.Prop.randomPurpleEquip:
                    case h.Prop.randomRedeEquip:
                        (r.num = t[o].count), (r.EquipType = 0);
                        break;
                    default:
                        r.num = t[o].count;
                }
                null == e.children[o]
                    ? ((n = cc.instantiate(this.Block)).getComponent(f.default).setData(r, i.type, !1, 2),
                      (n.parent = e))
                    : ((e.children[o].active = !0), e.children[o].getComponent(f.default).setData(r, i.type, !1, 2)),
                    (e.children[o].y = -3);
            }
            if (t.length < e.childrenCount)
                for (o = e.childrenCount - 1; o != t.length - 1; o--) e.children[o].active = !1;
        }),
        (g.prototype.inviteFriend = function () {
            this.isInvite ? (console.log("弹出邀请"), s.app.platform.share({})) : this.getReward();
        }),
        (g.prototype.reduce = function (t, e) {
            cc.tween(t)
                .to(0.1, {scale: 1.05})
                .to(0.1, {scale: 0})
                .call(function () {
                    e && e();
                })
                .start();
        }),
        (g.prototype.itemReduce = function (t) {
            this.reduce(this.node),
                this.reduce(this.rewardInviteItemBg),
                this.reduce(this.describe),
                this.reduce(this.course, t);
        }),
        (g.prototype.getReward = function () {
            var t;
            null === (t = s.app.track) || void 0 === t || t.trackEvent(d.TrackType.Suc_Get_Invite),
                console.log("领取"),
                c.InviteController.inst.getReward(this._Invite.id),
                (this._inviteData.drawGetId[this._Invite.id] = {id: this._Invite.id, isGet: !0}),
                c.InviteController.inst.setStorageData(this._inviteData),
                s.app.event.emit(l.EventType.Battle_Invite_Reward_Change),
                this.itemReduce(this._fun);
        }),
        r([e(cc.Node)], g.prototype, "descrilab", void 0),
        r([e(cc.Node)], g.prototype, "describeLabNode", void 0),
        r([e(cc.Prefab)], g.prototype, "Block", void 0),
        r([e(cc.Node)], g.prototype, "reward", void 0),
        r([e(cc.Node)], g.prototype, "btnInvite", void 0),
        r([e(cc.ProgressBar)], g.prototype, "progress", void 0),
        r([e(cc.Node)], g.prototype, "courseLab", void 0),
        r([e(cc.Node)], g.prototype, "courseLabNode", void 0),
        r([e(cc.Sprite)], g.prototype, "getIcon", void 0),
        r([e(cc.Node)], g.prototype, "alreadyGet", void 0),
        r([e(cc.Node)], g.prototype, "reward_hd", void 0),
        r([e([cc.SpriteFrame])], g.prototype, "getIcoms", void 0),
        r([e([cc.SpriteFrame])], g.prototype, "btnBg", void 0),
        r([t], g));
function g() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.descrilab = null),
        (t.describeLabNode = null),
        (t.Block = null),
        (t.reward = null),
        (t.btnInvite = null),
        (t.progress = null),
        (t.courseLab = null),
        (t.courseLabNode = null),
        (t.getIcon = null),
        (t.alreadyGet = null),
        (t.reward_hd = null),
        (t.getIcoms = []),
        (t.btnBg = []),
        (t._Invite = null),
        (t._inviteData = null),
        (t._reward = []),
        (t._isInit = !1),
        (t._fun = null),
        (t.isInvite = !1),
        (t.index = 0),
        (t.rewardInviteItemBg = null),
        (t.describe = null),
        (t.course = null),
        t
    );
}
o.default = t;
