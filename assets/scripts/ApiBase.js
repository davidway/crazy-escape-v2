var t = require;
var e = module;
var o = exports;
var n =
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
    i =
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
var r = t("App"),
    a = t("MathUtil"),
    s = t("EventTypes"),
    l = t("TaskController"),
    t =
        ((c.prototype.needLoginView = function () {
            return !1;
        }),
        (c.prototype.login = function () {
            var t = null === (e = r.app.storage) || void 0 === e ? void 0 : e.read("loginCode"),
                e = t;
            t ||
                ((e = a.default.randomString(24)),
                null === (t = r.app.storage) || void 0 === t || t.save("loginCode", e)),
                r.app.event.emit(s.EventType.Get_Login_Code, {userCode: e, pattern: "default", openid: ""});
        }),
        (c.prototype.getSetting = function () {
            return n(this, void 0, void 0, function () {
                return i(this, function () {
                    return [2, Promise.resolve()];
                });
            });
        }),
        (c.prototype.onShow = function () {}),
        (c.prototype.onHide = function () {}),
        (c.prototype.getLaunchOptionsSync = function () {
            return null;
        }),
        (c.prototype.getSystemInfoSync = function () {
            return null;
        }),
        (c.prototype.showLoading = function (t) {}),
        (c.prototype.hideLoading = function () {}),
        (c.prototype.showToast = function (t) {
            console.log(t.title);
        }),
        (c.prototype.hideToast = function () {}),
        (c.prototype.showModal = function () {}),
        (c.prototype.showClubButton = function () {}),
        (c.prototype.hideClubButton = function () {}),
        (c.prototype.onShareMessageToFriend = function () {}),
        (c.prototype.navigateToMiniProgram = function () {
            return n(this, void 0, Promise, function () {
                return i(this, function () {
                    return [2];
                });
            });
        }),
        (c.prototype.triggerGC = function () {}),
        (c.prototype.setEnableDebug = function () {}),
        (c.prototype.createAuthorizeBtn = function () {}),
        (c.prototype.removeAuthBtn = function () {}),
        (c.prototype.hideAuthBtn = function () {}),
        (c.prototype.setKeepScreenOn = function (t) {}),
        (c.prototype.requestSubscribeMessage = function () {}),
        (c.prototype.vibrateShort = function () {}),
        (c.prototype.vibrateLong = function () {}),
        (c.prototype.getMenuButtonBoundingClientRect = function () {
            return {center: 26, ratio: 2, width: 88, height: 32, left: 277, top: 10, right: 365, bottom: 42};
        }),
        (c.prototype.checkUpdate = function () {}),
        (c.prototype.postMessage = function () {}),
        (c.prototype.initOneGridAd = function () {}),
        (c.prototype.initCoupleGridAd = function () {}),
        (c.prototype.initBigGridAd = function () {}),
        (c.prototype.showOneGridAd = function () {}),
        (c.prototype.hideOneGridAd = function () {}),
        (c.prototype.showCoupleGridAd = function () {}),
        (c.prototype.hideCoupleGridAd = function () {}),
        (c.prototype.showBigGridAd = function () {}),
        (c.prototype.hideBigGridAd = function () {}),
        (c.prototype.initBanerAd = function () {}),
        (c.prototype.showBanner = function () {}),
        (c.prototype.hideBanner = function () {}),
        (c.prototype.destroyBanner = function () {}),
        (c.prototype.createNativeAd = function () {}),
        (c.prototype.getNativeAdData = function () {
            return null;
        }),
        (c.prototype.reportAdShow = function () {}),
        (c.prototype.reportAdClick = function () {}),
        (c.prototype.createVideoAd = function () {}),
        (c.prototype.showVideoAd = function (t) {
            t && (l.default.inst.addDaily("video", 1), l.default.inst.addWeek("video", 1), t());
        }),
        (c.prototype.initInterstitialAd = function () {}),
        (c.prototype.showInterstitialAd = function () {
            return Promise.resolve(!0);
        }),
        (c.prototype.installShortcut = function () {}),
        (c.prototype.loadZip = function () {
            return Promise.resolve();
        }),
        (c.prototype.exitMiniProgram = function () {
            return !1;
        }),
        (c.prototype.setLoadingProgress = function () {}),
        (c.prototype.createGameBannerAd = function () {}),
        (c.prototype.showGameBannerAd = function () {}),
        (c.prototype.hideGameBannerAd = function () {}),
        (c.prototype.createGamePortalAd = function () {}),
        (c.prototype.canPay = function () {
            return !1;
        }),
        (c.prototype.pay = function () {
            return n(this, void 0, void 0, function () {
                return i(this, function () {
                    return [2];
                });
            });
        }),
        (c.prototype.canShare = function () {
            return !1;
        }),
        (c.prototype.setUid = function () {}),
        (c.prototype.initShare = function (t, e) {}),
        (c.prototype.share = function () {}),
        (c.prototype.shareForReward = function () {
            return Promise.resolve(!0);
        }),
        (c.prototype.setUserCloudStorage = function () {}),
        c);
function c() {
    (this.remote_url = ""),
        (this.host_url = "https://dino2test.328vip.com"),
        (this.videoId = ""),
        (this.nativeIds = []),
        (this.interstitialId = ""),
        (this.portalid = ""),
        (this.openCustomerService = function () {}),
        (this.isShowingVideoAd = !1),
        (this.isVibrate = !0),
        console.log("ApiBase api");
}
o.default = t;
