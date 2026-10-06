var t = require;
var e = module;
var o = exports;
var i =
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
var s = t("App"),
    l = t("ArrayUtil"),
    t =
        ((n.prototype._createAd = function () {
            return i(this, void 0, void 0, function () {
                var e, o, n, i, r;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (l.default.isEmpty(this._adUnitIds) || !wx.createInterstitialAd) return [2];
                            (e = s.app.platform.getMenuButtonBoundingClientRect()),
                                (o = !1),
                                (n = 0),
                                (i = this._adUnitIds.length),
                                (t.label = 1);
                        case 1:
                            return n < i
                                ? ((r = {
                                      customAd: null,
                                      adUnitId: this._adUnitIds[n],
                                      isLoad: !1,
                                      isError: !1,
                                      errorCount: 0,
                                      style: {left: 5, top: e.bottom + 300}
                                  }),
                                  this._customAds.push(r),
                                  o ? [3, 3] : [4, this._create(r)])
                                : [3, 5];
                        case 2:
                            t.sent(), (t.label = 3);
                        case 3:
                            r.isLoad && (o = !0), (t.label = 4);
                        case 4:
                            return n++, [3, 1];
                        case 5:
                            return [2];
                    }
                });
            });
        }),
        (n.prototype._create = function (n) {
            return i(this, void 0, void 0, function () {
                var o = this;
                return a(this, function () {
                    return [
                        2,
                        new Promise(function (e) {
                            console.warn("插屏广告 _create", n.adUnitId),
                                (n.isError = !1),
                                (n.isLoad = !1),
                                n.customAd && n.customAd.destroy(),
                                (n.customAd = wx.createInterstitialAd({adUnitId: n.adUnitId})),
                                n.customAd.onLoad(function () {
                                    console.warn("插屏广告:成功", n.adUnitId), (n.isLoad = !0), e();
                                }),
                                n.customAd.onClose(function () {
                                    console.log("插屏广告关闭"), (o.isShow = !1), o._reLoad();
                                }),
                                n.customAd.onError(function (t) {
                                    (n.isError = !0),
                                        (o.isShow = !1),
                                        console.warn("插屏广告:失败", n.adUnitId, t),
                                        o.destroyAd(n),
                                        e();
                                });
                        })
                    ];
                });
            });
        }),
        (n.prototype.show = function () {
            var n = this;
            return new Promise(function (e) {
                var o;
                n.isShow
                    ? e(!0)
                    : ((n.isShow = !0),
                      (o = n._customAds.find(function (t) {
                          return t.customAd && t.isLoad;
                      }))
                          ? (console.warn("调起插屏广告："),
                            o.customAd
                                .show()
                                .then(function () {
                                    e(!0), console.log("插屏广告展示完成");
                                })
                                .catch(function (t) {
                                    console.log("插屏广告展示失败", JSON.stringify(t)), n.destroyAd(o), e(!1);
                                }))
                          : ((n.isShow = !1), n._reLoad(), e(!1)));
            });
        }),
        (n.prototype._reLoad = function () {
            return i(this, void 0, void 0, function () {
                var e, o;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (
                                (console.warn("重载插屏广告："),
                                this._customAds.find(function (t) {
                                    return t.customAd && t.isLoad;
                                }))
                            )
                                return [2];
                            (e = 0), (o = this._customAds.length), (t.label = 1);
                        case 1:
                            return e < o ? [4, this._create(this._customAds[e])] : [3, 4];
                        case 2:
                            if ((t.sent(), this._customAds[e].isLoad)) return [3, 4];
                            t.label = 3;
                        case 3:
                            return e++, [3, 1];
                        case 4:
                            return [2];
                    }
                });
            });
        }),
        (n.prototype.destroyAd = function (t) {
            t && ((t.isLoad = !1), t.customAd && t.customAd.destroy(), (t.customAd = null), (this.isShow = !1));
        }),
        n);
function n(t) {
    (this._adUnitIds = null), (this._customAds = []), (this.isShow = !1), (this._adUnitIds = t), this._createAd();
}
o.default = t;
