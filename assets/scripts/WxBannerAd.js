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
(n.prototype._createAd = function () {
    return i(this, void 0, void 0, function () {
        var e, o, n, i;
        return r(this, function (t) {
            switch (t.label) {
                case 0:
                    (n = this.sysInfo.windowHeight - this.readHight),
                        (i = this.sysInfo.windowWidth),
                        (e = {top: n, width: i, left: 0}),
                        (o = 0),
                        (n = this._adUnitIds.length),
                        (t.label = 1);
                case 1:
                    return o < n
                        ? ((i = this._adUnitIds[o]),
                          (i = {
                              customAd: null,
                              adUnitId: i,
                              isLoad: !1,
                              isError: !1,
                              errorCount: 0,
                              showCount: 0,
                              readHight: this.readHight,
                              style: e
                          }),
                          this.banners.push(i),
                          [4, this._create(i)])
                        : [3, 4];
                case 2:
                    t.sent(), (t.label = 3);
                case 3:
                    return o++, [3, 1];
                case 4:
                    return [2];
            }
        });
    });
}),
    (n.prototype._create = function (n) {
        return i(this, void 0, void 0, function () {
            var o = this;
            return r(this, function () {
                return [
                    2,
                    new Promise(function (e) {
                        console.warn("banner _create", n.adUnitId),
                            (n.customAd = null),
                            (n.isError = !1),
                            (n.isLoad = !1);
                        var t = {};
                        (t.adUnitId = n.adUnitId),
                            (t.style = n.style),
                            (t.adIntervals = o.data.banner_refresh_time || 60),
                            (n.customAd = wx.createBannerAd(t)),
                            n.customAd.onLoad(function () {
                                (n.isLoad = !0),
                                    console.warn("banner this.isShow:", o.isShow),
                                    o.isShow && !o._curAd && o._showAd(n),
                                    e();
                            }),
                            n.customAd.onError(function (t) {
                                console.warn("banner onError:", t), (n.errorCount += 1), (n.isError = !0), e();
                            }),
                            n.customAd.onResize(function (t) {
                                (n.readHight = t.height),
                                    console.warn("banner onResize", t, n.customAd.style),
                                    (n.style.top = o.sysInfo.windowHeight - n.readHight),
                                    (n.customAd.style = n.style);
                            });
                    })
                ];
            });
        });
    }),
    (n.prototype.show = function () {
        if (!this._curAd) {
            console.warn("banner show");
            for (
                var t = !1, e = 0, o = this.banners.length;
                e < o && ((t = this._show()), (this.showIndex = (this.showIndex + 1) % this.banners.length), !t);
                e++
            );
            t || this._reLoad();
        }
    }),
    (n.prototype._show = function () {
        this.isShow = !0;
        var t = this.banners[this.showIndex];
        return !!t.isLoad && (this._showAd(t, t.style), !0);
    }),
    (n.prototype._reLoad = function () {
        return i(this, void 0, void 0, function () {
            var e, o;
            return r(this, function (t) {
                switch (t.label) {
                    case 0:
                        (e = 0), (o = this.banners.length), (t.label = 1);
                    case 1:
                        return e < o ? (this.banners[e].isLoad ? [3, 3] : [4, this._create(this.banners[e])]) : [3, 4];
                    case 2:
                        t.sent(), (t.label = 3);
                    case 3:
                        return e++, [3, 1];
                    case 4:
                        return [2];
                }
            });
        });
    }),
    (n.prototype._showAd = function (t) {
        t &&
            t.customAd &&
            (t.customAd.show(),
            (t.showCount += 1),
            (this._curAd = t),
            (this.isShow = !1),
            console.warn("banner _showAd", t.showCount));
    }),
    (n.prototype.hide = function () {
        console.warn("banner hide"),
            this._curAd && this._curAd.customAd && this._curAd.customAd.hide(),
            (this._curAd = null),
            (this.isShow = !1);
    }),
    (n.prototype.destroy = function () {
        var e = this;
        this.banners.forEach(function (t) {
            t.isLoad &&
                t.showCount >= e.data.banner_recreate_num &&
                (t.customAd && t.customAd.hide() && t.customAd.destroy(),
                (t.showCount = 0),
                (t.isLoad = !1),
                e._create(t));
        });
    }),
    (e = n);
function n(t, e) {
    (this.data = e),
        (this._adUnitIds = []),
        (this.readHight = 135),
        (this.banners = []),
        (this.isShow = !1),
        (this._curAd = null),
        (this.showIndex = 0),
        (this._adUnitIds = t),
        (this.sysInfo = wx.getSystemInfoSync()),
        this._createAd();
}
o.default = e;
