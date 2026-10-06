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
    s = t("BasePanel"),
    l = t("UIEnum"),
    c = t("decorator"),
    u = t("ConfData"),
    p = t("MultipleController"),
    h = t("App"),
    d = t("CloseUI"),
    f = t("rewardInviteItem"),
    y = t("InviteController"),
    g = t("EventTypes"),
    m = t("ShareData"),
    _ = t("ArrayUtil"),
    v = t("TrackType"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (a = s.default),
        i(b, a),
        (b.prototype.initView = function () {
            var t = this;
            (this.btn.active = cc.sys.isBrowser),
                (this._Invite = u.default.inst.InviteConf.getAllInvite()),
                this.init(),
                this.scheduleOnce(function () {
                    t.content.height = t.RewardNode.height;
                });
        }),
        (b.prototype.updateView = function () {
            var t,
                e = this;
            null === (t = h.app.track) || void 0 === t || t.trackEvent(v.TrackType.Open_Invite),
                p.default.inst.eject(this.panel, this.bg, function () {
                    e.onEvent();
                }),
                this.inviteSuccess(0);
        }),
        (b.prototype.init = function () {
            (this._inviteData = y.InviteController.inst.getStorageData()), console.log(this._inviteData);
            for (
                var t, e = _.default.deepClone(this._Invite), o = [], n = this._inviteData.drawGetId.length - 1;
                0 != n;
                n--
            )
                1 == this._inviteData.drawGetId[n].isGet &&
                    (o.unshift(e[this._inviteData.drawGetId[n].id]), e.splice(this._inviteData.drawGetId[n].id, 1));
            for (
                o.forEach(function (t) {
                    e.push(t);
                }),
                    n = 0;
                n < e.length - 1;
                n++
            )
                null == this.RewardNode.children[n]
                    ? ((t = cc.instantiate(this.rewardInviteItem)),
                      (cc.instantiate(this.rewardInviteItemBg).parent = this.RewardNodeBg),
                      t
                          .getComponent(f.default)
                          .setData(e[n + 1], this._inviteData, this.init.bind(this), n, this.rewardInviteItemBg),
                      (t.parent = this.RewardNode))
                    : this.RewardNode.children[n]
                          .getComponent(f.default)
                          .setData(e[n + 1], this._inviteData, this.init.bind(this), n, this.RewardNodeBg.children[n]);
        }),
        (b.prototype.onEvent = function () {
            var t = this;
            this.bg.on(
                cc.Node.EventType.TOUCH_START,
                function () {
                    t.closeView();
                },
                this
            ),
                this.panel.on(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        d.default.inst.closeNode();
                    },
                    this
                );
        }),
        (b.prototype.inviteSuccess = function (t) {
            function e() {
                o._Invite[o._inviteData.id] &&
                    o._inviteData.inviteNum >= o._Invite[o._inviteData.id].people &&
                    o._Invite[o._inviteData.id] &&
                    (null == o._inviteData.drawGetId[o._inviteData.id] &&
                        (o._inviteData.drawGetId.push({id: o._inviteData.id, isGet: !1}), o._inviteData.id++),
                    o._Invite[o._inviteData.id] && e());
            }
            var o = this,
                n = this._inviteData.inviteNum;
            cc.sys.isBrowser
                ? (this._inviteData.inviteNum += t)
                : (this._inviteData.inviteNum = m.default.inst.inviter_num),
                e(),
                console.log(
                    "本次邀请人数" + (this._inviteData.inviteNum - n) + "总共邀请人数" + this._inviteData.inviteNum
                ),
                y.InviteController.inst.setStorageData(this._inviteData),
                h.app.event.emit(g.EventType.Battle_Invite_Reward_Change),
                this.init();
        }),
        (b.prototype.closeView = function () {
            this.closeNode(), h.app.gui.closeUI(l.UIEnum.InviteView);
        }),
        (b.prototype.closeNode = function () {
            d.default.inst.closeNode();
        }),
        (b.prototype.onBtnCloseClick = function () {
            this.closeView();
        }),
        (b.prototype.onAddBtnClick = function () {
            var t = this.EditBox.getComponent(cc.EditBox).string;
            isNaN(parseInt(t)) || this.inviteSuccess(parseInt(t));
        }),
        r([c.autoBind("cc.Node", "panel/ScrollView/view/content")], b.prototype, "content", void 0),
        r([c.autoBind("cc.Node", "panel/ScrollView/view/content/RewardNodeBg")], b.prototype, "RewardNodeBg", void 0),
        r([c.autoBind("cc.Node", "panel/ScrollView/view/content/RewardNode")], b.prototype, "RewardNode", void 0),
        r(
            [c.autoBind("cc.Node", "panel/ScrollView/view/content/RewardNodeBg/rewardInviteItemBg")],
            b.prototype,
            "rewardInviteItemBg",
            void 0
        ),
        r(
            [c.autoBind("cc.Node", "panel/ScrollView/view/content/RewardNode/rewardInviteItem")],
            b.prototype,
            "rewardInviteItem",
            void 0
        ),
        r([c.autoBind("cc.Node", "panel/btn")], b.prototype, "btn", void 0),
        r([c.autoBind("cc.Node", "panel/btn/EditBox")], b.prototype, "EditBox", void 0),
        r([c.autoBind("cc.Node", "panel/btnClose")], b.prototype, "btnClose", void 0),
        r([c.autoBind("cc.Node", "panel/btn/addBtn")], b.prototype, "addBtn", void 0),
        r([c.autoBind("cc.Node", "bg")], b.prototype, "bg", void 0),
        r([c.autoBind("cc.Node", "panel")], b.prototype, "panel", void 0),
        r([t], b));
function b() {
    var t = (null !== a && a.apply(this, arguments)) || this;
    return (
        (t.content = null),
        (t.RewardNodeBg = null),
        (t.RewardNode = null),
        (t.rewardInviteItemBg = null),
        (t.rewardInviteItem = null),
        (t.btn = null),
        (t.EditBox = null),
        (t.btnClose = null),
        (t.addBtn = null),
        (t.bg = null),
        (t.panel = null),
        (t._Invite = []),
        (t._inviteData = null),
        t
    );
}
o.default = t;
