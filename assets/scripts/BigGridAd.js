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
    r =
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
            if (!l.default.isEmpty(this._adUnitIds))
                for (
                    var t = wx.getSystemInfoSync(),
                        e = t.windowWidth,
                        o = t.windowHeight,
                        n = s.app.platform.getMenuButtonBoundingClientRect(),
                        i = 0,
                        r = this._adUnitIds.length;
                    i < r;
                    i++
                ) {
                    var a = {
                        customAd: null,
                        adUnitId: this._adUnitIds[i],
                        isLoad: !1,
                        isError: !1,
                        errorCount: 0,
                        style: {left: (e - 360) >> 1, top: 667 < o ? n.bottom + 30 : n.bottom + 10, width: 360}
                    };
                    this._customAds.push(a), this._create(a);
                }
        }),
        (n.prototype._create = function (n) {
            return i(this, void 0, void 0, function () {
                var o = this;
                return r(this, function () {
                    return [
                        2,
                        new Promise(function (e) {
                            console.warn("大格子 _create", n.adUnitId),
                                (n.isError = !1),
                                (n.isLoad = !1),
                                (n.customAd = wx.createCustomAd({
                                    adUnitId: n.adUnitId,
                                    adIntervals: 60,
                                    style: n.style
                                })),
                                n.customAd.onLoad(function () {
                                    console.warn("大格子:成功", n.adUnitId),
                                        (n.isLoad = !0),
                                        o.isShow && n.customAd.show(),
                                        e();
                                }),
                                n.customAd.onError(function (t) {
                                    console.warn("大格子:失败", n.adUnitId, t.errCode, t.errMsg),
                                        (n.errorCount += 1),
                                        n.customAd && n.customAd.destroy(),
                                        (n.customAd = null),
                                        n.errorCount < 3 ? o._create(n) : ((n.isError = !0), e());
                                });
                        })
                    ];
                });
            });
        }),
        (n.prototype.show = function () {
            this.isShow ||
                ((this.isShow = !0),
                console.warn("调起大格子："),
                (this._curAd = this._customAds[this._index]),
                this._curAd &&
                    (this._curAd.isLoad
                        ? this._curAd.customAd && this._curAd.customAd.show()
                        : this._curAd.isError && ((this._curAd.errorCount = 0), this._create(this._curAd))));
        }),
        (n.prototype.hide = function () {
            this.isShow &&
                ((this.isShow = !1),
                this._curAd && this._curAd.customAd && this._curAd.customAd.hide(),
                (this._index = (this._index + 1) % this._adUnitIds.length),
                (this._curAd = null));
        }),
        n);
function n(t) {
    (this._adUnitIds = null),
        (this._index = 0),
        (this._customAds = []),
        (this.isShow = !1),
        (this._curAd = null),
        (this._adUnitIds = t),
        this._createAd();
}
o.default = t;
