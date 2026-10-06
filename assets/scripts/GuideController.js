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
Object.defineProperty(o, "__esModule", {value: !0}), (o.GuideController = void 0);
var r = t("App"),
    a = t("LayerMgr"),
    s = t("DelayUtil"),
    l = t("EventTypes"),
    c = t("UIEnum"),
    u = t("ConfData"),
    t =
        (Object.defineProperty(p.prototype, "isNewPlayer", {
            get: function () {
                return this._isNewPlayer;
            },
            set: function (t) {
                this._isNewPlayer = t;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "guideVo", {
            get: function () {
                return this._guideVo;
            },
            enumerable: !1,
            configurable: !0
        }),
        (p.prototype.setView = function (t) {
            this._view = t;
        }),
        (p.prototype.init = function () {
            (this._guide = r.app.local.getValue("guide")),
                (function () {
                    try {
                        if (
                            "undefined" != typeof location &&
                            /(?:\?|&)v2lobby=1(?:&|$)/.test(location.search || "")
                        )
                            (this._guide.Novicepass = 1),
                                r.app.local.setValue("guide", this._guide),
                                console.log("[V2] preview: skip novice → HomeView");
                    } catch (t) {}
                }.call(this)),
                0 == this._guide.Novicepass && (this._isNewPlayer = !0),
                r.app.event.on(l.EventType.On_View_Show, this.onViewShow, this),
                r.app.event.on(l.EventType.On_View_Hide, this.onViewHide, this);
        }),
        (p.prototype.setGuide = function (t, e) {
            (this._guide[t] = e), r.app.local.setValue("guide", this._guide);
        }),
        (p.prototype.getGuide = function (t) {
            return this._guide[t] || 0;
        }),
        (p.prototype.onViewShow = function (t) {
            this._guideVo && this._guideVo.view == t && this.guideStart();
        }),
        (p.prototype.onViewHide = function (t) {
            console.log("关闭", t, this._guideVo), this._guideVo && this._guideVo.view == t && this.guideStart();
        }),
        (p.prototype.initGroup = function (e) {
            return n(this, void 0, void 0, function () {
                return i(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (this.list = u.default.inst.guideConf.getGuideList(e)),
                                console.log("指引列表", this.list),
                                this._view ? [3, 2] : [4, r.app.gui.openUI(c.UIEnum.GuideView, a.LayerEnum.TOP_LAYER)]
                            );
                        case 1:
                            t.sent(), (t.label = 2);
                        case 2:
                            return [4, s.default.delay(0.1, this)];
                        case 3:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (p.prototype.guideStart = function () {
            this._guideVo && this._view.setData(this._guideVo);
        }),
        (p.prototype.guideFinish = function () {
            var t;
            (this._guideVo = null) === (t = this._view) || void 0 === t || t.clearView();
        }),
        (p.prototype.guideNext = function () {
            var t = this._guideVo;
            this.guideFinish(),
                this.list &&
                    0 < this.list.length &&
                    ((this._guideVo = this.list.shift()),
                    console.warn("下一指引", this._guideVo),
                    t && t.next && this.guideStart());
        }),
        p);
function p() {
    (this._isNewPlayer = !1), (this.list = null), (this._guideVo = null), (this.uuid = ""), (this._view = null);
}
o.GuideController = new t();
