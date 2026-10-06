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
        },
    a =
        (this && this.__awaiter) ||
        function (t, a, s, l) {
            return new (s = s || Promise)(function (o, e) {
                function n(t) {
                    try {
                        r(l.next(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function i(t) {
                    try {
                        r(l.throw(t));
                    } catch (t) {
                        e(t);
                    }
                }
                function r(t) {
                    var e;
                    t.done
                        ? o(t.value)
                        : ((e = t.value) instanceof s
                              ? e
                              : new s(function (t) {
                                    t(e);
                                })
                          ).then(n, i);
                }
                r((l = l.apply(t, a || [])).next());
            });
        },
    s =
        (this && this.__generator) ||
        function (o, n) {
            var i,
                r,
                a,
                s = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                },
                t = {next: e(0), throw: e(1), return: e(2)};
            return (
                "function" == typeof Symbol &&
                    (t[Symbol.iterator] = function () {
                        return this;
                    }),
                t
            );
            function e(e) {
                return function (t) {
                    return (function (e) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (
                                    ((i = 1),
                                    r &&
                                        (a =
                                            2 & e[0]
                                                ? r.return
                                                : e[0]
                                                ? r.throw || ((a = r.return) && a.call(r), 0)
                                                : r.next) &&
                                        !(a = a.call(r, e[1])).done)
                                )
                                    return a;
                                switch (((r = 0), (e = a ? [2 & e[0], a.value] : e)[0])) {
                                    case 0:
                                    case 1:
                                        a = e;
                                        break;
                                    case 4:
                                        return s.label++, {value: e[1], done: !1};
                                    case 5:
                                        s.label++, (r = e[1]), (e = [0]);
                                        continue;
                                    case 7:
                                        (e = s.ops.pop()), s.trys.pop();
                                        continue;
                                    default:
                                        if (
                                            !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                                            (6 === e[0] || 2 === e[0])
                                        ) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                                            s.label = e[1];
                                            break;
                                        }
                                        if (6 === e[0] && s.label < a[1]) {
                                            (s.label = a[1]), (a = e);
                                            break;
                                        }
                                        if (a && s.label < a[2]) {
                                            (s.label = a[2]), s.ops.push(e);
                                            break;
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                e = n.call(o, s);
                            } catch (t) {
                                (e = [6, t]), (r = 0);
                            } finally {
                                i = a = 0;
                            }
                        if (5 & e[0]) throw e[1];
                        return {value: e[0] ? e[1] : void 0, done: !0};
                    })([e, t]);
                };
            }
        };
Object.defineProperty(o, "__esModule", {value: !0});
var l,
    c = t("BasePanel"),
    u = t("UIEnum"),
    p = t("decorator"),
    h = t("App"),
    d = t("MultipleController"),
    f = t("ConfData"),
    y = t("rewardItem"),
    g = t("CloseUI"),
    m = t("EverydayRewardController"),
    _ = t("EventTypes"),
    v = t("EffectMgr"),
    b = t("TrackType"),
    w = t("GameMgr"),
    C = t("NoticeController"),
    k = t("LayerMgr"),
    E = t("GameSetting"),
    e = cc._decorator,
    t = e.ccclass,
    t =
        (e.property,
        e.inspector,
        (l = c.default),
        i(S, l),
        (S.prototype.initView = function () {
            (m.EverydayRewardController.inst.isEject = !0),
                (this.addDayBtn.active = cc.sys.isBrowser),
                (this._rewardDatas = f.default.inst.everydayRewardConf.getAllReward()),
                this.init();
        }),
        (S.prototype.updateView = function () {
            var t,
                e = this;
            null === (t = h.app.track) || void 0 === t || t.trackEvent(b.TrackType.Open_SignIn),
                d.default.inst.eject(this.panel, this.bg, function () {
                    e.onEvent();
                }),
                d.default.inst.Breathing(this.btnGetReward, 0.85, 0.8, 0.8),
                this.change();
        }),
        (S.prototype.init = function () {
            this._everydayRewardData = m.EverydayRewardController.inst.getStorageData();
            for (var t, e = 0; e < this._rewardDatas.length; e++)
                null == this.RewardNode.children[e]
                    ? ((t = cc.instantiate(this.rewardItem))
                          .getComponent(y.default)
                          .setData(this._rewardDatas[e], this._everydayRewardData),
                      (t.parent = this.RewardNode))
                    : this.RewardNode.children[e]
                          .getComponent(y.default)
                          .setData(this._rewardDatas[e], this._everydayRewardData);
        }),
        (S.prototype.getReward = function () {
            console.log(this._everydayRewardData), m.EverydayRewardController.inst.getReward(), this.change();
        }),
        (S.prototype.change = function () {
            var t;
            (this.regularLab.active = !1),
                (this.isGetReward = m.EverydayRewardController.inst.isGetReward),
                (this.isGetAbundant = m.EverydayRewardController.inst.isGetAbundant),
                (this.getRewardIcom.active = this.isGetReward),
                this.getRewardIcom.active
                    ? (this.getabundantRewardIcom.active = !1)
                    : (this.getabundantRewardIcom.active = this.isGetAbundant),
                this.isGetReward || this.isGetAbundant
                    ? (this.btnGetReward.active = !0)
                    : ((this.btnGetReward.active = !1), (this.regularLab.active = !0)),
                console.log(this._everydayRewardData),
                this._everydayRewardData.abundantDay <= this._everydayRewardData.rewardDay &&
                1 != this._everydayRewardData.abundantReward &&
                this.isClickGet
                    ? ((t = {
                          date: this._everydayRewardData.date,
                          rewardDay: this._everydayRewardData.rewardDay,
                          abundantDay: this._everydayRewardData.abundantDay - 1,
                          reward: 1,
                          abundantReward: 1
                      }),
                      this.RewardNode.children[t.abundantDay - 1]
                          .getComponent(y.default)
                          .setData(this._rewardDatas[t.abundantDay - 1], t))
                    : this.RewardNode.children[this._everydayRewardData.abundantDay - 1]
                          .getComponent(y.default)
                          .setData(
                              this._rewardDatas[this._everydayRewardData.abundantDay - 1],
                              this._everydayRewardData
                          ),
                (this.isClickGet = !1),
                this.RewardNode.children[this._everydayRewardData.rewardDay - 1]
                    .getComponent(y.default)
                    .setData(this._rewardDatas[this._everydayRewardData.rewardDay - 1], this._everydayRewardData);
        }),
        (S.prototype.onEvent = function () {
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
                        g.default.inst.closeNode();
                    },
                    this
                );
        }),
        (S.prototype.onDisable = function () {
            l.prototype.onDisable.call(this),
                this.bg.off(cc.Node.EventType.TOUCH_START),
                this.panel.off(cc.Node.EventType.TOUCH_START);
        }),
        (S.prototype.closeView = function () {
            return a(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return -1 == E.GameSetting.inst.Notice_everyday_show ||
                                !C.default.inst.showNoticeBtn ||
                                C.default.inst.isEject ||
                                0 != C.default.inst.NoticeData.reward ||
                                (1 != E.GameSetting.inst.Notice_everyday_show &&
                                    (0 != E.GameSetting.inst.Notice_everyday_show ||
                                        0 != C.default.inst.NoticeData.prompt))
                                ? [3, 3]
                                : [4, h.app.gui.closeUI(u.UIEnum.WaitingView)];
                        case 1:
                            return t.sent(), [4, h.app.gui.openUI(u.UIEnum.NoticeView, k.LayerEnum.VIEW_LAYER)];
                        case 2:
                            t.sent(), h.app.gui.closeUI(u.UIEnum.WaitingView), (t.label = 3);
                        case 3:
                            return g.default.inst.closeNode(), h.app.gui.closeUI(u.UIEnum.EverydayRewardView), [2];
                    }
                });
            });
        }),
        (S.prototype.onBtnCloseClick = function () {
            this.closeView();
        }),
        (S.prototype.onBtnGetRewardClick = function () {
            var t,
                e = this;
            this.isGetReward
                ? (this.getReward(),
                  console.log("领取普通奖励"),
                  h.app.event.emit(_.EventType.Battle_Everyday_Reward_Change))
                : this.isGetAbundant &&
                  ((this.isClickGet = !0),
                  null === (t = h.app.track) || void 0 === t || t.trackEvent("new_haohua_qiandao"),
                  w.default.inst.getVideoShareReward(
                      function () {
                          var t;
                          null === (t = h.app.track) || void 0 === t || t.trackEvent("new_suc_haohua_qiandao"),
                              e.getReward(),
                              h.app.event.emit(_.EventType.Battle_Everyday_Reward_Change),
                              console.log("领取豪华奖励");
                      },
                      null,
                      function () {
                          v.default.inst.showTips("获取视频失败，请稍候再试！");
                      }
                  ));
        }),
        (S.prototype.onAddDayBtnClick = function () {
            (this._everydayRewardData.date = (parseInt(this._everydayRewardData.date) - 1).toString()),
                console.log(this._everydayRewardData.date),
                console.log(this._everydayRewardData),
                m.EverydayRewardController.inst.setStorageData(this._everydayRewardData),
                this.init(),
                this.change(),
                h.app.event.emit(_.EventType.Battle_Everyday_Reward_Change);
        }),
        r([p.autoBind("cc.Node", "panel/tips/regularLab")], S.prototype, "regularLab", void 0),
        r([p.autoBind("cc.Node", "panel/btn/addDayBtn")], S.prototype, "addDayBtn", void 0),
        r([p.autoBind("cc.Node", "panel/btn/btnGetReward/getRewardIcom")], S.prototype, "getRewardIcom", void 0),
        r(
            [p.autoBind("cc.Node", "panel/btn/btnGetReward/getabundantRewardIcom")],
            S.prototype,
            "getabundantRewardIcom",
            void 0
        ),
        r([p.autoBind("cc.Node", "panel/btn/btnGetReward")], S.prototype, "btnGetReward", void 0),
        r([p.autoBind("cc.Node", "panel/ScrollView/view/RewardNode")], S.prototype, "RewardNode", void 0),
        r([p.autoBind("cc.Node", "panel/ScrollView/view/RewardNode/rewardItem")], S.prototype, "rewardItem", void 0),
        r([p.autoBind("cc.Node", "bg")], S.prototype, "bg", void 0),
        r([p.autoBind("cc.Node", "panel")], S.prototype, "panel", void 0),
        r([p.autoBind("cc.Node", "panel/btnClose")], S.prototype, "btnClose", void 0),
        r([t], S));
function S() {
    var t = (null !== l && l.apply(this, arguments)) || this;
    return (
        (t.regularLab = null),
        (t.addDayBtn = null),
        (t.getRewardIcom = null),
        (t.getabundantRewardIcom = null),
        (t.btnGetReward = null),
        (t.RewardNode = null),
        (t.rewardItem = null),
        (t.bg = null),
        (t.panel = null),
        (t.btnClose = null),
        (t._rewardDatas = []),
        (t._everydayRewardData = null),
        (t.isGetReward = !1),
        (t.isGetAbundant = !1),
        (t.isClickGet = !1),
        t
    );
}
o.default = t;
