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
    e = t("ApiBase"),
    u = t("VivoBannerAd"),
    p = t("VivoRewardVideoAd"),
    i =
        ((s = e.default),
        i(h, s),
        (h.prototype.login = function (t) {
            void 0 === t && (t = 0),
                cc.sys.platform == cc.sys.VIVO_GAME &&
                    qg.login &&
                    (this.setLoadingProgress(0),
                    qg.login({
                        success: function (t) {
                            console.warn("qg.login:", JSON.stringify(t));
                        }
                    }));
        }),
        (h.prototype.onShow = function () {
            var t;
            cc.sys.platform == cc.sys.VIVO_GAME &&
                qg.onShow &&
                (qg.onShow(function (t) {
                    console.log("vivo onShow: ", JSON.stringify(t)),
                        t && (t.query, t.referrerInfo),
                        l.app.event.emit(c.EventType.On_Show);
                }),
                qg.showShareMenu && qg.showShareMenu({withShareTicket: !0}),
                (t = qg.getLaunchOptionsSync()) &&
                    (t.query, t.referrerInfo, console.log("launchOption", JSON.stringify(t))));
        }),
        (h.prototype.onHide = function () {
            cc.sys.platform == cc.sys.VIVO_GAME && qg.onHide && qg.onHide(function () {});
        }),
        (h.prototype.showLoading = function (t) {
            void 0 === t && (t = {}),
                cc.sys.platform == cc.sys.VIVO_GAME &&
                    qg.showLoading &&
                    qg.showLoading({title: t.title, mask: t.mask, success: function () {}});
        }),
        (h.prototype.hideLoading = function () {
            cc.sys.platform == cc.sys.VIVO_GAME && qg.hideLoading && qg.hideLoading({success: function () {}});
        }),
        (h.prototype.initBanerAd = function () {
            this._bannerAd || (this._bannerAd = new u.default(this.bannerIds));
        }),
        (h.prototype.showBanner = function (t) {
            this._bannerAd && this._bannerAd.show(t);
        }),
        (h.prototype.hideBanner = function () {
            this._bannerAd && this._bannerAd.hide();
        }),
        (h.prototype.destroyBanner = function () {
            this._bannerAd && this._bannerAd.destroy();
        }),
        (h.prototype.showInterstitialAd = function (t) {
            if (cc.sys.platform == cc.sys.VIVO_GAME && qg.createInterstitialAd) {
                t = qg.createInterstitialAd({posId: t || this.interstitialId});
                return (
                    t.onError(function (t) {
                        console.log("插屏广告加载失败", t);
                    }),
                    t.onClose(function (t) {
                        console.log("插屏广告关闭", t);
                    }),
                    t
                        .show()
                        .then(function () {
                            console.log("插屏广告展示完成");
                        })
                        .catch(function (t) {
                            console.log("插屏广告展示失败", JSON.stringify(t));
                        }),
                    Promise.resolve(!0)
                );
            }
        }),
        (h.prototype.showVideoAd = function (t, e, o) {
            cc.sys.platform == cc.sys.VIVO_GAME
                ? this._videoAd.showVideoAd({adUnitId: this.videoId, success: t, fail: e, error: o})
                : t && t();
        }),
        (h.prototype.createNativeAd = function () {
            var e = this;
            this.nativeIds.forEach(function (t) {
                e.nativeAds[t] = {ad: null, data: null, time: 0};
            });
        }),
        (h.prototype.getNativeAdData = function (t) {
            if (cc.director.getTotalTime() <= 2e4) return null;
            var e = this.nativeIds[t];
            console.log("nativeAd:", this.nativeAds[e]);
            t = this.nativeAds[e] ? this.nativeAds[e].data : null;
            return (!t || (this.nativeAds[e] && 3e4 <= Date.now() - this.nativeAds[e].time)) && this.nativeAdLoad(e), t;
        }),
        (h.prototype.nativeAdLoad = function (t) {
            var e = this.nativeAds[t];
            e &&
                (e.ad || this.createNewAd(t),
                console.warn("广告加载" + t),
                (e.time = Date.now()),
                e.ad
                    .load()
                    .then(function () {
                        console.warn("promise 回调：原生广告加载成功");
                    })
                    .catch(function (t) {
                        console.warn("promise 回调：原生广告加载失败 " + JSON.stringify(t));
                    }));
        }),
        (h.prototype.reportAdShow = function (t, e) {
            (t = this.nativeIds[t]), (t = this.nativeAds[t]);
            t && t.ad && t.ad.reportAdShow({adId: e});
        }),
        (h.prototype.reportAdClick = function (t, e) {
            var o = this.nativeIds[t],
                t = this.nativeAds[o];
            t && t.ad && (t.ad.reportAdClick({adId: e}), this.nativeAdLoad(o));
        }),
        (h.prototype.createNewAd = function (e) {
            var o = this,
                t = qg.createNativeAd({adUnitId: e});
            t.onLoad(function (t) {
                console.log("加载原生广告成功", "：" + JSON.stringify(t)),
                    t.adList &&
                        0 < t.adList.length &&
                        ((o.nativeAds[e].data = t.adList[0]), (o.nativeAds[e].time = Date.now())),
                    l.app.event.emit(c.EventType.Nativead_Load_Complete);
            }),
                (this.nativeAds[e].ad = t);
        }),
        (h.prototype.navigateToMiniProgram = function (t) {
            return r(this, void 0, void 0, function () {
                return a(this, function () {
                    return (
                        qg.navigateToMiniGame &&
                            qg.navigateToMiniGame({
                                pkgName: t.pkgName,
                                path: t.path,
                                extraData: t.extraData,
                                success: function () {},
                                fail: function () {}
                            }),
                        [2]
                    );
                });
            });
        }),
        (h.prototype.triggerGC = function () {
            qg.triggerGC && qg.triggerGC();
        }),
        (h.prototype.setEnableDebug = function (t) {
            qg.setEnableDebug
                ? qg.setEnableDebug({
                      enableDebug: !0,
                      success: function () {
                          console.log("test consol log");
                      },
                      complete: function () {
                          t && t();
                      },
                      fail: function () {}
                  })
                : t && t();
        }),
        (h.prototype.setKeepScreenOn = function (t) {
            void 0 === t && (t = !0),
                cc.sys.platform == cc.sys.VIVO_GAME && qg.setKeepScreenOn && qg.setKeepScreenOn(t);
        }),
        (h.prototype.requestSubscribeMessage = function () {}),
        (h.prototype.vibrateShort = function () {
            cc.sys.platform == cc.sys.VIVO_GAME && qg.vibrateShort && qg.vibrateShort({});
        }),
        (h.prototype.vibrateLong = function () {
            cc.sys.platform == cc.sys.VIVO_GAME && qg.vibrateLong && qg.vibrateLong({success: function () {}});
        }),
        (h.prototype.showToast = function (t) {
            console.log("提示：", t.title),
                cc.sys.platform == cc.sys.VIVO_GAME && qg.showToast && qg.showToast({message: t.title});
        }),
        (h.prototype.hideToast = function (t) {
            cc.sys.platform == cc.sys.VIVO_GAME && qg.hideToast && qg.hideToast(t);
        }),
        (h.prototype.showModal = function (t) {
            console.log("提示：", t.title), cc.sys.platform == cc.sys.VIVO_GAME && qg.showModal && qg.showModal(t);
        }),
        (h.prototype.installShortcut = function (e) {
            var o = this;
            cc.sys.platform == cc.sys.VIVO_GAME &&
                qg.hasShortcutInstalled &&
                qg.installShortcut &&
                !this.isInstall &&
                ((this.installTick = Date.now()),
                qg.hasShortcutInstalled({
                    success: function (t) {
                        console.warn("是否添加到桌面：", t),
                            0 == t
                                ? qg.installShortcut({
                                      success: function (t) {
                                          console.warn("创建桌面成功", t),
                                              e.success && e.success(0),
                                              (o.isInstall = !0);
                                      },
                                      fail: function (t) {
                                          console.warn("创建桌面失败", t);
                                      }
                                  })
                                : (o.isInstall = !0),
                            l.app.event.emit(c.EventType.Had_Install_Shortcut, !0);
                    },
                    fail: function () {},
                    complete: function () {
                        e.complete && e.complete();
                    }
                }));
        }),
        (h.prototype.setLoadingProgress = function (t) {
            qg &&
                qg.setLoadingProgress &&
                (qg.setLoadingProgress(t), 100 == t && qg.loadingComplete({complete: function () {}}));
        }),
        (h.prototype.exitMiniProgram = function () {
            return !(!qg || !qg.exitApplication || (qg.exitApplication(), 0));
        }),
        (h.prototype.getMenuButtonBoundingClientRect = function () {
            if (!qg.getMenuButtonBoundingClientRect)
                return {center: 60, width: 87, height: 32, top: 60, bottom: 42, left: 278, right: 365, ratio: 2};
            var t = qg.getMenuButtonBoundingClientRect();
            t.top || (t = {width: 87, height: 32, top: 60, bottom: 42, left: 278, right: 365});
            var e = cc.view.getFrameSize(),
                o = cc.winSize.width / e.width,
                e = Object.create({});
            return (
                (e.center = o * (t.top + 0.5 * t.height)),
                (e.ratio = o),
                (e = Object.assign(e, t)),
                console.log("胶囊位置：", JSON.stringify(e)),
                e
            );
        }),
        (h.prototype.loadZip = function (e, r, a) {
            return new Promise(function (o, n) {
                var t, i;
                cc.sys.platform != cc.sys.VIVO_GAME || !e || (null !== (t = l.app.storage) && void 0 !== t && t.read(r))
                    ? o()
                    : (console.log("加载压缩包:", e),
                      (i = qg.getFileSystemManager()),
                      qg
                          .downloadFile({
                              url: e,
                              success: function (t) {
                                  var e = t.tempFilePath;
                                  console.log(r + "下载成功"),
                                      i.unzip({
                                          zipFilePath: e,
                                          targetPath: qg.env.USER_DATA_PATH + "/gamecaches/res",
                                          success: function () {
                                              var t;
                                              null === (t = l.app.storage) || void 0 === t || t.save(r, "2"),
                                                  console.log(r + "解压完成"),
                                                  i.unlink({
                                                      filePath: e,
                                                      success: function () {
                                                          console.log(r + "删除zip成功");
                                                      }
                                                  }),
                                                  o();
                                          },
                                          fail: function () {
                                              n();
                                          }
                                      });
                              },
                              fail: function () {
                                  console.log("下载失败"), n();
                              },
                              complete: function () {
                                  o();
                              }
                          })
                          .onProgressUpdate(function (t) {
                              a && a(t.progress);
                          }));
            });
        }),
        (h.prototype.createGamePortalAd = function () {
            var t = this;
            qg &&
                qg.createGamePortalAd &&
                (console.warn("九宫格"),
                this.gamePortalAd ||
                    ((this.gamePortalAd = qg.createGamePortalAd({adUnitId: this.portalid})),
                    this.gamePortalAd.onLoad(function () {
                        t.gamePortalAd.show(), l.app.event.emit(c.EventType.Gameportal_Ad, !0);
                    }),
                    this.gamePortalAd.onClose(function () {
                        console.log("互推盒子九宫格广告关闭"), l.app.event.emit(c.EventType.Gameportal_Ad, !1);
                    })),
                this.gamePortalAd.load());
        }),
        (h.prototype.canPay = function () {
            return cc.sys.platform == cc.sys.VIVO_GAME;
        }),
        (h.prototype.pay = function (o) {
            return r(this, void 0, void 0, function () {
                var e = this;
                return a(this, function () {
                    return (
                        (this.payParam = o),
                        qg.login({
                            success: function (t) {
                                e.sendPayPreOrder(o.product_id, t.data.token);
                            },
                            fail: function () {
                                o.fail && o.fail();
                            }
                        }),
                        [2]
                    );
                });
            });
        }),
        (h.prototype.sendPayPreOrder = function (t, e) {
            console.warn("支付请求token:", e);
        }),
        (h.prototype.getPayResult = function () {
            return r(this, void 0, void 0, function () {
                return a(this, function () {
                    return this.checkCount <= 0 || console.warn("请求支付结果：", this.orderNo), [2];
                });
            });
        }),
        h);
function h() {
    var t = s.call(this) || this;
    return (
        (t.remote_url = "https://cdn-wxgame.328vip.com/1515/oppo/Dino2/res/"),
        (t.host_url = "https://dino2.oppo.328vip.com"),
        (t.videoId = "84d43c0ce22b4d00bb5573c338e97f61"),
        (t.bannerIds = ["d5af1857980a44648aa3ee7636ae8209"]),
        (t.nativeIds = ["24b9dba7554d42bd86c60721fef37c5a", "8515c767cd5a4f549509622a78e77419"]),
        (t.interstitialId = "1e570237e2ef4fe6bc2c6326dfe2b3ed"),
        (t.portalid = "299609"),
        (t._bannerAd = null),
        (t._videoAd = new p.default()),
        (t.nativeAds = {}),
        (t.postMessage = function () {}),
        (t.installTick = 0),
        (t.isInstall = !1),
        (t.payParam = null),
        (t.checkCount = 0),
        (t.orderNo = ""),
        t.onShow(),
        t.onHide(),
        t
    );
}
o.default = i;
