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
    a =
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
var s,
    l = t("App"),
    c = t("EventTypes"),
    u = t("ShareData"),
    p = t("NetHelper"),
    e = t("ApiBase"),
    h = t("BigGridAd"),
    d = t("CoupleGridAd"),
    f = t("InterstitialAd"),
    y = t("OneGridAd"),
    g = t("WxRewardVideoAd"),
    m = t("WxShare"),
    i =
        ((s = e.default),
        i(_, s),
        (_.prototype.login = function () {
            var e = this,
                t = Object.create({});
            (t.success = function (t) {
                return r(e, void 0, void 0, function () {
                    return a(this, function () {
                        return (
                            (this.code = t.code),
                            l.app.event.emit(c.EventType.Get_Login_Code, {
                                userCode: t.code,
                                pattern: "xyx",
                                openid: ""
                            }),
                            [2]
                        );
                    });
                });
            }),
                wx.login(t),
                this.setKeepScreenOn(!0);
        }),
        (_.prototype.getSetting = function () {
            return r(this, void 0, void 0, function () {
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, l.app.http.send(p.default.login, {code: this.code})];
                        case 1:
                            return t.sent(), [4, l.app.http.send(p.default.config)];
                        case 2:
                            return t.sent(), [4, l.app.http.send(p.default.getData)];
                        case 3:
                            return t.sent(), u.default.inst.getInviterInfo(), this.uploadDau(), [2];
                    }
                });
            });
        }),
        (_.prototype.uploadDau = function () {
            var t = this.getSystemInfoSync(),
                e = this.getLaunchOptionsSync(),
                o = e.query,
                t = {
                    share_id: 1036 == e.scene ? e.referrerInfo.appId : "",
                    inviter_id: "",
                    sdk_version: "1.0.0",
                    network_type: t.wifiSignal ? "wifi" : "cell",
                    system: t.system,
                    client: t.model,
                    user_tag: 1,
                    query: o,
                    wx_version: t.version
                };
            l.app.http.send(p.default.dau, t, "POST", this.log_url);
        }),
        (_.prototype.onShow = function () {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.onShow &&
                (wx.onShow(function (t) {
                    l.app.sound.resumeMusic(),
                        console.log("wx onShow ____", t),
                        l.app.event.emit(c.EventType.User_Share),
                        l.app.event.emit(c.EventType.On_Show);
                }),
                wx.onHide(function () {
                    console.log("wx onHide ___"), l.app.event.emit(c.EventType.On_Hide), l.app.sound.stopMusic();
                }),
                wx.showShareMenu && wx.showShareMenu({withShareTicket: !0}));
        }),
        (_.prototype.getLaunchOptionsSync = function () {
            if (cc.sys.platform == cc.sys.WECHAT_GAME && wx.getLaunchOptionsSync) return wx.getLaunchOptionsSync();
        }),
        (_.prototype.getSystemInfoSync = function () {
            if (cc.sys.platform == cc.sys.WECHAT_GAME && wx.getSystemInfoSync) return wx.getSystemInfoSync();
        }),
        (_.prototype.showLoading = function (t) {
            var e,
                o,
                n = this;
            void 0 === t && (t = {}),
                cc.sys.platform == cc.sys.WECHAT_GAME &&
                    wx.showLoading &&
                    !this._isLoading &&
                    ((this._isLoading = !0),
                    (e = t.title),
                    (o = void 0 === (o = t.delay) ? 0 : o),
                    (t = t.mask),
                    wx.showLoading({title: void 0 === e ? "加载中" : e, mask: void 0 !== t && t}),
                    0 < o &&
                        setTimeout(function () {
                            n.hideLoading();
                        }, o));
        }),
        (_.prototype.hideLoading = function () {
            cc.sys.platform == cc.sys.WECHAT_GAME && wx.hideLoading && ((this._isLoading = !1), wx.hideLoading());
        }),
        (_.prototype.checkUpdate = function () {
            var e = wx.getUpdateManager();
            e.onUpdateReady(function () {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    showCancel: !1,
                    success: function (t) {
                        t.confirm && e.applyUpdate();
                    }
                });
            }),
                e.onUpdateFailed(function () {
                    console.log("版本更新检测失败");
                }),
                e.onCheckForUpdate(function (t) {
                    console.log("版本更新检测:", t.hasUpdate);
                });
        }),
        (_.prototype.initOneGridAd = function (t) {
            this._oneGridAd || (this._oneGridAd = new y.default(t));
        }),
        (_.prototype.initCoupleGridAd = function (t) {
            this._coupleGridAd || (this._coupleGridAd = new d.default(t));
        }),
        (_.prototype.initBigGridAd = function (t) {
            this._bigGridAd || (this._bigGridAd = new h.default(t));
        }),
        (_.prototype.showOneGridAd = function () {
            this._oneGridAd && this._oneGridAd.show();
        }),
        (_.prototype.hideOneGridAd = function () {
            this._oneGridAd && this._oneGridAd.hide();
        }),
        (_.prototype.showCoupleGridAd = function () {
            this._coupleGridAd && this._coupleGridAd.show();
        }),
        (_.prototype.hideCoupleGridAd = function () {
            this._coupleGridAd && this._coupleGridAd.hide();
        }),
        (_.prototype.showBigGridAd = function () {
            this._bigGridAd && this._bigGridAd.show();
        }),
        (_.prototype.hideBigGridAd = function () {
            this._bigGridAd && this._bigGridAd.hide();
        }),
        (_.prototype.initBanerAd = function () {
            this._bannerAd;
        }),
        (_.prototype.showBanner = function (t) {
            this._bannerAd && this._bannerAd.show(t);
        }),
        (_.prototype.hideBanner = function () {
            this._bannerAd && this._bannerAd.hide();
        }),
        (_.prototype.destroyBanner = function () {
            this._bannerAd && this._bannerAd.destroy();
        }),
        (_.prototype.initInterstitialAd = function (t) {
            this.interstitialAd = new f.default(t);
        }),
        (_.prototype.showInterstitialAd = function () {
            return this.interstitialAd ? this.interstitialAd.show() : Promise.resolve(!1);
        }),
        (_.prototype.createVideoAd = function (t) {
            this._videoAd = new g.default(t);
        }),
        (_.prototype.showVideoAd = function (t, e, o) {
            cc.sys.platform == cc.sys.WECHAT_GAME
                ? this._videoAd.showVideoAd({success: t, fail: e, error: o})
                : t && t();
        }),
        (_.prototype.showClubButton = function (t) {
            var e, o, n;
            cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.createGameClubButton &&
                (this.clubButton ||
                    ((n = t.getBoundingBoxToWorld()),
                    (o = t.convertToWorldSpaceAR(cc.v2())),
                    (e = cc.view.getFrameSize()),
                    (t = cc.winSize),
                    console.log("showClubButton", n, o, e, t),
                    (n = t.width / e.width),
                    (e = o.x / n - 20),
                    (o = (t.height - o.y) / n - 20),
                    ((n = Object.create({})).icon = "light"),
                    (n.style = {left: e, top: o, width: 40, height: 40, backgroundColor: "#FFFFFF", borderRadius: 20}),
                    (this.clubButton = wx.createGameClubButton(n))),
                this.clubButton.show());
        }),
        (_.prototype.hideClubButton = function () {
            cc.sys.platform == cc.sys.WECHAT_GAME && this.clubButton && this.clubButton.hide();
        }),
        (_.prototype.onShareMessageToFriend = function (t) {
            cc.sys.platform == cc.sys.WECHAT_GAME && wx.onShareMessageToFriend && wx.onShareMessageToFriend(t);
        }),
        (_.prototype.navigateToMiniProgram = function (e, n) {
            return r(this, void 0, void 0, function () {
                var o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (o = !0),
                                2 != e.navigate_type ? [3, 1] : (this.previewImage(e.poster), (o = !1), [3, 4])
                            );
                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, this._navigateToMiniProgram(e, n)];
                        case 2:
                            return t.sent(), (o = !1), console.log("跳转"), [3, 4];
                        case 3:
                            return t.sent(), (o = !0), console.log("取消跳转"), [3, 4];
                        case 4:
                            return [
                                2,
                                new Promise(function (t, e) {
                                    (o ? e : t)();
                                })
                            ];
                    }
                });
            });
        }),
        (_.prototype.previewImage = function (t) {
            var e;
            cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.previewImage &&
                ((e = {urls: [t], current: t}), console.log("previewImage", t), wx.previewImage(e));
        }),
        (_.prototype._navigateToMiniProgram = function () {
            return new Promise(function (t) {
                t();
            });
        }),
        (_.prototype.triggerGC = function () {
            cc.sys.platform == cc.sys.WECHAT_GAME && wx.triggerGC && wx.triggerGC();
        }),
        (_.prototype.createAuthorizeBtn = function (t, e, o) {
            var n, i, r;
            void 0 === e && (e = 0),
                cc.sys.platform == cc.sys.WECHAT_GAME &&
                    wx.createUserInfoButton &&
                    t &&
                    (this.btnAuthorize
                        ? this.isShow || ((this.isShow = !0), this.btnAuthorize.show())
                        : ((this._failFunc = o),
                          (n = t.getBoundingBoxToWorld()),
                          (i = cc.view.getFrameSize()),
                          (r = cc.winSize),
                          console.log(n, i, r),
                          (o = r.width / i.width),
                          (t = n.x / o),
                          (i = (r.height - n.y - n.height) / o),
                          (r = n.width / o),
                          (o = n.height / o),
                          console.log(t, i, r, o, n),
                          Object.create({}),
                          (this.btnAuthorize = wx.createUserInfoButton({
                              type: "text",
                              text: "",
                              style: {
                                  left: t - e / 2,
                                  top: i - e / 2,
                                  width: r + e,
                                  height: o + e,
                                  lineHeight: 0,
                                  backgroundColor: "",
                                  textAlign: "center",
                                  fontSize: 16,
                                  borderRadius: 4
                              }
                          })),
                          this.btnAuthorize.show(),
                          this.btnAuthorize.onTap(this.onTap.bind(this)),
                          (this.isShow = !0)));
        }),
        (_.prototype.removeAuthBtn = function () {
            this.btnAuthorize &&
                ((this.isShow = !1), this.btnAuthorize.hide(), this.btnAuthorize.destroy(), (this.btnAuthorize = null));
        }),
        (_.prototype.hideAuthBtn = function () {
            this.btnAuthorize && ((this.isShow = !1), this.btnAuthorize.hide());
        }),
        (_.prototype.onTap = function (t) {
            console.log("onTap res: ", t),
                t.userInfo
                    ? (this.removeAuthBtn(), l.app.event.emit(c.EventType.User_Auth, t.userInfo))
                    : this._failFunc && this._failFunc(),
                (this._failFunc = null);
        }),
        (_.prototype.setKeepScreenOn = function (t) {
            void 0 === t && (t = !0),
                cc.sys.platform == cc.sys.WECHAT_GAME && wx.setKeepScreenOn && wx.setKeepScreenOn({keepScreenOn: t});
        }),
        (_.prototype.requestSubscribeMessage = function (t) {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.requestSubscribeMessage &&
                0 != t.tmplIds.length &&
                wx.requestSubscribeMessage(t);
        }),
        (_.prototype.vibrateShort = function () {
            this.isVibrate &&
                cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.vibrateShort &&
                wx.vibrateShort({success: function () {}, fail: function () {}, complete: function () {}});
        }),
        (_.prototype.vibrateLong = function () {
            this.isVibrate &&
                cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.vibrateLong &&
                wx.vibrateLong({success: function () {}, fail: function () {}, complete: function () {}});
        }),
        (_.prototype.showToast = function (t) {
            console.log("提示：", t.title), cc.sys.platform == cc.sys.WECHAT_GAME && wx.showToast && wx.showToast(t);
        }),
        (_.prototype.hideToast = function (t) {
            cc.sys.platform == cc.sys.WECHAT_GAME && wx.hideToast && wx.hideToast(t);
        }),
        (_.prototype.showModal = function (t) {
            console.log("提示：", t.title), cc.sys.platform == cc.sys.WECHAT_GAME && wx.showModal && wx.showModal(t);
        }),
        (_.prototype.getMenuButtonBoundingClientRect = function () {
            if (cc.sys.platform != cc.sys.WECHAT_GAME || !wx.getMenuButtonBoundingClientRect)
                return {center: 26, ratio: 2, width: 88, height: 32, left: 277, top: 10, right: 365, bottom: 42};
            var t = wx.getMenuButtonBoundingClientRect();
            if (!t.top)
                return {center: 26, ratio: 2, width: 88, height: 32, left: 277, top: 10, right: 365, bottom: 42};
            var e = cc.view.getFrameSize(),
                o = cc.winSize.width / e.width,
                e = Object.create({});
            return (
                (e.center = t.top + 0.5 * t.height),
                (e.ratio = o),
                (e = Object.assign(e, t)),
                console.log(
                    "胶囊位置：",
                    JSON.stringify(e),
                    cc.winSize,
                    cc.view.getFrameSize(),
                    wx.getSystemInfoSync()
                ),
                e
            );
        }),
        (_.prototype.exitMiniProgram = function () {
            return !(cc.sys.platform !== cc.sys.WECHAT_GAME || !wx.exitMiniProgram || (wx.exitMiniProgram(), 0));
        }),
        (_.prototype.canShare = function () {
            return !0;
        }),
        (_.prototype.setUid = function (t) {
            this.wxShare.setUid(t);
        }),
        (_.prototype.initShare = function (t, e) {
            this.wxShare.initShare(t, (e = void 0 === e ? 3 : e));
        }),
        (_.prototype.share = function (t) {
            this.canShare() && this.wxShare.share(t);
        }),
        (_.prototype.shareForReward = function (t) {
            return this.canShare() ? this.wxShare.shareForReward(t) : Promise.resolve(!1);
        }),
        (_.prototype.setUserCloudStorage = function (t) {
            cc.sys.platform === cc.sys.WECHAT_GAME && wx.setUserCloudStorage && wx.setUserCloudStorage({KVDataList: t});
        }),
        (_.prototype.postMessage = function (t) {
            cc.sys.platform != cc.sys.WECHAT_GAME ||
                this._openDataContext ||
                (this._openDataContext = wx.getOpenDataContext()),
                this._openDataContext && this._openDataContext.postMessage(JSON.stringify(t));
        }),
        _);
function _() {
    var t = s.call(this) || this;
    return (
        (t.remote_url = "https://cdn-wxgame.328vip.com/"),
        (t.host_url = "https://api.328vip.com/"),
        (t.log_url = "https://log.328vip.com/"),
        (t.code = ""),
        (t._isLoading = !1),
        (t._failFunc = null),
        (t._oneGridAd = null),
        (t._bigGridAd = null),
        (t._coupleGridAd = null),
        (t._bannerAd = null),
        (t.interstitialAd = null),
        (t._videoAd = null),
        (t.clubButton = null),
        (t.openCustomerService = function (t) {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.openCustomerServiceConversation &&
                wx.openCustomerServiceConversation(t || {});
        }),
        (t.btnAuthorize = null),
        (t.isShow = !1),
        (t.wxShare = new m.default()),
        t.onShow(),
        console.log("WxAPI api"),
        t
    );
}
o.default = i;
